
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';
import RelatedPostsCard from '@/components/RelatedPostsCard';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CaseStudiesHub = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = ['All', 'Epoxy', 'Latex', 'Shot Blasting', 'Liquid Screed'];

  // Helper to slugify categories
  const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');
  
  // Helper to normalize slug back to Title Case
  const deslugify = (slug) => {
    if (!slug) return 'All';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    if (category) {
      // Map common slugs to our specific category keys if needed
      const normalizedCategory = deslugify(category);
      // Check if normalized matches one of our known categories, otherwise default All
      // Special case handling if casing differs slightly (e.g. "Shot Blasting" vs "Shot blasting")
      const matched = categories.find(c => c.toLowerCase() === normalizedCategory.toLowerCase());
      
      if (matched) {
        setFilter(matched);
      } else {
        setFilter('All');
      }
    } else {
      setFilter('All');
    }
  }, [category]);

  const handleFilterClick = (cat) => {
    setFilter(cat);
    setCurrentPage(1);
    if (cat === 'All') {
      navigate('/case-studies');
    } else {
      navigate(`/case-studies/${slugify(cat)}`);
    }
  };

  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.serviceType === filter);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>{filter !== 'All' ? `${filter} Flooring Case Studies` : 'Commercial Flooring Case Studies'} | UK Commercial Flooring</title>
        <meta name="description" content={`Browse our ${filter !== 'All' ? filter.toLowerCase() : 'commercial'} flooring projects. Real results and before/after examples from across the UK.`} />
        <link rel="canonical" href={`https://www.ukcommercialflooring.co.uk/case-studies${filter !== 'All' ? '/' + slugify(filter) : ''}`} />
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
             {filter === 'All' ? 'Case Studies' : `${filter} Case Studies`}
           </motion.h1>
           <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
             Real problems. Real solutions. Real results from across the UK.
           </p>
           
           {/* Breadcrumb-ish indicator */}
           {filter !== 'All' && (
             <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                <Link to="/case-studies" className="hover:text-white transition-colors">All Projects</Link>
                <span>/</span>
                <span className="text-[#ff8c42] font-semibold">{filter}</span>
             </div>
           )}
         </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex justify-start md:justify-center min-w-max gap-3 md:gap-4 pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm md:text-base transition-all ${
                  filter === cat 
                    ? 'bg-[#ff8c42] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {currentItems.length > 0 ? (
            currentItems.map((study, index) => (
               <motion.div
                 key={study.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
               >
                 <RelatedPostsCard post={study} type="case-study" />
               </motion.div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center py-12">
              <h3 className="text-xl font-bold text-gray-800">No case studies found.</h3>
              <p className="text-gray-500 mt-2">Check back later for updates in this category.</p>
              <button 
                onClick={() => handleFilterClick('All')}
                className="mt-6 text-[#ff8c42] font-semibold hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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

      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#ff8c42] to-[#ffaa6b] py-12 md:py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want results like these?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">Our expert team is ready to transform your commercial space.</p>
          <Link 
            to="/quote" 
            className="px-8 py-4 bg-white text-[#ff8c42] font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-colors inline-block w-full sm:w-auto"
          >
            Start Your Project
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CaseStudiesHub;
