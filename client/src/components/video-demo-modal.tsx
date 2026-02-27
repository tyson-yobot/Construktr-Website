import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, FastForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VideoStep {
  title: string;
  description: string;
  timestamp: number;
  duration: number;
  action: string;
}

const demoSteps: VideoStep[] = [
  {
    title: "Smart Quote Generation",
    description: "Watch AI analyze job requirements and generate accurate quotes in seconds",
    timestamp: 0,
    duration: 12,
    action: "AI analyzing job details..."
  },
  {
    title: "Calendar Integration",
    description: "See how smart scheduling optimizes your routes and prevents double-bookings",
    timestamp: 12,
    duration: 10,
    action: "Scheduling appointments..."
  },
  {
    title: "Invoice Creation",
    description: "Generate professional invoices with one tap and get paid instantly",
    timestamp: 22,
    duration: 8,
    action: "Creating invoice..."
  },
  {
    title: "Route Optimization",
    description: "Real-time route planning saves hours and reduces fuel costs",
    timestamp: 30,
    duration: 10,
    action: "Optimizing routes..."
  },
  {
    title: "Customer Communication",
    description: "Automated updates keep customers informed throughout the job",
    timestamp: 40,
    duration: 8,
    action: "Sending updates..."
  },
  {
    title: "Analytics Dashboard",
    description: "Track business performance with detailed insights and growth metrics",
    timestamp: 48,
    duration: 12,
    action: "Analyzing performance..."
  }
];

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoDemoModal({ isOpen, onClose }: VideoDemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(60); // 60 second demo
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Simulate video playback
  useEffect(() => {
    if (isPlaying && isOpen) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          if (newTime >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return newTime;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isOpen, duration]);

  // Update current step based on time
  useEffect(() => {
    const step = demoSteps.findIndex((step, index) => {
      const nextStep = demoSteps[index + 1];
      return currentTime >= step.timestamp && (!nextStep || currentTime < nextStep.timestamp);
    });
    if (step !== -1) {
      setCurrentStep(step);
    }
  }, [currentTime]);

  // Auto-hide controls
  useEffect(() => {
    if (showControls) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    setShowControls(true);
  };

  const handleReplay = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    setShowControls(true);
  };

  const handleSpeedUp = () => {
    const newTime = Math.min(currentTime + 10, duration);
    setCurrentTime(newTime);
    setShowControls(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setShowControls(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-black rounded-2xl shadow-2xl w-full max-w-4xl aspect-video relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          onMouseMove={() => setShowControls(true)}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close video demo modal"
            data-testid="button-close-video-modal"
            type="button"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Demo Badge */}
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-red-600 text-white">
              🔴 LIVE DEMO
            </Badge>
          </div>

          {/* Video Content Area */}
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center">
            {/* Simulated App Interface */}
            <div className="relative w-80 h-[640px] bg-[var(--clr-surface)] rounded-[2.5rem] shadow-2xl overflow-hidden">
              {/* Phone Status Bar */}
              <div className="h-8 bg-black flex items-center justify-between px-6 text-white text-sm">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-[var(--clr-surface)] rounded-sm"></div>
                  <div className="w-1 h-2 bg-[var(--clr-surface)] rounded-sm"></div>
                  <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 bg-[var(--clr-surface)] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <span className="text-white text-2xl font-bold">{currentStep + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {demoSteps[currentStep]?.title}
                    </h3>
                    <p className="text-[var(--clr-text-2)] text-sm mb-6 leading-relaxed">
                      {demoSteps[currentStep]?.description}
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full">
                      <p className="text-blue-700 text-sm font-medium">
                        {demoSteps[currentStep]?.action}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && currentTime === 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20"
                aria-label="Play demonstration video"
                type="button"
              >
                <div className="w-20 h-20 bg-[var(--clr-surface)]/90 hover:bg-[var(--clr-surface)] rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                  <Play className="w-8 h-8 text-black ml-1" aria-hidden="true" />
                </div>
              </motion.button>
            )}
          </div>

          {/* Step Timeline */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-lg p-4 w-80 z-10">
            <h4 className="text-white font-semibold mb-3">Demo Timeline</h4>
            <div className="space-y-2">
              {demoSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleSeek(step.timestamp)}
                  className={`w-full text-left p-2 rounded transition-colors ${
                    index === currentStep 
                      ? 'bg-blue-600/80 text-white' 
                      : 'text-gray-300 hover:bg-[var(--clr-surface)]/10'
                  }`}
                >
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs opacity-75">{formatTime(step.timestamp)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
              >
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-[var(--clr-surface)]/20 rounded-full h-1 mb-2">
                    <div 
                      className="bg-blue-500 h-1 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-white text-sm">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReplay}
                    className="text-white hover:bg-[var(--clr-surface)]/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handlePlayPause}
                    className="text-white hover:bg-[var(--clr-surface)]/20"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSpeedUp}
                    className="text-white hover:bg-[var(--clr-surface)]/20"
                  >
                    <FastForward className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"  
                    size="sm"
                    onClick={toggleMute}
                    className="text-white hover:bg-[var(--clr-surface)]/20"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Demo Complete */}
          {currentTime >= duration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/90 flex items-center justify-center text-center p-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Demo Complete!</h3>
                <p className="text-gray-300 mb-6">Ready to transform your contracting business?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleReplay}
                    variant="outline" 
                    className="border-white text-white hover:bg-[var(--clr-surface)] hover:text-black"
                  >
                    Watch Again
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}