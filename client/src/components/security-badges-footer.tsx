import { motion } from "framer-motion";
import { Shield, Lock, Server } from "lucide-react";

export default function SecurityBadgesFooter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 bg-[var(--clr-surface)] border-t border-[var(--clr-border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Security Row - Single Subtle Line */}
        <div className="flex items-center justify-center space-x-8 text-[var(--clr-text-2)] text-sm">
          
          {/* SOC 2 */}
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>SOC 2</span>
          </div>
          
          <div className="text-[var(--clr-border)]">•</div>
          
          {/* PCI / Security Protocols */}
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4" />
            <span>PCI / DKIM / SPF / DMARC</span>
          </div>
          
          <div className="text-[var(--clr-border)]">•</div>
          
          {/* Uptime */}
          <div className="flex items-center space-x-2">
            <Server className="w-4 h-4" />
            <span>99.9% uptime</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}