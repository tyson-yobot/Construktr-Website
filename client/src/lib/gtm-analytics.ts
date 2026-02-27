// GTM Analytics Events System
// Implements dataLayer.push events for comprehensive user behavior tracking

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if not exists
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

// Base analytics event interface
interface BaseAnalyticsEvent {
  event: string;
  timestamp?: number;
  page_url?: string;
  user_agent?: string;
}

// Video Demo Events
export function trackVideoDemoPlay(origin: string = 'homepage') {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'video_demo_play',
    origin,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

export function trackVideoDemoProgress(percent: number, origin: string = 'homepage') {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'video_demo_progress',
    percent,
    origin,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

export function trackVideoDemoComplete(origin: string = 'homepage') {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'video_demo_complete',
    origin,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Trade Chip Interactions
export function trackTradeChipClicked(trade: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'trade_chip_clicked',
    trade: trade.toLowerCase(),
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Pricing Events
export function trackPricingPlanSelected(plan: string, price?: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'pricing_plan_selected',
    plan: plan.toLowerCase(),
    price,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

export function trackPricingCTAClicked(plan: string, cta_type: 'start_trial' | 'book_demo') {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'pricing_cta_clicked',
    plan: plan.toLowerCase(),
    cta_type,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Download Events
export function trackDownloadClicked(store: 'ios' | 'android', utm_source?: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'download_clicked',
    store,
    utm_source: utm_source || 'direct',
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// CTA Events
export function trackCTAStartTrialClicked(origin: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'cta_start_trial_clicked',
    origin,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

export function trackCTABookDemoClicked(origin: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'cta_book_demo_clicked',
    origin,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Form Events
export function trackFormSubmitted(form_type: string, form_data?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'form_submitted',
    form_type,
    form_data,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

export function trackFormError(form_type: string, error_fields: string[]) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'form_error',
    form_type,
    error_fields,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Navigation Events
export function trackPageView(page_path: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'page_view',
    page_path,
    timestamp: Date.now(),
    page_url: window.location.href,
    page_title: document.title
  });
}

export function trackSectionView(section_name: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'section_view',
    section_name,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Scroll Events
export function trackScrollDepth(depth_percent: number) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'scroll_depth',
    depth_percent,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Feature Interaction Events
export function trackFeatureClicked(feature_name: string, context?: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'feature_clicked',
    feature_name,
    context,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Promo Bar Events
export function trackPromoBarCTAClicked(cta_type: 'download' | 'start_trial') {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'promo_bar_cta_clicked',
    cta_type,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

export function trackPromoBarbDismissed() {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'promo_bar_dismissed',
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Social Proof Events
export function trackTestimonialClicked(testimonial_id: string) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: 'testimonial_clicked',
    testimonial_id,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Custom Event Tracking
export function trackCustomEvent(event_name: string, event_data?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer.push({
    event: event_name,
    ...event_data,
    timestamp: Date.now(),
    page_url: window.location.href
  });
}

// Prevent duplicate events on route changes
let lastEventTracker = new Map<string, number>();

export function trackEventOnce(eventKey: string, trackingFunction: () => void, cooldownMs: number = 2000) {
  const now = Date.now();
  const lastTracked = lastEventTracker.get(eventKey) || 0;
  
  if (now - lastTracked > cooldownMs) {
    trackingFunction();
    lastEventTracker.set(eventKey, now);
  }
}