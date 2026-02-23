import React from 'react';
import LocationPageLayout from '@/components/LocationPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';

const LondonPage = () => {
  const city = "London";
  const description = "Premier commercial flooring contractors in London. Specialist epoxy and resin flooring installation for industrial and commercial sectors across Greater London.";
  
  const coordinates = { lat: 51.5074, lng: -0.1278 };
  
  const stats = [
    { value: "850+", label: "London Projects" },
    { value: "24/7", label: "Installation Teams" },
    { value: "TOP", label: "Rated Contractor" }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors London",
    description,
    "https://images.unsplash.com/photo-1510130987633-2a82b350a9c2",
    coordinates.lat,
    coordinates.lng,
    {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "UK"
    }
  );

  return (
    <LocationPageLayout
      city={city}
      heroImage="https://images.unsplash.com/photo-1510130987633-2a82b350a9c2"
      description={description}
      coordinates={coordinates}
      stats={stats}
      schema={schema}
    />
  );
};

export default LondonPage;