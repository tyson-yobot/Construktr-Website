import { motion } from "framer-motion";
import { Users, TrendingUp, Clock, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Field Techs Across the U.S.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    number: "8 hrs",
    label: "Saved Per Week on Average",
    color: "text-green-600"
  },
  {
    icon: DollarSign,
    number: "3×",
    label: "Faster Payments",
    color: "text-purple-600"
  },
  {
    icon: TrendingUp,
    number: "40%",
    label: "More Profit Per Job",
    color: "text-orange-600"
  }
];

export default function SocialProofStats() {
  return (
    <section id="social-proof" className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Trusted by Contractors Nationwide
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of field service professionals who are growing their businesses with CONSTRUKTR™
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-blue-100 text-sm font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-blue-100 text-sm">
            ⭐ 4.9/5 Average Rating • SOC 2 Certified • PCI Compliant • 99.9% Uptime
          </p>
        </motion.div>
      </div>
    </section>
  );
}