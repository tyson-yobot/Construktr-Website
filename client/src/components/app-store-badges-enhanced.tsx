import { trackDownloadClicked } from "@/lib/analytics-events";

interface AppStoreBadgesEnhancedProps {
  location: 'hero' | 'footer' | 'download_section' | 'sticky_cta';
  className?: string;
}

export default function AppStoreBadgesEnhanced({ location, className = "" }: AppStoreBadgesEnhancedProps) {
  const handleAppStoreClick = () => {
    trackDownloadClicked('ios', `${location}_app_store_badge`);
    const utmUrl = `https://apps.apple.com/app/construktr?utm_source=website&utm_medium=app_store_badge&utm_campaign=${location}_download&utm_content=app_store`;
    window.open(utmUrl, '_blank');
  };

  const handleGooglePlayClick = () => {
    trackDownloadClicked('android', `${location}_google_play_badge`);
    const utmUrl = `https://play.google.com/store/apps/details?id=com.construktr.app?utm_source=website&utm_medium=google_play_badge&utm_campaign=${location}_download&utm_content=google_play`;
    window.open(utmUrl, '_blank');
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {/* App Store Badge */}
      <button
        onClick={handleAppStoreClick}
        className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        aria-label="Download CONSTRUKTR from the App Store"
      >
        <svg
          width="180"
          height="53"
          viewBox="0 0 180 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-auto"
        >
          <rect width="180" height="53" rx="8" fill="black"/>
          <rect x="1" y="1" width="178" height="51" rx="7" stroke="#A6A6A6"/>
          
          {/* Apple Logo */}
          <path d="M31.5 13.5c-1.2 0-2.4.5-3.2 1.4-.7.8-1.3 2-1.1 3.2 1.2.1 2.5-.6 3.3-1.5.7-.8 1.2-2 1-3.1z" fill="white"/>
          <path d="M34 19.5c-1.8-2.1-4.3-3.3-6.9-3.1-3.1.2-6 1.8-7.6 4.2-1.6 2.4-1.9 5.4-.8 8.1 1.1 2.7 3.4 4.8 6.2 5.6 2.8.8 5.8.2 8.1-1.6 2.3-1.8 3.6-4.6 3.5-7.5-.1-2.9-1.2-5.6-3.1-7.7zm-1.5 12.8c-.9 1.5-2.3 2.6-3.9 3.1-1.6.5-3.3.3-4.7-.6-1.4-.9-2.4-2.3-2.8-3.9-.4-1.6-.2-3.3.7-4.7.9-1.4 2.3-2.4 3.9-2.8 1.6-.4 3.3-.2 4.7.7 1.4.9 2.4 2.3 2.8 3.9.4 1.6.2 3.3-.7 4.3z" fill="white"/>
          
          {/* Text */}
          <text x="50" y="20" fill="white" fontSize="8" fontWeight="300">Download on the</text>
          <text x="50" y="32" fill="white" fontSize="14" fontWeight="600">App Store</text>
        </svg>
      </button>

      {/* Google Play Badge */}
      <button
        onClick={handleGooglePlayClick}
        className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        aria-label="Get CONSTRUKTR on Google Play"
      >
        <svg
          width="180"
          height="53"
          viewBox="0 0 180 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-auto"
        >
          <rect width="180" height="53" rx="8" fill="black"/>
          <rect x="1" y="1" width="178" height="51" rx="7" stroke="#A6A6A6"/>
          
          {/* Google Play Logo */}
          <path d="M20 40L35 26.5L30 21.5L20 13V40z" fill="#EA4335"/>
          <path d="M35 26.5L20 40L20 13L35 26.5z" fill="#FBBC04"/>
          <path d="M35 26.5L30 21.5L35 16.5L40 26.5L35 26.5z" fill="#4285F4"/>
          <path d="M20 13L30 21.5L35 16.5L20 13z" fill="#34A853"/>
          
          {/* Text */}
          <text x="50" y="20" fill="white" fontSize="7" fontWeight="300">GET IT ON</text>
          <text x="50" y="32" fill="white" fontSize="14" fontWeight="600">Google Play</text>
        </svg>
      </button>
    </div>
  );
}