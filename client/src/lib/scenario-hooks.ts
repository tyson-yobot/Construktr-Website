// Real-life scenario hooks that sound like a contractor talking to a buddy.
// Use these as pull quotes, section headers, and CTA copy throughout the site.

export interface ScenarioHook {
  id: string;
  quote: string;
  context: ('hero' | 'pricing' | 'cta' | 'feature' | 'pain-point')[];
  painPoint: string;
}

export const SCENARIO_HOOKS: ScenarioHook[] = [
  {
    id: 'drive-home-invoice',
    quote: "Driving home after a 10-hour day and realize you forgot to invoice that $4,200 kitchen remodel? Just tell your phone. Done before you hit the next red light.",
    context: ['hero', 'feature', 'cta'],
    painPoint: 'invoicing',
  },
  {
    id: '5am-scramble',
    quote: "Stop waking up at 5 AM to text your crew their schedules. CONSTRUKTR already sent optimized routes to everyone's phone last night.",
    context: ['hero', 'pain-point', 'feature'],
    painPoint: 'scheduling',
  },
  {
    id: 'napkin-estimator',
    quote: "Still writing estimates on the back of a napkin? Snap a photo of the job site. AI writes your estimate in 30 seconds — with materials, labor, and your profit margin baked in.",
    context: ['hero', 'pain-point', 'feature'],
    painPoint: 'estimation',
  },
  {
    id: 'double-booking',
    quote: "Three crews, twelve jobs, zero double-bookings. Every single day. That's not luck — that's AI dispatch.",
    context: ['hero', 'feature'],
    painPoint: 'dispatch',
  },
  {
    id: 'cash-flow-nightmare',
    quote: "That $8,000 invoice you sent three weeks ago? Your client approved and paid it from their phone in their car. No chasing. No phone tag. No excuses.",
    context: ['hero', 'pain-point', 'cta'],
    painPoint: 'payments',
  },
  {
    id: 'paperwork-prison',
    quote: "You didn't get into this business to do paperwork until midnight. Your AI assistant handles invoices, follow-ups, and review requests while you sleep.",
    context: ['hero', 'cta', 'pain-point'],
    painPoint: 'admin',
  },
  {
    id: 'competitor-math',
    quote: "Jobber charges $29/month for every extra person on your team. Your dispatcher, your office manager, your lead tech — that adds up fast. CONSTRUKTR includes your whole team.",
    context: ['pricing', 'cta'],
    painPoint: 'cost',
  },
  {
    id: 'quote-killer',
    quote: "Lost a $15,000 job because your quote took three days? AI estimates in 30 seconds. Send it while you're still standing in their driveway.",
    context: ['hero', 'pain-point', 'feature'],
    painPoint: 'estimation',
  },
  {
    id: 'lien-protector',
    quote: "Preliminary notice deadlines don't care that you were busy. CONSTRUKTR tracks every deadline automatically. Your lien rights, protected.",
    context: ['feature', 'cta'],
    painPoint: 'compliance',
  },
  {
    id: 'voice-command',
    quote: "Hands covered in drywall mud? Just say 'invoice the Martinez bathroom job.' Done. Hands-free.",
    context: ['hero', 'feature'],
    painPoint: 'field-ops',
  },
  {
    id: 'weekend-warrior',
    quote: "Your client texted at 9 PM asking for a quote. Your AI receptionist already replied, scheduled the site visit, and put it on your calendar.",
    context: ['feature', 'cta'],
    painPoint: 'leads',
  },
  {
    id: 'quickbooks-nightmare',
    quote: "Spent Sunday afternoon entering last week's invoices into QuickBooks? That sync happens automatically now. Every invoice, every payment, in real time.",
    context: ['feature', 'pain-point'],
    painPoint: 'accounting',
  },
  {
    id: 'truck-roll-waste',
    quote: "Sent your best tech to a job 40 minutes away when another crew was 5 minutes out. AI route optimization means the right crew goes to the right job, every time.",
    context: ['feature'],
    painPoint: 'dispatch',
  },
  {
    id: 'no-show-crew',
    quote: "Your lead tech didn't show up this morning? You knew 30 seconds after he should have clocked in. Geofencing doesn't lie, and neither does GPS tracking.",
    context: ['feature'],
    painPoint: 'field-ops',
  },
  {
    id: 'growth-ceiling',
    quote: "You turned down three jobs last month because you couldn't manage more than what's in your head. That's not a capacity problem — that's a tools problem.",
    context: ['hero', 'cta'],
    painPoint: 'growth',
  },
];

// Hero-eligible hooks for the rotating subheadline
export const HERO_HOOKS = SCENARIO_HOOKS.filter(h => h.context.includes('hero'));

// Pain point hooks for the 3-column section
export const PAIN_HOOKS = SCENARIO_HOOKS.filter(h => h.context.includes('pain-point'));

// CTA hooks for final sections
export const CTA_HOOKS = SCENARIO_HOOKS.filter(h => h.context.includes('cta'));
