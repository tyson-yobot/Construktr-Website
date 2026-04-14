import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Play, 
  Calculator, 
  Star, 
  Users, 
  FileText, 
  Phone, 
  ArrowRight,
  Smartphone,
  Bot,
  DollarSign,
  Settings
} from 'lucide-react';
import { Link } from 'wouter';

const navigation = {
  main: [
    { 
      name: 'Features', 
      href: '/features',
      icon: Star,
      description: '103+ powerful features'
    },
    { 
      name: 'Pricing', 
      href: '/pricing',
      icon: DollarSign,
      description: 'Simple, transparent pricing'
    },
    { 
      name: 'Demos', 
      href: '/demos',
      icon: Play,
      description: 'See it in action'
    },
    { 
      name: 'Support', 
      href: '/support',
      icon: Phone,
      description: '24/7 expert help'
    }
  ],
  features: [
    { name: 'AI-Powered Quoting', href: '/features#ai-quoting', icon: Bot },
    { name: 'Business Card Scanner', href: '/features#business-card', icon: Smartphone },
    { name: 'Smart Scheduling', href: '/features#scheduling', icon: Settings },
    { name: 'Payment Processing', href: '/features#payments', icon: DollarSign },
    { name: 'Project Management', href: '/features#projects', icon: FileText },
    { name: 'All 103+ Features', href: '/features', icon: Star }
  ],
  company: [
    { name: 'About', href: '/about', description: 'Our mission and story' },
    { name: 'Blog', href: '/blog', description: 'Industry insights' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' }
  ]
};

const quickActions = [
  { name: 'Calculate ROI', href: '#roi-calculator', icon: Calculator, color: 'bg-green-600' },
  { name: 'Free Trial', href: '/get', icon: Play, color: 'bg-[#0243D5]' }
];

export function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0243D5] rounded-xl flex items-center justify-center group-hover:bg-[#0243D5]/90 transition-colors">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <div className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                CONSTRUKTR
              </div>
              <div className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-blue-200'
              }`}>
                AI Construction Platform
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Features Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-2 font-medium transition-colors hover:text-[#0243D5] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onMouseEnter={() => setActiveDropdown('features')}
              >
                Features
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                <Badge className="bg-[#0243D5] text-white text-xs ml-1">103+</Badge>
              </button>
              
              {activeDropdown === 'features' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-3">
                    {navigation.features.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link 
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-[#0243D5]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0243D5]/20">
                            <IconComponent className="h-5 w-5 text-[#0243D5]" />
                          </div>
                          <span className="font-medium text-gray-700 group-hover:text-[#0243D5]">
                            {item.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navigation.main.filter(item => item.name !== 'Features').map((item) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 font-medium transition-colors hover:text-[#0243D5] ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              {quickActions.map((action) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={action.name}
                    asChild
                    className={`${action.color} hover:opacity-90 text-white font-medium`}
                    size="sm"
                  >
                    <Link href={action.href}>
                      <IconComponent className="h-4 w-4 mr-2" />
                      {action.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl">
            <div className="p-6 space-y-6">
              
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <Button
                      key={action.name}
                      asChild
                      className={`${action.color} hover:opacity-90 text-white font-medium`}
                      size="sm"
                    >
                      <Link href={action.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <IconComponent className="h-4 w-4 mr-2" />
                        {action.name}
                      </Link>
                    </Button>
                  );
                })}
              </div>

              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">Menu</h3>
                {navigation.main.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0243D5]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0243D5]/20">
                          <IconComponent className="h-5 w-5 text-[#0243D5]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-700 group-hover:text-[#0243D5]">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0243D5]" />
                    </Link>
                  );
                })}
              </div>

              {/* Top Features */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">Popular Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {navigation.features.slice(0, 4).map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link 
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <IconComponent className="h-4 w-4 text-[#0243D5]" />
                        <span className="text-gray-700 group-hover:text-[#0243D5] text-sm">
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Need help? Call us:</p>
                  <a 
                    href="tel:+17013718391" 
                    className="text-[#0243D5] font-semibold text-lg hover:underline"
                  >
                    (701) 371-8391
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>1000+ contractors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}