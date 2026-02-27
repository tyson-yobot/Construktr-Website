import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MessageSquare, Calendar, FileText, MapPin, BarChart3, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import the actual app screenshots
import quoteScreenshot from "@assets/image_1754788551645.png";
import calendarScreenshot from "@assets/image_1754788551645.png";
import invoiceScreenshot from "@assets/image_1754788551645.png";
import routeScreenshot from "@assets/image_1754788551645.png";
import insightsScreenshot from "@assets/image_1754788551645.png";

const features = [
  {
    id: 1,
    icon: "🔧",
    title: "Generate Winning Quotes in 30 Seconds",
    description: "Beat competitors with AI-powered quotes that factor in materials, labor, and market rates. Automatically calculate markup and profit margins for maximum revenue.",
    screenshot: quoteScreenshot,
    highlights: ["Win 40% More Jobs", "30-Second Quotes", "Smart Pricing"],
    color: "from-blue-500 to-cyan-500",
    sectionId: "AIQuotes",
    aiPowered: true
  },
  {
    id: 2,
    icon: "📋",
    title: "Book Jobs Automatically, Avoid Double-Booking",
    description: "Smart scheduling that prevents conflicts, optimizes your route, and sends automatic reminders to customers. Never lose a job to poor scheduling again.",
    screenshot: calendarScreenshot,
    highlights: ["Zero Double-Bookings", "Auto Reminders", "Route Optimization"],
    color: "from-green-500 to-emerald-500",
    sectionId: "smart-scheduling",
    aiPowered: true
  },
  {
    id: 3,
    icon: "💳",
    title: "Accept Payments On-Site, Get Paid Same Day",
    description: "Process credit cards, send digital invoices instantly, and automate follow-ups for overdue accounts. Stop chasing payments and focus on the work.",
    screenshot: invoiceScreenshot,
    highlights: ["Same-Day Payment", "Card Processing", "Auto Follow-ups"],
    color: "from-purple-500 to-violet-500",
    sectionId: "payment-processing",
    aiPowered: true
  },
  {
    id: 4,
    icon: "🏠",
    title: "Track Jobs from Estimate to Completion",
    description: "Monitor every job phase, track materials and labor costs, and update customers automatically. Complete visibility into your entire operation.",
    screenshot: routeScreenshot,
    highlights: ["Complete Job Tracking", "Cost Monitoring", "Customer Updates"],
    color: "from-orange-500 to-red-500",
    sectionId: "job-tracking",
    aiPowered: true
  },
  {
    id: 5,
    icon: "🚛",
    title: "Manage Inventory, Never Run Out of Parts",
    description: "Track your van inventory, get low-stock alerts, and automatically reorder common parts. Reduce trips to the supply house and maximize billable hours.",
    screenshot: insightsScreenshot,
    highlights: ["Inventory Tracking", "Auto Reordering", "Low-Stock Alerts"],
    color: "from-pink-500 to-rose-500",
    sectionId: "inventory-management",
    aiPowered: true
  },
  {
    id: 6,
    icon: "🔨",
    title: "Send Professional Estimates That Win Work",
    description: "Create detailed, branded estimates with photos, material lists, and labor breakdowns. Customers trust professional-looking proposals.",
    screenshot: insightsScreenshot,
    highlights: ["Professional Estimates", "Photo Integration", "Material Lists"],
    color: "from-indigo-500 to-purple-500",
    sectionId: "estimate-creation",
    aiPowered: false
  }
];

export default function AppFeaturesShowcase() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const scrollToFeatureSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const feature = features[currentFeature];

  return (
    <section id="AIQuotes" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center section-content-spacing">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            App Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See What You're Getting
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Take a detailed look at the actual CONSTRUKTR™ app features that are transforming how contractors run their business.
          </p>
        </div>

        {/* Feature Showcase with Responsive Spacing */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Device Mockup with Screenshot */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* iPhone Frame with Hover Glow */}
                <motion.div 
                  className="relative mx-auto w-[280px] h-[570px] bg-black rounded-[40px] p-2 shadow-2xl group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(59, 130, 246, 0.4), 0 25px 50px rgba(0, 0, 0, 0.5)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Screen with Subtle Glow */}
                  <div className="w-full h-full bg-[var(--clr-surface)] rounded-[32px] overflow-hidden relative group-hover:ring-2 group-hover:ring-blue-500/20 transition-all duration-300">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/5 flex items-center justify-between px-6 text-xs font-medium text-black/70 z-10">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-black/70 rounded-sm"></div>
                        <div className="w-1 h-2 bg-black/70 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Screenshot */}
                    <img 
                      src={feature.screenshot} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-10`}></div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[var(--clr-surface)] rounded-full"></div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Live App
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Feature Details */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => scrollToFeatureSection(feature.sectionId)}
                  className="text-left group cursor-pointer w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                    <span className="text-4xl mr-4">{feature.icon}</span>
                    {feature.title}
                    <span className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </h3>
                </motion.button>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {feature.highlights.map((highlight, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation with Labeled Tabs */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {features.map((feat, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentFeature(index);
                      scrollToFeatureSection(feat.sectionId);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 group ${
                      index === currentFeature 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white hover:shadow-blue-500/20'
                    }`}
                    title={`Click to see ${feat.title} and scroll to features`}
                  >
                    <span className="group-hover:scale-105 transition-transform duration-200">
                      <span className="mr-2">{feat.icon}</span>
                      {feat.title.replace(/[💬📆🧾📍📊🔧📋💳🏠🚛🔨]/g, '').trim().substring(0, 15)}...
                    </span>
                    <span className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={prevFeature}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={nextFeature}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Start Free Trial
              </Button>
              <p className="text-sm text-slate-400 mt-2">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid Overview */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">All Features at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {features.map((feat, index) => (
              <motion.button
                key={feat.id}
                onClick={() => setCurrentFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl border transition-all duration-200 ${
                  index === currentFeature
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                }`}
              >
                <div className="text-2xl mb-2">{feat.title.split(' ')[0]}</div>
                <div className="text-sm text-slate-300 font-medium">
                  {feat.title.split(' ').slice(1).join(' ')}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}