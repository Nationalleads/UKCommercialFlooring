import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import BenefitsSection from '@/components/latex/BenefitsSection';
import ServicesGrid from '@/components/latex/ServicesGrid';
import InstallationProcessSection from '@/components/latex/InstallationProcessSection';
import PricingSection from '@/components/latex/PricingSection';
import ComparisonSection from '@/components/latex/ComparisonSection';
import LatexCaseStudiesSection from '@/components/latex/LatexCaseStudiesSection';
import FAQSection from '@/components/latex/FAQSection';
import StickyQuoteForm from '@/components/latex/StickyQuoteForm';

const CommercialLatexFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Latex Flooring Contractors UK | Self Levelling Screed</title>
        <meta name="description" content="Expert commercial latex flooring contractors. Heavy duty self-levelling screed for warehouses, factories & industrial units. Fast drying, smooth finish. Free quote." />
        <meta name="keywords" content="commercial latex flooring, self levelling screed, industrial floor levelling, latex screed contractors, warehouse floor levelling" />
        <link rel="canonical" href="https://ukcommercialflooring.co.uk/commercial-latex-flooring" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1a2332] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570004956610-c2def97f0987" 
            alt="Commercial latex flooring application in UK warehouse" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#ff8c42] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Industrial Standard
              </span>
              <span className="text-gray-400 text-sm border border-gray-600 px-3 py-1 rounded-full">
                BS 8204-6 Compliant
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial <span className="text-[#ff8c42]">Latex Flooring</span> <br />Contractors UK
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional self-levelling smoothing compounds for uneven industrial subfloors. 
              Rapid setting, protein-free, and suitable for heavy warehouse traffic.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-xl">
              {[
                "Walkable in 2-4 Hours",
                "Depths from 3mm to 50mm",
                "Pumpable for Large Areas",
                "Perfect for Vinyl/Resin Base"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#ff8c42] flex-shrink-0" size={20} />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/quote" 
                className="px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-lg hover:shadow-[#ff8c42]/30 transition-all flex items-center gap-2 text-lg"
              >
                Get Free Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services/latex" 
                className="px-8 py-4 border border-gray-500 hover:border-white hover:bg-white/5 text-white font-bold rounded-lg transition-all flex items-center gap-2"
              >
                View Technical Specs <Layers size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BenefitsSection />
      <ServicesGrid />
      <InstallationProcessSection />
      <PricingSection />
      <ComparisonSection />
      <LatexCaseStudiesSection />
      <FAQSection />
      
      <StickyQuoteForm />
    </>
  );
};

export default CommercialLatexFlooring;