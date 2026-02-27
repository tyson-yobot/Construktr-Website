import { pgTable, text, timestamp, boolean, serial } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  source: text("source").notNull(), // e.g., "website-newsletter", "blog-cta", "exit-intent"
  isConfirmed: boolean("is_confirmed").default(false),
  confirmationToken: text("confirmation_token"),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
  confirmedAt: timestamp("confirmed_at"),
  unsubscribedAt: timestamp("unsubscribed_at"),
  unsubscribeToken: text("unsubscribe_token"),
  metadata: text("metadata"), // JSON string for additional data
});

// Zod schemas for validation
export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
  confirmedAt: true,
  unsubscribedAt: true,
  confirmationToken: true,
  unsubscribeToken: true,
});

export const selectNewsletterSubscriptionSchema = createSelectSchema(newsletterSubscriptions);

// Types
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;

// API request/response schemas
export const subscribeRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
  source: z.string().min(1, "Source is required"),
  doubleOptIn: z.boolean().default(true),
  metadata: z.record(z.any()).optional(),
});

export const confirmSubscriptionSchema = z.object({
  token: z.string().min(1, "Confirmation token is required"),
});

export const unsubscribeSchema = z.object({
  token: z.string().min(1, "Unsubscribe token is required"),
});

export type SubscribeRequest = z.infer<typeof subscribeRequestSchema>;
export type ConfirmSubscriptionRequest = z.infer<typeof confirmSubscriptionSchema>;
export type UnsubscribeRequest = z.infer<typeof unsubscribeSchema>;