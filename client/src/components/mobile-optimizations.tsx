import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Download, 
  Star, 
  ArrowRight, 
  Play, 
  Users, 
  TrendingUp,
  Bot,
  Calculator,
  X,
  Maximize2
} from 'lucide-react';

export function MobileOptimizations() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show mobile CTA after user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 1000 && isMobileDevice) {
        setShowMobileCTA(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileDevice]);

  if (!isMobileDevice) return null;

  return (
    <>
      {/* Mobile-First Hero Enhancements */}
      <div className="block md:hidden">
        
        {/* Mobile Stats Bar */}
        <div className="bg-[#0243D5] text-white p-4 text-center">
          <div className="flex justify-around text-xs">
            <div>
              <div className="font-bold text-lg">103+</div>
              <div className="text-blue-200">Features</div>
            </div>
            <div>
              <div className="font-bold text-lg">1K+</div>
              <div className="text-blue-200">Users</div>
            </div>
            <div>
              <div className="font-bold text-lg">4.9</div>
              <div className="text-blue-200 flex items-center justify-center gap-1">
                <Star className="h-3 w-3 fill-current text-yellow-400" />
                Rating
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Quick Features */}
        <div className="bg-gray-50 p-4 space-y-3">
          <h3 className="font-semibold text-center text-gray-900">Top Features for Mobile</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Business Card Scanner', icon: Smartphone, color: 'bg-blue-500' },
              { name: 'Voice Commands', icon: Bot, color: 'bg-green-500' },
              { name: 'Mobile Payments', icon: TrendingUp, color: 'bg-purple-500' },
              { name: 'GPS Time Tracking', icon: Users, color: 'bg-red-500' }
            ].map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.name} className="border-0 shadow-sm">
                  <CardContent className="p-3 text-center">
                    <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs font-medium text-gray-700">{feature.name}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      {showMobileCTA && (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
          <Card className="border-0 shadow-2xl bg-[#0243D5] text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-lg">Ready to start?</div>
                  <div className="text-blue-200 text-sm">Free 14-day trial</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    className="bg-white text-[#0243D5] hover:bg-gray-100 font-semibold"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Get App
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => setShowMobileCTA(false)}
                    className="text-white hover:bg-white/10 p-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mobile-Optimized ROI Calculator */}
      <div className="block md:hidden bg-white border-t border-gray-200">
        <div className="p-4">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Calculate Your Savings</h3>
            <p className="text-gray-600 text-sm">
              See how much time and money CONSTRUKTR can save your business
            </p>
            <Button 
              className="w-full bg-[#0243D5] hover:bg-[#0243D5]/90 text-white font-semibold py-3"
              size="lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate ROI Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
          
          {/* Quick Benefits */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            {[
              "Save 25+ hours per week",
              "Increase profits by 40%",
              "Replace 17+ separate tools",
              "Get paid faster with mobile invoicing"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Feature Showcase */}
      <div className="block md:hidden bg-gray-50">
        <div className="p-4 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Built for Mobile</h3>
            <p className="text-gray-600 text-sm">
              Every feature designed to work perfectly on your phone
            </p>
          </div>

          {/* Mobile Features Grid */}
          <div className="space-y-4">
            {[
              {
                title: "Snap Business Cards",
                description: "Instantly scan and save contact info",
                icon: Smartphone,
                demo: true
              },
              {
                title: "Voice Commands", 
                description: "Hands-free operation while working",
                icon: Bot,
                demo: true
              },
              {
                title: "Offline Sync",
                description: "Work without internet, sync when connected",
                icon: Download,
                demo: false
              },
              {
                title: "GPS Time Tracking",
                description: "Automatic location-based time tracking",
                icon: TrendingUp,
                demo: true
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0243D5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-[#0243D5]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-600 mb-3">{feature.description}</div>
                        {feature.demo && (
                          <Button size="sm" variant="outline" className="text-xs">
                            <Play className="h-3 w-3 mr-1" />
                            See Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="text-center space-y-4 pt-6 border-t border-gray-200">
            <div className="space-y-2">
              <Button 
                className="w-full bg-[#0243D5] hover:bg-[#0243D5]/90 text-white font-semibold py-3"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Free App
              </Button>
              <div className="flex justify-center gap-4 text-xs text-gray-500">
                <span>✓ iOS & Android</span>
                <span>✓ 14-day trial</span>
                <span>✓ No credit card</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Testimonial */}
      <div className="block md:hidden bg-[#0243D5] text-white">
        <div className="p-6 text-center">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg font-medium mb-4">
            "Game-changer for our mobile workforce. The business card scanner alone 
            saves us hours every week."
          </blockquote>
          <div className="text-blue-200 text-sm">
            Sarah Martinez, Martinez Contracting
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}