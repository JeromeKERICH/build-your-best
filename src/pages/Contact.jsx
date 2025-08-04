import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaCalendarAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
              Let's Connect
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Whether you have questions or ready to begin your journey, I'm here to help.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-[#00337C]/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00337C] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00337C] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00337C] focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="coaching">Coaching Inquiry</option>
                    <option value="workshop">Workshop Question</option>
                    <option value="product">Product Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00337C] focus:border-transparent"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Booking & Contact Info */}
            <div className="space-y-8">
              {/* Booking Calendar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] rounded-2xl shadow-lg p-8 md:p-10 border border-[#00337C]/20"
              >
                <div className="flex items-center mb-6">
                  <FaCalendarAlt className="text-2xl text-[#00337C] mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Book a Session</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Ready to take the next step? Schedule a free discovery call or coaching session.
                </p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaCalendarAlt className="mr-3" />
                  View Availability
                </motion.a>
              </motion.div>

              {/* Email Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-[#00337C]/20"
              >
                <div className="flex items-center mb-6">
                  <FaEnvelope className="text-2xl text-[#00337C] mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Email Me</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Prefer to email directly? Reach me at:
                </p>
                <a
                  href="mailto:info@buildyourbestselfblog.com"
                  className="text-xl text-[#00337C] hover:text-[#1E4B9E] font-medium break-all transition-colors duration-300"
                >
                  info@buildyourbestselfblog.com
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-[#00337C]/20"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Connect on Social</h2>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.instagram.com/buildyourbestself_25?igsh=ZmFjcTlrMDdtc2Fk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#00337C] hover:bg-[#1E4B9E] text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaInstagram className="text-2xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.facebook.com/share/15rD2aArYn/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#00337C] hover:bg-[#1E4B9E] text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaFacebook className="text-2xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://wa.me/211921650576"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#00337C] hover:bg-[#1E4B9E] text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}