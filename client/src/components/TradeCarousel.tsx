import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Wrench, Zap, Home, Paintbrush, TreePine, Hammer, Building } from "lucide-react";
import StandardizedPhoneMockup from "./standardized-phone-mockup";
import appQuotesImage from "/screens/quote-builder.png";
import tradesData from "../../../content/trades.json";

const tradeIcons = {
  hvac: Phone,
  plumbing: Wrench, 
  electrical: Zap,
  roofing: Home,
  painting: Paintbrush,
  landscaping: TreePine,
  handyman: Hammer,
  general: Building
} as const;

export default function TradeCarousel() {
  const [selectedTrade, setSelectedTrade] = useState(tradesData[0]);

  const handleTradeSelect = (trade: typeof tradesData[0]) => {
    setSelectedTrade(trade);
  };

  const IconComponent = tradeIcons[selectedTrade.id as keyof typeof tradeIcons];

  return (
    <section id="trades" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trade Chips Row */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-8"
          >
            Built for Every Trade
          </motion.h2>
          
          <div className="overflow-x-auto">
            <div className="flex justify-center gap-3 mb-8 min-w-max px-4 sm:px-0">
            {tradesData.map((trade, index) => (
              <motion.button
                key={trade.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleTradeSelect(trade)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${selectedTrade.id === trade.id
                    ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                    : 'bg-white text-[var(--color-text-primary)] border border-[var(--color-border-light)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]'
                  }
                `}
                style={{ borderRadius: '32px' }}
              >
                {trade.title}
              </motion.button>
            ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTrade.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Trade Icon & Title */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
                    {selectedTrade.title} App
                  </h3>
                </div>
              </div>

              {/* Exactly 3 Bullets */}
              <div className="space-y-4">
                {selectedTrade.bullets.map((bullet, bulletIndex) => (
                  <motion.div
                    key={bulletIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: bulletIndex * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-[var(--color-text-primary)] leading-relaxed">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Start Free Trial
                </button>
                <button className="btn-secondary">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Phone Mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTrade.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <StandardizedPhoneMockup
                src={appQuotesImage}
                alt={`CONSTRUKTR app - ${selectedTrade.title} interface`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}