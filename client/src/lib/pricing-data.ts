// Single source of truth for all pricing, tier, and feature data on the website.
// Derived from featureGates.ts in construktr-api / construktr-platform.
// Last synced: 2026-04-05

export const TIERS = ['free', 'starter', 'core', 'pro', 'business'] as const;
export type Tier = (typeof TIERS)[number];

export const TRIAL_DURATION_DAYS = 14;
export const CONTACT_EMAIL = 'support@construktr.ai';

export interface TierDefinition {
  name: string;
  slug: Tier;
  priceMonthly: number;       // dollars
  priceAnnualMonthly: number;  // per-month when billed annually
  priceAnnualTotal: number;    // total annual price
  description: string;
  target: string;
  maxUsers: string;
  storageGB: string;
  paymentProcessingRate: string;
  ctaText: string;
  ctaLink: string;
  badge: string | null;
  highlights: string[];        // top 5-6 selling points for card display
  features: string[];          // full feature list
}

export const TIER_DEFINITIONS: TierDefinition[] = [
  {
    name: 'Free',
    slug: 'free',
    priceMonthly: 0,
    priceAnnualMonthly: 0,
    priceAnnualTotal: 0,
    description: 'Perfect for getting started',
    target: 'Solo contractor trying the app',
    maxUsers: '1',
    storageGB: '100 MB',
    paymentProcessingRate: '2.9% + $0.30',
    ctaText: 'Start Free',
    ctaLink: '/get',
    badge: null,
    highlights: [
      '5 manual estimates per month',
      'Basic scheduling',
      'Basic invoicing',
      'Basic reporting',
      'Stripe payments',
      '1 user',
    ],
    features: [
      '1 user',
      '5 active jobs',
      '5 estimates per month',
      '5 invoices per month',
      '25 contacts',
      '100 MB storage',
      '7-day data retention',
      'Stripe payments (2.9% + $0.30)',
      'Basic reporting',
    ],
  },
  {
    name: 'Starter',
    slug: 'starter',
    priceMonthly: 49,
    priceAnnualMonthly: 39,
    priceAnnualTotal: 468,
    description: 'For solo operators ready to grow',
    target: 'Full-time solo operator with real clients',
    maxUsers: '2',
    storageGB: '2 GB',
    paymentProcessingRate: '2.9% + $0.30',
    ctaText: `Start ${TRIAL_DURATION_DAYS}-Day Free Trial`,
    ctaLink: '/get',
    badge: null,
    highlights: [
      'Unlimited jobs, estimates, invoices',
      'Team scheduling',
      'Two-way SMS (100/month)',
      'Google Calendar sync',
      'Wisetack financing',
      '2 users included',
    ],
    features: [
      '2 users',
      'Unlimited active jobs',
      'Unlimited estimates',
      'Unlimited invoices',
      'Unlimited contacts',
      '2 GB storage',
      '1-year data retention',
      '100 SMS messages per month',
      'Two-way SMS',
      'Team scheduling',
      'Google Calendar sync',
      'Wisetack financing',
      'Stripe payments (2.9% + $0.30)',
      'Basic reporting',
    ],
  },
  {
    name: 'Core',
    slug: 'core',
    priceMonthly: 99,
    priceAnnualMonthly: 79,
    priceAnnualTotal: 948,
    description: 'For small teams that need AI and integrations',
    target: '2-5 employee contractor using QuickBooks',
    maxUsers: '5',
    storageGB: '5 GB',
    paymentProcessingRate: '2.7% + $0.25',
    ctaText: `Start ${TRIAL_DURATION_DAYS}-Day Free Trial`,
    ctaLink: '/get',
    badge: 'Most Popular',
    highlights: [
      'AI photo estimation (15/month)',
      'QuickBooks sync',
      'GPS tracking + geofencing',
      'Client portal',
      'Dispatch board',
      '5 users included',
    ],
    features: [
      '5 users',
      'Unlimited jobs, estimates, invoices, contacts',
      '5 GB storage',
      '1-year data retention',
      '500 SMS messages per month',
      '5 workflow automations',
      'AI photo estimation (15/month)',
      'Two-way SMS',
      'QuickBooks sync',
      'Google Calendar sync',
      'Wisetack financing',
      'DocuSign e-signatures',
      'Google Business Profile',
      'Lead source integrations',
      'GPS tracking',
      'Geofencing clock-in/out',
      'Stripe payments (2.7% + $0.25)',
      'Job costing',
      'Client portal',
      'Lien tracking (basic)',
      'Custom forms',
      'Basic reporting',
      'Team scheduling',
      'Dispatch board',
    ],
  },
  {
    name: 'Pro',
    slug: 'pro',
    priceMonthly: 199,
    priceAnnualMonthly: 159,
    priceAnnualTotal: 1908,
    description: 'For growing teams that need the full platform',
    target: '5-15 employee operation needing web platform',
    maxUsers: '15',
    storageGB: '25 GB',
    paymentProcessingRate: '2.7% + $0.25',
    ctaText: `Start ${TRIAL_DURATION_DAYS}-Day Free Trial`,
    ctaLink: '/get',
    badge: null,
    highlights: [
      'Unlimited AI estimates',
      'AI dispatch + route optimization',
      'AI business intelligence',
      'Web platform access',
      'Advanced client portal',
      '15 users included',
    ],
    features: [
      '15 users',
      'Unlimited everything',
      '25 GB storage',
      '2-year data retention',
      'Unlimited SMS',
      'Unlimited workflow automations',
      'Unlimited AI photo estimation',
      'AI dispatch optimization',
      'AI route optimization',
      'AI damage analysis',
      'AI business intelligence',
      'Web platform access',
      'QuickBooks sync',
      'Google Calendar sync',
      'Wisetack financing',
      'DocuSign e-signatures',
      'Google Business Profile',
      'Lead source integrations',
      'Payroll integration',
      'Email marketing sync',
      'Background checks',
      'GPS tracking',
      'Geofencing clock-in/out',
      'NFC/BLE check-in',
      'Basic fleet management',
      'Stripe payments (2.7% + $0.25)',
      'Progress invoicing',
      'Job costing + advanced job costing',
      'Client portal + advanced features',
      'Two-way SMS',
      'Lien tracking (basic + advanced)',
      'Custom forms',
      'Basic + advanced reporting',
      'Team scheduling',
      'Dispatch board',
      'Custom automation builder',
      'Priority email support',
    ],
  },
  {
    name: 'Business',
    slug: 'business',
    priceMonthly: 349,
    priceAnnualMonthly: 279,
    priceAnnualTotal: 3348,
    description: 'For operations that run themselves',
    target: '15-50+ employee operation with multiple crews',
    maxUsers: 'Unlimited',
    storageGB: 'Unlimited',
    paymentProcessingRate: '2.5% + $0.20',
    ctaText: `Start ${TRIAL_DURATION_DAYS}-Day Free Trial`,
    ctaLink: '/get',
    badge: null,
    highlights: [
      '24/7 AI receptionist',
      'Custom report builder',
      'White-label client portal',
      'API access + webhooks + Zapier',
      'SSO + advanced RBAC',
      'Unlimited users',
    ],
    features: [
      'Unlimited users',
      'Unlimited everything',
      'Unlimited storage',
      'Unlimited data retention',
      'Unlimited SMS',
      'Unlimited workflow automations',
      'Unlimited AI photo estimation',
      'AI dispatch optimization',
      'AI route optimization',
      'AI damage analysis',
      'AI business intelligence',
      '24/7 AI receptionist',
      'Web platform access',
      'QuickBooks sync',
      'Google Calendar sync',
      'Wisetack financing',
      'DocuSign e-signatures',
      'Google Business Profile',
      'Lead source integrations',
      'HubSpot sync',
      'Payroll integration',
      'Email marketing sync',
      'Background checks',
      'API access',
      'Webhooks',
      'Zapier integration',
      'SSO',
      'GPS tracking',
      'Geofencing clock-in/out',
      'NFC/BLE check-in',
      'Basic + advanced fleet management',
      'Stripe payments (2.5% + $0.20)',
      'Progress invoicing',
      'Job costing + advanced job costing',
      'Client portal + advanced + white-label',
      'Two-way SMS',
      'Lien tracking (basic + advanced)',
      'Custom forms',
      'Basic + advanced reporting + custom report builder',
      'Team scheduling',
      'Dispatch board',
      'Custom automation builder',
      'Multi-location support',
      'Subcontractor management',
      'Advanced RBAC',
      'Dedicated support',
      'Priority phone + email support',
    ],
  },
];

// Feature comparison matrix for the pricing page table
export interface FeatureRow {
  name: string;
  category: string;
  free: string | boolean;
  starter: string | boolean;
  core: string | boolean;
  pro: string | boolean;
  business: string | boolean;
}

export const FEATURE_CATEGORIES = [
  'Limits',
  'AI Tools',
  'Integrations',
  'Field Operations',
  'Financial',
  'Client & Communications',
  'Compliance',
  'Reporting',
  'Team & Enterprise',
] as const;

export const FEATURE_COMPARISON: FeatureRow[] = [
  // Limits
  { name: 'Users', category: 'Limits', free: '1', starter: '2', core: '5', pro: '15', business: 'Unlimited' },
  { name: 'Active jobs', category: 'Limits', free: '5', starter: 'Unlimited', core: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'Estimates per month', category: 'Limits', free: '5', starter: 'Unlimited', core: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'Invoices per month', category: 'Limits', free: '5', starter: 'Unlimited', core: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'Contacts', category: 'Limits', free: '25', starter: 'Unlimited', core: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'Storage', category: 'Limits', free: '100 MB', starter: '2 GB', core: '5 GB', pro: '25 GB', business: 'Unlimited' },
  { name: 'Data retention', category: 'Limits', free: '7 days', starter: '1 year', core: '1 year', pro: '2 years', business: 'Unlimited' },
  { name: 'SMS messages', category: 'Limits', free: false, starter: '100/mo', core: '500/mo', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'Workflow automations', category: 'Limits', free: false, starter: false, core: '5', pro: 'Unlimited', business: 'Unlimited' },

  // AI Tools
  { name: 'AI photo estimation', category: 'AI Tools', free: false, starter: false, core: '15/mo', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'AI dispatch optimization', category: 'AI Tools', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'AI route optimization', category: 'AI Tools', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'AI damage analysis', category: 'AI Tools', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'AI business intelligence', category: 'AI Tools', free: false, starter: false, core: false, pro: true, business: true },
  { name: '24/7 AI receptionist', category: 'AI Tools', free: false, starter: false, core: false, pro: false, business: true },

  // Integrations
  { name: 'QuickBooks sync', category: 'Integrations', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Google Calendar sync', category: 'Integrations', free: false, starter: true, core: true, pro: true, business: true },
  { name: 'Wisetack financing', category: 'Integrations', free: false, starter: true, core: true, pro: true, business: true },
  { name: 'DocuSign e-signatures', category: 'Integrations', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Google Business Profile', category: 'Integrations', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Lead source integrations', category: 'Integrations', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'HubSpot sync', category: 'Integrations', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Payroll integration', category: 'Integrations', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Email marketing sync', category: 'Integrations', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Background checks', category: 'Integrations', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'API access', category: 'Integrations', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Webhooks', category: 'Integrations', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Zapier integration', category: 'Integrations', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'SSO', category: 'Integrations', free: false, starter: false, core: false, pro: false, business: true },

  // Field Operations
  { name: 'GPS tracking', category: 'Field Operations', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Geofencing clock-in/out', category: 'Field Operations', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'NFC/BLE check-in', category: 'Field Operations', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Basic fleet management', category: 'Field Operations', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Advanced fleet management', category: 'Field Operations', free: false, starter: false, core: false, pro: false, business: true },

  // Financial
  { name: 'Stripe payments', category: 'Financial', free: true, starter: true, core: true, pro: true, business: true },
  { name: 'Payment processing rate', category: 'Financial', free: '2.9% + $0.30', starter: '2.9% + $0.30', core: '2.7% + $0.25', pro: '2.7% + $0.25', business: '2.5% + $0.20' },
  { name: 'Progress invoicing', category: 'Financial', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Job costing', category: 'Financial', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Advanced job costing', category: 'Financial', free: false, starter: false, core: false, pro: true, business: true },

  // Client & Communications
  { name: 'Client portal', category: 'Client & Communications', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Advanced client portal', category: 'Client & Communications', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'White-label client portal', category: 'Client & Communications', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Two-way SMS', category: 'Client & Communications', free: false, starter: true, core: true, pro: true, business: true },

  // Compliance
  { name: 'Lien tracking (basic)', category: 'Compliance', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Lien tracking + waiver generation', category: 'Compliance', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Custom forms', category: 'Compliance', free: false, starter: false, core: true, pro: true, business: true },

  // Reporting
  { name: 'Basic reporting', category: 'Reporting', free: true, starter: true, core: true, pro: true, business: true },
  { name: 'Advanced reporting', category: 'Reporting', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Custom report builder', category: 'Reporting', free: false, starter: false, core: false, pro: false, business: true },

  // Team & Enterprise
  { name: 'Team scheduling', category: 'Team & Enterprise', free: false, starter: true, core: true, pro: true, business: true },
  { name: 'Dispatch board', category: 'Team & Enterprise', free: false, starter: false, core: true, pro: true, business: true },
  { name: 'Custom automation builder', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: true, business: true },
  { name: 'Multi-location support', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Subcontractor management', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Advanced RBAC', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Dedicated support', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Priority phone support', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: false, business: true },
  { name: 'Priority email support', category: 'Team & Enterprise', free: false, starter: false, core: false, pro: true, business: true },
];

// Computed: count distinct features that are true/available across all tiers
export const TOTAL_FEATURE_COUNT = FEATURE_COMPARISON.length;

// Count AI tools specifically
export const AI_TOOL_COUNT = FEATURE_COMPARISON.filter(f => f.category === 'AI Tools').length;

// FAQ data for pricing page
export interface FAQ {
  question: string;
  answer: string;
}

export const PRICING_FAQS: FAQ[] = [
  {
    question: 'Is the free plan really free forever?',
    answer: 'Yes. No credit card required, no time limit. You get 5 jobs, 5 estimates, 5 invoices per month, and basic reporting. Use it as long as you want.',
  },
  {
    question: `What happens after my ${TRIAL_DURATION_DAYS}-day trial?`,
    answer: `You can continue on the Free plan with no interruption, or choose a paid plan to keep the features you used during your trial. No surprise charges.`,
  },
  {
    question: 'How accurate is AI photo estimation?',
    answer: 'Our AI analyzes job site photos to generate estimates with materials, labor, and your profit margin. Accuracy improves with your historical data. Every estimate is fully editable before you send it.',
  },
  {
    question: 'Does it integrate with QuickBooks?',
    answer: 'Yes. One-click OAuth connection with real-time bidirectional sync. Invoices, payments, and expenses flow automatically between Construktr and QuickBooks. Available on Core and above.',
  },
  {
    question: 'Are there per-user fees?',
    answer: 'No. Every plan includes a set number of users with no additional per-user charges. Free includes 1, Starter includes 2, Core includes 5, Pro includes 15, and Business is unlimited.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes. Upgrade or downgrade at any time. When you upgrade, you get immediate access to new features. When you downgrade, you keep your current plan through the end of the billing period.',
  },
  {
    question: 'What about data security?',
    answer: 'Enterprise-grade security on every plan: 256-bit SSL/TLS encryption, encrypted data at rest, and role-based access control. Business plan adds SSO, advanced RBAC, and field-level data masking.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes. Save roughly 20% by switching to annual billing. For example, the Core plan drops from $99/month to $79/month billed annually.',
  },
];
