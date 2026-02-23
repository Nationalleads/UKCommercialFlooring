
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Building2, Home } from 'lucide-react';
import { ukCities } from '@/data/ukCities552';
import QuoteForm from '@/components/QuoteForm';
import LocationCard from '@/components/LocationCard';
import { validateLocationImages } from '@/utils/validateLocationImages';

const LocationsIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // DEBUG: Check data structure on component load
  useEffect(() => {
    console.group('🔍 Locations Page Debug');
    console.log('Total cities imported:', ukCities.length);
    console.log('Sample data (first 3):', ukCities.slice(0, 3).map(c => ({ 
      name: c.name, 
      slug: c.slug, 
      imageUrl: c.imageUrl 
    })));
    
    // Check for London specifically as requested
    const london = ukCities.find(c => c.name === 'London');
    console.log('London data check:', london ? { 
      name: london.name, 
      imageUrl: london.imageUrl,
      hasImage: !!london.imageUrl 
    } : 'London not found');
    
    // Run full validation
    validateLocationImages();
    console.groupEnd();
  }, []);

  const filteredCities = useMemo(() => {
    return ukCities.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      city.postcode_area.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

  const featuredCities = ukCities.filter(c => c.featured);

  // Schema for the list of locations
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "UK Commercial Flooring Service Locations",
    "description": "Comprehensive list of UK cities and regions served by our commercial flooring teams.",
    "itemListElement": filteredCities.slice(0, 50).map((city, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": city.name,
      "url": `https://www.ukcommercialflooring.co.uk/locations/${city.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>All UK Service Locations | Commercial Flooring Contractors Nationwide</title>
        <meta name="description" content="Browse our comprehensive list of service locations across the UK. We provide epoxy, screed, and industrial flooring services nationwide." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-[#1a2a4a] text-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
           <nav aria-label="Breadcrumb" className="flex justify-center mb-6 text-sm text-gray-400">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={12}/> Home</Link></li>
              <li>/</li>
              <li className="text-white font-semibold" aria-current="page">All Locations</li>
            </ol>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nationwide Coverage</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our network of mobile flooring teams serves over 550+ locations across the United Kingdom. Find your local specialist below.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by city or postcode area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#ff8c42]/50 shadow-lg text-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Featured Cities */}
      {!searchTerm && (
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a2a4a] mb-6 flex items-center gap-2">
            <Building2 className="text-[#ff8c42]" /> Major Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredCities.map((city, index) => (
              <LocationCard
                key={city.id}
                image={city.imageUrl}
                name={city.name}
                description={`${city.industrial_sector} Hub`}
                slug={city.slug}
                baseUrl="/locations"
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Locations Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#1a2a4a]">
              {searchTerm ? `Search Results (${filteredCities.length})` : 'All Locations A-Z'}
            </h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
              hidden: {}
            }}
          >
            {filteredCities.map((city, index) => (
              <LocationCard
                key={city.id}
                image={city.imageUrl}
                name={city.name}
                description={`Commercial flooring services available in ${city.name} (${city.postcode_area}).`}
                slug={city.slug}
                baseUrl="/locations"
                index={index}
              />
            ))}
          </motion.div>

          {filteredCities.length === 0 && (
             <div className="text-center py-12 text-gray-500">
               No locations found matching "{searchTerm}". Try checking the spelling or contact us directly.
             </div>
          )}
        </div>
      </section>

      <QuoteForm />
    </div>
  );
};

export default LocationsIndexPage;
