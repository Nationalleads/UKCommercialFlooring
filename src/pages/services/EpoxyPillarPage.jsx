
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Truck, Clock, ArrowRight } from 'lucide-react';
import PillarPageLayout from '@/components/PillarPageLayout';
import { generateProductSchema, generateFAQSchema } from '@/lib/seoSchema';
import { Link } from 'react-router-dom';

const EpoxyPillarPage = () => {
  const serviceName = "Commercial Epoxy Flooring";
  const title = "Commercial Epoxy Resin Flooring Contractors UK";
  const description = "Leading epoxy flooring installers for industrial warehouses, factories, and commercial spaces. Durable, anti-slip, and chemical resistant solutions.";
  
  const warehouseImage = "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/a14a18ebb9161e3e3ff339482fa88fe6.jpg";
  const warehouseAlt = "Professional warehouse with polished epoxy flooring";

  const schema = {
    "@graph": [
      generateProductSchema(serviceName, description, warehouseImage),
      generateFAQSchema([
        { question: "How much does commercial epoxy flooring cost?", answer: "Costs typically range from £30-£80 per m2 depending on the system specification, surface preparation requirements, and area size." },
        { question: "Is epoxy flooring suitable for heavy forklifts?", answer: "Yes, our heavy-duty industrial epoxy systems are specifically designed to withstand high point loading from forklifts and heavy machinery." }
      ])
    ]
  };

  const types = [
    { title: "Heavy-Duty Industrial", desc: "Extreme durability for warehouses with heavy forklift traffic.", icon: Truck },
    { title: "Food-Grade & Hygienic", desc: "Seamless, easy-to-clean surfaces meeting health & safety standards.", icon: CheckCircle },
    { title: "Anti-Static (ESD)", desc: "Protects sensitive electronic equipment from static discharge.", icon: Shield },
    { title: "Chemical Resistant", desc: "Specialized coatings for laboratories and automotive workshops.", icon: Shield },
  ];

  const processSteps = [
    { title: "Surface Prep", desc: "Shot blasting or diamond grinding to ensure adhesion." },
    { title: "Priming", desc: "Application of penetrating resin primer." },
    { title: "Repairs", desc: "Filling cracks and joints for a seamless base." },
    { title: "Body Coat", desc: "High-build epoxy layer installation." },
    { title: "Sealing", desc: "Final protective UV-stable topcoat." },
  ];

  return (
    <PillarPageLayout
      title={title}
      description={description}
      heroImage={warehouseImage}
      schema={schema}
      serviceName={serviceName}
    >
      {/* Overview Section */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6 text-center md:text-left">High-Performance Epoxy Flooring Solutions</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-center md:text-left">
              Our <strong>commercial epoxy flooring</strong> systems provide the ultimate protection for industrial concrete floors. Whether you manage a busy distribution center in Birmingham or a manufacturing plant in Manchester, our resin solutions deliver unmatched durability and safety.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-center md:text-left">
              Epoxy resin forms a seamless, impervious barrier that resists oil, chemicals, and heavy abrasion. Unlike traditional concrete, which generates dust and stains easily, an epoxy finish creates a hygienic, professional workspace that is easy to maintain and built to last.
            </p>
            <ul className="space-y-3 inline-block w-full md:w-auto">
              {["BS 8204-6 Compliance", "Slip Resistant (R10-R13)", "24-Hour Rapid Cure Options"].map(item => (
                <li key={item} className="flex items-center justify-center md:justify-start gap-2 text-[#1a2a4a] font-medium">
                  <CheckCircle className="text-[#ff8c42]" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <img 
               src={warehouseImage} 
               alt={warehouseAlt} 
               className="w-full h-full object-cover" 
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
               <p className="text-white font-bold text-lg text-center md:text-left">Industrial Grade Finish</p>
             </div>
          </div>
        </div>
      </section>

      {/* Types Grid */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a2a4a] mb-12">Specialized Epoxy Systems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type, idx) => {
              const Icon = type.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center md:text-left"
                >
                  <div className="w-12 h-12 bg-[#1a2a4a]/10 rounded-lg flex items-center justify-center mb-4 text-[#1a2a4a] mx-auto md:mx-0">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1a2a4a]">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.desc}</p>
                  <Link to="/quote" className="inline-flex items-center text-[#ff8c42] text-sm font-semibold mt-4 hover:underline">
                    Get Quote <ArrowRight size={14} className="ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1a2a4a] mb-12">Our 5-Step Installation Process</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-200 z-0 transform -translate-y-1/2"></div>
          
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 bg-[#ff8c42] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 border-4 border-white z-20">
                {idx + 1}
              </div>
              <h4 className="font-bold text-lg text-[#1a2a4a] mb-2">{step.title}</h4>
              <p className="text-sm text-gray-500 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-[#1a2a4a] mb-8">Common Questions</h2>
          <div className="space-y-4">
             <div className="border rounded-lg p-6 bg-gray-50">
               <h3 className="font-bold text-lg mb-2">How much does epoxy flooring cost?</h3>
               <p className="text-gray-600">While prices vary based on specification, expect ranges between £30-£80 per m². Factors include surface prep needs (shot blasting), area size, and system thickness (e.g., flowable screed vs. coatings).</p>
             </div>
             <div className="border rounded-lg p-6 bg-gray-50">
               <h3 className="font-bold text-lg mb-2">How long does installation take?</h3>
               <p className="text-gray-600">A typical 500m² warehouse can be completed in 3-4 days. This includes preparation, priming, and curing time. We offer weekend installations to minimize downtime.</p>
             </div>
          </div>
        </div>
      </section>
    </PillarPageLayout>
  );
};

export default EpoxyPillarPage;
