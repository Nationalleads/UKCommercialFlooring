import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloorRepairsHeroSection from '@/components/floor-repairs/FloorRepairsHeroSection';
import FloorRepairsBenefitsSection from '@/components/floor-repairs/FloorRepairsBenefitsSection';
import FloorRepairsServicesGrid from '@/components/floor-repairs/FloorRepairsServicesGrid';
import FloorRepairsProcessSection from '@/components/floor-repairs/FloorRepairsProcessSection';
import FloorRepairsCostsSection from '@/components/floor-repairs/FloorRepairsCostsSection';
import FloorRepairsCaseStudiesSection from '@/components/floor-repairs/FloorRepairsCaseStudiesSection';
import FloorRepairsComparisonSection from '@/components/floor-repairs/FloorRepairsComparisonSection';
import FloorRepairsFAQSection from '@/components/floor-repairs/FloorRepairsFAQSection';
import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorRepairsScabblingPage = () => {
  // Schema Markups
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ukcommercialflooring.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ukcommercialflooring.co.uk/services" },
      { "@type": "ListItem", "position": 3, "name": "Floor Repairs & Scabbling", "item": "https://www.ukcommercialflooring.co.uk/floor-repairs-scabbling" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does concrete scabbling cost in the UK?",
        "acceptedAnswer": { "@type": "Answer", "text": "Concrete scabbling typically costs between £3.00 and £6.00 per m² depending on removal depth." }
      },
      {
        "@type": "Question",
        "name": "What is concrete spalling?",
        "acceptedAnswer": { "@type": "Answer", "text": "Spalling is surface damage where concrete chips or flakes away, often requiring mechanical removal and patching." }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Floor Repair Process",
    "step": [
      { "@type": "HowToStep", "name": "Assess", "text": "Survey floor for hollow spots and damage depth." },
      { "@type": "HowToStep", "name": "Scabble", "text": "Remove weak concrete using pneumatic tools." },
      { "@type": "HowToStep", "name": "Patch", "text": "Fill voids with high-strength epoxy mortar." }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Floor Repairs & Scabbling UK | Concrete Repair Contractors</title>
        <meta name="description" content="Floor repairs, concrete scabbling for factories UK – crack filling & profiling. Free Birmingham quotes. Professional industrial spall repair services." />
        <link rel="canonical" href="https://www.ukcommercialflooring.co.uk/floor-repairs-scabbling" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      {/* Header handled by App layout usually, but here we include it manually if needed by the layout strategy. 
          Actually App.jsx renders Header globally. I should NOT render Header here again if App.jsx does it.
          Wait, in previous PillarPageLayout it rendered a specific header.
          The user instructions for App.jsx imply standard routing. App.jsx puts Header outside Routes.
          So I will NOT include Header/Footer here to avoid duplication.
      */}
      
      <main>
        <FloorRepairsHeroSection />
        <FloorRepairsBenefitsSection />
        <FloorRepairsServicesGrid />
        <FloorRepairsProcessSection />
        <FloorRepairsCostsSection />
        <FloorRepairsCaseStudiesSection />
        <FloorRepairsComparisonSection />
        <FloorRepairsFAQSection />
        
        {/* Final Sticky CTA */}
        <section className="py-16 bg-[#1a2a4a] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Urgent Floor Repairs?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let damaged concrete slow down your operations. Get a fast, accurate quote today.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto border border-white/20">
              <form className="grid md:grid-cols-3 gap-4 text-left">
                <input type="text" placeholder="Name" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
                <input type="email" placeholder="Email" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
                <input type="tel" placeholder="Phone" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
                <input type="text" placeholder="Location" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
                <select className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]">
                   <option>Damage Type...</option>
                   <option>Cracks</option>
                   <option>Spalling / Holes</option>
                   <option>Uneven Joints</option>
                   <option>Failed Coating</option>
                </select>
                <select className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]">
                   <option>Urgency...</option>
                   <option>High (ASAP)</option>
                   <option>Medium (Next Month)</option>
                   <option>Low (Planning)</option>
                </select>
                
                <div className="md:col-span-3 mt-4 text-center">
                  <Link to="/quote" className="w-full md:w-auto inline-flex justify-center items-center px-12 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg transition-all text-lg shadow-lg">
                    Request Repair Survey <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </form>
              <p className="text-xs text-gray-400 mt-4 text-center">
                <Info size={12} className="inline mr-1" />
                We prioritize urgent industrial repair requests.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FloorRepairsScabblingPage;