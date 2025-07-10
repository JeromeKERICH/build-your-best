import { motion } from 'framer-motion';


export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7E8E8] to-[#F5EFE7]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#B76E79]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#B89CA5]/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10 lg:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3A3A] mb-4 leading-tight">
                About <span className="text-[#B76E79]">Brenda</span>
              </h1>
              <div className="w-24 h-1 bg-[#B76E79] mb-6"></div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-[#5A5A5A] mb-8 font-medium italic"
            >
              From Self-Doubt to Self-Discovery: My Journey to Becoming My Best Self
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#5A5A5A] mb-8"
            >
              I'm Brenda Viola, founder of Build Your Best Self. My journey from self-doubt to empowerment fuels my passion for helping women rediscover their worth and purpose.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 text-xs"
            >
              <a 
                href="#journey" 
                className="px-6 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white text-sm rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                Talk to Me
              </a>
              <a 
                href="/discovery" 
                className="px-6 py-3 border-2 border-[#B76E79] text-[#B76E79] text-sm hover:bg-[#F7E8E8] rounded-lg font-medium transition-all duration-300"
              >
                Rediscover Yourself
              </a>
            </motion.div>
          </motion.div>

          {/* Image Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-80 md:h-96 lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/assets/bren.jpg"
                alt="Brenda Viola - Founder of Build Your Best Self"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="sync"
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-tl-full bg-[#B76E79]/20 blur-xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}