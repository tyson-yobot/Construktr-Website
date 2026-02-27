import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Wrench, Calculator, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const initialMessages: Message[] = [
  {
    id: '1',
    type: 'bot',
    content: "👋 Hi! I'm CONSTRUKTR's AI assistant. I help contractors like you with quotes, scheduling, and business questions. How can I help you today?",
    timestamp: new Date(),
    suggestions: [
      "How does AI quoting work?",
      "Show me pricing plans",
      "Schedule a demo",
      "Compare with competitors"
    ]
  }
];

const quickResponses = {
  "How does AI quoting work?": {
    content: "Our AI analyzes your past jobs, local market rates, and material costs to generate accurate quotes in under 60 seconds. It learns from your pricing patterns and gets more accurate over time. Would you like to see a demo?",
    suggestions: ["Yes, show me a demo", "What about scheduling features?", "How accurate are the quotes?"]
  },
  "Show me pricing plans": {
    content: "CONSTRUKTR™ is $49/month with all features included - unlimited jobs, AI quotes, mobile apps, and 24/7 support. We're offering 50% off your first 3 months. Ready to start free trial?",
    suggestions: ["Start free trial", "What's included?", "Compare to other tools"]
  },
  "Schedule a demo": {
    content: "Perfect! I can show you a live demo right now. You'll see AI quoting, smart scheduling, and payment processing in action. It takes about 10 minutes. Sound good?",
    suggestions: ["Yes, start demo", "Tell me more first", "What will I see?"]
  },
  "What about scheduling features?": {
    content: "Our smart scheduling optimizes routes, considers weather, and automatically sends customer updates. Contractors save 2+ hours daily on average. Plus it integrates with your existing calendar!",
    suggestions: ["Show route optimization", "How does weather integration work?", "See customer communication"]
  }
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showIdleMessage, setShowIdleMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show idle message after 3 seconds when chatbot is closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowIdleMessage(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      setShowIdleMessage(false);
    }
  }, [isOpen]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = quickResponses[content as keyof typeof quickResponses] || {
        content: "That's a great question! Our team of contractor specialists would love to give you a personalized answer. Would you like to schedule a quick 5-minute call, or should I connect you with our live chat?",
        suggestions: ["Schedule a call", "Live chat", "Send me more info"]
      };

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
        
        {/* Notification Badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, duration: 0.3 }}
        >
          <span className="text-white text-xs font-bold">1</span>
        </motion.div>

        {/* Idle Message */}
        <AnimatePresence>
          {showIdleMessage && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute right-20 top-2 max-w-xs"
            >
              <div className="card-default relative">
                {/* Speech bubble arrow */}
                <div className="absolute right-[-8px] top-4 w-4 h-4 bg-[var(--clr-surface)] border-r border-b border-gray-200 rotate-45"></div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 font-medium mb-1">
                      Hi 👋 I'm your CONSTRUKTR™ AI Assistant.
                    </p>
                    <p className="text-xs text-[var(--clr-text-2)]">
                      How can I help you today?
                    </p>
                  </div>
                </div>
                
                {/* Close button */}
                <button
                  onClick={() => setShowIdleMessage(false)}
                  className="absolute top-2 right-2 w-4 h-4 text-gray-400 hover:text-[var(--clr-text-2)] transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-[var(--clr-surface)] rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[var(--clr-surface)]/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">CONSTRUKTR™ AI</h3>
                    <p className="text-xs opacity-90">Contractor Assistant</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-[var(--clr-surface)]/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex space-x-2 mt-3">
                <Badge variant="secondary" className="bg-[var(--clr-surface)]/20 text-white border-white/30 text-xs">
                  <Calculator className="w-3 h-3 mr-1" />
                  AI Quotes
                </Badge>
                <Badge variant="secondary" className="bg-[var(--clr-surface)]/20 text-white border-white/30 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  Scheduling
                </Badge>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`p-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-[var(--clr-surface)] border border-gray-200'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    
                    {/* Suggestions */}
                    {message.suggestions && message.type === 'bot' && (
                      <div className="mt-2 space-y-1">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 p-2 rounded-lg transition-colors duration-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white order-1 ml-2' 
                      : 'bg-gray-200 text-[var(--clr-text-2)] order-2 mr-2'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[var(--clr-surface)] border border-gray-200 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-[var(--clr-surface)] rounded-b-2xl">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Ask about quotes, scheduling, pricing..."
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by CONSTRUKTR™ AI • Always learning
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}