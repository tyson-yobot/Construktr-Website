import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Users, Zap } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For solo contractors",
    features: [
      "Unlimited quotes & estimates",
      "Smart scheduling calendar",
      "Payment processing",
      "Customer management"
    ],
    highlight: false
  },
  {
    name: "Core",
    price: "$99",
    period: "/month",
    description: "For small teams (up to 5)",
    features: [
      "Everything in Starter",
      "Team scheduling & coordination",
      "Advanced reporting",
      "Priority support"
    ],
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    description: "For established contractors",
    features: [
      "Everything in Core",
      "Multi-location management",
      "Custom integrations",
      "Account manager"
    ],
    highlight: false
  }
];

export default function EarlyPricingHighlight() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-green-600/20 text-green-700 border-green-600/30 mb-4 px-4 py-2">
            💰 Affordable for Every Contractor
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Plans for Every Size Crew
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto mb-8">
            Starting at less than a tank of gas, CONSTRUKTR pays for itself with your first job.
            <br />
            <span className="text-green-600 font-semibold">No setup fees. Cancel anytime. Free forever plan.</span>
          </p>
          
          {/* Quick Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 text-sm font-medium">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-1" />
                Average contractor saves $2,400/month
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-1" />
                ROI in first 30 days
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-[var(--clr-surface)] rounded-2xl shadow-lg border-2 p-8 ${
                tier.highlight 
                  ? 'border-blue-500 transform scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    {tier.badge}
                  </Badge>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-[var(--clr-text-2)] mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{tier.price}</span>
                  <span className="text-xl text-gray-500 ml-1">{tier.period}</span>
                </div>
              </div>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-[var(--clr-text-2)]">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button - Mobile Optimized */}
              <Button 
                className={`w-full min-h-[56px] text-lg font-bold ${
                  tier.highlight 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-white'
                }`}
                size="lg"
              >
                Start Free Trial
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA & Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Plan? Start Your Free Trial
            </h3>
            <p className="text-[var(--clr-text-2)] mb-6 max-w-2xl mx-auto">
              Try CONSTRUKTR risk-free for 14 days. No credit card required. 
              Switch plans anytime or cancel with one click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white min-h-[56px] px-8 py-4 text-lg font-bold w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="min-h-[56px] px-8 py-4 text-lg font-bold w-full sm:w-auto">
                Book a Demo
              </Button>
            </div>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Free forever plan
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-blue-500 mr-2" />
              For any size crew
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}