
import { ukCities } from '@/data/ukCities552';

/**
 * Validates that all cities in the dataset have a valid imageUrl property.
 * Logs a detailed report to the console.
 */
export const validateLocationImages = () => {
  const total = ukCities.length;
  const missing = ukCities.filter(city => !city.imageUrl || city.imageUrl.trim() === '');
  const hasImages = total - missing.length;
  const coveragePercent = Math.round((hasImages / total) * 100);

  const report = {
    totalLocations: total,
    locationsWithImages: hasImages,
    locationsMissingImages: missing.length,
    coverage: `${coveragePercent}%`,
    status: missing.length === 0 ? 'SUCCESS' : 'WARNING'
  };

  console.groupCollapsed('🇬🇧 UK Cities Image Validation Report');
  console.log('Audit Summary:', report);
  
  if (missing.length > 0) {
    console.warn(`⚠️ Found ${missing.length} locations without images:`);
    console.table(missing.map(c => ({ 
      id: c.id, 
      name: c.name, 
      slug: c.slug 
    })));
  } else {
    console.log('%c✨ All 552 locations have valid image URLs assigned.', 'color: green; font-weight: bold;');
  }
  
  // Sample check of first 3 images
  console.log('Sample Data (First 3):', ukCities.slice(0, 3).map(c => ({ name: c.name, image: c.imageUrl })));
  console.groupEnd();

  return missing.length === 0;
};
