import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Navigation, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

// iPhone screenshots from Apple_6.5_iPhone folder
const demoImages = {
  quoting: "/screens/Screenshot_1773334996.png",
  scheduling: "/screens/Screenshot_1773335009.png", 
  payments: "/screens/Screenshot_1773335025.png"
} as const;

const demoIcons = {
  quoting: Calculator,
  scheduling: Navigation,
  payments: CreditCard
} as const;

// Simplified demo data without videos
const demoData = [
  {
    id: "quoting" as const,
    title: "AI Quote Builder",
    description: "Generate professional quotes in 30 seconds with AI-powered pricing",
    bullets: [
      "Photo-based estimates with AI measurements",
      "Automatic material and labor calculations", 
      "Professional PDF quotes with your branding",
      "Real-time profit margin optimization"
    ]
  },
  {
    id: "scheduling" as const,
    title: "Smart Scheduling",
    description: "Never double-book again with intelligent scheduling and routing",
    bullets: [
      "Drag-and-drop calendar interface",
      "Route optimization for maximum efficiency",
      "Weather integration and rescheduling alerts",
      "Team coordination and dispatch management"
    ]
  },
  {
    id: "payments" as const,
    title: "Instant Payments",
    description: "Get paid on the spot with integrated payment processing",
    bullets: [
      "Accept payments via card, Apple Pay, Google Pay",
      "Same-day deposits with Stripe integration",
      "Professional invoicing and receipts",
      "Automated follow-up for outstanding payments"
    ]
  }
];

export default function TabbedDemo() {
  const [activeTab, setActiveTab] = useState(demoData[0]);

  const handleTabSelect = (demo: typeof demoData[0]) => {
    setActiveTab(demo);
  };

  const IconComponent = demoIcons[activeTab.id];
  const currentTabIndex = demoData.findIndex(demo => demo.id === activeTab.id);

  return (
    <section id="see-in-action" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Watch how CONSTRUKTR transforms your workflow with Quote → Schedule → Get Paid automation
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div 
            className="inline-flex bg-[var(--color-surface)] p-1 rounded-xl"
            role="tablist"
            aria-label="Demo feature tabs"
          >
            {demoData.map((demo) => {
              const TabIcon = demoIcons[demo.id];
              return (
                <button
                  key={demo.id}
                  onClick={() => handleTabSelect(demo)}
                  className={`
                    flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                    ${activeTab.id === demo.id
                      ? 'bg-[var(--color-primary)] text-white shadow-lg'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/50'
                    }
                  `}
                >
                  <TabIcon className="w-5 h-5" />
                  {demo.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-[var(--color-text-secondary)] text-sm font-medium">
            {currentTabIndex + 1} / {demoData.length}
          </span>
          <div className="w-32 h-2 bg-[var(--color-surface)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentTabIndex + 1) / demoData.length * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Demo Header */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
                    {activeTab.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mt-2">
                    {activeTab.description}
                  </p>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-4">
                {activeTab.bullets.map((bullet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-[var(--color-text-primary)] leading-relaxed">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={() => window.location.href = '/get'}
                  className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] font-semibold px-8 py-3"
                >
                  Try {activeTab.title} Free
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right iPhone Mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="relative flex justify-center"
            >
              {/* iPhone Frame */}
              <div className="relative w-[300px] h-[600px] bg-black rounded-[2rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <img
                    src={demoImages[activeTab.id]}
                    alt={`CONSTRUKTR ${activeTab.title} interface screenshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* iPhone notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}