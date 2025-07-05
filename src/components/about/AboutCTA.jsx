import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TransformationSection() {
  return (
    <div className="bg-white">
      {/* Transformation Journey Component */}
      <section className="relative py-5 md:py-10 lg:py-15 bg-[#F5EFE7] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#B76E79] mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#B89CA5] mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl text-start md:text-center font-bold text-[#3A3A3A] mb-4">
              My Before & After – A Real Transformation
            </h2>
            <div className="w-24 h-1 bg-[#B76E79] mx-auto"></div>
          </motion.div>

          <div className="overflow-hidden rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#D1D1D1]">
              {/* Before Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-[#B76E79] mb-6 text-center">Before</h3>
                <ul className="space-y-5">
                  {[
                    "Saying yes to everyone but myself",
                    "Defined by roles (mom, employee, wife)",
                    "Doubting my ability to lead",
                    "Afraid to speak my truth",
                    "Emotionally drained and depleted"
                  ].map((item, index) => (
                    <li key={`before-${index}`} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg text-[#3A3A3A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After Column */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-[#B76E79] mb-6 text-center">After</h3>
                <ul className="space-y-5">
                  {[
                    "Confident in my worth and voice",
                    "Clear on my unique purpose",
                    "Helping other women rise",
                    "Living by my core values",
                    "Creating space for others to grow"
                  ].map((item, index) => (
                    <li key={`after-${index}`} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4 text-[#B76E79]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg text-[#3A3A3A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA Component */}
      <section className="relative py-5 md:py-10 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#B76E79] mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl  text-start md:text-center font-bold text-[#3A3A3A] mb-6">
              Let's Walk This Journey Together
            </h2>
            <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto">
              Your transformation begins with a single step. Choose yours:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Start Here",
                description: "Discover how we can work together",
                link: "/start-here",
                color: "bg-[#B76E79] hover:bg-[#9E5A63] text-white"
              },
              {
                title: "Book a Session",
                description: "Let's create a path that fits your vision",
                link: "/book",
                color: "bg-white border-2 border-[#B76E79] text-[#B76E79] hover:bg-[#F7E8E8]"
              },
              {
                title: "Free Resource",
                description: "Take your first step today",
                link: "/free-resource",
                color: "bg-white border-2 border-[#3A3A3A] text-[#3A3A3A] hover:bg-[#F5EFE7]"
              }
            ].map((cta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={cta.link}
                  className={`block h-full p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${cta.color}`}
                >
                  <h3 className="text-xl font-bold mb-3">{cta.title}</h3>
                  <p className="mb-4">{cta.description}</p>
                  <span className="inline-block font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}