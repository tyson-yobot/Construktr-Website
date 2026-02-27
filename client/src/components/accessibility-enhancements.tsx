import { useEffect } from 'react';

export default function AccessibilityEnhancements() {
  useEffect(() => {
    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      // Add keyboard event handlers for custom interactive elements
      const interactiveElements = document.querySelectorAll(
        '[role="button"], [role="tab"], [role="menuitem"], .btn, .button, button'
      );
      
      interactiveElements.forEach(element => {
        const el = element as HTMLElement;
        
        // Ensure all interactive elements are focusable
        if (!el.hasAttribute('tabindex') && !el.matches('button, a, input, select, textarea')) {
          el.setAttribute('tabindex', '0');
        }
        
        // Add keyboard activation for role="button" elements
        if (el.getAttribute('role') === 'button' && !el.matches('button')) {
          el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              el.click();
            }
          });
        }
      });
    };

    // Focus trap for modals and dialogs
    const manageFocusTraps = () => {
      const modals = document.querySelectorAll('[role="dialog"], .modal, .popup');
      
      modals.forEach(modal => {
        if (!modal.hasAttribute('data-focus-trap-setup')) {
          modal.setAttribute('data-focus-trap-setup', 'true');
          
          const setupFocusTrap = () => {
            const focusableElements = modal.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length === 0) return;
            
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            // Focus first element when modal opens
            setTimeout(() => firstElement?.focus(), 100);
            
            // Trap focus within modal
            modal.addEventListener('keydown', (e) => {
              if (e.key === 'Tab') {
                if (e.shiftKey) {
                  // Shift + Tab
                  if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                  }
                } else {
                  // Tab
                  if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                  }
                }
              }
              
              // Close modal on Escape
              if (e.key === 'Escape') {
                const closeButton = modal.querySelector('[aria-label*="Close"], [aria-label*="close"], .close-button');
                if (closeButton) {
                  (closeButton as HTMLElement).click();
                }
              }
            });
          };
          
          // Set up focus trap when modal becomes visible
          const observer = new MutationObserver(() => {
            if (modal.checkVisibility?.() || getComputedStyle(modal as Element).display !== 'none') {
              setupFocusTrap();
            }
          });
          
          observer.observe(modal, { attributes: true, attributeFilter: ['style', 'class'] });
        }
      });
    };

    // Enhance video accessibility
    const enhanceVideoAccessibility = () => {
      const videos = document.querySelectorAll('video');
      
      videos.forEach(video => {
        // Ensure videos have proper ARIA labels
        if (!video.hasAttribute('aria-label') && !video.hasAttribute('aria-labelledby')) {
          video.setAttribute('aria-label', 'CONSTRUKTR application demonstration video');
        }
        
        // Add keyboard controls if custom controls are present
        if (!video.hasAttribute('controls')) {
          video.setAttribute('tabindex', '0');
          
          video.addEventListener('keydown', (e) => {
            switch (e.key) {
              case ' ':
              case 'k':
                e.preventDefault();
                video.paused ? video.play() : video.pause();
                break;
              case 'ArrowLeft':
                e.preventDefault();
                video.currentTime = Math.max(0, video.currentTime - 10);
                break;
              case 'ArrowRight':
                e.preventDefault();
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                break;
              case 'm':
                e.preventDefault();
                video.muted = !video.muted;
                break;
              case 'f':
                e.preventDefault();
                if (video.requestFullscreen) {
                  video.requestFullscreen();
                }
                break;
            }
          });
        }
      });
    };

    // Add screen reader announcements for dynamic content changes
    const enhanceScreenReaderSupport = () => {
      // Create live region for announcements
      if (!document.getElementById('sr-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'sr-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
      
      // Announce page transitions
      const announcePageChange = () => {
        const liveRegion = document.getElementById('sr-live-region');
        const pageTitle = document.title;
        if (liveRegion) {
          liveRegion.textContent = `Navigated to ${pageTitle}`;
        }
      };
      
      // Listen for route changes
      let currentPath = window.location.pathname;
      const checkForRouteChange = () => {
        if (window.location.pathname !== currentPath) {
          currentPath = window.location.pathname;
          announcePageChange();
        }
      };
      
      // Check for route changes periodically
      setInterval(checkForRouteChange, 1000);
    };

    // Check and fix color contrast issues
    const checkContrast = () => {
      // Add high contrast class to elements that might have contrast issues
      const potentialIssues = document.querySelectorAll(
        '.text-gray-500, .text-gray-400, .text-gray-600, .opacity-50, .opacity-60, .opacity-70'
      );
      
      potentialIssues.forEach(element => {
        element.classList.add('contrast-enhanced');
      });
    };

    // Add skip links for keyboard navigation
    const addSkipLinks = () => {
      if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
          position: absolute;
          top: -40px;
          left: 6px;
          background: var(--color-brand-600);
          color: white;
          padding: 8px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          z-index: 9999;
          transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
          skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
          skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    // Run all accessibility enhancements
    enhanceKeyboardNavigation();
    manageFocusTraps();
    enhanceVideoAccessibility();
    enhanceScreenReaderSupport();
    checkContrast();
    addSkipLinks();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceKeyboardNavigation();
      manageFocusTraps();
      enhanceVideoAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}