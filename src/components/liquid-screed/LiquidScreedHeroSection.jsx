
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LiquidScreedHeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1a3a52] pt-24 pb-16">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1457369444200-60f6a6cf5298" 
          alt="commercial liquid screed contractors UK warehouse pour" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a52]/90 via-[#1a3a52]/80 to-[#1a3a52]/60 mix-blend-multiply lg:bg-gradient-to-r" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Liquid Screed & <span className="text-[#ff8c42] block lg:inline">Flow Screed</span> Contractors UK
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-200 font-light border-l-4 border-[#ff8c42] pl-4 mx-auto lg:mx-0 max-w-fit">
              What is Liquid Screed?
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Also known as flow screed or calcium sulphate screed, liquid screed is the modern standard for fast-track commercial flooring. Unlike traditional sand and cement, our pumpable anhydrite solutions are self-compacting, rapid-drying, and perfectly tailored for underfloor heating efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                to="/quote" 
                className="group flex items-center justify-center gap-2 bg-[#ff8c42] hover:bg-[#e67e3a] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-[#ff8c42]/30 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get a Fast Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:08009124131" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm transition-all border border-white/20 w-full sm:w-auto"
              >
                Speak to an Expert
              </a>
            </div>
            
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Anhydrite</span>
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Pumpable</span>
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Rapid Dry</span>
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Flow Screed</span>
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black aspect-video group">
              {/* YouTube Embed */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/DeZe3ClpdyA?rel=0&modestbranding=1" 
                title="Liquid Screed Pump In Action" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ff8c42] rounded-full opacity-20 blur-2xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedHeroSection;
