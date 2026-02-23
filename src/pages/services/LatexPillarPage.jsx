
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplet, Zap, Link as LinkIcon, ArrowRight } from 'lucide-react';
import PillarPageLayout from '@/components/PillarPageLayout';
import { generateLocalBusinessSchema } from '@/lib/seoSchema';
import { Link } from 'react-router-dom';
import LatexOverTilesArticle from '@/components/latex/LatexOverTilesArticle';

const LatexPillarPage = () => {
  const serviceName = "Industrial Latex Flooring";
  const title = "Industrial Latex Floor Installers Near Me";
  const description = "Expert latex self-levelling compounds for uneven industrial floors. Perfect for surface preparation before vinyl, resin, or carpet installation.";

  const schema = generateLocalBusinessSchema(
    title,
    description,
    "https://images.unsplash.com/photo-1674485169641-bcb2bf6f1df9"
  );

  return (
    <PillarPageLayout
      title={title}
      description={description}
      heroImage="https://images.unsplash.com/photo-1674485169641-bcb2bf6f1df9"
      schema={schema}
      serviceName={serviceName}
    >
      {/* Overview */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Smooth, Level & Durable Sub-Floors</h2>
          <p className="text-lg text-gray-600 mb-8 px-4">
            Latex smoothing compounds are essential for correcting uneven concrete substrates. Our industrial latex screeds provide a perfectly flat surface, crucial for the longevity of final floor finishes like vinyl, ceramic tiles, or thin-coat resins.
          </p>
          <Link 
            to="/quote" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-md transition-all"
          >
            Get Latex Screed Quote <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Layers size={32} />, title: "Self-Levelling", desc: "Automatically flows to find a flat level, correcting undulations up to 50mm." },
            { icon: <Zap size={32} />, title: "Rapid Setting", desc: "Walkable in as little as 2 hours, ready for covering in 24 hours." },
            { icon: <Droplet size={32} />, title: "Moisture Tolerant", desc: "Available with integrated damp proof membranes (DPM) for new concrete." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-[#ff8c42] flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <Link to="/quote" className="text-[#ff8c42] text-sm font-semibold hover:underline">
                Request Info
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connection to Prep */}
      <section className="py-16 bg-[#1a2a4a] text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Crucial Step: Surface Preparation</h3>
            <p className="text-gray-300 mb-6">
              A latex screed is only as good as its bond to the subfloor. We highly recommend our 
              <span className="text-[#ff8c42] font-semibold"> dust-free shot blasting </span> 
              service to remove old adhesive residues and laitance before application.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link to="/services/shot-blasting" className="inline-flex items-center gap-2 text-[#ff8c42] font-bold hover:text-white transition-colors">
                <LinkIcon size={18} /> Learn about Shot Blasting
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 w-full">
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 text-left">
               <h4 className="font-bold mb-2">Why Prep Matters?</h4>
               <ul className="text-sm space-y-2 text-gray-300">
                 <li>• Prevents delamination</li>
                 <li>• Removes contaminants</li>
                 <li>• Increases mechanical key</li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* New Article Section - Latex Over Tiles */}
      <LatexOverTilesArticle />

      {/* Application Methods */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1a2a4a] mb-12">Application Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-xl overflow-hidden group">
            <div className="h-48 bg-gray-200 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Hand Mix & Trowel</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#1a2a4a]">Small Areas</h3>
              <p className="text-gray-600 text-sm">Ideal for patch repairs and rooms under 100m². Precision application by hand.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden group">
            <div className="h-48 bg-gray-200 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Pump Application</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#1a2a4a]">Large Scale</h3>
              <p className="text-gray-600 text-sm">Industrial pumps capable of laying 1000m²+ per day. Consistent mix quality.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden group">
            <div className="h-48 bg-gray-200 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Deep Fill</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#1a2a4a]">Renovations</h3>
              <p className="text-gray-600 text-sm">Specialized base compounds for raising floor levels up to 50-80mm in one pass.</p>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#1a2a4a] mb-4">Ready to Level Your Floor?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto px-4">Get a precise technical specification and quote from our team.</p>
          <Link 
            to="/quote" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-lg w-full sm:w-auto justify-center"
          >
            Get Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </PillarPageLayout>
  );
};

export default LatexPillarPage;
