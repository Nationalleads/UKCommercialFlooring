import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';
import { ukCities } from '@/data/ukCities552';

// Simplified visual representation of a map grid since we can't use heavy map libraries
const LocationMap = () => {
  const [filter, setFilter] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  const filteredCities = filter 
    ? ukCities.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    : ukCities.slice(0, 12); // Show top 12 by default

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-[#1a2a4a] p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="text-[#ff8c42]" /> 
              Nationwide Coverage
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              We operate mobile teams from 10 major hubs across the UK.
            </p>
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Check your area..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 bg-gray-50 max-h-[400px] overflow-y-auto">
        {filteredCities.map((city) => (
          <motion.button
            key={city.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedCity(city)}
            className={`p-3 rounded-lg text-left transition-all flex items-center justify-between group ${
              selectedCity?.id === city.id 
                ? 'bg-[#ff8c42] text-white shadow-lg' 
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md border border-gray-100'
            }`}
          >
            <div>
              <div className="font-bold text-sm">{city.name}</div>
              <div className={`text-xs ${selectedCity?.id === city.id ? 'text-white/80' : 'text-gray-400'}`}>
                {city.postcode_area} Area
              </div>
            </div>
            {selectedCity?.id === city.id && <MapPin size={16} />}
          </motion.button>
        ))}
        {filteredCities.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            No locations found matching "{filter}". Try a major city nearby.
          </div>
        )}
      </div>

      <div className="bg-orange-50 p-4 border-t border-orange-100 flex justify-center">
         <p className="text-sm text-[#1a2a4a] font-medium text-center">
            {selectedCity 
              ? `✅ Yes! We have a team covering ${selectedCity.name} and the surrounding ${selectedCity.postcode_area} postcode area.`
              : "Select a location above to check service availability."}
         </p>
      </div>
    </div>
  );
};

export default LocationMap;