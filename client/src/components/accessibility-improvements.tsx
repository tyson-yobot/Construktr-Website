// Accessibility utility components and hooks

import { useEffect, useRef } from "react";

// Enhanced button with proper ARIA attributes
export function AccessibleButton({ 
  children, 
  onClick, 
  className = "", 
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  ...props 
}: any) {
  return (
    <button
      onClick={onClick}
      className={`${className} focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-offset-2`}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      role="button"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </button>
  );
}

// Skip link component
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link absolute top-[-40px] left-4 bg-blue-600 text-white px-4 py-2 rounded focus:top-4 z-50 transition-all"
    >
      Skip to main content
    </a>
  );
}

// Focus trap for modals
export function useFocusTrap(ref: React.RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    element.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTab);
    };
  }, [isActive, ref]);
}

// Announce changes to screen readers
export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div');
  announcement.textContent = message;
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}