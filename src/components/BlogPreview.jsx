
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import LazyImage from '@/components/LazyImage';

const BlogPreview = () => {
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, 3);

  const handleLinkClick = (e, device) => {
    // Debugging log to verify click capture
    console.log(`${device} 'View All Case Studies' link clicked. Navigating to /case-studies`);
    // Ensure event propagates (though React Router handles this)
    e.stopPropagation(); 
  };

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-visible">
      <div className="container mx-auto px-4 relative">
        {/* Header Section - z-index 20 to sit above post content if needed */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-4 text-center md:text-left pointer-events-none">
          {/* Content is pointer-events-auto to re-enable interaction inside the pointer-events-none container if necessary, 
              though strictly the container shouldn't be none. We'll keep container standard and ensure children are interactive. */}
          <div className="w-full md:w-auto pointer-events-auto">
            <span className="text-[#ff8c42] font-bold text-sm tracking-wider uppercase mb-2 block">Our Blog</span>
            <h2 className="text-3xl font-bold text-[#1a2a4a]">Latest Insights & News</h2>
          </div>
          
          {/* Desktop "View All" Link - Enhanced robustness */}
          <div className="hidden md:block pointer-events-auto">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-[#ff8c42] font-bold hover:text-[#1a2a4a] transition-colors px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer select-none"
              aria-label="View all case studies"
              onClick={(e) => handleLinkClick(e, 'Desktop')}
              style={{ pointerEvents: 'auto' }} // Force pointer events
            >
              View All Case Studies <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Posts Grid - z-index 10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {latestPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 w-full">
                <LazyImage 
                  src={post.featuredImage} 
                  alt={post.altText || post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a2a4a] z-10">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col text-left">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.publishedDate}</span>
                  <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-3 group-hover:text-[#ff8c42] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <span className="inline-flex items-center text-[#ff8c42] font-bold text-sm mt-auto group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile "View All" Link - z-index 20 */}
        <div className="mt-10 text-center md:hidden relative z-20">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center justify-center text-[#ff8c42] font-bold hover:text-[#1a2a4a] transition-colors min-h-[48px] px-6 py-3 border border-gray-100 hover:border-[#ff8c42] bg-gray-50 hover:bg-white rounded-lg w-full sm:w-auto cursor-pointer active:scale-95 transform transition-transform"
            aria-label="View all case studies mobile"
            onClick={(e) => handleLinkClick(e, 'Mobile')}
            style={{ pointerEvents: 'auto' }}
          >
            View All Case Studies <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
