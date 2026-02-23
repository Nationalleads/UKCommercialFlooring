import React from 'react';
import { ArrowRight, TrendingDown, DollarSign, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorRepairsCaseStudiesSection = () => {
  const cases = [
    {
      image: "https://images.unsplash.com/photo-1690443811403-fa1940fba7e7",
      title: "Automotive Plant Repair",
      location: "Birmingham",
      stats: {
        area: "450m²",
        type: "Oil Contaminated Concrete",
        method: "Deep Scabbling"
      },
      outcome: "Removed 10mm of oil-soaked concrete, allowing successful epoxy bond.",
      metric: "Zero Delamination"
    },
    {
      image: "https://images.unsplash.com/photo-1641714962108-50556e55336c",
      title: "Warehouse Spall Fixing",
      location: "Coventry",
      stats: {
        area: "Joint Repairs",
        type: "Spalled Expansion Joints",
        method: "Arris Repair Mortar"
      },
      outcome: "Restored smooth forklift transition, reducing tire wear significantly.",
      metric: "50% Less Tire Wear"
    },
    {
      image: "https://images.unsplash.com/photo-1634580265214-fe89917f5743",
      title: "Food Factory Resurfacing",
      location: "Manchester",
      stats: {
        area: "1,200m²",
        type: "Failed Topping",
        method: "Mechanical Planing"
      },
      outcome: "Removed failing screed in 2 days over a weekend shutdown.",
      metric: "48hr Turnaround"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a]">
            Real Results: Repair Case Studies
          </h2>
          <Link to="/case-studies" className="text-[#ff8c42] font-bold hover:underline flex items-center gap-2 mt-4 md:mt-0">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-[#1a2a4a]/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 backdrop-blur-sm">
                  {item.location}
                </div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-4">{item.title}</h3>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Area:</span>
                    <span className="font-semibold">{item.stats.area}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Damage:</span>
                    <span className="font-semibold">{item.stats.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Method:</span>
                    <span className="font-semibold">{item.stats.method}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  "{item.outcome}"
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-[#ff8c42] font-bold">
                   <ShieldCheck size={18} className="mr-2" />
                   {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorRepairsCaseStudiesSection;