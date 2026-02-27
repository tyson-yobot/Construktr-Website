import {
  type User,
  type InsertUser,
  type Lead,
  type InsertLead,
  type Payment,
  type InsertPayment,
  type Newsletter,
  type InsertNewsletter,
  type LeadMagnet,
  type InsertLeadMagnet,
  type WebhookLog,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Lead operations
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadsBySource(source: string): Promise<Lead[]>;
  updateLeadProcessed(id: string, processed: boolean): Promise<void>;

  // Payment operations
  createPayment(payment: InsertPayment): Promise<Payment>;
  getPayments(): Promise<Payment[]>;
  getPaymentByStripeId(stripePaymentId: string): Promise<Payment | undefined>;
  updatePaymentStatus(id: string, status: string): Promise<void>;

  // Newsletter operations
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
  unsubscribeFromNewsletter(email: string): Promise<void>;

  // Lead magnet operations
  createLeadMagnet(leadMagnet: InsertLeadMagnet): Promise<LeadMagnet>;
  getLeadMagnets(): Promise<LeadMagnet[]>;
  markLeadMagnetDownloaded(id: string): Promise<void>;

  // Webhook log operations
  logWebhook(log: Omit<WebhookLog, 'id' | 'createdAt'>): Promise<void>;
  getWebhookLogs(service?: string): Promise<WebhookLog[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;
  private payments: Map<string, Payment>;
  private newsletters: Map<string, Newsletter>;
  private leadMagnets: Map<string, LeadMagnet>;
  private webhookLogs: Map<string, WebhookLog>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.payments = new Map();
    this.newsletters = new Map();
    this.leadMagnets = new Map();
    this.webhookLogs = new Map();
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Lead operations
  async createLead(lead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const newLead: Lead = {
      id,
      createdAt: new Date(),
      processed: false,
      name: lead.name || null,
      company: lead.company || null,
      phone: lead.phone || null,
      message: lead.message || null,
      metadata: lead.metadata || null,
      email: lead.email,
      source: lead.source,
    };
    this.leads.set(id, newLead);
    return newLead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async getLeadsBySource(source: string): Promise<Lead[]> {
    return Array.from(this.leads.values()).filter((lead) => lead.source === source);
  }

  async updateLeadProcessed(id: string, processed: boolean): Promise<void> {
    const lead = this.leads.get(id);
    if (lead) {
      lead.processed = processed;
      this.leads.set(id, lead);
    }
  }

  // Payment operations
  async createPayment(payment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const newPayment: Payment = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      currency: payment.currency || "usd",
      stripePaymentId: payment.stripePaymentId || null,
      plan: payment.plan || null,
      metadata: payment.metadata || null,
      email: payment.email,
      amount: payment.amount,
      status: payment.status,
    };
    this.payments.set(id, newPayment);
    return newPayment;
  }

  async getPayments(): Promise<Payment[]> {
    return Array.from(this.payments.values());
  }

  async getPaymentByStripeId(stripePaymentId: string): Promise<Payment | undefined> {
    return Array.from(this.payments.values()).find(
      (payment) => payment.stripePaymentId === stripePaymentId
    );
  }

  async updatePaymentStatus(id: string, status: string): Promise<void> {
    const payment = this.payments.get(id);
    if (payment) {
      payment.status = status;
      payment.updatedAt = new Date();
      this.payments.set(id, payment);
    }
  }

  // Newsletter operations
  async createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newNewsletter: Newsletter = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "active",
      email: newsletter.email,
      source: newsletter.source || null,
      tags: newsletter.tags || null,
    };
    this.newsletters.set(id, newNewsletter);
    return newNewsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async unsubscribeFromNewsletter(email: string): Promise<void> {
    const newsletter = Array.from(this.newsletters.values()).find((n) => n.email === email);
    if (newsletter) {
      newsletter.status = "unsubscribed";
      newsletter.updatedAt = new Date();
      this.newsletters.set(newsletter.id, newsletter);
    }
  }

  // Lead magnet operations
  async createLeadMagnet(leadMagnet: InsertLeadMagnet): Promise<LeadMagnet> {
    const id = randomUUID();
    const newLeadMagnet: LeadMagnet = {
      id,
      createdAt: new Date(),
      downloaded: false,
      downloadedAt: null,
      email: leadMagnet.email,
      name: leadMagnet.name || null,
      company: leadMagnet.company || null,
      magnet: leadMagnet.magnet,
      source: leadMagnet.source || null,
    };
    this.leadMagnets.set(id, newLeadMagnet);
    return newLeadMagnet;
  }

  async getLeadMagnets(): Promise<LeadMagnet[]> {
    return Array.from(this.leadMagnets.values());
  }

  async markLeadMagnetDownloaded(id: string): Promise<void> {
    const leadMagnet = this.leadMagnets.get(id);
    if (leadMagnet) {
      leadMagnet.downloaded = true;
      leadMagnet.downloadedAt = new Date();
      this.leadMagnets.set(id, leadMagnet);
    }
  }

  // Webhook log operations
  async logWebhook(log: Omit<WebhookLog, 'id' | 'createdAt'>): Promise<void> {
    const id = randomUUID();
    const webhookLog: WebhookLog = {
      id,
      createdAt: new Date(),
      ...log,
    };
    this.webhookLogs.set(id, webhookLog);
  }

  async getWebhookLogs(service?: string): Promise<WebhookLog[]> {
    const logs = Array.from(this.webhookLogs.values());
    if (service) {
      return logs.filter((log) => log.service === service);
    }
    return logs;
  }
}

export const storage = new MemStorage();