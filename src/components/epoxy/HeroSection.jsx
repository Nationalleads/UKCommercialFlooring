
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 overflow-hidden bg-[#1a2332]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/8486c570c5cd6fe80e8fd506118c6ab3.png" 
          alt="Industrial epoxy flooring UK hero – Seamless warehouse coating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332] via-[#1a2332]/95 to-[#1a2332]/60 lg:bg-gradient-to-r" />
        
        {/* Blueprint Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8c42]/20 border border-[#ff8c42]/30 text-[#ff8c42] text-sm font-semibold mx-auto lg:mx-0">
              <CheckCircle2 size={14} />
              <span>Rated #1 for Industrial Flooring UK</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Ultimate Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] to-orange-200 block lg:inline">Industrial Epoxy Flooring</span> UK
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-200">What is Industrial Epoxy Flooring?</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Industrial epoxy flooring is a seamless, heavy-duty resin coating designed for warehouses, factories, and production facilities. 
                Creating an impermeable, chemical-resistant surface that withstands forklift traffic and extreme wear.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                to="/quote" 
                className="w-full sm:w-auto px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-lg hover:shadow-[#ff8c42]/20 transition-all flex items-center justify-center gap-2 text-lg"
              >
                Get Free Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/case-studies" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-bold rounded-lg transition-all text-center text-lg"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Image / Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Main Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 aspect-video relative group cursor-pointer">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all z-20">
                <div className="w-16 h-16 rounded-full bg-[#ff8c42] flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
              
              {/* The Hero Image */}
              <img 
                src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/8486c570c5cd6fe80e8fd506118c6ab3.png" 
                alt="Industrial epoxy flooring UK hero" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs text-white z-20">
                See Our Transformation (Before/After)
              </div>
            </div>

            {/* Decorative Elements around image */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-[#ff8c42]/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
