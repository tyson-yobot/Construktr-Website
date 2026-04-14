// Homepage — Pain → Promise → Proof → Push conversion framework
import ConversionHero from "@/components/conversion-hero";
import PainPoints from "@/components/pain-points";
import TabbedDemo from "@/components/TabbedDemo";
import RoleBasedSections from "@/components/role-based-sections";
import CompetitorComparison from "@/components/competitor-comparison";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/social-proof";
import ComprehensiveFAQ from "@/components/comprehensive-faq";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/sticky-mobile-cta";
import SectionDivider from "@/components/section-divider";
import AppDownloadSection from "@/components/app-download-section";

import UnifiedFooter from "@/components/unified-footer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import SEOHead from "@/components/seo-head";
import PerformanceMonitor from "@/components/performance-monitor";
import SkipLink from "@/components/skip-link";
import StructuredData from "@/components/structured-data";
import { initializeAnalytics } from "@/lib/analytics-events";
import React from "react";

import ProductGrid from "@/components/seo/ProductGrid";

const ecosystemProducts = [
  {
    name: "Construktr",
    url: "https://CONSTRUKTR.ai",
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
  React.useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      <SkipLink />
      <PerformanceOptimizer />
      <SEOHead />
      <PerformanceMonitor />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        {/* 1. Hero — Hook them with the headline + rotating scenario quotes */}
        <ConversionHero />

        {/* 2. Pain Points — 3-column: chasing payments, double-bookings, slow estimates */}
        <PainPoints />

        <SectionDivider variant="light-blue" />

        {/* 3. Feature Showcase — Interactive tabs: Quote/Schedule/Pay */}
        <TabbedDemo />

        <SectionDivider variant="light-blue" />

        {/* 4. Role-Based — For Owners, Dispatchers, Field Techs */}
        <RoleBasedSections />

        {/* 5. Competitor Comparison — The killer section */}
        <CompetitorComparison />

        <SectionDivider variant="light-blue" />

        {/* 6. Pricing Preview */}
        <Pricing />

        {/* 7. Social Proof — Testimonials */}
        <SocialProof />

        <SectionDivider variant="light-blue" />

        {/* 8. FAQ */}
        <ComprehensiveFAQ />

        {/* 9. Final CTA */}
        <FinalCTA />

        {/* Ecosystem */}
        <ProductGrid products={ecosystemProducts} currentProduct="Construktr" />

        {/* App Download */}
        <AppDownloadSection />
      </main>

      <StickyMobileCTA />
      <UnifiedFooter />
      <StructuredData />
    </div>
  );
}
