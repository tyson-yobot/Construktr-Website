import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, Download, Clock, DollarSign, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tradeTypes = [
  "Plumbing",
  "HVAC",
  "Electrical", 
  "Roofing",
  "Handyman Services",
  "Landscaping",
  "Painting",
  "Flooring",
  "General Contracting",
  "Other"
];

interface FormData {
  name: string;
  email: string;
  tradeType: string;
  businessSize: string;
}

export default function AIBusinessAuditForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    tradeType: "",
    businessSize: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your personalized AI Business Audit is being generated. Check your email in 2-3 minutes.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="border-green-200 bg-[var(--clr-surface)]/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your AI Business Audit is Being Generated!
                </h3>
                <p className="text-[var(--clr-text-2)] mb-8">
                  We're analyzing your {formData.tradeType} business and calculating your potential savings. 
                  Check your email in 2-3 minutes for your personalized report.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-900">Time Savings</div>
                    <div className="text-xs text-blue-700">Calculated for your business</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-900">Cost Reduction</div>
                    <div className="text-xs text-green-700">Personalized estimates</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-purple-900">Revenue Growth</div>
                    <div className="text-xs text-purple-700">Industry benchmarks</div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
                  onClick={() => window.open('https://apps.apple.com/app/construktr', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free App
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Calculator className="w-4 h-4 mr-2" />
            Free Business Analysis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Get Your Free AI Business Audit
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto leading-relaxed">
            Discover exactly how much time and money CONSTRUKTR™ can save your business. 
            Get a personalized PDF report in under 3 minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-gray-200 shadow-xl bg-[var(--clr-surface)]/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                Tell Us About Your Business
              </CardTitle>
              <CardDescription className="text-[var(--clr-text-2)]">
                We'll analyze your specific trade and business size for accurate savings calculations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Business Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@smithplumbing.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tradeType" className="text-sm font-semibold text-gray-700">
                      Your Trade *
                    </Label>
                    <Select value={formData.tradeType} onValueChange={(value) => handleInputChange('tradeType', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select your trade" />
                      </SelectTrigger>
                      <SelectContent>
                        {tradeTypes.map((trade) => (
                          <SelectItem key={trade} value={trade}>
                            {trade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessSize" className="text-sm font-semibold text-gray-700">
                      Business Size *
                    </Label>
                    <Select value={formData.businessSize} onValueChange={(value) => handleInputChange('businessSize', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select business size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo Contractor (Just Me)</SelectItem>
                        <SelectItem value="small">Small Team (2-5 People)</SelectItem>
                        <SelectItem value="medium">Growing Business (6-15 People)</SelectItem>
                        <SelectItem value="large">Established Company (15+ People)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Your Personalized Report Will Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Time savings calculation
                    </div>
                    <div className="flex items-center text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Revenue growth potential
                    </div>
                    <div className="flex items-center text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Cost reduction analysis
                    </div>
                    <div className="flex items-center text-blue-800">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Industry benchmarks
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.tradeType || !formData.businessSize}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Generating Your Report...
                    </>
                  ) : (
                    <>
                      <Calculator className="w-5 h-5 mr-2" />
                      Get My Free AI Business Audit
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  No spam. We'll only send you the audit report and occasional updates about CONSTRUKTR™.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}