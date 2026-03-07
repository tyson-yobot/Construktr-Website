import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  Award, 
  DollarSign, 
  ArrowRight,
  Play,
  CheckCircle
} from "lucide-react";
import { trackVideoPlayed45sDemo, trackCTAStartTrialClicked } from "@/lib/analytics-events";
import StandardizedPhoneMockup from "./standardized-phone-mockup";
import appQuotesImage from "/screens/quote-builder.png";
import appSchedulingImage from "/screens/schedule-view.png";
import appPaymentsImage from "/screens/payment-processing.png";

// Education Flow Steps - Quote → Schedule → Get Paid → Proof → Pricing
const educationSteps = [
  {
    id: "quotes",
    icon: FileText,
    title: "Generate Quotes in 30 Seconds",
    subtitle: "AI-powered estimates with photos",
    description: "Upload job photos and let AI calculate accurate quotes with materials, labor, and profit margins built in.",
    benefits: ["30-second quote generation", "Photo-based estimates", "Automatic material costs"],
    image: appQuotesImage,
    videoTime: 0,
    color: "blue"
  },
  {
    id: "schedule",
    icon: Calendar,
    title: "Smart Route Optimization",
    subtitle: "Save 2.5 hours daily",
    description: "AI optimizes your daily routes, automatically schedules jobs, and sends customer reminders.",
    benefits: ["Route optimization", "Auto-scheduling", "Customer notifications"],
    image: appSchedulingImage,
    videoTime: 15,
    color: "green"
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Get Paid Instantly",
    subtitle: "Same-day deposits",
    description: "Collect payments on-site with card readers, digital invoices, and automatic payment processing.",
    benefits: ["Same-day deposits", "On-site payments", "Digital invoices"],
    image: appPaymentsImage,
    videoTime: 30,
    color: "yellow"
  },
  {
    id: "proof",
    icon: Award,
    title: "Proven Results",
    subtitle: "2,500+ contractors trust us",
    description: "Join thousands of contractors who've increased revenue by 40% and saved 8+ hours per week.",
    benefits: ["40% revenue increase", "8+ hours saved weekly", "2,500+ contractors"],
    image: appQuotesImage,
    videoTime: 45,
    color: "purple"
  },
  {
    id: "pricing",
    icon: DollarSign,
    title: "Simple Pricing",
    subtitle: "$49/month - Cancel anytime",
    description: "No setup fees, no contracts. Start free and see results immediately.",
    benefits: ["Free forever plan", "No setup fees", "Cancel anytime"],
    image: appSchedulingImage,
    videoTime: 60,
    color: "blue"
  }
];

export default function UnifiedEducationFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasPlayedVideo, setHasPlayedVideo] = useState(false);

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    
    // Track video engagement if user interacts with steps
    if (!hasPlayedVideo) {
      const percentWatched = ((stepIndex + 1) / educationSteps.length) * 100;
      trackVideoPlayed45sDemo(percentWatched);
      setHasPlayedVideo(true);
    }
  };

  const currentStepData = educationSteps[currentStep];

  return (
    <section className="py-20 section--light bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="chip-active-std mb-4">
            See How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Complete Business 
            <span className="text-[var(--color-primary-blue)]"> Workflow</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            From quote to payment in minutes. Watch how CONSTRUKTR streamlines your entire process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Phone Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <StandardizedPhoneMockup
                src={currentStepData.image}
                alt={`${currentStepData.title} - Real CONSTRUKTR App Screenshot`}
                withGlow={true}
                size="desktop"
                className="mx-auto"
              />
              
              {/* Step Indicator Overlay */}
              <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                Step {currentStep + 1} of {educationSteps.length}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Step Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Current Step Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl bg-${currentStepData.color}-500 flex items-center justify-center`}>
                  <currentStepData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentStepData.title}</h3>
                  <p className="text-lg text-[var(--clr-text-2)]">{currentStepData.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentStepData.description}
              </p>
              
              {/* Benefits List */}
              <div className="space-y-3">
                {currentStepData.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Step Navigation */}
            <div className="grid grid-cols-5 gap-2">
              {educationSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    index === currentStep
                      ? 'border-[var(--color-primary-blue)] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-[var(--clr-surface)]'
                  }`}
                >
                  <step.icon className={`w-5 h-5 mx-auto ${
                    index === currentStep ? 'text-[var(--color-primary-blue)]' : 'text-gray-500'
                  }`} />
                  <span className={`text-xs font-medium mt-1 block ${
                    index === currentStep ? 'text-[var(--color-primary-blue)]' : 'text-gray-500'
                  }`}>
                    {step.id}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="btn-secondary-std disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentStep < educationSteps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(educationSteps.length - 1, currentStep + 1))}
                  className="btn-primary-std"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <Button
                  onClick={() => trackCTAStartTrialClicked('hero')}
                  className="btn-accent-std"
                >
                  Start Free Trial
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[var(--color-primary-blue)] h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / educationSteps.length) * 100}%` }}
              />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}