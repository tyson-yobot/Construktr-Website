import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send, Check, Smartphone } from "lucide-react";
import { trackCustomEvent } from "@/lib/analytics-events";

export default function SMSAppLink() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    setError("");
  };

  const handleSendSMS = async () => {
    const digits = phoneNumber.replace(/\D/g, '');
    
    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Track the SMS request
      trackCustomEvent('sms_app_link_requested', {
        phone_number_length: digits.length,
        location: 'hero'
      });

      // Here you would integrate with your SMS service (Twilio, etc.)
      // For now, we'll simulate the request
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setPhoneNumber("");
      }, 3000);

    } catch (err) {
      setError("Failed to send SMS. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendSMS();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="flex flex-col space-y-3 mt-6"
    >
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <Smartphone className="w-4 h-4" />
        <span>Text me the app</span>
      </div>
      
      <div className="flex gap-2 max-w-sm">
        <Input
          type="tel"
          placeholder="(555) 123-4567"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onKeyPress={handleKeyPress}
          className="bg-[var(--clr-surface)]/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
          disabled={isLoading || isSuccess}
        />
        
        <Button
          onClick={handleSendSMS}
          disabled={isLoading || isSuccess || phoneNumber.replace(/\D/g, '').length !== 10}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 min-w-[70px]"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
            />
          ) : isSuccess ? (
            <Check className="w-4 h-4" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </Button>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm"
        >
          {error}
        </motion.p>
      )}

      {isSuccess && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 text-sm"
        >
          App link sent! Check your messages.
        </motion.p>
      )}
    </motion.div>
  );
}