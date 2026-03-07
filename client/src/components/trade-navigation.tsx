import { motion } from "framer-motion";
import { Link } from "wouter";
import { Droplets, Thermometer, Zap, Hammer, Home, Wrench } from "lucide-react";

const trades = [
  {
    name: "Plumbing",
    path: "/plumbing",
    icon: Droplets,
    color: "blue",
    keywords: "Plumbing Business App, Plumber Quote Software, Pipe Repair Quotes"
  },
  {
    name: "HVAC", 
    path: "/hvac",
    icon: Thermometer,
    color: "orange",
    keywords: "HVAC Job Scheduler, AC Repair App, Heating Cooling Business"
  },
  {
    name: "Electrical",
    path: "/electrical", 
    icon: Zap,
    color: "yellow",
    keywords: "Electrical Business App, Electrician Quote Software, Wiring Jobs"
  },
  {
    name: "Handyman",
    path: "/handyman",
    icon: Hammer,
    color: "green", 
    keywords: "Handyman Quoting Software, Multi-Trade App, Home Repair Business"
  },
  {
    name: "Roofing",
    path: "/roofing",
    icon: Home,
    color: "red",
    keywords: "Roofing Business App, Roof Quote Software, Insurance Claims"
  }
];

interface TradeNavigationProps {
  className?: string;
  variant?: "horizontal" | "grid" | "dropdown";
}

export default function TradeNavigation({ className = "", variant = "horizontal" }: TradeNavigationProps) {
  const gridLayout = variant === "grid";
  const dropdownLayout = variant === "dropdown";

  return (
    <div className={`${className} ${gridLayout ? 'grid grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-wrap gap-4'}`}>
      {trades.map((trade, index) => {
        const Icon = trade.icon;
        const colorClasses = {
          blue: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
          orange: "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100", 
          yellow: "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100",
          green: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
          red: "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
        }[trade.color];

        return (
          <motion.div
            key={trade.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={trade.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  ${colorClasses}
                  ${gridLayout ? 'p-6' : 'px-4 py-2'}
                  border-2 rounded-xl cursor-pointer transition-all duration-300
                  flex items-center gap-3 font-semibold
                  hover:shadow-lg
                `}
              >
                <Icon className={`${gridLayout ? 'w-8 h-8' : 'w-5 h-5'}`} />
                <div className={gridLayout ? 'text-center' : ''}>
                  <div className={`${gridLayout ? 'text-lg' : 'text-sm'} font-bold`}>
                    {trade.name}
                  </div>
                  {gridLayout && (
                    <div className="text-xs opacity-75 mt-1">
                      Business App
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

// Export trade data for use in other components
export { trades };

// SEO Helper component for meta tags
export function TradeSEOTags({ trade }: { trade: string }) {
  const tradeData = trades.find(t => t.name.toLowerCase() === trade.toLowerCase());
  
  if (!tradeData) return null;

  return (
    <>
      <meta name="keywords" content={tradeData.keywords} />
      <meta name="description" content={`${tradeData.name} business app for contractors. Generate professional quotes, manage jobs, and grow your ${trade.toLowerCase()} business with CONSTRUKTR AI-powered platform.`} />
      <meta property="og:title" content={`${tradeData.name} Business App | CONSTRUKTR`} />
      <meta property="og:description" content={`Professional ${trade.toLowerCase()} business management app with AI quotes, smart scheduling, and payment processing.`} />
    </>
  );
}