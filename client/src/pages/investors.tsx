import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  Lock,
  FileText,
  BarChart3,
  Globe,
  Shield,
  Eye,
  EyeOff,
  User,
  Mail,
  Building,
  ExternalLink,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const marketStats = [
  {
    title: "Total Addressable Market",
    value: "$2.1T",
    description: "U.S. service industry annual revenue",
    icon: Globe,
    color: "text-blue-600"
  },
  {
    title: "Serviceable Market",
    value: "$680B",
    description: "Digitizable service businesses",
    icon: Target,
    color: "text-green-600"
  },
  {
    title: "Current Users",
    value: "50K+",
    description: "Active service professionals",
    icon: Users,
    color: "text-purple-600"
  },
  {
    title: "Annual Growth Rate",
    value: "245%",
    description: "Year-over-year user growth",
    icon: TrendingUp,
    color: "text-orange-600"
  }
];

const keyMetrics = [
  {
    metric: "Monthly Recurring Revenue",
    value: "$2.8M",
    growth: "+38% MoM",
    positive: true
  },
  {
    metric: "Customer Acquisition Cost",
    value: "$47",
    growth: "-23% vs Q3",
    positive: true
  },
  {
    metric: "Lifetime Value",
    value: "$1,240",
    growth: "+15% vs Q3",
    positive: true
  },
  {
    metric: "Net Revenue Retention",
    value: "127%",
    growth: "+5% vs Q3",
    positive: true
  },
  {
    metric: "Gross Margin",
    value: "84%",
    growth: "Steady",
    positive: true
  },
  {
    metric: "Cash Runway",
    value: "36 months",
    growth: "Post Series A",
    positive: true
  }
];

const milestones = [
  {
    quarter: "Q4 2024",
    title: "Series A Completion",
    description: "$12M raised from tier-1 VCs",
    status: "completed"
  },
  {
    quarter: "Q1 2025",
    title: "50K User Milestone",
    description: "Crossed 50,000 active users",
    status: "completed"
  },
  {
    quarter: "Q2 2025",
    title: "Enterprise Launch",
    description: "Team management features for 500+ employee companies",
    status: "in-progress"
  },
  {
    quarter: "Q3 2025",
    title: "International Expansion",
    description: "Launch in Canada and UK markets",
    status: "planned"
  },
  {
    quarter: "Q4 2025",
    title: "AI-Powered Scheduling",
    description: "Machine learning optimization for job routing",
    status: "planned"
  },
  {
    quarter: "Q1 2026",
    title: "Series B Target",
    description: "$50M raise for global expansion",
    status: "planned"
  }
];

const competitiveAdvantages = [
  {
    title: "Mobile-First Architecture",
    description: "Built for field workers, not office managers",
    icon: Zap
  },
  {
    title: "AI-Powered Quoting",
    description: "Proprietary algorithms trained on 500K+ historical jobs",
    icon: BarChart3
  },
  {
    title: "Embedded Payments",
    description: "Seamless payment processing with 2.1% take rate",
    icon: DollarSign
  },
  {
    title: "Network Effects",
    description: "Customer referrals drive 60% of new acquisitions",
    icon: Users
  }
];

export default function Investors() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    showPassword: false
  });
  const [meetingForm, setMeetingForm] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would authenticate against a backend
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  const handleMeetingRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle meeting request submission
    console.log("Meeting request submitted:", meetingForm);
  };

  const downloadDocument = (docType: string) => {
    // In a real implementation, this would generate or serve actual documents
    console.log(`Downloading ${docType}`);
  };

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-electric-blue mr-3" />
              <span className="text-electric-blue font-semibold">INVESTOR PORTAL</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Growth-Stage
              <span className="text-electric-blue"> Investment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming the $2.1T service industry with AI-powered business management tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              The service industry represents one of the largest untapped markets for digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-[var(--clr-text-2)] text-sm">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-[var(--clr-text-2)] leading-relaxed mb-6">
                CONSTRUKTR is building the operating system for service businesses worldwide. We're not just another SaaS tool, we're creating the infrastructure that will power the next generation of service professionals.
              </p>
              <p className="text-lg text-[var(--clr-text-2)] leading-relaxed mb-8">
                By 2030, we aim to serve 1M+ service professionals, process $100B+ in transactions annually, and become the default platform for anyone starting or scaling a service business.
              </p>
              
              <div className="space-y-4">
                {competitiveAdvantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={advantage.title} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-electric-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {advantage.title}
                        </h3>
                        <p className="text-[var(--clr-text-2)] text-sm">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
              <div className="space-y-6">
                {keyMetrics.map((metric, index) => (
                  <div key={metric.metric} className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">
                        {metric.metric}
                      </div>
                      <div className={`text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.growth}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-electric-blue">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Growth Roadmap
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Our path to becoming the global leader in service business software
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-blue/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.quarter}-${milestone.title}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'in-progress' ? 'bg-electric-blue' :
                    'bg-gray-300'
                  }`}></div>
                  <div className="ml-16 bg-[var(--clr-surface)] p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="text-electric-blue font-bold">
                        {milestone.quarter}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                        milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {milestone.status.replace('-', ' ').toUpperCase()}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[var(--clr-text-2)]">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Access */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Investment Documents
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Access detailed financial information and legal documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Public Documents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 text-electric-blue mr-3" />
                Public Documents
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-white">Pitch Deck</div>
                    <div className="text-sm text-[var(--clr-text-2)]">Executive summary and vision</div>
                  </div>
                  <Button
                    onClick={() => downloadDocument('pitch-deck')}
                    className="bg-electric-blue text-white hover:bg-blue-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-white">Market Analysis</div>
                    <div className="text-sm text-[var(--clr-text-2)]">Industry research and opportunity</div>
                  </div>
                  <Button
                    onClick={() => downloadDocument('market-analysis')}
                    className="bg-electric-blue text-white hover:bg-blue-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-white">Product Demo</div>
                    <div className="text-sm text-[var(--clr-text-2)]">Interactive product walkthrough</div>
                  </div>
                  <Button
                    onClick={() => downloadDocument('product-demo')}
                    className="bg-electric-blue text-white hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Private Documents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 text-electric-blue mr-3" />
                Private Access
              </h3>
              
              {!isLoggedIn ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="investor@fund.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        type={loginForm.showPassword ? "text" : "password"}
                        required
                        value={loginForm.password}
                        onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Enter access code"
                        className="w-full pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setLoginForm(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {loginForm.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-electric-blue text-white hover:bg-blue-700">
                    Access Documents
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Access credentials provided to qualified investors only
                  </p>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center text-green-600 mb-4">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Access Granted</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-white">Financial Statements</div>
                      <div className="text-sm text-[var(--clr-text-2)]">Q4 2024 audited financials</div>
                    </div>
                    <Button
                      onClick={() => downloadDocument('financials')}
                      className="bg-electric-blue text-white hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-white">SAFE Agreement</div>
                      <div className="text-sm text-[var(--clr-text-2)]">Series B investment terms</div>
                    </div>
                    <Button
                      onClick={() => downloadDocument('safe-agreement')}
                      className="bg-electric-blue text-white hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-white">Cap Table</div>
                      <div className="text-sm text-[var(--clr-text-2)]">Current ownership structure</div>
                    </div>
                    <Button
                      onClick={() => downloadDocument('cap-table')}
                      className="bg-electric-blue text-white hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <Button
                    onClick={() => setIsLoggedIn(false)}
                    variant="outline"
                    className="w-full mt-4"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meeting CTA */}
      <section className="py-20 gradient-electric text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Schedule a Meeting with Tyson
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect directly with our CEO to discuss investment opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--clr-surface)]/10 backdrop-blur-sm p-8 rounded-3xl"
          >
            <form onSubmit={handleMeetingRequest} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={meetingForm.name}
                    onChange={(e) => setMeetingForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-[var(--clr-surface)] text-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={meetingForm.email}
                    onChange={(e) => setMeetingForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-[var(--clr-surface)] text-white"
                    placeholder="john@fund.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Company/Fund *
                  </label>
                  <Input
                    type="text"
                    required
                    value={meetingForm.company}
                    onChange={(e) => setMeetingForm(prev => ({ ...prev, company: e.target.value }))}
                    className="bg-[var(--clr-surface)] text-white"
                    placeholder="Venture Capital Partners"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Title
                  </label>
                  <Input
                    type="text"
                    value={meetingForm.title}
                    onChange={(e) => setMeetingForm(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-[var(--clr-surface)] text-white"
                    placeholder="Managing Partner"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={meetingForm.message}
                  onChange={(e) => setMeetingForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 bg-[var(--clr-surface)] text-white rounded-lg resize-none"
                  placeholder="Tell us about your investment focus and what interests you about CONSTRUKTR..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[var(--clr-surface)] text-electric-blue py-4 text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Request Meeting with Tyson
              </Button>
              
              <p className="text-center text-blue-100 text-sm">
                We typically respond within 24 hours to schedule qualified meetings
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}