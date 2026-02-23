
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import LocationSearchBar from '@/components/LocationSearchBar';
import LocationCard from '@/components/LocationCard';
import { ukCities } from '@/data/ukCities552';
import Footer from '@/components/Footer';

const LocationsHub = () => {
  const [filterQuery, setFilterQuery] = useState("");

  const sortedCities = useMemo(() => {
    return [...ukCities].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredList = useMemo(() => {
    if (!filterQuery) return sortedCities;
    const lower = filterQuery.toLowerCase();
    return sortedCities.filter(c => 
      c.name.toLowerCase().includes(lower) || 
      c.postcode_area.toLowerCase().includes(lower)
    );
  }, [filterQuery, sortedCities]);

  const groupedCities = useMemo(() => {
    if (filterQuery) return null;
    
    const groups = {};
    
    sortedCities.forEach(city => {
      const letter = city.name.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(city);
    });
    
    return groups;
  }, [filterQuery, sortedCities]);

  const scrollToSection = (e, letter) => {
    e.preventDefault();
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const defaultCityImage = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Helmet>
        <title>UK Commercial Flooring Contractors – 550+ Towns | ukcommercialflooring.co.uk</title>
        <meta name="description" content="Find expert commercial flooring contractors near you. We cover 550+ UK towns including Birmingham, London, Manchester. Industrial epoxy & screed specialists nationwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596796929761-04953c82e6d6?auto=format&fit=crop&q=80" 
            alt="UK Coverage Map Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a4a] via-[#1a2a4a]/90 to-[#1a2a4a]/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff8c42]/20 border border-[#ff8c42]/40 text-[#ff8c42] text-sm font-bold mb-6 backdrop-blur-sm">
              Nationwide Coverage
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Contractors Near You
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light px-4">
              We cover <span className="text-white font-semibold">552+ towns</span> across the UK. 
              Find your local specialist below.
            </p>

            <LocationSearchBar className="mb-8 w-full max-w-md mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16 relative">
        
        {/* On-Page Filter for the List */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2a4a]">Service Locations</h2>
            <p className="text-gray-500 mt-1">Browse our complete directory of served areas</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter list..." 
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#ff8c42] outline-none shadow-sm transition-shadow focus:shadow-md"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Main List Area */}
          <div className="flex-grow w-full">
            <AnimatePresence mode="wait">
              {filterQuery ? (
                // Search Results View
                <motion.div 
                  key="search-results"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">
                    {filteredList.length} Results Found
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredList.map((city, index) => (
                      <LocationCard 
                        key={city.id} 
                        image={city.imageUrl || defaultCityImage}
                        name={city.name}
                        description={`Service Area: ${city.postcode_area}`}
                        slug={city.slug}
                        baseUrl="/locations"
                        index={index}
                      />
                    ))}
                  </div>
                  {filteredList.length === 0 && (
                     <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                       <p className="text-gray-500">No cities found matching "{filterQuery}"</p>
                     </div>
                  )}
                </motion.div>
              ) : (
                // Default Alphabetical View
                <motion.div
                  key="default-view"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-16">
                    {Object.keys(groupedCities).sort().map(letter => (
                      <section key={letter} id={`section-${letter}`} className="scroll-mt-28">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-2 sticky top-20 bg-gray-50/95 backdrop-blur-sm z-10 py-2">
                          <span className="text-3xl font-black text-[#ff8c42] opacity-80 w-8">{letter}</span>
                          <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest">Locations</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {groupedCities[letter].map((city, index) => (
                            <LocationCard 
                              key={city.id} 
                              image={city.imageUrl || defaultCityImage}
                              name={city.name}
                              description={`Service Area: ${city.postcode_area}`}
                              slug={city.slug}
                              baseUrl="/locations"
                              index={index}
                            />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sticky Alphabet Nav (Desktop Only) */}
          {!filterQuery && (
            <div className="hidden xl:block w-12 flex-shrink-0">
              <div className="sticky top-28 flex flex-col items-center gap-1 bg-white rounded-full py-4 shadow-lg border border-gray-100 max-h-[80vh] overflow-y-auto custom-scrollbar">
                {Object.keys(groupedCities || {}).sort().map(letter => (
                  <a 
                    key={letter} 
                    href={`#section-${letter}`}
                    onClick={(e) => scrollToSection(e, letter)}
                    className="w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white hover:bg-[#ff8c42] rounded-full transition-all duration-200"
                    aria-label={`Jump to ${letter}`}
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default LocationsHub;
