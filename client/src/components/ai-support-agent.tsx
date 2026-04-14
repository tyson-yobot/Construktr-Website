import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2, 
  X,
  Clock,
  Calculator,
  FileText,
  Phone,
  Mail,
  Wrench
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'text' | 'quick_reply' | 'action';
  actions?: QuickAction[];
}

interface QuickAction {
  id: string;
  label: string;
  type: 'roi' | 'demo' | 'pricing' | 'features' | 'contact' | 'trial';
}

const predefinedResponses = {
  greeting: {
    content: "👋 Hi! I'm CONSTRUKTR's AI assistant. I can help you learn about our construction management platform, calculate your ROI, schedule a demo, or answer any questions about our 103+ features!",
    actions: [
      { id: 'roi', label: 'Calculate My ROI', type: 'roi' as const },
      { id: 'demo', label: 'Schedule Demo', type: 'demo' as const },
      { id: 'features', label: 'See All Features', type: 'features' as const },
      { id: 'pricing', label: 'View Pricing', type: 'pricing' as const }
    ]
  },
  roi: {
    content: "Great choice! Our ROI calculator will show you exactly how much time and money CONSTRUKTR can save your business. On average, contractors save $15,000+ annually and see a 300%+ ROI. Let me open that for you! 📊",
    actions: [
      { id: 'demo', label: 'Schedule Demo Too', type: 'demo' as const },
      { id: 'trial', label: 'Start Free Trial', type: 'trial' as const }
    ]
  },
  features: {
    content: "CONSTRUKTR includes 103+ features across 17 categories! Here are our most popular:\n\n🤖 AI-Powered Quoting\n📱 Business Card Scanner\n📊 Project Management\n💰 Payment Processing\n🗓️ Smart Scheduling\n📷 AR Photo Documentation\n⏰ Time Tracking\n💼 CRM Integration\n\nWant to see them all in action?",
    actions: [
      { id: 'demo', label: 'Schedule Live Demo', type: 'demo' as const },
      { id: 'trial', label: 'Try Free for 14 Days', type: 'trial' as const }
    ]
  },
  pricing: {
    content: "Our pricing is designed to grow with your business:\n\n💼 **Starter Plan** - $49/month\n• Perfect for small teams\n• Up to 10 quotes/month\n• Basic features\n\n🚀 **Pro Plan** - $99/month (Most Popular)\n• AI-powered tools\n• Unlimited quotes\n• Advanced features\n\n🏢 **Enterprise** - $199/month\n• Custom integrations\n• White-label options\n• Priority support\n\nAll plans include a 14-day free trial!",
    actions: [
      { id: 'trial', label: 'Start Free Trial', type: 'trial' as const },
      { id: 'demo', label: 'See Demo First', type: 'demo' as const }
    ]
  },
  demo: {
    content: "Perfect! I'd love to show you CONSTRUKTR in action. Our demos typically cover:\n\n✅ Complete walkthrough of all 103+ features\n✅ Live ROI calculation for your business\n✅ Integration with your existing tools\n✅ Custom setup recommendations\n\nDemos take about 30 minutes and you'll see exactly how CONSTRUKTR can transform your business!",
    actions: [
      { id: 'contact', label: 'Schedule Now', type: 'contact' as const },
      { id: 'trial', label: 'Try Self-Guided Tour', type: 'trial' as const }
    ]
  },
  trial: {
    content: "Excellent! With our 14-day free trial, you get:\n\n🎯 Full access to all Pro features\n🎯 Personal onboarding session\n🎯 Data migration assistance\n🎯 24/7 support\n🎯 No credit card required\n\nMost contractors see results within the first week. Ready to get started?",
    actions: [
      { id: 'contact', label: 'Start Trial Now', type: 'contact' as const },
      { id: 'demo', label: 'Demo First', type: 'demo' as const }
    ]
  }
};

const smartResponses = {
  'time tracking': 'Our time tracking includes GPS verification, photo timestamps, and automatic break detection. It integrates with payroll and project costing. Want to see it in action?',
  'business card': 'Our business card scanner uses advanced OCR to instantly capture contact info and automatically adds it to your CRM. No more manual data entry!',
  'ai quoting': 'Our AI learns from your past quotes to suggest pricing, materials, and timelines. It can reduce quote prep time by 80% while improving accuracy.',
  'payment': 'We integrate with Stripe, Square, and other payment processors. You can send invoices, accept payments, and track receivables all in one place.',
  'schedule': 'Smart scheduling considers weather, crew availability, equipment, and travel time to optimize your entire week automatically.',
  'reports': 'Generate profit/loss reports, project timelines, crew productivity, and cash flow projections with one click.',
  'integration': 'We integrate with QuickBooks, Procore, Google Calendar, Stripe, and 50+ other tools you already use.',
  'mobile': 'Full mobile app for iOS and Android with offline sync. Your crew can use it on job sites without internet connection.'
};

export function AISupportAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(predefinedResponses.greeting);
    }
  }, [isOpen]);

  const addBotMessage = (response: { content: string; actions?: QuickAction[] }) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: response.content,
        isBot: true,
        timestamp: new Date(),
        type: response.actions ? 'quick_reply' : 'text',
        actions: response.actions
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getSmartResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for specific keywords
    for (const [keyword, response] of Object.entries(smartResponses)) {
      if (lowercaseInput.includes(keyword)) {
        return response;
      }
    }
    
    // Default responses based on intent
    if (lowercaseInput.includes('price') || lowercaseInput.includes('cost')) {
      return predefinedResponses.pricing.content;
    }
    
    if (lowercaseInput.includes('demo') || lowercaseInput.includes('show')) {
      return predefinedResponses.demo.content;
    }
    
    if (lowercaseInput.includes('trial') || lowercaseInput.includes('try')) {
      return predefinedResponses.trial.content;
    }
    
    if (lowercaseInput.includes('feature') || lowercaseInput.includes('what can')) {
      return predefinedResponses.features.content;
    }
    
    // Default helpful response
    return "That's a great question! CONSTRUKTR is a comprehensive construction management platform with 103+ features. I can help you with pricing, features, scheduling a demo, or calculating your ROI. What would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    const response = getSmartResponse(inputValue);
    
    setTimeout(() => {
      addBotMessage({ content: response });
    }, 1500);
    
    setInputValue('');
  };

  const handleQuickAction = (action: QuickAction) => {
    addUserMessage(action.label);
    
    setTimeout(() => {
      const response = predefinedResponses[action.type];
      if (response) {
        addBotMessage(response);
      }
      
      // Handle specific actions
      if (action.type === 'roi') {
        setTimeout(() => {
          const roiElement = document.getElementById('roi-calculator');
          roiElement?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#0243D5] hover:bg-[#0243D5]/90 shadow-lg z-50 flex items-center justify-center"
        size="lg"
      >
        <MessageCircle className="h-8 w-8 text-white" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">AI</span>
        </div>
      </Button>
    );
  }

  return (
    <Card 
      className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}
    >
      {/* Header */}
      <CardHeader className="pb-3 border-b bg-[#0243D5] text-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg">CONSTRUKTR AI</CardTitle>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Online • Ready to help</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          {/* Messages */}
          <CardContent className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] space-y-2`}>
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-white border border-gray-200 text-gray-900' 
                        : 'bg-[#0243D5] text-white'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.isBot && (
                        <Bot className="h-4 w-4 mt-1 text-[#0243D5] flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-line text-sm leading-relaxed">
                        {message.content}
                      </div>
                      {!message.isBot && (
                        <User className="h-4 w-4 mt-1 text-white flex-shrink-0" />
                      )}
                    </div>
                  </div>
                  
                  {message.actions && (
                    <div className="flex flex-wrap gap-2">
                      {message.actions.map((action) => (
                        <Button
                          key={action.id}
                          onClick={() => handleQuickAction(action)}
                          variant="outline"
                          size="sm"
                          className="text-xs border-[#0243D5] text-[#0243D5] hover:bg-[#0243D5]/10"
                        >
                          {action.type === 'roi' && <Calculator className="h-3 w-3 mr-1" />}
                          {action.type === 'demo' && <FileText className="h-3 w-3 mr-1" />}
                          {action.type === 'contact' && <Phone className="h-3 w-3 mr-1" />}
                          {action.type === 'trial' && <Wrench className="h-3 w-3 mr-1" />}
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-[#0243D5]" />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about features, pricing, or schedule a demo..."
                className="flex-1 border-gray-300 focus:border-[#0243D5] focus:ring-[#0243D5]"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#0243D5] hover:bg-[#0243D5]/90 text-white p-2"
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Typically responds in under 1 minute
            </div>
          </div>
        </>
      )}
    </Card>
  );
}