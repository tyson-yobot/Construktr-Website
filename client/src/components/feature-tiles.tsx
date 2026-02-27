import { motion } from "framer-motion";
import { Camera, Calendar, CreditCard, Scan, Clock, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Feature Tiles Section
 * Source of truth: construktr-mobile README.md
 * 
 * Highlights the 6 most important features for contractors.
 * Only Photo Estimator, OCR, and AI Time Tracking are AI-enhanced per README.
 */

const features = [
  {
    icon: Camera,
    title: "Photo Estimator",
    description: "Take job photos, apply AI-enhanced annotations, and convert to line-item estimates in seconds.",
    benefit: "AI-powered quotes",
    link: "#see-in-action",
    isAI: true
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Calendar-based job tracking with auto-collision checks and weather integration. Never double-book.",
    benefit: "Save 8+ hours/week",
    link: "#see-in-action",
    isAI: false
  },
  {
    icon: CreditCard,
    title: "Invoicing + Payments",
    description: "Generate invoices and accept payments on-site via Stripe. Cards, ACH, Apple Pay, Google Pay.",
    benefit: "Same-day deposits",
    link: "#pricing",
    isAI: false
  },
  {
    icon: Scan,
    title: "OCR / Document Scan",
    description: "Scan receipts and documents into searchable PDFs. AI extracts text and organizes data automatically.",
    benefit: "AI-powered scanning",
    link: "#see-in-action",
    isAI: true
  },
  {
    icon: Clock,
    title: "AI Time Tracking",
    description: "GPS-based automatic clock in/out with geofencing. Accurate timesheets without manual entry.",
    benefit: "Zero disputes",
    link: "#see-in-action",
    isAI: true
  },
  {
    icon: BarChart3,
    title: "QuickBooks Integration",
    description: "Bi-directional sync for invoices and customers. Keep your books accurate automatically.",
    benefit: "Auto-sync books",
    link: "#pricing",
    isAI: false
  }
];

export default function FeatureTiles() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Why Contractors Choose CONSTRUKTR™
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            The only mobile-first platform built specifically for home service contractors.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-[var(--color-border-light)] rounded-2xl p-8 hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 text-center md:text-left min-h-[280px]"
                data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* AI Badge */}
                {feature.isAI && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full uppercase tracking-wide">
                      AI
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl mb-6 group-hover:bg-[var(--color-primary)] group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0">
                  <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefit Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6 mx-auto md:mx-0">
                  <span className="text-sm font-semibold text-green-700">
                    ✓ {feature.benefit}
                  </span>
                </div>

                {/* CTA Link */}
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm hover:gap-3 transition-all duration-200 group/link mx-auto md:mx-0"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(feature.link);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid={`link-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  aria-label={`Learn how ${feature.title} works`}
                >
                  See how it works
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Ready to transform your contracting business?
          </p>
          <Button
            asChild
            className="btn-primary"
            data-testid="button-view-pricing"
          >
            <a href="#pricing">
              View Pricing Plans
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
