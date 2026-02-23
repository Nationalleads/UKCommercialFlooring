import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-[#1a2a4a] py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className='text-3xl md:text-4xl font-bold mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Let's turn your ideas into reality
        </motion.h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your project requirements with our expert team.
        </p>
        
        <Link 
          to="/quote" 
          className="inline-flex items-center gap-2 bg-[#ff8c42] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#e67e3a] transition-colors"
        >
          Get Started <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;