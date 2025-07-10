import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaHandsHelping, FaComments, FaChartLine, FaLaughBeam } from 'react-icons/fa';
import { GiStonePath } from 'react-icons/gi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect } from 'react';

export default function GroupCoaching() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className="bg-[#F5EFE7] min-h-screen">
      {/* Hero Section with Community Image */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Group coaching community"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#B76E79] mix-blend-multiply opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-white/90 text-[#B76E79] px-4 py-1 rounded-full mb-4">
              <FaUsers className="mr-2" />
              <span className="text-sm font-medium">COMING SOON</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Group Coaching
            </h1>
            <p className="text-l md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Transform together in a supportive community of like-minded women
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/waitlist"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-[#B76E79] text-sm rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Waitlist
              </Link>
              <Link
                to="/coaching"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#B76E79] rounded-lg font-medium transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-5 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">
                Collective Growth Through Shared Experience
              </h2>
              <p className="text-lg text-[#5A5A5A] mb-6">
                Our group coaching program combines expert guidance with the power of community. 
                You'll benefit from both professional coaching and peer support in a structured, 
                confidential environment.
              </p>
              <p className="text-lg text-[#5A5A5A] mb-8">
                Each cohort is carefully curated to ensure a safe space where members can share 
                challenges, celebrate wins, and hold each other accountable.
              </p>
              <div className="flex items-center">
                <FaHandsHelping className="text-3xl text-[#B76E79] mr-4" />
                <span className="text-lg font-medium text-[#3A3A3A]">
                  Limited to 8 participants per group for maximum engagement
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5EFE7] p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-6 flex items-center">
                <GiStonePath className="mr-3 text-[#B76E79]" />
                Program Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  "Bi-weekly live group coaching sessions (90 minutes)",
                  "Private online community for ongoing support",
                  "Monthly 1:1 check-ins with Brenda",
                  "Structured curriculum with weekly action steps",
                  "Accountability partnerships",
                  "Resource library with worksheets and recordings"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BsCheck2Circle className="text-[#B76E79] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#5A5A5A]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 md:py-10 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-[#3A3A3A] mb-4">
              The Group Coaching Experience
            </h2>
            <div className="w-24 h-1 bg-[#B76E79] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaComments className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Live Sessions",
                description: "Interactive Zoom meetings with coaching and group discussion"
              },
              {
                icon: <FaChartLine className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Progress Tracking",
                description: "Shared milestones and progress celebrations"
              },
              {
                icon: <FaLaughBeam className="text-4xl mb-4 text-[#B76E79]" />,
                title: "Community Support",
                description: "24/7 access to our private member platform"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                {step.icon}
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">{step.title}</h3>
                <p className="text-[#5A5A5A]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      
      {/* Coming Soon Countdown (optional) */}
      <section className="py-5 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#F5EFE7] rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">
              Program Launching Fall 2025
            </h3>
            <p className="text-[#5A5A5A] mb-6">
              Our first cohort begins October 15th. Waitlist members will get:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                "Early enrollment access",
                "Special founding member pricing",
                "Bonus welcome session"
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <BsCheck2Circle className="text-[#B76E79] mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/waitlist"
              className="inline-block px-6 py-3 bg-[#3A3A3A] hover:bg-[#5A5A5A] text-white rounded-lg font-medium"
            >
              Secure Your Spot
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}