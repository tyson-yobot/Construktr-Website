import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award, Users } from "lucide-react";

const mediaLogos = [
  {
    name: "TechCrunch",
    logo: "TC",
    description: "Featured in TechCrunch",
    color: "from-green-600 to-green-700"
  },
  {
    name: "BuiltIn",
    logo: "BI",
    description: "Featured in BuiltIn",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "Angi",
    logo: "AG",
    description: "Trusted by Angi",
    color: "from-orange-600 to-orange-700"
  },
  {
    name: "Nextdoor",
    logo: "ND",
    description: "Featured on Nextdoor",
    color: "from-purple-600 to-purple-700"
  }
];

const trustMetrics = [
  {
    icon: Star,
    value: "4.9/5",
    label: "App Store Rating",
    description: "Based on 2,500+ reviews"
  },
  {
    icon: Users,
    value: "15K+",
    label: "Active Contractors",
    description: "Growing monthly"
  },
  {
    icon: Shield,
    value: "SOC 2",
    label: "Certified",
    description: "Bank-level security"
  },
  {
    icon: Award,
    value: "#1",
    label: "Contractor App",
    description: "In construction category"
  }
];

const partnerLogos = [
  {
    name: "Stripe",
    description: "Payment processing partner",
    logo: "ST"
  },
  {
    name: "Google",
    description: "Cloud & Maps integration",
    logo: "GO"
  },
  {
    name: "Quickbooks",
    description: "Accounting integration",
    logo: "QB"
  },
  {
    name: "Salesforce",
    description: "CRM integration",
    logo: "SF"
  }
];

export default function SocialProofBadges() {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-900 via-black to-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured In Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 mb-6">
            📰 As Featured In
          </Badge>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {mediaLogos.map((media, index) => (
              <motion.div
                key={media.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${media.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{media.logo}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{media.name}</h3>
                  <p className="text-slate-400 text-xs">{media.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
              🏆 Trusted & Verified
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-slate-300 font-medium text-sm mb-1">{metric.label}</div>
                    <div className="text-slate-500 text-xs">{metric.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30 mb-6">
            🤝 Trusted by Teams At
          </Badge>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/20 hover:bg-slate-800/40 border border-slate-700/20 hover:border-slate-600/40 rounded-xl p-4 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{partner.logo}</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">{partner.name}</h4>
                  <p className="text-slate-400 text-xs">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-slate-800"
        >
          <div className="flex items-center space-x-2 text-slate-400">
            <Shield className="w-4 h-4" />
            <span className="text-sm">SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Shield className="w-4 h-4" />
            <span className="text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Shield className="w-4 h-4" />
            <span className="text-sm">256-bit SSL</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Award className="w-4 h-4" />
            <span className="text-sm">99.9% Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}