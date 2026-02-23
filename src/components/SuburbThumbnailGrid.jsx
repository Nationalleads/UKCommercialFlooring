
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { birminghamSubLocationStats } from '@/data/birminghamSubLocationStats';

const SuburbThumbnailGrid = () => {
  // UseMemo to ensure sorting only happens once per render
  // Sort suburbs alphabetically to ensure a professional and navigable layout
  const sortedSuburbs = useMemo(() => {
    if (!birminghamSubLocationStats || birminghamSubLocationStats.length === 0) return [];
    
    return [...birminghamSubLocationStats].sort((a, b) => 
      a.name.localeCompare(b.name)
    );
  }, []);

  if (sortedSuburbs.length === 0) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <p>No suburb data available.</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50" id="birmingham-suburbs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">
              Explore All Birmingham Suburbs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our expert flooring contractors provide nationwide quality service with local Birmingham expertise. 
              Find your specific district below to explore local insights and flooring solutions.
            </p>
          </motion.div>
        </div>
        
        {/* Responsive Grid rendering ALL suburbs. No slices or limits applied. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {sortedSuburbs.map((suburb, index) => (
            <motion.div
              key={suburb.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Link 
                to={`/birmingham/${suburb.slug}`}
                className="group flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#ff8c42] hover:shadow-md transition-all overflow-hidden relative"
              >
                <div className="p-4 flex flex-col h-full justify-between relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 group-hover:bg-[#ff8c42]/10 group-hover:text-[#ff8c42] transition-colors">
                      <MapPin size={16} />
                    </span>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#ff8c42] transition-colors transform group-hover:translate-x-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#ff8c42] transition-colors text-sm md:text-base mb-1">
                      {suburb.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {suburb.region} Birmingham
                    </p>
                  </div>
                </div>
                {/* Hover decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff8c42] group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SEO Summary Footer for the Grid */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Showing {sortedSuburbs.length} Birmingham districts served by UK Commercial Flooring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuburbThumbnailGrid;
