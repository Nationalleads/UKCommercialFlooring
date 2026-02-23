import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { ukCities } from '@/data/ukCities552';

const RelatedLocationsSection = ({ currentCity }) => {
  // Haversine formula to calculate distance in miles
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3959; // Radius of Earth in miles
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const relatedCities = useMemo(() => {
    if (!currentCity?.coordinates) return [];

    return ukCities
      .filter(city => city.slug !== currentCity.slug && city.coordinates)
      .map(city => ({
        ...city,
        distance: calculateDistance(
          currentCity.coordinates.lat,
          currentCity.coordinates.lng,
          city.coordinates.lat,
          city.coordinates.lng
        )
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 4);
  }, [currentCity]);

  if (relatedCities.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-[#1a2a4a] mb-8 text-center">
          Nearby Areas We Cover
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {relatedCities.map((city, index) => (
            <Link 
              key={index} 
              to={`/locations/${city.slug}`}
              className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border-2 border-[#0A1F4F] hover:border-[#ff8c42] flex items-center justify-between" // Added border-2 border-[#0A1F4F]
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#ff8c42]/10 flex items-center justify-center text-gray-500 group-hover:text-[#ff8c42] transition-colors">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="font-bold text-[#1a2a4a] text-sm group-hover:text-[#ff8c42] transition-colors">
                    {city.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {city.distance.toFixed(1)} miles away
                  </div>
                </div>
              </div>
              <ArrowRight size={14} className="text-gray-300 group-hover:text-[#ff8c42] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLocationsSection;