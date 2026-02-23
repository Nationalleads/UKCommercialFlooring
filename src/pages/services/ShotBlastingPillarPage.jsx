
import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Eraser, Settings, Check, ArrowRight } from 'lucide-react';
import PillarPageLayout from '@/components/PillarPageLayout';
import { generateServiceSchema } from '@/lib/seoSchema';
import { Link } from 'react-router-dom';

const ShotBlastingPillarPage = () => {
  const serviceName = "Blast & Grind Services";
  const title = "Industrial Floor Shot Blasting Contractors";
  const description = "Dust-free captive shot blasting services for concrete floor preparation. Efficient removal of paint, adhesive, and contaminants.";

  const schema = generateServiceSchema(
    serviceName, 
    "Surface Preparation", 
    description
  );

  return (
    <PillarPageLayout
      title={title}
      description={description}
      heroImage="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/48e9421389074107e4b7fae509b07b28.jpg"
      schema={schema}
      serviceName={serviceName}
    >
      {/* Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">The Gold Standard in Surface Prep</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Shot blasting is the most efficient, clean, and effective method for preparing concrete floors. By firing steel abrasive at the surface and immediately reclaiming the dust, we create the perfect mechanical key for new coatings.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
               {["Dust-Free System", "Removes Old Paint", "Exposes Aggregate", "Fast & Efficient"].map((feat, i) => (
                 <div key={i} className="flex items-center gap-2 text-[#1a2a4a] font-semibold">
                   <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                     <Check size={14} />
                   </div>
                   {feat}
                 </div>
               ))}
            </div>
            <Link 
              to="/quote" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-md transition-all"
            >
              Get Preparation Quote <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/48e9421389074107e4b7fae509b07b28.jpg" 
              alt="Professional contractor in full safety gear operating industrial shot blasting equipment on a large concrete warehouse floor" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a2a4a] mb-12">What We Remove</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Floor Paint", icon: <Eraser size={24} />, desc: "Stripping failing epoxy and PU coatings." },
              { title: "Adhesive / Glue", icon: <Settings size={24} />, desc: "Removing stubborn carpet tile bitumens." },
              { title: "Surface Laitance", icon: <Hammer size={24} />, desc: "Exposing strong aggregate for bonding." },
              { title: "Oil & Grease", icon: <Check size={24} />, desc: "Deep cleaning contaminated industrial floors." }
            ].map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#ff8c42]"
              >
                <div className="text-[#1a2a4a] mb-3">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
                <Link to="/quote" className="text-[#ff8c42] text-sm font-semibold mt-3 inline-block hover:underline">
                  Get Price
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Tech */}
      <section className="py-16 bg-[#1a2a4a] text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-3xl font-bold mb-6">Our Machinery</h2>
           <p className="text-xl text-gray-300 mb-8">
             We utilize walk-behind captive shot blasters connected to powerful HEPA industrial vacuums. This ensures a virtually dust-free environment, allowing us to work in live factories and food production areas without contamination risk.
           </p>
           <div className="flex justify-center gap-4 flex-wrap mb-10">
             <Link to="/epoxy-flooring" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
               View Epoxy Services
             </Link>
             <Link to="/latex-flooring" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
               View Latex Services
             </Link>
           </div>
           
           <div className="pt-8 border-t border-white/10">
             <h3 className="text-2xl font-bold mb-6">Ready to Prepare Your Floor?</h3>
             <Link 
               to="/quote" 
               className="inline-flex items-center gap-2 px-10 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg hover:shadow-[#ff8c42]/30 transition-all transform hover:-translate-y-1 text-lg"
             >
               Get Free Quote <ArrowRight size={20} />
             </Link>
           </div>
        </div>
      </section>
    </PillarPageLayout>
  );
};

export default ShotBlastingPillarPage;
