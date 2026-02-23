
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import BlogSidebar from '@/components/BlogSidebar';
import LazyImage from '@/components/LazyImage';

const BlogHub = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    let result = blogPosts;

    if (activeCategory) {
      result = result.filter(post => post.category === activeCategory);
    }

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.category.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredPosts(result);
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const getCategoryLink = (category) => {
    return `/case-studies/${category.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>Industrial Flooring Blog | Guides & Tips | UK Commercial Flooring</title>
        <meta name="description" content="Expert advice on epoxy, screed, and shot blasting. Read our latest guides for UK warehouse managers and facility owners." />
        <link rel="canonical" href="https://www.ukcommercialflooring.co.uk/blog" />
      </Helmet>

      {/* Header */}
      <div className="bg-[#1a2a4a] py-12 md:py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10">
           <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-3xl md:text-5xl font-bold text-white mb-4"
           >
             Industrial Flooring Blog
           </motion.h1>
           <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
             Expert insights, technical guides, and industry news for facility managers.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Navigation / Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-gray-500 hover:text-[#ff8c42] transition-colors text-sm">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#1a2a4a] text-sm">Blog</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {currentPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-200 w-full">
                      <Link to={`/blog/${post.slug}`} className="block w-full h-full">
                        <LazyImage 
                          src={post.featuredImage} 
                          alt={post.altText || post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </Link>
                      <Link 
                        to={getCategoryLink(post.category)}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 left-4 bg-[#ff8c42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 hover:bg-white hover:text-[#ff8c42] transition-colors"
                      >
                        {post.category}
                      </Link>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.publishedDate}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-[#1a2a4a] mb-3 line-clamp-2 hover:text-[#ff8c42] transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#ff8c42] font-semibold hover:gap-2 transition-all mt-auto"
                      >
                        Read Article <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2a4a]">No Posts Found</h3>
                <p className="text-gray-500 mt-2">Your search for "{searchQuery}" did not return any results.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('');}}
                  className="mt-6 bg-[#ff8c42] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Clear Filters & View All
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${
                      currentPage === i + 1 
                        ? 'bg-[#1a2a4a] text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 order-1 lg:order-2">
            <BlogSidebar 
              onSearch={setSearchQuery}
              onCategorySelect={setActiveCategory}
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              recentPosts={blogPosts}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogHub;
