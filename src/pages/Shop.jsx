import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckoutPage from './Cart';
export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  
  

  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const [selectedProduct, setSelectedProduct] = useState(null); // Add this state
  const [showCheckout, setShowCheckout] = useState(false); 

  // Product data organized by your categories
  const products = [
    // Career Clarity & Purpose
    {
      id: 1,
      name: "Career Clarity Roadmap",
      category: "career",
      focus: ["career", "purpose"],
      price: 15,
      isBestseller: true,
      image: "/products/career-roadmap.jpg",
      description: "Guided workbook for professionals ready for a purposeful career shift"
    },
    {
      id: 2,
      name: "Vision Planning Workbook",
      category: "career",
      focus: ["planning", "clarity"],
      price: 10,
      isBestseller: false,
      image: "/products/vision-workbook.jpg",
      description: "Set aligned goals and create a life rooted in clarity and direction"
    },
    {
      id: 3,
      name: "Purpose Mapping Workbook",
      category: "career",
      focus: ["purpose", "direction"],
      price: 11,
      isBestseller: true,
      image: "/products/purpose-mapping.jpg",
      description: "Clarify your passions and explore aligned career paths"
    },
    
    // Mindset & Motivation
    {
      id: 4,
      name: "30-Day Mindset Reset Journal",
      category: "mindset",
      focus: ["habits", "resilience"],
      price: 12,
      isBestseller: true,
      image: "/products/mindset-journal.jpg",
      description: "Build habits that strengthen your emotional resilience"
    },
    {
      id: 5,
      name: "Reframe & Rise Workbook",
      category: "mindset",
      focus: ["mindset", "growth"],
      price: 10,
      isBestseller: false,
      image: "/products/reframe-workbook.jpg",
      description: "Turn negative thoughts into empowering beliefs"
    },
    
    // Self-Worth & Confidence
    {
      id: 6,
      name: "Confidence Builder Workbook",
      category: "confidence",
      focus: ["self-worth", "growth"],
      price: 11,
      isBestseller: true,
      image: "/products/confidence-workbook.jpg",
      description: "Unpack limiting beliefs and write a new personal narrative"
    },
    {
      id: 7,
      name: "The Worthiness Workbook",
      category: "confidence",
      focus: ["self-worth", "healing"],
      price: 10,
      isBestseller: false,
      image: "/products/worthiness-workbook.jpg",
      description: "Reconnect with your value and rewrite your inner script"
    },
    
    // Productivity & Planning
    {
      id: 8,
      name: "Gentle Productivity Planner",
      category: "productivity",
      focus: ["planning", "balance"],
      price: 15,
      isBestseller: true,
      image: "/products/productivity-planner.jpg",
      description: "Weekly layouts with emotional check-ins and rest prompts"
    },
    {
      id: 9,
      name: "Time Peace Planner",
      category: "productivity",
      focus: ["time", "balance"],
      price: 9,
      isBestseller: false,
      image: "/products/time-planner.jpg",
      description: "Balance structure and softness for sustainable productivity"
    },
    
    // Life Design & Intentional Living
    {
      id: 10,
      name: "Intentional Living Workbook",
      category: "lifestyle",
      focus: ["values", "purpose"],
      price: 15,
      isBestseller: true,
      image: "/products/intentional-living.jpg",
      description: "Define your values and create life rhythms that reflect who you are"
    },
    {
      id: 11,
      name: "The Life Values Blueprint",
      category: "lifestyle",
      focus: ["values", "clarity"],
      price: 11,
      isBestseller: false,
      image: "/products/values-blueprint.jpg",
      description: "Discover and prioritize your core life values"
    },
    
    // Free Resources
    {
      id: 12,
      name: "5-Day Self-Discovery Challenge",
      category: "free",
      focus: ["reflection", "clarity"],
      price: 0,
      isBestseller: true,
      image: "/products/discovery-challenge.jpg",
      description: "Powerful reflection journey to reconnect with your inner compass"
    },
    {
      id: 13,
      name: "Self-Discovery Guide",
      category: "free",
      focus: ["beginnings", "intention"],
      price: 0,
      isBestseller: false,
      image: "/products/discovery-guide.jpg",
      description: "Structured self-reflection for intentional beginnings"
    },
    
    // Coming Soon
    {
      id: 14,
      name: "Build Your Best Self: Foundations Course",
      category: "courses",
      focus: ["purpose", "clarity"],
      price: 97,
      isBestseller: false,
      image: "/products/foundations-course.jpg",
      description: "Comprehensive modules on purpose, vision, and clarity",
      comingSoon: true
    }
  ];


  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  if (showCheckout && selectedProduct) {
    return <CheckoutPage selectedProduct={selectedProduct} />;
  }

  // Filter and sort products
  const filteredProducts = products
    .filter(product => activeCategory === 'all' || product.category === activeCategory)
    .sort((a, b) => {
      switch(sortOption) {
        case 'newest': 
          return b.id - a.id; // Assuming higher IDs are newer
        case 'bestsellers':
          return (a.isBestseller === b.isBestseller) ? 0 : a.isBestseller ? -1 : 1;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F7E8E8] to-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-6">
            Build Your Best Self
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto mb-8">
            Digital tools for intentional growth in career, mindset, and life design
          </p>
          <Link
            to="/discovery-quiz"
            className="inline-block px-8 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Take the Self-Discovery Quiz
          </Link>
        </div>
      </section>

      {/* Filter/Sort Bar */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'all' ? 'bg-[#B76E79] text-white' : 'bg-[#F5EFE7] text-[#3A3A3A] hover:bg-[#F7D9D9]'}`}
              >
                All Products
              </button>
              {['career', 'mindset', 'confidence', 'productivity', 'lifestyle', 'free', 'courses'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${activeCategory === category ? 'bg-[#B76E79] text-white' : 'bg-[#F5EFE7] text-[#3A3A3A] hover:bg-[#F7D9D9]'}`}
                >
                  {category === 'free' ? 'Free Resources' : 
                   category === 'courses' ? 'Courses' : 
                   category.replace('-', ' ')}
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm text-[#5A5A5A]">Sort by:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-[#D1D1D1] rounded-lg px-3 py-2 text-sm focus:ring-[#B76E79] focus:border-[#B76E79]"
              >
                <option value="newest">Newest</option>
                <option value="bestsellers">Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-[#5A5A5A]">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 bg-[#F5EFE7] overflow-hidden">
                    {product.comingSoon && (
                      <div className="absolute top-4 right-4 bg-[#3A3A3A] text-white px-3 py-1 text-xs font-medium rounded-full">
                        Coming Soon
                      </div>
                    )}
                    {product.price === 0 && (
                      <div className="absolute top-4 left-4 bg-[#B76E79] text-white px-3 py-1 text-xs font-medium rounded-full">
                        Free
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#3A3A3A]">{product.name}</h3>
                      <span className="text-[#B76E79] font-medium">
                        {product.price === 0 ? 'FREE' : `$${product.price}`}
                      </span>
                    </div>
                    <p className="text-[#5A5A5A] mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.focus.map(focusArea => (
                        <span key={focusArea} className="px-2 py-1 bg-[#F7E8E8] text-[#B76E79] text-xs rounded-full capitalize">
                          {focusArea.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => !product.comingSoon && handleAddToCart(product)}
                      className={`block w-full text-center px-4 py-3 rounded-lg font-medium ${
                        product.comingSoon 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-[#B76E79] hover:bg-[#9E5A63] text-white cursor-pointer'
                      }`}
                    >
                      {product.comingSoon ? 'Notify Me' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Checkout Features */}
      <section className="py-16 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3A3A3A] mb-12 text-center">Easy, Secure Checkout</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Secure Payments",
                description: "All transactions protected with 256-bit encryption"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Instant Access",
                description: "Auto-download link sent directly to your email"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Simple Process",
                description: "Mobile-friendly 3-step purchase flow"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-2">{feature.title}</h3>
                <p className="text-[#5A5A5A]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#F7E8E8] to-[#F5EFE7] rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Find Your Perfect Starting Point</h2>
            <p className="text-xl text-[#5A5A5A] mb-8">
              Take our 2-minute quiz to discover which resources best match your goals and needs.
            </p>
            <Link
              to="/discovery-quiz"
              className="inline-block px-8 py-4 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Take the Self-Discovery Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}