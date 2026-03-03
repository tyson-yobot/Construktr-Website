import express from "express";
import type { Request, Response } from "express";
import { storage } from "../server/storage";
import { insertLeadSchema, insertLeadMagnetSchema } from "../shared/schema";
import { createCheckoutSession, retrieveCheckoutSession } from "../server/stripe";
import { sendLeadNotification, sendPaymentNotification, sendDemoNotification } from "../server/slack";
import { processWebhooks, addToNewsletter } from "../server/webhooks";
import { generateQuotePDF, generateInvoicePDF } from "../server/pdf";
import newsletterRoutes from "../server/routes/newsletter";
import { promoRoutes } from "../server/routes/promo";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Lead creation API
app.post("/api/leads", async (req: Request, res: Response) => {
  try {
    const leadData = insertLeadSchema.parse(req.body);
    const lead = await storage.createLead(leadData);

    await sendLeadNotification({
      email: lead.email,
      name: lead.name || undefined,
      company: lead.company || undefined,
      source: lead.source,
      message: lead.message || undefined,
    });

    await processWebhooks("lead_created", lead);

    if (req.body.subscribeToNewsletter) {
      await addToNewsletter(lead.email, lead.source, ["lead"]);
      await storage.createNewsletterSubscription({
        email: lead.email,
        source: lead.source,
        tags: ["lead"],
      });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error("Lead creation failed:", error);
    res.status(400).json({ error: "Failed to create lead" });
  }
});

// Demo request API
app.post("/api/demo-request", async (req: Request, res: Response) => {
  try {
    const { email, name, company, requestedDate, message } = req.body;
    
    const lead = await storage.createLead({
      email,
      name,
      company,
      source: "demo",
      message: message || `Demo requested for: ${requestedDate}`,
      metadata: { requestedDate },
    });

    await sendDemoNotification({ email, name, company, requestedDate });
    await processWebhooks("lead_created", lead);

    res.json({ success: true, message: "Demo request submitted successfully" });
  } catch (error) {
    console.error("Demo request failed:", error);
    res.status(400).json({ error: "Failed to submit demo request" });
  }
});

// Newsletter subscription API
app.post("/api/newsletter", async (req: Request, res: Response) => {
  try {
    const { email, source = "newsletter", tags = [] } = req.body;
    
    await storage.createNewsletterSubscription({ email, source, tags });
    await addToNewsletter(email, source, tags);

    res.json({ success: true, message: "Successfully subscribed to newsletter" });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    res.status(400).json({ error: "Failed to subscribe to newsletter" });
  }
});

// Lead magnet capture API
app.post("/api/lead-magnets", async (req: Request, res: Response) => {
  try {
    const leadMagnetData = insertLeadMagnetSchema.parse(req.body);
    const leadMagnet = await storage.createLeadMagnet(leadMagnetData);

    await sendLeadNotification({
      email: leadMagnet.email,
      name: leadMagnet.name || undefined,
      company: leadMagnet.company || undefined,
      source: leadMagnet.source || "lead-magnet",
      message: `Downloaded lead magnet: ${leadMagnet.magnet}`,
    });

    await processWebhooks("lead_magnet_created", leadMagnet);
    await addToNewsletter(leadMagnet.email, leadMagnet.source || "lead-magnet", ["lead-magnet", leadMagnet.magnet]);
    await storage.createNewsletterSubscription({
      email: leadMagnet.email,
      source: leadMagnet.source || "lead-magnet",
      tags: ["lead-magnet", leadMagnet.magnet],
    });

    res.json({ success: true, leadMagnet, downloadUrl: `/downloads/${leadMagnet.magnet}.pdf` });
  } catch (error) {
    console.error("Lead magnet capture failed:", error);
    res.status(400).json({ error: "Failed to capture lead magnet" });
  }
});

// Stripe checkout
app.post("/api/create-checkout", async (req: Request, res: Response) => {
  try {
    const { plan, email } = req.body;
    if (!["starter", "pro", "enterprise"].includes(plan)) {
      return res.status(400).json({ error: "Invalid plan" });
    }

    const session = await createCheckoutSession(
      plan,
      email,
      `${req.protocol}://${req.get('host')}/success`,
      `${req.protocol}://${req.get('host')}/pricing`
    );

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Checkout session creation failed:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// Payment success
app.get("/api/payment/success/:sessionId", async (req: Request, res: Response) => {
  try {
    const session = await retrieveCheckoutSession(req.params.sessionId);
    
    if (session.payment_status === "paid") {
      const payment = await storage.createPayment({
        stripePaymentId: session.payment_intent as string,
        email: session.customer_details?.email || "",
        amount: (session.amount_total! / 100).toString(),
        status: "completed",
        plan: session.metadata?.plan || "",
        metadata: session,
      });

      await sendPaymentNotification({
        email: payment.email,
        amount: payment.amount,
        plan: payment.plan || "",
        stripePaymentId: payment.stripePaymentId || "",
      });

      await processWebhooks("payment_completed", payment);
      res.json({ success: true, payment });
    } else {
      res.status(400).json({ error: "Payment not completed" });
    }
  } catch (error) {
    console.error("Payment success handling failed:", error);
    res.status(500).json({ error: "Failed to process payment success" });
  }
});

// PDF generation
app.post("/api/generate-quote", async (req: Request, res: Response) => {
  try {
    const pdfBuffer = await generateQuotePDF(req.body);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="quote.pdf"');
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Quote PDF generation failed:", error);
    res.status(500).json({ error: "Failed to generate quote PDF" });
  }
});

app.post("/api/generate-invoice", async (req: Request, res: Response) => {
  try {
    const pdfBuffer = await generateInvoicePDF(req.body);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="invoice.pdf"');
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Invoice PDF generation failed:", error);
    res.status(500).json({ error: "Failed to generate invoice PDF" });
  }
});

// Analytics
app.get("/api/analytics/leads", async (_req: Request, res: Response) => {
  try {
    const leads = await storage.getLeads();
    res.json({
      total: leads.length,
      bySource: leads.reduce((acc, lead) => {
        acc[lead.source] = (acc[lead.source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      processed: leads.filter(l => l.processed).length,
      recent: leads.filter(l => 
        l.createdAt && new Date(l.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      ).length,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

app.get("/api/analytics/payments", async (_req: Request, res: Response) => {
  try {
    const payments = await storage.getPayments();
    res.json({
      total: payments.length,
      revenue: payments.filter(p => p.status === "completed").reduce((sum, p) => sum + parseFloat(p.amount), 0),
      byPlan: payments.reduce((acc, p) => {
        const plan = p.plan || "unknown";
        acc[plan] = (acc[plan] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payment analytics" });
  }
});

app.get("/api/webhook-logs", async (req: Request, res: Response) => {
  try {
    const service = req.query.service as string;
    const logs = await storage.getWebhookLogs(service);
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch webhook logs" });
  }
});

// Newsletter and promo sub-routes
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/promo", promoRoutes);

// Export for Vercel
export default app;
