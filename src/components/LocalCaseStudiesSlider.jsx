import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const LocalCaseStudiesSlider = ({ city }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // In a real app, you might fetch specific case studies based on the city prop
  const caseStudies = [
    {
      title: `Warehouse Renovation in ${city}`,
      client: "Logistics Hub Ltd",
      description: "Complete floor overhaul for a 5,000sqm distribution center. Removed old tiles and installed heavy-duty epoxy resin.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Epoxy", "Industrial"]
    },
    {
      title: `${city} Manufacturing Plant`,
      client: "Precision Parts Co.",
      description: "Installation of anti-static flooring for sensitive electronic assembly areas. Completed over a single weekend.",
      image: "https://images.unsplash.com/photo-1662125740439-d830b06b9b16",
      tags: ["ESD", "Safety"]
    },
    {
      title: "Retail Showroom Update",
      client: "AutoGroups UK",
      description: "High-gloss metallic epoxy finish for a luxury car showroom. Durable, reflective, and easy to clean.",
      image: "https://images.unsplash.com/photo-1563696992148-626c57c95457",
      tags: ["Decorative", "Commercial"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1a2a4a] mb-2">Local Success Stories</h2>
        <p className="text-gray-600">Recent projects completed in {city} and surrounding areas</p>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[450px] md:min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 h-full"
          >
            {/* Image Side */}
            <div className="h-64 md:h-full relative overflow-hidden">
              <img 
                src={caseStudies[currentIndex].image} 
                alt={caseStudies[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#1a2a4a] flex items-center gap-1 shadow-sm">
                <MapPin size={14} className="text-[#ff8c42]" />
                {city} Area
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="flex gap-2 mb-4">
                {caseStudies[currentIndex].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-[#1a2a4a] mb-2">
                {caseStudies[currentIndex].title}
              </h3>
              <p className="text-[#ff8c42] font-semibold mb-6">
                Client: {caseStudies[currentIndex].client}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {caseStudies[currentIndex].description}
              </p>
              <button className="self-start text-[#1a2a4a] font-bold border-b-2 border-[#ff8c42] hover:text-[#ff8c42] transition-colors pb-1">
                View Project Details
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-100 hover:bg-[#ff8c42] hover:text-white transition-all shadow-md"
            aria-label="Previous Project"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-100 hover:bg-[#ff8c42] hover:text-white transition-all shadow-md"
            aria-label="Next Project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalCaseStudiesSlider;