import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaCalendarAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-5 md:py-10 lg:py-15 bg-gradient-to-br from-[#F7E8E8] to-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
            Whether you have questions or ready to begin your journey, I'm here to help.
          </p>
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
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#D1D1D1] focus:ring-2 focus:ring-[#B76E79] focus:border-[#B76E79]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#D1D1D1] focus:ring-2 focus:ring-[#B76E79] focus:border-[#B76E79]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-[#D1D1D1] focus:ring-2 focus:ring-[#B76E79] focus:border-[#B76E79]"
                  >
                    <option value="">Select a topic</option>
                    <option value="coaching">Coaching Inquiry</option>
                    <option value="workshop">Workshop Question</option>
                    <option value="product">Product Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-[#D1D1D1] focus:ring-2 focus:ring-[#B76E79] focus:border-[#B76E79]"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
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
                className="bg-[#F5EFE7] rounded-xl shadow-md p-6 md:p-8"
              >
                <div className="flex items-center mb-6">
                  <FaCalendarAlt className="text-2xl text-[#B76E79] mr-3" />
                  <h2 className="text-2xl font-bold text-[#3A3A3A]">Book a Session</h2>
                </div>
                <p className="text-[#5A5A5A] mb-6">
                  Ready to take the next step? Schedule a free discovery call or coaching session.
                </p>
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaCalendarAlt className="mr-2" />
                  View Availability
                </a>
              </motion.div>

              {/* Email Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-[#F7D9D9]"
              >
                <div className="flex items-center mb-6">
                  <FaEnvelope className="text-2xl text-[#B76E79] mr-3" />
                  <h2 className="text-2xl font-bold text-[#3A3A3A]">Email Me</h2>
                </div>
                <p className="text-[#5A5A5A] mb-4">
                  Prefer to email directly? Reach me at:
                </p>
                <a
                  href="mailto:info@buildyourbestselfblog.com"
                  className="text-xl text-[#B76E79] hover:text-[#9E5A63] font-medium break-all"
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
                className="bg-white rounded-xl shadow-md p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">Connect on Social</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F5EFE7] hover:bg-[#F7D9D9] text-[#B76E79] rounded-full transition-colors duration-300"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F5EFE7] hover:bg-[#F7D9D9] text-[#B76E79] rounded-full transition-colors duration-300"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F5EFE7] hover:bg-[#F7D9D9] text-[#B76E79] rounded-full transition-colors duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F5EFE7] hover:bg-[#F7D9D9] text-[#B76E79] rounded-full transition-colors duration-300"
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}