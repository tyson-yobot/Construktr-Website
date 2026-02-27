import { useEffect } from 'react';

// Facebook/Meta Pixel
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Google Analytics / Google Ads
declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

interface RetargetingPixelsProps {
  page?: string;
  event?: string;
  data?: Record<string, any>;
}

export default function RetargetingPixels({ page = 'PageView', event, data }: RetargetingPixelsProps) {
  useEffect(() => {
    // Initialize Facebook Pixel if not already loaded
    if (typeof window !== 'undefined' && !window.fbq) {
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      // Initialize with your Facebook Pixel ID (to be set via environment variable)
      if (import.meta.env.VITE_FB_PIXEL_ID) {
        window.fbq('init', import.meta.env.VITE_FB_PIXEL_ID);
      }
    }

    // Initialize Google Analytics if not already loaded
    if (typeof window !== 'undefined' && !window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());

      // Load Google Analytics script
      if (import.meta.env.VITE_GA_ID) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
        document.head.appendChild(script);
        
        window.gtag('config', import.meta.env.VITE_GA_ID);
      }
    }

    // Track page view
    if (typeof window !== 'undefined') {
      // Facebook Pixel tracking
      if (window.fbq) {
        if (event) {
          window.fbq('track', event, data || {});
        } else {
          window.fbq('track', page);
        }
      }

      // Google Analytics tracking
      if (window.gtag) {
        if (event) {
          window.gtag('event', event, {
            custom_parameter: data || {},
            page_title: document.title,
            page_location: window.location.href
          });
        } else {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      }
    }
  }, [page, event, data]);

  return null; // This component doesn't render anything
}

// Custom hooks for tracking specific events
export function useTrackConversion(conversionType: string, value?: number) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Facebook Conversion tracking
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          value: value || 0,
          currency: 'USD',
          content_type: conversionType
        });
      }

      // Google Ads Conversion tracking
      if (window.gtag && import.meta.env.VITE_GOOGLE_ADS_ID) {
        window.gtag('event', 'conversion', {
          send_to: `${import.meta.env.VITE_GOOGLE_ADS_ID}/${conversionType}`,
          value: value || 0,
          currency: 'USD'
        });
      }
    }
  }, [conversionType, value]);
}

export function useTrackAppDownload(platform: 'ios' | 'android') {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Facebook App Download tracking
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_type: 'app_download',
          content_name: `CONSTRUKTR_${platform.toUpperCase()}`,
          value: 0,
          currency: 'USD'
        });
      }

      // Google Analytics App Download tracking
      if (window.gtag) {
        window.gtag('event', 'app_download_initiated', {
          platform: platform,
          app_name: 'CONSTRUKTR',
          method: 'website_button'
        });
      }
    }
  }, [platform]);
}

export function useTrackLeadMagnet(magnetType: string) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Facebook Lead tracking
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_type: 'lead_magnet',
          content_name: magnetType,
          value: 0,
          currency: 'USD'
        });
      }

      // Google Analytics Lead tracking
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          method: 'lead_magnet',
          content: magnetType,
          value: 0
        });
      }
    }
  }, [magnetType]);
}