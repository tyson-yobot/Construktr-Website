import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DeviceMockupProps {
  children: React.ReactNode;
  className?: string;
  type?: 'phone' | 'tablet';
  floating?: boolean;
}

export default function DeviceMockup({ 
  children, 
  className, 
  type = 'phone',
  floating = false 
}: DeviceMockupProps) {
  const phoneStyles = {
    width: '320px',
    height: '640px',
    borderRadius: '2.5rem',
    padding: '1.5rem 1rem'
  };
  
  const tabletStyles = {
    width: '420px', 
    height: '560px',
    borderRadius: '2rem',
    padding: '1.5rem'
  };
  
  const styles = type === 'phone' ? phoneStyles : tabletStyles;

  return (
    <motion.div
      className={cn(
        'device-mockup relative',
        floating && 'float-animation',
        className
      )}
      style={styles}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Home indicator for phone */}
      {type === 'phone' && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full flex items-center justify-center">
          <div className="w-12 h-1 bg-white/30 rounded-full" />
        </div>
      )}
      
      {/* Screen content */}
      <div className="device-screen h-full w-full p-4">
        {children}
      </div>
      
      {/* Home indicator for phone */}
      {type === 'phone' && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
      )}
    </motion.div>
  );
}