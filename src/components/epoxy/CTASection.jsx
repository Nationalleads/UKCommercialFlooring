import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-[#1a2a4a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Upgrade Your Floor?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
           Get a precise, no-obligation quote for your industrial epoxy flooring project. 
           We respond within 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            to="/quote" 
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg"
          >
            Get Free Quote <ArrowRight size={20} />
          </Link>
          
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all text-lg"
          >
            Schedule Site Visit
          </a>
        </div>
        
        <p className="text-gray-400 text-sm mt-8">
           Preferred by 500+ UK businesses. 100% Free Consultation.
        </p>
      </div>
    </section>
  );
};

export default CTASection;