import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';
import { ukCities } from '@/data/ukCities552';

const QuoteStep2 = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initial load
    if (searchTerm === '') {
      setFilteredCities(ukCities.slice(0, 10)); // Show top 10 initially
    } else {
      const lower = searchTerm.toLowerCase();
      const filtered = ukCities.filter(c => c.name.toLowerCase().includes(lower));
      setFilteredCities(filtered.slice(0, 20)); // Limit results for performance
    }
  }, [searchTerm]);

  const handleSelect = (cityName) => {
    onChange(cityName);
    setSearchTerm(cityName);
    setIsOpen(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#1a2a4a] mb-2">Where is the project located?</h2>
      <p className="text-gray-600 mb-6">We serve the entire UK. Select the nearest city or town.</p>

      <div className="relative">
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={value || searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onChange(e.target.value); // Allow custom text
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search for a city (e.g. Birmingham)..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff8c42] focus:ring-0 outline-none text-lg transition-colors"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-y-auto z-50"
          >
            <div 
              onClick={() => handleSelect('UK-Wide / National')}
              className="px-4 py-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 font-bold text-[#ff8c42]"
            >
              🌍 UK-Wide / National Project
            </div>
            {filteredCities.length > 0 ? (
              filteredCities.map(city => (
                <div
                  key={city.id}
                  onClick={() => handleSelect(city.name)}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 flex justify-between items-center group"
                >
                  <span>{city.name}</span>
                  <span className="text-xs text-gray-400 group-hover:text-[#ff8c42]">{city.postcode_area} Area</span>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-gray-400">No cities found. You can type a custom location.</div>
            )}
          </motion.div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Popular Locations</h3>
        <div className="flex flex-wrap gap-2">
          {['Birmingham', 'London', 'Manchester', 'Leeds', 'Bristol', 'Glasgow'].map(city => (
            <button
              key={city}
              type="button"
              onClick={() => handleSelect(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                value === city 
                  ? 'bg-[#ff8c42] text-white border-[#ff8c42]' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteStep2;