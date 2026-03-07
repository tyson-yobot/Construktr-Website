import { motion } from "framer-motion";
import { Smartphone, Brain, Zap, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import screenshot1 from "/screens/dashboard.png";
import screenshot2 from "/screens/schedule-view.png";  
import screenshot3 from "/screens/quote-builder.png";
import StandardizedPhoneMockup from "./standardized-phone-mockup";

export default function MobileAppShowcase() {
  return (
    <section className="section-spacing bg-gradient-to-b from-gray-950 via-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center section-content-spacing">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            See CONSTRUKTR™ in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Real screenshots from the mobile app contractors are using to grow their business
          </motion.p>
        </div>

        {/* 3 App Screenshots with Responsive Spacing */}
        <TooltipProvider>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-20 max-w-7xl mx-auto">
          
            {/* Screenshot 1 - Smart Scheduler with Device Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 max-w-sm"
            >
              <div className="relative mb-6">
                <StandardizedPhoneMockup
                  src={screenshot1}
                  alt="CONSTRUKTR Smart Scheduler in use"
                  size="mobile"
                  withGlow={false}
                  className="mx-auto"
                />
                
                {/* Enhanced Clickable Feature Tag with AI Badge */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      onClick={() => {
                        const element = document.getElementById('SmartScheduling');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg cursor-pointer transition-all duration-200 flex items-center gap-2 hover:shadow-blue-500/25"
                    >
                      <Brain className="w-4 h-4" />
                      📅 Smart Scheduling
                      <Zap className="w-3 h-3 text-yellow-300" />
                      <span className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity">→</span>
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 border-slate-700 text-white max-w-xs">
                    <p className="font-semibold mb-1">AI-Powered Smart Scheduling</p>
                    <p className="text-sm text-gray-300">Click to see scheduling features in detail</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Never Miss a Job</h3>
                <p className="text-gray-300 text-sm">
                  AI automatically schedules your jobs, sends reminders, and prevents double-booking
                </p>
              </div>
            </motion.div>

            {/* Screenshot 2 - Quote Builder with Device Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 max-w-sm"
            >
              <div className="relative mb-6">
                <StandardizedPhoneMockup
                  src={screenshot2}
                  alt="CONSTRUKTR Quote Builder"
                  size="mobile"
                  withGlow={false}
                  className="mx-auto"
                />
                
                {/* Enhanced Clickable Feature Tag with AI Badge */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      onClick={() => {
                        const element = document.getElementById('AIQuotes');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg cursor-pointer transition-all duration-200 flex items-center gap-2 hover:shadow-green-500/25"
                    >
                      <Brain className="w-4 h-4" />
                      💰 Instant Quotes
                      <Zap className="w-3 h-3 text-yellow-300" />
                      <span className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity">→</span>
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 border-slate-700 text-white max-w-xs">
                    <p className="font-semibold mb-1">AI-Powered Quote Generation</p>
                    <p className="text-sm text-gray-300">Generate professional estimates instantly with AI-powered pricing, material calculations, and labor cost optimization.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Quote in Seconds</h3>
                <p className="text-gray-300 text-sm">
                  Generate professional estimates instantly with AI-powered pricing and material calculations
                </p>
              </div>
            </motion.div>

            {/* Screenshot 3 - Dashboard with Device Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex-1 max-w-sm"
            >
              <div className="relative mb-6">
                <StandardizedPhoneMockup
                  src={screenshot3}
                  alt="CONSTRUKTR Dashboard"
                  size="mobile"
                  withGlow={false}
                  className="mx-auto"
                />
                
                {/* Enhanced Clickable Feature Tag with AI Badge */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg cursor-pointer hover:scale-105 transition-all duration-200 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      📊 Smart Dashboard
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 border-slate-700 text-white max-w-xs">
                    <p className="font-semibold mb-1">AI-Powered Business Intelligence</p>
                    <p className="text-sm text-gray-300">Complete business overview with revenue tracking, job status, performance analytics, and predictive insights.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Track Everything</h3>
                <p className="text-gray-300 text-sm">
                  Complete business overview with revenue tracking, job status, and performance analytics
                </p>
              </div>
            </motion.div>

          </div>
        </TooltipProvider>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Download iOS App
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
              Download Android
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}