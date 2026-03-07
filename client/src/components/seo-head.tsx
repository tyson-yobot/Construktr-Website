import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "CONSTRUKTR — Contractor App for Quotes, Scheduling & Payments",
  description = "Transform your contracting business with Construktr. Generate professional quotes in 30 seconds, optimize routes automatically, and get paid same-day. Free to start — no credit card required.",
  canonical = "https://CONSTRUKTR.ai",
  ogImage = "https://CONSTRUKTR.ai/og-image-construktr.jpg",
  structuredData
}: SEOHeadProps) {
  
  // Enhanced Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CONSTRUKTR",
    "alternateName": "Construktr",
    "legalName": "Automate AI LLC",
    "url": "https://CONSTRUKTR.ai",
    "logo": "https://construktr.ai/construktr-logo.svg",
    "sameAs": [
      "https://apps.apple.com/app/construktr",
      "https://play.google.com/store/apps/details?id=com.construktr"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@CONSTRUKTR.ai",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "addressCountry": "US"
    }
  };

  // Enhanced SoftwareApplication Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CONSTRUKTR",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Project Management",
    "operatingSystem": "iOS, Android, Web",
    "description": "AI contractor app for professional job management - generate quotes in 30 seconds, optimize scheduling routes, and process same-day payments. The best contractor management software for HVAC, plumbing, electrical, and service businesses.",
    "features": [
      "AI-powered estimating software for instant quotes",
      "Smart scheduling for service businesses with route optimization",
      "Same-day payment processing and invoicing",
      "Mobile field operations app with offline support",
      "Contractor workflow automation and CRM tools"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to start, no credit card required",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "49",
        "priceCurrency": "USD",
        "unitText": "per month"
      }
    },
    "downloadUrl": [
      "https://apps.apple.com/app/construktr",
      "https://play.google.com/store/apps/details?id=com.construktr"
    ],
    "softwareVersion": "2.1.0",
    "datePublished": "2023-01-15",
    "author": organizationSchema,
    "publisher": organizationSchema
  };

  // FAQ Schema for Common Questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I generate quotes with CONSTRUKTR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CONSTRUKTR uses AI-powered technology to generate professional quotes in under 30 seconds. Simply take photos of the job site, and our AI calculates materials, labor, and pricing automatically."
        }
      },
      {
        "@type": "Question", 
        "name": "Does CONSTRUKTR work for all types of contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CONSTRUKTR supports HVAC, plumbing, electrical, roofing, painting, landscaping, handyman, and general contracting work with trade-specific features for each."
        }
      },
      {
        "@type": "Question",
        "name": "How much does CONSTRUKTR cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construktr offers four plans: Free ($0), Starter ($49/month), Pro ($89/month), and Business ($199/month). The Free plan is available forever with no credit card required. Annual billing saves approximately 20%."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get paid the same day with CONSTRUKTR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CONSTRUKTR includes on-site card payment processing with same-day deposits. Accept payments immediately upon job completion using our integrated card reader."
        }
      },
      {
        "@type": "Question",
        "name": "Does CONSTRUKTR help with scheduling and routing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. CONSTRUKTR's AI optimizes your daily routes to save 2+ hours of drive time and prevents double-booking with intelligent scheduling coordination."
        }
      }
    ]
  };

  // Combine all structured data
  const combinedStructuredData = structuredData || [
    organizationSchema,
    softwareApplicationSchema,
    faqSchema
  ];

  return (
    <Helmet>
      {/* Enhanced Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="AI contractor app, contractor management software, construction business automation, field service management AI, AI-powered estimating software, mobile field operations app, contractor productivity app, service business software, AI scheduling software, smart scheduling for service businesses, reduce contractor scheduling errors, contractor workflow automation, plumbing business app, HVAC scheduling app, electrical contractor software, roofing quote generator, landscaping business app, handyman job management, contractor CRM, same-day contractor payments, AI quote generator, contractor route optimization" />
      <link rel="canonical" href={canonical} />

      {/* Enhanced Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="CONSTRUKTR" />
      <meta property="og:locale" content="en_US" />

      {/* Enhanced Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@construktr" />
      <meta name="twitter:creator" content="@construktr" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Automate AI LLC" />
      <meta name="publisher" content="Automate AI LLC" />
      <meta name="copyright" content="© 2026 Automate AI LLC. All rights reserved." />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="var(--color-brand-600)" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CONSTRUKTR" />
      
      {/* Performance Critical Preloads */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//apps.apple.com" />
      <link rel="dns-prefetch" href="//play.google.com" />

      {/* Enhanced Structured Data - Multiple Schemas */}
      {Array.isArray(combinedStructuredData) ? (
        combinedStructuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(combinedStructuredData)}
        </script>
      )}
    </Helmet>
  );
}