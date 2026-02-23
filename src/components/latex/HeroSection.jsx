
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1a2332] text-white pt-24 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1570004956610-c2def97f0987" 
          alt="Industrial Latex Flooring Application" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332] via-[#1a2332]/80 to-transparent lg:bg-gradient-to-r"></div>
        
        {/* Blueprint Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="px-3 py-1 bg-[#ff8c42] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Industrial Standard
              </span>
              <span className="text-gray-400 text-sm font-mono border border-gray-600 px-2 py-0.5 rounded">
                BS 8204-6 Compliant
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What is Commercial <span className="text-[#ff8c42] block lg:inline">Latex Flooring?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Commercial latex flooring is a protein-free, ammonia-free, self-levelling smoothing compound designed for the rapid rectification of uneven subfloors in industrial environments.
            </p>

            <ul className="space-y-3 mb-8 inline-block text-left">
              {['Walkable in 2 hours', 'Apply from 3mm to 50mm depth', 'Perfect for warehouse renovations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="text-[#ff8c42] shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/quote" 
                className="w-full sm:w-auto px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-lg hover:shadow-[#ff8c42]/30 transition-all flex items-center justify-center gap-2 group text-lg"
              >
                Get Free Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 border border-gray-500 hover:border-white hover:bg-white/5 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-lg"
              >
                <Play size={20} fill="currentColor" /> Watch Pour Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
            id="video-demo"
          >
            {/* Technical Drawing Effect */}
            <div className="border-2 border-white/20 p-2 rounded-xl relative bg-[#1a2332]/50 backdrop-blur-md">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#ff8c42]"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#ff8c42]"></div>
              
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative shadow-2xl border border-white/10">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TOBo2_0eGlU?si=G92RWzD_Z_ctA45r&rel=0" 
                  title="Commercial Latex Screeding"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs font-mono text-gray-400">
                <div className="border-r border-gray-700">
                  <div className="text-white font-bold text-lg">2h</div>
                  <div>Cure Time</div>
                </div>
                <div className="border-r border-gray-700">
                  <div className="text-white font-bold text-lg">50mm</div>
                  <div>Max Depth</div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">C35</div>
                  <div>Strength</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
