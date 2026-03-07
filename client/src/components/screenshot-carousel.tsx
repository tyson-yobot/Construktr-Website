import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import StandardizedPhoneMockup from "./standardized-phone-mockup";

// Import the actual app screenshots
import screenshot1 from "/screens/dashboard.png";
import screenshot2 from "/screens/schedule-view.png"; 
import screenshot3 from "/screens/quote-builder.png";
import screenshot4 from "/screens/job-details.png";
import screenshot5 from "/screens/payment-processing.png";
import screenshot6 from "/screens/ai-assistant.png";

const screenshots = [
  { 
    src: screenshot1, 
    alt: "Smart Quote Generation", 
    title: "💬 Win More Jobs with AI Quotes",
    description: "Smart pricing that beats competitors",
    sectionId: "AIQuotes"
  },
  { 
    src: screenshot2, 
    alt: "Smart Calendar View", 
    title: "📅 Save 3+ Hours Daily",
    description: "Never double-book or waste time",
    sectionId: "smart-scheduling"
  },
  { 
    src: screenshot3, 
    alt: "Invoice Dashboard", 
    title: "🧾 Get Paid the Same Day",
    description: "Instant invoices, faster payments",
    sectionId: "payment-processing"
  },
  { 
    src: screenshot4, 
    alt: "Route Optimization", 
    title: "📍 Cut Travel Time by 40%",
    description: "AI routes save hours and fuel",
    sectionId: "route-optimization"
  },
  { 
    src: screenshot5, 
    alt: "Business Analytics", 
    title: "📊 Grow Your Business 40% Faster",
    description: "Data-driven decisions that work",
    sectionId: "business-insights"
  },
  { 
    src: screenshot6, 
    alt: "Customer Portal", 
    title: "👥 Turn Customers into Repeat Business",
    description: "Smart CRM keeps clients coming back",
    sectionId: "customer-management"
  }
];

export default function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-loop functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const scrollToFeatureSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="SmartScheduling" className="bg-gradient-to-b from-gray-950 via-black to-gray-950 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Smartphone className="w-4 h-4 mr-2" />
            Live App Screenshots
          </Badge>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
            📱 Your Toolkit in Your Pocket
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Explore how CONSTRUKTR™ helps you win more jobs with these real app screens.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>← Swipe or click arrows to explore →</span>
            <div className="flex gap-1 ml-2">
              {screenshots.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors duration-200"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="text-sm">{isAutoPlaying ? 'Pause' : 'Play'}</span>
              </button>
              
              {/* Enhanced Progress Indicator */}
              <div className="flex items-center gap-4">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600/50">
                  <span className="text-blue-300 text-sm font-bold">
                    {currentIndex + 1} of {screenshots.length}
                  </span>
                </div>
                <div className="hidden sm:block text-gray-400 text-xs">
                  Swipe or click to explore →
                </div>
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Screenshot Display */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                {/* Phone Mockup */}
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Enhanced Soft Shadow Layers */}
                  <div className="absolute top-8 left-4 right-4 bottom-2 bg-black/15 rounded-[28px] blur-2xl transform scale-95"></div>
                  <div className="absolute top-6 left-2 right-2 bottom-0 bg-black/25 rounded-[28px] blur-xl transform scale-97"></div>
                  <div className="absolute top-4 left-1 right-1 bottom-2 bg-black/10 rounded-[28px] blur-3xl transform scale-90"></div>
                  
                  <StandardizedPhoneMockup
                    src={screenshots[currentIndex].src}
                    alt={`CONSTRUKTR mobile app screenshot showing ${screenshots[currentIndex].alt} - Real app interface for contractors to ${screenshots[currentIndex].description.toLowerCase()}`}
                    size="md"
                    withGlow={true}
                    className="h-[600px] w-[300px]"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.button
                    onClick={() => scrollToFeatureSection(screenshots[currentIndex].sectionId)}
                    className="text-left group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.h3 
                      className="text-3xl md:text-4xl text-white font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300 flex items-center flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {screenshots[currentIndex].title}
                      <motion.div 
                        className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-bold text-white shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      >
                        ⚡ Powered by AI
                      </motion.div>
                      <span className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </motion.h3>
                  </motion.button>
                  <motion.p 
                    className="text-xl text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {screenshots[currentIndex].description}
                  </motion.p>
                  <motion.p 
                    className="text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {screenshots[currentIndex].alt}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Labeled Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 max-w-4xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  scrollToFeatureSection(screenshot.sectionId);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 group ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white hover:shadow-blue-500/20'
                }`}
                title={`Click to see ${screenshot.title} and scroll to features`}
              >
                <span className="group-hover:scale-105 transition-transform duration-200">
                  {screenshot.title.replace(/[💬📅🧾📍📊👥]/g, '').trim()}
                </span>
                <span className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Progress Bar with Indicators */}
          <div className="space-y-3 mt-6">
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Progress Steps */}
              <div className="absolute inset-0 flex justify-between items-center px-1">
                {screenshots.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full border-2 transition-all duration-300 ${
                      index <= currentIndex 
                        ? 'bg-[var(--clr-surface)] border-blue-500' 
                        : 'bg-gray-700 border-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Progress Text */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">
                Progress: {Math.round(((currentIndex + 1) / screenshots.length) * 100)}%
              </span>
              <span className="text-gray-400">
                {screenshots.length - currentIndex - 1} more to explore
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
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