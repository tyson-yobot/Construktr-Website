import { motion } from "framer-motion";
import { Shield, CheckCircle, Zap } from "lucide-react";

export default function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-8 pt-6 border-t border-gray-200/30"
    >
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-center">

        {/* Partner Logos */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">S</span>
              </div>
              <span>Stripe Payments</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">QB</span>
              </div>
              <span>QuickBooks</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span>Supabase</span>
            </div>
          </div>
        </div>

        {/* Security indicators */}
        <div className="flex items-center gap-3">
          <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>256-bit SSL</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              <span>Offline-First</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
