import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Zap, DollarSign, Users, CheckCircle } from "lucide-react";
import DeviceFrame from "./DeviceFrame";

interface Feature {
  id: string;
  assetId: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: "ai-quotes",
    assetId: "ai-quotes",
    icon: Zap,
    title: "AI-Powered Quotes",
    subtitle: "30-second generation",
    description: "Generate professional quotes instantly with AI that understands your trade, materials, and local pricing.",
    benefits: [
      "30-second quote generation",
      "Smart material calculations", 
      "Local pricing integration",
      "Professional templates"
    ]
  },
  {
    id: "smart-scheduling",
    assetId: "smart-scheduling",
    icon: Clock,
    title: "Smart Scheduling", 
    subtitle: "Save 2.5 hours daily",
    description: "AI route optimization and calendar sync that eliminates double-bookings and maximizes your efficiency.",
    benefits: [
      "2.5 hours saved daily",
      "Zero double-bookings",
      "Route optimization",
      "Calendar sync"
    ]
  },
  {
    id: "instant-payments",
    assetId: "instant-payments",
    icon: DollarSign,
    title: "Instant Payments",
    subtitle: "Same-day deposits", 
    description: "Get paid faster with automated invoicing, payment reminders, and same-day deposits.",
    benefits: [
      "Same-day deposits",
      "Automated invoicing",
      "Payment reminders",
      "3x faster payments"
    ]
  },
  {
    id: "client-management",
    assetId: "client-management",
    icon: Users,
    title: "Client Management",
    subtitle: "Never lose a lead",
    description: "Track every interaction, automate follow-ups, and turn more leads into paying customers.",
    benefits: [
      "Lead tracking",
      "Automated follow-ups", 
      "Client history",
      "Communication logs"
    ]
  }
];

export default function FeatureListLayout() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="feature-grid-container bg-[var(--color-bg)]">
      <div className="text-center mb-12">
        <h2 className="h2 text-white mb-4">
          Features that pay for themselves
        </h2>
        <p className="subhead max-w-2xl mx-auto text-white/90">
          Every feature designed to save time, increase revenue, and eliminate the headaches of running a contracting business.
        </p>
      </div>

      <div className="feature-grid">
        {/* Left Column - Feature Cards */}
        <div className="space-y-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = selectedFeature.id === feature.id;
            
            return (
              <motion.div
                key={feature.id}
                className={`feature-card ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedFeature(feature)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive 
                      ? 'bg-[var(--color-primary)] text-white' 
                      : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm mb-1 ${
                      isActive ? 'text-white' : 'text-white/90'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-medium ${
                      isActive ? 'text-[var(--color-primary)]' : 'text-white/80'
                    }`}>
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column - Selected Feature Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFeature.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="feature-panel"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <selectedFeature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="h3 text-white mb-1">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-[var(--color-primary)] font-medium">
                    {selectedFeature.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {selectedFeature.description}
              </p>

              <div className="space-y-3">
                {selectedFeature.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DeviceFrame 
                  src={`/media/${selectedFeature.assetId}.webp`}
                  alt={selectedFeature.title}
                  size="mobile"
                  showBadge={true}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}