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
  HelpCircle,
  Construction
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
            <span className="text-red-600 font-bold uppercase tracking-wide text-sm">Critical Issues</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">The Challenge</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The facility featured a pre-1970s concrete slab that had suffered significant wear over decades of heavy industrial use. Laser level surveys revealed drastic undulations with <strong>15mm dips</strong> across the production floor.
            </p>
            <p>
              These deviations were causing:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                <span>Severe forklift instability and safety risks during high-speed maneuvers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                <span>High risk of future epoxy overlay failure due to uneven substrate support.</span>
              </li>
            </ul>
            <p className="border-l-4 border-[#ff8c42] pl-4 mt-6 italic text-gray-700 bg-orange-50/50 py-2">
              <strong>Constraint:</strong> The client required a fast-track solution with a thin application (6-10mm) to minimize material costs, with a strict production downtime window of <strong>less than 48 hours</strong>.
            </p>
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
              src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/a430b25dd65bd1ff7ebc23005f1ab748.jpg" 
              alt="Damaged and uneven concrete factory floor with cracks and debris, indicating significant wear before renovation"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <div className="text-xs font-bold uppercase bg-red-600 px-2 py-1 inline-block rounded mb-2">Before</div>
              <p className="font-medium text-sm">Uneven substrate showing years of industrial wear</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="py-16 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">Our Expertise & Methodology</h2>
        <p className="text-gray-600">
          To meet the stringent strength requirements (30N/mm²) and timeline constraints, we specified <strong>SikaLevel 30 latex screed</strong>—a compound proven over 25+ years in aggressive industrial environments.
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
          <LazyImage 
            src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/3208b09c35229ee9d09d58e74e1d0946.png" 
            alt="Workers in yellow safety vests operating shot blasting equipment with dust clouds on an uneven concrete floor in an industrial warehouse setting."
            className="w-full h-full min-h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 border-t border-gray-200">
             <div className="flex justify-between items-center">
                <span className="font-bold text-[#1a2332]">Installation Phase</span>
                <span className="text-sm text-gray-500">Pump Application</span>
             </div>
          </div>
        </motion.div>

        <motion.div 
          className="order-1 lg:order-2 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Step 1 */}
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff8c42] hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                <Hammer size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">1. Mechanical Preparation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We utilized enclosed shot blasting to remove surface contaminants and achieve a CSP2 concrete profile. This dust-free method ensures maximum bond strength.
                </p>
                <Link to="/industrial-epoxy-flooring" className="text-[#ff8c42] font-semibold text-sm hover:underline flex items-center gap-1">
                  Learn about shot blasting <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff8c42] hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                <Layers size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">2. Rapid Pump Application</h3>
                <p className="text-gray-600 text-sm">
                  Using high-capacity pumps, we applied the latex compound at a rate of <strong>500m²/hour</strong>. This speed was critical to maintaining a wet edge across the large open plan area, ensuring a seamless finish.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff8c42] hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-2">3. Fast-Track Curing</h3>
                <p className="text-gray-600 text-sm">
                  The floor was finished with a spiked roller to remove air. The surface was walkable in just 4 hours and ready for the final epoxy resin coating within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332]">Results</h2>
          <p className="text-lg text-gray-600">
            The transformation was completed ahead of schedule, delivering a perfectly flat, durable surface ready for high-intensity manufacturing operations.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold text-[#ff8c42] mb-1">±2mm</div>
              <div className="text-xs text-gray-500 font-bold uppercase">Level Tolerance</div>
              <div className="text-xs text-gray-400 mt-1">Under 2m straight edge</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold text-[#ff8c42] mb-1">£8k</div>
              <div className="text-xs text-gray-500 font-bold uppercase">Cost Savings</div>
              <div className="text-xs text-gray-400 mt-1">Vs. full slab replacement</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold text-[#ff8c42] mb-1">2 Yr</div>
              <div className="text-xs text-gray-500 font-bold uppercase">Warranty</div>
              <div className="text-xs text-gray-400 mt-1">Zero callbacks since</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
           <LazyImage 
              src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/efa26474968351c0b494a87a1bc562aa.png" 
              alt="Finished smooth factory floor after latex levelling Leeds"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
              AFTER RESULT
            </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-16 bg-[#1a2332] relative overflow-hidden">
    {/* Abstract background shapes */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff8c42]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <Quote className="mx-auto text-[#ff8c42] mb-6 opacity-80" size={48} />
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight italic">
          "Leeds factory back online Day 2 – seamless under epoxy! The speed and quality of the levelling work exceeded our expectations."
        </h3>
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-[#ff8c42] mb-4 rounded-full"></div>
          <div className="text-white font-bold text-lg">Operations Manager</div>
          <div className="text-gray-400 text-sm">Anon Manufacturing Ltd, Leeds</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const RelatedServicesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1a2332]">Related Services</h2>
        <p className="text-gray-600 mt-2">Explore our full range of industrial flooring solutions</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Industrial Epoxy Flooring",
            link: "/industrial-epoxy-flooring",
            icon: <Layers className="text-[#ff8c42]" size={32} />,
            desc: "High-performance resin coatings for factories."
          },
          {
            title: "Shot Blasting Preparation",
            link: "/shot-blasting",
            icon: <Construction className="text-[#ff8c42]" size={32} />,
            desc: "Dust-free mechanical floor preparation."
          },
          {
            title: "Pricing & FAQ",
            link: "/faq",
            icon: <HelpCircle className="text-[#ff8c42]" size={32} />,
            desc: "Common questions and cost guides."
          }
        ].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={service.link}
              className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group h-full border border-gray-100"
            >
              <div className="bg-orange-50 w-fit p-4 rounded-xl mb-6 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon, { className: "group-hover:text-white text-[#ff8c42] transition-colors duration-300" })}
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#ff8c42] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <div className="flex items-center text-[#ff8c42] font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#2c3e50] z-0"></div>
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready for Your Leeds Latex Transformation?
        </h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Don't let uneven floors disrupt your production. Get a rapid, professional assessment and quote today from the UK's leading industrial flooring experts.
        </p>
        <Link 
          to="/quote" 
          className="inline-flex items-center gap-3 bg-[#ff8c42] text-white font-bold py-4 px-10 rounded-full hover:bg-[#e67e3a] transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,140,66,0.4)] text-lg"
        >
          Free Leeds Latex Quote <ArrowRight size={22} />
        </Link>
      </motion.div>
    </div>
  </section>
);

const CommercialLatexLeedsCase = () => {
  return (
    <div className="font-sans">
      <Helmet>
        <title>Commercial Latex Levelling Contractors Leeds – Factory Slab Transformation</title>
        <meta name="description" content="Commercial latex flooring experts in Leeds transforming 1,200m² factory slab. Fast-track self-levelling latex screed for industrial sites. See the case study." />
        <link rel="canonical" href="https://www.ukcommercialflooring.co.uk/blog/commercial-latex-levelling-contractors-leeds" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1a2332] text-white pt-20 pb-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/90 via-[#1a2332]/80 to-[#1a2332]"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#ff8c42] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Case Study: Leeds
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Commercial Latex Levelling Contractors Leeds – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] to-yellow-400">Factory Slab Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              As UK commercial latex flooring experts with 500+ projects from our Birmingham HQ, we specialize in self-levelling latex screed for industrial sites. In Leeds' Temple Newsam industrial estate – home to 200+ factories (ONS 2026 data) – we levelled a 1,200m² uneven concrete slab for Anon Manufacturing Ltd.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-semibold text-gray-400">
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                 <CheckCircle2 size={16} className="text-[#ff8c42]" /> 1,200m² Project
               </div>
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                 <CheckCircle2 size={16} className="text-[#ff8c42]" /> 48h Turnaround
               </div>
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                 <CheckCircle2 size={16} className="text-[#ff8c42]" /> Leeds Location
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ChallengeSection />
      <ExpertiseSection />
      <ResultsSection />
      <TestimonialSection />
      <RelatedServicesSection />
      <CTASection />
    </div>
  );
};

export default CommercialLatexLeedsCase;