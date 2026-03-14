import { motion } from "framer-motion";

// Real contractor photos from attached assets
const contractorTruckImage = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop";
const jobSiteImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop";
const plumberWorkingImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop";
const hvacTechImage = "https://images.unsplash.com/photo-1494976754279-185f0d677845?w=400&h=300&fit=crop";
const electricianImage = "https://images.unsplash.com/photo-1526574080420-c2dd61043d14?w=400&h=300&fit=crop";
const roofingCrewImage = "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop";
import OptimizedImage from "./optimized-image";
const handymanImage = "https://images.unsplash.com/photo-1582542021865-bde52fd7c3cf?w=400&h=300&fit=crop";
const appUsageImage = "/screens/dashboard-home.png";
const contractorPhoneImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop";
const toolsImage = "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop";
const workTruckImage = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop";
const appScreenImage = "/screens/dashboard-home.png";
const jobCompleteImage = "/screens/schedule-calendar.png";
const customerMeetingImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop";
const dashboardImage = "/screens/dashboard.png";
const mobileAppImage = "/screens/home-screen.png";

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
          <h3 className="text-xl font-bold text-red-600 mb-4">❌ Before CONSTRUKTR</h3>
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
          <h3 className="text-xl font-bold text-green-600 mb-4">✅ After CONSTRUKTR</h3>
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