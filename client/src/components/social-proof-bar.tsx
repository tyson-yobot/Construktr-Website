import { motion } from "framer-motion";
import { Star, Award, Shield, Zap } from "lucide-react";

const clientLogos = [
  { name: "ProBuild Construction", industry: "General Contractor" },
  { name: "Elite Plumbing Co.", industry: "Plumbing" },
  { name: "PowerLine Electric", industry: "Electrical" },
  { name: "CoolAir HVAC", industry: "HVAC" },
  { name: "Green Landscape Pro", industry: "Landscaping" },
  { name: "RoofMaster Solutions", industry: "Roofing" }
];

const metrics = [
  {
    icon: Star,
    value: "4.9/5",
    label: "App Store Rating",
    color: "text-yellow-400"
  },
  {
    icon: Award,
    value: "2,500+",
    label: "Active Contractors",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime SLA",
    color: "text-green-400"
  },
  {
    icon: Zap,
    value: "$2.1M+",
    label: "Revenue Managed",
    color: "text-purple-400"
  }
];

export default function SocialProofBar() {
  return (
    <section className="py-16 bg-[var(--color-surface)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <IconComponent className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-[var(--clr-text-2)]">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-8 font-medium">
            Trusted by leading contractors across all trades
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] p-6 rounded-xl border border-gray-200 hover:border-electric-blue/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Placeholder Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:from-electric-blue/10 group-hover:to-electric-blue/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-electric-blue/20 rounded group-hover:bg-electric-blue/40 transition-colors duration-300"></div>
                </div>
                
                <h4 className="font-semibold text-white text-sm mb-1">
                  {client.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {client.industry}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6" />
              <span className="font-medium">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6" />
              <span className="font-medium">#1 Contractor App 2024</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6" />
              <span className="font-medium">Featured on App Store</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6" />
              <span className="font-medium">99.9% Uptime SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}