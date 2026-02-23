export const generateLocalBusinessSchema = (name, description, address, geo) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "image": "https://www.ukcommercialflooring.co.uk/logo.png",
    "telephone": "+447904909304",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address?.street || "28 York Avenue",
      "addressLocality": address?.locality || "Walsall",
      "postalCode": address?.postalCode || "WS2 9XA",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo?.lat || "52.5862",
      "longitude": geo?.lng || "-1.9829"
    },
    "url": window.location.href,
    "priceRange": "££"
  };
};

export const generatePlaceSchema = (name, description, population, region) => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": name,
      "addressRegion": region || "West Midlands",
      "addressCountry": "UK"
    },
    "containsPlace": {
      "@type": "Place",
      "name": "Birmingham"
    },
    "publicAccess": true,
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Population",
        "value": population
      }
    ]
  };
};

export const generateFAQPageSchema = (faqs) => {
  return {
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
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": crumb.path.startsWith('http') ? crumb.path : `https://www.ukcommercialflooring.co.uk${crumb.path}`
    }))
  };
};