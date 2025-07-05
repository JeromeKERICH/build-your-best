import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
}, []);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You're Ready for a Career Change",
      excerpt: "How to recognize when it's time to pivot professionally",
      category: "career",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "/assets/b5.jpg"
    },
    {
      id: 2,
      title: "From Self-Doubt to Self-Trust",
      excerpt: "Practical exercises to rebuild your confidence muscle",
      category: "confidence",
      date: "April 28, 2023",
      readTime: "8 min read",
      image: "/assets/b4.jpg",
      isFeatured: true
    },
    {
      id: 3,
      title: "Designing Your Ideal Morning Routine",
      excerpt: "Start your day with intention and clarity",
      category: "productivity",
      date: "April 10, 2023",
      readTime: "5 min read",
      image: "/assets/b1.jpg"
    },
    {
      id: 4,
      title: "The Art of Saying No Without Guilt",
      excerpt: "Setting boundaries that honor your energy",
      category: "mindset",
      date: "March 22, 2023",
      readTime: "7 min read",
      image: "/assets/b7.jpg"
    },
    {
      id: 5,
      title: "Career Clarity: Finding Your Next Right Step",
      excerpt: "A framework for decision-making when you feel stuck",
      category: "career",
      date: "March 15, 2023",
      readTime: "9 min read",
      image: "/assets/b2.jpg"
    },
    {
      id: 6,
      title: "From Burnout to Balance",
      excerpt: "Recalibrating your life with intention",
      category: "life-design",
      date: "February 28, 2023",
      readTime: "10 min read",
      image: "/assets/b3.jpg",
      isFeatured: true
    }
  ];

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Categories for sidebar
  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'career', name: 'Career Clarity & Purpose' },
    { id: 'mindset', name: 'Mindset & Motivation' },
    { id: 'confidence', name: 'Self-Worth & Confidence' },
    { id: 'productivity', name: 'Productivity & Planning' },
    { id: 'life-design', name: 'Life Design & Intentional Living' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F7E8E8] to-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3A3A3A] mb-6">Resources & Insights Designed for You</h1>
            <p className="text-xl text-[#5A5A5A] max-w-3xl mx-auto mb-8">
              Practical wisdom for your personal and professional growth journey
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-3 rounded-lg border border-[#D1D1D1] focus:ring-2 focus:ring-[#B76E79] focus:border-[#B76E79]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg 
                  className="absolute right-3 top-3.5 h-5 w-5 text-[#B76E79]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Categories</h2>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg ${activeCategory === cat.id ? 'bg-[#B76E79] text-white' : 'bg-[#F5EFE7] text-[#3A3A3A] hover:bg-[#F7D9D9]'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Newsletter CTA */}
                <div className="mt-12 bg-[#F5EFE7] p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#3A3A3A] mb-3">Get Weekly Insights</h3>
                  <p className="text-[#5A5A5A] mb-4">Join our newsletter for exclusive content and resources</p>
                  <Link
                    to="/newsletter"
                    className="block w-full text-center px-4 py-2 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium"
                  >
                    Join the Newsletter
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:w-3/4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-[#5A5A5A]">No articles found. Try a different search or category.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <div key={post.id} className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${post.isFeatured ? 'md:col-span-2' : ''}`}>
                      <div className={`${post.isFeatured ? 'flex flex-col md:flex-row' : ''}`}>
                        <div className={`${post.isFeatured ? 'md:w-1/2' : 'h-48'}`}>
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className={`w-full h-full object-cover ${post.isFeatured ? 'md:h-full' : 'h-48'}`}
                          />
                        </div>
                        <div className={`p-6 ${post.isFeatured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                          <span className="inline-block px-3 py-1 bg-[#F7E8E8] text-[#B76E79] text-xs font-medium rounded-full mb-3">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <h2 className="text-xl md:text-2xl font-bold text-[#3A3A3A] mb-3">
                            <Link to={`/blog/${post.id}`} className="hover:text-[#B76E79] transition-colors duration-200">
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-[#5A5A5A] mb-4">{post.excerpt}</p>
                          <div className="flex items-center text-sm text-[#B76E79]">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Coming Soon Section */}
              <div className="mt-16 bg-[#F5EFE7] rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3A3A3A] mb-4">Coming Soon: Growth Videos</h2>
                <p className="text-[#5A5A5A] mb-6">
                  We're creating a library of video resources to support your journey. Get notified when we launch!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-[#D1D1D1] focus:ring-2 focus:ring-[#B76E79] focus:border-[#B76E79]"
                  />
                  <button className="px-6 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg font-medium">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}