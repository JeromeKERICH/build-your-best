import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative bg-white py-5 md:py-10 lg:py-15 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#F7D9D9] opacity-30 mix-blend-multiply filter blur-xl transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#B89CA5] opacity-20 mix-blend-multiply filter blur-xl transform translate-x-1/4 translate-y-1/4"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-6">
            Let's Build Your Best Self, Together
          </h2>
          
          <p className="text-lg text-[#5A5A5A] mb-8 max-w-5xl mx-auto">
            Whether you're ready to dive into coaching or just starting to explore your growth journey, you don't have to do it alone.
          </p>
          
          <p className="text-xl text-[#3A3A3A] font-medium mb-12">
            You deserve support, tools, and encouragement tailored to you, and I'm here to walk that path with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coaching CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#F5EFE7] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">Ready for 1:1 support?</h3>
            <p className="text-[#5A5A5A] mb-6">
              Book a coaching session today and let's create a plan that fits your life, goals, and growth pace.
            </p>
            <button className="w-full bg-[#B76E79] hover:bg-[#9E5A63] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105">
              Book a Session
            </button>
          </motion.div>

          {/* Mailing List CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#F5EFE7] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">Not quite ready?</h3>
            <p className="text-[#5A5A5A] mb-4">
              Get weekly insights, tools, and motivation delivered straight to your inbox, plus a free self-discovery guide to kickstart your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-[#D1D1D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B76E79] focus:border-transparent"
              />
              <button className="bg-[#3A3A3A] hover:bg-[#5A5A5A] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                Join the Mailing List
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-[#B76E79]">
            It's time to show up for yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}