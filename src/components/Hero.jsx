import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Refined Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7E8E8] via-[#F8F1E7] to-[#E8D1D8] z-0"></div>
      
      {/* More subtle animated elements */}
      {loaded && (
        <>
          <motion.div
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="absolute top-1/4 left-1/4 w-56 h-56 rounded-full bg-[#D4A5AD] mix-blend-overlay filter blur-3xl opacity-20"
          ></motion.div>
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 0.15 }}
            transition={{ duration: 2, delay: 0.4 }}
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#5E4E52] mix-blend-overlay filter blur-3xl opacity-15"
          ></motion.div>
        </>
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Improved hierarchy */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm font-semibold text-[#B76E79] uppercase tracking-wider mb-4"
              >
                Build Your Best Self
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3A3A] leading-tight mb-6">
                Become Who You <span className="text-[#9E5A63]">Were Meant</span> To Be
              </h1>
            </div>
            
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#5A5A5A] mb-8 max-w-lg"
            >
              Empowering you with clarity, confidence, and purpose, so you can grow intentionally and show up as your best self in life, career, and business.
            </motion.p>
            
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-row text-sm sm:flex-row gap-4"
            >
              <Link to="/coaching" className="bg-[#9E5A63] hover:bg-[#B76E79] text-center text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Start Your Journey
              </Link>
              <Link to="/about" className="border border-[#9E5A63] text-center text-[#5A5A5A] hover:bg-[#F7E8E8] px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Image - Refined styling */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full h-50 md:h-96 lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/1.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              {/* More subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F7E8E8]/30 to-transparent"></div>
            </div>
            
            {/* Refined decorative elements */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#F7E8E8] opacity-80 z-[-1]"></div>
            <div className="hidden lg:block absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#D4A5AD] opacity-30 z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}