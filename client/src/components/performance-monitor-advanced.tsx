import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

interface ResourceMetrics {
  totalSize: number;
  imageSize: number;
  jsSize: number;
  cssSize: number;
  resourceCount: number;
}

export function PerformanceMonitorAdvanced() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resources, setResources] = useState<ResourceMetrics | null>(null);
  const [showDebugInfo, setShowDebugInfo] = useState(false);

  useEffect(() => {
    // Only show debug info in development
    setShowDebugInfo(process.env.NODE_ENV === 'development');

    const measurePerformance = () => {
      if ('performance' in window) {
        // Core Web Vitals measurement
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          
          entries.forEach((entry) => {
            // Log performance data for analysis
            if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => prev ? { ...prev, firstContentfulPaint: entry.startTime } : null);
              }
            }

            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => prev ? { ...prev, largestContentfulPaint: entry.startTime } : null);
            }

            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              setMetrics(prev => prev ? { 
                ...prev, 
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value 
              } : null);
            }

            if (entry.entryType === 'first-input') {
              setMetrics(prev => prev ? { 
                ...prev, 
                firstInputDelay: (entry as any).processingStart - entry.startTime 
              } : null);
            }
          });
        });

        // Observe different performance entry types
        try {
          observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });
        } catch (e) {
          console.warn('Performance Observer not fully supported');
        }

        // Measure basic metrics
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const loadTime = navigation.loadEventEnd - navigation.navigationStart;
            const timeToInteractive = navigation.domInteractive - navigation.navigationStart;

            setMetrics({
              loadTime,
              firstContentfulPaint: 0,
              largestContentfulPaint: 0,
              cumulativeLayoutShift: 0,
              firstInputDelay: 0,
              timeToInteractive,
              totalBlockingTime: 0
            });

            // Measure resource usage
            const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
            let totalSize = 0;
            let imageSize = 0;
            let jsSize = 0;
            let cssSize = 0;

            resources.forEach(resource => {
              const size = resource.transferSize || 0;
              totalSize += size;

              if (resource.name.includes('.js')) {
                jsSize += size;
              } else if (resource.name.includes('.css')) {
                cssSize += size;
              } else if (resource.name.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
                imageSize += size;
              }
            });

            setResources({
              totalSize,
              imageSize,
              jsSize,
              cssSize,
              resourceCount: resources.length
            });

            // Send performance data to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'page_performance', {
                event_category: 'performance',
                load_time: Math.round(loadTime),
                time_to_interactive: Math.round(timeToInteractive),
                resource_count: resources.length,
                total_size_kb: Math.round(totalSize / 1024)
              });
            }
          }, 1000);
        });

        return () => {
          observer.disconnect();
        };
      }
    };

    measurePerformance();
  }, []);

  // Performance scoring
  const getPerformanceGrade = () => {
    if (!metrics) return { grade: 'Loading...', color: 'gray' };

    let score = 100;
    
    // Deduct points for slow metrics
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1800) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    if (metrics.firstInputDelay > 100) score -= 15;
    if (metrics.timeToInteractive > 3800) score -= 15;

    if (score >= 90) return { grade: 'A+', color: 'green' };
    if (score >= 80) return { grade: 'A', color: 'green' };
    if (score >= 70) return { grade: 'B', color: 'yellow' };
    if (score >= 60) return { grade: 'C', color: 'orange' };
    return { grade: 'D', color: 'red' };
  };

  // Resource optimization suggestions
  const getOptimizationSuggestions = () => {
    if (!resources) return [];

    const suggestions = [];

    if (resources.imageSize > 500000) {
      suggestions.push('Optimize images: Consider WebP format and compression');
    }
    if (resources.jsSize > 300000) {
      suggestions.push('Reduce JavaScript bundle size: Code splitting recommended');
    }
    if (resources.cssSize > 100000) {
      suggestions.push('Minify CSS: Remove unused styles');
    }
    if (resources.resourceCount > 50) {
      suggestions.push('Too many resources: Consider bundling or lazy loading');
    }
    if (resources.totalSize > 1000000) {
      suggestions.push('Large page size: Enable gzip compression');
    }

    return suggestions;
  };

  const performanceGrade = getPerformanceGrade();
  const suggestions = getOptimizationSuggestions();

  if (!showDebugInfo) {
    // Production: Only show critical performance issues
    if (metrics && metrics.loadTime > 5000) {
      return (
        <div className="fixed bottom-4 left-4 z-50">
          <Badge variant="destructive" className="bg-red-500 text-white">
            Slow loading detected
          </Badge>
        </div>
      );
    }
    return null;
  }

  // Development: Show detailed performance info
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-4">
        
        {/* Performance Grade */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Performance</span>
          <Badge 
            className={`
              ${performanceGrade.color === 'green' ? 'bg-green-100 text-green-800 border-green-200' : ''}
              ${performanceGrade.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : ''}
              ${performanceGrade.color === 'orange' ? 'bg-orange-100 text-orange-800 border-orange-200' : ''}
              ${performanceGrade.color === 'red' ? 'bg-red-100 text-red-800 border-red-200' : ''}
            `}
            variant="outline"
          >
            {performanceGrade.grade}
          </Badge>
        </div>

        {/* Core Metrics */}
        {metrics && (
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-gray-600">Load Time</span>
                <div className="font-medium">{Math.round(metrics.loadTime)}ms</div>
              </div>
              <div>
                <span className="text-gray-600">FCP</span>
                <div className="font-medium">{Math.round(metrics.firstContentfulPaint)}ms</div>
              </div>
              <div>
                <span className="text-gray-600">LCP</span>
                <div className="font-medium">{Math.round(metrics.largestContentfulPaint)}ms</div>
              </div>
              <div>
                <span className="text-gray-600">CLS</span>
                <div className="font-medium">{metrics.cumulativeLayoutShift.toFixed(3)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Resource Usage */}
        {resources && (
          <div className="space-y-2 text-xs">
            <div className="text-gray-600 font-medium">Resources</div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Total Size</span>
                <span className="font-medium">{Math.round(resources.totalSize / 1024)}KB</span>
              </div>
              <div className="flex justify-between">
                <span>Images</span>
                <span className="font-medium">{Math.round(resources.imageSize / 1024)}KB</span>
              </div>
              <div className="flex justify-between">
                <span>JavaScript</span>
                <span className="font-medium">{Math.round(resources.jsSize / 1024)}KB</span>
              </div>
              <div className="flex justify-between">
                <span>CSS</span>
                <span className="font-medium">{Math.round(resources.cssSize / 1024)}KB</span>
              </div>
              <div className="flex justify-between">
                <span>Requests</span>
                <span className="font-medium">{resources.resourceCount}</span>
              </div>
            </div>
          </div>
        )}

        {/* Optimization Suggestions */}
        {suggestions.length > 0 && (
          <div className="space-y-2 text-xs">
            <div className="text-gray-600 font-medium">Suggestions</div>
            <ul className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-600 text-xs">
                  • {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Details */}
        <details className="text-xs">
          <summary className="cursor-pointer text-gray-600 font-medium">
            Technical Details
          </summary>
          <div className="mt-2 space-y-1 text-gray-500">
            <div>User Agent: {navigator.userAgent.substring(0, 40)}...</div>
            <div>Screen: {window.screen.width}×{window.screen.height}</div>
            <div>Viewport: {window.innerWidth}×{window.innerHeight}</div>
            <div>Connection: {(navigator as any).connection?.effectiveType || 'Unknown'}</div>
            <div>Memory: {(performance as any).memory ? 
              `${Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)}MB used` : 
              'Not available'
            }</div>
          </div>
        </details>
      </div>
    </div>
  );
}