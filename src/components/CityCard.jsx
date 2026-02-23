
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CityCard = ({ city, variant = 'list' }) => {
  if (variant === 'featured') {
    return (
      <Link to={`/locations/${city.slug}`} className="group h-full block w-full">
        <motion.div 
          whileHover={{ y: -5 }}
          className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all relative flex flex-col"
        >
          <div className="h-48 relative overflow-hidden w-full">
            <img 
              src={city.imageUrl || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"} 
              alt={`${city.name} Commercial Flooring`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a] via-transparent to-transparent opacity-90" />
            
            <div className="absolute top-4 right-4 bg-[#ff8c42] text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
              {city.postcode_area}
            </div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-0.5">{city.name}</h3>
              <div className="flex items-center gap-1 text-xs text-gray-300">
                <MapPin size={12} /> {city.nearest_hub}
              </div>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center bg-gray-50 group-hover:bg-white transition-colors flex-grow">
              <div className="text-xs text-gray-500 text-left">
                <span className="block font-semibold text-gray-700">{city.industrial_sector}</span>
                <span>Pop: {city.population}</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-200 group-hover:bg-[#ff8c42] flex items-center justify-center transition-colors text-gray-600 group-hover:text-white shrink-0">
                <ArrowRight size={14} />
              </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // List variant
  return (
    <Link 
      to={`/locations/${city.slug}`}
      className="group block bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-[#ff8c42]/30 transition-all duration-200 w-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-[#ff8c42]/10 group-hover:text-[#ff8c42] flex items-center justify-center transition-colors shrink-0">
            <Building2 size={18} />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-gray-800 group-hover:text-[#ff8c42] transition-colors">
              {city.name}
            </h4>
            <div className="text-xs text-gray-400 flex gap-2 flex-wrap">
              <span>{city.postcode_area}</span>
              <span className="hidden sm:inline">•</span>
              <span>Hub: {city.nearest_hub}</span>
            </div>
          </div>
        </div>
        <ArrowRight size={16} className="text-gray-300 group-hover:text-[#ff8c42] transform group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </Link>
  );
};

export default CityCard;
