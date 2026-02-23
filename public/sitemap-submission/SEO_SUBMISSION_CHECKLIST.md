
# SEO Submission & Launch Checklist

Use this checklist to ensure a flawless rollout of the `ukcommercialflooring.co.uk` sitemap and SEO foundation.

## 1. Pre-Submission Verification
- [ ] **Sitemap Accessibility**
    - [ ] Navigate to `/sitemap.xml` in Incognito mode.
    - [ ] Confirm XML structure renders correctly (no white screen/React errors).
    - [ ] Verify `Last-Modified` dates are current.
- [ ] **Content Validation**
    - [ ] Check that `https://` version is used for all URLs (not `http://`).
    - [ ] Ensure no `localhost:3000` links accidentally remain in the generator.
    - [ ] Confirm all 550+ location pages are present.
- [ ] **Robots.txt Configuration**
    - [ ] Verify `public/robots.txt` exists.
    - [ ] Ensure it allows crawling: `User-agent: *` followed by `Allow: /`.
    - [ ] Verify Sitemap directive is present: `Sitemap: https://www.ukcommercialflooring.co.uk/sitemap.xml`.

## 2. Google Search Console (GSC)
- [ ] **Property Verification**
    - [ ] Add Domain Property (DNS verification) OR URL Prefix Property.
    - [ ] Verify ownership successfully.
- [ ] **Sitemap Submission**
    - [ ] Navigate to **Sitemaps**.
    - [ ] Enter `sitemap.xml`.
    - [ ] Click Submit.
    - [ ] Confirm status is "Success" (may take 24hrs).
- [ ] **Initial Inspection**
    - [ ] Use "URL Inspection" tool on the homepage.
    - [ ] Request Indexing for the homepage manually to jumpstart the crawl.

## 3. Bing Webmaster Tools
- [ ] **Account Setup**
    - [ ] Import verified property from GSC (fastest method).
    - [ ] Alternatively, manually verify via meta tag.
- [ ] **Submission**
    - [ ] Navigate to **Sitemaps**.
    - [ ] Submit full URL: `https://www.ukcommercialflooring.co.uk/sitemap.xml`.
- [ ] **Configuration**
    - [ ] Set "Crawl Control" to standard hours (usually defaults are fine).

## 4. Post-Submission Monitoring (Week 1)
- [ ] **Index Status**
    - [ ] Check GSC "Pages" report daily.
    - [ ] Look for "Discovered - currently not indexed" (normal for new large sites).
    - [ ] Look for "Crawled - currently not indexed" (check content quality).
- [ ] **Error Resolution**
    - [ ] Monitor for 404s in "Page Indexing" report.
    - [ ] Fix any "Soft 404" errors for location pages that might look too similar.
- [ ] **Brand Search**
    - [ ] Search Google for `site:ukcommercialflooring.co.uk`.
    - [ ] Confirm core pages appear in results.

## 5. Ongoing Maintenance (Monthly)
- [ ] **Re-submission**
    - [ ] Only required if you change site structure or add >100 pages at once.
- [ ] **Performance Review**
    - [ ] Check "Search Results" > "Total Impressions".
    - [ ] Identify top performing location keywords.
- [ ] **Clean-up**
    - [ ] Remove any broken links or old deleted blog posts from `src/data` files to keep sitemap clean.
