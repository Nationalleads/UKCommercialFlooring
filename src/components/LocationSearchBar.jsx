import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Loader2, X } from 'lucide-react';
import { ukCities } from '@/data/ukCities552';

const LocationSearchBar = ({ className = "" }) => {
  const [query, setQuery] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Debounce query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Filter logic
  const filteredCities = debouncedQuery 
    ? ukCities.filter(city => 
        city.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
        city.postcode_area.toLowerCase().includes(debouncedQuery.toLowerCase())
      ).slice(0, 10)
    : [];

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (slug) => {
    setQuery("");
    setShowResults(false);
    navigate(`/locations/${slug}`);
  };

  const handleLocate = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        let nearest = null;
        let minDistance = Infinity;

        ukCities.forEach(city => {
          const dist = Math.sqrt(
            Math.pow(city.coordinates.lat - latitude, 2) + 
            Math.pow(city.coordinates.lng - longitude, 2)
          );
          if (dist < minDistance) {
            minDistance = dist;
            nearest = city;
          }
        });

        setIsLocating(false);
        if (nearest) {
          handleSelect(nearest.slug);
        }
      }, (error) => {
        console.error(error);
        setIsLocating(false);
        // Could implement toast error here
      });
    } else {
      setIsLocating(false);
    }
  };

  return (
    <div ref={wrapperRef} className={`relative w-full max-w-2xl mx-auto px-1 ${className}`}>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search town, city or postcode..."
          className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-12 sm:pr-32 rounded-xl border-none shadow-xl text-base sm:text-lg focus:ring-2 focus:ring-[#ff8c42] outline-none text-gray-800 placeholder:text-gray-400 truncate"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
        />
        <Search className="absolute left-3 sm:left-4 text-gray-400" size={18} />
        
        {query && (
          <button 
            onClick={() => { setQuery(""); setShowResults(false); }}
            className="absolute right-12 sm:right-36 p-1 hover:bg-gray-100 rounded-full text-gray-400"
          >
            <X size={16} />
          </button>
        )}

        {/* Mobile: Icon only, Desktop: Icon + Text */}
        <button
          onClick={handleLocate}
          disabled={isLocating}
          className="absolute right-1 sm:right-2 h-10 w-10 sm:w-auto sm:px-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
          aria-label="Use GPS to locate"
        >
          {isLocating ? <Loader2 className="animate-spin" size={16} /> : <MapPin size={18} />}
          <span className="hidden sm:inline">Use GPS</span>
        </button>
      </div>

      {showResults && debouncedQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 mx-1 sm:mx-0 border border-gray-100">
          {filteredCities.length > 0 ? (
            <>
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleSelect(city.slug)}
                  className="w-full px-4 sm:px-6 py-3 text-left hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 last:border-0 group transition-colors"
                >
                  <div className="truncate pr-2">
                    <span className="font-bold text-[#1a2a4a] block truncate">{city.name}</span>
                    <span className="text-xs text-gray-500 truncate block">Hub: {city.nearest_hub}</span>
                  </div>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors whitespace-nowrap">
                    {city.postcode_area}
                  </span>
                </button>
              ))}
              <div className="bg-gray-50 px-6 py-2 text-xs text-gray-500 text-center">
                Showing {filteredCities.length} matches
              </div>
            </>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <p>No locations found matching "{debouncedQuery}"</p>
              <p className="text-sm mt-2">Try a larger city near you.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSearchBar;