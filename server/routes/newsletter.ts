import { Router } from 'express';
import { z } from 'zod';
import crypto from 'crypto';
import { eq, and, isNull } from 'drizzle-orm';
import { db } from '../db';
import { newsletterSubscriptions } from '../../shared/schema';

// Newsletter API schemas
const subscribeRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
  source: z.string().min(1, "Source is required"),
  doubleOptIn: z.boolean().default(true),
  metadata: z.record(z.any()).optional(),
});

const confirmSubscriptionSchema = z.object({
  token: z.string().min(1, "Confirmation token is required"),
});

const unsubscribeSchema = z.object({
  token: z.string().min(1, "Unsubscribe token is required"),
});

type SubscribeRequest = z.infer<typeof subscribeRequestSchema>;

const router = Router();

// Generate secure random token
function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Send confirmation email (placeholder - would integrate with SendGrid, ConvertKit, etc.)
async function sendConfirmationEmail(email: string, confirmationToken: string) {
  // In production, this would send an actual email
  console.log(`Confirmation email for ${email}: ${process.env.BASE_URL || 'http://localhost:5000'}/api/newsletter/confirm?token=${confirmationToken}`);
  
  // For development, just log the confirmation URL
  // In production, you'd integrate with SendGrid, ConvertKit, Mailchimp, etc.
  return true;
}

// Send welcome email after confirmation
async function sendWelcomeEmail(email: string) {
  console.log(`Welcome email sent to ${email}`);
  return true;
}

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const data = subscribeRequestSchema.parse(req.body) as SubscribeRequest;
    
    // Check if email already exists
    const existingSubscription = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, data.email))
      .limit(1);

    if (existingSubscription.length > 0) {
      const subscription = existingSubscription[0];
      
      if (subscription.isConfirmed) {
        return res.status(409).json({
          message: "You're already subscribed to our newsletter!",
          status: 'already_subscribed'
        });
      }
      
      // If not confirmed, resend confirmation email
      if (subscription.confirmationToken) {
        await sendConfirmationEmail(data.email, subscription.confirmationToken);
        return res.json({
          message: "Confirmation email resent. Please check your inbox.",
          status: 'confirmation_resent'
        });
      }
    }

    // Generate tokens
    const confirmationToken = generateToken();
    const unsubscribeToken = generateToken();

    // Insert or update subscription
    const subscriptionData = {
      email: data.email,
      source: data.source,
      isConfirmed: !data.doubleOptIn,
      confirmationToken: data.doubleOptIn ? confirmationToken : null,
      unsubscribeToken,
      metadata: data.metadata ? JSON.stringify(data.metadata) : null,
    };

    if (existingSubscription.length > 0) {
      // Update existing subscription
      await db
        .update(newsletterSubscriptions)
        .set(subscriptionData)
        .where(eq(newsletterSubscriptions.email, data.email));
    } else {
      // Create new subscription
      await db
        .insert(newsletterSubscriptions)
        .values(subscriptionData);
    }

    // Send confirmation email for double opt-in
    if (data.doubleOptIn) {
      await sendConfirmationEmail(data.email, confirmationToken);
      
      res.json({
        message: "Please check your email to confirm your subscription.",
        status: 'confirmation_sent'
      });
    } else {
      // Single opt-in - send welcome email immediately
      await sendWelcomeEmail(data.email);
      
      res.json({
        message: "Successfully subscribed to the newsletter!",
        status: 'subscribed'
      });
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Invalid request data",
        errors: error.errors
      });
    }
    
    res.status(500).json({
      message: "Failed to process subscription. Please try again."
    });
  }
});

// Confirm email subscription
router.get('/confirm', async (req, res) => {
  try {
    const { token } = confirmSubscriptionSchema.parse(req.query);
    
    // Find subscription by confirmation token
    const subscription = await db
      .select()
      .from(newsletterSubscriptions)
      .where(
        and(
          eq(newsletterSubscriptions.confirmationToken, token),
          eq(newsletterSubscriptions.isConfirmed, false)
        )
      )
      .limit(1);

    if (subscription.length === 0) {
      return res.status(404).send(`
        <html>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>Invalid or Expired Link</h1>
            <p>This confirmation link is invalid or has already been used.</p>
            <a href="${process.env.BASE_URL || 'http://localhost:5000'}" style="color: #3b82f6;">Return to CONSTRUKTR</a>
          </body>
        </html>
      `);
    }

    // Update subscription as confirmed
    await db
      .update(newsletterSubscriptions)
      .set({
        isConfirmed: true,
        confirmedAt: new Date(),
        confirmationToken: null // Clear the token after use
      })
      .where(eq(newsletterSubscriptions.confirmationToken, token));

    // Send welcome email
    await sendWelcomeEmail(subscription[0].email);

    // Return success page
    res.send(`
      <html>
        <head>
          <title>Subscription Confirmed - CONSTRUKTR</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .container { max-width: 500px; margin: 0 auto; background: white; color: #333; padding: 40px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .success { color: #10b981; font-size: 48px; margin-bottom: 20px; }
            h1 { color: #1f2937; margin-bottom: 20px; }
            p { margin-bottom: 20px; line-height: 1.6; }
            .btn { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success">✅</div>
            <h1>Welcome to CONSTRUKTR!</h1>
            <p>Your subscription has been confirmed successfully.</p>
            <p>You'll now receive weekly contractor business tips, industry insights, and exclusive updates to help grow your business.</p>
            <a href="${process.env.BASE_URL || 'http://localhost:5000'}" class="btn">Visit CONSTRUKTR</a>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Newsletter confirmation error:', error);
    res.status(500).send(`
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>Error</h1>
          <p>Failed to confirm subscription. Please try again.</p>
          <a href="${process.env.BASE_URL || 'http://localhost:5000'}" style="color: #3b82f6;">Return to CONSTRUKTR</a>
        </body>
      </html>
    `);
  }
});

// Unsubscribe from newsletter
router.get('/unsubscribe', async (req, res) => {
  try {
    const { token } = unsubscribeSchema.parse(req.query);
    
    // Find subscription by unsubscribe token
    const subscription = await db
      .select()
      .from(newsletterSubscriptions)
      .where(
        and(
          eq(newsletterSubscriptions.unsubscribeToken, token),
          eq(newsletterSubscriptions.isConfirmed, true)
        )
      )
      .limit(1);

    if (subscription.length === 0) {
      return res.status(404).send(`
        <html>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>Invalid Unsubscribe Link</h1>
            <p>This unsubscribe link is invalid or has already been used.</p>
            <a href="${process.env.BASE_URL || 'http://localhost:5000'}" style="color: #3b82f6;">Return to CONSTRUKTR</a>
          </body>
        </html>
      `);
    }

    // Mark as unsubscribed
    await db
      .update(newsletterSubscriptions)
      .set({
        unsubscribedAt: new Date()
      })
      .where(eq(newsletterSubscriptions.unsubscribeToken, token));

    // Return unsubscribe confirmation page
    res.send(`
      <html>
        <head>
          <title>Unsubscribed - CONSTRUKTR</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f9fafb; }
            .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            h1 { color: #1f2937; margin-bottom: 20px; }
            p { margin-bottom: 20px; line-height: 1.6; color: #6b7280; }
            .btn { background: #3b82f6; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Successfully Unsubscribed</h1>
            <p>You have been unsubscribed from the CONSTRUKTR newsletter.</p>
            <p>We're sorry to see you go! If you change your mind, you can always subscribe again on our website.</p>
            <a href="${process.env.BASE_URL || 'http://localhost:5000'}" class="btn">Visit CONSTRUKTR</a>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).send(`
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>Error</h1>
          <p>Failed to process unsubscribe request. Please try again.</p>
          <a href="${process.env.BASE_URL || 'http://localhost:5000'}" style="color: #3b82f6;">Return to CONSTRUKTR</a>
        </body>
      </html>
    `);
  }
});

// Get subscription stats (admin endpoint)
router.get('/stats', async (req, res) => {
  try {
    const [totalSubscriptions] = await db
      .select({ count: newsletterSubscriptions.id })
      .from(newsletterSubscriptions);
      
    const [confirmedSubscriptions] = await db
      .select({ count: newsletterSubscriptions.id })
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.isConfirmed, true));
      
    const [unsubscribedCount] = await db
      .select({ count: newsletterSubscriptions.id })
      .from(newsletterSubscriptions)
      .where(isNull(newsletterSubscriptions.unsubscribedAt));

    res.json({
      total: totalSubscriptions?.count || 0,
      confirmed: confirmedSubscriptions?.count || 0,
      active: unsubscribedCount?.count || 0
    });
  } catch (error) {
    console.error('Newsletter stats error:', error);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
});

export default router;