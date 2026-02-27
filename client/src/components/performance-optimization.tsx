import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy components for better performance
const LazyVideoDemo = lazy(() => import('./video-demo-section'));
const LazyConversionOptimization = lazy(() => import('./conversion-optimization'));

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

// Performance optimized component wrapper
export const OptimizedSection = ({ 
  children, 
  className = "",
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.section
    className={`will-change-transform ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    {...props}
  >
    {children}
  </motion.section>
);

// Optimized video component with lazy loading
export const LazyVideoSection = () => (
  <Suspense fallback={<LoadingSkeleton />}>
    <LazyVideoDemo />
  </Suspense>
);

// Optimized conversion section
export const LazyConversionSection = () => (
  <Suspense fallback={<LoadingSkeleton />}>
    <LazyConversionOptimization />
  </Suspense>
);

export default function PerformanceOptimization() {
  return null; // This is a utility component
}