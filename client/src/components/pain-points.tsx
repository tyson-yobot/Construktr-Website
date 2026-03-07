import { motion } from "framer-motion";
import { Calendar, DollarSign, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: Calendar,
    headline: "Never Miss a Job Again",
    benefit: "AI-suggested scheduling"
  },
  {
    icon: DollarSign,
    headline: "Get Paid Faster",
    benefit: "Instant invoicing & payment tracking"
  },
  {
    icon: TrendingUp,
    headline: "Win More Jobs",
    benefit: "AI-powered quoting that closes deals"
  }
];

export default function PainPoints() {
  return (
    <section className="py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Stop Losing Money on Simple Mistakes
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto leading-relaxed">
            Every contractor faces the same problems. CONSTRUKTR solves them with AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            
            return (
              <motion.div
                key={point.headline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-[var(--color-surface)] rounded-2xl border border-white/10 hover:shadow-xl transition-all duration-300 group hover:border-electric-blue/20"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-electric-blue" />
                </div>
                
                {/* Headline */}
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  {point.headline}
                </h3>
                
                {/* Benefit */}
                <p className="text-lg text-[var(--clr-text-2)] font-semibold">
                  {point.benefit}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}