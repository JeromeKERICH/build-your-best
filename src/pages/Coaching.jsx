import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CoachingPackages() {
    useEffect(() => {
        window.scrollTo(0, 0);
}, []);
  const packages = [
    {
      name: "Clarity Boost",
      price: "$35",
      description: "A single powerful session to gain immediate clarity on your most pressing challenge.",
      features: [
        "60-minute 1:1 session",
        "Customized action plan",
        "Email follow-up",
        "Perfect for quick breakthroughs"
      ],
      popular: false,
      link: "/book/clarity-boost"
    },
    {
        name: "Transformation Journey",
        price: "$165",
        description: "Deep six-session container for holistic personal transformation.",
        features: [
          "Six 60-minute sessions",
          "Comprehensive assessment",
          "Weekly check-ins",
          "Custom resources",
          "Priority email access"
        ],
        popular: true,
        link: "/book/transformation-journey"
      },
    {
      name: "Breakthrough Bundle",
      price: "$90",
      description: "Three sessions to create momentum and sustainable change in one key area.",
      features: [
        "Three 60-minute sessions",
        "Personalized growth plan",
        "Between-session support",
        "Accountability structure"
      ],
      popular: false,
      link: "/book/breakthrough-bundle"
    },
    
    {
      name: "Career Clarity Coaching",
      price: "$120",
      description: "Specialized guidance for career transitions and professional growth.",
      features: [
        "Four 60-minute sessions",
        "Strengths assessment",
        "Career mapping",
        "Interview/negotiation prep",
        "LinkedIn profile review"
      ],
      popular: false,
      link: "/book/career-clarity"
    },
    {
      name: "Group Coaching Circle",
      price: "$35/session",
      description: "Community support with expert guidance (Coming Soon).",
      features: [
        "90-minute group sessions",
        "Monthly themes",
        "Peer accountability",
        "Bonus materials",
        "$90 for 3-session package"
      ],
      comingSoon: true,
      link: "/waitlist/group-coaching"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F7E8E8] to-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-6"
          >
            Coaching Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#5A5A5A] max-w-3xl mx-auto"
          >
            Choose the support that matches where you are and where you want to go
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="relative py-5 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${pkg.popular ? 'ring-2 ring-[#B76E79]' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#B76E79] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                {pkg.comingSoon && (
                  <div className="absolute top-0 right-0 bg-[#3A3A3A] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Coming Soon
                  </div>
                )}
                <div className="bg-white p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">{pkg.name}</h3>
                  <p className="text-[#B76E79] text-xl font-medium mb-4">{pkg.price}</p>
                  <p className="text-[#5A5A5A] mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 mt-1 mr-3 h-5 w-5 text-[#B76E79]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#3A3A3A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={pkg.link}
                    className={`mt-auto w-full text-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                      pkg.comingSoon 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-[#B76E79] hover:bg-[#9E5A63] text-white'
                    }`}
                  >
                    {pkg.comingSoon ? 'Join Waitlist' : 'Book Now'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-5 md:py-10 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-4">Package Comparison</h2>
            <div className="w-24 h-1 bg-[#B76E79] mx-auto"></div>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#B76E79] text-white">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Clarity Boost</th>
                  <th className="py-4 px-6 text-center">Breakthrough Bundle</th>
                  <th className="py-4 px-6 text-center">Transformation</th>
                  <th className="py-4 px-6 text-center">Career Clarity</th>
                  <th className="py-4 px-6 text-center">Group Circle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F7D9D9]">
                {[
                  { feature: 'Session Length', values: ['60 min', '3x60 min', '6x60 min', '4x60 min', '90 min'] },
                  { feature: 'Between-session Support', values: ['Email', 'Email + Texts', 'Priority Email', 'Email', 'Community'] },
                  { feature: 'Custom Resources', values: ['✓', '✓', '✓', '✓', '✓'] },
                  { feature: 'Assessment Tools', values: ['-', 'Basic', 'Comprehensive', 'Career-focused', 'Group'] },
                  { feature: 'Accountability', values: ['-', '✓', '✓', '✓', 'Peer'] }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F7E8E8]'}>
                    <td className="py-4 px-6 font-medium text-[#3A3A3A]">{row.feature}</td>
                    {row.values.map((value, colIndex) => (
                      <td key={colIndex} className="py-4 px-6 text-center text-[#5A5A5A]">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#F7E8E8] to-[#F5EFE7] rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl text-[#5A5A5A] mb-8">
              Still unsure which option is right for you? Let's chat about your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 border-2 border-[#B76E79] text-[#B76E79] hover:bg-[#F7E8E8] rounded-lg font-medium text-lg transition-colors duration-300"
              >
                Common Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}