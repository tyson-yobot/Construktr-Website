import Stripe from "stripe";

// Initialize Stripe - will work when secrets are provided
let stripe: Stripe | null = null;

if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-07-30.basil",
  });
}

export const stripeClient = stripe;

// Pricing configuration
export const PRICING_PLANS = {
  starter: {
    name: "Starter Plan",
    price: 4900, // $49.00 in cents
    interval: "month",
    features: ["Basic features", "Email support", "Up to 100 jobs"]
  },
  pro: {
    name: "Pro Plan", 
    price: 9900, // $99.00 in cents
    interval: "month",
    features: ["All Starter features", "Priority support", "Unlimited jobs", "Advanced analytics"]
  },
  enterprise: {
    name: "Enterprise Plan",
    price: 19900, // $199.00 in cents
    interval: "month",
    features: ["All Pro features", "Custom integrations", "Dedicated support", "White-label options"]
  }
};

export async function createCheckoutSession(
  plan: keyof typeof PRICING_PLANS,
  customerEmail?: string,
  successUrl?: string,
  cancelUrl?: string
) {
  if (!stripe) {
    throw new Error("Stripe not configured. Please set STRIPE_SECRET_KEY environment variable.");
  }

  const planConfig = PRICING_PLANS[plan];
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: planConfig.name,
            description: planConfig.features.join(", "),
          },
          unit_amount: planConfig.price,
          recurring: {
            interval: planConfig.interval as "month",
          },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: successUrl || `${process.env.BASE_URL || 'http://localhost:5000'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: cancelUrl || `${process.env.BASE_URL || 'http://localhost:5000'}/pricing`,
    customer_email: customerEmail,
    metadata: {
      plan: plan,
    },
  });

  return session;
}

export async function retrieveCheckoutSession(sessionId: string) {
  if (!stripe) {
    throw new Error("Stripe not configured.");
  }
  
  return await stripe.checkout.sessions.retrieve(sessionId);
}

export async function constructWebhookEvent(body: string, sig: string) {
  if (!stripe) {
    throw new Error("Stripe not configured.");
  }

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!endpointSecret) {
    throw new Error("Stripe webhook secret not configured.");
  }

  return stripe.webhooks.constructEvent(body, sig, endpointSecret);
}