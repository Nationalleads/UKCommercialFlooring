import React from 'react';
import LocationPageLayout from '@/components/LocationPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';

const ManchesterPage = () => {
  const city = "Manchester";
  const description = "Expert industrial flooring contractors in Manchester. Delivering high-performance epoxy and screed solutions for factories and warehouses in the North West.";
  
  const coordinates = { lat: 53.4808, lng: -2.2426 };
  
  const stats = [
    { value: "400+", label: "Manchester Clients" },
    { value: "10+", label: "Years Serving NW" },
    { value: "A+", label: "Safety Rating" }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors Manchester",
    description,
    "https://images.unsplash.com/photo-1694885169342-909981fb408a",
    coordinates.lat,
    coordinates.lng,
    {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
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

export default ManchesterPage;