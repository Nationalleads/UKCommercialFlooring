import React from 'react';
import LocationPageLayout from '@/components/LocationPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';

const LeedsPage = () => {
  const city = "Leeds";
  const description = "Trusted commercial flooring installers in Leeds. Specialized in industrial resin flooring, shot blasting, and floor preparation for Yorkshire businesses.";
  
  const coordinates = { lat: 53.8008, lng: -1.5491 };
  
  const stats = [
    { value: "300+", label: "Projects in Yorkshire" },
    { value: "48h", label: "Quote Turnaround" },
    { value: "5/5", label: "Client Rating" }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors Leeds",
    description,
    "https://images.unsplash.com/photo-1606909225043-9420b2874334",
    coordinates.lat,
    coordinates.lng,
    {
      "@type": "PostalAddress",
      "addressLocality": "Leeds",
      "addressRegion": "West Yorkshire",
      "addressCountry": "UK"
    }
  );

  return (
    <LocationPageLayout
      city={city}
      heroImage="https://images.unsplash.com/photo-1606909225043-9420b2874334"
      description={description}
      coordinates={coordinates}
      stats={stats}
      schema={schema}
    />
  );
};

export default LeedsPage;