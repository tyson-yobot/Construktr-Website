import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Star, 
  Users, 
  DollarSign, 
  Clock, 
  Smartphone,
  Bot,
  Camera,
  Calculator,
  Calendar,
  FileText,
  TrendingUp,
  Zap,
  Shield,
  Play,
  CheckCircle2
} from 'lucide-react';

const featureStats = [
  { icon: Bot, count: "17", label: "AI Tools" },
  { icon: Smartphone, count: "103+", label: "Features" },
  { icon: Users, count: "1000+", label: "Contractors" },
  { icon: TrendingUp, count: "96%", label: "Completion Rate" }
];

const keyFeatures = [
  "AI-Powered Quoting",
  "Business Card Scanner", 
  "Smart Scheduling",
  "Payment Processing",
  "AR Documentation",
  "Voice Commands",
  "Project Management",
  "Time Tracking"
];

const liveStats = [
  { label: "Active Projects", value: "2,847", trend: "+12%" },
  { label: "Monthly Savings", value: "$127K", trend: "+8%" },
  { label: "Hours Saved", value: "15,623", trend: "+15%" }
];

export function EnhancedHeroSection() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % keyFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0243D5] via-[#0243D5]/90 to-blue-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/15 text-sm px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              #1 AI Construction Platform
            </Badge>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Construction
                </span>
                Business with AI
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Replace 17+ separate tools with one intelligent platform. 
                <span className="text-white font-semibold"> 103+ features</span> designed 
                to save time and increase profits.
              </p>
            </div>

            {/* Dynamic Feature Showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium">Now featuring:</span>
              </div>
              <div className="text-2xl font-bold text-white transition-all duration-500">
                {keyFeatures[currentFeature]}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#0243D5] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-xl"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate ROI
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>5-minute setup</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Features */}
          <div className="space-y-8">
            
            {/* Feature Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {featureStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className={`text-3xl font-bold text-white transition-all duration-1000 ${
                        animatedStats ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`} style={{ transitionDelay: `${index * 200}ms` }}>
                        {stat.count}
                      </div>
                      <div className="text-blue-100 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Live Stats Dashboard */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <h3 className="text-white font-semibold text-lg">Live Platform Stats</h3>
                </div>
                <div className="space-y-4">
                  {liveStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-blue-100">{stat.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-xl">{stat.value}</span>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                          {stat.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Features List */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Most Used Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {keyFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                      <div className="w-2 h-2 bg-[#0243D5] rounded-full" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Social Proof */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-8 text-blue-200 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white/20" />
                ))}
              </div>
              <span className="text-sm">1000+ contractors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm">4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm">$2.5M+ processed monthly</span>
            </div>
          </div>
          
          <p className="text-blue-100 text-lg">
            "CONSTRUKTR transformed our business. We've saved 25+ hours per week 
            and increased profits by 40%." - Mike Johnson, Johnson Construction
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
}