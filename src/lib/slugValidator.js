/**
 * Ensures a string is a valid slug: lowercase, hyphenated, no special chars.
 * @param {string} text 
 * @returns {string}
 */
export const createSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
};

/**
 * Validates if a slug is correct.
 * @param {string} slug 
 * @returns {boolean}
 */
export const isValidSlug = (slug) => {
  const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return regex.test(slug);
};

/**
 * Audits a list of cities for valid slugs.
 * @param {Array} cities 
 * @returns {Object} Report of invalid slugs
 */
export const auditCitySlugs = (cities) => {
  const report = {
    total: cities.length,
    valid: 0,
    invalid: [],
    fixed: []
  };

  cities.forEach(city => {
    const currentSlug = city.slug;
    
    // If slug is missing, generate it
    if (!currentSlug) {
      const newSlug = createSlug(city.name);
      report.invalid.push({ name: city.name, issue: 'Missing slug', suggested: newSlug });
      report.fixed.push({ ...city, slug: newSlug });
      return;
    }

    if (!isValidSlug(currentSlug)) {
      const newSlug = createSlug(city.name);
      report.invalid.push({ name: city.name, current: currentSlug, issue: 'Invalid format', suggested: newSlug });
      report.fixed.push({ ...city, slug: newSlug });
    } else {
      report.valid++;
      report.fixed.push(city);
    }
  });

  return report;
};