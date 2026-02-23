import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  AlertTriangle, 
  Layers, 
  Trophy, 
  Clock, 
  Hammer,
  MapPin,
  Building2,
  Factory
} from 'lucide-react';
import LazyImage from '@/components/LazyImage';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ChallengeSection = () => (
  <section className="py-16 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="p-2 bg-red-100 text-red-600 rounded-full">
              <AlertTriangle size={20} />
            </span>
            <span className="text-red-600 font-bold uppercase tracking-wide text-sm">Project Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">The Challenge: Food Factory Hygiene</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Operating within <strong>Trafford Park</strong>, Europe's largest industrial estate (home to 1,200 firms), this food processing facility faced a critical compliance issue. The 1,500m² concrete slab was compromised by stubborn adhesive residues from old vinyl flooring, making the installation of a new hygienic epoxy topcoat impossible.
            </p>
            <p>
              Key operational constraints included:
            </p>
            <ul className="space-y-3 ml-2">
              <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0" />
                <span className="text-sm"><strong>Contamination:</strong> Bitumen and latex adhesive residue preventing bond for new resin systems.</span>
              </li>
              <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0" />
                <span className="text-sm"><strong>HACCP Compliance:</strong> The facility required a seamless, impervious surface to meet strict food safety audits.</span>
              </li>
              <li className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0" />
                <span className="text-sm"><strong>Zero Odour:</strong> As an active food plant, solvent-based primers were strictly prohibited.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:w-1/2 w-full"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <LazyImage 
              src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/148453c82f9735d5d84f10b90eb24e97.png" 
              alt="Before: Adhesive residues on Manchester commercial factory slab – Vinyl removal needed"
              className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 z-20">
              <AlertTriangle size={16} /> BEFORE CHALLENGE
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="py-16 bg-slate-50 relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">Our Methodology & Expertise</h2>
        <p className="text-gray-600">
          UK Commercial Flooring (North West certified installers) specified a rapid-set system using <strong>Ardex K15</strong>. This high-performance latex screed offers a 30-minute pot life and superior bond strength (2N/mm²), creating the perfect substrate for resin coatings.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-2xl border border-gray-200"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2332]/20 to-transparent pointer-events-none z-10"></div>
          <LazyImage 
            src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/8bfde8d5f831db01b3d40c09266d190d.png" 
            alt="Ardex latex skim coat during install Manchester commercial – 5mm hygienic layer"
            className="w-full h-full min-h-[400px] object-cover"
          />
           <div className="absolute bottom-4 left-4 z-20 text-white">
              <div className="text-xs font-bold uppercase bg-red-600 px-2 py-1 inline-block rounded mb-2">Application</div>
              <p className="font-medium text-sm">Ardex latex skim coat during install</p>
            </div>
        </motion.div>

        <motion.div 
          className="order-1 lg:order-2 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "1. Captive Shot Blasting",
              desc: "Complete removal of old adhesives and surface laitance to CSP3 profile. Dust-free vacuum shot blasting ensured no contamination of the food environment.",
              icon: <Hammer size={20} />,
              link: "/services/shot-blasting"
            },
            {
              title: "2. Primer & Latex Skim",
              desc: "Application of Ardex P51 primer followed by a 5mm Ardex K15 latex screed. This effectively encapsulated any remaining contaminants and levelled the slab.",
              icon: <Layers size={20} />,
              link: "/commercial-latex-flooring"
            },
            {
              title: "3. Hygienic Trowel Finish",
              desc: "Skilled hand-troweling to remove air pockets and create a glass-smooth surface. Dried within 3 hours, ready for the final epoxy seal.",
              icon: <Clock size={20} />,
              link: "/industrial-epoxy-flooring"
            }
          ].map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff8c42] hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 mt-1">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {step.desc}
                  </p>
                  {step.link && (
                    <Link to={step.link} className="text-[#ff8c42] font-semibold text-xs uppercase tracking-wide hover:underline flex items-center gap-1">
                      Explore Process <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const ResultsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="p-2 bg-green-100 text-green-600 rounded-full">
              <Trophy size={20} />
            </span>
            <span className="text-green-600 font-bold uppercase tracking-wide text-sm">Project Outcome</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332]">Results & Client Benefits</h2>
          <p className="text-lg text-gray-600">
            The project was completed over a single weekend, allowing the factory to resume production on Monday morning. The new floor passed all HACCP hygiene audits with zero defects.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-[#ff8c42]">£12k</div>
                <div className="p-1.5 bg-green-100 text-green-600 rounded-full"><CheckCircle2 size={16} /></div>
              </div>
              <div className="text-sm font-bold text-gray-700 uppercase">Under Budget</div>
              <div className="text-xs text-gray-500 mt-1">Efficient prep saved material costs</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-[#ff8c42]">3 Yr</div>
                <div className="p-1.5 bg-green-100 text-green-600 rounded-full"><CheckCircle2 size={16} /></div>
              </div>
              <div className="text-sm font-bold text-gray-700 uppercase">Performance Guarantee</div>
              <div className="text-xs text-gray-500 mt-1">Against bond failure</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow border border-gray-100 sm:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-[#ff8c42]">CSP3</div>
                <div className="p-1.5 bg-green-100 text-green-600 rounded-full"><CheckCircle2 size={16} /></div>
              </div>
              <div className="text-sm font-bold text-gray-700 uppercase">Surface Profile</div>
              <div className="text-xs text-gray-500 mt-1">Optimum mechanical key achieved</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl h-full min-h-[400px]"
        >
           <LazyImage 
              src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/2b394b4966657682145f039ddef9259f.png" 
              alt="Seamless latex screed Manchester factory – CSP3 ready for epoxy HACCP compliant"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-4 border-t border-gray-200 z-20">
             <div className="flex justify-between items-center">
                <span className="font-bold text-[#1a2332] flex items-center gap-2">
                  <Layers size={18} className="text-[#ff8c42]" /> Hygienic Trowel Finish
                </span>
                <span className="text-xs font-bold bg-[#ff8c42] text-white px-2 py-1 rounded">Stage 3</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-20 bg-[#1a2332] relative overflow-hidden">
    {/* Abstract background effects */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#ff8c42]/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
           <Quote className="text-[#ff8c42]" size={32} />
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight italic font-serif">
          "Manchester commercial latex transformed our factory floor! We needed a solution that was fast, hygienic, and durable. The team delivered exactly that, keeping us audit-ready."
        </h3>
        <div className="flex flex-col items-center">
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff8c42] to-yellow-500 mb-6 rounded-full"></div>
          <div className="text-white font-bold text-xl">Quality Manager</div>
          <div className="text-gray-400">Trafford Park Food Processors</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 relative overflow-hidden bg-white">
    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#ff8c42] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
          Need Flooring in Manchester?
        </h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed relative z-10">
          From Trafford Park to the city centre, our local specialists provide industrial flooring solutions that meet the highest standards.
        </p>
        <Link 
          to="/locations/manchester" 
          className="inline-flex items-center gap-3 bg-[#ff8c42] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#e67e3a] transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,140,66,0.3)] text-lg relative z-10"
        >
          View Manchester Services <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);

const Breadcrumbs = () => (
  <nav className="bg-slate-50 py-3 border-b border-gray-200">
    <div className="container mx-auto px-4">
      <ol className="list-reset flex text-gray-500 text-sm">
        <li><Link to="/" className="hover:text-[#ff8c42]">Home</Link></li>
        <li><span className="mx-2">/</span></li>
        <li><Link to="/blog" className="hover:text-[#ff8c42]">Blog</Link></li>
        <li><span className="mx-2">/</span></li>
        <li className="text-gray-700 truncate">Manchester Latex Screed Case Study</li>
      </ol>
    </div>
  </nav>
);

const CaseStudyLatexScreedManchesterCommercial = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Latex Screed Contractors Manchester Commercial – Food Factory Prep",
    "image": "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/8bfde8d5f831db01b3d40c09266d190d.png", 
    "author": {
      "@type": "Organization",
      "name": "UK Commercial Flooring"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UK Commercial Flooring",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ukcommercialflooring.co.uk/logo.png"
      }
    },
    "datePublished": "2026-02-12", // Updated date to current date
    "description": "Case study: 1,500m2 latex screed flooring for food factory in Trafford Park, Manchester. Adhesive removal, HACCP compliance, and Ardex K15 installation.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.ukcommercialflooring.co.uk/blog/latex-screed-contractors-manchester-commercial"
    }
  };

  return (
    <div className="font-sans">
      <Helmet>
        <title>Latex Screed Contractors Manchester Commercial – Food Factory Prep</title>
        <meta name="description" content="Manchester commercial latex screed case study: 1,500m² Trafford Park food factory floor prep. Rapid adhesive removal and Ardex K15 screed for HACCP compliance." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1a2332] text-white pt-20 pb-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <LazyImage 
             src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80"
             alt="Industrial warehouse floor background Manchester"
             className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/90 via-[#1a2332]/80 to-[#1a2332]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#ff8c42] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-lg">
              <MapPin size={12} /> Manchester Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Latex Screed Contractors <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] to-yellow-400">Manchester Commercial</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Food Factory Prep: Expert floor preparation and latex levelling for a 1,500m² facility in Trafford Park.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-300">
               <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-lg border border-white/10 backdrop-blur-sm">
                 <Building2 size={16} className="text-[#ff8c42]" /> 1,500m² Project
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-lg border border-white/10 backdrop-blur-sm">
                 <Factory size={16} className="text-[#ff8c42]" /> Food Safety
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-lg border border-white/10 backdrop-blur-sm">
                 <MapPin size={16} className="text-[#ff8c42]" /> Trafford Park, M17
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ChallengeSection />
      <ExpertiseSection />
      <ResultsSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default CaseStudyLatexScreedManchesterCommercial;