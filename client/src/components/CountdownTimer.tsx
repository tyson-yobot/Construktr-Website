import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  resetHours?: number; // How many hours until reset (default: 24)
  className?: string;
  compact?: boolean; // Show compact version for mobile
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export default function CountdownTimer({ 
  resetHours = 24,
  className = "",
  compact = false
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0
  });
  const [endTime, setEndTime] = useState<number>(0);

  // Initialize end time on mount
  useEffect(() => {
    const getEndTime = (): number => {
      const stored = localStorage.getItem('promo_countdown_end');
      if (stored) {
        const storedEndTime = parseInt(stored, 10);
        // If the stored time is in the future, use it
        if (storedEndTime > Date.now()) {
          return storedEndTime;
        }
      }
      // Otherwise, create a new end time
      const newEndTime = Date.now() + (resetHours * 60 * 60 * 1000);
      localStorage.setItem('promo_countdown_end', newEndTime.toString());
      return newEndTime;
    };

    setEndTime(getEndTime());
  }, [resetHours]);

  // Update countdown every second
  useEffect(() => {
    if (!endTime) return;

    const calculateTimeRemaining = (): TimeRemaining => {
      const total = endTime - Date.now();
      
      if (total <= 0) {
        // Timer expired - reset it
        const newEndTime = Date.now() + (resetHours * 60 * 60 * 1000);
        localStorage.setItem('promo_countdown_end', newEndTime.toString());
        setEndTime(newEndTime); // Update state to trigger re-calculation
        return {
          days: 0,
          hours: resetHours >= 24 ? Math.floor(resetHours / 24) : 0,
          minutes: 0,
          seconds: 0,
          total: resetHours * 60 * 60 * 1000
        };
      }

      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return { days, hours, minutes, seconds, total };
    };

    // Initial calculation
    setTimeRemaining(calculateTimeRemaining());

    // Update every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, resetHours]);

  if (compact) {
    // Compact version for mobile - show only hours:minutes
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <Clock className="w-3.5 h-3.5" />
        <span className="font-mono font-bold tabular-nums">
          {String(timeRemaining.hours + (timeRemaining.days * 24)).padStart(2, '0')}:
          {String(timeRemaining.minutes).padStart(2, '0')}
        </span>
      </div>
    );
  }

  // Full version for desktop
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Clock className="w-4 h-4" />
      <div className="flex items-center gap-1.5 font-mono font-bold tabular-nums">
        {timeRemaining.days > 0 && (
          <>
            <span>{timeRemaining.days}d</span>
            <span className="opacity-50">:</span>
          </>
        )}
        <span>{String(timeRemaining.hours).padStart(2, '0')}h</span>
        <span className="opacity-50">:</span>
        <span>{String(timeRemaining.minutes).padStart(2, '0')}m</span>
        <span className="opacity-50">:</span>
        <span>{String(timeRemaining.seconds).padStart(2, '0')}s</span>
      </div>
    </div>
  );
}
