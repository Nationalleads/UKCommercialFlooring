import React from 'react';
import LocationPageLayout from '@/components/LocationPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';

const GlasgowPage = () => {
  const city = "Glasgow";
  const description = "Leading industrial flooring specialists in Glasgow. Providing durable epoxy, polyurethane, and screed systems for Scotland's commercial sector.";
  
  const coordinates = { lat: 55.8642, lng: -4.2518 };
  
  const stats = [
    { value: "250+", label: "Scottish Projects" },
    { value: "Top", label: "Rated in Glasgow" },
    { value: "Local", label: "Expert Teams" }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors Glasgow",
    description,
    "https://images.unsplash.com/photo-1699221956378-a4b6f1398382",
    coordinates.lat,
    coordinates.lng,
    {
      "@type": "PostalAddress",
      "addressLocality": "Glasgow",
      "addressRegion": "Scotland",
      "addressCountry": "UK"
    }
  );

  return (
    <LocationPageLayout
      city={city}
      heroImage="https://images.unsplash.com/photo-1699221956378-a4b6f1398382"
      description={description}
      coordinates={coordinates}
      stats={stats}
      schema={schema}
    />
  );
};

export default GlasgowPage;