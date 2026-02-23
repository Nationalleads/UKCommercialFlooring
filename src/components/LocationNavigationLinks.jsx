import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ukCities } from '@/data/ukCities552';

const LocationNavigationLinks = ({ currentSlug }) => {
  // Sort cities alphabetically to ensure deterministic next/prev
  const sortedCities = [...ukCities].sort((a, b) => a.name.localeCompare(b.name));
  const currentIndex = sortedCities.findIndex(c => c.slug === currentSlug);

  if (currentIndex === -1) return null;

  const prevCity = currentIndex > 0 ? sortedCities[currentIndex - 1] : sortedCities[sortedCities.length - 1];
  const nextCity = currentIndex < sortedCities.length - 1 ? sortedCities[currentIndex + 1] : sortedCities[0];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-gray-200 mt-12">
      <Link 
        to={`/locations/${prevCity.slug}`}
        className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-[#ff8c42] hover:shadow-md transition-all w-full sm:w-auto"
      >
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors">
          <ChevronLeft size={16} />
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Previous Location</div>
          <div className="font-bold text-[#1a2a4a] group-hover:text-[#ff8c42] transition-colors">{prevCity.name}</div>
        </div>
      </Link>

      <Link 
        to="/locations-index"
        className="text-sm font-semibold text-gray-500 hover:text-[#ff8c42] hover:underline hidden sm:block"
      >
        View All Locations
      </Link>

      <Link 
        to={`/locations/${nextCity.slug}`}
        className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-[#ff8c42] hover:shadow-md transition-all w-full sm:w-auto flex-row-reverse sm:flex-row"
      >
        <div className="text-right">
          <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Next Location</div>
          <div className="font-bold text-[#1a2a4a] group-hover:text-[#ff8c42] transition-colors">{nextCity.name}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors">
          <ChevronRight size={16} />
        </div>
      </Link>
    </div>
  );
};

export default LocationNavigationLinks;