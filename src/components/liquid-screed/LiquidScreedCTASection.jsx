
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

const LiquidScreedCTASection = () => {
  return (
    <section className="py-20 bg-[#1a3a52] relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Get Your Liquid Screed Quote Today
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          From small extensions to large industrial warehouses, we provide competitive rates and rapid installation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            to="/quote" 
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-lg"
          >
            Request Free Quote <ArrowRight size={20} />
          </Link>
          
          <Link 
            to="/quote"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all text-lg backdrop-blur-sm"
          >
            <Calculator size={20} /> Calculate Cost
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-gray-400">
          We aim to beat any genuine written quote.
        </p>
      </div>
    </section>
  );
};

export default LiquidScreedCTASection;
