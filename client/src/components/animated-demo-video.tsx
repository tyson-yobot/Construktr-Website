import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoStep {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const demoSteps: DemoStep[] = [
  {
    title: "Quote Generated",
    description: "AI creates professional estimate in 30 seconds",
    icon: "📋",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Job Scheduled",
    description: "Automatic calendar integration, no conflicts",
    icon: "📅",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Work Completed",
    description: "Real-time progress updates for clients",
    icon: "🔨",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Payment Received",
    description: "Instant payment processing, same-day deposits",
    icon: "💰",
    color: "from-yellow-500 to-yellow-600"
  }
];

interface AnimatedDemoVideoProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  duration?: number;
}

export default function AnimatedDemoVideo({ isPlaying, onPlayPause, duration = 12 }: AnimatedDemoVideoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Simulate video progression
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          if (newTime >= duration) {
            setCurrentStep(0);
            return 0;
          }
          
          // Update step based on time
          const stepIndex = Math.floor((newTime / duration) * demoSteps.length);
          setCurrentStep(Math.min(stepIndex, demoSteps.length - 1));
          
          return newTime;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handleRestart = () => {
    setCurrentTime(0);
    setCurrentStep(0);
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-lg overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, var(--color-surface), var(--color-elevated))",
              "linear-gradient(45deg, var(--color-elevated), var(--color-border))",
              "linear-gradient(45deg, var(--color-border), var(--color-surface))"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md"
          >
            {/* Step Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              {demoSteps[currentStep].icon}
            </motion.div>

            {/* Step Title */}
            <motion.h3
              className={`text-2xl font-bold bg-gradient-to-r ${demoSteps[currentStep].color} bg-clip-text text-transparent mb-2`}
            >
              {demoSteps[currentStep].title}
            </motion.h3>

            {/* Step Description */}
            <motion.p className="text-white/80 text-lg">
              {demoSteps[currentStep].description}
            </motion.p>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {demoSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentStep ? 'bg-[var(--clr-surface)]' : 'bg-[var(--clr-surface)]/30'
                  }`}
                  animate={{
                    scale: index === currentStep ? [1, 1.5, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        {/* Progress Bar */}
        <div className="w-full bg-[var(--clr-surface)]/20 rounded-full h-1 mb-3">
          <motion.div
            className="bg-[var(--clr-surface)] rounded-full h-1"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onPlayPause}
              className="text-white hover:bg-[var(--clr-surface)]/20 p-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestart}
              className="text-white hover:bg-[var(--clr-surface)]/20 p-2"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:bg-[var(--clr-surface)]/20 p-2"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
          </div>

          <div className="text-white/70 text-sm">
            {Math.floor(currentTime)}s / {duration}s
          </div>
        </div>
      </div>

      {/* CONSTRUKTR Watermark */}
      <div className="absolute top-4 right-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-white font-bold text-sm">CONSTRUKTR</span>
        </div>
      </div>
    </div>
  );
}