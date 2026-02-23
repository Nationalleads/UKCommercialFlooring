
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Droplets, 
  HardHat, 
  Factory, 
  Warehouse, 
  Building2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from '@/components/LazyImage';
import { blogPosts } from '@/data/blogPosts';

const IndustrialEpoxyFlooring = () => {
  // Find the specific blog post to get the updated image URL
  const epoxyPost = blogPosts.find(post => post.slug === 'ultimate-guide-to-industrial-epoxy-flooring');
  const heroImage = epoxyPost?.featuredImage || "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/8070aeac5dfb33b5383fdf1356919b42.jpg";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>The Ultimate Guide to Industrial Epoxy Flooring | UK Commercial Flooring</title>
        <meta name="description" content="Learn everything about industrial epoxy flooring: benefits, installation process, costs, and maintenance for warehouses and factories." />
      </Helmet>

      {/* Hero Banner Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Industrial warehouse with polished epoxy flooring" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Semi-Transparent Overlay for H1 Contrast */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#ff8c42] text-white text-sm font-bold mb-6 uppercase tracking-wider">
              Expert Technical Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              The Ultimate Guide to <br />
              <span className="text-[#ff8c42]">Industrial Epoxy Flooring</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl font-medium drop-shadow-md">
              Everything you need to know about choosing, installing, and maintaining high-performance resin floors in UK industrial environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/quote" 
                className="px-8 py-4 bg-[#ff8c42] text-white font-bold rounded-lg hover:bg-[#e67a30] transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
              >
                Request a Site Survey <ArrowRight size={20} />
              </Link>
              <a 
                href="#guide-content" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Read the Guide
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="guide-content" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Article Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Why Industrial Epoxy?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Industrial environments demand flooring that is tough, durable, and safe. Epoxy flooring has become the gold standard for warehouses, factories, and commercial spaces across the UK. It's not just about a clean look; it's about surface protection that can withstand the rigors of heavy machinery and constant foot traffic.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <Shield className="text-[#1a2a4a] mb-4" size={32} />
                    <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Maximum Protection</h3>
                    <p className="text-gray-600 text-sm">Resistant to heavy impacts, forklift traffic, and industrial chemical spills.</p>
                  </div>
                  <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <Droplets className="text-[#ff8c42] mb-4" size={32} />
                    <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Hygienic & Seamless</h3>
                    <p className="text-gray-600 text-sm">No joints or cracks where dust, bacteria, or moisture can accumulate.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">The Installation Process</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Success in epoxy flooring is 90% preparation. Our technical team follows a rigorous 4-step installation protocol to ensure maximum adhesion and longevity.
                </p>

                <div className="space-y-8 my-10">
                  {[
                    { step: "01", title: "Substrate Preparation", desc: "We use industrial shot blasting or diamond grinding to remove contaminants and open the concrete pores." },
                    { step: "02", title: "Technical Priming", desc: "A deep-penetrating primer is applied to seal the substrate and create a chemical bond with the epoxy." },
                    { step: "03", title: "Build Coat Application", desc: "The main structural layer of epoxy resin is applied, providing the floor's thickness and core strength." },
                    { step: "04", title: "Chemical Top Seal", desc: "A final high-performance coating is applied for UV stability, scratch resistance, and the desired finish." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a2a4a] text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1a2a4a] mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Maintaining Your Floor</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  One of the primary benefits of epoxy is how easy it is to maintain. For a high-traffic warehouse, we recommend a simple daily sweep and weekly damp mop with a pH-neutral cleaner. This prevents abrasive dust from dulling the high-gloss finish over time.
                </p>

                <div className="bg-[#1a2a4a] text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <HardHat className="text-[#ff8c42]" /> Ready for a Professional Quote?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Our technical surveyors cover the entire UK. We can provide a site visit and a detailed fixed-price proposal for your project within 48 hours.
                  </p>
                  <Link 
                    to="/quote" 
                    className="inline-flex items-center gap-2 bg-[#ff8c42] px-6 py-3 rounded-lg font-bold hover:bg-[#e67a30] transition-colors"
                  >
                    Book Site Survey <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Key Benefits Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-6 pb-2 border-b-2 border-[#ff8c42] inline-block">Key Performance Stats</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#ff8c42]">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Durability</p>
                      <p className="font-bold text-[#1a2a4a]">15+ Year Lifespan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#ff8c42]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Cure Time</p>
                      <p className="font-bold text-[#1a2a4a]">Foot Traffic in 24hrs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#ff8c42]">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Safety</p>
                      <p className="font-bold text-[#1a2a4a]">PTV 36+ (Anti-Slip)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications Card */}
              <div className="bg-[#1a2a4a] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6">Typical Applications</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Warehouse className="text-[#ff8c42]" size={18} /> 
                    <span>Logistics Distribution Hubs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Factory className="text-[#ff8c42]" size={18} /> 
                    <span>Manufacturing Plants</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Building2 className="text-[#ff8c42]" size={18} /> 
                    <span>Pharmaceutical Labs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HardHat className="text-[#ff8c42]" size={18} /> 
                    <span>Automotive Workshops</span>
                  </li>
                </ul>
              </div>

              {/* Call Image Card */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/621c1e0d5aa990ba8ae66895b0ac5c71.jpg" 
                  alt="Industrial flooring preparation" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a] to-transparent flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-lg mb-2">Need a faster solution?</p>
                  <Link to="/liquid-screed" className="text-[#ff8c42] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Liquid Screed <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             {/* Mock Partner Logos */}
             <div className="text-xl font-black text-gray-400">RESINTECH</div>
             <div className="text-xl font-black text-gray-400">UKFLOORS</div>
             <div className="text-xl font-black text-gray-400">COATINGPRO</div>
             <div className="text-xl font-black text-gray-400">SAFETYTECH</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialEpoxyFlooring;
