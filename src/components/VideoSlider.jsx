
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const VideoSlider = ({ onScrollToServices }) => {
  return (
    <div className="relative h-[85vh] md:h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1a2a4a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/ee8434c4d325d153d1c6610720ae27da.jpg" 
          alt="Large modern industrial warehouse with polished concrete floor and bright skylights" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a4a]/85 via-[#1a2a4a]/40 to-[#1a2a4a]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1.5 px-3 rounded-full bg-[#ff8c42]/20 border border-[#ff8c42]/50 text-[#ff8c42] font-semibold text-xs md:text-sm mb-4 md:mb-6 backdrop-blur-sm">
            Leading UK Flooring Contractors
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Industrial & Commercial <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] to-[#ffb380] block md:inline mt-2 md:mt-0">
              Flooring Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 md:px-0">
            Specialists in Epoxy, Latex Screed, and Surface Preparation. 
            Delivering durable, high-performance floors for warehouses, factories, and commercial spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link 
              to="/quote" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-base md:text-lg"
            >
              Request a Free Quote <ArrowRight size={20} />
            </Link>
            
            <button 
              onClick={onScrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-base md:text-lg"
            >
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce cursor-pointer p-4"
        onClick={onScrollToServices}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default VideoSlider;
