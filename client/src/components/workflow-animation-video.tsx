import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, Phone, Calendar, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: typeof Phone;
  color: string;
  bgColor: string;
  delay: number;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: "quote",
    title: "Create Quote",
    description: "AI generates professional estimate",
    icon: Phone,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    delay: 0
  },
  {
    id: "schedule",
    title: "Schedule Job",
    description: "Smart calendar integration",
    icon: Calendar,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    delay: 3
  },
  {
    id: "complete",
    title: "Complete Work",
    description: "Track progress in real-time",
    icon: CheckCircle,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    delay: 6
  },
  {
    id: "payment",
    title: "Get Paid",
    description: "Instant payment processing",
    icon: DollarSign,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    delay: 9
  }
];

interface WorkflowAnimationVideoProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  duration?: number;
}

export default function WorkflowAnimationVideo({ isPlaying, onPlayPause, duration = 12 }: WorkflowAnimationVideoProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSteps, setActiveSteps] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          if (newTime >= duration) {
            setActiveSteps([]);
            return 0;
          }
          
          // Determine which steps should be active
          const active = workflowSteps
            .filter(step => newTime >= step.delay && newTime < step.delay + 3)
            .map(step => step.id);
          setActiveSteps(active);
          
          return newTime;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const progressPercent = (currentTime / duration) * 100;

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-lg overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Main Workflow Display */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          {workflowSteps.map((step, index) => {
            const isActive = activeSteps.includes(step.id);
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1.1 : 0.9,
                  y: isActive ? -10 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`
                  relative p-6 rounded-xl border border-white/10 backdrop-blur-sm
                  ${isActive ? step.bgColor : 'bg-[var(--clr-surface)]/5'}
                  ${isActive ? 'ring-2 ring-white/30' : ''}
                `}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[var(--clr-surface)] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{index + 1}</span>
                </div>

                {/* Icon */}
                <motion.div
                  animate={isActive ? {
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                  className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${step.color}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>

                {/* Active Indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 bg-[var(--clr-surface)] rounded-full"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Connection Lines Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.5)" />
            </linearGradient>
          </defs>
          
          {/* Animated connection lines */}
          <motion.path
            d="M 25% 40% Q 50% 20% 75% 40%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            animate={{
              strokeDashoffset: [0, -50]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.path
            d="M 75% 40% Q 50% 80% 25% 60%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            animate={{
              strokeDashoffset: [0, -50]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </svg>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="w-full bg-[var(--clr-surface)]/20 rounded-full h-1 mb-3">
          <motion.div
            className="bg-[var(--clr-surface)] rounded-full h-1"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPlayPause}
            className="text-white hover:bg-[var(--clr-surface)]/20 p-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          <div className="text-white/70 text-sm">
            Contractor Workflow Demo
          </div>
        </div>
      </div>
    </div>
  );
}