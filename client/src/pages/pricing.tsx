import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { tiers } from "@/data/pricing";
import { FEATURE_COMPARISON, FEATURE_CATEGORIES, PRICING_FAQS, TRIAL_DURATION_DAYS } from "@/lib/pricing-data";
import { COMPETITOR_MATH_EXAMPLES } from "@/lib/competitor-data";
import Pricing from "@/components/Pricing";
import UnifiedFooter from "@/components/unified-footer";

export default function PricingPage() {
  const [, navigate] = useLocation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["Limits", "AI Tools"]));

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  };

  const productSchemas = tiers.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `CONSTRUKTR ${tier.name} Plan`,
    description: tier.tagline,
    brand: { "@type": "Brand", name: "CONSTRUKTR" },
    category: "Software",
    offers: {
      "@type": "Offer",
      price: tier.priceMonthly,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://construktr.ai/pricing",
    },
  }));

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Pricing — Construktr</title>
        <meta name="description" content="Transparent contractor software pricing. Free forever plan. No per-user fees. Starter $49/mo, Core $99/mo, Pro $199/mo, Business $349/mo. Save ~20% with annual billing." />
        <link rel="canonical" href="https://construktr.ai/pricing" />
        <meta property="og:title" content="Construktr Pricing — Free to Start, No Per-User Fees" />
        <meta property="og:description" content="5 plans from $0 to $349/mo. Your whole team included. 14-day free trial on paid plans." />
        <meta property="og:url" content="https://construktr.ai/pricing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Construktr Pricing" />
        <meta name="twitter:description" content="Free forever plan. No per-user fees. AI tools included." />
        <script type="application/ld+json">
          {JSON.stringify(productSchemas)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-8" style={{ background: 'var(--gradient-hero-rich)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4"
          >
            Transparent Pricing. No Surprises.
            <span className="block text-[var(--color-primary)]">No Per-User Fees.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto"
          >
            Start free forever. Your whole team is included on every plan. Upgrade when you're ready.
          </motion.p>
        </div>
      </section>

      {/* Tier Cards (shared component) */}
      <Pricing />

      {/* Full Feature Comparison Table */}
      <section className="py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-3">
              Full Feature Comparison
            </h2>
            <p className="text-[var(--color-text-secondary)]">Every feature, every tier. No surprises.</p>
          </motion.div>

          <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-lg">
            {/* Header */}
            <div className="hidden md:grid grid-cols-7 gap-0 border-b border-[var(--color-border)] bg-[var(--color-surface-alt,#f9fafb)]">
              <div className="col-span-2 px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Feature</div>
              {["Free", "Starter", "Core", "Pro", "Business"].map((name) => (
                <div key={name} className="px-3 py-4 text-center text-sm font-semibold text-[var(--color-text-primary)]">
                  {name}
                </div>
              ))}
            </div>

            {/* Categories */}
            {FEATURE_CATEGORIES.map((category) => {
              const isExpanded = expandedCategories.has(category);
              const rows = FEATURE_COMPARISON.filter(f => f.category === category);
              return (
                <div key={category}>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between px-6 py-3 bg-[var(--color-surface-alt,#f9fafb)] border-b border-[var(--color-border)] hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm font-bold text-[var(--color-text-primary)]">{category}</span>
                    <ChevronDown className={`w-4 h-4 text-[var(--color-text-secondary)] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  {isExpanded && rows.map((row, idx) => (
                    <div key={idx} className="hidden md:grid grid-cols-7 gap-0 border-b border-[var(--color-border)] last:border-b-0">
                      <div className="col-span-2 px-6 py-3 text-sm text-[var(--color-text-primary)]">{row.name}</div>
                      {(['free', 'starter', 'core', 'pro', 'business'] as const).map((tier) => (
                        <div key={tier} className="px-3 py-3 text-center">
                          <FeatureCell value={row[tier]} />
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* Mobile view */}
                  {isExpanded && rows.map((row, idx) => (
                    <div key={`m-${idx}`} className="md:hidden border-b border-[var(--color-border)] px-6 py-3">
                      <p className="text-sm font-medium text-[var(--color-text-primary)] mb-2">{row.name}</p>
                      <div className="grid grid-cols-5 gap-1 text-center text-xs">
                        {(['free', 'starter', 'core', 'pro', 'business'] as const).map((tier) => (
                          <div key={tier}>
                            <span className="block text-[var(--color-text-secondary)] mb-0.5 capitalize">{tier}</span>
                            <FeatureCell value={row[tier]} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitor Cost Comparison */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-3">
              Do the math. You'll switch.
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Real prices from real competitors. Per-user fees add up fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPETITOR_MATH_EXAMPLES.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6"
              >
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">{example.scenario}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20">
                    <div>
                      <span className="font-semibold text-[var(--color-primary)]">CONSTRUKTR {example.construktr.plan}</span>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{example.construktr.breakdown}</p>
                    </div>
                    <span className="text-2xl font-black text-[var(--color-primary)]">${example.construktr.cost}/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-[var(--color-border)]">
                    <div>
                      <span className="font-semibold text-[var(--color-text-primary)]">Jobber {example.jobber.plan}</span>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{example.jobber.breakdown}</p>
                    </div>
                    <span className="text-2xl font-black text-red-500">${example.jobber.cost}/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-[var(--color-border)]">
                    <div>
                      <span className="font-semibold text-[var(--color-text-primary)]">Housecall Pro {example.housecallpro.plan}</span>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{example.housecallpro.breakdown}</p>
                    </div>
                    <span className="text-2xl font-black text-red-500">${example.housecallpro.cost}/mo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/get")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-bold text-lg rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[var(--color-text-primary)] pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[var(--color-text-secondary)] flex-shrink-0 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: 'var(--gradient-cta)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop overpaying?</h2>
          <p className="text-blue-100 mb-8">
            Start free today. No credit card. {TRIAL_DURATION_DAYS}-day trial on paid plans.
          </p>
          <button
            onClick={() => navigate("/get")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[var(--color-primary)] font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
          >
            Start Free — No Credit Card
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <UnifiedFooter />
    </div>
  );
}

function FeatureCell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-4 h-4 text-green-600 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-gray-300 mx-auto" />;
  return <span className="text-xs text-[var(--color-text-primary)] font-medium">{value}</span>;
}
