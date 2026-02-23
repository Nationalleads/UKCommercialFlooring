import { useState, useMemo } from 'react';
import { ukCities } from '@/data/ukCities';

export const useLocationData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [nearestLocation, setNearestLocation] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const filteredLocations = useMemo(() => {
    if (!searchTerm) return ukCities;
    const lowerTerm = searchTerm.toLowerCase();
    return ukCities.filter(city => 
      city.name.toLowerCase().includes(lowerTerm) || 
      city.postcode.toLowerCase().includes(lowerTerm) ||
      city.region.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  const findNearestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        let nearest = null;
        let minDistance = Infinity;

        ukCities.forEach(city => {
          const distance = Math.sqrt(
            Math.pow(city.latitude - latitude, 2) + 
            Math.pow(city.longitude - longitude, 2)
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            nearest = city;
          }
        });

        setNearestLocation(nearest);
        if (nearest) setSearchTerm(nearest.name);
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        setIsLoadingLocation(false);
      }
    );
  };

  return {
    locations: ukCities,
    filteredLocations,
    searchTerm,
    setSearchTerm,
    nearestLocation,
    findNearestLocation,
    isLoadingLocation
  };
};