import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, Wifi } from "lucide-react";
import { useLocation } from "wouter";
import AppStoreBadges from "./app-store-badges";

const securityBadges = [
  { icon: Lock, text: "256-bit SSL encryption" },
  { icon: Shield, text: "Payments by Stripe" },
  { icon: Wifi, text: "Offline-first architecture" },
];

export default function FinalCTA() {
  const [, navigate] = useLocation();

  return (
    <section className="py-20" style={{ background: 'var(--gradient-cta)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Your competitors are still doing paperwork by hand.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            You don't have to. Start free today — no credit card, no commitment, no per-user fees.
          </p>

          <button
            onClick={() => navigate("/get")}
            className="inline-flex items-center gap-3 px-12 py-4 bg-white text-[var(--color-primary)] font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors shadow-xl group"
          >
            Start Free — No Credit Card
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-blue-200 text-sm mt-4">
            Free forever plan &middot; 14-day trial on paid plans &middot; Cancel anytime
          </p>
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <AppStoreBadges />
        </motion.div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {securityBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-blue-200">
                <badge.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
