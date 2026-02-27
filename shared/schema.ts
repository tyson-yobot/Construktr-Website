import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, decimal, jsonb, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Leads table for tracking demo requests and contact forms
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  name: text("name"),
  company: text("company"),
  phone: text("phone"),
  source: text("source").notNull(), // 'demo', 'contact', 'newsletter', 'pricing'
  message: text("message"),
  metadata: jsonb("metadata"), // Additional form data
  createdAt: timestamp("created_at").defaultNow(),
  processed: boolean("processed").default(false),
});

// Payments table for Stripe transactions
export const payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  stripePaymentId: text("stripe_payment_id").unique(),
  email: text("email").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  currency: text("currency").default("usd"),
  status: text("status").notNull(), // 'pending', 'completed', 'failed'
  plan: text("plan"), // 'starter', 'pro', 'enterprise'
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Newsletter subscriptions with double opt-in support
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

// Legacy newsletter table for backward compatibility
export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  status: text("status").default("active"), // 'active', 'unsubscribed'
  source: text("source"), // Which page/form they subscribed from
  tags: text("tags").array(), // For segmentation
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Lead magnets for tracking PDF downloads and email captures
export const leadMagnets = pgTable("lead_magnets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  name: text("name"),
  company: text("company"),
  magnet: text("magnet").notNull(), // 'ai-toolkit', 'time-saving-checklist', 'pricing-guide'
  source: text("source"), // Page where they signed up
  downloaded: boolean("downloaded").default(false),
  downloadedAt: timestamp("downloaded_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Webhook logs for tracking integrations
export const webhookLogs = pgTable("webhook_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  service: text("service").notNull(), // 'airtable', 'hubspot', 'qbo', 'slack'
  event: text("event").notNull(), // 'lead_created', 'payment_completed', etc.
  payload: jsonb("payload"),
  response: jsonb("response"),
  status: text("status").notNull(), // 'success', 'failed'
  error: text("error"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  email: true,
  name: true,
  company: true,
  phone: true,
  source: true,
  message: true,
  metadata: true,
});

export const insertPaymentSchema = createInsertSchema(payments).pick({
  stripePaymentId: true,
  email: true,
  amount: true,
  currency: true,
  status: true,
  plan: true,
  metadata: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  email: true,
  source: true,
  tags: true,
});

export const insertLeadMagnetSchema = createInsertSchema(leadMagnets).pick({
  email: true,
  name: true,
  company: true,
  magnet: true,
  source: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type Payment = typeof payments.$inferSelect;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;
export type InsertLeadMagnet = z.infer<typeof insertLeadMagnetSchema>;
export type LeadMagnet = typeof leadMagnets.$inferSelect;
export type WebhookLog = typeof webhookLogs.$inferSelect;
