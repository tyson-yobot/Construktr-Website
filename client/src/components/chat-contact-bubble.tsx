import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, X, ExternalLink } from "lucide-react";

export default function ChatContactBubble() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "Live Chat",
      description: "Get instant answers",
      action: () => {
        // In a real app, this would open a chat widget
        window.open('mailto:support@construktr.com?subject=Live Chat Request', '_blank');
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Call Sales",
      description: "(555) 123-CONS",
      action: () => {
        window.open('tel:+15551234267', '_self');
      },
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      label: "Email Support",
      description: "support@construktr.com",
      action: () => {
        window.open('mailto:support@construktr.com?subject=Support Request', '_blank');
      },
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={option.action}
                  className="flex items-center space-x-3 bg-[var(--clr-surface)] rounded-full shadow-lg border border-gray-200 p-3 hover:shadow-xl transition-all duration-300 group w-full"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white text-sm">
                      {option.label}
                    </div>
                    <div className="text-[var(--clr-text-2)] text-xs">
                      {option.description}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[var(--clr-text-2)]" />
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          boxShadow: isOpen 
            ? "0 10px 40px rgba(0,0,0,0.3)" 
            : "0 10px 40px rgba(59, 130, 246, 0.4)"
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulse Effect */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
}