import React, { useEffect } from 'react';

// Enhanced analytics for tracking user interactions and conversions
export function EnhancedAnalytics() {
  useEffect(() => {
    // Initialize enhanced tracking
    const initAnalytics = () => {
      // Track page views with additional context
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            custom_parameter_1: 'page_type',
            custom_parameter_2: 'user_type'
          }
        });
      }

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestone scroll depths
          if ([25, 50, 75, 90].includes(scrollPercent) && typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
            });
          }
        }
      };

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_engagement', {
            event_category: 'engagement',
            event_label: 'time_on_page',
            value: timeSpent
          });
        }
      };

      // Track feature interactions
      const trackFeatureClicks = () => {
        // ROI Calculator interactions
        const roiButtons = document.querySelectorAll('[data-analytics="roi-calculator"]');
        roiButtons.forEach(button => {
          button.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'roi_calculator_click', {
                event_category: 'conversion',
                event_label: 'roi_calculator_opened',
                value: 1
              });
            }
          });
        });

        // AI Assistant interactions
        const aiButtons = document.querySelectorAll('[data-analytics="ai-assistant"]');
        aiButtons.forEach(button => {
          button.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'ai_assistant_click', {
                event_category: 'engagement',
                event_label: 'ai_chat_opened',
                value: 1
              });
            }
          });
        });

        // Demo video interactions
        const demoButtons = document.querySelectorAll('[data-analytics="demo-video"]');
        demoButtons.forEach(button => {
          button.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'demo_video_play', {
                event_category: 'engagement',
                event_label: 'demo_started',
                value: 1
              });
            }
          });
        });

        // Download app interactions
        const downloadButtons = document.querySelectorAll('[data-analytics="app-download"]');
        downloadButtons.forEach(button => {
          button.addEventListener('click', () => {
            const platform = button.getAttribute('data-platform') || 'unknown';
            if (typeof gtag !== 'undefined') {
              gtag('event', 'app_download_click', {
                event_category: 'conversion',
                event_label: platform,
                value: 1
              });
            }
          });
        });

        // Feature showcase interactions
        const featureCards = document.querySelectorAll('[data-analytics="feature-card"]');
        featureCards.forEach(card => {
          card.addEventListener('click', () => {
            const featureName = card.getAttribute('data-feature') || 'unknown';
            if (typeof gtag !== 'undefined') {
              gtag('event', 'feature_explore', {
                event_category: 'engagement',
                event_label: featureName,
                value: 1
              });
            }
          });
        });
      };

      // Track form interactions
      const trackFormInteractions = () => {
        const forms = document.querySelectorAll('form[data-analytics]');
        forms.forEach(form => {
          const formName = form.getAttribute('data-analytics');
          
          // Track form start
          const inputs = form.querySelectorAll('input, textarea, select');
          inputs.forEach(input => {
            let hasStarted = false;
            input.addEventListener('focus', () => {
              if (!hasStarted && typeof gtag !== 'undefined') {
                hasStarted = true;
                gtag('event', 'form_start', {
                  event_category: 'conversion',
                  event_label: formName,
                  value: 1
                });
              }
            });
          });

          // Track form completion
          form.addEventListener('submit', () => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'form_submit', {
                event_category: 'conversion',
                event_label: formName,
                value: 1
              });
            }
          });
        });
      };

      // Track exit intent
      const trackExitIntent = () => {
        let hasTrackedExitIntent = false;
        document.addEventListener('mouseleave', (e) => {
          if (e.clientY <= 0 && !hasTrackedExitIntent) {
            hasTrackedExitIntent = true;
            if (typeof gtag !== 'undefined') {
              gtag('event', 'exit_intent', {
                event_category: 'engagement',
                event_label: 'mouse_leave_top',
                value: 1
              });
            }
          }
        });
      };

      // Track device and browser info
      const trackDeviceInfo = () => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const screenSize = `${window.screen.width}x${window.screen.height}`;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'device_info', {
            event_category: 'technical',
            event_label: isMobile ? 'mobile' : 'desktop',
            custom_parameter_screen_size: screenSize,
            value: 1
          });
        }
      };

      // Set up all tracking
      trackDeviceInfo();
      trackFeatureClicks();
      trackFormInteractions();
      trackExitIntent();
      
      window.addEventListener('scroll', trackScrollDepth);
      window.addEventListener('beforeunload', trackTimeOnPage);

      // Track page load performance
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_performance', {
            event_category: 'technical',
            event_label: 'page_load_time',
            value: Math.round(loadTime)
          });
        }
      });
    };

    // Initialize after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnalytics);
    } else {
      initAnalytics();
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('beforeunload', () => {});
    };
  }, []);

  return null; // This component doesn't render anything visible
}

// Hook for tracking specific events
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: parameters.category || 'custom',
        event_label: parameters.label || '',
        value: parameters.value || 1,
        ...parameters
      });
    }
  };

  const trackConversion = (action: string, value?: number) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        event_category: 'conversion',
        event_label: action,
        value: value || 1
      });
    }
  };

  const trackFeatureUsage = (featureName: string, action: string) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'feature_usage', {
        event_category: 'product',
        event_label: `${featureName}_${action}`,
        value: 1
      });
    }
  };

  return {
    trackEvent,
    trackConversion,
    trackFeatureUsage
  };
};

// HOC for automatic analytics tracking
export const withAnalytics = <P extends object>(
  Component: React.ComponentType<P>,
  eventName: string,
  category: string = 'component'
) => {
  return (props: P) => {
    const { trackEvent } = useAnalytics();
    
    useEffect(() => {
      trackEvent(`${eventName}_viewed`, {
        category,
        label: eventName
      });
    }, [trackEvent]);

    return <Component {...props} />;
  };
};