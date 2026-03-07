import { motion } from "framer-motion";
import { Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
const realAppScreenshot = "/screens/home-screen.png";
import StandardizedPhoneMockup from "./standardized-phone-mockup";

export default function MobileAppPreview() {
  return (
    <section id="MobileApp" className="py-32 gradient-electric text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {content.mobileApp.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {content.mobileApp.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {content.mobileApp.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-[var(--clr-surface)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/app/construktr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-2xl hover:shadow-blue-500/30">
                  <Smartphone className="w-5 h-5" />
                  <span>Download Free App</span>
                </Button>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.construktr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-2xl hover:shadow-purple-500/30">
                  <Smartphone className="w-5 h-5" />
                  <span>Download Free App</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Phone Mockup with Real Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <StandardizedPhoneMockup
                src={realAppScreenshot}
                alt="CONSTRUKTR mobile app dashboard showing real AI quote generation interface"
                size="tablet"
                withGlow={true}
                showBadge={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}