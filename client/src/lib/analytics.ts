// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Google Analytics not initialized: VITE_GA_MEASUREMENT_ID not found');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href
    });
  `;
  document.head.appendChild(script2);

  console.log('Google Analytics initialized with ID:', measurementId);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href
  });
};

// Track conversion events
export const trackConversion = (
  eventName: string,
  parameters?: {
    value?: number;
    currency?: string;
    transaction_id?: string;
    items?: any[];
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, {
    event_category: 'conversion',
    ...parameters,
  });
  
  console.log('Conversion tracked:', eventName, parameters);
};

// Track business events
export const trackBusinessEvent = (
  action: string, 
  category: string = 'engagement',
  label?: string, 
  value?: number,
  customParameters?: Record<string, any>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...customParameters,
  });
  
  console.log('Business event tracked:', { action, category, label, value, customParameters });
};

// Simple website conversion tracking
export const analytics = {
  // Button clicks
  trackButtonClick: (buttonName: string, location: string) => {
    trackBusinessEvent('button_click', 'engagement', buttonName, undefined, {
      button: buttonName,
      location,
      page: window.location.pathname
    });
  },

  // Demo request
  trackDemoRequest: (source: string = 'website') => {
    trackConversion('demo_request');
    trackBusinessEvent('request_demo', 'conversion', source);
  },

  // Contact form
  trackContactForm: () => {
    trackConversion('contact_form');
    trackBusinessEvent('submit_contact', 'conversion');
  },

  // Newsletter signup
  trackNewsletterSignup: () => {
    trackConversion('newsletter_signup');
    trackBusinessEvent('subscribe_newsletter', 'conversion');
  },

  // Engagement tracking
  trackEngagement: (action: string) => {
    trackBusinessEvent('engagement', 'interaction', action);
  }
};