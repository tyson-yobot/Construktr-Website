import { motion } from "framer-motion";
import { useState } from "react";
import { 
  CheckCircle2, X, Sparkles, Brain, Eye, Cpu, Zap, Crown,
  ArrowRight, TrendingUp, Shield, Bot
} from "lucide-react";

/**
 * Competitive AI Comparison - Positions CONSTRUKTR as the clear AI leader
 * Shows how 17 AI tools create an unfair advantage over basic competitors
 */

interface CompetitorFeature {
  feature: string;
  construktr: string | boolean;
  competitor1: string | boolean; // ServiceTitan
  competitor2: string | boolean; // Jobber  
  competitor3: string | boolean; // ServiceM8
  isAI?: boolean;
  description?: string;
}

const competitorData: CompetitorFeature[] = [
  {
    feature: "AI-Powered Quote Generation",
    construktr: "GPT-4 powered with success prediction",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "GPT-4 analyzes projects, generates line items, optimizes pricing"
  },
  {
    feature: "AI Business Assistant", 
    construktr: "Advanced pattern analysis & strategic insights",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "Deep learning analyzes your data for growth opportunities"
  },
  {
    feature: "AI Route Optimization",
    construktr: "ML with traffic, weather & job priority analysis",
    competitor1: "Basic routing",
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "Machine learning saves 2.5 hours daily with smart routing"
  },
  {
    feature: "Voice AI Commands",
    construktr: "Advanced NLP for natural conversation",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "Natural language processing understands context"
  },
  {
    feature: "24/7 AI Call Operator",
    construktr: "GPT-4 voice agent handles calls & scheduling",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "AI answers calls, schedules jobs, takes messages 24/7"
  },
  {
    feature: "Computer Vision Part Finder",
    construktr: "CV identifies 1000+ parts instantly",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "Point camera at any part for instant identification"
  },
  {
    feature: "AI Document Scanner", 
    construktr: "99.7% OCR accuracy with categorization",
    competitor1: "Basic scanning",
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "Advanced OCR extracts data, categorizes automatically"
  },
  {
    feature: "AI Photo Estimating",
    construktr: "Computer vision with AR overlay",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "AI measures from photos, AR provides precise estimates"
  },
  {
    feature: "Predictive Analytics",
    construktr: "Deep learning revenue forecasting",
    competitor1: "Basic reports",
    competitor2: "Basic reports",
    competitor3: false,
    isAI: true,
    description: "Deep learning predicts trends, identifies opportunities"
  },
  {
    feature: "Margin Guardrails",
    construktr: "AI monitors profits in real-time",
    competitor1: false,
    competitor2: false,
    competitor3: false,
    isAI: true,
    description: "AI prevents losses with smart profit protection"
  },
  {
    feature: "Total AI Tools",
    construktr: "17 Advanced AI Tools",
    competitor1: "2 Basic Automations",
    competitor2: "1 Basic Feature",
    competitor3: "0 AI Features",
    isAI: true
  },
  {
    feature: "Job Management",
    construktr: true,
    competitor1: true,
    competitor2: true,
    competitor3: true,
    isAI: false
  },
  {
    feature: "Scheduling",
    construktr: true,
    competitor1: true,
    competitor2: true,
    competitor3: true,
    isAI: false
  },
  {
    feature: "Payment Processing",
    construktr: true,
    competitor1: true,
    competitor2: true,
    competitor3: "Limited",
    isAI: false
  },
  {
    feature: "QuickBooks Integration",
    construktr: "Bi-directional sync",
    competitor1: "Basic sync",
    competitor2: "Basic sync", 
    competitor3: false,
    isAI: false
  },
  {
    feature: "Monthly Price",
    construktr: "$199 (Pro plan)",
    competitor1: "$229+ per user",
    competitor2: "$59+ per user",
    competitor3: "$29+ per user",
    isAI: false
  }
];

const competitors = [
  {
    name: "CONSTRUKTR",
    subtitle: "AI-First Platform",
    logo: "🚀",
    color: "bg-gradient-to-br from-blue-600 to-purple-600",
    textColor: "text-white",
    isUs: true
  },
  {
    name: "ServiceTitan",
    subtitle: "Legacy Platform",
    logo: "🏢",
    color: "bg-gray-200",
    textColor: "text-gray-700",
    isUs: false
  },
  {
    name: "Jobber", 
    subtitle: "Basic Software",
    logo: "📋",
    color: "bg-gray-200",
    textColor: "text-gray-700",
    isUs: false
  },
  {
    name: "ServiceM8",
    subtitle: "Mobile App",
    logo: "📱",
    color: "bg-gray-200", 
    textColor: "text-gray-700",
    isUs: false
  }
];

const aiAdvantages = [
  {
    icon: Brain,
    title: "5 Years Ahead",
    description: "While competitors offer basic features, CONSTRUKTR delivers enterprise AI",
    metric: "17 AI tools vs 0-2"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "AI automation saves 15+ hours weekly, increases profits 25%",
    metric: "300% faster quotes"
  },
  {
    icon: Shield,
    title: "Future-Proof",
    description: "Built on GPT-4, Computer Vision, Deep Learning - scales with AI evolution",
    metric: "Enterprise-grade AI"
  }
];

export default function CompetitiveAIComparison() {
  const [showAIOnly, setShowAIOnly] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const filteredFeatures = showAIOnly 
    ? competitorData.filter(item => item.isAI)
    : competitorData;

  const renderFeatureValue = (value: string | boolean, isOurs: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <CheckCircle2 className={`w-5 h-5 ${isOurs ? 'text-white' : 'text-green-500'}`} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <X className="w-5 h-5 text-gray-400" />
        </div>
      );
    }
    
    return (
      <div className={`text-sm text-center ${isOurs ? 'text-white font-semibold' : 'text-gray-700'}`}>
        {value}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6 border border-orange-200">
            <Crown className="w-4 h-4" />
            Competitive Analysis
            <TrendingUp className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6" style={{ letterSpacing: '-0.02em' }}>
            Why CONSTRUKTR Is
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              5 Years Ahead
            </span>
            <br />
            of the Competition
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-4xl mx-auto mb-8 leading-relaxed">
            While competitors offer basic automation, CONSTRUKTR delivers <strong>17 AI-powered tools</strong> using 
            cutting-edge technology. See the difference advanced AI makes.
          </p>

          {/* AI vs Basic Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setShowAIOnly(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !showAIOnly 
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-border-light)]'
              }`}
            >
              All Features
            </button>
            <button
              onClick={() => setShowAIOnly(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                showAIOnly 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-border-light)]'
              }`}
            >
              <Bot className="w-4 h-4" />
              AI Features Only
            </button>
          </div>
        </motion.div>

        {/* AI Advantages Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {aiAdvantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{advantage.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">{advantage.description}</p>
                <div className="text-[var(--color-primary)] font-bold text-lg">{advantage.metric}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[var(--color-border-light)]"
        >
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-[var(--color-border-light)]">
            <div className="font-bold text-[var(--color-text-primary)]">Feature</div>
            {competitors.map((competitor) => (
              <div key={competitor.name} className={`text-center p-4 rounded-xl ${competitor.color}`}>
                <div className={`font-bold text-lg ${competitor.textColor}`}>
                  {competitor.logo} {competitor.name}
                </div>
                <div className={`text-sm ${competitor.textColor} opacity-80`}>
                  {competitor.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[var(--color-border-light)]">
            {filteredFeatures.map((item, index) => (
              <motion.div
                key={item.feature}
                onMouseEnter={() => setHoveredFeature(item.feature)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`grid grid-cols-5 gap-4 p-4 hover:bg-blue-50/50 transition-all duration-300 ${
                  item.isAI ? 'bg-gradient-to-r from-purple-50/30 to-blue-50/30' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.isAI && <Sparkles className="w-4 h-4 text-purple-500" />}
                  <div>
                    <div className="font-semibold text-[var(--color-text-primary)]">{item.feature}</div>
                    {item.description && hoveredFeature === item.feature && (
                      <div className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xs">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  {renderFeatureValue(item.construktr, true)}
                </div>
                <div className="flex items-center justify-center p-2">
                  {renderFeatureValue(item.competitor1)}
                </div>
                <div className="flex items-center justify-center p-2">
                  {renderFeatureValue(item.competitor2)}
                </div>
                <div className="flex items-center justify-center p-2">
                  {renderFeatureValue(item.competitor3)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl text-white shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Get 5 Years Ahead?</h3>
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Don't get left behind with basic software. Join forward-thinking contractors who chose 
              the AI advantage and are dominating their markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Zap className="w-5 h-5" />
                Get AI Advantage Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 flex items-center gap-3">
                <Bot className="w-5 h-5" />
                See AI Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}