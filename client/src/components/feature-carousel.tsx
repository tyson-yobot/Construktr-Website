import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Brain, CalendarClock, Activity, Receipt, MapPin, Users, BarChart, Check, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";
import VideoWalkthroughModal from "./video-walkthrough-modal";

// Import actual app screenshots
import aiQuoteScreenshot from "@assets/IMG_4328_1754274611769.jpeg";
import smartSchedulingScreenshot from "@assets/IMG_4330_1754274611770.jpeg"; 
import liveJobFeedScreenshot from "@assets/IMG_4333_1754274611770.jpeg";
import invoicingScreenshot from "@assets/IMG_4332_1754274611770.jpeg";
import routeAlertsScreenshot from "@assets/IMG_4334_1754274611770.jpeg";
import crmScreenshot from "@assets/IMG_4337_1754274611770.jpeg";
import reportsScreenshot from "@assets/IMG_4336_1754274611770.jpeg";


const iconMap = {
  zap: Brain, // AI Quotes
  "calendar-clock": CalendarClock,
  activity: Activity,
  receipt: Receipt,
  "map-pin": MapPin,
  users: Users,
  "bar-chart": BarChart,
};

// Map features to actual app screenshots
const screenshotMap = {
  zap: aiQuoteScreenshot, // AI Quotes
  "calendar-clock": smartSchedulingScreenshot,
  activity: liveJobFeedScreenshot,
  receipt: invoicingScreenshot,
  "map-pin": routeAlertsScreenshot,
  users: crmScreenshot,
  "bar-chart": reportsScreenshot,
};

// Micro-copy for SEO and clarity
const microCopy = {
  zap: "AI syncs market data, predicts material costs, and generates competitive quotes instantly.",
  "calendar-clock": "AI syncs calendars, predicts travel time, and prevents double-booking automatically.",
  activity: "Real-time job updates, team status tracking, and instant customer notifications.",
  receipt: "Professional invoices sent instantly with integrated payment processing and auto-reminders.",
  "map-pin": "AI-powered route optimization with real-time traffic and weather integration.",
  users: "Complete customer profiles with service history, preferences, and automated follow-ups.",
  "bar-chart": "Revenue analytics, performance metrics, and growth insights with automated reporting.",
};

export default function FeatureCarousel() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const features = content.features.items;

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToFeature = (index: number) => {
    setCurrentFeature(index);
  };

  const IconComponent = iconMap[features[currentFeature].icon as keyof typeof iconMap] || Brain;

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.features.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {content.features.subtitle}
          </p>
        </motion.div>

        {/* Feature Navigation Tabs with Micro-Copy */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <Button
                variant={currentFeature === index ? "default" : "outline"}
                size="sm"
                onClick={() => goToFeature(index)}
                className={`transition-all duration-300 ${
                  currentFeature === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
                }`}
              >
                {feature.title}
              </Button>
              {currentFeature === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-slate-400 mt-2 max-w-xs mx-auto"
                >
                  {microCopy[feature.icon as keyof typeof microCopy]}
                </motion.p>
              )}
            </div>
          ))}
        </div>

        {/* Main Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 mb-2">
                    Feature {currentFeature + 1} of {features.length}
                  </Badge>
                  <h3 className="text-3xl font-bold text-white">
                    {features[currentFeature].title}
                    {features[currentFeature].title.includes('AI') && (
                      <span className="ml-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-medium rounded-full">
                        Powered by AI
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed">
                {features[currentFeature].description}
              </p>

              {/* Feature Details */}
              <div className="space-y-3">
                {features[currentFeature].details?.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4 pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevFeature}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextFeature}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Play Demo (60s)
                  </Button>
                </motion.div>
                <div className="text-slate-500 text-sm">
                  {currentFeature + 1} / {features.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Real App Screenshot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* iPhone Mockup with Real Screenshot and Hover Glow */}
              <motion.div 
                className="relative bg-black rounded-[28px] p-3 shadow-2xl mx-auto max-w-sm group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.4), 0 25px 50px rgba(0, 0, 0, 0.5)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-[var(--clr-surface)] rounded-[24px] overflow-hidden group-hover:ring-2 group-hover:ring-blue-500/20 transition-all duration-300">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/5 flex items-center justify-between px-6 text-sm font-medium text-black/70 z-10">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-black/70 rounded-sm"></div>
                      <div className="w-1 h-2 bg-black/70 rounded-sm"></div>
                      <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Real App Screenshot */}
                  <img
                    src={screenshotMap[features[currentFeature].icon as keyof typeof screenshotMap]}
                    alt={`${features[currentFeature].title} app screenshot`}
                    className="h-[600px] w-[300px] object-cover"
                  />
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/30 rounded-full"></div>
                </div>
                
                {/* Live Feature Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Live App
                </motion.div>

                {/* Enhanced Play Demo Button - Show on AI Quotes feature */}
                {currentFeature === 0 && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[24px] opacity-0 hover:opacity-100 transition-opacity duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Play Button with Pulse Animation */}
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-md rounded-full p-6 border-2 border-white/30 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 shadow-2xl"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.5)",
                          "0 0 30px rgba(168, 85, 247, 0.6)",
                          "0 0 20px rgba(59, 130, 246, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="w-10 h-10 text-white fill-white" />
                    </motion.div>
                    
                    {/* Demo Text with Glass Effect */}
                    <div className="absolute bottom-6 left-4 right-4 text-center">
                      <motion.div 
                        className="bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20"
                        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                      >
                        <div className="text-white font-bold text-base flex items-center justify-center gap-2">
                          <Play className="w-4 h-4 fill-white" />
                          <span>Play Demo</span>
                        </div>
                        <div className="text-blue-200 text-sm mt-1">60-second app walkthrough</div>
                        <div className="text-white/60 text-xs mt-1">See how AI quotes work</div>
                      </motion.div>
                    </div>
                  </motion.button>
                )}
              </motion.div>

              {/* Feature Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features[currentFeature].details?.slice(0, 4).map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-center"
                  >
                    <span className="text-sm font-medium text-slate-300">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Walkthrough Modal */}
      <VideoWalkthroughModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}