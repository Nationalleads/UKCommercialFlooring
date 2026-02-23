
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to format date
const formatDate = (date) => date.toISOString().split('T')[0];
const TODAY = formatDate(new Date());

const BASE_URL = 'https://www.ukcommercialflooring.co.uk';

// Core routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services/epoxy', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/latex', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/liquid-screed', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/shot-blasting', priority: '0.9', changefreq: 'monthly' },
  { url: '/concrete-grinding', priority: '0.9', changefreq: 'monthly' },
  { url: '/floor-repairs-scabbling', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations', priority: '0.9', changefreq: 'weekly' },
  { url: '/birmingham', priority: '0.95', changefreq: 'weekly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
];

const generateSitemap = async () => {
  console.log('Generating sitemap...');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  routes.forEach(route => {
    xml += `
  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // NOTE: In a real environment, you would import the data files here.
  // Since we are in a limited environment, we are generating the core file manually.
  // This script serves as a template for future full automation.

  xml += `
</urlset>`;

  const publicPath = path.join(__dirname, '../public');
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
  }

  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), xml);
  console.log('Sitemap generated at public/sitemap.xml');
};

generateSitemap();
