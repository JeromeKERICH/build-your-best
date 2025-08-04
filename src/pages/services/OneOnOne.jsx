import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaHandHoldingHeart, FaClipboardList, FaHeadset, FaMedal } from 'react-icons/fa';
import { GiConversation } from 'react-icons/gi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import BookingModal from '../../layouts/Modal';

export default function OneOnOneCoaching() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleBookNow = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="One-on-One coaching"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00337C] to-[#1E4B9E] mix-blend-multiply opacity-70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF9E3B]">
                One-on-One Coaching
              </span>
            </h1>
            <p className="text-l md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Personalized guidance for your unique transformation journey
            </p>
            <div className="flex justify-center gap-4">
            <button
                onClick={() => handleBookNow('Career Coaching')}
                className="px-8 py-3 bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Now
              </button>
              <BookingModal
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                packageName={selectedPackage} 
              />
              <Link
                to="/coaching"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#00337C] rounded-lg font-bold transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your <span className="text-[#00337C]">Personal</span> Transformation Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                This exclusive one-on-one coaching experience provides undivided attention to your specific 
                goals, challenges, and growth opportunities. Each session is tailored to your immediate needs 
                and long-term aspirations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're navigating a major life transition, seeking personal development, or needing 
                accountability for specific goals, this program offers the focused support you need.
              </p>
              <div className="flex items-center">
                
                <span className="text-lg font-medium text-gray-800">
                  Completely customized to your individual needs
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] p-8 rounded-2xl shadow-xl border border-[#00337C]/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GiConversation className="mr-3 text-[#00337C]" />
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
                    <BsCheck2Circle className="text-[#00337C] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Coaching <span className="text-[#00337C]">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto mb-2"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process designed for your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <FaHandHoldingHeart className="text-4xl mb-4 text-[#00337C]" />,
                title: "Discovery Session",
                description: "Deep dive into your goals, challenges, and desired outcomes"
              },
              {
                icon: <FaClipboardList className="text-4xl mb-4 text-[#00337C]" />,
                title: "Customized Plan",
                description: "Personalized roadmap with clear milestones and action steps"
              },
              {
                icon: <FaHeadset className="text-4xl mb-4 text-[#00337C]" />,
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-[#00337C]/10"
              >
                {step.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible <span className="text-[#00337C]">Coaching</span> Options
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className={`bg-gradient-to-b from-white to-[#F5F9FF] p-8 rounded-2xl shadow-lg ${
                  plan.recommended 
                    ? 'border-2 border-[#00337C] transform md:-translate-y-4' 
                    : 'border border-[#00337C]/20'
                }`}
              >
                {plan.recommended && (
                  <div className="bg-gradient-to-r from-[#00337C] to-[#1E4B9E] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-[#00337C] mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <BsCheck2Circle className="text-[#00337C] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`block text-center px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white shadow-md'
                      : 'border-2 border-[#00337C] text-[#00337C] hover:bg-[#00337C]/10'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}