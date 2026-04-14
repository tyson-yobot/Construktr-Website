import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  noindex?: boolean;
}

const defaultKeywords = [
  'AI construction management',
  'construction app',
  'contractor software',
  'business card scanner',
  'AI quoting software',
  'construction project management',
  'mobile construction app',
  'contractor CRM',
  'construction scheduling',
  'payment processing construction',
  'AR documentation',
  'voice commands construction',
  'smart scheduling',
  'construction ROI calculator',
  'digital construction tools',
  'automated quoting',
  'construction workflow',
  'field management app',
  'construction time tracking',
  'mobile invoicing construction'
];

const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CONSTRUKTR",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Construction Management",
  "operatingSystem": ["iOS", "Android", "Web"],
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "Automate AI LLC",
    "duns": "144907976",
    "url": "https://construktr.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Automate AI LLC",
    "logo": {
      "@type": "ImageObject",
      "url": "https://construktr.ai/logo.png"
    }
  },
  "description": "World's most advanced AI-powered construction management platform with 103+ features including AI quoting, business card scanning, smart scheduling, and more.",
  "features": [
    "AI-Powered Quoting",
    "Business Card Scanner", 
    "Smart Scheduling",
    "Payment Processing",
    "AR Documentation",
    "Voice Commands",
    "Project Management",
    "Time Tracking",
    "CRM Integration",
    "Mobile App",
    "ROI Calculator",
    "103+ Features"
  ],
  "screenshot": [
    "https://construktr.ai/screenshots/dashboard.jpg",
    "https://construktr.ai/screenshots/mobile-app.jpg",
    "https://construktr.ai/screenshots/ai-quoting.jpg"
  ],
  "downloadUrl": [
    "https://apps.apple.com/app/construktr",
    "https://play.google.com/store/apps/details?id=com.construktr.app"
  ]
};

export function SEOOptimizationAdvanced({
  title = "CONSTRUKTR - AI Construction Management Platform | 103+ Features",
  description = "World's most advanced AI-powered construction management platform. 103+ features including AI quoting, business card scanning, smart scheduling. Trusted by 1000+ contractors.",
  keywords = defaultKeywords,
  canonicalUrl = "https://construktr.ai",
  ogImage = "https://construktr.ai/og-image.jpg",
  structuredData = defaultStructuredData,
  noindex = false
}: SEOProps) {
  
  useEffect(() => {
    // Preload critical resources
    const preloadResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
      { href: ogImage, as: 'image' },
      { href: '/app-icon-192.png', as: 'image' }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.as === 'font') link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const prefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    prefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Optimize images with intersection observer
    const observeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Run image optimization after component mount
    setTimeout(observeImages, 100);

    // Add page timing tracking
    if (typeof gtag !== 'undefined') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            gtag('event', 'page_timing', {
              event_category: 'performance',
              page_load_time: Math.round(navigation.loadEventEnd - navigation.navigationStart),
              dom_ready_time: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart),
              first_paint_time: Math.round(navigation.loadEventStart - navigation.navigationStart)
            });
          }
        }, 1000);
      });
    }
  }, [ogImage]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Automate AI LLC" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CONSTRUKTR" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@construktr" />
      <meta name="twitter:creator" content="@construktr" />

      {/* Mobile & App Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CONSTRUKTR" />
      <meta name="application-name" content="CONSTRUKTR" />
      <meta name="theme-color" content="#0243D5" />
      <meta name="msapplication-TileColor" content="#0243D5" />

      {/* App Store & Deep Linking */}
      <meta name="apple-itunes-app" content="app-id=CONSTRUKTR_APP_ID, app-argument=https://construktr.ai" />
      <meta name="google-play-app" content="app-id=com.construktr.app" />
      <link rel="alternate" href="android-app://com.construktr.app/https/construktr.ai" />
      <link rel="alternate" href="ios-app://CONSTRUKTR_APP_ID/https/construktr.ai" />

      {/* Business Information */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="business:contact_data:street_address" content="Remote-First Company" />
      <meta name="business:contact_data:locality" content="United States" />
      <meta name="business:contact_data:region" content="US" />
      <meta name="business:contact_data:phone_number" content="+17013718391" />
      <meta name="business:contact_data:email" content="support@construktr.ai" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Industry-Specific Keywords */}
      <meta name="industry" content="Construction, Contracting, Building, Architecture" />
      <meta name="target_audience" content="Contractors, Construction Companies, Project Managers" />
      <meta name="service_area" content="United States, Canada, Global" />

      {/* Advanced SEO */}
      <meta name="news_keywords" content="AI construction, digital transformation, contractor technology, mobile apps" />
      <meta name="standout" content="https://construktr.ai" />
      <link rel="amphtml" href={`${canonicalUrl}/amp`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Business Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Automate AI LLC",
          "alternateName": "CONSTRUKTR",
          "url": "https://construktr.ai",
          "logo": "https://construktr.ai/logo.png",
          "duns": "144907976",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-701-371-8391",
            "contactType": "customer support",
            "email": "support@construktr.ai",
            "availableLanguage": ["English"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          },
          "sameAs": [
            "https://twitter.com/construktr",
            "https://linkedin.com/company/construktr",
            "https://facebook.com/construktr"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": "10-50",
          "industry": "Construction Technology",
          "description": "Leading provider of AI-powered construction management software trusted by 1000+ contractors worldwide."
        })}
      </script>

      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is CONSTRUKTR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CONSTRUKTR is the world's most advanced AI-powered construction management platform with 103+ features including AI quoting, business card scanning, smart scheduling, and more."
              }
            },
            {
              "@type": "Question", 
              "name": "How much does CONSTRUKTR cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "CONSTRUKTR offers three plans: Starter ($49/month), Pro ($99/month), and Enterprise ($199/month). All plans include a 14-day free trial."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a mobile app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, CONSTRUKTR has native mobile apps for both iOS and Android with full offline functionality and sync capabilities."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}