import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Clock } from "lucide-react";

export default function PricingTeaserBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-4 px-4 py-2">
            💰 Affordable Pricing
          </Badge>
          
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Plans for Every Size Crew
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center text-lg">
              <DollarSign className="w-6 h-6 mr-2 text-yellow-400" />
              <span className="font-bold">Starting at $29/month</span>
              <span className="ml-2 text-blue-200">— Less than a tank of gas</span>
            </div>
            
            <div className="flex items-center text-lg">
              <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
              <span className="font-bold">Average ROI: 800%</span>
              <span className="ml-2 text-blue-200">— Pays for itself with first job</span>
            </div>
            
            <div className="flex items-center text-lg">
              <Clock className="w-6 h-6 mr-2 text-purple-400" />
              <span className="font-bold">Free forever plan</span>
              <span className="ml-2 text-blue-200">— No credit card required</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold min-h-[56px] px-8 py-4 text-lg w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-[var(--clr-surface)] hover:text-black min-h-[56px] px-8 py-4 text-lg w-full sm:w-auto">
              View All Plans
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}