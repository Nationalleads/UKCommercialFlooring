
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const QuoteForm = () => {
  return (
    <section className="py-20 bg-[#1a2a4a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Floor?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Get a free, no-obligation quote for your commercial or industrial flooring project. 
          Our team is ready to conduct a site survey.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/quote" 
            className="w-full sm:w-auto px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold text-lg rounded-xl transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#ff8c42]/30 flex items-center justify-center"
          >
            Get a Free Quote <ArrowRight className="ml-2" />
          </Link>
          
          <Link 
            to="/quote" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center"
          >
            <Phone className="mr-2" size={20} /> Contact Us
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-gray-400">
          Or call us directly on <a href="tel:07904909304" className="text-white hover:text-[#ff8c42] underline">07904 909 304</a>
        </p>
      </div>
    </section>
  );
};

export default QuoteForm;
