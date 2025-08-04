import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaLightbulb, FaChartPie, FaHandshake, FaUsers } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import BookingModal from '../../layouts/Modal';

export default function EntrepreneurialCoaching() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleBookNow = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-28 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Entrepreneurial coaching"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00337C]/80 to-[#B76E79]/50 mix-blend-multiply"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B89CA5]">
                Entrepreneurial Coaching
              </span>
            </h1>
            <p className="text-l md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Launch and grow your purpose-driven business with clarity and confidence
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
                onClick={() => handleBookNow('Entrepreneurship')}
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
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#00337C] rounded-full font-medium transition-all duration-300"
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
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Build a Business Aligned With Your <span className="text-[#00337C]">Purpose</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're just starting out or looking to scale, this coaching program provides 
                the strategic guidance and mindset support to create a sustainable, fulfilling business.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We'll focus on both practical business foundations and the entrepreneurial mindset 
                needed to overcome challenges and achieve your vision.
              </p>
              <div className="flex items-center">
               
                <span className="text-lg font-medium text-gray-800">
                  Tailored for purpose-driven women entrepreneurs
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] p-8 rounded-2xl shadow-lg border border-[#00337C]/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GiProgression className="mr-3 text-[#00337C]" />
                What You'll Create
              </h3>
              <ul className="space-y-4">
                {[
                  "Clear business vision and actionable growth plan",
                  "Strategies to attract ideal clients consistently",
                  "Financial systems for sustainable profitability",
                  "Confidence in your pricing and value proposition",
                  "Work-life harmony as a female entrepreneur",
                  "Resilience to overcome setbacks and plateaus"
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
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Framework
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine practical business strategy with mindset work for holistic growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-4xl mb-4 text-[#00337C]" />,
                title: "Clarity & Vision",
                description: "Define your unique offer, ideal clients, and business model"
              },
              {
                icon: <FaChartPie className="text-4xl mb-4 text-[#00337C]" />,
                title: "Strategy & Systems",
                description: "Create marketing, sales, and operational foundations"
              },
              {
                icon: <FaUsers className="text-4xl mb-4 text-[#00337C]" />,
                title: "Growth & Scaling",
                description: "Expand your impact while maintaining sustainability"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-[#00337C]/10"
              >
                {step.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] rounded-2xl p-8 md:p-12 shadow-lg border border-[#00337C]/20"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your <span className="text-[#00337C]">Dream Business</span>?
            </h2>
            <p className="text-l md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get the roadmap and support to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#00337C] text-[#00337C] hover:bg-[#00337C]/10 rounded-full font-bold text-l transition-all duration-300"
              >
                Ask About Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}