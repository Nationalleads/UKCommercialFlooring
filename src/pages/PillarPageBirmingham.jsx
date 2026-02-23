
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Phone, Building2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationSearchBar from '@/components/LocationSearchBar';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesGrid from '@/components/ServicesGrid';
import { birminghamSubLocationStats } from '@/data/birminghamSubLocationStats';
import { generateLocalBusinessSchema } from '@/lib/SeoSchemaUtils';

const PillarPageBirmingham = () => {
  // Sort suburbs alphabetically for potential list display if needed elsewhere, 
  // but we are removing the dropdown UI per request.
  const featuredSuburbs = birminghamSubLocationStats.slice(0, 12);

  const schema = generateLocalBusinessSchema(
    "UK Commercial Flooring Birmingham",
    "Professional commercial and industrial flooring contractors in Birmingham and the West Midlands.",
    { locality: "Birmingham", region: "West Midlands" },
    null
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Commercial Flooring Contractors Birmingham | Industrial Flooring specialists</title>
        <meta name="description" content="Expert commercial flooring contractors in Birmingham. We specialize in industrial epoxy, latex screeding, and liquid screed for warehouses and factories across the West Midlands." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a2a4a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop" 
            alt="Birmingham Skyline Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-4 rounded-full bg-[#ff8c42] text-white text-sm font-bold mb-6"
            >
              Serving Birmingham & West Midlands
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              The Birmingham <span className="text-[#ff8c42]">Industrial Flooring</span> Experts
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Providing heavy-duty, long-lasting flooring solutions for warehouses, factories, and commercial spaces across the city and surrounding suburbs.
            </motion.p>
            
            {/* Search Suburbs - Primary Navigation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl"
            >
              <h2 className="text-white text-lg font-semibold mb-4 flex items-center justify-center gap-2">
                <MapPin size={18} className="text-[#ff8c42]" /> Find Your Local Service Area
              </h2>
              <LocationSearchBar />
              <p className="text-gray-400 text-xs mt-3 italic">Search for suburbs like Edgbaston, Solihull, Erdington, or Sutton Coldfield</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1a2a4a]">500+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Local Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1a2a4a]">24/7</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1a2a4a]">15+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Years Exp</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1a2a4a]">100%</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-6 leading-tight">
                High-Performance Flooring for Birmingham's Industrial Heart
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Birmingham's industrial heritage demands flooring that can withstand the test of time and heavy machinery. As local contractors, we specialize in delivering high-performance resin and screed systems that meet the rigorous standards of modern industry.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Rapid installation to minimize business downtime",
                  "High chemical and impact resistance",
                  "Anti-slip surfaces for health and safety compliance",
                  "Bespoke solutions for factories, warehouses, and showrooms"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-200">
                Get a Birmingham Site Survey <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industrial Flooring Birmingham" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1a2a4a] rounded-2xl -z-10 hidden md:block opacity-10"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ff8c42] rounded-full -z-10 hidden md:block opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Our Flooring Solutions</h2>
            <p className="text-gray-600">From preparation to final finish, we handle every stage of your industrial flooring project in Birmingham.</p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Suburbs Grid (Static Navigation) */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">Areas We Cover</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide local expert flooring services across all Birmingham districts. Search above or browse some of our key service areas below.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredSuburbs.map((suburb) => (
              <Link 
                key={suburb.slug} 
                to={`/birmingham/${suburb.slug}`}
                className="p-4 bg-white border border-gray-100 rounded-xl hover:border-[#ff8c42] hover:shadow-md transition-all text-gray-700 font-medium hover:text-[#ff8c42]"
              >
                {suburb.name}
              </Link>
            ))}
          </div>
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <h3 className="text-lg font-bold text-[#1a2a4a] mb-4">Can't find your area?</h3>
            <p className="text-gray-500 mb-6">Use our interactive search to find your specific Birmingham suburb and get localized statistics and insights.</p>
            <div className="max-w-md mx-auto">
              <LocationSearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Why Us */}
      <WhyUsSection />

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2a4a]">
        <div className="container mx-auto px-4">
          <div className="bg-[#ff8c42] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project in Birmingham?</h2>
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto font-medium">
                Get a free site survey and a no-obligation quote from our local specialists today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/quote" 
                  className="px-10 py-5 bg-[#1a2a4a] hover:bg-[#111c31] text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                  Request a Quote <ArrowRight size={20} />
                </Link>
                <a 
                  href="tel:07904909304" 
                  className="px-10 py-5 bg-white hover:bg-gray-50 text-[#1a2a4a] font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                  <Phone size={20} /> 07904 909 304
                </a>
              </div>
            </div>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black opacity-10 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillarPageBirmingham;
