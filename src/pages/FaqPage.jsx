
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { faqs } from '@/data/faqs';
import FaqAccordion from '@/components/FaqAccordion';
import FaqSearchBar from '@/components/FaqSearchBar';
import FaqCategoryTabs from '@/components/FaqCategoryTabs';

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItem, setOpenItem] = useState(null);

  const categories = ['All', 'General', 'Epoxy', 'Latex', 'Shot Blasting', 'Liquid Screed'];

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch = 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query) ||
        faq.keywords.some(k => k.toLowerCase().includes(query));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const generateFaqSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": filteredFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>?/gm, '')
        }
      }))
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>Commercial Flooring FAQ UK – Epoxy, Latex, Blast, Screed | ukcommercialflooring.co.uk</title>
        <meta name="description" content="100+ FAQs on epoxy, latex, shot blasting, liquid screed. Find answers to commercial flooring questions, costs, and installation times." />
        <link rel="canonical" href="https://www.ukcommercialflooring.co.uk/faq" />
        <script type="application/ld+json">
          {JSON.stringify(generateFaqSchema())}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[#1a2a4a] text-white pt-28 md:pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff8c42] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-6 text-sm font-medium text-orange-300">
              <HelpCircle size={16} /> Knowledge Base
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Commercial Flooring <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] to-amber-200 block md:inline mt-2 md:mt-0">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 px-4">
              Everything you need to know about industrial flooring, from installation times and costs to maintenance and technical specifications.
            </p>
            
            <FaqSearchBar 
              onSearch={setSearchQuery} 
              resultCount={filteredFaqs.length} 
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 container mx-auto px-4 -mt-8 relative z-20">
        <FaqCategoryTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelect={(cat) => {
            setActiveCategory(cat);
            setOpenItem(null); 
          }} 
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <FaqAccordion 
                  item={faq} 
                  isOpen={openItem === faq.id} 
                  onToggle={() => toggleItem(faq.id)} 
                />
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No answers found</h3>
              <p className="text-gray-500 mb-6">We couldn't find any questions matching "{searchQuery}" in {activeCategory}.</p>
              <a 
                href="https://ukcommercialflooring.co.uk/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ff8c42] font-bold hover:underline"
              >
                <MessageCircle size={18} /> Ask us directly
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our technical team is ready to help. Whether you need a specific spec sheet or advice on a unique substrate, get in touch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://ukcommercialflooring.co.uk/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Support
            </a>
            <a 
              href="tel:07700900000"
              className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-[#1a2a4a] font-bold rounded-xl transition-all w-full sm:w-auto"
            >
              Call 07700 900 000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
