import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

// Plain English sections to replace technical jargon
export function PlainEnglishFeatures() {
  const features = [
    {
      title: "Create 30-Second Quotes",
      description: "No more napkin math or lost estimates. Professional quotes that win more jobs.",
      benefit: "Win 40% more jobs"
    },
    {
      title: "Never Miss an Appointment",
      description: "Smart calendar prevents double-booking and reminds you of upcoming jobs.",
      benefit: "Save 2+ hours daily"
    },
    {
      title: "Get Paid Same-Day",
      description: "Send invoices instantly. Automatic payment reminders bring money in sooner.",
      benefit: "Reduce payment time by 60%"
    },
    {
      title: "Track Every Job",
      description: "See exactly what materials cost and how much time each job takes.",
      benefit: "Increase profit margins by 25%"
    }
  ];

  return (
    <section className="py-16 section--light bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4">
            What CONSTRUKTR Actually Does
          </h2>
          <p className="text-xl">
            No tech talk. Just the real benefits that matter to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)] p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold">
                    <span className="text-sm">{feature.benefit}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlainEnglishTestimonials() {
  const testimonials = [
    {
      name: "Mike Rodriguez", 
      trade: "Plumber",
      business: "Rodriguez Plumbing",
      quote: "Used to take me 20 minutes to write a quote. Now it's 30 seconds and looks way more professional.",
      result: "40% more jobs won"
    },
    {
      name: "Sarah Chen",
      trade: "HVAC Tech", 
      business: "Chen Climate Control",
      quote: "No more double-booked appointments or angry customers. My schedule actually makes sense now.",
      result: "Save 3 hours per day"
    },
    {
      name: "David Wilson",
      trade: "Electrician",
      business: "Wilson Electric",
      quote: "Getting paid used to take 45 days. Now it's usually under 2 weeks with the automated reminders.",
      result: "Get paid 3x faster"
    }
  ];

  return (
    <section className="py-16 bg-[var(--clr-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-4">
            What Real Contractors Say
          </h2>
          <p className="text-xl text-[var(--clr-text-2)]">
            Honest feedback from contractors already using CONSTRUKTR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="mb-4">
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[var(--clr-text-2)]">{testimonial.trade} • {testimonial.business}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlainEnglishPricing() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-6">
            Simple Pricing That Makes Sense
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            One price covers everything. No hidden fees or per-user charges.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl mb-8">
            <div className="text-6xl font-black mb-4">$49</div>
            <div className="text-xl mb-2">per month</div>
            <div className="text-gray-200">Everything included</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Unlimited quotes</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Smart scheduling</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Payment processing</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Customer management</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Mobile app</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Support included</span>
            </div>
          </div>

          <div className="text-lg text-gray-300 mb-8">
            Start Free Trial. No credit card required.
          </div>
        </motion.div>
      </div>
    </section>
  );
}