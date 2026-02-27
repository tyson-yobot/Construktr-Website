import { motion } from "framer-motion";
import { Shield, Award, Wrench, Zap, Droplets, Sparkles, TreePine, Settings, Wind } from "lucide-react";
import { useState } from "react";

const trustMetrics = [
  {
    icon: Wrench,
    value: "33+",
    label: "Built-In Features",
    tooltip: "Core jobs, AI quoting, scheduling, payments, CRM, inventory, route optimization, and more — all in one mobile app."
  },
  {
    icon: Zap,
    value: "AI",
    label: "at Every Paid Tier",
    tooltip: "AI photo estimation, smart scheduling, route optimization, and the AI Part Finder are available on Starter and above."
  },
  {
    icon: Award,
    value: "4",
    label: "Pricing Plans",
    tooltip: "Free, Starter ($49/mo), Pro ($89/mo), and Business ($199/mo). No per-user fees. Annual billing saves ~20%."
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime Target",
    tooltip: "Built on Supabase (AWS) with redundant infrastructure, automatic failover, and 24/7 monitoring."
  }
];

const businessTypes = [
  {
    name: "Plumbing Services",
    icon: Droplets
  },
  {
    name: "HVAC Companies",
    icon: Wind
  },
  {
    name: "Electrical Contractors", 
    icon: Zap
  },
  {
    name: "Cleaning Services",
    icon: Sparkles
  },
  {
    name: "Landscaping Pros",
    icon: TreePine
  },
  {
    name: "Handyman Services",
    icon: Settings
  }
];

export default function TrustBar() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[var(--color-surface)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={metric.label} 
                className="text-center relative cursor-help"
                onMouseEnter={() => setHoveredMetric(index)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 hover:bg-electric-blue/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-[var(--clr-text-2)]">
                  {metric.label}
                </div>
                
                {/* Tooltip */}
                {hoveredMetric === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl z-10 border border-gray-700"
                  >
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700"></div>
                    {metric.tooltip}
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Business Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[var(--clr-text-2)] mb-4">Trusted by service professionals across industries:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 px-4 py-2 bg-[var(--color-surface)] rounded-full text-sm text-[var(--clr-text-2)] border border-white/10 shadow-sm hover:shadow-md hover:border-electric-blue/30 transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4 text-electric-blue" />
                  <span>{type.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8 mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center space-x-2 text-sm text-[var(--clr-text-2)]">
            <Shield className="w-4 h-4 text-green-600" />
            <span>256-bit SSL</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[var(--clr-text-2)]">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Stripe PCI DSS</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[var(--clr-text-2)]">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Encrypted at Rest</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}