import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FaqAccordion = ({ item, isOpen, onToggle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? 'bg-white border-[#ff8c42] shadow-lg ring-1 ring-[#ff8c42]/20' 
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-[#ff8c42] text-white' : 'bg-gray-100 text-gray-500'
          }`}>
            <HelpCircle size={18} />
          </div>
          <h3 className={`font-semibold text-lg pr-4 transition-colors ${
            isOpen ? 'text-[#1a2a4a]' : 'text-gray-700'
          }`}>
            {item.question}
          </h3>
        </div>
        <ChevronDown 
          className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-[#ff8c42]' : ''
          }`} 
          size={24} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 pl-[4.5rem] pr-8 text-gray-600 leading-relaxed border-t border-transparent">
              {/* Dangerous HTML is used here to allow internal links within answers */}
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              
              <div className="mt-4 pt-4 flex flex-wrap gap-2">
                {item.keywords?.map((keyword, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqAccordion;