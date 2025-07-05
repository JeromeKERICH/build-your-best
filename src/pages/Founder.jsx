import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import brendaImage from '/assets/brenda2.png'; // Import your image

export default function MeetBrenda() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[#F7E8E8] to-[#F5EFE7]">
        {/* Floating Blobs */}
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-[#B76E79]/10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-[#B89CA5]/10 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 z-10"
          >
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Meet <span className="text-[#B76E79]">Brenda</span>
              </h1>
              <div className="w-20 h-1 bg-[#B76E79] mb-8"></div>
            </motion.div>
            
            <motion.p variants={item} className="text-xl text-gray-600 mb-8 max-w-lg">
              Founder of Build Your Best Self, personal growth coach, and passionate believer in the power of intentional living.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link 
                to="/start-here" 
                className="px-8 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-3 border-2 border-[#B76E79] text-[#B76E79] hover:bg-[#F7E8E8] rounded-lg font-medium transition-all duration-300"
              >
                Our Philosophy
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Component - Modern Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2 relative h-[400px] lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              {/* Optimized Image Component */}
              <img
                src={brendaImage}
                alt="Brenda Viola - Founder of Build Your Best Self"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#B76E79]/20 blur-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Modern Timeline */}
      <section className="relative py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <div className="w-16 h-1 bg-[#B76E79] mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-[#F7D9D9] transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 lg:text-right">
                  <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">From Self-Doubt to Clarity</h3>
                    <p className="text-gray-600">
                      I've been the woman who showed up for everyone else while quietly battling burnout. I questioned my purpose and doubted my strength.
                    </p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 w-6 h-6 rounded-full bg-[#B76E79] border-4 border-white transform -translate-x-1/2 z-10"></div>
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12"></div>
                <div className="absolute left-1/2 w-6 h-6 rounded-full bg-[#B76E79] border-4 border-white transform -translate-x-1/2 z-10"></div>
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                  <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">The Transformation</h3>
                    <p className="text-gray-600">
                      Through deep self-discovery and mindset shifts, I developed systems that transformed how I live and grow.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 lg:text-right">
                  <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Your Best Self</h3>
                    <p className="text-gray-600">
                      This journey led to creating a space where women can reconnect with their worth and pursue goals with confidence.
                    </p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 w-6 h-6 rounded-full bg-[#B76E79] border-4 border-white transform -translate-x-1/2 z-10"></div>
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#F5EFE7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How I Help You Rise</h2>
            <div className="w-16 h-1 bg-[#B76E79] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Reconnect with Worth",
                description: "Rediscover your inherent value beyond roles and responsibilities."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Silence Inner Critic",
                description: "Transform self-doubt into empowered self-awareness."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Pursue with Clarity",
                description: "Develop clear, confident action toward your true goals."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#F7E8E8] to-[#F5EFE7] rounded-2xl p-12 shadow-inner"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're here for career guidance, personal empowerment, or to reconnect with your vision—this space was made for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/start-here" 
                className="px-8 py-4 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
              >
                Start Here →
              </Link>
              <Link 
                to="/coaching" 
                className="px-8 py-4 border-2 border-[#B76E79] text-[#B76E79] hover:bg-[#F7E8E8] rounded-lg font-medium text-lg transition-all duration-300"
              >
                Explore Coaching
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}