import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, CheckCircle, Calendar } from 'lucide-react';
import StandardizedPhoneMockup from './standardized-phone-mockup';
import { Button } from '@/components/ui/button';
import appScreenshotImage from '/screens/dashboard.png';

const videoTimelineSteps = [
  {
    step: 1,
    title: "Quote",
    description: "AI generates accurate quotes in 30 seconds",
    icon: "💡",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: 2,
    title: "Schedule",
    description: "Smart calendar prevents double-booking",
    icon: "📅",
    color: "from-green-500 to-emerald-500"
  },
  {
    step: 3,
    title: "Invoice",
    description: "Professional invoices sent automatically",
    icon: "📄",
    color: "from-purple-500 to-pink-500"
  },
  {
    step: 4,
    title: "Payment",
    description: "Get paid 3x faster with instant processing",
    icon: "💳",
    color: "from-orange-500 to-red-500"
  }
];

export default function VideoDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!showVideo) {
      setShowVideo(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    } else {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-demo" className="section-spacing bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center section-content-spacing"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See CONSTRUKTR™ in Action
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            Watch how contractors transform their business in just 45 seconds. From quote to payment, 
            see the complete workflow that's saving contractors 8 hours per week.
          </p>
        </motion.div>

        {/* Video Demo Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Device Frame with Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {!showVideo ? (
                <div className="relative">
                  <StandardizedPhoneMockup
                    src={appScreenshotImage}
                    alt="CONSTRUKTR app video demo - AI quotes to payment workflow"
                    size="desktop"
                    withGlow={true}
                  />
                  
                  {/* Play Button Overlay */}
                  <motion.button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[2.5rem] backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center shadow-2xl group-hover:bg-electric-blue/90 transition-colors duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </motion.button>
                  
                  {/* Video Duration Badge */}
                  <div className="absolute top-6 right-6 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                    45 sec
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <StandardizedPhoneMockup
                    src=""
                    alt="CONSTRUKTR app video demo"
                    size="desktop"
                    withGlow={true}
                    customContent={
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted={isMuted}
                        controls={false}
                        onEnded={() => setIsPlaying(false)}
                        poster={appScreenshotImage}
                        preload="metadata"
                      >
                        <source src="/demo-video.mp4" type="video/mp4" />
                        <track
                          kind="captions"
                          src="/demo-captions.vtt"
                          srcLang="en"
                          label="English"
                          default
                        />
                        Your browser does not support the video tag.
                      </video>
                    }
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
                    <button
                      onClick={handlePlay}
                      className="text-white hover:text-electric-blue transition-colors duration-200"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-electric-blue transition-colors duration-200"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Captions Indicator */}
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                    CC ON
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Video Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Complete Workflow Demo
              </h3>
              <p className="text-[var(--clr-text-2)] mb-8">
                Follow along as we demonstrate the entire contractor workflow from initial quote to final payment.
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-4">
              {videoTimelineSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                    currentStep >= index 
                      ? 'border-electric-blue bg-electric-blue/5' 
                      : 'border-gray-200 bg-[var(--clr-surface)] hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    currentStep >= index
                      ? 'bg-electric-blue text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {currentStep > index ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span>{step.icon}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{step.title}</h4>
                    <p className="text-sm text-[var(--clr-text-2)]">{step.description}</p>
                  </div>
                  <div className={`text-sm font-bold px-2 py-1 rounded ${
                    currentStep >= index
                      ? 'bg-electric-blue text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {step.step}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-primary btn-lg"
                  onClick={() => {
                    const demoSection = document.getElementById('demo-form');
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Demo
                </Button>
                <Button 
                  variant="outline"
                  className="btn-lg"
                  asChild
                >
                  <a href="/get" className="inline-flex items-center gap-2">
                    Start Free Trial
                    <Play className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center sm:text-left">
                No credit card required • Setup in 5 minutes
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}