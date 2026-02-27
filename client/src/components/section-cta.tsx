import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface SectionCTAProps {
  showSecondary?: boolean;
  className?: string;
  compact?: boolean;
}

export default function SectionCTA({ showSecondary = false, className = "", compact = false }: SectionCTAProps) {
  if (compact) {
    return (
      <div className={`flex justify-center ${className}`}>
        <Link href="/get">
          <Button className="button-primary">
            Start Free Trial
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/get">
          <Button className="button-primary w-full sm:w-auto">
            Start Free Trial
          </Button>
        </Link>
      </motion.div>
      
      {showSecondary && (
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            onClick={() => {
              const element = document.getElementById('video-demo');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto"
          >
            Book a Demo
          </Button>
        </motion.div>
      )}
    </div>
  );
}