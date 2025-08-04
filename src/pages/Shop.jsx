import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import CheckoutPage from './Cart';

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  // Product data with high-resolution image support
  const products = [
    {
      id: 1,
      name: "Boundaries and Balance",
      category: "boundaries",
      focus: ["self-care", "relationships"],
      price: 18,
      isBestseller: true,
      image: "/assets/bon.jpg",
      description: "Learn to set healthy limits and create equilibrium in your life",
      dimensions: { width: 2000, height: 2000 }
    },
    {
      id: 2,
      name: "Healing is Messy",
      category: "healing",
      focus: ["self-discovery", "growth"],
      price: 15,
      isBestseller: true,
      image: "/assets/heal.jpg",
      description: "Embrace the non-linear journey of personal healing and transformation",
      dimensions: { width: 2480, height: 2500 }
    },
    {
      id: 3,
      name: "Reclaim Your Power",
      category: "empowerment",
      focus: ["confidence", "purpose"],
      price: 20,
      isBestseller: true,
      image: "/assets/rec.jpg",
      description: "Rediscover your inner strength and step into your authentic power",
      dimensions: { width: 2480, height: 2500 }
    },
    {
      id: 4,
      name: "The Self-Awareness Guide",
      category: "awareness",
      focus: ["mindfulness", "clarity"],
      price: 0,
      isBestseller: false,
      image: "/assets/aware.jpg",
      description: "Develop deeper self-knowledge and emotional intelligence",
      dimensions: { width: 2480, height: 2500 }
    }
  ];

  // Image loading optimization
  const [loadedImages, setLoadedImages] = useState({});
  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  if (showCheckout && selectedProduct) {
    return <CheckoutPage selectedProduct={selectedProduct} />;
  }

  // Filter and sort logic remains the same
  const filteredProducts = products
    .filter(product => activeCategory === 'all' || product.category === activeCategory)
    .sort((a, b) => {
      switch(sortOption) {
        case 'newest': return b.id - a.id;
        case 'bestsellers': return (a.isBestseller === b.isBestseller) ? 0 : a.isBestseller ? -1 : 1;
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        default: return 0;
      }
    });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
              Transformational Guides
            </span>
          </h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
            High-quality digital resources for your personal growth journey
          </p>
        </div>
      </section>

      {/* Filter/Sort Bar */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === 'all' ? 'bg-[#00337C] text-white' : 'bg-[#F5F9FF] text-[#00337C] hover:bg-[#00337C]/10'
                }`}
              >
                All Guides
              </button>
              {['boundaries', 'healing', 'empowerment', 'awareness'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                    activeCategory === category ? 'bg-[#00337C] text-white' : 'bg-[#F5F9FF] text-[#00337C] hover:bg-[#00337C]/10'
                  }`}
                >
                  {category === 'boundaries' ? 'Boundaries' : 
                   category === 'healing' ? 'Healing' : 
                   category === 'empowerment' ? 'Empowerment' : 
                   'Self-Awareness'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid with optimized image handling */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#00337C]/10 flex flex-col h-full"
              >
                <div className="relative flex-1 flex items-center justify-center bg-[#F5F9FF] p-4 min-h-[300px]">
                  {product.isBestseller && (
                    <div className="absolute top-4 left-4 bg-[#B76E79] text-white px-3 py-1 text-xs font-medium rounded-full z-10">
                      Bestseller
                    </div>
                  )}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className={`max-h-[500px] w-auto object-contain transition-opacity duration-500 ${
                        loadedImages[product.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(product.id)}
                      style={{
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                    {!loadedImages[product.id] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#00337C]">{product.name}</h3>
                    <span className="text-[#B76E79] font-medium">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full px-4 py-3 bg-[#00337C] hover:bg-[#1E4B9E] text-white rounded-lg font-medium transition-all duration-300 mt-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Quality Notice */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
            <svg className="w-5 h-5 text-[#00337C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-[#00337C]">
              All guides are delivered in high-resolution (2480×3508) for optimal readability
            </span>
          </div>
        </div>
      </section>

      {/* Checkout Features */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00337C] mb-12 text-center">Premium Digital Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-[#00337C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "Print-Ready Quality",
                description: "2480×3508 resolution perfect for printing or digital use"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#00337C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Instant Access",
                description: "Download immediately after purchase"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#00337C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Secure Content",
                description: "DRM-free with watermark protection"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#F5F9FF] p-6 rounded-xl border border-[#00337C]/20 flex flex-col items-center text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#00337C] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}