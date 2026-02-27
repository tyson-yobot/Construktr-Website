import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "8+ Hours",
    label: "Saved Weekly",
    description: "Less admin, more billable work",
    color: "text-blue-600"
  },
  {
    icon: DollarSign, 
    value: "3× Faster",
    label: "Payments",
    description: "Same-day deposits vs 30+ day wait",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    value: "40% More",
    label: "Profit",
    description: "Better pricing & fewer missed jobs",
    color: "text-amber-700"
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Active Contractors",
    description: "Trust CONSTRUKTR daily",
    color: "text-purple-600"
  }
];

export default function ValueStats() {
  return (
    <section id="results" className="py-20 section-bg-band">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-6">
            Save Time, Make More Money, Work Smarter
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Real results from contractors who switched to CONSTRUKTR.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-xl p-8 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 border border-[rgba(15,23,42,0.08)] hover:border-[var(--color-primary)]/30 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                
                {/* Value */}
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] block">
                    {stat.value}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[var(--color-text-secondary)] mb-4">
            Ready to see these results in your business?
          </p>
          <button className="btn-primary">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}