export const generateBlogMetaTitle = (post) => {
  return `${post.title} | UK Commercial Flooring Blog`;
};

export const generateBlogMetaDescription = (post) => {
  return post.excerpt || `${post.title} - Expert guide by UK Commercial Flooring. Read more about ${post.category} solutions.`;
};

export const generateBlogSchema = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.featuredImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "UK Commercial Flooring",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ukcommercialflooring.co.uk/logo.png"
      }
    },
    "datePublished": post.publishedDate,
    "description": post.excerpt,
    "articleBody": post.content
  };
};

export const generateCaseStudyMetaTitle = (study) => {
  return `Case Study: ${study.title} | UK Commercial Flooring`;
};

export const generateCaseStudyMetaDescription = (study) => {
  return `See how we solved ${study.problem.substring(0, 50)}... in ${study.location}. ${study.serviceType} project results.`;
};

export const generateCaseStudySchema = (study) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "image": study.afterImage,
    "author": {
      "@type": "Organization",
      "name": "UK Commercial Flooring"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UK Commercial Flooring",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ukcommercialflooring.co.uk/logo.png"
      }
    },
    "datePublished": study.publishedDate,
    "description": study.description,
    "articleSection": "Case Studies"
  };
};