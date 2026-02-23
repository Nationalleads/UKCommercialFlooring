
import React from 'react';
import { Helmet } from 'react-helmet';
import LiquidScreedHeroSection from '@/components/liquid-screed/LiquidScreedHeroSection';
import LiquidScreedBenefitsSection from '@/components/liquid-screed/LiquidScreedBenefitsSection';
import LiquidScreedServicesSection from '@/components/liquid-screed/LiquidScreedServicesSection';
import LiquidScreedInstallationProcessSection from '@/components/liquid-screed/LiquidScreedInstallationProcessSection';
import LiquidScreedCostsSection from '@/components/liquid-screed/LiquidScreedCostsSection';
import LiquidScreedFAQSection from '@/components/liquid-screed/LiquidScreedFAQSection';
import LiquidScreedCaseStudiesSection from '@/components/liquid-screed/LiquidScreedCaseStudiesSection';
import LiquidScreedCTASection from '@/components/liquid-screed/LiquidScreedCTASection';

const LiquidScreedPillarPage = () => {
  const pageTitle = "Liquid Screed UK | Commercial Flow Screed Contractors Guide";
  const pageDescription = "Liquid screed & flow screed for warehouses UK – anhydrite UFH installs by experts. Free Birmingham quotes nationwide. Fast drying, self-levelling solutions.";
  const canonicalUrl = "https://www.ukcommercialflooring.co.uk/services/liquid-screed";

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1457369444200-60f6a6cf5298" />
        
        {/* Schema: BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ukcommercialflooring.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.ukcommercialflooring.co.uk/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Liquid Screed",
                "item": canonicalUrl
              }
            ]
          })}
        </script>
        
        {/* Schema: Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Liquid Screed Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "UK Commercial Flooring",
              "image": "https://www.ukcommercialflooring.co.uk/logo.png",
              "telephone": "+447904909304",
              "priceRange": "££"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "description": pageDescription,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Liquid Screed Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Anhydrite Flow Screed"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cementitious Liquid Screed"
                  }
                },
                {
                   "@type": "Offer",
                   "itemOffered": {
                     "@type": "Service",
                     "name": "Underfloor Heating Screeding"
                   }
                 }
              ]
            }
          })}
        </script>
      </Helmet>

      <main>
        <LiquidScreedHeroSection />
        <LiquidScreedBenefitsSection />
        <LiquidScreedServicesSection />
        <LiquidScreedInstallationProcessSection />
        <LiquidScreedCostsSection />
        <LiquidScreedCaseStudiesSection />
        <LiquidScreedFAQSection />
        <LiquidScreedCTASection />
      </main>
    </div>
  );
};

export default LiquidScreedPillarPage;
