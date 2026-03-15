export const FOUNDERS_PROMO_ENABLED = false;

export type TierKey = "free" | "starter" | "pro" | "business";

export interface Tier {
  key: TierKey;
  name: string;
  priceMonthly: number;
  priceAnnual: number | null;
  users: string;
  isMostPopular?: boolean;
  cta: string;
  tagline: string;
  features: string[];
  paymentRate?: string;
  storage: string;
  retention: string;
}

export const tiers: Tier[] = [
  {
    key: "free",
    name: "Free",
    priceMonthly: 0,
    priceAnnual: null,
    users: "1 user",
    cta: "Get Started Free",
    tagline: "For solo contractors getting started",
    storage: "100 MB",
    retention: "7 days",
    features: [
      "2 active jobs",
      "5 manual quotes/month", 
      "50 customer contacts",
      "Basic scheduling & calendar",
      "Manual time tracking",
      "Mobile app (iOS & Android)",
      "Offline-first architecture",
      "Push notifications",
      "Basic invoicing",
      "Photo documentation",
      "Customer notes & history",
      "Job status tracking",
    ],
  },
  {
    key: "starter",
    name: "Starter",
    priceMonthly: 49,
    priceAnnual: 39,
    users: "Up to 5 users",
    cta: "Start with Starter",
    tagline: "For growing crews ready to automate",
    paymentRate: "2.9% + $0.30",
    storage: "5 GB",
    retention: "1 year",
    features: [
      "Unlimited active jobs",
      "AI Photo Estimation (10/month)", 
      "Stripe payment processing",
      "Professional branded invoicing",
      "QuickBooks bidirectional sync",
      "GPS time tracking",
      "Client portal & change orders",
      "Maps & route planning",
      "In-app messaging (100/month)",
      "Equipment tracking",
      "Digital job forms",
      "Customer CRM & notes",
      "Push notifications to team",
      "2-way SMS with customers",
      "Basic analytics & reports",
      "Document scanning (OCR)",
      "Receipt reconciliation",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    priceMonthly: 89,
    priceAnnual: 69,
    users: "Up to 15 users",
    isMostPopular: true,
    cta: "Go Pro",
    tagline: "Full AI power — 17 tools including GPT-4 & Computer Vision",
    paymentRate: "2.7% + $0.25",
    storage: "25 GB",
    retention: "2 years",
    features: [
      "Everything in Starter", 
      "🤖 17 AI Tools (GPT-4, Computer Vision, ML)",
      "🤖 AI Quote Builder with success prediction",
      "🤖 AI Scheduler Pro with delay prediction",
      "🤖 AI Voice Commands (NLP)",
      "🤖 AI Route Optimizer (ML + Weather)",
      "🤖 AI Document Scanner (99.7% OCR)",
      "🤖 AI Part Finder (Computer Vision)",
      "🤖 Margin Guardrails (AI profit protection)",
      "🤖 AI Photo Estimating with AR overlay",
      "Unlimited AI Photo Estimates",
      "Route optimization & multi-crew dispatch",
      "NFC/BLE equipment tracking", 
      "Inventory management with barcode scanning",
      "Recurring billing & subscriptions",
      "Advanced analytics & KPI tracking",
      "Weather integration for scheduling",
      "Review automation & reputation management",
      "Multi-location job management",
      "Permit & compliance tracking",
    ],
  },
  {
    key: "business",
    name: "Business",
    priceMonthly: 199,
    priceAnnual: 159,
    users: "Unlimited users",
    cta: "Contact Sales",
    tagline: "Enterprise AI — Deep Learning analytics & unlimited everything",
    paymentRate: "2.5% + $0.20",
    storage: "Unlimited",
    retention: "Unlimited",
    features: [
      "Everything in Pro",
      "🧠 AI Business Assistant (GPT-4 strategic insights)",
      "🧠 AI Business Intelligence (Deep Learning)",
      "🧠 24/7 AI Call Operator (GPT-4 Voice)",
      "🧠 AI Predictive Analytics & revenue forecasting",
      "🧠 Business Automation (AI workflows)",
      "Unlimited users & locations",
      "Advanced RBAC & SSO integration",
      "API access & custom webhooks",
      "White-label client portal & branding",
      "Multi-location management & reporting",
      "Priority support (phone + chat)",
      "Dedicated account manager",
      "Custom integrations & data exports",
      "Enterprise-grade security compliance",
      "Custom reporting & dashboards",
      "Franchise/multi-location oversight",
      "Custom training & onboarding",
    ],
  },
];

export const globalFeatures = [
  "Free forever to start",
  "No credit card required",
  "Cancel anytime",
];
