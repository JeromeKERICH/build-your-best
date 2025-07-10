import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPost';
import { useEffect } from 'react';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Blog post not found.
        <div className="mt-4">
          <Link to="/blog" className="text-[#B76E79] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Category badge */}
        <div className="mb-3">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-[#B76E79] bg-[#F7E8E8] rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#3A3A3A] mb-2">
          {post.title}
        </h1>

        {/* Meta info */}
        <div className="text-sm text-[#B76E79] mb-6">
          {post.date} • {post.readTime}
        </div>

        {/* Hero Image */}
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-auto object-cover rounded-xl mb-8 shadow-md"
        />

        {/* Post Content */}
        <div className="blog-content text-[#3A3A3A] space-y-6">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>


        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {post.tags?.map((tag, index) => (
            <span 
              key={index} 
              className="bg-[#F5EFE7] text-[#B76E79] px-3 py-1 text-xs rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link 
            to="/blogs" 
            className="inline-block text-[#B76E79] hover:text-[#9E5A63] transition duration-150"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
} 