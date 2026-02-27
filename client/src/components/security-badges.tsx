import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle, Award } from "lucide-react";

const securityCertifications = [
  {
    name: "SOC 2 Type II",
    icon: Shield,
    description: "System & Organization Controls compliance",
    verified: true
  },
  {
    name: "PCI DSS",
    icon: Lock,
    description: "Payment Card Industry Data Security Standard",
    verified: true
  },
  {
    name: "DKIM/SPF/DMARC",
    icon: CheckCircle,
    description: "Email authentication & security protocols",
    verified: true
  },
  {
    name: "ISO 27001",
    icon: Award,
    description: "Information Security Management System",
    verified: true
  }
];

export default function SecurityBadges() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Security & Reliability
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCertifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-4 bg-[var(--clr-surface)] rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-white text-sm">
                      {cert.name}
                    </h4>
                    {cert.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  
                  <p className="text-xs text-[var(--clr-text-2)] leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--clr-text-2)]">
              Enterprise-grade security protecting your business data and customer information
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}