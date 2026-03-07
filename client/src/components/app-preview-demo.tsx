import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Zap, Clock, DollarSign } from "lucide-react";
import phoneDemo from "/screens/home-screen.png";
import StandardizedPhoneMockup from "./standardized-phone-mockup";

const keyFeatures = [
  {
    icon: Zap,
    title: "Win More Jobs ⚡ POWERED BY AI",
    description: "Generate winning quotes in 30 seconds with AI-powered pricing that maximizes your profits"
  },
  {
    icon: Clock,
    title: "Save 3+ Hours Daily ⚡ POWERED BY AI",
    description: "AI-powered real-time updates on job progress and team status"
  },
  {
    icon: DollarSign,
    title: "Get Paid the Same Day ⚡ POWERED BY AI",
    description: "AI-automated invoicing and payment processing for instant payments"
  }
];

export default function AppPreviewDemo() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 mb-4">
            📱 What You See Inside
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your AI-Powered Business Dashboard
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to run your service business like a pro, powered by AI, right in your pocket
          </p>
        </motion.div>

        {/* Phone Demo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <StandardizedPhoneMockup
              src={phoneDemo}
              alt="CONSTRUKTR app interface showing AI-powered quote generation"
              size="md"
              withGlow={false}
            />

            {/* Floating UI Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-green-500 text-white p-3 rounded-full shadow-lg"
              >
                <CheckCircle className="w-6 h-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg"
              >
                <Smartphone className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {keyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed" style={{ lineHeight: '1.7' }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl"
              >
                <Link href="/get">
                  Download Free App
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-xl"
              >
                <Link href="/demos">
                  Book a Demo
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
                <span className="text-slate-300 text-sm">⚡ Setup in 5 minutes</span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
                <span className="text-slate-300 text-sm">📱 iOS & Android</span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
                <span className="text-slate-300 text-sm">🔒 Bank-level security</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}