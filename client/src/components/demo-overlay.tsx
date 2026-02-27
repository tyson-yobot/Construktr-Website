import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowRight } from "lucide-react";

interface DemoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
    highlight?: string;
  }>;
  storageKey: string;
}

export default function DemoOverlay({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  steps, 
  storageKey 
}: DemoOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0);

  // Remember dismissal in localStorage
  const handleClose = () => {
    localStorage.setItem(storageKey, 'dismissed');
    onClose();
  };

  // Check if user has dismissed this overlay before
  useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    if (dismissed === 'dismissed') {
      onClose();
    }
  }, [storageKey, onClose]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Demo Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-[var(--clr-surface)] rounded-2xl shadow-2xl border border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="text-sm text-[var(--clr-text-2)]">
                      Step {currentStep + 1} of {steps.length}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-[var(--clr-text-2)]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">
                    {steps[currentStep].title}
                  </h4>
                  <p className="text-[var(--clr-text-2)] leading-relaxed">
                    {steps[currentStep].description}
                  </p>
                </div>

                {/* Highlight Box */}
                {steps[currentStep].highlight && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm font-medium">
                      💡 {steps[currentStep].highlight}
                    </p>
                  </div>
                )}

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mb-6">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={nextStep}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  {currentStep < steps.length - 1 ? (
                    <>
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    'Got it!'
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}