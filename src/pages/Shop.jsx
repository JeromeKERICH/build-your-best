import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('newest');

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Clarity & Confidence Workbook",
      category: "workbooks",
      focus: ["self-discovery", "confidence"],
      price: 29,
      isNew: true,
      isBestseller: true,
      image: "/products/workbook-1.jpg",
      description: "60-page guide to uncovering your core values and building unshakable confidence"
    },
    {
      id: 2,
      name: "Intentional Living E-book",
      category: "ebooks",
      focus: ["mindset", "productivity"],
      price: 19,
      isNew: false,
      isBestseller: true,
      image: "/products/ebook-1.jpg",
      description: "Learn to design days that align with your true priorities"
    },
    {
      id: 3,
      name: "90-Day Transformation Journal",
      category: "journals",
      focus: ["habits", "accountability"],
      price: 25,
      isNew: true,
      isBestseller: false,
      image: "/products/journal-1.jpg",
      description: "Daily prompts and tracking for sustainable change"
    },
    {
      id: 4,
      name: "Career Pivot Playbook",
      category: "workbooks",
      focus: ["career", "confidence"],
      price: 35,
      isNew: false,
      isBestseller: false,
      image: "/products/workbook-2.jpg",
      description: "Step-by-step guide to reinventing your professional path"
    },
    {
      id: 5,
      name: "Boundaries Blueprint",
      category: "ebooks",
      focus: ["relationships", "self-care"],
      price: 22,
      isNew: false,
      isBestseller: true,
      image: "/products/ebook-2.jpg",
      description: "Learn to set healthy limits without guilt"
    },
    {
      id: 6,
      name: "Mindset Reset Challenge",
      category: "courses",
      focus: ["mindset", "accountability"],
      price: 49,
      isNew: true,
      isBestseller: false,
      image: "/products/course-1.jpg",
      description: "14-day program to transform limiting beliefs (Coming Soon)",
      comingSoon: true
    }
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => activeCategory === 'all' || product.category === activeCategory)
    .sort((a, b) => {
      switch(sortOption) {
        case 'newest': 
          return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
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
            Empower Your Journey Today
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto mb-8">
            Self-paced tools for clarity, confidence, and intentional growth
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
              {['ebooks', 'workbooks', 'journals', 'courses'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${activeCategory === category ? 'bg-[#B76E79] text-white' : 'bg-[#F5EFE7] text-[#3A3A3A] hover:bg-[#F7D9D9]'}`}
                >
                  {category === 'courses' ? 'Courses & Challenges' : category}
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
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#3A3A3A]">{product.name}</h3>
                      <span className="text-[#B76E79] font-medium">${product.price}</span>
                    </div>
                    <p className="text-[#5A5A5A] mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.focus.map(focusArea => (
                        <span key={focusArea} className="px-2 py-1 bg-[#F7E8E8] text-[#B76E79] text-xs rounded-full capitalize">
                          {focusArea.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={product.comingSoon ? '/waitlist' : `/product/${product.id}`}
                      className={`block w-full text-center px-4 py-3 rounded-lg font-medium ${product.comingSoon ? 'bg-gray-200 text-gray-500' : 'bg-[#B76E79] hover:bg-[#9E5A63] text-white'}`}
                    >
                      {product.comingSoon ? 'Notify Me' : 'Add to Cart'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Checkout Features */}
      <section className="py-5 md:py-10 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3A3A3A] mb-12 text-center">Easy, Secure Checkout</h2>
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
      <section className="py-5 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#F7E8E8] to-[#F5EFE7] rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Not Sure Where to Start?</h2>
            <p className="text-xl text-[#5A5A5A] mb-8">
              Take our 2-minute quiz to discover which resources best match your goals.
            </p>
            <Link
              to="/discovery-quiz"
              className="inline-block px-8 py-4 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Take the Self-Discovery Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}