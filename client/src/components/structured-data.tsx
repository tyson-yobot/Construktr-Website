import { useEffect } from 'react';

const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CONSTRUKTR",
    "url": "https://CONSTRUKTR.ai",
    "logo": "https://CONSTRUKTR.ai/logo.png",
    "description": "Best contractor job management and scheduling app. AI-powered quotes, smart scheduling, and same-day payments for contractors in all 50 states.",
    "foundingDate": "2023",
    "industry": "Construction Management Software",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-CONSTRUKTR",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://apps.apple.com/app/construktr",
      "https://play.google.com/store/apps/details?id=com.construktr",
      "https://automateai.bot",
      "https://inspectone.ai"
    ]
  },
  
  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CONSTRUKTR - Contractor Job Management",
    "description": "Complete contractor business management platform with AI-powered quotes, smart scheduling, and instant payments. Built for HVAC, plumbing, electrical, roofing, and all contractor trades.",
    "url": "https://CONSTRUKTR.ai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "CONSTRUKTR"
    },
    "downloadUrl": [
      "https://apps.apple.com/app/construktr",
      "https://play.google.com/store/apps/details?id=com.construktr"
    ],
    "screenshot": "https://CONSTRUKTR.ai/app-screenshot.png"
  },

  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I generate quotes with CONSTRUKTR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CONSTRUKTR generates professional quotes in 30 seconds using AI-powered pricing with real-time material costs and labor calculations."
        }
      },
      {
        "@type": "Question", 
        "name": "Does CONSTRUKTR work for all contractor trades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CONSTRUKTR supports HVAC, plumbing, electrical, roofing, painting, landscaping, handyman, and general contracting with trade-specific features."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly do I get paid with CONSTRUKTR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CONSTRUKTR enables same-day payments through on-site card processing and automatic invoice generation, with funds deposited the next business day."
        }
      },
      {
        "@type": "Question",
        "name": "Is CONSTRUKTR available in my state?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CONSTRUKTR is available in all 50 US states with local compliance features and regional supplier integrations."
        }
      },
      {
        "@type": "Question",
        "name": "What's the ROI of using CONSTRUKTR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contractors typically see 800% ROI with CONSTRUKTR, saving 8+ hours per week and increasing quote volume by 3x while getting paid faster."
        }
      }
    ]
  }
};

export default function StructuredData() {
  useEffect(() => {
    // Add Organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(structuredData.organization);
    document.head.appendChild(orgScript);

    // Add SoftwareApplication schema
    const appScript = document.createElement('script');
    appScript.type = 'application/ld+json';
    appScript.textContent = JSON.stringify(structuredData.softwareApplication);
    document.head.appendChild(appScript);

    // Add FAQPage schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(structuredData.faqPage);
    document.head.appendChild(faqScript);

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        if (script.textContent?.includes('CONSTRUKTR')) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // This component only manages structured data
}