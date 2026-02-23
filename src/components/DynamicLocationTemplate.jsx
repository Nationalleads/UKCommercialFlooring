import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Layers, Hammer, Droplet, Star, ArrowRight, MapPin, Phone, Calendar, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import QuoteFormModal from './QuoteFormModal';
import OpenGraphMeta from './OpenGraphMeta';
import LazyImage from './LazyImage';
import LocationStatistics from './LocationStatistics';
import RelatedLocationsSection from './RelatedLocationsSection';
import LocationNavigationLinks from './LocationNavigationLinks';
import { locationTestimonials } from '@/data/locationTestimonials';
import { 
  generateLocationTitle, 
  generateLocationDescription, 
  generateLocalBusinessSchema,
  generateBreadcrumbSchema
} from '@/lib/locationSeoOptimizer';
import { generateFAQSchema, generateCanonicalUrl } from '@/lib/locationSeoGenerator';

const DynamicLocationTemplate = ({ city }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localTestimonials, setLocalTestimonials] = useState([]);

  useEffect(() => {
    const filtered = locationTestimonials.filter(t => t.city === city.name || t.city === 'General');
    setLocalTestimonials(filtered.slice(0, 3));
  }, [city]);

  const seoTitle = generateLocationTitle(city);
  const seoDesc = generateLocationDescription(city);
  const localBusinessSchema = generateLocalBusinessSchema(city);
  const breadcrumbSchema = generateBreadcrumbSchema(city);
  
  // Reuse existing helpers if they still fit, or replace with new optimizer
  const faqSchema = generateFAQSchema(city);
  const canonical = generateCanonicalUrl(city);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <OpenGraphMeta 
        title={seoTitle}
        description={seoDesc}
        url={`/locations/${city.slug}`}
        image={city.imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"}
        type="business.business"
      />
      
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pb-32 md:pb-40">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src={city.imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"} 
            alt={`${city.name} commercial flooring contractors`} 
            className="w-full h-full object-cover"
            placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b]/90 to-[#1e293b]/60" />
        </div>

        <div className="container mx-auto px-4 relative z-30 pt-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={12}/> Home</Link></li>
              <li>/</li>
              <li><Link to="/locations-index" className="hover:text-white transition-colors">Locations</Link></li>
              <li>/</li>
              <li className="text-white font-semibold" aria-current="page">{city.name}</li>
            </ol>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#ff8c42] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-900/20">
              <MapPin size={14} /> Serving {city.name} & {city.postcode_area} Area
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              {city.name} Commercial Flooring Contractors | <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] to-amber-200 block text-3xl md:text-5xl mt-2">
                 Epoxy Resin Latex Shot Blasting Liquid Screed
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
              Industrial epoxy, screed, and prep solutions for {city.name}'s {city.industrial_sector} sector. 
              <strong className="text-white block mt-2">Free {city.name} Site Survey Quote</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-40">
              <Link 
                to="/quote"
                className="px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-xl shadow-orange-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Get {city.name} Quote <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:07904909304"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. Local Stats Card - REPLACED OLD STATS WITH NEW COMPONENT */}
      <div className="relative z-20 -mt-20 container mx-auto px-4">
        {/* We place the full LocationStatistics component slightly later for better flow, 
            or here if we want cards overlap. Let's put a summary here and full stats later?
            Actually, user requested stats section AFTER services. So we remove this overlap section
            or adapt it. I'll remove the old overlapping stats card and let the new component handle it.
        */}
      </div>

      {/* 2. Services Grid */}
      <section className="py-20 bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Industrial Solutions in {city.name}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized flooring services tailored for {city.name}'s {city.industrial_sector} environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: `Epoxy ${city.name}`, icon: Shield, link: '/services/epoxy', desc: 'Chemical resistant coatings.' },
              { title: `Latex ${city.name}`, icon: Layers, link: '/services/latex', desc: 'Self-leveling compounds.' },
              { title: `Shot Blasting ${city.name}`, icon: Hammer, link: '/services/shot-blasting', desc: 'Dust-free surface prep.' },
              { title: `Liquid Screed ${city.name}`, icon: Droplet, link: '/services/liquid-screed', desc: 'Fast drying flow screeds.' },
            ].map((s, i) => (
              <Link key={i} to={s.link} className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 text-[#1a2a4a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors">
                    <s.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Location Statistics Section */}
      <LocationStatistics city={city} />

      {/* 3. Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#1e293b] rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">We cover all of {city.name}</h2>
                <p className="text-gray-400 mb-6">
                  Our mobile teams operate throughout the {city.postcode_area} postcode area, providing rapid response for site surveys and emergency repairs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold">Nearest Hub</div>
                      <div className="text-sm text-gray-400">{city.nearest_hub}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42]">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="font-bold">Next Available Survey</div>
                      <div className="text-sm text-gray-400">Tomorrow in {city.name}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 h-[400px] rounded-xl overflow-hidden bg-gray-800 relative">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   scrolling="no" 
                   marginHeight="0" 
                   marginWidth="0" 
                   src={`https://maps.google.com/maps?q=${city.coordinates.lat},${city.coordinates.lng}&z=11&output=embed`}
                   title={`Google Map showing ${city.name} location`}
                   className="filter grayscale hover:grayscale-0 transition-all duration-500"
                   aria-label={`Map of ${city.name} service area`}
                 ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a2a4a]">Trusted by {city.name} Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {localTestimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#ff8c42]">
                <div className="flex gap-1 text-[#ff8c42] mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-bold text-[#1a2a4a]">{t.author_initials}</div>
                    <div className="text-sm text-gray-500">{t.service}</div>
                  </div>
                  <div className="text-xs text-gray-300 font-mono">Verified Client</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Related Locations & Navigation */}
      <RelatedLocationsSection currentCity={city} />
      
      <div className="container mx-auto px-4 pb-12">
        <LocationNavigationLinks currentSlug={city.slug} />
      </div>

      {/* 5. CTA Form Section */}
      <section className="py-20 bg-[#1a2a4a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Your {city.name} Site Survey</h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop guessing. Get an accurate, free quote for your {city.industrial_sector} facility floor today.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
             <Link 
               to="/quote" 
               className="w-full bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold py-4 rounded-lg transition-colors text-lg shadow-lg block"
             >
               Request Free Quote
             </Link>
             <p className="text-xs text-gray-400 mt-4">By submitting, you agree to our privacy policy. Zero spam guarantee.</p>
          </div>
        </div>
      </section>

      <QuoteFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultCity={city.name}
      />
    </div>
  );
};

export default DynamicLocationTemplate;