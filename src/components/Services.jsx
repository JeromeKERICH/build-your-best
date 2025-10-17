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
      image: "assets/bren.jpeg",
      link: "/one-one"
    },
    

   
  ];

  return (
    <section className="relative bg-[#F8F9FF] py-5 md:py-15 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 bg-[#00337C]/10 rounded-full mb-6 border border-[#00337C]/20">
            <span className="text-[#00337C] font-semibold text-sm uppercase tracking-wider">
              Transformational Services
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
              Coaching Programs
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
               
              </div>
              <div className="p-8">
                <h4 className="text-xl md:text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-[#B76E79] font-medium mb-6">{service.details}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-[#00337C] font-semibold  transition-colors duration-200"
                >
                  <span>Discover more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}