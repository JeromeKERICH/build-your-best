import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Personal Empowerment Coaching",
      description: "For women ready to break free from self-doubt and build self-trust.",
      details: "Reconnect with your identity, rewrite limiting beliefs, and own your story.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/personal"
    },
    {
      title: "Career Coaching",
      description: "For professionals seeking clarity, growth, or transition.",
      details: "Get unstuck, align your path with your strengths, and pursue meaningful work.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/careercoaching"
    },
    {
      title: "Entrepreneurial Coaching",
      description: "For purpose-driven women ready to launch or grow their ventures.",
      details: "Gain strategy, mindset support, and structure to build something that lasts.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/enterpreneur"
    },
    {
      title: "One-on-One Coaching",
      description: "Personalized sessions designed around your unique goals and pace.",
      details: "Private coaching with Brenda for focused and empowering transformation.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/one-one"
    },
    {
      title: "Group Coaching (Coming Soon!)",
      description: "For those who grow better in community.",
      details: "Live sessions, accountability, and shared breakthroughs in a supportive space.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/group-coaching"
    }
  ];

  return (
    <section className="relative bg-[#F5EFE7] py-5 md:py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#B76E79] mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#B89CA5] mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-4">
            Coaching Services
          </h2>
          <div className="w-24 h-1 bg-[#B76E79] mx-auto mb-6"></div>
          <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto">
            Personalized support to help you grow intentionally and show up as your best self.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#3A3A3A] mb-2">{service.title}</h4>
                <p className="text-[#5A5A5A] mb-3">{service.description}</p>
                <p className="text-[#B76E79] font-medium mb-4">{service.details}</p>
                <Link 
                  to={service.link} 
                  className="inline-block text-[#B76E79] font-medium hover:text-[#9E5A63] transition-colors duration-200"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3A3A3A] mb-6">Ready to Begin Your Journey?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/book" 
              className="bg-[#B76E79] hover:bg-[#9E5A63] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Book a Session
            </Link>
            <Link 
              to="/contact" 
              className="bg-white border border-[#B76E79] text-[#B76E79] hover:bg-[#F7E8E8] px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Have Questions?
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}