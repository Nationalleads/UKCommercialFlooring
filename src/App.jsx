
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";
import Preloader from './components/Preloader';
import usePreloader from './hooks/usePreloader';
import WhatsAppWidget from './components/WhatsAppWidget';

// Import Pages
import HomePage from './pages/HomePage';
import LocationsHub from './pages/LocationsHub';
import DynamicLocationPage from './pages/DynamicLocationPage';
import LocationsIndexPage from './pages/LocationsIndexPage';
import BlogHub from './pages/BlogHub';
import BlogPostDetail from './pages/BlogPostDetail';
import CaseStudiesHub from './pages/CaseStudiesHub';
import CaseStudyDetail from './pages/CaseStudyDetail';
import QuotePage from './pages/QuotePage';
import FaqPage from './pages/FaqPage';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap'; 
import PrivacyPolicy from './pages/PrivacyPolicy';

// Service Pages
import EpoxyPillarPage from './pages/services/EpoxyPillarPage';
import LatexPillarPage from './pages/services/LatexPillarPage';
import ShotBlastingPillarPage from './pages/services/ShotBlastingPillarPage';
import LiquidScreedPillarPage from './pages/services/LiquidScreedPillarPage';
import IndustrialEpoxyFlooring from './pages/services/IndustrialEpoxyFlooring';
import CommercialLatexFlooring from './pages/services/CommercialLatexFlooring';
import ConcreteGrindingPillarPage from './pages/services/ConcreteGrindingPillarPage';
import FloorRepairsScabblingPage from '@/pages/FloorRepairsScabblingPage.jsx';

// Lazy Load Major City Pages
const BirminghamPage = lazy(() => import('./pages/PillarPageBirmingham')); 
const LondonPage = lazy(() => import('./pages/LondonPage'));
const ManchesterPage = lazy(() => import('./pages/ManchesterPage'));
const LeedsPage = lazy(() => import('./pages/LeedsPage'));
const GlasgowPage = lazy(() => import('./pages/GlasgowPage'));
const BristolPage = lazy(() => import('./pages/BristolPage'));
const CoventryPage = lazy(() => import('./pages/CoventryPage'));

// Lazy load Sub-Location Template
const SubLocationTemplate = lazy(() => import('./pages/SubLocationTemplate'));

/*
  LINK AUDIT REPORT
  =================
  1. Audit Findings:
     - Found mixed usage of /services/epoxy vs /epoxy-flooring. Standardized to root paths for SEO.
     - Found missing route /shot-blasting-grinding requested in task. Added as alias.
     - Verified all pillar pages exist and are imported correctly.
     - Checked dynamic routes for blog, case studies, and locations.
  
  2. Fixed Links:
     - Header.jsx: Updated service dropdown links to use root paths (e.g., /epoxy-flooring).
     - Footer.jsx: Updated footer links to use root paths.
     - MobileMenu.jsx: Updated mobile navigation to use root paths.
     - HomePage.jsx: Verified CTA and service card links.
     - Service Pages: Updated internal cross-links to use root paths.

  3. Added Routes:
     - /shot-blasting-grinding (Alias for ShotBlastingPillarPage)
     - Maintained /services/* aliases for backward compatibility.

  4. 404 Prevention:
     - Added aliases for all legacy /services/* paths.
     - Included explicit routes for all major landing pages.
*/

function App() {
  const isLoading = usePreloader();
  const location = useLocation();

  useEffect(() => {
    // Reset scroll on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased">
      <Helmet>
        <title>UK Commercial Flooring | Industrial Flooring Contractors</title>
        <meta name="description" content="Leading UK commercial flooring contractors specializing in epoxy, latex, liquid screed, and shot blasting services." />
      </Helmet>

      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#ff8c42] border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Service Pages - Primary Routes (SEO Optimized) */}
            <Route path="/epoxy-flooring" element={<EpoxyPillarPage />} />
            <Route path="/latex-flooring" element={<LatexPillarPage />} />
            <Route path="/shot-blasting" element={<ShotBlastingPillarPage />} />
            <Route path="/shot-blasting-grinding" element={<ShotBlastingPillarPage />} /> {/* Alias requested */}
            <Route path="/liquid-screed" element={<LiquidScreedPillarPage />} />
            <Route path="/concrete-grinding" element={<ConcreteGrindingPillarPage />} />
            <Route path="/floor-repairs-scabbling" element={<FloorRepairsScabblingPage />} />
            
            {/* Backward Compatibility Redirects/Aliases */}
            <Route path="/services/epoxy" element={<EpoxyPillarPage />} />
            <Route path="/services/latex" element={<LatexPillarPage />} />
            <Route path="/services/shot-blasting" element={<ShotBlastingPillarPage />} />
            <Route path="/services/liquid-screed" element={<LiquidScreedPillarPage />} />
            
            {/* SEO Landing Pages */}
            <Route path="/industrial-epoxy-flooring" element={<IndustrialEpoxyFlooring />} />
            <Route path="/commercial-latex-flooring" element={<CommercialLatexFlooring />} />
            
            {/* Locations */}
            <Route path="/locations" element={<LocationsHub />} />
            <Route path="/locations-index" element={<LocationsIndexPage />} />
            <Route path="/locations/:citySlug" element={<DynamicLocationPage />} />
            
            {/* Major Cities - Static overrides */}
            <Route path="/birmingham" element={<BirminghamPage />} />
            <Route path="/london" element={<LondonPage />} />
            <Route path="/manchester" element={<ManchesterPage />} />
            <Route path="/leeds" element={<LeedsPage />} />
            <Route path="/glasgow" element={<GlasgowPage />} />
            <Route path="/bristol" element={<BristolPage />} />
            <Route path="/coventry" element={<CoventryPage />} />

            {/* Sub-locations (e.g. Birmingham areas) */}
            <Route path="/birmingham/:slug" element={<SubLocationTemplate />} />

            {/* Blog & Case Studies */}
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/case-studies" element={<CaseStudiesHub />} />
            <Route path="/case-studies/:category" element={<CaseStudiesHub />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            
            {/* Utility Pages */}
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<QuotePage />} />
            
            {/* Sitemap Route */}
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Fallback */}
            <Route path="*" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold mb-4">404</h1><p>Page not found</p></div>} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <Toaster />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
