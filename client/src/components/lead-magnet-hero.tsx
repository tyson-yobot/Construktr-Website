import { motion } from "framer-motion";
import { Download, FileText, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadMagnetCapture from "./lead-magnet-capture";

export default function LeadMagnetHero() {
  return (
    <section className="py-24 bg-[var(--color-surface)] border-y border-electric-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--clr-text-2)]">Trusted by 2,500+ contractors</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
              Stop Wasting Time on Paperwork
            </h2>
            
            <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
              Get our <strong>free Contractor's AI Toolkit</strong> and learn how contractors are saving 10+ hours per week with smart automation.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "AI Quote Templates That Win 40% More Jobs",
                "Smart Scheduling That Saves 2+ Hours Daily", 
                "Automated Invoicing for 3x Faster Payments",
                "Customer Communication on Autopilot",
                "Revenue Tracking Dashboard Setup"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  </div>
                  <span className="text-[var(--clr-text-2)] font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LeadMagnetCapture 
                magnet="ai-toolkit"
                trigger={
                  <Button className="bg-electric-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-electric-blue/30 flex items-center justify-center group">
                    <Download className="w-5 h-5 mr-2" />
                    Download Free Toolkit
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                }
              />
              
              <LeadMagnetCapture 
                magnet="time-saving-checklist"
                trigger={
                  <Button 
                    variant="outline" 
                    className="border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-electric-blue hover:text-white transition-all duration-300"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Get Time-Saving Tips
                  </Button>
                }
              />
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* PDF Preview Mock */}
              <div className="w-80 h-96 bg-[var(--clr-surface)] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-electric-blue h-16 flex items-center px-6">
                  <FileText className="w-8 h-8 text-white mr-3" />
                  <div>
                    <h4 className="text-white font-bold text-lg">AI Toolkit</h4>
                    <p className="text-blue-100 text-sm">For Contractors</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-3 bg-electric-blue/20 rounded w-full"></div>
                    <div className="h-3 bg-electric-blue/20 rounded w-2/3"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                FREE
              </div>
              <div className="absolute -bottom-4 -right-4 bg-electric-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                24 Pages
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}