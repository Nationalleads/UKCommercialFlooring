
import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSidebar = ({ onSearch, onCategorySelect, activeCategory, recentPosts, searchQuery }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const categories = ['All', 'Epoxy', 'Latex', 'Shot Blasting', 'Liquid Screed'];
  
  return (
    <div className="space-y-8 sticky top-24">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-[#1a2a4a] mb-4">Search Topics</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search guides..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff8c42] outline-none transition-shadow"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-[#1a2a4a] mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategorySelect(cat === 'All' ? '' : cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                (activeCategory === cat || (cat === 'All' && !activeCategory))
                  ? 'bg-[#ff8c42] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts Teaser */}
      <div className="bg-[#1a2a4a] p-6 rounded-xl shadow-lg text-white">
        <h3 className="text-lg font-bold mb-4">Latest Insights</h3>
        <div className="space-y-4">
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.slice(0, 3).map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                <h4 className="font-semibold text-sm group-hover:text-[#ff8c42] transition-colors mb-1 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-400">{post.publishedDate}</p>
              </Link>
            ))
          ) : (
             <p className="text-sm text-gray-400">Loading recent posts...</p>
          )}
        </div>
        <Link to="/blog" className="inline-flex items-center text-xs font-bold text-[#ff8c42] mt-4 hover:underline">
          View All Posts <ArrowRight size={12} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
