
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const LocationCard = ({ 
  image, 
  name, 
  description, 
  slug, 
  baseUrl = "/locations", 
  index = 0
}) => {
  // Default fallback if everything else fails
  const fallbackImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80";
  const imageSource = image && image.trim() !== '' ? image : fallbackImage;
  
  const toPath = slug.startsWith('/') 
    ? slug 
    : `${baseUrl.replace(/\/$/, '')}/${slug}`;

  return (
    <Link to={toPath} className="block h-full cursor-pointer w-full">
      <motion.div 
        className="group relative h-full bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-[#ff8c42]/30 flex flex-col transform transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }} 
      >
        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-200">
          <LazyImage 
            src={imageSource} 
            fallbackSrc={fallbackImage}
            alt={`Commercial flooring services in ${name}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 z-10">
            <MapPin size={14} className="text-[#ff8c42]" />
            <span className="text-xs font-bold uppercase tracking-wider text-shadow-sm">{name}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col justify-between items-center text-center md:items-start md:text-left">
          <div className="w-full">
            <h3 className="text-lg font-bold text-[#1a2a4a] mb-2 group-hover:text-[#ff8c42] transition-colors line-clamp-1">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
                {description}
              </p>
            )}
          </div>
          
          <div className="flex items-center text-sm font-semibold text-[#ff8c42] group/link mt-auto">
            <span>View Area Guide</span>
            <ArrowRight size={16} className="ml-2 transform transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default LocationCard;
