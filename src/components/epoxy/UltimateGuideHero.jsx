import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const UltimateGuideHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/46ea3f7f661db49b1c9e18be953b39a1.png" 
          alt="Commercial Epoxy Resin Flooring Contractors UK - Industrial warehouse with high-gloss epoxy finish" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff8c42]/90 text-white text-sm font-bold tracking-wide uppercase shadow-lg mx-auto backdrop-blur-sm">
            <CheckCircle2 size={16} />
            <span>#1 Rated UK Flooring Contractors</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-md">
            Commercial Epoxy Resin <br className="hidden md:block" />
            <span className="text-[#ff8c42]">Flooring Contractors UK</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
            Leading epoxy flooring installers for industrial warehouses, factories, and commercial spaces. 
            Durable, anti-slip, and chemical resistant solutions designed to last.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              to="/quote" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white text-lg font-bold rounded-lg transition-all shadow-xl hover:shadow-[#ff8c42]/30 hover:-translate-y-1"
            >
              Get a Free Quote <ArrowRight size={20} className="ml-2" />
            </Link>
            <a 
              href="tel:07904909304" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white text-lg font-bold rounded-lg border-2 border-white transition-all backdrop-blur-sm"
            >
              <Phone size={20} className="mr-2" /> Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-200 font-medium opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#ff8c42]" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#ff8c42]" />
              <span>Free Site Surveys</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#ff8c42]" />
              <span>Heavy Duty 10-Year Warranty</span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default UltimateGuideHero;