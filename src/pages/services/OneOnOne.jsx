import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaHandHoldingHeart, FaClipboardList, FaHeadset, FaMedal } from 'react-icons/fa';
import { GiConversation } from 'react-icons/gi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect } from 'react';

export default function OneOnOneCoaching() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className="bg-[#F5EFE7] min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="One-on-One coaching"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#B76E79] mix-blend-multiply opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              One-on-One Coaching
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Personalized guidance for your unique transformation journey
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/book"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-[#B76E79] text-sm rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Session
              </Link>
              <Link
                to="/coaching"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#B76E79] rounded-lg font-medium transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-5 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">
                Your Personal Transformation Journey
              </h2>
              <p className="text-lg text-[#5A5A5A] mb-6">
                This exclusive one-on-one coaching experience provides undivided attention to your specific 
                goals, challenges, and growth opportunities. Each session is tailored to your immediate needs 
                and long-term aspirations.
              </p>
              <p className="text-lg text-[#5A5A5A] mb-8">
                Whether you're navigating a major life transition, seeking personal development, or needing 
                accountability for specific goals, this program offers the focused support you need.
              </p>
              <div className="flex items-center">
                <FaUser className="text-3xl text-[#B76E79] mr-4" />
                <span className="text-lg font-medium text-[#3A3A3A]">
                  Completely customized to your individual needs
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5EFE7] p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-6 flex items-center">
                <GiConversation className="mr-3 text-[#B76E79]" />
                What Makes This Different
              </h3>
              <ul className="space-y-4">
                {[
                  "100% focused on your unique situation and goals",
                  "Flexible scheduling to fit your availability",
                  "Direct access between sessions for urgent questions",
                  "Personalized resources and action steps",
                  "Holistic approach addressing all life areas",
                  "Confidential space for deep exploration"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BsCheck2Circle className="text-[#B76E79] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#5A5A5A]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 md:py-10 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-[#3A3A3A] mb-4">
              Your Coaching Experience
            </h2>
            <div className="w-24 h-1 bg-[#B76E79] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandHoldingHeart className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Discovery Session",
                description: "Deep dive into your goals, challenges, and desired outcomes"
              },
              {
                icon: <FaClipboardList className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Customized Plan",
                description: "Personalized roadmap with clear milestones and action steps"
              },
              {
                icon: <FaHeadset className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Ongoing Sessions",
                description: "Regular meetings with adjustments as you progress"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                {step.icon}
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">{step.title}</h3>
                <p className="text-[#5A5A5A]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Pricing Options */}
      <section className="py-5 md:py-10 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-[#3A3A3A] mb-4">
              Flexible Coaching Options
            </h2>
            <div className="w-24 h-1 bg-[#B76E79] mx-auto mb-6"></div>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
              Choose the package that best fits your needs and commitment level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Session",
                price: "$20",
                features: [
                  "90-minute deep dive session",
                  "Focused on one specific challenge",
                  "Action plan with next steps",
                  "Email follow-up within 48 hours"
                ],
                recommended: false
              },
              {
                title: "3-Month Package",
                price: "$150",
                features: [
                  "12 sessions (weekly)",
                  "Comprehensive assessment",
                  "Personalized roadmap",
                  "Email support between sessions",
                  "Resource library access"
                ],
                recommended: true
              },
              {
                title: "6-Month Intensive",
                price: "$300",
                features: [
                  "24 sessions (weekly)",
                  "All 3-month package benefits",
                  "Priority scheduling",
                  "Two 15-minute emergency calls",
                  "Quarterly progress reviews",
                  "Bonus materials"
                ],
                recommended: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-xl shadow-sm ${plan.recommended ? 'border-2 border-[#B76E79] transform md:-translate-y-4' : ''}`}
              >
                {plan.recommended && (
                  <div className="bg-[#B76E79] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-[#B76E79] mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <BsCheck2Circle className="text-[#B76E79] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-[#5A5A5A]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`block text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-[#B76E79] hover:bg-[#9E5A63] text-white shadow-md'
                      : 'border border-[#B76E79] text-[#B76E79] hover:bg-[#F7E8E8]'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-6">
              Ready for Personalized Transformation?
            </h2>
            <p className="text-xl text-[#5A5A5A] mb-8 max-w-3xl mx-auto">
              Take the first step toward the life you envision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="px-8 py-4 bg-[#B76E79] hover:bg-[#9E5A63]  text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
              Book a Discovery Call
              </Link>
              <Link
                to="/faqs"
                className="px-8 py-4 border border-[#B76E79] text-[#B76E79] hover:bg-[#F5EFE7] rounded-lg font-medium text-lg transition-all duration-300"
              >
                See Frequently Asked Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}