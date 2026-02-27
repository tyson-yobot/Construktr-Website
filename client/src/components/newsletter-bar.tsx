import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsletterBarProps {
  className?: string;
  onClose?: () => void;
  showClose?: boolean;
}

export default function NewsletterBar({ 
  className = "", 
  onClose, 
  showClose = false 
}: NewsletterBarProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'website-newsletter',
          doubleOptIn: true
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        
        // Track newsletter signup
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'newsletter_signup', {
            'event_category': 'engagement',
            'event_label': 'newsletter_bar',
            'value': 1
          });
        }

        toast({
          title: "Check your email!",
          description: "We've sent you a confirmation link to complete your subscription.",
          duration: 6000
        });

        // Reset success state after animation
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-gradient-to-r from-green-600 to-emerald-600 text-white ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-100" />
            <div className="text-center">
              <p className="font-semibold">Successfully subscribed!</p>
              <p className="text-sm text-green-100">Check your email to confirm your subscription.</p>
            </div>
            {showClose && onClose && (
              <button
                onClick={onClose}
                className="ml-4 p-1 hover:bg-green-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Content */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Mail className="w-7 h-7 text-white flex-shrink-0" />
            <div>
              <h3 className="font-extrabold text-xl text-white">Stay Updated</h3>
              <p className="text-white/95 text-sm font-medium mt-1">
                Join 15,000+ contractors getting actionable advice delivered to their inbox.
              </p>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:border-white min-w-[280px]"
              disabled={isSubmitting}
              required
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--color-primary)] text-white font-bold hover:bg-[var(--color-primary-hover)] px-6 whitespace-nowrap shadow-lg"
              data-testid="button-subscribe"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          {/* Close Button */}
          {showClose && onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Enhanced Trust/Privacy Indicators */}
        <div className="mt-4 text-center sm:text-left">
          <p className="text-sm text-white/90 font-medium">
            🔒 We never spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}