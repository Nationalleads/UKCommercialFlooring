import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FaqCategoryTabs = ({ categories, activeCategory, onSelect }) => {
  const scrollContainer = useRef(null);

  return (
    <div className="w-full mb-10 overflow-x-auto pb-4 px-1 scrollbar-hide" ref={scrollContainer}>
      <div className="flex md:justify-center space-x-2 md:space-x-4 min-w-max px-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 outline-none select-none whitespace-nowrap ${
                isActive 
                  ? 'text-white shadow-lg shadow-orange-500/30' 
                  : 'text-gray-600 bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#ff8c42] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat === 'All' ? 'All Questions' : cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FaqCategoryTabs;