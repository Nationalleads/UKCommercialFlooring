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

export const generateSitemapBirmingham = () => {
  // Collect all URL data objects first
  const urls = [];

  // 1. Main Pillar Page
  urls.push({
    url: '/birmingham',
    priority: '0.9',
    changefreq: 'weekly'
  });

  // 2. Sub-locations
  birminghamSubLocationStats.forEach(loc => {
    urls.push({
      url: `/birmingham/${loc.slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  });

  // Construct XML String
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(({ url, priority, changefreq }) => {
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