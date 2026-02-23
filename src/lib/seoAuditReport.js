import { 
  generateLocationMetaTitle, 
  generateLocationMetaDescription, 
  generateCanonicalUrl 
} from './locationSeoGenerator';
import { auditCitySlugs } from './slugValidator';

/**
 * Generates a comprehensive SEO audit report for a list of cities.
 * This function simulates checking if the required SEO elements CAN be generated successfully.
 * In a real environment, this might scrape the rendered DOM, but here we validate data integrity.
 * 
 * @param {Array} cities 
 * @returns {Object} Comprehensive Audit Report
 */
export const generateSeoAuditReport = (cities) => {
  const timestamp = new Date().toISOString();
  const slugAudit = auditCitySlugs(cities);
  
  const seoHealth = {
    metaTitles: [],
    metaDescriptions: [],
    canonicals: [],
    missingImages: []
  };

  cities.forEach(city => {
    // Check Meta Title Generation
    const title = generateLocationMetaTitle(city);
    if (!title || title.length < 30 || title.length > 70) {
      seoHealth.metaTitles.push({ city: city.name, length: title?.length, value: title, issue: 'Length warning (ideal: 30-70 chars)' });
    }

    // Check Meta Description Generation
    const desc = generateLocationMetaDescription(city);
    if (!desc || desc.length < 120 || desc.length > 160) {
      seoHealth.metaDescriptions.push({ city: city.name, length: desc?.length, value: desc, issue: 'Length warning (ideal: 120-160 chars)' });
    }

    // Check Canonical
    const canonical = generateCanonicalUrl(city);
    if (!canonical.includes(city.slug)) {
      seoHealth.canonicals.push({ city: city.name, value: canonical, issue: 'Canonical does not match slug' });
    }

    // Check Images
    if (!city.imageUrl) {
      seoHealth.missingImages.push({ city: city.name, issue: 'Missing main image URL' });
    }
  });

  return {
    timestamp,
    totalLocations: cities.length,
    slugHealth: {
      validSlugs: slugAudit.valid,
      invalidSlugs: slugAudit.invalid.length,
      details: slugAudit.invalid
    },
    seoContentHealth: {
      titleIssues: seoHealth.metaTitles.length,
      descriptionIssues: seoHealth.metaDescriptions.length,
      imageIssues: seoHealth.missingImages.length
    },
    recommendations: [
      seoHealth.metaTitles.length > 0 ? "Review meta title templates for length optimization." : "Meta titles look good.",
      seoHealth.metaDescriptions.length > 0 ? "Adjust meta description to fit within 150-160 chars." : "Meta descriptions are optimal.",
      slugAudit.invalid.length > 0 ? "Run slug auto-corrector to fix URL inconsistencies." : "All URL slugs are valid."
    ]
  };
};