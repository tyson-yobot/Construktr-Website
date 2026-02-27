import { motion } from "framer-motion";
import { Play, Clock, CheckCircle, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";

// Timeline bullets for 60-second demo
const timelineSteps = [
  {
    time: 0,
    title: "AI Quote Generation",
    description: "Watch AI analyze job details and create accurate quotes in seconds",
    duration: 12
  },
  {
    time: 12,
    title: "Smart Scheduling",
    description: "See automatic calendar integration and route optimization",
    duration: 10
  },
  {
    time: 22,
    title: "Job Management",
    description: "Track progress with real-time updates and photo documentation",
    duration: 12
  },
  {
    time: 34,
    title: "Invoice & Payment",
    description: "Generate professional invoices and receive instant payments",
    duration: 14
  },
  {
    time: 48,
    title: "Analytics Dashboard",
    description: "Review business performance and growth insights",
    duration: 12
  }
];

export default function EnhancedVideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // Captions on by default means audio might be muted
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 60; // 60-second demo

  // Simulate video progress
  useEffect(() => {
    if (isPlaying) {
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
  }, [isPlaying, duration]);

  // Get current timeline step
  const getCurrentStep = () => {
    return timelineSteps.findIndex(step => 
      currentTime >= step.time && currentTime < step.time + step.duration
    );
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!videoLoaded) {
      setVideoLoaded(true);
    }
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <section id="Demo" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            See it in Action
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Watch a real contractor workflow from quote to payment in just 60 seconds
          </p>
          <Badge className="mt-4 bg-green-600/20 border-green-500/30 text-green-400 px-4 py-1">
            <CheckCircle className="w-4 h-4 mr-2" />
            Closed Captions Available
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Video Player - Left 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                {!videoLoaded ? (
                  /* Preloaded Poster with Play Button */
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                    {/* Poster Preview - simulated app interface */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="p-8 h-full flex flex-col">
                        <div className="bg-blue-500/20 rounded-lg h-12 mb-4"></div>
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div className="bg-[var(--clr-surface)]/10 rounded-lg"></div>
                          <div className="bg-[var(--clr-surface)]/10 rounded-lg"></div>
                        </div>
                        <div className="bg-green-500/20 rounded-lg h-16 mt-4"></div>
                      </div>
                    </div>
                    
                    {/* Play Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlayPause}
                      className="relative z-10 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all duration-300 group"
                    >
                      <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                    </motion.button>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      1:00
                    </div>
                  </div>
                ) : (
                  /* Video Player Interface - Lazy Loaded */
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                    {/* Simulated video content */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-90">
                      <div className="p-8 h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold mb-2">
                            {timelineSteps[getCurrentStep()]?.title || "Demo Video"}
                          </div>
                          <div className="text-slate-300">
                            {timelineSteps[getCurrentStep()]?.description || "Loading..."}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handlePlayPause}
                          className="text-white hover:bg-[var(--clr-surface)]/20"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleRestart}
                          className="text-white hover:bg-[var(--clr-surface)]/20"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                        
                        <div className="flex-1 mx-3">
                          <div className="relative h-1 bg-[var(--clr-surface)]/30 rounded-full cursor-pointer">
                            <div 
                              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-200"
                              style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                            <input
                              type="range"
                              min="0"
                              max={duration}
                              value={currentTime}
                              onChange={(e) => handleSeek(parseFloat(e.target.value))}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                        
                        <div className="text-white text-sm font-mono min-w-[80px]">
                          {Math.floor(currentTime)}s / {duration}s
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsMuted(!isMuted)}
                          className="text-white hover:bg-[var(--clr-surface)]/20"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </Button>
                        
                        <Badge className="bg-green-600/80 text-white text-xs px-2 py-1">
                          CC
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Timeline Bullets - Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Demo Timeline</h3>
            {timelineSteps.map((step, index) => {
              const isActive = getCurrentStep() === index;
              const isCompleted = currentTime > step.time + step.duration;
              
              return (
                <motion.div
                  key={index}
                  className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600/20 border-blue-500/50 shadow-lg' 
                      : isCompleted
                      ? 'bg-green-600/10 border-green-500/30'
                      : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleSeek(step.time)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isActive 
                        ? 'bg-blue-500 text-white' 
                        : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-600 text-slate-300'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-4 h-4" /> : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${
                        isActive ? 'text-blue-400' : isCompleted ? 'text-green-400' : 'text-white'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-slate-300 text-sm mt-1">
                        {step.description}
                      </div>
                      <div className="text-slate-500 text-xs mt-2">
                        {step.time}s - {step.time + step.duration}s ({step.duration}s)
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/get">
            <button className="btn btn-primary btn-lg">
              Start Your Free Trial
            </button>
          </a>
          <p className="text-slate-400 text-sm mt-3">
            No credit card required • 60-second setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}