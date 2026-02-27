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
    tagline: "For companies that need full AI power",
    paymentRate: "2.7% + $0.25",
    storage: "25 GB",
    retention: "2 years",
    features: [
      "Everything in Starter",
      "Unlimited AI Photo Estimates",
      "Route optimization & multi-crew dispatch",
      "NFC/BLE equipment tracking",
      "Automated lien tracking",
      "Inventory management",
      "AR guides & AI Part Finder",
      "Custom job forms",
      "Recurring billing & subscriptions",
      "In-app messaging (500/month)",
    ],
  },
  {
    key: "business",
    name: "Business",
    priceMonthly: 199,
    priceAnnual: 159,
    users: "Unlimited users",
    cta: "Contact Sales",
    tagline: "For enterprise operations & multi-location",
    paymentRate: "2.5% + $0.20",
    storage: "Unlimited",
    retention: "Unlimited",
    features: [
      "Everything in Pro",
      "Unlimited users",
      "Voice commands & AI Quote Writer",
      "AI Predictive Analytics",
      "OCR document & business card scanning",
      "Advanced RBAC & SSO",
      "API access & webhooks",
      "White-label client portal",
      "Multi-location management",
      "Priority support (phone + chat)",
      "Dedicated account manager",
    ],
  },
];

export const globalFeatures = [
  "Free forever to start",
  "No credit card required",
  "Cancel anytime",
];
