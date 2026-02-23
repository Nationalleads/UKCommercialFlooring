import { ukCities } from '../data/ukCities552';
import { blogPosts } from '../data/blogPosts';
import { caseStudies } from '../data/caseStudies';
import { birminghamSubLocationStats } from '../data/birminghamSubLocationStats';

const BASE_URL = 'https://www.ukcommercialflooring.co.uk';
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Helper to escape special characters in URLs
const escapeXml = (unsafe) => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

export const generateSitemap = () => {
  // Static Pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/services/epoxy', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/latex', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/shot-blasting', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/liquid-screed', priority: '0.9', changefreq: 'weekly' },
    { url: '/industrial-epoxy-flooring', priority: '0.9', changefreq: 'weekly' },
    { url: '/commercial-latex-flooring', priority: '0.9', changefreq: 'weekly' },
    { url: '/locations', priority: '0.8', changefreq: 'weekly' },
    { url: '/locations-index', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/quote', priority: '0.8', changefreq: 'monthly' },
    { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/birmingham', priority: '0.9', changefreq: 'weekly' },
  ];

  // Dynamic Location Pages
  const locationUrls = ukCities.map(city => ({
    url: `/locations/${city.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  // Birmingham Sub-locations
  const bhamUrls = birminghamSubLocationStats.map(loc => ({
    url: `/birmingham/${loc.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  // Blog Posts
  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  // Case Studies
  const caseStudyUrls = caseStudies.map(study => ({
    url: `/case-studies/${study.slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const allUrls = [
    ...staticPages,
    ...locationUrls,
    ...bhamUrls,
    ...blogUrls,
    ...caseStudyUrls
  ];

  // XML Construction
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allUrls.forEach(({ url, priority, changefreq }) => {
    const loc = escapeXml(`${BASE_URL}${url}`);
    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return xml;
};