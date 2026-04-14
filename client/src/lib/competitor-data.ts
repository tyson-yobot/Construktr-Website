// Factual competitor comparison data from public pricing pages.
// Sources: jobber.com/pricing, housecallpro.com/pricing, servicetitan.com
// Last verified: April 2026

export interface CompetitorPlan {
  name: string;
  freeplan: boolean;
  startingPrice: string;
  perUserFee: string;
  aiEstimation: string;
  aiScheduling: string;
  aiAssistant: string;
  quickbooks: string;
  paymentProcessing: string;
  mobileApp: string;
}

export const COMPETITORS: Record<string, CompetitorPlan> = {
  construktr: {
    name: 'CONSTRUKTR',
    freeplan: true,
    startingPrice: '$0/mo (free forever)',
    perUserFee: 'Included',
    aiEstimation: '30-second AI photo estimation',
    aiScheduling: 'AI dispatch + route optimization',
    aiAssistant: 'AI business intelligence + 24/7 receptionist',
    quickbooks: 'Real-time bidirectional sync',
    paymentProcessing: 'From 2.5% + $0.20',
    mobileApp: 'Full-featured with offline sync',
  },
  jobber: {
    name: 'Jobber',
    freeplan: false,
    startingPrice: '$39/mo',
    perUserFee: '$29/user/mo extra',
    aiEstimation: 'Not available',
    aiScheduling: 'Not available',
    aiAssistant: 'AI receptionist add-on ($99/mo)',
    quickbooks: 'Available on paid plans',
    paymentProcessing: '2.9% + $0.30',
    mobileApp: 'Available',
  },
  housecallpro: {
    name: 'Housecall Pro',
    freeplan: false,
    startingPrice: '$59/mo',
    perUserFee: '$29/user/mo extra',
    aiEstimation: 'Not available',
    aiScheduling: 'Limited',
    aiAssistant: 'Limited',
    quickbooks: 'Available on paid plans',
    paymentProcessing: '2.9% + $0.30',
    mobileApp: 'Available',
  },
  servicetitan: {
    name: 'ServiceTitan',
    freeplan: false,
    startingPrice: 'Hidden (sales call required)',
    perUserFee: 'Hidden',
    aiEstimation: 'Not available',
    aiScheduling: 'Limited',
    aiAssistant: 'Limited',
    quickbooks: 'Available',
    paymentProcessing: 'Varies',
    mobileApp: 'Available',
  },
};

// Comparison rows for the table component
export interface ComparisonRow {
  feature: string;
  construktr: string;
  jobber: string;
  housecallpro: string;
  servicetitan: string;
  isAdvantage: boolean; // true when CONSTRUKTR has a clear advantage
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Free plan',
    construktr: 'Free forever',
    jobber: 'No',
    housecallpro: 'No',
    servicetitan: 'No',
    isAdvantage: true,
  },
  {
    feature: 'Starting price',
    construktr: '$0/mo',
    jobber: '$39/mo',
    housecallpro: '$59/mo',
    servicetitan: 'Hidden',
    isAdvantage: true,
  },
  {
    feature: 'Per-user fees',
    construktr: 'None — team included',
    jobber: '$29/user/mo',
    housecallpro: '$29/user/mo',
    servicetitan: 'Hidden',
    isAdvantage: true,
  },
  {
    feature: 'AI photo estimation',
    construktr: '30-second estimates',
    jobber: 'Not available',
    housecallpro: 'Not available',
    servicetitan: 'Not available',
    isAdvantage: true,
  },
  {
    feature: 'AI dispatch & routing',
    construktr: 'Built-in (Pro+)',
    jobber: 'Not available',
    housecallpro: 'Limited',
    servicetitan: 'Limited',
    isAdvantage: true,
  },
  {
    feature: 'AI business intelligence',
    construktr: 'Built-in (Pro+)',
    jobber: 'Not available',
    housecallpro: 'Not available',
    servicetitan: 'Limited',
    isAdvantage: true,
  },
  {
    feature: '24/7 AI receptionist',
    construktr: 'Included (Business)',
    jobber: '$99/mo add-on',
    housecallpro: 'Not available',
    servicetitan: 'Not available',
    isAdvantage: true,
  },
  {
    feature: 'QuickBooks sync',
    construktr: 'Real-time (Core+)',
    jobber: 'Available',
    housecallpro: 'Available',
    servicetitan: 'Available',
    isAdvantage: false,
  },
  {
    feature: 'Payment processing',
    construktr: 'From 2.5% + $0.20',
    jobber: '2.9% + $0.30',
    housecallpro: '2.9% + $0.30',
    servicetitan: 'Varies',
    isAdvantage: true,
  },
  {
    feature: 'Mobile app',
    construktr: 'Full-featured + offline',
    jobber: 'Available',
    housecallpro: 'Available',
    servicetitan: 'Available',
    isAdvantage: false,
  },
];

// Real-math competitor cost examples
export const COMPETITOR_MATH_EXAMPLES = [
  {
    scenario: '5-person team',
    construktr: { plan: 'Core', cost: 99, breakdown: '$99/mo — 5 users included, AI estimation, QuickBooks sync' },
    jobber: { plan: 'Grow', cost: 349 + 3 * 29, breakdown: '$349/mo base + 3 extra users at $29/mo = $436/mo' },
    housecallpro: { plan: 'Essentials', cost: 129 + 3 * 29, breakdown: '$129/mo base + 3 extra users at $29/mo = $216/mo' },
  },
  {
    scenario: '10-person team',
    construktr: { plan: 'Pro', cost: 199, breakdown: '$199/mo — 15 users included, unlimited AI, web platform' },
    jobber: { plan: 'Grow', cost: 349 + 8 * 29, breakdown: '$349/mo base + 8 extra users at $29/mo = $581/mo' },
    housecallpro: { plan: 'MAX', cost: 299 + 8 * 29, breakdown: '$299/mo base + 8 extra users at $29/mo = $531/mo' },
  },
];
