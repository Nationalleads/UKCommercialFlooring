import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Shield, Droplets, Hammer, Sparkles, ArrowRight, 
  ChevronDown, Check, X, Phone, Factory, Warehouse, 
  Settings, Truck, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IndustrialEpoxyGuidePage = () => {
  // Schema Markup
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Epoxy Flooring",
    "provider": {
      "@type": "LocalBusiness",
      "name": "UK Commercial Flooring",
      "telephone": "+447904909304",
      "priceRange": "££"
    },
    "description": "Professional industrial epoxy flooring contractors for UK warehouses and factories.",
    "areaServed": "United Kingdom",
    "serviceType": "Flooring Contractor"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does industrial epoxy flooring cost?", "acceptedAnswer": { "@type": "Answer", "text": "£20-40/m2 depending on the system specification and surface preparation required." } },
      { "@type": "Question", "name": "How long does epoxy flooring last?", "acceptedAnswer": { "@type": "Answer", "text": "With proper maintenance, industrial epoxy flooring typically lasts 10-15 years in heavy-duty environments." } },
      { "@type": "Question", "name": "Is epoxy flooring slip-resistant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can incorporate anti-slip aggregates to achieve specific pendulum test values (PTV) for safety." } },
      { "@type": "Question", "name": "Can epoxy handle heavy machinery?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our heavy-duty screeds are designed to withstand forklift traffic and heavy machinery loads." } },
      { "@type": "Question", "name": "How long is the installation process?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 3-7 days depending on the area size and curing times required." } },
      { "@type": "Question", "name": "Is epoxy food-safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer FDA and HACCP approved resin systems suitable for food and beverage production facilities." } },
      { "@type": "Question", "name": "Can you apply epoxy over existing concrete?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, provided the concrete is structurally sound and properly prepared via shot blasting or diamond grinding." } },
      { "@type": "Question", "name": "What temperature does epoxy cure at?", "acceptedAnswer": { "@type": "Answer", "text": "15-25°C is optimal, though we have specialist low-temperature curing systems available." } },
      { "@type": "Question", "name": "Is epoxy environmentally friendly?", "acceptedAnswer": { "@type": "Answer", "text": "We offer low-VOC and solvent-free options that meet modern environmental standards." } },
      { "@type": "Question", "name": "Do you offer warranties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide 5-10 year warranties on our industrial installation projects." } }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Install Industrial Epoxy Flooring",
    "step": [
      { "@type": "HowToStep", "name": "Surface Preparation", "text": "Mechanical shot blasting or diamond grinding to prepare the substrate." },
      { "@type": "HowToStep", "name": "Coating Application", "text": "Applying the epoxy primer, body coat, and top sealer." },
      { "@type": "HowToStep", "name": "Curing", "text": "Allowing the floor to chemically cure for durability." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Industrial Epoxy Flooring UK | Seamless Resin Contractors</title>
        <meta name="description" content="Durable industrial epoxy flooring for warehouses/factories UK – cost-effective, chemical-resistant coatings. Birmingham experts nationwide." />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <div className="bg-[#001F3F] min-h-screen text-gray-200 font-sans selection:bg-[#FF9500] selection:text-white">
        
        {/* SECTION 1: HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1695415866305-bdedc2af0661"
              alt="Industrial epoxy flooring UK warehouse background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/90 via-[#001F3F]/80 to-[#001F3F] z-10" />
            
            {/* Blueprint Grid Overlay Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(169,169,169,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(169,169,169,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF9500]/50 bg-[#FF9500]/10 text-[#FF9500] font-semibold tracking-wider uppercase text-sm">
                <Settings size={16} /> UK's #1 Resin Contractors
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Industrial Epoxy <br />
                <span className="text-[#FF9500]">Flooring Guide</span>
              </h1>
              <h2 className="text-2xl font-light text-[#A9A9A9]">What is Industrial Epoxy Flooring?</h2>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Industrial epoxy flooring is the gold standard for seamless resin protection in commercial environments. Engineered for extreme durability, it creates an impervious surface capable of withstanding heavy forklift traffic, chemical spills, and continuous industrial wear.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/quote" className="px-8 py-4 bg-[#FF9500] hover:bg-[#e68a00] text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(255,149,0,0.3)] hover:shadow-[0_0_30px_rgba(255,149,0,0.5)] flex items-center gap-2">
                  Get Free Quote <ArrowRight size={20} />
                </Link>
                <a href="#services" className="px-8 py-4 bg-transparent border-2 border-[#A9A9A9] hover:border-[#FF9500] text-white font-bold rounded-lg transition-all hover:bg-[#FF9500]/10">
                  Explore Systems
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-10 lg:mt-0"
            >
               {/* Video Embed Slot - Blueprint Aesthetic */}
               <div className="aspect-video w-full rounded-xl border-2 border-[#FF9500]/30 shadow-[0_0_30px_rgba(0,31,63,0.5)] relative overflow-hidden bg-[#00152b] group">
                  <iframe 
                    src="https://www.youtube.com/embed/MZ-sSHtHANQ?rel=0&modestbranding=1" 
                    title="Industrial Epoxy Flooring Installation"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  
                  {/* Overlay label for blueprint feel - visible only when video not interacting */}
                  <div className="absolute top-0 right-0 p-2 pointer-events-none">
                     <div className="bg-[#001F3F]/80 backdrop-blur-sm px-2 py-1 rounded border border-[#A9A9A9]/20 text-[10px] text-[#FF9500] font-mono tracking-widest">
                        LIVE_FEED_01
                     </div>
                  </div>
               </div>
               
               {/* Decorative Blueprint Lines */}
               <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#A9A9A9]/30 rounded-br-3xl -z-10"></div>
               <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#A9A9A9]/30 rounded-tl-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: BENEFITS */}
        <section className="py-20 relative bg-[#001830]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Benefits for <span className="text-[#FF9500]">Warehouses & Factories</span></h2>
              <div className="w-24 h-1 bg-[#FF9500] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Chemical Resistant", desc: "Impervious to acids, oils, and industrial solvents common in factories." },
                { icon: Droplets, title: "Slip Resistant", desc: "Custom textured finishes providing PTV 36+ safety ratings." },
                { icon: Hammer, title: "Impact Proof", desc: "Withstands heavy machinery, dropping tools, and forklift traffic." },
                { icon: Sparkles, title: "Aesthetic Finish", desc: "High-gloss seamless surfaces that improve light reflection." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-[#001F3F] p-8 rounded-xl border border-[#A9A9A9]/20 hover:border-[#FF9500] transition-all shadow-lg hover:shadow-[#FF9500]/10 group"
                >
                  <div className="w-14 h-14 bg-[#001F3F] rounded-lg border border-[#FF9500]/50 flex items-center justify-center mb-6 group-hover:bg-[#FF9500] transition-colors">
                    <item.icon className="text-[#FF9500] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#A9A9A9] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES GRID */}
        <section id="services" className="py-20 bg-[#001F3F] relative border-t border-[#A9A9A9]/10">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-end justify-between border-b border-[#A9A9A9]/20 pb-4">
              <h2 className="text-4xl font-bold text-white">Our Epoxy <span className="text-[#FF9500]">Services</span></h2>
              <Link to="/services/epoxy" className="text-[#FF9500] hover:text-white flex items-center gap-2 transition-colors">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Primary Services */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Link to="/heavy-duty-epoxy" className="group relative overflow-hidden rounded-2xl border-2 border-[#A9A9A9]/20 bg-[#001830] hover:border-[#FF9500] transition-all h-64 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/90 to-transparent z-10" />
                <Factory className="absolute top-8 right-8 text-[#A9A9A9]/20 w-32 h-32 group-hover:text-[#FF9500]/10 transition-colors" />
                <div className="relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF9500] transition-colors">Heavy Duty Epoxy Screeds</h3>
                  <p className="text-[#A9A9A9]">Extreme durability for high-impact industrial environments.</p>
                </div>
              </Link>
              <Link to="/birmingham" className="group relative overflow-hidden rounded-2xl border-2 border-[#A9A9A9]/20 bg-[#001830] hover:border-[#FF9500] transition-all h-64 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/90 to-transparent z-10" />
                <Warehouse className="absolute top-8 right-8 text-[#A9A9A9]/20 w-32 h-32 group-hover:text-[#FF9500]/10 transition-colors" />
                <div className="relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF9500] transition-colors">Local Warehouse Solutions</h3>
                  <p className="text-[#A9A9A9]">Specialized warehouse flooring packages in Birmingham & UK wide.</p>
                </div>
              </Link>
            </div>

            {/* Long Tail Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Food Factory Epoxy", "Pharmaceutical Resin", "Automotive Workshop", "Aerospace Hangars",
                "Electronics (ESD)", "Packaging Facilities", "Cold Storage", "Commercial Kitchens",
                "Plant Rooms", "Assembly Lines", "Loading Bays", "Showroom Floors"
              ].map((service, i) => (
                <Link key={i} to="/quote" className="p-4 border border-[#A9A9A9]/20 rounded-lg hover:border-[#FF9500] hover:bg-[#FF9500]/5 transition-all group flex items-center justify-between">
                  <span className="text-gray-300 font-medium group-hover:text-white">{service}</span>
                  <ArrowRight size={14} className="text-[#FF9500] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: INSTALLATION PROCESS */}
        <section className="py-20 bg-[#001830] border-y border-[#A9A9A9]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Installation <span className="text-[#FF9500]">Process</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#FF9500]/20 via-[#FF9500] to-[#FF9500]/20 z-0"></div>

              {[
                { 
                  step: "01", 
                  title: "Preparation & Survey", 
                  desc: "Diamond grinding or shot blasting substrate.",
                  link: "/services/shot-blasting",
                  linkText: "View Prep Methods"
                },
                { 
                  step: "02", 
                  title: "Resin Application", 
                  desc: "Multi-layer primer, build coat and sealer.",
                  link: null,
                  linkText: null
                },
                { 
                  step: "03", 
                  title: "Cure & Handover", 
                  desc: "Rapid curing for quick operational return.",
                  link: null,
                  linkText: null
                }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-[#001F3F] border-2 border-[#FF9500] rounded-full flex items-center justify-center text-2xl font-bold text-[#FF9500] shadow-[0_0_20px_rgba(255,149,0,0.2)] mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#A9A9A9] max-w-xs mb-4">{item.desc}</p>
                  {item.link && (
                    <Link to={item.link} className="text-[#FF9500] text-sm hover:underline flex items-center gap-1">
                      {item.linkText} <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PRICING */}
        <section className="py-20 bg-[#001F3F]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FF9500] rounded-full"></span> Pricing & Costs
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#A9A9A9]/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#001830] border-b border-[#A9A9A9]/30">
                    <th className="p-4 md:p-6 text-white font-bold">System Type</th>
                    <th className="p-4 md:p-6 text-[#FF9500] font-bold">Est. Cost (£/m²)</th>
                    <th className="p-4 md:p-6 text-[#A9A9A9] font-medium hidden md:table-cell">Ideal Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#A9A9A9]/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 text-gray-300 font-medium">Basic Floor Paint</td>
                    <td className="p-4 md:p-6 text-[#FF9500] font-bold">£20 - £30</td>
                    <td className="p-4 md:p-6 text-gray-400 hidden md:table-cell">Light traffic warehouses, storage rooms</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 text-gray-300 font-medium">High Build Epoxy</td>
                    <td className="p-4 md:p-6 text-[#FF9500] font-bold">£30 - £40</td>
                    <td className="p-4 md:p-6 text-gray-400 hidden md:table-cell">Factories, forklift aisles, workshops</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 text-gray-300 font-medium">Heavy Duty Screed</td>
                    <td className="p-4 md:p-6 text-[#FF9500] font-bold">£40 - £50+</td>
                    <td className="p-4 md:p-6 text-gray-400 hidden md:table-cell">Heavy engineering, chemical plants</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-[#A9A9A9] italic flex items-center gap-2">
              <Info size={14} /> Prices are indicative based on area size &gt;100m² and surface condition.
            </p>
          </div>
        </section>

        {/* SECTION 6: CASE STUDIES */}
        <section className="py-20 bg-[#001830] border-t border-[#A9A9A9]/10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-white">Project <span className="text-[#FF9500]">Case Studies</span></h2>
              <Link to="/case-studies" className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#FF9500] text-[#FF9500] rounded hover:bg-[#FF9500] hover:text-white transition-all">
                View Archive
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-[#001F3F] border border-[#A9A9A9]/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#FF9500]/10 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#001F3F]/20 group-hover:bg-transparent transition-all z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9" 
                    alt="Anonymous Factory Floor Repair"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700"
                  />
                  <div className="absolute top-2 right-2 bg-[#FF9500] text-white text-xs font-bold px-2 py-1 rounded z-20">
                    BEFORE / AFTER
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Automotive Assembly Plant</h3>
                  <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#FF9500]"></span> Cracked Concrete {String.fromCharCode(8594)} Seamless Resin
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Full restoration of 2,000m² damaged concrete floor using high-build epoxy screed.</p>
                  <Link to="/blog/industrial-latex-screed-companies-birmingham" className="text-[#FF9500] text-sm font-semibold hover:underline">Read Analysis &rarr;</Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#001F3F] border border-[#A9A9A9]/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#FF9500]/10 transition-all">
                <div className="relative h-48 overflow-hidden bg-[#001020]">
                  <div className="w-full h-full flex items-center justify-center text-[#A9A9A9]/20">
                    <Factory size={48} />
                  </div>
                  <div className="absolute top-2 right-2 bg-[#FF9500] text-white text-xs font-bold px-2 py-1 rounded z-20">
                    COMPLETED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Food Processing Facility</h3>
                  <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#FF9500]"></span> Failed Tiles {String.fromCharCode(8594)} PU Screed
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Installation of antimicrobial polyurethane resin system for hygiene compliance.</p>
                  <Link to="/case-studies" className="text-[#FF9500] text-sm font-semibold hover:underline">View Project &rarr;</Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#001F3F] border border-[#A9A9A9]/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#FF9500]/10 transition-all">
                <div className="relative h-48 overflow-hidden bg-[#001020]">
                  <div className="w-full h-full flex items-center justify-center text-[#A9A9A9]/20">
                    <Warehouse size={48} />
                  </div>
                  <div className="absolute top-2 right-2 bg-[#FF9500] text-white text-xs font-bold px-2 py-1 rounded z-20">
                    IN PROGRESS
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Logistics Distribution Hub</h3>
                  <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#FF9500]"></span> Dust Proofing
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Large scale dust-proofing and line marking for 5,000m² warehouse facility.</p>
                  <Link to="/case-studies" className="text-[#FF9500] text-sm font-semibold hover:underline">View Project &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: COMPARISON */}
        <section className="py-20 bg-[#001F3F]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Epoxy vs <span className="text-[#FF9500]">Other Systems</span></h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-4 border-b-2 border-[#FF9500] text-white text-lg w-1/4">Feature</th>
                    <th className="p-4 border-b-2 border-[#FF9500] text-[#FF9500] text-lg bg-[#FF9500]/10 w-1/4">Epoxy Resin</th>
                    <th className="p-4 border-b-2 border-[#A9A9A9] text-[#A9A9A9] text-lg w-1/4">Latex Screed</th>
                    <th className="p-4 border-b-2 border-[#A9A9A9] text-[#A9A9A9] text-lg w-1/4">Polished Concrete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#A9A9A9]/10">
                  <tr>
                    <td className="p-4 text-gray-300 font-medium">Chemical Resistance</td>
                    <td className="p-4 bg-[#FF9500]/5 text-[#FF9500] font-bold"><Check className="inline mr-1" size={16}/> Excellent</td>
                    <td className="p-4 text-gray-500">Low</td>
                    <td className="p-4 text-gray-500">Medium</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-medium">Durability (Heavy Load)</td>
                    <td className="p-4 bg-[#FF9500]/5 text-[#FF9500] font-bold"><Check className="inline mr-1" size={16}/> High</td>
                    <td className="p-4 text-gray-500">Medium</td>
                    <td className="p-4 text-gray-500">High</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-medium">Hygiene (Seamless)</td>
                    <td className="p-4 bg-[#FF9500]/5 text-[#FF9500] font-bold"><Check className="inline mr-1" size={16}/> Yes</td>
                    <td className="p-4 text-gray-500">Yes</td>
                    <td className="p-4 text-gray-500">No (Joints)</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-medium">Installation Speed</td>
                    <td className="p-4 bg-[#FF9500]/5 text-gray-300">3-5 Days</td>
                    <td className="p-4 text-gray-300">1-2 Days</td>
                    <td className="p-4 text-gray-300">5-10 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-[#A9A9A9] mb-4">Looking for faster curing times or self-levelling compounds?</p>
              <Link to="/services/latex" className="text-[#FF9500] hover:text-white underline decoration-dotted underline-offset-4 transition-colors">
                Compare with Commercial Latex Flooring
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ ACCORDION */}
        <section className="py-20 bg-[#001830] border-t border-[#A9A9A9]/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked <span className="text-[#FF9500]">Questions</span></h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <AccordionItem key={index} question={faq.name} answer={faq.acceptedAnswer.text} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: CTA */}
        <section className="py-24 bg-gradient-to-r from-[#FF9500] to-[#e68a00] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">Ready to Transform Your Floor?</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Get a free site survey and no-obligation quote from the UK's leading industrial flooring specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-[#FF9500] font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Schedule Site Visit <ArrowRight size={20} />
              </a>
              <Link 
                to="/quote" 
                className="px-10 py-5 bg-[#001F3F] text-white font-bold text-lg rounded-xl border border-white/20 shadow-xl hover:bg-[#001830] hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Online Quote Form
              </Link>
            </div>
            
            <p className="mt-8 text-white/80 font-medium flex items-center justify-center gap-2">
              <Phone size={18} /> Or call us directly: <a href="tel:07904909304" className="underline hover:text-white">07904 909 304</a>
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

// Helper Component for FAQ
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#A9A9A9]/20 rounded-lg bg-[#001F3F] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left text-white font-medium hover:bg-[#FF9500]/5 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-[#FF9500] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-[#A9A9A9]/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndustrialEpoxyGuidePage;