import { motion } from "framer-motion";
import { Clock, DollarSign, Star, CheckCircle } from "lucide-react";
import AuthenticContractorImage, { BeforeAfterContractor } from "./authentic-contractor-images";
import { QuickDownloadCTA } from "./streamlined-ctas";

export default function SimplifiedBenefits() {
  return (
    <section className="py-20 bg-[var(--clr-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            How CONSTRUKTR Grows Your Business
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            Simple tools that solve real contractor problems. No complexity, just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: Clock,
                title: "Quote Jobs in 30 Seconds",
                description: "Stop losing jobs to faster competitors. Generate professional quotes instantly.",
                color: "text-blue-600"
              },
              {
                icon: DollarSign,
                title: "Get Paid 3x Faster",
                description: "Automated invoicing and payment reminders mean money in your account sooner.",
                color: "text-green-600"
              },
              {
                icon: Star,
                title: "Win 40% More Jobs",
                description: "Professional estimates make you look better than handwritten napkin quotes.",
                color: "text-yellow-600"
              },
              {
                icon: CheckCircle,
                title: "Never Double-Book Again",
                description: "Smart scheduling prevents conflicts and angry customers.",
                color: "text-purple-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`${benefit.color} bg-gray-50 p-3 rounded-xl`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-[var(--clr-text-2)] leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Real Contractor Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AuthenticContractorImage 
              scenario="phone-usage"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-lg">Real Results</p>
              <p className="text-sm opacity-90">Contractors love it</p>
            </div>
          </motion.div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
              Before vs After CONSTRUKTR
            </h3>
            <p className="text-lg text-[var(--clr-text-2)]">
              See the difference professional tools make
            </p>
          </motion.div>
          
          <BeforeAfterContractor />
        </div>

        {/* Single Download CTA */}
        <div className="text-center">
          <QuickDownloadCTA />
          <p className="text-gray-500 text-sm mt-4">
            Join 2,500+ contractors already using CONSTRUKTR
          </p>
        </div>
      </div>
    </section>
  );
}