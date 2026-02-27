import { motion } from "framer-motion";
import { Shield, Award, Lock, CheckCircle2 } from "lucide-react";

const integrationLogos = [
  { name: "Stripe", logo: "💳", description: "Payment Processing" },
  { name: "QuickBooks", logo: "📊", description: "Accounting Sync" },
  { name: "Google Maps", logo: "🗺️", description: "Route Optimization" },
  { name: "Supabase", logo: "⚡", description: "Real-time Database" },
  { name: "AWS", logo: "☁️", description: "Cloud Infrastructure" },
  { name: "Twilio", logo: "📱", description: "SMS & WhatsApp" },
];

const trustBadges = [
  { icon: Lock, label: "Payments by Stripe", description: "PCI-DSS compliant" },
  { icon: Shield, label: "Offline-First", description: "Works without signal" },
  { icon: CheckCircle2, label: "Your Data", description: "You own it, always" },
  { icon: Award, label: "256-bit Encryption", description: "At rest and in transit" },
];

export default function CredibilityStrip() {
  return (
    <section className="py-12 section-bg-band border-y border-[rgba(15,23,42,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
            Built for Field Service Contractors
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
            Enterprise-Grade Infrastructure, Built for the Field
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-4 uppercase tracking-wide">
              Powered By
            </p>
            <div className="grid grid-cols-3 gap-4">
              {integrationLogos.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 bg-white rounded-xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                  data-testid={`integration-logo-${integration.name.toLowerCase()}`}
                >
                  <span className="text-3xl mb-2">{integration.logo}</span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{integration.name}</span>
                  <span className="text-xs text-[var(--color-text-secondary)]">{integration.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-4 uppercase tracking-wide">
              Security & Compliance
            </p>
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]"
                    data-testid={`trust-badge-${badge.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">{badge.label}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{badge.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            Secure API connections • Signed webhooks • 20+ event types • Full audit trail
          </p>
        </motion.div>
      </div>
    </section>
  );
}
