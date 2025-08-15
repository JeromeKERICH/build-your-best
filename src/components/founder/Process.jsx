import { motion } from 'framer-motion';

export default function OurApproach() {
  const approaches = [
    {
      number: "01",
      title: "Mindset Transformation",
      description: "We provide practical, no-fluff tools to fundamentally shift how you think about yourself and your potential.",
      color: "from-[#00337C] to-[#1E4B9E]"
    },
    {
      number: "02",
      title: "Multi-Format Guidance",
      description: "Through personalized coaching, digital resources, and self-paced challenges, we meet you where you are.",
      color: "from-[#B76E79] to-[#D4A5AD]"
    },
    {
      number: "03",
      title: "Intentional Growth Framework",
      description: "Our structured approach helps you grow with purpose in both personal and professional realms.",
      color: "from-[#00337C] to-[#3A6CB5]"
    },
    {
      number: "04",
      title: "Alignment Coaching",
      description: "We specialize in helping you make decisions that resonate with your true self across all life areas.",
      color: "from-[#B76E79] to-[#E5C1C6]"
    }
  ];

  return (
    <section className="relative bg-white py-5 md:py-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00337C] opacity-10 mix-blend-multiply filter blur-3xl -translate-x-1/3 translate-y-1/3 animate-float"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
              Our Approach
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl p-8 h-full"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-white text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {approach.number}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  
                  <h3 className="text-xl font-bold text-white">{approach.title}</h3>
                </div>
                <p className="text-white/90">{approach.description}</p>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                    <span className="mr-2">Intentionality</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each element of our approach is designed to work together, creating a transformative journey from self-doubt to <span className="font-semibold text-[#00337C]">unshakable confidence</span> and <span className="font-semibold text-[#B76E79]">purposeful action</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}