import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Footer from "@/components/footer";
import FeatureList from "@/components/feature-list";
import { pricingTiers, globalFeatures, getCurrentPrice, getOriginalPrice, FOUNDERS_PROMO_ENABLED } from "@/data/pricing";


  "15-day money-back guarantee"
];

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing accordingly."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 15-day free trial with full access to Pro features. No credit card required to start."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and ACH bank transfers for annual plans. All payments are processed securely."
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer: "Yes, we offer 25% discounts for qualifying nonprofit organizations. Contact our sales team for verification and setup."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 90 days after cancellation. You can export all your data during this period."
  },
  {
    question: "Do you provide training and onboarding?",
    answer: "Pro and Enterprise plans include personalized onboarding. We also offer training webinars and comprehensive documentation."
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleAddOn = (addOnName: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnName) 
        ? prev.filter(name => name !== addOnName)
        : [...prev, addOnName]
    );
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Simple, Transparent
            <span className="text-electric-blue"> Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Choose the perfect plan for your service business. Start free, scale as you grow.
          </motion.p>
          
          {/* Annual/Monthly Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-electric-blue"
            />
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
              
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative p-8 rounded-3xl border-2 ${
                    tier.popular
                      ? 'border-electric-blue bg-gradient-to-b from-electric-blue/10 to-[var(--color-surface)] shadow-xl scale-105'
                      : 'border-white/10 bg-[var(--color-surface)] shadow-lg hover:shadow-xl transition-shadow duration-300'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-electric-blue text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-electric-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-[var(--color-text-secondary)] mb-6">{tier.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-5xl font-black text-white mb-2">
                        ${price}
                        <span className="text-lg font-normal text-[var(--color-text-secondary)]">/mo</span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-gray-400">
                          ${tier.monthlyPrice}/mo billed monthly
                        </div>
                      )}
                    </div>
                    
                    <Button className={`w-full py-3 rounded-xl font-semibold ${
                      tier.popular
                        ? 'bg-electric-blue text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      {tier.name === 'Enterprise' ? 'Request Demo' : 'Start Free Trial'}
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">What's included:</h4>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-secondary)]">{feature}</span>
                      </div>
                    ))}
                    
                    {tier.limitations.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <h5 className="font-medium text-[var(--color-text-secondary)] mb-2">Limitations:</h5>
                        {tier.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Pays For Itself Section */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why the $49 Plan Pays for Itself
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              See immediate ROI with time savings and increased productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Save 8+ Hours Per Week",
                description: "AI quotes and smart scheduling eliminate paperwork. Worth $320/week at $40/hour billing rate.",
                savings: "$1,280/month saved",
                icon: "⏰"
              },
              {
                title: "Close 25% More Jobs",
                description: "Professional quotes and follow-up automation increase your win rate from 60% to 75%.",
                savings: "+$2,500/month revenue",
                icon: "📈"
              },
              {
                title: "Reduce No-Shows by 60%",
                description: "Automated reminders and confirmations cut no-shows from 15% to 6%.",
                savings: "+$800/month revenue",
                icon: "✅"
              },
              {
                title: "Process Payments 5x Faster",
                description: "Built-in payment processing gets you paid in days, not weeks.",
                savings: "Improved cash flow",
                icon: "💳"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">{benefit.description}</p>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {benefit.savings}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-[var(--color-surface)] rounded-2xl shadow-lg border-2 border-electric-blue"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Total Monthly ROI: $4,580+ vs $49 Investment
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              That's a 9,300% return on investment in your first month alone
            </p>
            <Button 
              size="lg"
              className="bg-electric-blue text-white hover:bg-blue-700 font-bold px-8 py-4 rounded-xl"
            >
              Start Your Free 14-Day Trial
            </Button>
            <p className="text-sm text-gray-400 mt-3">
              No credit card required • Cancel anytime • Setup in 5 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Customize Your Plan
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Add premium features to any plan
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedAddOns.includes(addOn.name)
                    ? 'border-electric-blue bg-electric-blue/5'
                    : 'border-white/10 bg-[var(--color-surface)] hover:border-electric-blue/50'
                }`}
                onClick={() => toggleAddOn(addOn.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {addOn.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      {addOn.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-white">
                      ${addOn.price}
                    </div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">
              Included With Every Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {includedFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4"
                >
                  <Check className="w-6 h-6 text-electric-blue flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)] text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Everything you need to know about our pricing
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[var(--clr-surface)]/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full bg-electric-blue text-white text-sm font-bold transition-transform duration-200 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-electric text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of service professionals who trust CONSTRUKTR™
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--clr-surface)] text-electric-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--clr-surface)] hover:text-electric-blue transition-colors duration-200"
              >
                Request Demo
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              No credit card required • Setup in under 5 minutes
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}