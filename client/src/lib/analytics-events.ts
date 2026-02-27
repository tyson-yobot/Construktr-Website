// Analytics event tracking for CONSTRUKTR website
// Tracks essential funnel events for conversion optimization

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
}

// Declare global dataLayer for GTM
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Check if analytics is available (Google Analytics or other tracking)
const isAnalyticsAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.gtag === 'function';
};

// Generic event tracking function with GTM dataLayer support
const trackEvent = (event: string, properties: Record<string, any> = {}) => {
  // Always track to GTM dataLayer (more reliable)
  if (typeof window !== 'undefined') {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    
    window.dataLayer.push({
      event,
      ...properties,
      timestamp: Date.now(),
      page_url: window.location.href,
      page_title: document.title
    });
  }

  // Also send to Google Analytics if available
  if (isAnalyticsAvailable()) {
    window.gtag('event', event, {
      event_category: 'engagement',
      ...properties
    });
  }

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log('Analytics Event:', event, properties);
  }
};

// CTA Tracking Events
export const trackCTAStartTrialClicked = (location: 'hero' | 'pricing' | 'sticky-nav') => {
  trackEvent('cta_start_trial_clicked', {
    origin: location,
    event_category: 'conversion',
    event_label: `start_trial_${location}`
  });
};

export const trackCTABookDemoClicked = (location?: string) => {
  trackEvent('cta_book_demo_clicked', {
    location: location || 'unknown',
    event_category: 'conversion',
    event_label: `book_demo_${location || 'unknown'}`
  });
};

// Video Engagement Tracking
export const trackVideoPlayed45sDemo = (percentWatched: number) => {
  trackEvent('video_demo_progress', {
    percent: Math.round(percentWatched),
    origin: 'homepage',
    event_category: 'engagement',
    event_label: `video_completion_${Math.round(percentWatched)}%`,
    value: Math.round(percentWatched)
  });
};

// Trade Chip Navigation Tracking
export const trackTradeChipClicked = (tradeName: string) => {
  trackEvent('trade_chip_clicked', {
    trade: tradeName.toLowerCase(),
    event_category: 'navigation',
    event_label: `trade_${tradeName.toLowerCase()}`
  });
};

// Pricing Plan Selection
export const trackPricingPlanSelected = (planName: string, price?: number) => {
  trackEvent('pricing_plan_selected', {
    plan: planName.toLowerCase(),
    price: price,
    event_category: 'conversion',
    event_label: `plan_${planName.toLowerCase()}`,
    value: price
  });
};

// App Store Badge Clicks with UTM Attribution
export const trackAppStoreBadgeClicked = (store: 'app_store' | 'google_play', location: 'hero' | 'footer') => {
  trackEvent('app_store_badge_clicked', {
    store,
    location,
    utm_source: 'website',
    utm_medium: 'app_store_badge',
    utm_campaign: `${store}_${location}`,
    event_category: 'conversion',
    event_label: `${store}_download_${location}`
  });
};

// Funnel Events - CEO Requirements
export const trackPromoBarClicked = (buttonId: 'download' | 'start_trial') => {
  trackEvent('promo_bar_clicked', {
    button_id: buttonId,
    context: 'promo_bar',
    timestamp: Date.now(),
    event_category: 'conversion'
  });
};

export const trackDownloadClicked = (store: 'ios' | 'android', source: string = 'unknown') => {
  trackEvent('download_clicked', {
    store,
    source,
    timestamp: Date.now(),
    event_category: 'conversion',
    event_label: `${store}_download_${source}`
  });
};

export const trackVideoDemoPlay = (origin: string = 'homepage') => {
  trackEvent('video_demo_play', {
    origin,
    timestamp: Date.now(),
    event_category: 'engagement',
    event_label: 'demo_video_started'
  });
};

export const trackVideoDemoProgress = (percentage: 25 | 50 | 75 | 100) => {
  trackEvent('video_demo_progress', {
    percent: percentage,
    timestamp: Date.now(),
    event_category: 'engagement',
    event_label: `demo_video_${percentage}%`,
    value: percentage
  });
};

// Enhanced GTM/DataLayer Integration
export const pushToDataLayer = (eventData: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      ...eventData,
      timestamp: Date.now()
    });
  }
  
  // Also log in development
  if (import.meta.env.DEV) {
    console.log('DataLayer Push:', eventData);
  }
};

// GTM Event Wrapper
export const trackGTMEvent = (event: string, properties: Record<string, any> = {}) => {
  pushToDataLayer({
    event,
    ...properties
  });
  
  // Also send to Google Analytics if available
  trackEvent(event, properties);
};

// Custom event for any additional tracking needs
export const trackCustomEvent = (eventName: string, properties: Record<string, any> = {}) => {
  // Send to both GTM and GA
  trackGTMEvent(eventName, properties);
  trackEvent(eventName, properties);
};

// Initialize analytics tracking
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Enhanced ecommerce tracking setup
    if (window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
        enhanced_ecommerce: true,
        custom_map: {
          custom_dimension_1: 'trade_type',
          custom_dimension_2: 'user_location'
        }
      });
    }
  }
};

// Helper to track page views with additional context
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (isAnalyticsAvailable()) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
};