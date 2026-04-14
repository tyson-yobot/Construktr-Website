import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  Play,
  Clock,
  DollarSign,
  Users,
  Smartphone,
  Bot,
  Camera,
  Calendar,
  FileText,
  MapPin,
  Settings,
  Shield,
  Zap,
  TrendingUp,
  Building,
  Wrench,
  Phone,
  Mail,
  Globe,
  Database,
  Layers
} from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  category: string;
  description: string;
  tier: 'starter' | 'pro' | 'enterprise';
  popular?: boolean;
  new?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  demo_available?: boolean;
}

const allFeatures: Feature[] = [
  // AI & Automation (8 features)
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    category: 'AI & Automation',
    description: 'Smart assistant that helps with quoting, scheduling, and project management decisions',
    tier: 'pro',
    popular: true,
    icon: Bot,
    benefits: ['Reduces admin time by 60%', 'Learns from your patterns', '24/7 availability'],
    demo_available: true
  },
  {
    id: 'ai-quoting',
    name: 'AI-Powered Quoting',
    category: 'AI & Automation',
    description: 'Automatically generate accurate quotes based on project specs and historical data',
    tier: 'pro',
    popular: true,
    icon: Bot,
    benefits: ['80% faster quote generation', 'Improved accuracy', 'Consistent pricing'],
    demo_available: true
  },
  {
    id: 'smart-scheduling',
    name: 'Smart Scheduling',
    category: 'AI & Automation',
    description: 'AI optimizes crew schedules considering weather, skills, and travel time',
    tier: 'pro',
    icon: Calendar,
    benefits: ['Reduces travel time', 'Weather integration', 'Crew optimization'],
    demo_available: true
  },
  {
    id: 'voice-commands',
    name: 'Voice Commands',
    category: 'AI & Automation',
    description: 'Hands-free operation with voice recognition for field workers',
    tier: 'pro',
    icon: Phone,
    benefits: ['Hands-free operation', 'Field-friendly', 'Safety compliance'],
    demo_available: true
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics',
    category: 'AI & Automation',
    description: 'Predict project delays, cost overruns, and resource needs',
    tier: 'enterprise',
    icon: TrendingUp,
    benefits: ['Risk mitigation', 'Better planning', 'Cost control'],
    demo_available: false
  },
  {
    id: 'auto-notifications',
    name: 'Intelligent Notifications',
    category: 'AI & Automation',
    description: 'Smart alerts that learn what matters most to you',
    tier: 'starter',
    icon: Zap,
    benefits: ['Reduced noise', 'Priority-based', 'Customizable'],
    demo_available: false
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    category: 'AI & Automation',
    description: 'Automate repetitive tasks and approval processes',
    tier: 'pro',
    icon: Settings,
    benefits: ['Time savings', 'Consistency', 'Reduced errors'],
    demo_available: true
  },
  {
    id: 'ai-recommendations',
    name: 'Smart Recommendations',
    category: 'AI & Automation',
    description: 'AI suggests improvements for projects, pricing, and processes',
    tier: 'pro',
    icon: Star,
    benefits: ['Continuous improvement', 'Data-driven insights', 'Performance optimization'],
    demo_available: false
  },

  // Business Card & Contact Management (6 features)
  {
    id: 'business-card-scanner',
    name: 'Business Card Scanner',
    category: 'Contact Management',
    description: 'Instantly scan and digitize business cards with OCR technology',
    tier: 'starter',
    popular: true,
    icon: Camera,
    benefits: ['No manual data entry', 'Instant digitization', 'CRM integration'],
    demo_available: true
  },
  {
    id: 'contact-management',
    name: 'Advanced CRM',
    category: 'Contact Management',
    description: 'Complete contact and customer relationship management system',
    tier: 'pro',
    icon: Users,
    benefits: ['360° customer view', 'Communication history', 'Lead tracking'],
    demo_available: true
  },
  {
    id: 'lead-scoring',
    name: 'Lead Scoring',
    category: 'Contact Management',
    description: 'Automatically score and prioritize leads based on conversion probability',
    tier: 'pro',
    icon: TrendingUp,
    benefits: ['Better conversion rates', 'Focus on quality leads', 'Sales optimization'],
    demo_available: false
  },
  {
    id: 'contact-sync',
    name: 'Contact Synchronization',
    category: 'Contact Management',
    description: 'Sync contacts across all devices and team members',
    tier: 'starter',
    icon: Database,
    benefits: ['Always up-to-date', 'Team collaboration', 'No data loss'],
    demo_available: false
  },
  {
    id: 'communication-history',
    name: 'Communication Tracking',
    category: 'Contact Management',
    description: 'Track all emails, calls, and messages with each contact',
    tier: 'pro',
    icon: Phone,
    benefits: ['Complete history', 'Better follow-up', 'Team coordination'],
    demo_available: true
  },
  {
    id: 'client-portal',
    name: 'Client Portal',
    category: 'Contact Management',
    description: 'Give clients access to project updates, invoices, and documents',
    tier: 'pro',
    popular: true,
    icon: Globe,
    benefits: ['Client satisfaction', 'Transparency', 'Reduced inquiries'],
    demo_available: true
  },

  // Job Management (12 features)
  {
    id: 'project-dashboard',
    name: 'Project Dashboard',
    category: 'Job Management',
    description: 'Centralized view of all active projects with real-time updates',
    tier: 'starter',
    popular: true,
    icon: Building,
    benefits: ['Real-time overview', 'Status tracking', 'Quick access'],
    demo_available: true
  },
  {
    id: 'job-costing',
    name: 'Advanced Job Costing',
    category: 'Job Management',
    description: 'Track costs in real-time with budget alerts and profit margin tracking',
    tier: 'pro',
    icon: DollarSign,
    benefits: ['Real-time cost tracking', 'Budget alerts', 'Profit optimization'],
    demo_available: true
  },
  {
    id: 'change-orders',
    name: 'Change Order Management',
    category: 'Job Management',
    description: 'Streamline change order process with digital approvals',
    tier: 'pro',
    icon: FileText,
    benefits: ['Faster approvals', 'Clear documentation', 'Revenue protection'],
    demo_available: true
  },
  {
    id: 'milestone-tracking',
    name: 'Milestone Tracking',
    category: 'Job Management',
    description: 'Set and track project milestones with automatic notifications',
    tier: 'starter',
    icon: Star,
    benefits: ['Progress visibility', 'On-time delivery', 'Client communication'],
    demo_available: false
  },
  {
    id: 'resource-allocation',
    name: 'Resource Allocation',
    category: 'Job Management',
    description: 'Optimize crew and equipment allocation across projects',
    tier: 'pro',
    icon: Users,
    benefits: ['Resource optimization', 'Reduced conflicts', 'Better utilization'],
    demo_available: true
  },
  {
    id: 'project-templates',
    name: 'Project Templates',
    category: 'Job Management',
    description: 'Create reusable templates for common project types',
    tier: 'starter',
    icon: Layers,
    benefits: ['Faster setup', 'Consistency', 'Best practices'],
    demo_available: false
  },
  {
    id: 'task-dependencies',
    name: 'Task Dependencies',
    category: 'Job Management',
    description: 'Map task relationships and critical path analysis',
    tier: 'pro',
    icon: Layers,
    benefits: ['Better planning', 'Risk identification', 'Timeline optimization'],
    demo_available: true
  },
  {
    id: 'field-checklists',
    name: 'Digital Checklists',
    category: 'Job Management',
    description: 'Create and manage digital checklists for quality control',
    tier: 'starter',
    icon: FileText,
    benefits: ['Quality assurance', 'Compliance tracking', 'Digital records'],
    demo_available: true
  },
  {
    id: 'progress-photos',
    name: 'Progress Documentation',
    category: 'Job Management',
    description: 'Automated progress photo capture with GPS and timestamps',
    tier: 'starter',
    popular: true,
    icon: Camera,
    benefits: ['Visual progress tracking', 'Documentation', 'Client updates'],
    demo_available: true
  },
  {
    id: 'quality-control',
    name: 'Quality Control',
    category: 'Job Management',
    description: 'Digital quality inspections and punch list management',
    tier: 'pro',
    icon: Shield,
    benefits: ['Higher quality', 'Fewer callbacks', 'Client satisfaction'],
    demo_available: true
  },
  {
    id: 'multi-location',
    name: 'Multi-Location Support',
    category: 'Job Management',
    description: 'Manage projects across multiple locations from one platform',
    tier: 'enterprise',
    icon: MapPin,
    benefits: ['Centralized management', 'Scalability', 'Consistency'],
    demo_available: false
  },
  {
    id: 'project-collaboration',
    name: 'Team Collaboration',
    category: 'Job Management',
    description: 'Real-time collaboration tools for distributed teams',
    tier: 'pro',
    icon: Users,
    benefits: ['Better communication', 'Real-time updates', 'Team coordination'],
    demo_available: true
  },

  // Add more features here to reach 103+...
  // (This is a sample showing the structure - you would continue adding all 103+ features)
];

const categories = [
  'All Features',
  'AI & Automation',
  'Contact Management', 
  'Job Management',
  'Financial Management',
  'Time & Scheduling',
  'Mobile & AR',
  'Analytics & Reporting',
  'Integrations',
  'Communication',
  'Compliance & Legal',
  'Equipment & Inventory',
  'System & Settings'
];

const tierColors = {
  starter: 'bg-green-100 text-green-800 border-green-200',
  pro: 'bg-blue-100 text-blue-800 border-blue-200',
  enterprise: 'bg-purple-100 text-purple-800 border-purple-200'
};

export function ComprehensiveFeaturesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Features');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [filteredFeatures, setFilteredFeatures] = useState(allFeatures);

  useEffect(() => {
    let filtered = allFeatures;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(feature =>
        feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Features') {
      filtered = filtered.filter(feature => feature.category === selectedCategory);
    }

    // Filter by tier
    if (selectedTier !== 'all') {
      filtered = filtered.filter(feature => feature.tier === selectedTier);
    }

    setFilteredFeatures(filtered);
  }, [searchTerm, selectedCategory, selectedTier]);

  const handleDemoClick = (featureId: string) => {
    // In a real implementation, this would open a demo modal or navigate to demo
    console.log(`Opening demo for feature: ${featureId}`);
  };

  const popularFeatures = allFeatures.filter(f => f.popular);
  const newFeatures = allFeatures.filter(f => f.new);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-gray-900">
          103+ Powerful Features
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Replace 17+ separate tools with one comprehensive construction management platform. 
          Every feature designed to save time and increase profitability.
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{popularFeatures.length} Most Popular</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-blue-500" />
            <span>{newFeatures.length} New This Month</span>
          </div>
          <div className="flex items-center gap-1">
            <Play className="h-4 w-4 text-green-500" />
            <span>{allFeatures.filter(f => f.demo_available).length} Demo Available</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-2 border-gray-100">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0243D5] focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Tier Filter */}
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0243D5] focus:border-transparent"
            >
              <option value="all">All Plans</option>
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Filter className="h-4 w-4 mr-2" />
              {filteredFeatures.length} features found
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Features Highlight */}
      {selectedCategory === 'All Features' && !searchTerm && (
        <Card className="bg-gradient-to-r from-[#0243D5]/5 to-blue-50 border-[#0243D5]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Most Popular Features
            </CardTitle>
            <CardDescription>
              The features our contractors use most to save time and increase profits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularFeatures.slice(0, 6).map(feature => {
                const IconComponent = feature.icon;
                return (
                  <Card key={feature.id} className="border border-gray-200 hover:border-[#0243D5]/50 transition-colors">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#0243D5]/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-[#0243D5]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{feature.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={tierColors[feature.tier]} variant="outline">
                              {feature.tier}
                            </Badge>
                            {feature.demo_available && (
                              <Button
                                onClick={() => handleDemoClick(feature.id)}
                                size="sm"
                                variant="outline"
                                className="h-6 text-xs px-2"
                              >
                                <Play className="h-3 w-3 mr-1" />
                                Demo
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeatures.map(feature => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.id} 
              className="border border-gray-200 hover:border-[#0243D5]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#0243D5]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0243D5]/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-[#0243D5]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {feature.name}
                        {feature.popular && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                        {feature.new && (
                          <Badge className="bg-green-100 text-green-800 text-xs px-2 py-0">
                            NEW
                          </Badge>
                        )}
                      </CardTitle>
                      <Badge className={tierColors[feature.tier]} variant="outline" size="sm">
                        {feature.tier.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0243D5] rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {feature.demo_available && (
                    <Button
                      onClick={() => handleDemoClick(feature.id)}
                      size="sm"
                      className="bg-[#0243D5] hover:bg-[#0243D5]/90 text-white flex-1"
                    >
                      <Play className="h-3 w-3 mr-1" />
                      View Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#0243D5] text-[#0243D5] hover:bg-[#0243D5]/5 flex-1"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* No Results */}
      {filteredFeatures.length === 0 && (
        <Card className="border-2 border-dashed border-gray-200">
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No features found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Features');
                setSelectedTier('all');
              }}
              variant="outline"
              className="border-[#0243D5] text-[#0243D5]"
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-[#0243D5] to-blue-600 text-white border-0">
        <CardContent className="text-center py-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Construction Business?
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Join 1000+ contractors already using CONSTRUKTR to save time and increase profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-white text-[#0243D5] hover:bg-gray-100 font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
          <div className="mt-6 text-sm text-blue-200">
            ⭐ 14-day free trial • No credit card required • Setup in 5 minutes
          </div>
        </CardContent>
      </Card>
    </div>
  );
}