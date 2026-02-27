import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Lock } from "lucide-react";

const securityBadges = [
  {
    icon: Lock,
    text: "256-bit SSL"
  },
  {
    icon: Shield,
    text: "Payments by Stripe"
  },
  {
    icon: Award,
    text: "Offline-First Architecture"
  }
];

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-6">
            Try Your AI Business Manager Free
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Designed to eliminate hours of weekly admin, from first photo to final payment. Free forever to start.
          </p>
          
          {/* Primary CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="btn-primary flex items-center gap-3 mx-auto group text-lg px-12 py-4"
            data-testid="button-final-cta-trial"
          >
            Get Your AI Business Manager
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[var(--color-text-secondary)] text-sm mt-4"
          >
            Free forever · No credit card required · Cancel anytime
          </motion.p>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[var(--color-border-light)] pt-8"
        >
          <p className="text-[var(--color-text-secondary)] text-sm mb-6">
            Trusted by contractors nationwide • Enterprise-grade security
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-[var(--color-text-secondary)]"
              >
                <badge.icon className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}