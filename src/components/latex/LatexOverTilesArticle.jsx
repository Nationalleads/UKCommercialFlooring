
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  Settings, 
  Clock, 
  Layers, 
  ShieldCheck,
  TrendingUp,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LatexOverTilesArticle = () => {
  return (
    <article className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* 1. HERO / ATTENTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-l-4 border-[#ff8c42] pl-6 py-2 mb-8">
            <span className="text-[#ff8c42] font-bold tracking-wider uppercase text-sm">Industrial Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a2a4a] mt-2 leading-tight">
              Can You Lay Latex Screed Over Tiles? The Ultimate Guide for Warehouses & Factories
            </h1>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1a2a4a] mb-4 flex items-center gap-3">
              <AlertTriangle className="text-[#ff8c42]" size={28} />
              Attention: Uneven Tiles Ruining Your Factory Floor?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Imagine this: Your forklifts are vibrating violently as they trundle over old, cracked quarry tiles. 
              Productivity slows. Merchandise rattles. Drivers complain of back pain. 
              <span className="font-semibold text-[#1a2a4a]"> Old tiled floors are a silent profit killer in industrial settings.</span>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether it’s a 1980s food processing plant or a repurposed warehouse, existing tiled substrates often fail to meet modern flatness standards (FM2/FM3). The joints are sunken, the glaze is slippery, and the risk of a trip hazard is climbing daily. You need a solution that doesn't involve weeks of jackhammering.
            </p>
          </div>
        </motion.div>

        {/* 2. AGITATE SECTION */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Why Tiles Are a Nightmare for Industrial Overlays</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Many facility managers think they can simply paint over tiles or lay a thin vinyl sheet. <strong>This is a critical mistake.</strong> Without a proper leveling compound, the grout lines will "telegraph" through any coating within weeks, creating a grid pattern of weak points.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2a4a]">Adhesion Failure</h4>
                  <p className="text-sm text-gray-600">Glazed tiles are non-porous. Standard concrete screeds cannot bond to them and will delaminate (pop off) under load.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2a4a]">Structural Movement</h4>
                  <p className="text-sm text-gray-600">Tiles can bridge voids. If one tile cracks under a heavy machine, it compromises the entire floor coating above it.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#1a2a4a] text-white p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff8c42] opacity-10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold mb-4">The "Rip-Out" Trap</h3>
            <p className="text-gray-300 mb-6">
              Removing old tiles is expensive, dusty, and time-consuming. It can damage the sub-base, requiring even more expensive repairs.
            </p>
            <div className="bg-white/10 p-4 rounded-lg border-l-4 border-[#ff8c42]">
              <p className="font-semibold italic">
                "We saved 40% on renovation costs by using a specialized latex system instead of stripping 500m² of ceramic tiles."
              </p>
              <p className="text-sm text-[#ff8c42] mt-2">- Operations Manager, Manchester Distribution Hub</p>
            </div>
          </div>
        </div>

        {/* 3. EDUCATE SECTION */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#ff8c42] font-bold uppercase text-sm tracking-wider">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mt-2 mb-4">How Latex Screed Masters Tiles</h2>
            <p className="text-gray-600 text-lg">
              Latex self-leveling compound is the bridge between a problematic tiled surface and a pristine, modern industrial floor. It is protein-free, highly flexible, and engineered to bond to difficult substrates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Versatile Bonding",
                desc: "Advanced polymers grip to non-porous glazed surfaces where traditional cement fails."
              },
              {
                icon: Clock,
                title: "Rapid Cure",
                desc: "Walk on it in 2-4 hours. Lay resin or vinyl the very next day. Minimal downtime."
              },
              {
                icon: Settings,
                title: "Minimal Build-Up",
                desc: "Can be applied as thin as 3mm to smooth grout lines without raising floor levels significantly."
              },
              {
                icon: ShieldCheck,
                title: "Hygienic Finish",
                desc: "Creates a seamless, monolithic surface that eliminates bacteria-harboring grout joints."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#ff8c42]">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#1a2a4a] mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-[#1a2a4a] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. PRO INSTALLATION PROCESS */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-center">Pro Installation Process (Our Birmingham Method)</h2>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Assess & Prep", desc: "Check for hollow tiles. Degrease surface. Mechanical abrasion/priming is key." },
                { step: "02", title: "Prime", desc: "Apply a neoprene or epoxy primer to create a chemical bond with the glaze." },
                { step: "03", title: "Mix & Pour", desc: "Mix latex powder + liquid bottle. Pour to desired depth (typically 3-5mm)." },
                { step: "04", title: "Spike Roll", desc: "Release trapped air and blend batches for a seamless glass-like finish." },
                { step: "05", title: "Topcoat", desc: "Once cured (24h), apply your final epoxy resin or safety vinyl." }
              ].map((process, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="text-[#ff8c42] font-black text-4xl opacity-50 block mb-4">{process.step}</span>
                  <h4 className="font-bold text-lg mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-400">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. COSTS & ROI */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Costs & ROI: Is It Worth It?</h2>
            <p className="text-gray-700 mb-6">
              Compared to the massive expense of ripping up tiles and re-concreting, latex screeding is incredibly cost-effective.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
              <h4 className="font-bold text-[#1a2a4a] mb-2 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-600" /> Typical Investment
              </h4>
              <p className="text-gray-700">
                For a standard industrial floor, expect to pay between <span className="font-bold text-blue-700 bg-blue-100 px-1 rounded">£10 - £20 per m²</span> for supply and installation of a high-performance latex screed (depending on depth and area size).
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              *Note: This excludes shot blasting prep and final epoxy coatings. It creates the perfect canvas for those finishes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-[#1a2a4a] mb-4 text-xl">Quick Comparison</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Tile Removal</span>
                <span className="font-bold text-red-500">£££ High Cost</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">New Concrete</span>
                <span className="font-bold text-red-500">28 Days Cure</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Latex Over Tiles</span>
                <span className="font-bold text-green-600">£ Low Cost</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span className="text-gray-600">Turnaround</span>
                <span className="font-bold text-green-600">24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 6. REAL WORLD PROOF */}
        <div className="bg-white border-2 border-[#1a2a4a] rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
               <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center text-gray-500 font-bold mb-4">
                 Project Image Placeholder
               </div>
               <div className="flex items-center gap-2 text-[#ff8c42] font-bold">
                 <MapPin size={18} /> Leeds, UK
               </div>
            </div>
            <div className="md:w-2/3">
              <span className="bg-[#1a2a4a] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">CASE STUDY</span>
              <h3 className="text-2xl font-bold text-[#1a2a4a] mb-3">Failed Factory Floor Resurrected</h3>
              <p className="text-gray-600 mb-4">
                A textile factory in Leeds had a 400m² tiled canteen area that was cracking and trapping dirt. They needed a seamless, hygienic resin floor but couldn't afford a 2-week shutdown.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500" /> 
                  <span>Diamond ground existing tiles for key</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500" /> 
                  <span>Applied fiber-reinforced latex screed (5mm)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500" /> 
                  <span>Finished with high-build epoxy resin</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <span className="font-bold text-lg text-[#1a2a4a]">Total Time: 3 Days</span>
                <Link to="/case-studies" className="text-[#ff8c42] font-bold hover:underline flex items-center gap-2">
                  View Full Case Study <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};

export default LatexOverTilesArticle;
