import { motion } from "framer-motion";
import { Clock, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface UrgencyBannerProps {
  variant?: "pricing" | "downloads" | "beta";
  position?: "top" | "inline";
}

export default function UrgencyBanner({ variant = "pricing", position = "top" }: UrgencyBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set end date to 30 days from now for demo purposes
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bannerConfig = {
    pricing: {
      icon: Clock,
      title: "Early Access Pricing Ends Soon",
      subtitle: "Lock in 50% off before prices increase",
      cta: "Get Early Access",
      bgClass: "bg-gradient-to-r from-red-600 to-red-500",
      textClass: "text-white"
    },
    downloads: {
      icon: Gift,
      title: "First 500 Downloads Get 3 Months Free",
      subtitle: "Limited time offer for early adopters",
      cta: "Download Free",
      bgClass: "bg-gradient-to-r from-green-600 to-green-500", 
      textClass: "text-white"
    },
    beta: {
      icon: Zap,
      title: "Beta Access Ending February 28th",
      subtitle: "Join before we go to paid plans",
      cta: "Join Beta",
      bgClass: "bg-gradient-to-r from-electric-blue to-blue-600",
      textClass: "text-white"
    }
  };

  const config = bannerConfig[variant];
  const IconComponent = config.icon;

  const handleCTAClick = () => {
    if (variant === "downloads" || variant === "beta") {
      const element = document.getElementById('MobileApp');
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const element = document.getElementById('pricing');
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (position === "top") {
    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`${config.bgClass} ${config.textClass} py-3 px-4 relative overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
            <div className="flex items-center space-x-3 mb-2 sm:mb-0">
              <IconComponent className="w-5 h-5 flex-shrink-0" />
              <div>
                <span className="font-bold text-sm sm:text-base">
                  {config.title}
                </span>
                <span className="hidden sm:inline ml-2 text-sm opacity-90">
                  {config.subtitle}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Countdown Timer */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="bg-[var(--clr-surface)]/20 px-2 py-1 rounded">
                  <span className="font-bold">{timeLeft.days}d</span>
                </div>
                <div className="bg-[var(--clr-surface)]/20 px-2 py-1 rounded">
                  <span className="font-bold">{timeLeft.hours}h</span>
                </div>
                <div className="bg-[var(--clr-surface)]/20 px-2 py-1 rounded">
                  <span className="font-bold">{timeLeft.minutes}m</span>
                </div>
              </div>

              <Button
                onClick={handleCTAClick}
                variant="secondary"
                className="bg-[var(--clr-surface)] text-white hover:bg-gray-100 font-bold text-sm px-4 py-2 h-auto"
              >
                {config.cta}
              </Button>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--clr-surface)] rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[var(--clr-surface)] rounded-full translate-x-12 translate-y-12 animate-pulse delay-1000"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${config.bgClass} ${config.textClass} rounded-2xl p-6 mb-8 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-12 h-12 bg-[var(--clr-surface)]/20 rounded-full flex items-center justify-center">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">
                {config.title}
              </h3>
              <p className="text-sm opacity-90">
                {config.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Countdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Ends in:</span>
              <div className="flex space-x-1">
                <div className="bg-[var(--clr-surface)]/20 px-2 py-1 rounded text-sm font-bold">
                  {timeLeft.days}d
                </div>
                <div className="bg-[var(--clr-surface)]/20 px-2 py-1 rounded text-sm font-bold">
                  {timeLeft.hours}h
                </div>
                <div className="bg-[var(--clr-surface)]/20 px-2 py-1 rounded text-sm font-bold">
                  {timeLeft.minutes}m
                </div>
              </div>
            </div>

            <Button
              onClick={handleCTAClick}
              variant="secondary"
              className="bg-[var(--clr-surface)] text-white hover:bg-gray-100 font-bold px-6 py-3"
            >
              {config.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--clr-surface)] rounded-full translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--clr-surface)] rounded-full -translate-x-16 translate-y-16"></div>
      </div>
    </motion.div>
  );
}