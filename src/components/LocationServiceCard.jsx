
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LocationServiceCard = ({ title, keyword, icon: Icon, link, description }) => {
  return (
    <Link to={link} className="block w-full h-full">
      <motion.div 
        whileHover={{ scale: 1.03, y: -5 }}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#ff8c42] transition-all h-full flex flex-col group text-center md:text-left"
      >
        <div className="w-14 h-14 bg-[#1a2a4a]/5 rounded-xl flex items-center justify-center text-[#1a2a4a] group-hover:bg-[#ff8c42] group-hover:text-white transition-colors mb-6 mx-auto md:mx-0">
          <Icon size={32} />
        </div>
        
        <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-bold text-gray-500 rounded-full mb-3 uppercase tracking-wider mx-auto md:mx-0">
          {keyword}
        </div>

        <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="text-[#ff8c42] font-semibold flex items-center justify-center md:justify-start gap-2 group-hover:translate-x-2 transition-transform">
          View Details <ArrowRight size={16} />
        </div>
      </motion.div>
    </Link>
  );
};

export default LocationServiceCard;
