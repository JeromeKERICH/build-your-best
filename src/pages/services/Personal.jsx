import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHeart, FaBrain, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { GiSpiralShell } from 'react-icons/gi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import BookingModal from '../../layouts/Modal';

export default function PersonalEmpowermentCoaching() {
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Career coaching"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00337C] to-[#B76E79] mix-blend-multiply opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFD6D6]">
                Personal Empowerment
              </span>
            </h1>
            <p className="text-l md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Break free from self-doubt and build unshakable self-trust
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
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#00337C] rounded-lg font-medium transition-all duration-300"
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
                Reconnect with your <span className="text-[#00337C]">authentic self</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                This transformative coaching program is designed for women ready to shed limiting beliefs, 
                embrace their worth, and step into their power with confidence.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through personalized sessions, we'll work together to identify and overcome the mental 
                barriers holding you back, while building practical tools for lasting self-trust.
              </p>
              <div className="flex items-center">
                
                <span className="text-lg font-medium text-gray-800">
                  One-on-one support tailored to your unique journey
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
                <GiSpiralShell className="mr-3 text-[#00337C]" />
                What You'll Gain
              </h3>
              <ul className="space-y-4">
                {[
                  "Clarity on your core values and authentic desires",
                  "Tools to overcome self-doubt and imposter syndrome",
                  "Strategies for setting and maintaining healthy boundaries",
                  "Increased self-awareness and emotional intelligence",
                  "Practical confidence-building exercises",
                  "A personalized roadmap for continued growth"
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
      <section className="py-5 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How The Program Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto mb-3"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCalendarAlt className="text-4xl mb-4 text-[#00337C]" />,
                title: "Initial Assessment",
                description: "We'll start with a deep-dive session to understand your challenges, goals, and where you feel stuck."
              },
              {
                icon: <FaHeart className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Personalized Plan",
                description: "You'll receive a customized roadmap with exercises, reflections, and action steps tailored to you."
              },
              {
                icon: <FaChartLine className="text-4xl mb-4 text-[#00337C]" />,
                title: "Ongoing Sessions",
                description: "Weekly or bi-weekly sessions to track progress, overcome obstacles, and celebrate wins."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                {step.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}