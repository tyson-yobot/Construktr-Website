import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Lightbulb } from "lucide-react";

interface MiniTourProps {
  targetRef?: React.RefObject<HTMLElement>;
  steps: Array<{
    title: string;
    description: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
  }>;
  storageKey: string;
  autoShow?: boolean;
}

export default function MiniTour({ 
  targetRef, 
  steps, 
  storageKey, 
  autoShow = true 
}: MiniTourProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasShown, setHasShown] = useState(false);

  // Check if tour should be shown on first visit
  useEffect(() => {
    const hasSeenTour = localStorage.getItem(storageKey);
    if (!hasSeenTour && autoShow && !hasShown) {
      // Show tour after a brief delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [storageKey, autoShow, hasShown]);

  const closeTour = () => {
    localStorage.setItem(storageKey, 'seen');
    setIsVisible(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      closeTour();
    }
  };

  const skipTour = () => {
    localStorage.setItem(storageKey, 'seen');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 z-40 w-80"
      >
        <div className="bg-[var(--clr-surface)] rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold">Quick Tour</span>
              </div>
              <button
                onClick={closeTour}
                className="w-6 h-6 rounded-full hover:bg-[var(--clr-surface)]/20 flex items-center justify-center transition-colors"
                aria-label="Close tour"
                type="button"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-1 text-blue-100 text-sm">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h4 className="font-semibold text-white mb-2">
              {steps[currentStep].title}
            </h4>
            <p className="text-[var(--clr-text-2)] text-sm leading-relaxed mb-4">
              {steps[currentStep].description}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length} aria-label={`Tour progress: step ${currentStep + 1} of ${steps.length}`}>
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={skipTour}
                className="flex-1 text-[var(--clr-text-2)] text-sm py-2 px-3 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Skip guided tour"
                type="button"
              >
                Skip
              </button>
              <button
                onClick={nextStep}
                className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                aria-label={currentStep < steps.length - 1 ? "Next step in tour" : "Finish tour"}
                type="button"
              >
                {currentStep < steps.length - 1 ? (
                  <>
                    Next
                    <ArrowRight className="w-3 h-3" />
                  </>
                ) : (
                  'Finish'
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}