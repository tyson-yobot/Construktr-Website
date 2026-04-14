import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tiers, type TierKey } from "@/data/pricing";
import { useLocation } from "wouter";

const tierColors: Record<TierKey, { badge: string; card: string; btn: string }> = {
  free: { badge: "text-gray-600", card: "bg-[var(--color-surface)] border-[var(--color-border)]", btn: "bg-gray-700 hover:bg-gray-800 text-white" },
  starter: { badge: "text-green-600", card: "bg-[var(--color-surface)] border-[var(--color-border)] hover:border-green-300", btn: "bg-green-600 hover:bg-green-700 text-white" },
  core: { badge: "text-[var(--color-primary)]", card: "bg-[var(--color-surface)] border-[var(--color-primary)] border-2 ring-4 ring-[var(--color-primary)]/20 md:scale-105", btn: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white" },
  pro: { badge: "text-purple-600", card: "bg-[var(--color-surface)] border-[var(--color-border)] hover:border-purple-300", btn: "bg-purple-600 hover:bg-purple-700 text-white" },
  business: { badge: "text-amber-600", card: "bg-[var(--color-surface)] border-[var(--color-border)] hover:border-amber-300", btn: "bg-amber-600 hover:bg-amber-700 text-white" },
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [, navigate] = useLocation();

  const getPrice = (tier: typeof tiers[number]) => {
    if (tier.priceMonthly === 0) return 0;
    return isAnnual ? tier.priceAnnual! : tier.priceMonthly;
  };

  const handleCTA = (tier: typeof tiers[number]) => {
    navigate("/get");
  };

  return (
    <section id="pricing" className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Transparent Pricing. No Per-User Fees.
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-3">
            Start free forever. Upgrade when you're ready. Your whole team is included.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            No credit card required &middot; Cancel anytime &middot; 14-day free trial on paid plans
          </p>

          <div className="inline-flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-4 py-2 shadow-sm">
            <span className={`text-sm font-medium ${!isAnnual ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isAnnual ? "bg-[var(--color-primary)]" : "bg-gray-300"}`}
              aria-label="Toggle annual billing"
            >
              <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${isAnnual ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>
              Annual <span className="text-green-600 font-semibold">(Save ~20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 items-start">
          {tiers.map((tier, index) => {
            const colors = tierColors[tier.key];
            const price = getPrice(tier);
            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                {tier.isMostPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                      <Star className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`rounded-2xl border p-5 h-full transition-all duration-300 hover:shadow-xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] ${colors.card} ${tier.isMostPopular ? "pt-8" : ""}`}>
                  <div className="mb-5">
                    <h3 className={`text-lg font-bold mb-1 ${colors.badge}`}>{tier.name}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)]">{tier.tagline}</p>
                  </div>

                  <div className="mb-5">
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-black text-[var(--color-text-primary)]">
                        ${price}
                      </span>
                      {tier.priceMonthly > 0 && (
                        <span className="text-[var(--color-text-secondary)] text-sm mb-0.5">/mo</span>
                      )}
                    </div>
                    {tier.priceMonthly === 0 && (
                      <p className="text-sm text-green-600 font-medium">Free forever</p>
                    )}
                    {tier.priceMonthly > 0 && isAnnual && (
                      <p className="text-xs text-green-600 font-medium mt-1">
                        Save ${(tier.priceMonthly - tier.priceAnnual!) * 12}/yr
                      </p>
                    )}
                    {tier.priceMonthly > 0 && !isAnnual && (
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">per month</p>
                    )}
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">{tier.users} included</p>
                  </div>

                  <Button
                    onClick={() => handleCTA(tier)}
                    className={`w-full font-semibold mb-5 ${colors.btn}`}
                    style={{ borderRadius: "8px", height: "42px" }}
                  >
                    {tier.cta}
                  </Button>

                  <div className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-primary)] text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    {tier.paymentRate && (
                      <div className="flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-secondary)] text-xs">{tier.paymentRate}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 shadow-[0_10px_25px_rgba(15,23,42,0.08)] text-center"
        >
          <p className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Why pay more for less?</p>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">No per-user fees. Your whole team is included.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { name: "CONSTRUKTR Core (5 users)", price: "$99/mo", highlight: true },
              { name: "Jobber Grow (5 users)", price: "$436/mo", detail: "$349 + 3 × $29/user", highlight: false },
              { name: "Housecall Pro (5 users)", price: "$216/mo", detail: "$129 + 3 × $29/user", highlight: false },
              { name: "ServiceTitan", price: "Hidden pricing", detail: "Requires sales call", highlight: false },
            ].map((item) => (
              <div key={item.name} className={`rounded-xl p-4 ${item.highlight ? "bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20" : "bg-[var(--color-surface-alt,#f9fafb)] border border-[var(--color-border)]"}`}>
                <p className={`text-sm font-semibold mb-1 ${item.highlight ? "text-[var(--color-primary)]" : "text-[var(--color-text-primary)]"}`}>{item.name}</p>
                <p className={`text-lg font-black ${item.highlight ? "text-[var(--color-primary)]" : "text-[var(--color-text-secondary)]"}`}>{item.price}</p>
                {"detail" in item && item.detail && (
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
