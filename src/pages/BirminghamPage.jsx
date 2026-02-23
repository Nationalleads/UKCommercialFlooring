
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import CoverImage from '@/components/CoverImage';
import SuburbThumbnailGrid from '@/components/SuburbThumbnailGrid';
import LazyImage from '@/components/LazyImage';
import { generateLocalBusinessSchema } from '@/lib/SeoSchemaUtils';

const BirminghamPage = () => {
  const city = "Birmingham";
  const description = "Leading commercial flooring contractors in Birmingham. Serving warehouses, factories, and industrial units across the West Midlands with epoxy, latex, and screed solutions.";
  
  const stats = [
    { value: "500+", label: "Birmingham Projects", icon: CheckCircle },
    { value: "15+", label: "Years in West Midlands", icon: Clock },
    { value: "100%", label: "Satisfaction Rate", icon: Award }
  ];

  const schema = generateLocalBusinessSchema(
    "Commercial Flooring Contractors Birmingham",
    description,
    {
      locality: "Birmingham",
      region: "West Midlands",
      country: "UK"
    },
    null
  );

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Commercial Flooring Contractors Birmingham | Epoxy & Screed Specialists</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.ukcommercialflooring.co.uk/birmingham" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <CoverImage 
        locationName="Commercial Flooring Contractors Birmingham"
        imageUrl="https://images.unsplash.com/photo-1612049469032-83e72d47f6e5"
        altText="Industrial flooring contractors working in Birmingham"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Locations', path: '/locations-index' },
          { label: 'Birmingham', path: '/birmingham' }
        ]}
      >
        <div className="space-y-4 max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ff8c42]/90 text-white text-sm font-bold border border-white/20 backdrop-blur-sm">
            West Midlands HQ
          </span>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            Specialist industrial flooring solutions for factories, warehouses, and commercial spaces across Birmingham and the wider West Midlands.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/quote" className="px-6 py-3 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg transition-colors flex items-center gap-2">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:07904909304" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-lg transition-colors flex items-center gap-2 backdrop-blur-sm">
              <Phone size={18} /> 07904 909 304
            </a>
          </div>
        </div>
      </CoverImage>

      {/* High-Performance Flooring Section - Updated with requested warehouse image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-6">
                High-Performance Flooring for Birmingham's Industrial Heart
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  As the primary industrial hub of the UK, Birmingham requires flooring that can withstand heavy machinery, constant forklift traffic, and rigorous health and safety standards. Our specialist teams understand the unique demands of the West Midlands manufacturing and logistics sectors.
                </p>
                <p>
                  We provide tailored resin and epoxy solutions that offer superior durability, slip resistance, and chemical protection. Whether you're upgrading an existing facility in Digbeth or outfitting a new logistics hub near the M6, we deliver results that last.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    "Anti-slip safety coatings",
                    "Heavy-duty impact resistance",
                    "Chemical and oil protection",
                    "Rapid turnaround options",
                    "Dust-proofing for electronics",
                    "Hygienic food-grade finishes"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-[#ff8c42] shrink-0" size={18} />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <LazyImage 
                  src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/89aa300be94836496691f386512a91b4.jpg" 
                  alt="Industrial warehouse with blue and orange shelving, cardboard boxes, forklift, and workers in safety vests - High-performance industrial flooring"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ff8c42]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Birmingham Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">Birmingham's Trusted Installation Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Providing local expertise and nationwide quality across the entire West Midlands region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#ff8c42] mx-auto mb-6">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-bold text-[#1a2a4a] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prominent Suburb Grid Section */}
      <SuburbThumbnailGrid />

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2a4a] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Birmingham Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're in the city centre or any of the 70+ suburbs we serve, our team is ready to provide a competitive quote for your commercial flooring needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/quote" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1"
              >
                Request Site Visit <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:07904909304"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
              >
                <Phone size={20} /> Call Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirminghamPage;
