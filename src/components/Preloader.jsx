import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a2a4a]"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-24 h-24 rounded-full border-4 border-t-[#ff8c42] border-r-transparent border-b-[#ff8c42] border-l-transparent"
            />
            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-t-transparent border-r-white border-b-transparent border-l-white"
            />
            {/* Center Logo/Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ff8c42] rounded-full shadow-[0_0_15px_#ff8c42]" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 text-white/50 text-sm tracking-widest font-light"
          >
            LOADING RESOURCES
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;