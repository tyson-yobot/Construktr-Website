import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Download, 
  Star, 
  QrCode, 
  ArrowRight,
  CheckCircle2,
  Play,
  Users,
  DollarSign,
  Clock,
  Bot,
  Camera,
  Zap,
  Shield,
  Globe,
  Apple,
  Monitor
} from 'lucide-react';
import { EnhancedFooter } from '@/components/enhanced-footer';

const appStats = [
  { icon: Users, label: "Active Users", value: "1,000+", color: "text-blue-600" },
  { icon: Star, label: "App Rating", value: "4.9/5", color: "text-yellow-500" },
  { icon: DollarSign, label: "Monthly Processing", value: "$2.5M+", color: "text-green-600" },
  { icon: Clock, label: "Time Saved", value: "25+ hrs/week", color: "text-purple-600" }
];

const keyFeatures = [
  {
    icon: Bot,
    title: "AI-Powered Quoting",
    description: "Generate accurate quotes in seconds using AI analysis of project photos",
    highlight: "80% faster than manual quoting"
  },
  {
    icon: Camera,
    title: "Business Card Scanner",
    description: "Instantly scan and digitize business cards with OCR technology",
    highlight: "No more manual data entry"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every feature optimized for mobile with offline sync capabilities",
    highlight: "Works without internet"
  },
  {
    icon: DollarSign,
    title: "Payment Processing",
    description: "Accept payments on-site with integrated card readers and digital receipts",
    highlight: "Get paid 40% faster"
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI optimizes your schedule considering weather, crew, and travel time",
    highlight: "Save 2+ hours daily"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with data encryption and SOC 2 compliance",
    highlight: "Your data is protected"
  }
];

const testimonials = [
  {
    name: "Mike Rodriguez",
    company: "Rodriguez Construction",
    location: "Phoenix, AZ",
    quote: "CONSTRUKTR mobile app transformed my business. I'm booking 40% more jobs and customers love the professional experience.",
    rating: 5,
    savings: "Saves 20+ hours/week"
  },
  {
    name: "Sarah Chen", 
    company: "Elite HVAC",
    location: "Denver, CO",
    quote: "The AI quoting is incredibly accurate. What used to take hours now takes minutes, and customers approve instantly.",
    rating: 5,
    savings: "80% faster quotes"
  }
];

const downloadOptions = [
  {
    platform: "iOS",
    icon: Apple,
    title: "Download for iPhone",
    subtitle: "iOS 14.0 or later",
    url: "https://apps.apple.com/app/construktr",
    badge: "/app-store-badge.png",
    qr: "/qr-ios.png"
  },
  {
    platform: "Android", 
    icon: Monitor,
    title: "Download for Android",
    subtitle: "Android 8.0 or later",
    url: "https://play.google.com/store/apps/details?id=com.construktr.app",
    badge: "/google-play-badge.png",
    qr: "/qr-android.png"
  }
];

export default function GetAppRebuilt() {
  const [showQR, setShowQR] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<'ios' | 'android' | null>(null);

  // Detect user's platform
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setSelectedPlatform('ios');
    } else if (/android/.test(userAgent)) {
      setSelectedPlatform('android');
    }
  }, []);

  const handleDownload = (platform: string, url: string) => {
    // Track download attempt
    if (typeof gtag !== 'undefined') {
      gtag('event', 'app_download_click', {
        event_category: 'conversion',
        event_label: platform,
        value: 1
      });
    }
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0243D5] via-[#0243D5]/90 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-white/10 text-white border-white/20 mb-4">
                  <Download className="h-4 w-4 mr-2" />
                  Free Mobile App
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Run Your Business
                  <span className="block text-yellow-400">From Anywhere</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  The complete CONSTRUKTR experience in your pocket. All 103+ features optimized for mobile with offline sync, AI assistance, and real-time collaboration.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {appStats.slice(0, 2).map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-6 w-6 ${stat.color.replace('text-', 'text-white')}`} />
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-blue-200 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {downloadOptions.map((option) => {
                    const IconComponent = option.icon;
                    const isPrimary = selectedPlatform === option.platform.toLowerCase();
                    return (
                      <Button
                        key={option.platform}
                        onClick={() => handleDownload(option.platform, option.url)}
                        className={`${
                          isPrimary 
                            ? 'bg-white text-[#0243D5] hover:bg-gray-100' 
                            : 'bg-black/50 text-white hover:bg-black/70'
                        } px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3 flex-1`}
                        size="lg"
                      >
                        <IconComponent className="h-6 w-6" />
                        <div className="text-left">
                          <div className="text-sm opacity-80">{option.subtitle}</div>
                          <div className="font-bold">{option.title.replace('Download for ', '')}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {/* QR Code Option */}
                <Button
                  onClick={() => setShowQR(showQR ? null : 'both')}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <QrCode className="h-4 w-4 mr-2" />
                  {showQR ? 'Hide QR Codes' : 'Show QR Codes'}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Free download</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Works offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Instant sync</span>
                </div>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-96">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl transform rotate-6 opacity-60"></div>
                <div className="absolute inset-0 bg-gray-800 rounded-[3rem] shadow-2xl transform rotate-3 opacity-80"></div>
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-[#0243D5] to-blue-600 p-6 text-white relative">
                      
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-medium">9:41 AM</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                          <div className="w-6 h-3 bg-white rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                          <span className="text-2xl font-bold">C</span>
                        </div>
                        <h3 className="font-bold text-xl">CONSTRUKTR</h3>
                        <p className="text-sm opacity-80">Mobile Dashboard</p>
                      </div>

                      {/* Dashboard Cards */}
                      <div className="space-y-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Today's Revenue</span>
                            <span className="font-bold text-lg">$4,850</span>
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Active Projects</span>
                            <span className="font-bold text-lg">12</span>
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Pending Quotes</span>
                            <span className="font-bold text-lg">8</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation Hint */}
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex justify-center space-x-6">
                          <div className="w-6 h-6 bg-white rounded-lg opacity-60"></div>
                          <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                          <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Codes */}
          {showQR && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {downloadOptions.map((option) => (
                <Card key={option.platform} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-white mb-4">{option.title}</h4>
                    <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                    <p className="text-blue-200 text-sm">Scan to download for {option.platform}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All CONSTRUKTR features optimized for mobile with exclusive mobile-only capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-[#0243D5]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0243D5]/20 transition-colors">
                      <IconComponent className="h-7 w-7 text-[#0243D5]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <Badge className="bg-green-100 text-green-800 border-green-200 w-fit">
                      {feature.highlight}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contractors Love Our Mobile App
            </h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-xl font-semibold text-gray-900 ml-2">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {testimonial.savings}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0243D5] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Download Now, Start Saving Time Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 1,000+ contractors who've transformed their business with CONSTRUKTR mobile
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            {downloadOptions.map((option) => (
              <Button
                key={option.platform}
                onClick={() => handleDownload(option.platform, option.url)}
                className="bg-white text-[#0243D5] hover:bg-gray-100 px-12 py-6 rounded-2xl font-semibold text-xl flex items-center justify-center gap-4 shadow-2xl"
                size="lg"
              >
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-sm">Get it on</div>
                  <div className="font-bold">{option.platform}</div>
                </div>
              </Button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Works worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Instant setup</span>
            </div>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}