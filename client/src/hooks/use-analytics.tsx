import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView, analytics } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      trackPageView(location);
      prevLocationRef.current = location;
    }
  }, [location]);
};

// Hook for tracking scroll depth
export const useScrollTracking = () => {
  const milestones = useRef(new Set<string>());
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50 && !milestones.current.has('scroll_50')) {
        milestones.current.add('scroll_50');
        analytics.trackEngagementMilestone('scroll_50');
      }
      
      if (scrollPercent >= 75 && !milestones.current.has('scroll_75')) {
        milestones.current.add('scroll_75');
        analytics.trackEngagementMilestone('scroll_75');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook for tracking time on page
export const useTimeTracking = () => {
  const milestones = useRef(new Set<string>());
  
  useEffect(() => {
    const startTime = Date.now();
    
    const timeouts = [
      setTimeout(() => {
        if (!milestones.current.has('time_30s')) {
          milestones.current.add('time_30s');
          analytics.trackEngagementMilestone('time_30s');
        }
      }, 30000),
      
      setTimeout(() => {
        if (!milestones.current.has('time_60s')) {
          milestones.current.add('time_60s');
          analytics.trackEngagementMilestone('time_60s');
        }
      }, 60000),
      
      setTimeout(() => {
        if (!milestones.current.has('time_120s')) {
          milestones.current.add('time_120s');
          analytics.trackEngagementMilestone('time_120s');
        }
      }, 120000)
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);
};