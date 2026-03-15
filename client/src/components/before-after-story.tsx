import { motion } from "framer-motion";
import { 
  X, Check, Phone, FileText, Clock, DollarSign, 
  Calendar, Route, CreditCard, BarChart3, ArrowRight,
  AlertTriangle, CheckCircle2, TrendingUp
} from "lucide-react";

const beforeItems = [
  { icon: Phone, text: "Endless phone calls and texts to schedule" },
  { icon: FileText, text: "Paper quotes that take hours to write" },
  { icon: Clock, text: "Chasing invoices for 30+ days" },
  { icon: AlertTriangle, text: "Double-bookings and missed appointments" },
  { icon: DollarSign, text: "Jobs that lose money without knowing why" },
];

const afterItems = [
  { icon: Calendar, text: "AI schedules and optimizes routes automatically" },
  { icon: Route, text: "Photo → quote in under 60 seconds" },
  { icon: CreditCard, text: "Same-day deposits with on-site payments" },
  { icon: CheckCircle2, text: "Conflict detection prevents all double-bookings" },
  { icon: BarChart3, text: "Margin guardrails protect every job's profit" },
];

const impactClaims = [
  { label: "Designed to eliminate hours of weekly admin" },
  { label: "AI estimation replaces manual quote spreadsheets" },
  { label: "Same-day Stripe deposits replace 30-day invoice chasing" },
  { label: "Offline-first means zero data loss on job sites" },
];

export default function BeforeAfterStory() {
  return (
    <section id="transformation" className="py-20 section-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            From Chaos to Control
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            See how contractors transform their operations with CONSTRUKTR's AI-powered automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl opacity-50"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-[var(--color-border-card)] shadow-[0_8px_20px_rgba(15,23,42,0.12),0_4px_10px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Before CONSTRUKTR</h3>
                  <p className="text-sm text-red-600 font-medium">Manual operations, missed revenue</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {beforeItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
                    >
                      <Icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-sm text-red-700 font-medium text-center">
                  Stop losing jobs to slow quotes and missed follow-ups
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl opacity-50"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-[var(--color-border-card)] shadow-[0_8px_20px_rgba(15,23,42,0.12),0_4px_10px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">After CONSTRUKTR</h3>
                  <p className="text-sm text-green-600 font-medium">AI automation, maximum profit</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {afterItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                    >
                      <Icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-sm text-green-700 font-medium text-center">
                  Start tracking every dollar of profit, from first quote to final payment
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--color-primary)] to-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <TrendingUp className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Designed to Change How You Work</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactClaims.map((claim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                <p className="text-sm text-white/90">{claim.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/get"
            className="btn-primary inline-flex items-center gap-2"
            data-testid="button-transformation-cta"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-[var(--color-text-secondary)] mt-4">
            Free forever · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
