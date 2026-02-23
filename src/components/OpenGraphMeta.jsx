import React from 'react';
import { Helmet } from 'react-helmet';

const OpenGraphMeta = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  siteName = 'UK Commercial Flooring' 
}) => {
  const fullTitle = title.includes('|') ? title : `${title} | UK Commercial Flooring`;
  const fullUrl = url.startsWith('http') ? url : `https://www.ukcommercialflooring.co.uk${url}`;

  return (
    <Helmet>
      {/* Basic Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default OpenGraphMeta;