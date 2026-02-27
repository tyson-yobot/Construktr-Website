import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize } from "lucide-react";
import WorkflowAnimationVideo from "./workflow-animation-video";
import MiniTour from "@/components/mini-tour";
import DemoOverlay from "@/components/demo-overlay";
import { trackVideoPlayed45sDemo } from "@/lib/analytics-events";

// Demo video steps with timestamps - optimized for 10-second workflow
const videoSteps = [
  {
    time: 0,
    title: "Quote",
    description: "AI generates instant quote",
    highlight: "30-second pricing"
  },
  {
    time: 3,
    title: "Schedule", 
    description: "Automatic calendar booking",
    highlight: "Zero conflicts"
  },
  {
    time: 6,
    title: "Invoice",
    description: "Job completed, invoice sent",
    highlight: "One-tap billing"
  },
  {
    time: 9,
    title: "Payment",
    description: "Instant payment received",
    highlight: "Faster cash flow"
  }
];

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onMute: () => void;
  onSeek: (time: number) => void;
  onRestart: () => void;
  onFullscreen: () => void;
}

function VideoControls({ 
  isPlaying, 
  isMuted, 
  currentTime, 
  duration, 
  onPlayPause, 
  onMute, 
  onSeek, 
  onRestart,
  onFullscreen 
}: VideoControlsProps) {
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPlayPause}
          className="text-white hover:bg-[var(--clr-surface)]/20"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onRestart}
          className="text-white hover:bg-[var(--clr-surface)]/20"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        
        <div className="flex-1 mx-3">
          <div className="relative h-1 bg-[var(--clr-surface)]/30 rounded-full cursor-pointer">
            <div 
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
            <input
              type="range"
              min="0"
              max={duration || 45}
              value={currentTime}
              onChange={(e) => onSeek(parseFloat(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        
        <div className="text-white text-sm font-mono min-w-[80px]">
          {Math.floor(currentTime)}s / {Math.floor(duration || 45)}s
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onMute}
          className="text-white hover:bg-[var(--clr-surface)]/20"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onFullscreen}
          className="text-white hover:bg-[var(--clr-surface)]/20"
        >
          <Maximize className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function InteractiveVideoExplainer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(45);
  const [currentStep, setCurrentStep] = useState(0);
  const [showVideoFallback, setShowVideoFallback] = useState(true);
  const [showDemoOverlay, setShowDemoOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Update current step based on video time and track completion
  useEffect(() => {
    const step = videoSteps.findIndex((step, index) => {
      const nextStep = videoSteps[index + 1];
      return currentTime >= step.time && (!nextStep || currentTime < nextStep.time);
    });
    if (step !== -1) {
      setCurrentStep(step);
    }
    
    // Track video completion milestones
    const percentWatched = (currentTime / duration) * 100;
    if (percentWatched >= 25 && percentWatched < 50 && !sessionStorage.getItem('video_25_tracked')) {
      trackVideoPlayed45sDemo(25);
      sessionStorage.setItem('video_25_tracked', 'true');
    } else if (percentWatched >= 50 && percentWatched < 75 && !sessionStorage.getItem('video_50_tracked')) {
      trackVideoPlayed45sDemo(50);
      sessionStorage.setItem('video_50_tracked', 'true');
    } else if (percentWatched >= 75 && percentWatched < 100 && !sessionStorage.getItem('video_75_tracked')) {
      trackVideoPlayed45sDemo(75);
      sessionStorage.setItem('video_75_tracked', 'true');
    } else if (percentWatched >= 100 && !sessionStorage.getItem('video_100_tracked')) {
      trackVideoPlayed45sDemo(100);
      sessionStorage.setItem('video_100_tracked', 'true');
    }
  }, [currentTime, duration]);

  // Simulate video time progression
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && showVideoFallback) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, showVideoFallback]);

  const handlePlayPause = () => {
    if (videoRef.current && !showVideoFallback) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (videoRef.current && !showVideoFallback) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (videoRef.current && !showVideoFallback) {
      videoRef.current.currentTime = time;
    }
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setCurrentStep(0);
    if (videoRef.current && !showVideoFallback) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current && !showVideoFallback) {
      videoRef.current.requestFullscreen();
    }
  };

  const jumpToStep = (stepIndex: number) => {
    const step = videoSteps[stepIndex];
    handleSeek(step.time);
  };

  // Mini-tour content for video section
  const tourSteps = [
    {
      title: "Interactive Video Timeline",
      description: "Click any step below to jump to that part of the workflow. Each section shows how contractors use CONSTRUKTR in real situations."
    },
    {
      title: "Step-by-Step Breakdown", 
      description: "Watch how each workflow step works in practice. The timeline highlights what's happening at each stage of the contractor's process."
    },
    {
      title: "Why This Matters",
      description: "This workflow saves contractors an average of 2 hours per job while increasing customer satisfaction by 40%. See the real impact below the video."
    }
  ];

  // Demo overlay content  
  const demoSteps = [
    {
      title: "Click any timeline step",
      description: "Jump directly to see Quote, Schedule, Invoice, or Payment in action",
      highlight: "No need to watch the whole video - skip to what interests you most"
    },
    {
      title: "Watch the workflow flow",
      description: "See how each step connects seamlessly to create the complete contractor experience",
      highlight: "Notice how everything happens automatically - no manual data entry"
    },
    {
      title: "Real contractor results",
      description: "This same workflow helped Mike Rodriguez increase his quotes from 8 to 25 per week",
      highlight: "Your results may vary, but contractors consistently see 2+ hour daily time savings"
    }
  ];

  return (
    <section ref={sectionRef} id="video-explainer" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            <Play className="w-4 h-4 mr-2" />
            45-Second Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            See How It Works in the Field
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Watch a real contractor use CONSTRUKTR™ from quote to payment in under 45 seconds.
          </p>
          
          {/* Try This Feature Button */}
          <Button
            onClick={() => setShowDemoOverlay(true)}
            variant="outline"
            className="mt-6 bg-[var(--clr-surface)]/10 border-white/20 text-white hover:bg-[var(--clr-surface)]/20"
          >
            Try This Feature
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <WorkflowAnimationVideo 
                  isPlaying={isPlaying}
                  onPlayPause={handlePlayPause}
                  duration={duration}
                />
                
                {/* Step Indicator Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/80 rounded-xl p-4 text-white">
                    <h4 className="font-bold text-lg mb-1">
                      {videoSteps[currentStep]?.title}
                    </h4>
                    <p className="text-blue-200 text-sm mb-2">
                      {videoSteps[currentStep]?.description}
                    </p>
                    <Badge className="bg-yellow-500 text-black border-0 text-xs">
                      {videoSteps[currentStep]?.highlight}
                    </Badge>
                  </div>
                </div>

                {/* Play button overlay for initial state */}
                <AnimatePresence>
                  {!isPlaying && currentTime === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Button
                        onClick={handlePlayPause}
                        size="lg"
                        className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video Controls */}
                <VideoControls
                  isPlaying={isPlaying}
                  isMuted={isMuted}
                  currentTime={currentTime}
                  duration={duration}
                  onPlayPause={handlePlayPause}
                  onMute={handleMute}
                  onSeek={handleSeek}
                  onRestart={handleRestart}
                  onFullscreen={handleFullscreen}
                />
              </div>
            </div>
          </motion.div>

          {/* Step Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Video Timeline</h3>
            {videoSteps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => jumpToStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  currentStep === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-[var(--clr-surface)]/10 text-blue-100 hover:bg-[var(--clr-surface)]/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    currentStep === index ? 'bg-[var(--clr-surface)] text-blue-600' : 'bg-blue-600 text-white'
                  }`}>
                    {step.time}s
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{step.title}</div>
                    <div className="text-xs opacity-80">{step.description}</div>
                  </div>
                </div>
              </motion.button>
            ))}
            
            <div className="mt-8 p-4 bg-green-600/20 rounded-xl border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2">Why This Matters</h4>
              <p className="text-green-100 text-sm">
                This workflow saves contractors an average of 2 hours per job while 
                increasing customer satisfaction by 40%.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-[var(--clr-surface)]/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">30 sec</div>
            <div className="text-white font-semibold mb-1">Quote Generation</div>
            <div className="text-blue-200 text-sm">vs 20+ minutes manually</div>
          </div>
          <div className="bg-[var(--clr-surface)]/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">0</div>
            <div className="text-white font-semibold mb-1">Double Bookings</div>
            <div className="text-blue-200 text-sm">Smart calendar sync</div>
          </div>
          <div className="bg-[var(--clr-surface)]/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Instant</div>
            <div className="text-white font-semibold mb-1">Payments</div>
            <div className="text-blue-200 text-sm">No more waiting 30+ days</div>
          </div>
        </motion.div>

        {/* Mini Tour for first-time visitors */}
        <MiniTour
          targetRef={sectionRef}
          steps={tourSteps}
          storageKey="video-section-tour"
          autoShow={true}
        />

        {/* Demo Overlay - Only opens on button click */}
        <DemoOverlay
          isOpen={showDemoOverlay}
          onClose={() => setShowDemoOverlay(false)}
          title="Interactive Video Demo"
          description="Learn how to navigate the video timeline"
          steps={demoSteps}
          storageKey="video-demo-overlay"
        />
      </div>
    </section>
  );
}