import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Quote, Calendar, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const steps = [
  {
    icon: Quote,
    title: "Quote",
    description: "AI generates accurate quotes in seconds based on your service, location, and market data.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Smart scheduling optimizes routes, manages team availability, and handles customer preferences.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description: "Send professional invoices instantly and accept payments online with automated follow-ups.",
    color: "from-green-500 to-green-600"
  }
];

export default function WhatItDoes() {
  return (
    <section id="WhatItDoes" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

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
            What It Does
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Three simple steps to transform your service business
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-800/70 hover:border-slate-600 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Animated Connection Arrow (except for last item) */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-400"
                        initial={{ x: 0, opacity: 0.7 }}
                        whileInView={{ 
                          x: [0, 8, 0],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        viewport={{ once: false }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA with Strong Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to 3x Your Revenue?
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Join 2,500+ contractors already using CONSTRUKTR to book more jobs and get paid faster
          </p>
          
          {/* Strong CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <Link href="/get">
                Try it Free for 14 Days
                <motion.div
                  className="ml-2 w-4 h-4"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 hover:border-blue-500/50 text-white font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 group"
            >
              <Link href="/demos">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">⚡ Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">📱 Works on all devices</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm">🔒 Bank-level security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}