import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { content } from "@/lib/content";
import VideoTrigger from "@/components/video-demo-modal";
import TrustBar from "@/components/TrustBar";
import logoPath from "@assets/Construktr_Logo_Transparent_1024_x_1024_1772187695111.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section--light bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-60"></div>
      
      {/* Additional scattered dots like in reference */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-blue-400 rounded-full opacity-20"></div>
        <div className="absolute top-32 right-[15%] w-1 h-1 bg-blue-400 rounded-full opacity-15"></div>
        <div className="absolute top-40 left-[20%] w-1 h-1 bg-blue-400 rounded-full opacity-25"></div>
        <div className="absolute top-60 right-[25%] w-1 h-1 bg-blue-400 rounded-full opacity-18"></div>
        <div className="absolute bottom-40 left-[15%] w-1 h-1 bg-blue-400 rounded-full opacity-22"></div>
        <div className="absolute bottom-32 right-[20%] w-1 h-1 bg-blue-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-60 left-[25%] w-1 h-1 bg-blue-400 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 right-[10%] w-1 h-1 bg-blue-400 rounded-full opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex flex-col items-center"
          >
            <img 
              src={logoPath} 
              alt="CONSTRUKTR" 
              className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto max-w-6xl mb-4"
              width="384"
              height="384"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl font-semibold text-center tracking-wide"
            >
              Save Time. Make More Money. Eliminate Headaches.
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-12 font-black tracking-tight"
          >
            {content.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Button 
                onClick={() => scrollToSection('MobileApp')}
                className="bg-electric-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-electric-blue/30 hover:shadow-electric-blue/50"
              >
                Start Free Trial
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Button 
                onClick={() => scrollToSection('WhatItDoes')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Bar */}
          <TrustBar />

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg font-medium"
          >
            <p>{content.hero.socialProof}</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("how-it-works")}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
