import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, CreditCard, Play, ArrowRight } from "lucide-react";
import { trackVideoPlayed45sDemo, trackCTAStartTrialClicked } from "@/lib/analytics-events";
import appQuotesImage from "@assets/image_1754832756730.png";
import appSchedulingImage from "@assets/image_1754832756730.png";
import appPaymentsImage from "@assets/image_1754832756730.png";

// CEO Directive: 3-step flow Quote → Schedule → Get Paid with tiny real app loops
const educationSteps = [
  {
    id: "quote",
    icon: FileText,
    title: "Quote in 30 Seconds",
    description: "Upload photos, AI calculates materials + labor",
    bullets: ["Photo-based estimates", "Automatic pricing", "Professional PDF"],
    image: appQuotesImage,
    color: "var(--clr-brand-500)"
  },
  {
    id: "schedule",
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI optimizes routes, saves 2.5 hours daily",
    bullets: ["Route optimization", "Auto-reminders", "Calendar sync"],
    image: appSchedulingImage,
    color: "var(--clr-info)"
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "Get Paid Same Day",
    description: "On-site payments, instant deposits",
    bullets: ["Card readers", "Digital invoices", "Same-day deposits"],
    image: appPaymentsImage,
    color: "var(--clr-success)"
  }
];

export default function CEOEducationFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasTrackedVideo, setHasTrackedVideo] = useState(false);

  const handleStepChange = (stepIndex: number) => {
    setActiveStep(stepIndex);
    
    // Track video progress
    if (!hasTrackedVideo) {
      const percentWatched = ((stepIndex + 1) / educationSteps.length) * 100;
      trackVideoPlayed45sDemo(percentWatched);
      setHasTrackedVideo(true);
    }
  };

  const currentStep = educationSteps[activeStep];

  return (
    <section className="py-20 bg-[var(--clr-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="chip-brand mb-6 inline-block">
            See How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--clr-text)] mb-4">
            3-Step Workflow
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-2xl mx-auto">
            Watch the 45-second process that's transforming contractor businesses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Phone Loop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="phone-frame mx-auto max-w-xs">
              <div className="phone-screen relative">
                
                {/* Step Indicator */}
                <div className="absolute top-4 left-4 bg-black/60 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {activeStep + 1}/3
                </div>
                
                {/* Current Step Image */}
                <motion.img
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={currentStep.image}
                  alt={`${currentStep.title} - Real App Screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Step Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Current Step Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: currentStep.color }}
                >
                  <currentStep.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--clr-text)]">
                    {currentStep.title}
                  </h3>
                  <p className="text-lg text-[var(--clr-text-2)]">
                    {currentStep.description}
                  </p>
                </div>
              </div>
              
              {/* Short Bullets - CEO Directive */}
              <div className="space-y-2">
                {currentStep.bullets.map((bullet, index) => (
                  <motion.div
                    key={bullet}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-[var(--clr-primary)] rounded-full"></div>
                    <span className="text-[var(--clr-text)]">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Step Navigation */}
            <div className="flex space-x-3">
              {educationSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepChange(index)}
                  className={`education-step ${index === activeStep ? 'active' : ''} flex-1`}
                >
                  <step.icon className="w-5 h-5 mx-auto mb-2" />
                  <div className="text-sm font-medium capitalize">{step.id}</div>
                </button>
              ))}
            </div>

            {/* Auto-Progress Controls */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="btn-ghost text-sm">
                  <Play className="w-4 h-4 mr-1" />
                  Auto-play
                </button>
              </div>
              
              <button
                onClick={() => trackCTAStartTrialClicked('hero')}
                className="btn-primary"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[var(--clr-border)] rounded-full h-1">
              <div 
                className="bg-[var(--clr-primary)] h-1 rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) / educationSteps.length) * 100}%` }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}