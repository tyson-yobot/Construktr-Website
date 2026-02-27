import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, CreditCard, Heart, CheckCircle } from "lucide-react";
import MicroCTA from "@/components/micro-cta";
import StandardizedPhoneMockup from "./standardized-phone-mockup";
import quoteScreenshot from "@assets/image_1754832756730.png";
import scheduleScreenshot from "@assets/image_1754832756730.png";
import paymentScreenshot from "@assets/image_1754832756730.png";
import clientScreenshot from "@assets/image_1754832756730.png";

const benefits = [
  {
    icon: TrendingUp,
    title: "Win More Jobs",
    description: "Professional quotes that close deals",
    color: "from-blue-500 to-blue-600",
    features: [
      "Add job details",
      "AI prices materials & labor",
      "Send branded PDF from phone"
    ],
    screenshot: quoteScreenshot,
    alt: "CONSTRUKTR quote generation interface"
  },
  {
    icon: Clock,
    title: "Work Smarter", 
    description: "Streamline daily operations",
    color: "from-purple-500 to-purple-600",
    features: [
      "No double-booking",
      "Route optimization",
      "Auto reminders",
      "Crew coordination"
    ],
    screenshot: scheduleScreenshot,
    alt: "CONSTRUKTR scheduling interface"
  },
  {
    icon: CreditCard,
    title: "Get Paid Faster",
    description: "Eliminate payment delays",
    color: "from-green-500 to-green-600",
    features: [
      "Charge on-site • Same-day deposits",
      "Accept all payment types",
      "Auto payment reminders"
    ],
    screenshot: paymentScreenshot,
    alt: "CONSTRUKTR payment processing interface"
  },
  {
    icon: Heart,
    title: "Keep Clients Happy",
    description: "Build customer relationships",
    color: "from-orange-500 to-orange-600",
    features: [
      "Real-time updates",
      "Photo sharing",
      "Auto review requests",
      "Pro communication"
    ],
    screenshot: clientScreenshot,
    alt: "CONSTRUKTR client communication interface"
  }
];

export default function ContractorBenefits() {
  return (
    <section className="section-spacing section--light bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center section-content-spacing"
        >
          <div className="floating-label mb-4 inline-block">
            🚀 Built for Contractors
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What's In It For You?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            See how each feature puts more money in your pocket.
          </p>
        </motion.div>

        {/* Benefits Grid with Alternating Phone Layout */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold">
                          {benefit.title}
                        </h3>
                        <p className="text-lg">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-medium" style={{color: '#6b7280'}}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Benefit-specific Micro CTA */}
                  <div className="pt-6">
                    <MicroCTA variant={benefit.title.toLowerCase().includes('win') ? 'quote' : 
                                      benefit.title.toLowerCase().includes('smart') ? 'schedule' : 
                                      benefit.title.toLowerCase().includes('paid') ? 'payment' : 'general'} />
                  </div>
                </div>

                {/* Phone Mockup Side */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <StandardizedPhoneMockup
                      src={benefit.screenshot}
                      alt={benefit.alt}
                      size="tablet"
                      withGlow={false}
                    />
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className={`absolute -top-4 -right-4 bg-gradient-to-r ${benefit.color} text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg`}
                    >
                      ✓ Real App
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Micro CTA */}
        <div className="text-center mt-16 space-y-4">
          <MicroCTA variant="general" />
          <p className="text-sm" style={{color: '#6b7280'}}>
            No credit card required · Free forever plan · Setup in 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}