import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Calculator, Clock, DollarSign, TrendingUp, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CalculatorData {
  tradeType: string;
  hoursPerWeek: string;
  averageJobValue: string;
  monthlyJobs: string;
}

export default function EnhancedExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    tradeType: "",
    hoursPerWeek: "",
    averageJobValue: "",
    monthlyJobs: ""
  });
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    timeSaved: 0,
    revenuePotential: 0,
    costSavings: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    let mouseLeaveHandler: ((e: MouseEvent) => void) | null = null;
    
    // Only show on desktop
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop && !hasShown) {
      mouseLeaveHandler = (e: MouseEvent) => {
        // Check if mouse is leaving the top of the window
        if (e.clientY <= 0) {
          setIsVisible(true);
          setHasShown(true);
        }
      };
      
      // Add a delay before enabling exit intent
      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', mouseLeaveHandler);
      }, 10000); // Wait 10 seconds before enabling exit intent
      
      return () => {
        clearTimeout(timer);
        if (mouseLeaveHandler) {
          document.removeEventListener('mouseleave', mouseLeaveHandler);
        }
      };
    }
  }, [hasShown]);

  const calculateSavings = () => {
    const hours = parseFloat(calculatorData.hoursPerWeek) || 0;
    const jobValue = parseFloat(calculatorData.averageJobValue) || 0;
    const monthlyJobs = parseFloat(calculatorData.monthlyJobs) || 0;
    
    // Calculate potential savings
    const timeSavedPerWeek = Math.min(hours * 0.4, 15); // 40% time savings, max 15 hours
    const additionalJobs = Math.floor(monthlyJobs * 0.3); // 30% more jobs
    const additionalRevenue = additionalJobs * jobValue;
    const yearlyCostSavings = timeSavedPerWeek * 52 * 25; // Assuming $25/hour value of time
    
    setResults({
      timeSaved: timeSavedPerWeek,
      revenuePotential: additionalRevenue,
      costSavings: yearlyCostSavings
    });
    
    setShowResults(true);
    
    // Track calculator completion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_calculator_complete', {
        'event_category': 'engagement',
        'trade_type': calculatorData.tradeType,
        'time_saved': timeSavedPerWeek,
        'revenue_potential': additionalRevenue
      });
    }
  };

  const handleInputChange = (field: keyof CalculatorData, value: string) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownload = () => {
    // Track conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'app_download_click', {
        'event_category': 'engagement',
        'event_label': 'exit_intent_popup'
      });
    }
    
    window.open('https://apps.apple.com/app/construktr', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl mx-4"
        >
          <Card className="border-2 border-blue-200 shadow-2xl bg-[var(--clr-surface)]">
            <CardHeader className="relative bg-gradient-to-r from-blue-50 to-purple-50">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="text-center">
                <Badge className="mb-3 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0">
                  <Zap className="w-4 h-4 mr-2" />
                  Wait! Don't Leave Yet
                </Badge>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  See How Much Time & Money You Could Save
                </CardTitle>
                <CardDescription className="text-lg text-[var(--clr-text-2)]">
                  Get your personalized savings calculation in 30 seconds
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {!showResults ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tradeType" className="font-semibold text-gray-700">
                        Your Trade
                      </Label>
                      <Select value={calculatorData.tradeType} onValueChange={(value) => handleInputChange('tradeType', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500">
                          <SelectValue placeholder="Select your trade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="hvac">HVAC</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="roofing">Roofing</SelectItem>
                          <SelectItem value="handyman">Handyman</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hoursPerWeek" className="font-semibold text-gray-700">
                        Hours worked per week
                      </Label>
                      <Input
                        id="hoursPerWeek"
                        type="number"
                        placeholder="40"
                        value={calculatorData.hoursPerWeek}
                        onChange={(e) => handleInputChange('hoursPerWeek', e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="averageJobValue" className="font-semibold text-gray-700">
                        Average job value ($)
                      </Label>
                      <Input
                        id="averageJobValue"
                        type="number"
                        placeholder="500"
                        value={calculatorData.averageJobValue}
                        onChange={(e) => handleInputChange('averageJobValue', e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="monthlyJobs" className="font-semibold text-gray-700">
                        Jobs completed per month
                      </Label>
                      <Input
                        id="monthlyJobs"
                        type="number"
                        placeholder="20"
                        value={calculatorData.monthlyJobs}
                        onChange={(e) => handleInputChange('monthlyJobs', e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <Button
                    onClick={calculateSavings}
                    disabled={!calculatorData.tradeType || !calculatorData.hoursPerWeek || !calculatorData.averageJobValue || !calculatorData.monthlyJobs}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 text-lg rounded-xl"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Savings
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Your Potential Savings with CONSTRUKTR
                    </h3>
                    <p className="text-[var(--clr-text-2)]">
                      Based on your {calculatorData.tradeType} business data
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-blue-900">
                        {results.timeSaved.toFixed(1)} hrs/week
                      </div>
                      <div className="text-sm text-blue-700">Time Saved</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-green-900">
                        ${results.revenuePotential.toLocaleString()}/mo
                      </div>
                      <div className="text-sm text-green-700">Additional Revenue</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6 text-center">
                      <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-purple-900">
                        ${results.costSavings.toLocaleString()}/year
                      </div>
                      <div className="text-sm text-purple-700">Cost Savings</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-yellow-800 mb-1">
                        Total Annual Value: ${(results.revenuePotential * 12 + results.costSavings).toLocaleString()}
                      </div>
                      <div className="text-sm text-yellow-700">
                        Your business could be worth significantly more with CONSTRUKTR
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleDownload}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 text-lg rounded-xl"
                    >
                      Start Your Free Trial Now
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleClose}
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-xl"
                    >
                      Maybe Later
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}