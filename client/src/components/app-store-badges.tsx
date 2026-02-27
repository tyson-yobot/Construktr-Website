import { motion } from "framer-motion";
import { trackAppStoreBadgeClicked, trackCustomEvent } from "@/lib/analytics-events";

interface AppStoreBadgesProps {
  variant?: 'hero' | 'footer';
  className?: string;
}

export default function AppStoreBadges({ variant = 'hero', className = '' }: AppStoreBadgesProps) {
  const badgeSize = variant === 'hero' ? 'h-14' : 'h-12';
  const containerClass = variant === 'hero' ? 'gap-4' : 'gap-3';

  return (
    <div className={`flex flex-wrap items-center justify-center ${containerClass} ${className}`}>
      {/* App Store Badge */}
      <motion.a
        href={`https://apps.apple.com/app/construktr?utm_source=app-store-badge&utm_medium=site&utm_campaign=homepage`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          trackAppStoreBadgeClicked('app_store', variant);
          trackCustomEvent('download_clicked', { store: 'ios', source: variant });
        }}
        className="inline-block"
      >
        <svg
          className={`${badgeSize} w-auto`}
          viewBox="0 0 180 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="53" rx="8" fill="black"/>
          <rect x="1" y="1" width="178" height="51" rx="7" stroke="#A6A6A6"/>
          
          {/* App Store Text */}
          <text x="90" y="15" textAnchor="middle" fill="white" fontSize="8" fontFamily="Arial">
            Download on the
          </text>
          <text x="90" y="30" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial" fontWeight="bold">
            App Store
          </text>
          
          {/* Apple Logo */}
          <path d="M25 35c-1.5-2.5-1-5.5 1-7.5 1.5-1.5 4-2 6-1.5-0.5-3-3-5.5-6-5.5s-6 2.5-6 6c0 4 2.5 8.5 5 8.5z" fill="white"/>
        </svg>
      </motion.a>

      {/* Google Play Badge */}
      <motion.a
        href={`https://play.google.com/store/apps/details?id=com.construktr?utm_source=app-store-badge&utm_medium=site&utm_campaign=homepage`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          trackAppStoreBadgeClicked('google_play', variant);
          trackCustomEvent('download_clicked', { store: 'android', source: variant });
        }}
        className="inline-block"
      >
        <svg
          className={`${badgeSize} w-auto`}
          viewBox="0 0 180 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="53" rx="8" fill="black"/>
          <rect x="1" y="1" width="178" height="51" rx="7" stroke="#A6A6A6"/>
          
          {/* Google Play Text */}
          <text x="90" y="15" textAnchor="middle" fill="white" fontSize="8" fontFamily="Arial">
            GET IT ON
          </text>
          <text x="90" y="30" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial" fontWeight="bold">
            Google Play
          </text>
          
          {/* Play Store Logo */}
          <path d="M20 40L35 26.5L30 21.5L20 13V40z" fill="#EA4335"/>
          <path d="M35 26.5L20 40L20 13L35 26.5z" fill="#FBBC04"/>
          <path d="M35 26.5L30 21.5L35 16.5L40 26.5L35 26.5z" fill="#4285F4"/>
          <path d="M20 13L30 21.5L35 16.5L20 13z" fill="#34A853"/>
        </svg>
      </motion.a>
    </div>
  );
}