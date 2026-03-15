import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Brain, Sparkles, Mic, Phone, Navigation, Camera, 
  FileText, Shield, Search, BarChart3, Calculator,
  ArrowRight, CheckCircle2, Zap, Route, Bot
} from "lucide-react";

/**
 * AI Tools Showcase - Highlighting CONSTRUKTR's 17 Advanced AI Capabilities
 * Positions CONSTRUKTR as the most advanced AI-powered construction platform
 */

interface AITool {
  id: string;
  title: string;
  description: string;
  icon: any;
  badge: string;
  gradient: string;
  roiMetric: string;
  category: 'intelligence' | 'automation' | 'analysis' | 'field';
}

const aiTools: AITool[] = [
  {
    id: 'quote-builder',
    title: 'AI Quote Builder',
    description: 'GPT-4 analyzes projects, generates line items, optimizes pricing & predicts success rates',
    icon: Calculator,
    badge: 'GPT-4',
    gradient: 'from-blue-500 to-cyan-500',
    roiMetric: '60% faster quotes',
    category: 'intelligence'
  },
  {
    id: 'business-assistant', 
    title: 'AI Business Assistant',
    description: 'Advanced AI analyzes patterns, predicts trends, provides strategic insights for growth',
    icon: Brain,
    badge: 'Deep Learning',
    gradient: 'from-purple-500 to-pink-500',
    roiMetric: '25% revenue growth',
    category: 'intelligence'
  },
  {
    id: 'scheduler-pro',
    title: 'AI Scheduler Pro', 
    description: 'Machine learning optimizes routes, predicts delays, auto-assigns crews by skills',
    icon: Navigation,
    badge: 'ML + GPS',
    gradient: 'from-green-500 to-emerald-500',
    roiMetric: '2.5 hrs saved daily',
    category: 'automation'
  },
  {
    id: 'voice-commands',
    title: 'AI Voice Commands',
    description: 'Advanced NLP understands context, creates quotes, schedules crews naturally',
    icon: Mic,
    badge: 'NLP',
    gradient: 'from-violet-500 to-purple-500',
    roiMetric: 'Hands-free control',
    category: 'field'
  },
  {
    id: 'call-operator',
    title: 'AI Call Operator',
    description: '24/7 AI answers calls, schedules jobs, takes messages with human-like conversation',
    icon: Phone,
    badge: 'GPT-4 Voice',
    gradient: 'from-pink-500 to-rose-500',
    roiMetric: '24/7 availability',
    category: 'automation'
  },
  {
    id: 'route-optimizer',
    title: 'AI Route Optimizer',
    description: 'ML analyzes traffic patterns, weather, job priorities for optimal routing & fuel efficiency',
    icon: Route,
    badge: 'ML + Weather',
    gradient: 'from-orange-500 to-amber-500',
    roiMetric: '30% fuel savings',
    category: 'automation'
  },
  {
    id: 'document-scanner',
    title: 'AI Document Scanner',
    description: 'Advanced OCR extracts data, categorizes documents, auto-populates fields with 99.7% accuracy',
    icon: FileText,
    badge: 'OCR + AI',
    gradient: 'from-indigo-500 to-blue-500',
    roiMetric: '99.7% accuracy',
    category: 'field'
  },
  {
    id: 'photo-estimating',
    title: 'Photo Estimating & AR',
    description: 'Computer vision measures from photos, AR overlay provides precise estimates',
    icon: Camera,
    badge: 'Computer Vision',
    gradient: 'from-amber-500 to-orange-500',
    roiMetric: '90% faster estimates',
    category: 'field'
  },
  {
    id: 'margin-guardrails',
    title: 'Margin Guardrails',
    description: 'AI monitors profit margins in real-time, prevents losses with smart alerts',
    icon: Shield,
    badge: 'AI + Analytics',
    gradient: 'from-emerald-500 to-green-500',
    roiMetric: '15% profit protection',
    category: 'analysis'
  },
  {
    id: 'part-finder',
    title: 'AI Part Finder',
    description: 'Computer vision identifies parts, AI matches suppliers, predicts availability & pricing',
    icon: Search,
    badge: 'CV + AI',
    gradient: 'from-red-500 to-pink-500',
    roiMetric: '1000+ parts DB',
    category: 'field'
  },
  {
    id: 'business-intelligence',
    title: 'AI Business Intelligence',
    description: 'Deep learning predicts revenue trends, identifies opportunities, recommends actions',
    icon: BarChart3,
    badge: 'Deep Learning',
    gradient: 'from-cyan-500 to-blue-500',
    roiMetric: 'Predictive insights',
    category: 'analysis'
  }
];

const categories = [
  { id: 'all', name: 'All AI Tools', count: aiTools.length },
  { id: 'intelligence', name: 'AI Intelligence', count: aiTools.filter(t => t.category === 'intelligence').length },
  { id: 'automation', name: 'Smart Automation', count: aiTools.filter(t => t.category === 'automation').length },
  { id: 'analysis', name: 'Predictive Analysis', count: aiTools.filter(t => t.category === 'analysis').length },
  { id: 'field', name: 'Field AI', count: aiTools.filter(t => t.category === 'field').length },
];

export default function AIToolsShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const filteredTools = activeCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 border border-blue-200">
            <Bot className="w-4 h-4" />
            17 Advanced AI Tools
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6" style={{ letterSpacing: '-0.02em' }}>
            The World's Most Advanced
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Construction Platform
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-4xl mx-auto mb-8 leading-relaxed">
            While competitors offer basic automation, CONSTRUKTR delivers <strong>17 AI-powered tools</strong> using 
            GPT-4, Deep Learning, Computer Vision, and Machine Learning. Built for contractors who think 5 years ahead.
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">GPT-4 Powered</span>
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold">Deep Learning</span>
            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-semibold">Computer Vision</span>
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold">Machine Learning</span>
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-semibold">Natural Language</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                  : 'bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/10 border border-[var(--color-border-light)]'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                className={`group relative bg-white rounded-2xl p-8 border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 ${
                  hoveredTool === tool.id ? 'scale-105' : ''
                }`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with gradient */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold mb-4 border border-[var(--color-primary)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  {tool.badge}
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {tool.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* ROI Metric */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-success)]">
                    <CheckCircle2 className="w-4 h-4" />
                    {tool.roiMetric}
                  </div>
                  
                  <ArrowRight className={`w-5 h-5 text-[var(--color-primary)] transform transition-transform duration-300 ${
                    hoveredTool === tool.id ? 'translate-x-1' : ''
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-bold">See All 17 AI Tools in Action</h3>
            </div>
            <p className="text-lg text-blue-100 max-w-2xl">
              Book a demo to see how CONSTRUKTR's advanced AI gives you an unfair advantage over competitors still using basic software.
            </p>
            <button 
              onClick={() => {
                const demoSection = document.getElementById('see-in-action');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/demos';
                }
              }}
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Book AI Demo → See the Future
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}