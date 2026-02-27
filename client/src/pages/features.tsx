import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Calendar, 
  Route, 
  Mic, 
  Receipt, 
  CheckSquare,
  ArrowRight,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DeviceFrame from "@/components/DeviceFrame";
import Footer from "@/components/footer";
import { FEATURE_ASSETS } from "@/lib/feature-assets";

const features = [
  {
    id: "ai-job-estimator",
    icon: Brain,
    title: "AI Job Estimator",
    description: "Generate accurate quotes in seconds using machine learning trained on millions of service jobs.",
    benefits: [
      "40% higher acceptance rates",
      "Competitive pricing insights",
      "Material cost optimization",
      "Labor time predictions"
    ],
    mockup: {
      title: "Smart Quote Generator",
      content: "Johnson Residence - Plumbing Repair",
      price: "$285",
      confidence: "94% accuracy",
      items: ["Pipe replacement", "Labor (2.5 hours)", "Materials & fittings"]
    }
  },
  {
    id: "smart-scheduling",
    icon: Calendar,
    title: "Smart Scheduling & Calendar",
    description: "AI-powered scheduling that considers availability, location, and job requirements automatically.",
    benefits: [
      "25% more jobs per day",
      "Reduced travel time",
      "Automatic rescheduling",
      "Customer preferences"
    ],
    mockup: {
      title: "Today's Schedule",
      content: "8 jobs optimized",
      price: "2.3 hrs saved",
      confidence: "Route optimized",
      items: ["Morning: 3 jobs", "Afternoon: 4 jobs", "Evening: 1 emergency"]
    }
  },
  {
    id: "route-optimization",
    icon: Route,
    title: "Route Optimization",
    description: "Dynamic routing that adapts to traffic, weather, and new job requests in real-time.",
    benefits: [
      "30% less fuel costs",
      "Real-time traffic updates",
      "Weather considerations",
      "Emergency job insertion"
    ],
    mockup: {
      title: "Route Planner",
      content: "6 stops optimized",
      price: "47 min",
      confidence: "Best route",
      items: ["Start: Office", "Stop 1: 9:00 AM", "Stop 2: 10:30 AM"]
    }
  },
  {
    id: "voice-ai",
    icon: Mic,
    title: "Voice + AI Integration",
    description: "Hands-free job updates, note-taking, and customer communication using advanced voice AI.",
    benefits: [
      "Hands-free operation",
      "Real-time transcription",
      "Voice commands",
      "Multi-language support"
    ],
    mockup: {
      title: "Voice Assistant",
      content: "Listening...",
      price: "Ready",
      confidence: "Voice active",
      items: ["Say: Update job status", "Say: Add note", "Say: Call customer"]
    }
  },
  {
    id: "payments",
    icon: Receipt,
    title: "Invoice & Payment Tools",
    description: "Instant invoicing with integrated payment processing and automated follow-ups.",
    benefits: [
      "Get paid 3x faster",
      "Automatic reminders",
      "Multiple payment methods",
      "Professional invoices"
    ],
    mockup: {
      title: "Invoice #2847",
      content: "Smith HVAC Service",
      price: "$420.00",
      confidence: "Payment pending",
      items: ["Service: $320", "Parts: $85", "Tax: $15"]
    }
  },
  {
    id: "crm-checklist",
    icon: CheckSquare,
    title: "CRM & Checklist Engine",
    description: "Complete customer relationship management with automated workflows and quality checklists.",
    benefits: [
      "Never miss a follow-up",
      "Quality consistency",
      "Customer history",
      "Automated workflows"
    ],
    mockup: {
      title: "Customer Profile",
      content: "Davis Residence",
      price: "5 jobs",
      confidence: "VIP customer",
      items: ["Last visit: Oct 15", "Preferred: Morning", "Notes: 2 dogs"]
    }
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Powerful Features That
            <span className="text-electric-blue"> Transform</span> Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto mb-8"
          >
            Explore the AI-powered tools that help service professionals quote faster, schedule smarter, and get paid quicker.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => setIsSimulatorOpen(true)}
              className="bg-electric-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-electric-blue/25"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Live Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Feature Tabs */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-8">Choose a Feature</h2>
              <div className="space-y-4">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  const isActive = activeFeature.id === feature.id;
                  
                  return (
                    <motion.button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature)}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                        isActive
                          ? 'border-electric-blue bg-electric-blue/5 shadow-lg'
                          : 'border-white/10 hover:border-electric-blue/50 hover:bg-[var(--color-surface)]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-electric-blue' : 'bg-[var(--color-surface)]'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            isActive ? 'text-white' : 'text-[var(--color-text-secondary)]'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold mb-2 ${
                            isActive ? 'text-electric-blue' : 'text-white'
                          }`}>
                            {feature.title}
                          </h3>
                          <p className="text-[var(--color-text-secondary)] text-sm">
                            {feature.description}
                          </p>
                        </div>
                        <ArrowRight className={`w-5 h-5 ${
                          isActive ? 'text-electric-blue' : 'text-white/40'
                        }`} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Feature Details & Mockup */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[var(--color-surface)] p-8 rounded-3xl border border-white/10 shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Feature Benefits */}
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-14 h-14 bg-electric-blue rounded-2xl flex items-center justify-center">
                          {(() => {
                            const IconComponent = activeFeature.icon;
                            return <IconComponent className="w-7 h-7 text-white" />;
                          })()}
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                          {activeFeature.title}
                        </h3>
                      </div>
                      
                      <p className="text-[var(--color-text-secondary)] text-lg mb-8 leading-relaxed">
                        {activeFeature.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                        {activeFeature.benefits.map((benefit, index) => (
                          <motion.div
                            key={benefit}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                            <span className="text-[var(--clr-text-2)]">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Real App Screen */}
                    <div className="flex justify-center" data-feature-id={activeFeature.id}>
                      <div className="relative rounded-[38px] shadow-[0_0_50px_rgba(42,91,215,0.3)] overflow-hidden w-[420px] max-w-full">
                        {(() => {
                          const asset = FEATURE_ASSETS[activeFeature.id as keyof typeof FEATURE_ASSETS];
                          return asset ? (
                            <img
                              src={asset.src}
                              alt={asset.alt}
                              width={420}
                              height={880}
                              className="w-full h-auto"
                              loading="lazy"
                              onError={(e) => {
                                console.warn(`Failed to load feature asset: ${asset.src}`);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-full h-[880px] bg-gradient-to-b from-[#2A5BD7]/20 to-[#2A5BD7]/5 flex items-center justify-center rounded-[38px]">
                              <div className="text-center text-white/60">
                                <div className="w-12 h-12 bg-[#2A5BD7] rounded-lg mx-auto mb-2"></div>
                                <p className="text-sm">Real App Screen</p>
                                <p className="text-xs mt-1">({activeFeature.id})</p>
                              </div>
                            </div>
                          );
                        })()}
                        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/90">
                          Real App
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Live Simulator Modal */}
      <AnimatePresence>
        {isSimulatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsSimulatorOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] bg-[var(--clr-surface)] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full flex flex-col">
                <div className="bg-electric-blue text-white p-6 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">CONSTRUKTR™ Live Demo</h3>
                  <button
                    onClick={() => setIsSimulatorOpen(false)}
                    className="w-8 h-8 bg-[var(--clr-surface)]/20 rounded-full flex items-center justify-center hover:bg-[var(--clr-surface)]/30 transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="flex-1 bg-[var(--color-surface)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-8 h-8 text-electric-blue" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Interactive Demo Coming Soon</h4>
                    <p className="text-[var(--color-text-secondary)] max-w-md">
                      Experience all features in a live, interactive environment. 
                      Try the AI estimator, schedule jobs, and see real-time updates.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}