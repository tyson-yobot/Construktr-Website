import { motion } from "framer-motion";

// Real contractor photos from attached assets
import contractorTruckImage from "@assets/IMG_4328_1754274611769.jpeg";
import jobSiteImage from "@assets/IMG_4328_1754274611769.jpeg";
import plumberWorkingImage from "@assets/IMG_4330_1754274611770.jpeg";
import hvacTechImage from "@assets/IMG_4331_1754274611770.jpeg";
import electricianImage from "@assets/IMG_4332_1754274611770.jpeg";
import roofingCrewImage from "@assets/IMG_4333_1754274611770.jpeg";
import OptimizedImage from "./optimized-image";
import handymanImage from "@assets/IMG_4334_1754274611770.jpeg";
import appUsageImage from "@assets/IMG_4335_1754274611770.jpeg";
import contractorPhoneImage from "@assets/IMG_4335_1754274611770.jpeg";
import toolsImage from "@assets/IMG_4337_1754274611770.jpeg";
import workTruckImage from "@assets/IMG_4338_1754274611770.jpeg";
import appScreenImage from "@assets/IMG_4330_1754274611770.jpeg";
import jobCompleteImage from "@assets/IMG_4331_1754274611770.jpeg";
import customerMeetingImage from "@assets/IMG_4332_1754274611770.jpeg";
import dashboardImage from "@assets/image_1754832756730.png";
import mobileAppImage from "@assets/image_1754832756730.png";

interface AuthenticImageProps {
  scenario: "truck" | "jobsite" | "phone-usage" | "tools" | "meeting" | "dashboard" | "app-screen";
  className?: string;
  alt?: string;
}

export default function AuthenticContractorImage({ scenario, className = "", alt }: AuthenticImageProps) {
  const imageMap = {
    "truck": contractorTruckImage,
    "jobsite": jobSiteImage, 
    "phone-usage": contractorPhoneImage,
    "tools": toolsImage,
    "meeting": customerMeetingImage,
    "dashboard": dashboardImage,
    "app-screen": mobileAppImage
  };

  const fallbackAlt = {
    "truck": "Contractor using CONSTRUKTR app in work truck",
    "jobsite": "Contractor on job site with mobile app",
    "phone-usage": "Contractor using quoting app on phone",
    "tools": "Professional contractor tools and equipment",
    "meeting": "Contractor meeting with customer",
    "dashboard": "CONSTRUKTR app dashboard interface",
    "app-screen": "CONSTRUKTR mobile app interface"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <OptimizedImage
        src={imageMap[scenario]}
        alt={alt || fallbackAlt[scenario]}
        className="w-full h-full object-cover"
        loading="lazy"
        width={480}
        height={320}
      />
    </motion.div>
  );
}

// Trade-specific authentic images
export function TradeSpecificImage({ trade, className = "" }: { trade: "plumbing" | "hvac" | "electrical" | "handyman" | "roofing", className?: string }) {
  const tradeImages = {
    "plumbing": plumberWorkingImage,
    "hvac": hvacTechImage,
    "electrical": electricianImage,
    "handyman": handymanImage,
    "roofing": roofingCrewImage
  };

  const tradeAlts = {
    "plumbing": "Professional plumber using CONSTRUKTR app for quotes",
    "hvac": "HVAC technician with mobile quoting app",
    "electrical": "Licensed electrician using professional business app",
    "handyman": "Handyman contractor with job management app", 
    "roofing": "Roofing crew using professional estimate software"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <OptimizedImage
        src={tradeImages[trade]}
        alt={tradeAlts[trade]}
        className="w-full h-full object-cover"
        loading="lazy"
        width={480}
        height={320}
      />
    </motion.div>
  );
}

// Before/After comparison component
export function BeforeAfterContractor() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Before - Generic/Manual */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-4">
          <h3 className="text-xl font-bold text-red-600 mb-4">❌ Before CONSTRUKTR™</h3>
          <AuthenticContractorImage scenario="tools" className="w-full h-48 object-cover mb-4" />
          <ul className="text-left space-y-2 text-gray-700">
            <li>• Handwritten quotes on napkins</li>
            <li>• Lost jobs to faster competitors</li>
            <li>• Double-booked appointments</li>
            <li>• Chasing customers for payment</li>
          </ul>
        </div>
      </motion.div>

      {/* After - Professional with App */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-4">
          <h3 className="text-xl font-bold text-green-600 mb-4">✅ After CONSTRUKTR™</h3>
          <AuthenticContractorImage scenario="phone-usage" className="w-full h-48 object-cover mb-4" />
          <ul className="text-left space-y-2 text-gray-700">
            <li>• Professional quotes in 30 seconds</li>
            <li>• Win 40% more jobs</li>
            <li>• Smart scheduling prevents conflicts</li>
            <li>• Get paid 3x faster</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}