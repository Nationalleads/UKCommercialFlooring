
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Ruler, Star, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "Commercial Latex Levelling Contractors Leeds",
    location: "Leeds, West Yorkshire",
    size: "1,200m²",
    image: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/085af3230a645f55775038a2ac124e71.png",
    challenge: "Uneven concrete slab at Temple Newsam industrial estate with ±15mm deviations causing forklift instability.",
    solution: "Mechanical preparation via shot blasting followed by SikaLevel 30 latex screed pump-applied at 5-8mm depth.",
    result: "Achieved SR1 surface regularity (±2mm under 3m straight edge), saving client £8k vs full slab replacement.",
    testimonial: "The team transformed our warehouse floor over a single weekend. The flatness is incredible.",
    client: "Logistics Manager, KD17",
    link: "/case-studies/commercial-latex-levelling-contractors-leeds",
    linkText: "Read Case Study"
  },
  {
    id: 2,
    title: "Industrial Latex Screed Companies Birmingham",
    location: "Bordesley Green, Birmingham",
    size: "800m²",
    image: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/242a13e3766d8b956e9e152723320c2d.png",
    challenge: "800m² honeycomb slab post-flood with 20mm voids threatening safety and UFH installation.",
    solution: "UltraTech Latex Fibre (flexural strength 8N/mm², fibre-reinforced), grinding/dust extraction, flow-applied 8-12mm, power-float finish, traffic-ready 6hrs.",
    result: "Even surface for liquid screed overlay, £5K savings, 18-month follow-up flawless, enhanced load-bearing 500kg/m².",
    testimonial: "Birmingham warehouse levelled overnight – pros!",
    client: "Site Director",
    link: "/case-studies/industrial-latex-screed-companies-birmingham",
    linkText: "Read Case Study"
  },
  {
    id: 14,
    title: "Failed Factory Floor Resurrected",
    location: "Birmingham, West Midlands",
    size: "2,500m²",
    image: "https://images.unsplash.com/photo-1583737177870-d5155284cf56",
    challenge: "2,500m² of delaminating failed resin and severe chemical pitting up to 15mm deep causing major safety risks.",
    solution: "Heavy-duty diamond grinding, neutralization, epoxy mortar repairs, and a 3-coat heavy-duty anti-slip epoxy system.",
    result: "100% reduction in safety incidents and 60% increase in floor reflectivity. Operational in 48 hours.",
    testimonial: "UK Commercial Flooring brought our facility back to life. Exceptional speed and quality.",
    client: "Operations Manager, Midland Mfg",
    link: "/case-studies/failed-factory-floor-resurrected",
    linkText: "Read Case Study"
  }
];

const LatexCaseStudiesSection = () => {
  const scrollToQuote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff8c42] font-bold tracking-wider uppercase text-sm mb-2 block">Our Track Record</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">Industrial Flooring Case Studies</h2>
          <p className="text-gray-600">
            From large-scale distribution centers in Birmingham to precision leveling in Leeds, explore how we solve complex flooring challenges across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 transform hover:-translate-y-2 hover:scale-[1.01]"
            >
              {/* Card Overlay Link - Makes entire card clickable */}
              <Link 
                to={study.link} 
                className="absolute inset-0 z-0"
                aria-label={`View case study: ${study.title}`}
              />

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white pointer-events-none">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <MapPin size={14} className="text-[#ff8c42]" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded w-fit">
                    <Ruler size={12} />
                    Project Size: {study.size}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col pointer-events-none">
                <h3 className="text-xl font-bold text-[#1a2332] mb-4 leading-tight group-hover:text-[#ff8c42] transition-colors">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Challenge</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Solution</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#ff8c42] uppercase tracking-wide mb-1 flex items-center gap-1">
                      <CheckCircle2 size={12} /> Result
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">{study.result}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6 relative">
                  <Quote className="absolute top-2 right-2 text-gray-200" size={24} />
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#ff8c42] fill-[#ff8c42]" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic mb-2">"{study.testimonial}"</p>
                  <p className="text-xs font-bold text-[#1a2332]">— {study.client}</p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between mt-auto p-6 pt-0 border-t border-gray-100 relative z-10">
                <Link 
                  to={study.link} 
                  className="text-xs font-semibold text-gray-500 hover:text-[#ff8c42] transition-colors"
                >
                  {study.linkText}
                </Link>
                <button 
                  onClick={scrollToQuote}
                  className="bg-[#1a2332] hover:bg-[#ff8c42] text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Get Free Quote <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[#1a2332] font-bold border-b-2 border-[#ff8c42] pb-1 hover:text-[#ff8c42] transition-colors"
            >
              View Full Case Study Portfolio <ArrowRight size={18} />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default LatexCaseStudiesSection;
