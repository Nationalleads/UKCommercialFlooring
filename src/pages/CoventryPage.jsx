import React from 'react';
import LocationPageLayout from '@/components/LocationPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';

const CoventryPage = () => {
  const city = "Coventry";
  const description = "Your local commercial flooring experts in Coventry. Specializing in factory floor refurbishment, epoxy coatings, and industrial screeds.";
  
  const coordinates = { lat: 52.4081, lng: -1.5105 };
  
  const stats = [
    { value: "150+", label: "Coventry Projects" },
    { value: "Fast", label: "Response Time" },
    { value: "Local", label: "Specialists" }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors Coventry",
    description,
    "https://images.unsplash.com/photo-1694885169342-909981fb408a",
    coordinates.lat,
    coordinates.lng,
    {
      "@type": "PostalAddress",
      "addressLocality": "Coventry",
      "addressRegion": "West Midlands",
      "addressCountry": "UK"
    }
  );

  return (
    <LocationPageLayout
      city={city}
      heroImage="https://images.unsplash.com/photo-1694885169342-909981fb408a"
      description={description}
      coordinates={coordinates}
      stats={stats}
      schema={schema}
    />
  );
};

export default CoventryPage;