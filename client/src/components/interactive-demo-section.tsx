import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Minimize2,
  Bot,
  Camera,
  Calculator,
  Smartphone,
  Clock,
  DollarSign,
  Users,
  FileText,
  Star,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const demoVideos = [
  {
    id: 'ai-quoting',
    title: 'AI-Powered Quoting',
    description: 'Watch AI generate accurate quotes in seconds from project photos',
    duration: '2:15',
    thumbnail: '/demos/ai-quoting-thumb.jpg',
    videoUrl: '/demos/ai-quoting-demo.mp4',
    icon: Bot,
    features: ['Photo analysis', 'Material estimation', 'Labor calculation', 'Instant pricing']
  },
  {
    id: 'business-card-scanner',
    title: 'Business Card Scanner',
    description: 'Instantly digitize business cards with OCR technology',
    duration: '1:30',
    thumbnail: '/demos/business-card-thumb.jpg', 
    videoUrl: '/demos/business-card-demo.mp4',
    icon: Camera,
    features: ['OCR scanning', 'Contact extraction', 'CRM integration', 'Duplicate detection']
  },
  {
    id: 'mobile-payments',
    title: 'Mobile Payment Processing',
    description: 'Accept payments anywhere with integrated card readers',
    duration: '1:45',
    thumbnail: '/demos/payments-thumb.jpg',
    videoUrl: '/demos/payments-demo.mp4',
    icon: DollarSign,
    features: ['Card processing', 'Digital receipts', 'Instant deposits', 'Fee tracking']
  },
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling',
    description: 'AI optimizes crew schedules considering weather and skills',
    duration: '2:30',
    thumbnail: '/demos/scheduling-thumb.jpg',
    videoUrl: '/demos/scheduling-demo.mp4',
    icon: Clock,
    features: ['Weather integration', 'Crew optimization', 'Route planning', 'Conflict resolution']
  },
  {
    id: 'project-dashboard',
    title: 'Project Dashboard',
    description: 'Real-time overview of all active projects and their status',
    duration: '2:00',
    thumbnail: '/demos/dashboard-thumb.jpg',
    videoUrl: '/demos/dashboard-demo.mp4',
    icon: FileText,
    features: ['Real-time updates', 'Progress tracking', 'Team collaboration', 'Budget monitoring']
  },
  {
    id: 'roi-calculator',
    title: 'ROI Calculator',
    description: 'Calculate exact savings and return on investment',
    duration: '1:20',
    thumbnail: '/demos/roi-thumb.jpg',
    videoUrl: '/demos/roi-demo.mp4',
    icon: Calculator,
    features: ['Time savings', 'Cost reduction', 'Revenue increase', 'Payback period']
  }
];

const testimonials = [
  {
    quote: "The AI quoting feature has revolutionized our bidding process. We're 80% faster and more accurate.",
    author: "Mike Johnson",
    company: "Johnson Construction",
    rating: 5,
    savings: "$15K/month"
  },
  {
    quote: "Business card scanner is a game-changer. No more manual data entry - everything goes straight to our CRM.",
    author: "Sarah Martinez",
    company: "Martinez Contracting", 
    rating: 5,
    savings: "25 hours/week"
  },
  {
    quote: "Mobile payments have improved our cash flow dramatically. We get paid immediately on job completion.",
    author: "David Chen",
    company: "Chen Construction",
    rating: 5,
    savings: "40% faster payments"
  }
];

export function InteractiveDemoSection() {
  const [activeDemo, setActiveDemo] = useState(demoVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreenToggle = () => {
    if (videoRef.current) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleDemoChange = (demo: typeof demoVideos[0]) => {
    setActiveDemo(demo);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#0243D5] text-white px-4 py-2 text-sm font-medium">
            Interactive Demos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            See CONSTRUKTR in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real demonstrations of our most powerful features. Each demo shows 
            actual usage scenarios from successful construction companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-100 shadow-xl overflow-hidden">
              <div className="relative bg-black aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={activeDemo.thumbnail}
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={activeDemo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handlePlayPause}
                      className="bg-white/90 hover:bg-white text-gray-900 rounded-full w-16 h-16"
                      size="lg"
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8 ml-1" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={handlePlayPause}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      onClick={handleMuteToggle}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-black/50 text-white border-0">
                      {activeDemo.duration}
                    </Badge>
                    <Button
                      onClick={handleFullscreenToggle}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0243D5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <activeDemo.icon className="h-6 w-6 text-[#0243D5]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {activeDemo.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">
                      {activeDemo.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {activeDemo.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial for Active Demo */}
            <Card className="mt-6 border-l-4 border-l-[#0243D5] bg-gradient-to-r from-[#0243D5]/5 to-transparent">
              <CardContent className="p-6">
                {testimonials.map((testimonial, index) => {
                  if (index === demoVideos.findIndex(demo => demo.id === activeDemo.id) % testimonials.length) {
                    return (
                      <div key={index} className="space-y-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-700 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-gray-600">{testimonial.company}</div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            Saved {testimonial.savings}
                          </Badge>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </CardContent>
            </Card>
          </div>

          {/* Demo Selection */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a Demo</h3>
              <div className="space-y-3">
                {demoVideos.map((demo) => {
                  const IconComponent = demo.icon;
                  const isActive = demo.id === activeDemo.id;
                  return (
                    <Card 
                      key={demo.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        isActive 
                          ? 'border-[#0243D5] bg-[#0243D5]/5 shadow-md' 
                          : 'border-gray-200 hover:border-[#0243D5]/50 hover:shadow-sm'
                      }`}
                      onClick={() => handleDemoChange(demo)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isActive ? 'bg-[#0243D5] text-white' : 'bg-gray-100 text-gray-600'
                          }`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold ${
                              isActive ? 'text-[#0243D5]' : 'text-gray-900'
                            }`}>
                              {demo.title}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-2">
                              <Clock className="h-3 w-3" />
                              {demo.duration}
                            </div>
                          </div>
                          {isActive && (
                            <Badge className="bg-[#0243D5] text-white">
                              Playing
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-[#0243D5] to-blue-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                <p className="text-blue-100 mb-4 text-sm">
                  Try all these features free for 14 days
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white text-[#0243D5] hover:bg-gray-100 font-semibold"
                    size="lg"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white/10"
                  >
                    Schedule Personal Demo
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-blue-200">
                  <span>✓ No credit card required</span>
                  <span>✓ Full feature access</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0243D5]" />
                  Platform Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Demo Views', value: '25,000+' },
                  { label: 'Trial Conversions', value: '78%' },
                  { label: 'User Rating', value: '4.9/5' },
                  { label: 'Support Response', value: '<2 hours' }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-semibold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}