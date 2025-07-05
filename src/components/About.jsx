import { motion } from 'framer-motion';
import { Link } from "react-router-dom"

export default function AboutSection() {
  return (
    <section className="relative bg-[#fffff] py-5 md:py-10 lg:py-15 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-[#F7D9D9] opacity-30 mix-blend-multiply filter blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 rounded-full bg-[#B89CA5] opacity-20 mix-blend-multiply filter blur-xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 text-sm font-semibold text-[#B76E79] uppercase tracking-wide">
            Build Your Best Self
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-8 leading-tight">
            "Helping women grow with intention, from the inside out."
          </h2>
          
          <div className="prose prose-lg max-w-5xl mx-auto text-[#3A3A3A] mb-12 text-left">
            <p className="mb-6">
              Build Your Best Self is a personal development brand that empowers ambitious women to step into their most confident, purposeful, and resilient selves.
            </p>
            
            <p className="mb-8">
              We're here for those moments when you feel stuck, uncertain, or overwhelmed, and you're ready for real transformation.
            </p>
            
            <div className="bg-[#F5EFE7] rounded-xl p-6 md:p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold text-[#B76E79] mb-4 text-center">Our Mission</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Empower women to uncover their identity and unlock their true potential</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Transform mindsets with practical tools, not fluff</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Guide intentional growth through coaching, digital resources, and self-paced challenges</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Support you in building a life and career that feels aligned</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg italic text-center text-[#3A3A3A] mb-10">
              Whether you're shifting careers, starting something new, or rediscovering who you are, we walk that journey with you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="bg-[#B76E79] hover:bg-[#B89CA5] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Meet Brenda
            </Link>
            <Link to="/coaching" className="border-2 border-[#B76E79] text-[#3A3A3A] hover:bg-[#F7D9D9] px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
              Learn More About Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}