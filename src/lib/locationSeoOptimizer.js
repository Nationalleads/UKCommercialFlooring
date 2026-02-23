import { cityGovernmentStats } from '@/data/cityGovernmentStats';

export const generateLocationTitle = (city) => {
  return `Commercial Flooring Contractors ${city.name} | Epoxy & Screed Specialists`;
};

export const generateLocationDescription = (city) => {
  const stats = cityGovernmentStats[city.slug] || cityGovernmentStats['default'];
  return `Expert flooring contractors in ${city.name} (${city.postcode_area}). Serving ${stats.business_count} local businesses with industrial epoxy, liquid screed, and shot blasting services. Free site surveys.`;
};

export const generateLocalBusinessSchema = (city) => {
  const stats = cityGovernmentStats[city.slug] || cityGovernmentStats['default'];
  
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `UK Commercial Flooring ${city.name}`,
    "image": city.imageUrl || "https://www.ukcommercialflooring.co.uk/logo.png",
    "telephone": "+447904909304",
    "email": "info@ukcommercialflooring.co.uk",
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
      "latitude": city.coordinates?.lat,
      "longitude": city.coordinates?.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "description": `Leading industrial flooring contractor in ${city.name}. Local population: ${stats.population}. Services include epoxy resin, latex screeding, and floor preparation.`,
    "priceRange": "££"
  };
};

export const generateBreadcrumbSchema = (city) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ukcommercialflooring.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.ukcommercialflooring.co.uk/locations-index"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": `https://www.ukcommercialflooring.co.uk/locations/${city.slug}`
      }
    ]
  };
};