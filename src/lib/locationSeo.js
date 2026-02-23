export const generateLocationMetaDescription = (city) => {
  return `Premier Commercial Flooring Contractors in ${city.name} (${city.postcode}). Specializing in industrial epoxy, latex screed, and shot blasting services for ${city.region} businesses. serving ${city.industrialParks} local industrial parks. Free Site Surveys.`;
};

export const generateLocationSchema = (city) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Commercial Flooring Contractors ${city.name}`,
    "image": city.imageUrl,
    "telephone": "+447700900000",
    "url": `https://www.ukcommercialflooring.co.uk/locations/${city.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.region,
      "postalCode": city.postcode,
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.latitude,
      "longitude": city.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "££",
    "areaServed": {
      "@type": "City",
      "name": city.name
    }
  };
};

export const generateCanonicalUrl = (city) => {
  return `https://www.ukcommercialflooring.co.uk/locations/${city.slug}`;
};