
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorRepairsHeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1686825076471-d1967dd836af" 
          alt="Concrete floor scabbling and repair in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a]/90 to-[#1a2a4a]/40 lg:bg-gradient-to-r" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-white text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#ff8c42]/20 text-[#ff8c42] font-bold text-xs md:text-sm tracking-wider uppercase mb-6 border border-[#ff8c42]/30">
              Industrial Concrete Repairs
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Floor Repairs & <span className="text-[#ff8c42] block lg:inline">Scabbling</span> UK
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
              What is Floor Repairs & Scabbling?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We utilize advanced pneumatic bush hammers and scabbling tools to mechanically profile concrete surfaces, remove laitance, and repair deep spalling. Whether you need to fix cracks or remove honeycomb concrete, our precise dust-free methods ensure structural integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Get Free Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/case-studies"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2 text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* YouTube Video Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full mt-8 lg:mt-0"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black group">
              {/* Responsive 16:9 Aspect Ratio Container */}
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/BDUDxEALdAQ?rel=0&modestbranding=1"
                  title="Industrial Floor Scabbling Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                <div className="bg-black/80 backdrop-blur-sm p-4 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">Industrial Floor Preparation</p>
                  <p className="text-gray-400 text-xs">Watch our pneumatic scabbling machinery in action</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  );
};

export default FloorRepairsHeroSection;
