import React from 'react';
import LocationPageLayout from '@/components/LocationPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';

const BristolPage = () => {
  const city = "Bristol";
  const description = "Professional commercial flooring contractors in Bristol. Serving the South West with high-quality resin flooring, surface prep, and screeding services.";
  
  const coordinates = { lat: 51.4545, lng: -2.5879 };
  
  const stats = [
    { value: "200+", label: "South West Projects" },
    { value: "Exp", label: "Installation Team" },
    { value: "100%", label: "Reliability" }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors Bristol",
    description,
    "https://images.unsplash.com/photo-1691354103779-bfdacb7ab8c9",
    coordinates.lat,
    coordinates.lng,
    {
      "@type": "PostalAddress",
      "addressLocality": "Bristol",
      "addressRegion": "South West",
      "addressCountry": "UK"
    }
  );

  return (
    <LocationPageLayout
      city={city}
      heroImage="https://images.unsplash.com/photo-1691354103779-bfdacb7ab8c9"
      description={description}
      coordinates={coordinates}
      stats={stats}
      schema={schema}
    />
  );
};

export default BristolPage;