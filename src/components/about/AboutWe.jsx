import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function WhoSheServes() {
  return (
    <section className="relative py-5 md:py-10 lg:py-15 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#B89CA5] opacity-15 mix-blend-multiply filter blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-4">Who I Serve</h2>
          <div className="w-24 h-1 bg-[#B76E79] text-start mx-auto mb-6"></div>
          <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto">
            I specialize in helping women who are ready to transform their lives
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/assets/women.jpg"
              alt="Women in community supporting each other"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* List - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <ul className="space-y-3">
              {[
                "Women feeling stuck, lost, or disconnected from their purpose",
                "Women navigating major life transitions (motherhood, career changes, healing journeys)",
                "High-achievers who secretly battle imposter syndrome",
                "Chronic over-givers and people-pleasers running on autopilot",
                "Women craving deeper clarity, inner peace, and clear direction",
                "Those ready to take action but needing the right tools and support"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg text-[#3A3A3A]">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="border-l-4 border-[#B76E79] pl-6 mb-8">
                <p className="text-xl italic text-[#5A5A5A]">
                  "Wherever you are in your journey, you'll find understanding and support here."
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/coaching"
                  className="px-8 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Coaching Options
                </Link>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}