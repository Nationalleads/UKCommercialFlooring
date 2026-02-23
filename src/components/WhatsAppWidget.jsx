
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  // Updated with the new contact number for WhatsApp
  const phoneNumber = '448009124131'; 
  const message = "Hi, I'd like to get a free flooring quote";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-40">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Effect for attention */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></span>
          
          <MessageCircle size={32} fill="white" className="text-white relative z-10" />
        </motion.a>
      </div>
    </AnimatePresence>
  );
};

export default WhatsAppWidget;
