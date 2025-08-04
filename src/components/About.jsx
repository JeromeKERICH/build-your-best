import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-5 md:py-15 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl -translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#00337C] opacity-10 mix-blend-multiply filter blur-3xl translate-x-1/3 translate-y-1/3 animate-float"></div>
      
      {/* Floating decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-[#B76E79] filter blur-3xl"
      ></motion.div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block mb-6 px-5 py-2 bg-[#00337C]/10 rounded-full border border-[#00337C]/30"
          >
            <span className="text-[#00337C] font-semibold text-sm uppercase tracking-wider">
              Build Your Best Self
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl lg:text-4xl font-bold text-start md:text-center text-gray-900 mb-10 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
              Helping women grow with intention,
            </span>
          
            <span className="text-gray-800">from the inside out.</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg text-gray-700 mb-16 text-center"
          >
            <p className="text-l md:text-xl md:text-center text-start mb-8">
              Build Your Best Self is a personal development brand that empowers ambitious women to step into their most <span className="font-semibold text-[#00337C]">confident, purposeful, and resilient</span> selves.
            </p>
            
            <p className="text-l md:text-xl md:text-center text-start">
              We're here for those moments when you feel stuck, uncertain, or overwhelmed, and you're ready for <span className="font-semibold text-[#B76E79]">real transformation</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] rounded-2xl p-8 md:p-12 shadow-xl mb-16 border border-[#00337C]/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#00337C] mb-8 text-center">
              Our Mission
            </h3>
            
            <ul className="space-y-6">
              {[
                "Empower women to uncover their identity and unlock their true potential",
                "Transform mindsets with practical tools, not fluff",
                "Guide intentional growth through coaching, digital resources, and self-paced challenges",
                "Support you in building a life and career that feels aligned"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1 mr-5 text-[#00337C]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-l italic text-center text-gray-600 mb-16"
          >
            "Whether you're shifting careers, starting something new, or rediscovering who you are, we walk that journey with you."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              to="/about" 
              className="relative overflow-hidden group px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-xl"
              style={{
                background: 'linear-gradient(45deg, #00337C 0%, #1E4B9E 100%)',
                boxShadow: '0 4px 20px rgba(0, 51, 124, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Meet Brenda</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            
            <Link 
              to="/coaching" 
              className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg border-2 border-[#00337C] text-[#00337C] hover:bg-[#00337C]/10"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                Our Services
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}