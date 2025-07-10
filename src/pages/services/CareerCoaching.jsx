import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaUserTie, FaLightbulb, FaChartLine, FaBalanceScale } from 'react-icons/fa';
import { GiStairsGoal } from 'react-icons/gi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect } from 'react';

export default function CareerCoaching() {
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Career coaching"
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
              Career Coaching
            </h1>
            <p className="text-l md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Find clarity, direction, and confidence in your professional journey
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/book"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-sm text-[#B76E79] rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
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
                Navigate Your Professional Path with Confidence
              </h2>
              <p className="text-lg text-[#5A5A5A] mb-6">
                Whether you're feeling stuck, considering a career change, or aiming for advancement, 
                this coaching program provides the clarity and strategy you need to move forward purposefully.
              </p>
              <p className="text-lg text-[#5A5A5A] mb-8">
                We'll work together to identify your strengths, values, and ideal work environment, 
                then create an actionable plan to achieve your career aspirations.
              </p>
              <div className="flex items-center">
                <FaUserTie className="text-3xl text-[#B76E79] mr-4" />
                <span className="text-lg font-medium text-[#3A3A3A]">
                  Personalized approach for professionals at all levels
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
                <GiStairsGoal className="mr-3 text-[#B76E79]" />
                What You'll Achieve
              </h3>
              <ul className="space-y-4">
                {[
                  "Clarity on your ideal career direction",
                  "Identification of your unique strengths and transferable skills",
                  "Effective job search or promotion strategies",
                  "Confidence in networking and interviews",
                  "Tools for workplace challenges and politics",
                  "Work-life balance that aligns with your values"
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
              Our Career Coaching Process
            </h2>
            <div className="w-24 h-1 bg-[#B76E79] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBriefcase className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Career Assessment",
                description: "Comprehensive evaluation of your skills, values, and professional aspirations"
              },
              {
                icon: <FaLightbulb className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Strategy Development",
                description: "Create a customized plan for career transition or advancement"
              },
              {
                icon: <FaChartLine className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Implementation",
                description: "Execute your plan with ongoing support and accountability"
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

      

      {/* Final CTA */}
      <section className="py-5 md:py-10 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-[#5A5A5A] mb-8 max-w-3xl mx-auto">
              Take control of your professional future today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="px-8 py-4 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Career Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-[#B76E79] text-[#B76E79] hover:bg-white rounded-lg font-medium text-lg transition-all duration-300"
              >
                Get More Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}