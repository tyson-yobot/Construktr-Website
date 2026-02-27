import { useEffect } from "react";

/**
 * Light Silver-Blue Brand Enforcer Component
 * Ensures consistent light silver/blue gradient theme across the app
 * Design: Modern SaaS / Apple-style light gradients with proper contrast
 */
export default function DarkBrandEnforcer() {
  useEffect(() => {
    // Apply light silver-blue theme
    document.documentElement.classList.add('light-brand-enforced');
    document.body.style.background = 'var(--gradient-page)';
    document.body.style.color = 'var(--color-text-primary)';
    document.body.style.minHeight = '100vh';
    
    return () => {
      document.documentElement.classList.remove('light-brand-enforced');
    };
  }, []);
  
  return null; // This component only enforces styles
}