import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, CheckCircle, Calculator, Navigation, CreditCard } from "lucide-react";
import StandardizedPhoneMockup from "./standardized-phone-mockup";
import { Button } from "@/components/ui/button";
import appImageQuotes from "/screens/dashboard-home.png";
import appImageScheduling from "/screens/schedule-calendar.png";
import appImagePayments from "/screens/payment-invoice.png";
import demoData from "../../../content/demo.json";

const demoIcons = {
  quoting: Calculator,
  scheduling: Navigation,
  payments: CreditCard
} as const;

const demoImages = {
  quoting: appImageQuotes,
  scheduling: appImageScheduling,
  payments: appImagePayments
} as const;

// Videos are now included in demo.json data

export default function TabbedDemo() {
  const [activeTab, setActiveTab] = useState(demoData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-play demo animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2; // 5 second demo
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTabSelect = (demo: typeof demoData[0]) => {
    setActiveTab(demo);
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setProgress(0);
  };

  const handleReplay = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  const IconComponent = demoIcons[activeTab.id as keyof typeof demoIcons];
  const currentTabIndex = demoData.findIndex(demo => demo.id === activeTab.id);

  return (
    <section id="see-in-action" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-6">
            See CONSTRUKTR in Action
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Watch real contractors use our app to quote, schedule, and get paid faster than ever.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div 
            className="flex bg-[var(--clr-surface-2)] rounded-xl p-2 gap-2"
            role="tablist"
            aria-label="Demo sections"
          >
            {demoData.map((demo, index) => {
              const TabIcon = demoIcons[demo.id as keyof typeof demoIcons];
              return (
                <button
                  key={demo.id}
                  onClick={() => handleTabSelect(demo)}
                  id={`demo-tab-${demo.id}`}
                  aria-label={`${demo.title} demo`}
                  aria-selected={activeTab.id === demo.id}
                  aria-controls={`demo-tabpanel-${demo.id}`}
                  role="tab"
                  tabIndex={activeTab.id === demo.id ? 0 : -1}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      const currentIndex = demoData.findIndex(d => d.id === demo.id);
                      const nextIndex = e.key === 'ArrowLeft' 
                        ? (currentIndex - 1 + demoData.length) % demoData.length
                        : (currentIndex + 1) % demoData.length;
                      handleTabSelect(demoData[nextIndex]);
                    }
                  }}
                  className={`
                    flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 keyboard-focus-visible
                    ${activeTab.id === demo.id
                      ? 'bg-[var(--clr-brand-500)] text-white shadow-lg'
                      : 'text-[var(--clr-text-2)] hover:text-white hover:bg-[var(--clr-surface-3)]'
                    }
                  `}
                >
                  <TabIcon className="w-5 h-5" aria-hidden="true" />
                  {demo.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-[var(--clr-text-2)] text-sm font-medium">
            {currentTabIndex + 1} / {demoData.length}
          </span>
          <div className="w-32 h-2 bg-[var(--clr-surface-2)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--clr-brand-500)]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentTabIndex + 1) / demoData.length * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          role="tabpanel"
          id={`demo-tabpanel-${activeTab.id}`}
          aria-labelledby={`demo-tab-${activeTab.id}`}
        >
          
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Demo Header */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-xl flex items-center justify-center" aria-hidden="true">
                  <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
                    {activeTab.title} Demo
                  </h3>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-4">
                {activeTab.bullets.map((bullet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-[var(--clr-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-[var(--clr-text)] leading-relaxed">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Demo Controls */}
              <div className="flex items-center gap-4">
                {!isPlaying && progress === 0 ? (
                  <Button 
                    onClick={handlePlay}
                    className="btn btn-primary flex items-center gap-2 keyboard-focus-visible"
                    aria-label={`Play ${activeTab.title} demo video`}
                  >
                    <Play className="w-5 h-5" aria-hidden="true" />
                    Watch Demo
                  </Button>
                ) : (
                  <Button 
                    onClick={handleReplay}
                    className="btn btn-ghost flex items-center gap-2 keyboard-focus-visible"
                    aria-label={`Replay ${activeTab.title} demo from beginning`}
                  >
                    <RotateCcw className="w-5 h-5" aria-hidden="true" />
                    Replay
                  </Button>
                )}
                
                {/* Demo Progress */}
                {(isPlaying || progress > 0) && (
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-[var(--clr-surface-2)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[var(--clr-brand-500)]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-[var(--clr-text-2)]">
                      {Math.round(progress)}%
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Phone Mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Video/Image Content */}
              <div className="relative w-[420px] h-[560px] bg-slate-800 rounded-[2rem] p-3 mx-auto">
                <div className="relative w-full h-full bg-[var(--clr-bg)] rounded-[1.5rem] overflow-hidden">
                  {activeTab.video && isPlaying ? (
                    <video
                      src={activeTab.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={`${activeTab.title} demonstration video`}
                      role="img"
                      onError={() => {
                        console.warn(`Video failed to load: ${activeTab.video}`);
                      }}
                    >
                      <track
                        kind="captions"
                        src={`/captions/${activeTab.id}.vtt`}
                        srcLang="en"
                        label="English captions"
                        default
                      />
                      <p className="sr-only">
                        Video showing {activeTab.title} workflow in the CONSTRUKTR app. 
                        This demonstrates: {activeTab.bullets.join(', ')}.
                      </p>
                    </video>
                  ) : (
                    <img
                      src={demoImages[activeTab.id as keyof typeof demoImages]}
                      alt={`CONSTRUKTR app - ${activeTab.title} demo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  
                  {/* Real App Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--clr-primary)] text-black text-xs font-semibold px-2 py-1 rounded-full">
                    Real App
                  </div>
                </div>
                
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>
              
              {/* Play Overlay */}
              {!isPlaying && progress === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Button
                    onClick={handlePlay}
                    size="lg"
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full p-4 keyboard-focus-visible"
                    aria-label={`Play ${activeTab.title} demo video overlay`}
                  >
                    <Play className="w-8 h-8" aria-hidden="true" />
                    <span className="sr-only">Play demo</span>
                  </Button>
                </motion.div>
              )}
              
              {/* Demo Complete Indicator */}
              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2"
                >
                  <CheckCircle className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only">Demo completed</span>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Benefit Tagline Below Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)]">
            30-Second Quotes <span className="text-[var(--color-text-tertiary)]">•</span> Same-Day Payments <span className="text-[var(--color-text-tertiary)]">•</span> Weather-Aware Scheduling
          </p>
        </motion.div>
      </div>
    </section>
  );
}