import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoDemoModal from "./video-demo-modal";

export default function LiveDemoCTA() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Icon Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to see it live?
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Watch our 2-minute demo to see how our AI Business Manager helps contractors win more jobs, save time, and get paid faster.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-14 inline-flex items-center gap-3 shadow-2xl shadow-black/20 rounded-lg font-semibold transition-all duration-200"
              data-testid="button-watch-demo"
              aria-label="Watch 2-minute product demonstration"
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              Watch the 2-minute demo
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Trust Indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-sm mt-6"
            >
              Trusted by 10,000+ contractors • No credit card required
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoDemoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </>
  );
}
