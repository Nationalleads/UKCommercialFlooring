
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuoteFormModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto text-center p-8 relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-[#1a2a4a] mb-4">Get Your Free Quote</h3>
              <p className="text-gray-600 mb-6">
                Please visit our dedicated quote page to submit your project details. It's fast, secure, and ensures we get all the info we need.
              </p>

              <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-medium">Or call us directly:</p>
                <a href="tel:08009124131" className="text-xl font-bold text-[#1a2a4a] flex items-center justify-center gap-2 hover:text-[#ff8c42] transition-colors">
                  <Phone size={20} /> 0800 912 4131
                </a>
              </div>

              <Link 
                to="/quote"
                onClick={onClose}
                className="block w-full py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                Go to Quote Page <ExternalLink size={18} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteFormModal;
