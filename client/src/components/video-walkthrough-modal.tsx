import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Play, X, Volume2, VolumeX, Maximize2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoWalkthroughModal({ isOpen, onClose }: VideoWalkthroughModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoDuration = 60; // 60 seconds

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Simulate video progress
  const progressPercentage = (currentTime / videoDuration) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-black border-slate-700">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 text-white hover:bg-[var(--clr-surface)]/10 rounded-full w-8 h-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Video Header */}
          <div className="p-6 pb-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white mb-2">
                🚀 CONSTRUKTR Walkthrough (60 seconds)
              </DialogTitle>
              <DialogDescription className="text-slate-300">
                See exactly how contractors use CONSTRUKTR to quote faster, schedule smarter, and get paid instantly.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Video Container */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 mx-6 rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              {/* Video Thumbnail/Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-12 h-12 text-white ml-2" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Watch the Complete Demo
                  </h3>
                  <p className="text-slate-300 text-sm">
                    From first quote to final payment in 60 seconds
                  </p>
                </div>
              </div>

              {/* Play overlay when not playing */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
                    onClick={handlePlayPause}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="w-full bg-[var(--clr-surface)]/20 rounded-full h-1">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePlayPause}
                      className="text-white hover:bg-[var(--clr-surface)]/10 p-2"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleRestart}
                      className="text-white hover:bg-[var(--clr-surface)]/10 p-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleMuteToggle}
                      className="text-white hover:bg-[var(--clr-surface)]/10 p-2"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(videoDuration)}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-[var(--clr-surface)]/10 p-2"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Key Features Highlighted */}
            <div className="p-6 border-t border-slate-700">
              <h4 className="text-white font-semibold mb-3">You'll see in this demo:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI Quote Generation (0:10)</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Smart Scheduling (0:25)</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Instant Invoicing (0:40)</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Payment Processing (0:55)</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-6 pt-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-6 py-3 rounded-xl">
                Book a Demo
              </Button>
            </div>
            <p className="text-center text-slate-400 text-sm mt-3">
              No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}