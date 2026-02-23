import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteFormModal from './QuoteFormModal';
import Footer from './Footer';

const PillarPageLayout = ({ 
  title, 
  description, 
  heroImage, 
  schema, 
  children,
  serviceName
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Navigation / Header */}
      <header className="bg-[#1a2a4a] text-white py-4 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white hover:text-[#ff8c42] transition-colors">
            UK Commercial Flooring
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
             <Link to="/" className="hover:text-gray-300 hidden sm:block">Home</Link>
             <ChevronRight size={14} className="hidden sm:block text-gray-500" />
             <span className="text-[#ff8c42]">{serviceName}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={serviceName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a]/90 via-[#1a2a4a]/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote"
                className="px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:07700900000"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 border border-white/30"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Shared CTA Section */}
      <section className="py-16 bg-[#1a2a4a] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free site survey and competitive quotation.
          </p>
          <Link 
            to="/quote"
            className="px-10 py-5 bg-[#ff8c42] hover:bg-[#e67e3a] text-white text-lg font-bold rounded-xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 inline-block"
          >
            Request Your Quote Now
          </Link>
        </div>
      </section>

      <Footer />
      <QuoteFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={serviceName}
      />
    </div>
  );
};

export default PillarPageLayout;