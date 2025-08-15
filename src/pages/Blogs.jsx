import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../library/supabaseClient';

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // Insert into your 'subscribers' table
      const { error } = await supabase
        .from('subscribers')
        .insert([{ 
          email: email,
          subscribed_at: new Date().toISOString(),
          source: 'website_cta'
        }]);

      if (error) throw error;

      setMessage({ 
        text: 'Thanks for subscribing! Check your email for confirmation.', 
        type: 'success' 
      });
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage({ 
        text: error.message || 'Subscription failed. Please try again.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };


    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Sample blog post data
    const blogPosts = [
        {
            id: 1,
            title: "Feeling Stuck? 5 Gentle Questions That Will Help You Move Forward",
            excerpt: "Self-reflection, clarity, emotional growth, personal development, healing",
            category: "career",
            date: "June 15, 2025",
            readTime: "6 min read",
            image: "/assets/b5.jpg"
        },
        {
            id: 2,
            title: "Rebuilding Your Confidence",
            excerpt: "Practical exercises to rebuild your confidence muscle",
            category: "confidence",
            date: "June 30, 2025",
            readTime: "8 min read",
            image: "/assets/b4.jpg",
            isFeatured: true
        },
        {
            id: 3,
            title: "Career Clarity: Finding Your Next Right Step",
            excerpt: "Start your day with intention and clarity",
            category: "productivity",
            date: "June 22, 2025",
            readTime: "5 min read",
            image: "/assets/b2.jpg"
        },
        {
            id: 4,
            title: "7 Signs You're Ready for a Mindset Reset",
            excerpt: "Setting boundaries that honor your energy",
            category: "mindset",
            date: "July 8, 2025",
            readTime: "7 min read",
            image: "/assets/b7.jpg"
        },
        {
            id: 5,
            title: "Intentional Living",
            excerpt: "How to Build a Life That Feels Like You",
            category: "career",
            date: "Jan 15, 2025",
            readTime: "9 min read",
            image: "/assets/b1.jpg"
        },
        {
            id: 6,
            title: "From Burnout to Balance",
            excerpt: "Recalibrating your life with intention",
            category: "life-design",
            date: "July 20, 2025",
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
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
                                Resources & Insights
                            </span>
                            <br />
                            <span className="text-gray-800">Designed for You</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Practical wisdom for your personal and professional growth journey
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00337C] focus:border-[#00337C]"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <svg 
                                    className="absolute right-3 top-3.5 h-5 w-5 text-[#00337C]" 
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
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
                                <ul className="space-y-3">
                                    {categories.map(cat => (
                                        <li key={cat.id}>
                                            <button
                                                onClick={() => setActiveCategory(cat.id)}
                                                className={`w-full text-left px-4 py-2 rounded-xl transition-colors duration-200 ${
                                                    activeCategory === cat.id 
                                                        ? 'bg-gradient-to-r from-[#00337C] to-[#1E4B9E] text-white' 
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {cat.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {/* Newsletter CTA */}
                                <div className="mt-12 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] p-6 rounded-xl border border-[#00337C]/20">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Get Weekly Insights</h3>
                                    <p className="text-gray-600 mb-4">Join our newsletter for exclusive content and resources</p>
                                    <form onSubmit={handleSubscribe} className="space-y-4">
                                            <input 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address" 
                                            className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00337C] focus:border-transparent text-gray-700"
                                            required
                                            />
                                            
                                            {message.text && (
                                            <p className={`text-sm ${
                                                message.type === 'success' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                {message.text}
                                            </p>
                                            )}
                                            
                                            <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-[#B76E79] to-[#C66D02] hover:from-[#C66D02] hover:to-[#B76E79] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg disabled:opacity-70"
                                            disabled={loading}
                                            >
                                            {loading ? 'Subscribing...' : 'Join the Mailing List'}
                                            </motion.button>
                                        </form>
                                </div>
                            </div>
                        </div>

                        {/* Blog Posts Grid */}
                        <div className="lg:w-3/4">
                            {filteredPosts.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-lg text-gray-600">No articles found. Try a different search or category.</p>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {filteredPosts.map(post => (
                                        <div 
                                            key={post.id} 
                                            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                                                post.isFeatured ? 'md:col-span-2' : ''
                                            }`}
                                        >
                                            <div className={`${post.isFeatured ? 'flex flex-col md:flex-row' : ''}`}>
                                                <div className={`${post.isFeatured ? 'md:w-1/2' : 'h-48'}`}>
                                                    <img 
                                                        src={post.image} 
                                                        alt={post.title}
                                                        className={`w-full h-full object-cover ${post.isFeatured ? 'md:h-full' : 'h-48'}`}
                                                    />
                                                </div>
                                                <div className={`p-6 ${post.isFeatured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                                                    <span className="inline-block px-3 py-1 bg-[#00337C]/10 text-[#00337C] text-xs font-medium rounded-full mb-3">
                                                        {categories.find(c => c.id === post.category)?.name}
                                                    </span>
                                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                                        <Link to={`/blog/${post.id}`} className="hover:text-[#00337C] transition-colors duration-200">
                                                            {post.title}
                                                        </Link>
                                                    </h2>
                                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                                    <div className="flex items-center text-sm text-[#00337C]">
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
                            <div className="mt-16 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] rounded-2xl p-8 md:p-12 border border-[#00337C]/20">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Coming Soon: Growth Videos</h2>
                                <p className="text-gray-600 mb-6">
                                    We're creating a library of video resources to support your journey. Get notified when we launch!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="flex-grow px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00337C] focus:border-[#00337C]"
                                    />
                                    <button className="px-6 py-3 bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">
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