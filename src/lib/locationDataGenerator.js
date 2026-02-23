export const generateLocationMetaTitle = (city) => {
  return `${city.name} Commercial Flooring Contractors | Epoxy Resin & Screed Specialists`;
};

export const generateLocationMetaDescription = (city) => {
  return `Leading commercial flooring contractors in ${city.name} (${city.postcode_area}). Specialist epoxy resin, latex screed, and shot blasting services for ${city.name} warehouses. Free Site Survey.`;
};

export const generateLocationSchema = (city) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `UK Commercial Flooring ${city.name}`,
    "image": city.imageUrl || "https://www.ukcommercialflooring.co.uk/images/logo.png",
    "telephone": "+447700900000",
    "url": `https://www.ukcommercialflooring.co.uk/locations/${city.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.nearest_hub,
      "postalCode": city.postcode_area,
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
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

export const generateLongTailKeywords = (city) => {
  return [
    `${city.name} industrial floor installers`,
    `epoxy resin flooring ${city.name}`,
    `warehouse flooring contractors ${city.name}`,
    `shot blasting services ${city.name}`,
    `latex screed ${city.name}`
  ];
};