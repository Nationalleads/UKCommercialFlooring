import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, Shield, Layers, Hammer, Droplet } from 'lucide-react';
import { ukCities } from '@/data/ukCities';
import { cityTestimonials } from '@/data/cityTestimonials';
import { generateLocationMetaDescription, generateLocationSchema, generateCanonicalUrl } from '@/lib/locationSeo';
import CityStatsSection from '@/components/CityStatsSection';
import LocationServiceCard from '@/components/LocationServiceCard';
import Footer from '@/components/Footer';

const DynamicLocationPage = () => {
  const { citySlug } = useParams();

  // Find city data
  const city = ukCities.find(c => c.slug === citySlug);

  // Handle 404
  if (!city) {
    return <Navigate to="/locations" replace />;
  }

  // Find testimonials for this city or use generic ones
  const testimonials = cityTestimonials.filter(t => t.slug === citySlug || t.slug === 'general').slice(0, 3);

  const schema = generateLocationSchema(city);
  const metaDescription = generateLocationMetaDescription(city);
  const canonicalUrl = generateCanonicalUrl(city);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Helmet>
        <title>{`Commercial Flooring Contractors ${city.name} | Industrial Services`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Navigation */}
      <header className="bg-[#1a2a4a] text-white py-4 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white hover:text-[#ff8c42] transition-colors">
            UK Commercial Flooring
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link to="/locations" className="hover:text-gray-300 hidden sm:block">Locations</Link>
            <span className="text-gray-500 hidden sm:inline">/</span>
            <span className="text-[#ff8c42]">{city.name}</span>
          </div>
          <Link 
            to="/quote"
            className="px-4 py-2 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg text-sm transition-all"
          >
            Get Quote
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={city.imageUrl || "https://images.unsplash.com/photo-1563696992148-626c57c95457"} 
            alt={`Commercial Flooring Services in ${city.name}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a]/90 via-[#1a2a4a]/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-white text-sm font-medium mb-6">
              <MapPin size={14} className="text-[#ff8c42]" />
              Serving {city.name} & {city.region}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Commercial Flooring Contractors <span className="text-[#ff8c42]">{city.name}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Leading industrial flooring specialists serving {city.industrialParks}+ industrial parks across {city.name}. Expert installation of epoxy, screed, and prep services with 24hr response time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote"
                className="px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Free {city.name} Site Survey <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:08001234567"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2 border border-white/30"
              >
                <Phone size={20} />
                Call Local Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        
        <CityStatsSection city={city} />

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-2 text-center">Local Flooring Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive floor preparation and installation services available throughout {city.name} and the {city.region} area.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LocationServiceCard 
              title={`Epoxy ${city.name}`}
              keyword="KD19 High Demand"
              icon={Shield}
              link="/services/epoxy"
              description={`Heavy-duty resin flooring for ${city.name} warehouses. Chemical resistant and anti-slip options.`}
            />
            <LocationServiceCard 
              title={`Latex Flooring ${city.name}`}
              keyword="Leveling Experts"
              icon={Layers}
              link="/services/latex"
              description={`Self-levelling smoothing compounds for uneven floors in ${city.name} commercial properties.`}
            />
            <LocationServiceCard 
              title={`Shot Blasting ${city.name}`}
              keyword="Surface Prep"
              icon={Hammer}
              link="/services/shot-blasting"
              description={`Dust-free captive shot blasting services available in ${city.postcode} area.`}
            />
            <LocationServiceCard 
              title={`Liquid Screed ${city.name}`}
              keyword="Fast Drying"
              icon={Droplet}
              link="/services/liquid-screed"
              description={`Flowing screeds for underfloor heating efficiency. Serving all ${city.name} developments.`}
            />
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-20">
          <div className="bg-[#1a2a4a] rounded-2xl p-2 md:p-4 shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden h-[400px] relative">
               <iframe 
                src={`https://maps.google.com/maps?q=${city.latitude},${city.longitude}&z=12&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title={`Map of ${city.name}`}
              ></iframe>
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="font-bold text-[#1a2a4a] flex items-center gap-2">
                  <MapPin size={18} className="text-[#ff8c42]" />
                  Local Coverage
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Our mobile teams cover all of {city.name} ({city.postcode}) and surrounding {city.region} districts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-10 text-center">What {city.name} Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex text-[#ff8c42] mb-4">
                  {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#1a2a4a]">{t.author}</div>
                  <div className="text-xs text-gray-500 uppercase">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DynamicLocationPage;