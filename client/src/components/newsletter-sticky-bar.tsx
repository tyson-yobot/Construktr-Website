import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewsletterBar from './newsletter-bar';

export default function NewsletterStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of the page
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;
      
      // Show newsletter bar at 50% scroll
      if (scrollPercent >= 50 && !isDismissed) {
        setIsVisible(true);
      }
    };

    // Check if user has already dismissed newsletter this session
    const sessionDismissed = sessionStorage.getItem('newsletter-dismissed');
    if (sessionDismissed) {
      setIsDismissed(true);
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleClose = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Remember dismissal for this session
    sessionStorage.setItem('newsletter-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      >
        <NewsletterBar 
          showClose={true}
          onClose={handleClose}
        />
      </motion.div>
    </AnimatePresence>
  );
}