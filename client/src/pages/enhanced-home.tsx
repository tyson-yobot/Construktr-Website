// ENHANCED HOME PAGE - AI-FIRST POSITIONING
// Showcases CONSTRUKTR as the world's most advanced AI construction platform

// New AI-focused components
import EnhancedAIHero from "@/components/enhanced-ai-hero";
import AIToolsShowcase from "@/components/ai-tools-showcase";
import CompetitiveAIComparison from "@/components/competitive-ai-comparison";

// Enhanced existing components
import CredibilityStrip from "@/components/credibility-strip";
import BeforeAfterStory from "@/components/before-after-story";
import TabbedDemo from "@/components/TabbedDemo"; // Updated with better screenshots
import HowItWorks from "@/components/how-it-works"; // Updated with AI screenshots
import ComprehensiveFeatures from "@/components/comprehensive-features";
import RoleBasedSections from "@/components/role-based-sections";
import ComparisonTable from "@/components/comparison-table";
import ComprehensiveFAQ from "@/components/comprehensive-faq";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/sticky-mobile-cta";
import SectionDivider from "@/components/section-divider";
import AppDownloadSection from "@/components/app-download-section";

// Infrastructure components
import UnifiedFooter from "@/components/unified-footer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import SEOHead from "@/components/seo-head";
import PerformanceMonitor from "@/components/performance-monitor";
import SkipLink from "@/components/skip-link";
import StructuredData from "@/components/structured-data";
import { initializeAnalytics } from "@/lib/analytics-events";
import React from "react";

// SEO Ecosystem Components
import ProductGrid from "@/components/seo/ProductGrid";

const ecosystemProducts = [
  {
    name: "Construktr",
    url: "https://CONSTRUKTR.ai",
    tagline: "AI field operations platform for contractors",
    anchors: ["AI contractor app", "contractor scheduling software", "GPT-4 construction platform"]
  },
  {
    name: "InspectOne",
    url: "https://inspectone.ai",
    tagline: "AI-powered inspection management",
    anchors: ["AI inspection software", "construction quality control"]
  },
  {
    name: "FieldSync",
    url: "https://fieldsync.ai", 
    tagline: "Real-time field data synchronization",
    anchors: ["field management software", "construction data sync"]
  }
];

// Enhanced SEO Schema for AI-first positioning
const enhancedSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CONSTRUKTR",
  "description": "The world's most advanced AI-powered construction management platform with 17 AI tools including GPT-4, Deep Learning, Computer Vision, and Machine Learning capabilities.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "iOS, Android",
  "offers": [
    {
      "@type": "Offer",
      "name": "CONSTRUKTR Pro",
      "price": "199",
      "priceCurrency": "USD",
      "description": "Advanced AI platform with 17 AI tools, GPT-4 integration, Deep Learning analytics"
    }
  ],
  "featureList": [
    "17 Advanced AI Tools",
    "GPT-4 Powered Business Intelligence",
    "Computer Vision Part Recognition",
    "Deep Learning Revenue Forecasting", 
    "Machine Learning Route Optimization",
    "Natural Language Voice Commands",
    "99.7% OCR Document Scanner",
    "AI Photo Estimating with AR"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2847"
  }
};

export default function EnhancedHomePage() {
  React.useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <>
      {/* Enhanced SEO */}
      <SEOHead 
        title="CONSTRUKTR - World's Most Advanced AI Construction Platform | 17 AI Tools"
        description="Revolutionary AI platform with GPT-4, Deep Learning, Computer Vision. 17 AI tools vs competitors' basic automation. Used by Fortune 500 contractors. See why we're 5 years ahead."
        canonicalUrl="https://construktr.ai"
        keywords="AI construction software, GPT-4 contractor app, computer vision construction, deep learning construction management, AI contractor platform, machine learning field service"
      />

      {/* Enhanced Structured Data */}
      <StructuredData data={enhancedSchema} />

      {/* Performance & Accessibility */}
      <SkipLink />
      <PerformanceOptimizer />
      <PerformanceMonitor />

      {/* MAIN CONTENT - AI-FIRST NARRATIVE */}
      
      {/* 1. ENHANCED AI HERO - Positions as most advanced platform */}
      <EnhancedAIHero />
      
      {/* 2. CREDIBILITY STRIP - Updated messaging */}
      <CredibilityStrip />
      
      {/* 3. AI TOOLS SHOWCASE - New section highlighting 17 AI capabilities */}
      <AIToolsShowcase />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* 4. TABBED DEMO - Updated with better screenshots */}
      <TabbedDemo />
      
      {/* 5. COMPETITIVE COMPARISON - New section showing AI superiority */}
      <CompetitiveAIComparison />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* 6. HOW IT WORKS - Updated with AI-focused screenshots */}
      <HowItWorks />
      
      {/* 7. BEFORE/AFTER STORY - AI transformation narrative */}
      <BeforeAfterStory />
      
      {/* 8. COMPREHENSIVE FEATURES - Enhanced AI messaging */}
      <ComprehensiveFeatures />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* 9. ROLE-BASED SECTIONS - AI benefits for each role */}
      <RoleBasedSections />
      
      {/* 10. COMPARISON TABLE - Traditional vs AI approach */}
      <ComparisonTable />
      
      {/* 11. PRICING - AI value proposition */}
      <Pricing />
      
      {/* 12. FAQ - AI-focused questions */}
      <ComprehensiveFAQ />
      
      {/* 13. APP DOWNLOAD - Mobile AI platform */}
      <AppDownloadSection />
      
      {/* 14. FINAL CTA - AI advantage messaging */}
      <FinalCTA />

      {/* SEO Product Grid */}
      <ProductGrid products={ecosystemProducts} />

      {/* Infrastructure */}
      <UnifiedFooter />
      <StickyMobileCTA />
    </>
  );
}