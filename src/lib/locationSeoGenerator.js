export const generateLocationMetaTitle = (city) => {
  return `${city.name} Commercial & Industrial Flooring Contractors | ukcommercialflooring.co.uk`;
};

export const generateLocationMetaDescription = (city) => {
  return `Epoxy, latex, blast, screed in ${city.name} – Specialist services for warehouses. Free quote. Specialist industrial flooring contractors serving ${city.postcode_area} area.`;
};

export const generateCanonicalUrl = (city) => {
  return `https://www.ukcommercialflooring.co.uk/locations/${city.slug}`;
};

export const generateOpenGraphTags = (city) => {
  const title = generateLocationMetaTitle(city);
  const desc = generateLocationMetaDescription(city);
  const url = generateCanonicalUrl(city);
  const image = city.imageUrl || "https://www.ukcommercialflooring.co.uk/images/og-default.jpg";

  return [
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:site_name", content: "UK Commercial Flooring" },
    { property: "og:locale", content: "en_GB" }
  ];
};

export const generateLocalBusinessSchema = (city) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `UK Commercial Flooring ${city.name}`,
    "image": city.imageUrl,
    "telephone": "+447700900000",
    "url": generateCanonicalUrl(city),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.nearest_hub, // Using nearest hub as region/county proxy if specific county isn't available
      "postalCode": city.postcode_area, // Using area code as proxy
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates?.lat,
      "longitude": city.coordinates?.lng
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };
};

export const generateFAQSchema = (city) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does epoxy flooring cost in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Epoxy flooring costs in ${city.name} typically range from £30 to £80 per square meter, depending on the condition of the existing substrate and the specific system required (e.g., coatings vs. screeds). Contact us for a free site survey and accurate quote.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you cover all industrial estates in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, our teams cover the entire ${city.name} area (${city.postcode_area} postcode), including all major industrial parks and business districts near ${city.nearest_hub}.`
        }
      },
      {
        "@type": "Question",
        "name": `How quickly can you start a project in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We have rapid response teams operating from our ${city.nearest_hub} hub. We can typically attend for a site survey within 24-48 hours and schedule works to minimize downtime for your business.`
        }
      }
    ]
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
        "item": "https://www.ukcommercialflooring.co.uk/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": generateCanonicalUrl(city)
      }
    ]
  };
};