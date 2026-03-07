// Core sections for single narrative flow - NO DUPLICATES
// Each section appears exactly once as specified
import CEOHero from "@/components/ceo-hero";
import CredibilityStrip from "@/components/credibility-strip";
import BeforeAfterStory from "@/components/before-after-story";
import TabbedDemo from "@/components/TabbedDemo"; // BEST Demo section (Quote/Schedule/Pay tabs)
import HowItWorks from "@/components/how-it-works";
import ComprehensiveFeatures from "@/components/comprehensive-features";
import RoleBasedSections from "@/components/role-based-sections";
import AICapabilities from "@/components/ai-capabilities";
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
    url: "https://construktr.ai",
    tagline: "AI field operations platform for contractors",
    anchors: ["AI contractor app", "contractor scheduling software"]
  },
  {
    name: "InspectOne",
    url: "https://inspectone.ai",
    tagline: "AI inspection & compliance suite",
    anchors: ["AI inspection software", "EHS compliance software"]
  }
];


export default function Home() {
  // Initialize analytics on component mount
  React.useEffect(() => {
    initializeAnalytics();
  }, []);

  // Enhanced Structured Data is now handled in SEOHead component

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      {/* Accessibility Skip Link */}
      <SkipLink />
      
      {/* Performance Optimization */}
      <PerformanceOptimizer />
      
      {/* Enhanced SEO Head with Complete Schema */}
      <SEOHead />
      
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Main Content Area for Accessibility */}
      <main id="main-content" role="main">
        {/* SECTION 1: Hero */}
        <CEOHero />
        
        {/* SECTION 2: Credibility Strip - Trust badges, integration logos */}
        <CredibilityStrip />
        
        {/* SECTION 3: Before/After Story - Transformation visualization */}
        <BeforeAfterStory />
        
        {/* SECTION 4: Tabbed Demo - See It In Action (Quote/Schedule/Pay) */}
        <TabbedDemo />
        
        {/* Gradient Divider */}
        <SectionDivider variant="light-blue" />
        
        {/* SECTION 5: How It Works - 4-step onboarding flow */}
        <HowItWorks />
        
        {/* Gradient Divider */}
        <SectionDivider variant="light-blue" />
        
        {/* SECTION 6: Comprehensive Features - 63+ features */}
        <ComprehensiveFeatures />
        
        {/* SECTION 7: Role-Based Sections - For Owners, Dispatch, Techs, Finance */}
        <RoleBasedSections />
        
        {/* SECTION 8: AI Capabilities Deep Dive - Vision, Language, Predictions, Automation, Analytics */}
        <AICapabilities />
        
        {/* SECTION 9: Comparison Table - CONSTRUKTR vs Generic vs Paper */}
        <ComparisonTable />
        
        {/* Gradient Divider */}
        <SectionDivider variant="light-blue" />
        
        {/* SECTION 10: Comprehensive FAQ - Objection handling */}
        <ComprehensiveFAQ />
        
        {/* Gradient Divider */}
        <SectionDivider variant="light-blue" />
        
        {/* SECTION 11: Pricing */}
        <Pricing />
        
        {/* SECTION 12: Final CTA */}
        <FinalCTA />
        
        {/* Ecosystem Product Grid */}
        <ProductGrid products={ecosystemProducts} currentProduct="Construktr" />
        
        {/* Prominent App Download Section */}
        <AppDownloadSection />
      </main>
      
      {/* Sticky Mobile CTA for conversion - floating download button */}
      <StickyMobileCTA />
      
      {/* Unified Footer */}
      <UnifiedFooter />

      {/* Structured Data for SEO */}
      <StructuredData />
    </div>
  );
}
