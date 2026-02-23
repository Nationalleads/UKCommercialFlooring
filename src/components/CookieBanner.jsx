import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-md z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-orange-50 rounded-full text-[#ff8c42]">
              <Cookie size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#1a2a4a] text-lg">We value your privacy</h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                Questions? Email <a href="mailto:info@ukcommercialflooring.co.uk" className="text-[#ff8c42] hover:underline">info@ukcommercialflooring.co.uk</a>.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <button
              onClick={handleAccept}
              className="flex-1 py-2 px-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg text-sm transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-sm transition-colors"
            >
              Reject
            </button>
            <Link
              to="/cookie-policy"
              className="flex-1 py-2 px-4 border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold rounded-lg text-sm transition-colors text-center"
            >
              Settings
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;