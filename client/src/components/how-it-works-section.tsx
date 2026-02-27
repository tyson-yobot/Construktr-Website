import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FileText, Calendar, CreditCard } from "lucide-react";
import { trackVideoDemoPlay, trackVideoDemoProgress } from "@/lib/analytics-events";
import VideoSchema from "./video-schema";
import appQuotesImage from "@assets/IMG_4330_1754274611770.jpeg";
import appSchedulingImage from "@assets/IMG_4331_1754274611770.jpeg";
import appInvoiceImage from "@assets/IMG_4333_1754274611770.jpeg";
import appPaymentsImage from "@assets/IMG_4332_1754274611770.jpeg";

const workflowSteps = [
  {
    id: "quote",
    icon: FileText,
    title: "Quote",
    subtitle: "AI prices materials & labor instantly",
    bullets: [
      "Add job details",
      "AI prices materials & labor",
      "Send branded PDF from phone"
    ],
    image: appQuotesImage,
    duration: 11000,
    timeStart: 0
  },
  {
    id: "schedule", 
    icon: Calendar,
    title: "Schedule",
    subtitle: "Save 2.5 hours daily with smart routing",
    bullets: [
      "Smart route optimization",
      "Prevent double-booking",
      "Auto client updates"
    ],
    image: appSchedulingImage,
    duration: 11000,
    timeStart: 11
  },
  {
    id: "invoice",
    icon: FileText, 
    title: "Invoice",
    subtitle: "Get paid same-day on-site",
    bullets: [
      "Charge on-site • Same-day deposits",
      "Accept all payment types",
      "Auto-invoice delivery"
    ],
    image: appInvoiceImage,
    duration: 11000,
    timeStart: 22
  },
  {
    id: "payment",
    icon: CreditCard, 
    title: "Payment",
    subtitle: "Card on-site, automatic processing, same-day deposits",
    bullets: [
      "Card reader on-site",
      "Automatic processing",
      "Same-day deposits"
    ],
    image: appPaymentsImage,
    duration: 12000,
    timeStart: 33
  }
];

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasTrackedPlay, setHasTrackedPlay] = useState(false);
  const [progressMilestones, setProgressMilestones] = useState<Set<number>>(new Set());
  const videoRef = useState<HTMLVideoElement | null>(null)[0];

  // Timeline sync with timeupdate listener for real video
  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef) {
        const time = videoRef.currentTime;
        setCurrentTime(time);
        
        // Update active step based on time slices with 200ms responsiveness
        let activeStep = 0;
        if (time >= 33) activeStep = 3; // Payment (33-45s)
        else if (time >= 22) activeStep = 2; // Invoice (22-33s)
        else if (time >= 11) activeStep = 1; // Schedule (11-22s)
        else activeStep = 0; // Quote (0-11s)
        
        setCurrentStep(activeStep);
        setProgress((time / 45) * 100);
        
        // Track video progress milestones
        const percentWatched = (time / 45) * 100;
        [25, 50, 75, 100].forEach(milestone => {
          if (percentWatched >= milestone && !progressMilestones.has(milestone)) {
            trackVideoDemoProgress(milestone as 25 | 50 | 75 | 100);
            setProgressMilestones(prev => new Set(Array.from(prev).concat([milestone])));
          }
        });
      }
    };

    if (videoRef) {
      // High frequency update for <200ms responsiveness
      videoRef.addEventListener('timeupdate', handleTimeUpdate);
      return () => videoRef.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [videoRef, progressMilestones]);

  // Auto-play functionality for demo mode
  useEffect(() => {
    if (!isPlaying) return;

    const totalDuration = workflowSteps.reduce((sum, step) => sum + step.duration, 0);
    const stepDuration = workflowSteps[currentStep].duration;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (stepDuration / 100));
        const newTime = (newProgress / 100) * (stepDuration / 1000);
        setCurrentTime(newTime);
        
        // Update active step based on time slices
        let activeStep = 0;
        if (newTime >= 33) activeStep = 3; // Payment (33-45s)
        else if (newTime >= 22) activeStep = 2; // Invoice (22-33s)
        else if (newTime >= 11) activeStep = 1; // Schedule (11-22s)
        else activeStep = 0; // Quote (0-11s)
        
        if (newProgress >= 100) {
          const nextStep = (currentStep + 1) % workflowSteps.length;
          setCurrentStep(nextStep);
          return 0;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlayToggle = () => {
    if (!hasTrackedPlay) {
      trackVideoDemoPlay();
      setHasTrackedPlay(true);
    }
    setIsPlaying(!isPlaying);
  };

  const handleStepClick = (stepIndex: number) => {
    const step = workflowSteps[stepIndex];
    const targetTime = step.timeStart;
    
    // Immediate step and time update for <200ms responsiveness
    setCurrentStep(stepIndex);
    setCurrentTime(targetTime);
    setProgress((targetTime / 45) * 100);
    
    // If video element exists, seek to the specific time
    if (videoRef) {
      videoRef.currentTime = targetTime;
    }
  };

  const currentStepData = workflowSteps[currentStep];

  return (
    <section id="how-it-works" className="py-20 bg-[var(--clr-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="chip-brand mb-6 inline-block">
            45-Second Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--clr-text)] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-2xl mx-auto">
            Watch the complete process that's transforming contractor businesses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Phone Video Loop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="phone-frame mx-auto" style={{ minWidth: '420px', maxWidth: '420px' }}>
              <div className="phone-screen relative">
                
                {/* Play/Pause Overlay - A11y Enhanced */}
                <button
                  onClick={handlePlayToggle}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity hover:bg-black/30 focus:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--clr-primary)] focus:ring-offset-2 z-10"
                  aria-label={isPlaying ? "Pause workflow demonstration" : "Play workflow demonstration"}
                  tabIndex={0}
                >
                  <div className="w-16 h-16 bg-[var(--clr-surface)]/90 rounded-full flex items-center justify-center">
                    {isPlaying ? (
                      <div className="w-4 h-4 flex space-x-1" aria-hidden="true">
                        <div className="w-1 h-4 bg-black"></div>
                        <div className="w-1 h-4 bg-black"></div>
                      </div>
                    ) : (
                      <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" aria-hidden="true"></div>
                    )}
                  </div>
                </button>
                
                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-full h-2">
                  <div 
                    className="bg-[var(--clr-primary)] h-2 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                {/* Step Indicator */}
                <div className="absolute top-4 left-4 bg-black/60 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {currentStep + 1}/4 • {currentStepData.id}
                </div>
                
                {/* Current Step Image - Silent Loop with A11y */}
                <motion.img
                  key={currentStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={currentStepData.image}
                  alt={`CONSTRUKTR app — ${currentStepData.title} screen showing ${currentStepData.subtitle}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Why This Matters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <p className="text-[var(--clr-text-2)] text-sm">
                Why this matters, saves ~2 admin hours per job; increases acceptance ~40%.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Timeline + Current Step */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Current Step Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--clr-brand-500)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <currentStepData.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--clr-text)] mb-2">
                    {currentStepData.title}
                  </h3>
                  <p className="text-lg text-[var(--clr-text-2)] mb-4">
                    {currentStepData.subtitle}
                  </p>
                  
                  {/* 2-3 Bullets */}
                  <div className="space-y-2">
                    {currentStepData.bullets.map((bullet, index) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[var(--clr-primary)] rounded-full"></div>
                        <span className="text-[var(--clr-text)]">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline on the Right */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[var(--clr-text)]">45-Second Workflow</h4>
              
              {/* Timeline Steps - A11y Enhanced */}
              <div className="space-y-3" aria-live="polite" aria-label="Workflow timeline">
                {workflowSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-[var(--clr-primary)] focus:ring-offset-2 ${
                      index === currentStep 
                        ? 'border-[var(--clr-brand-500)] bg-[var(--clr-elev)]' 
                        : 'border-[var(--clr-border)] bg-[var(--clr-surface)] hover:border-[var(--clr-brand-400)]'
                    }`}
                    aria-label={`Jump to ${step.title}: ${step.subtitle}. Time: ${step.timeStart} to ${step.timeStart + Math.round(step.duration/1000)} seconds`}
                    aria-current={index === currentStep ? "step" : undefined}
                    tabIndex={0}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <step.icon className={`w-5 h-5 ${
                          index === currentStep ? 'text-[var(--clr-brand-500)]' : 'text-[var(--clr-text-2)]'
                        }`} />
                        <span className={`font-medium ${
                          index === currentStep ? 'text-[var(--clr-text)]' : 'text-[var(--clr-text-2)]'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                      <span className="text-xs text-[var(--clr-text-2)]">
                        {step.timeStart}s - {step.timeStart + Math.round(step.duration/1000)}s
                      </span>
                    </div>
                    
                    {/* Progress bar for current step */}
                    {index === currentStep && (
                      <div className="w-full bg-[var(--clr-border)] rounded-full h-1 mb-2">
                        <div 
                          className="bg-[var(--clr-brand-500)] h-1 rounded-full transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                    
                    <p className="text-sm text-[var(--clr-text-2)]">
                      {step.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Overall Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[var(--clr-text-2)]">
                <span>Workflow Progress</span>
                <span>{Math.round(((currentStep * 100) + progress) / workflowSteps.length)}%</span>
              </div>
              <div className="w-full bg-[var(--clr-border)] rounded-full h-2">
                <div 
                  className="bg-[var(--clr-primary)] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep * 100) + progress) / workflowSteps.length}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}