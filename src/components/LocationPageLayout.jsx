import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Layers, Hammer, Droplet, Phone, CheckCircle, MapPin, Home } from 'lucide-react';
import LocalCaseStudiesSlider from './LocalCaseStudiesSlider';
import LocationStatistics from './LocationStatistics';
import RelatedLocationsSection from './RelatedLocationsSection';
import LocationNavigationLinks from './LocationNavigationLinks';
import Footer from './Footer';
import { ukCities } from '@/data/ukCities552';

const LocationPageLayout = ({
  city,
  heroImage,
  description,
  coordinates,
  stats,
  schema
}) => {
  // Find full city data object for the new components
  const cityData = ukCities.find(c => c.name === city) || { 
    name: city, 
    slug: city.toLowerCase().replace(/ /g, '-'),
    coordinates,
    population: "Unavailable",
    industrial_sector: "Industry",
    postcode_area: "UK"
  };
  
  // Google Maps Embed URL
  const mapUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Helmet>
        <title>{`Commercial Flooring Contractors ${city} | Industrial & Warehouse`}</title>
        <meta name="description" content={description} />
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
          <nav className="hidden md:flex gap-6 text-sm font-medium">
             <Link to="/services/epoxy" className="hover:text-[#ff8c42]">Epoxy</Link>
             <Link to="/services/latex" className="hover:text-[#ff8c42]">Latex</Link>
             <Link to="/services/shot-blasting" className="hover:text-[#ff8c42]">Shot Blasting</Link>
             <Link to="/services/liquid-screed" className="hover:text-[#ff8c42]">Liquid Screed</Link>
          </nav>
          <Link 
            to="/quote" 
            className="px-4 py-2 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg text-sm transition-all"
          >
            Get Quote
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={`Commercial Flooring in ${city}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a]/95 via-[#1a2a4a]/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
             <ol className="flex items-center gap-2">
               <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={12}/> Home</Link></li>
               <li>/</li>
               <li><Link to="/locations-index" className="hover:text-white transition-colors">Locations</Link></li>
               <li>/</li>
               <li className="text-white font-semibold" aria-current="page">{city}</li>
             </ol>
           </nav>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-white text-sm font-medium mb-6">
              <MapPin size={14} className="text-[#ff8c42]" />
              Serving {city} & Surrounding Areas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Commercial Flooring Contractors <span className="text-[#ff8c42]">{city}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote" 
                className="px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg shadow-orange-900/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Request {city} Site Visit <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:07904909304"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2 border border-white/30"
              >
                <Phone size={20} />
                Call Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Industrial Flooring Solutions in {city}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of flooring services tailored to the specific needs of businesses in {city}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* Service Cards */}
           {[
             { 
               icon: <Shield size={32} />, 
               title: "Epoxy Flooring", 
               desc: "Heavy-duty resin for warehouses.",
               link: "/services/epoxy"
             },
             { 
               icon: <Layers size={32} />, 
               title: "Latex Screeds", 
               desc: "Self-levelling floor preparation.",
               link: "/services/latex"
             },
             { 
               icon: <Hammer size={32} />, 
               title: "Shot Blasting", 
               desc: "Dust-free surface preparation.",
               link: "/services/shot-blasting"
             },
             { 
               icon: <Droplet size={32} />, 
               title: "Liquid Screed", 
               desc: "Flowing screeds for UFH systems.",
               link: "/services/liquid-screed"
             }
           ].map((service, idx) => (
             <Link key={idx} to={service.link} className="group">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#ff8c42] transition-all h-full flex flex-col"
               >
                 <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-[#1a2a4a] group-hover:bg-[#ff8c42] group-hover:text-white transition-colors mb-6">
                   {service.icon}
                 </div>
                 <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{service.title}</h3>
                 <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                 <div className="text-[#ff8c42] font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                   Learn More <ArrowRight size={16} />
                 </div>
               </motion.div>
             </Link>
           ))}
        </div>
      </section>

      {/* Statistics Section */}
      <LocationStatistics city={cityData} />

      {/* Map & Location Context */}
      <section className="bg-[#1a2a4a] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Local Flooring Contractors You Can Trust</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Based locally and serving the entire {city} region, we understand the specific requirements of our industrial and commercial clients. From rapid turnaround times to minimize downtime, to meeting specific health and safety regulations.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free Site Surveys within 48 Hours",
                  "CSCS Certified Local Installers",
                  "Weekend & Night Shift Availability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-[#ff8c42]" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/quote" 
                className="inline-block px-8 py-3 bg-white text-[#1a2a4a] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book a Site Visit
              </Link>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${city}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-100">
        <LocalCaseStudiesSlider city={city} />
      </section>

      {/* Related & Nav */}
      <RelatedLocationsSection currentCity={cityData} />
      <div className="container mx-auto px-4 pb-12">
        <LocationNavigationLinks currentSlug={cityData.slug} />
      </div>

      {/* CTA Footer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-4xl font-bold text-[#1a2a4a] mb-6">Ready to upgrade your {city} facility?</h2>
           <p className="text-xl text-gray-600 mb-8">
             Don't let poor flooring impact your productivity. Get a free, no-obligation quote from the {city} flooring experts today.
           </p>
           <Link 
             to="/quote" 
             className="inline-block px-12 py-5 bg-[#ff8c42] hover:bg-[#e67e3a] text-white text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105"
           >
             Get Your Free Quote Now
           </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPageLayout;