import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

const FaqSearchBar = ({ onSearch, resultCount }) => {
  const [value, setValue] = useState('');

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value, onSearch]);

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-20">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#ff8c42] transition-colors" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff8c42] focus:border-transparent shadow-lg transition-all text-gray-900"
          placeholder="Search questions (e.g. 'drying time', 'cost', 'birmingham')..."
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-3 h-6"
      >
        {value && (
          <span className="text-sm text-gray-500 font-medium">
            Found {resultCount} matching answer{resultCount !== 1 ? 's' : ''}
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default FaqSearchBar;