import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronUp, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyQuoteForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-center">
      <AnimatePresence>
        {!isMinimized ? (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="bg-[#1a2332] text-white rounded-t-xl shadow-2xl pointer-events-auto w-full max-w-4xl overflow-hidden border-t-4 border-[#ff8c42]"
          >
            <div className="p-4 flex items-center justify-between border-b border-gray-700 bg-[#141b26]">
              <div className="flex items-center gap-2">
                 <span className="font-bold text-[#ff8c42]">Get a Quick Quote</span>
                 <span className="text-xs text-gray-400 hidden sm:inline"> | Specialist Latex Flooring Contractors</span>
              </div>
              <button onClick={() => setIsMinimized(true)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Need a fast estimate?</h3>
                    <p className="text-gray-300 text-sm">Get a detailed quote for your project within 24 hours.</p>
                </div>
                <Link 
                    to="/quote" 
                    className="bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold py-3 px-8 rounded transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-orange-500/20"
                >
                    Get Free Quote <Send size={18} />
                </Link>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            onClick={() => setIsMinimized(false)}
            className="pointer-events-auto bg-[#ff8c42] text-white px-6 py-3 rounded-t-xl font-bold shadow-lg flex items-center gap-2 hover:bg-[#e67e3a] transition-colors"
          >
            <ChevronUp size={20} /> Get Free Quote
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StickyQuoteForm;