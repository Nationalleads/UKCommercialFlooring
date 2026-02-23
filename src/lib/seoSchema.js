export const generateProductSchema = (name, description, image, brand = "UK Commercial Flooring") => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": name,
  "image": image,
  "description": description,
  "brand": {
    "@type": "Brand",
    "name": brand
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "124"
  }
});

export const generateLocalBusinessSchema = (name, description, image, latitude, longitude, address = {
  "@type": "PostalAddress",
  "streetAddress": "Industrial Estate",
  "addressCountry": "UK"
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": name,
  "image": image,
  "description": description,
  "address": address,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": latitude,
    "longitude": longitude
  },
  "url": "https://www.ukcommercialflooring.co.uk",
  "telephone": "+447700900000",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
});

export const generateServiceSchema = (name, serviceType, description, providerName = "UK Commercial Flooring") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "serviceType": serviceType,
  "provider": {
    "@type": "LocalBusiness",
    "name": providerName
  },
  "description": description,
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});