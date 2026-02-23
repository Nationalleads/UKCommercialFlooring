import React from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: "Leeds Warehouse Leveling",
    desc: "Recovering a damaged concrete slab for a logistics center.",
    before: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop", // Generic warehouse floor
    after: "https://images.unsplash.com/photo-1686825076471-d1967dd836af",
    stats: { size: "1,200m²", duration: "2 Days" }
  },
  {
    title: "Manchester Factory Refurb",
    desc: "Deep fill latex application to correct 30mm variances.",
    before: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1000&auto=format&fit=crop", // Dirty concrete
    after: "https://images.unsplash.com/photo-1667227531635-1d40c36937e0",
    stats: { size: "850m²", duration: "3 Days" }
  },
  {
    title: "Retail Unit Preparation",
    desc: "Smooth finish ready for luxury vinyl tiles (LVT).",
    before: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop", // Rough floor
    after: "https://images.unsplash.com/photo-1515895309288-a3815ab7cf81",
    stats: { size: "400m²", duration: "1 Day" }
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332]">
             Latest <span className="text-[#ff8c42]">Case Studies</span>
           </h2>
           <Link to="/case-studies" className="text-[#ff8c42] font-bold hover:underline flex items-center gap-2">
             View All Projects <ArrowRight size={20} />
           </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-64">
                <BeforeAfterSlider 
                  beforeImage={study.before} 
                  afterImage={study.after}
                  beforeLabel="Rough Slab"
                  afterLabel="Latex Finish"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-[#1a2332] group-hover:text-[#ff8c42] transition-colors">{study.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{study.desc}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 border-t border-gray-200 pt-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Size</div>
                    <div className="text-[#1a2332] font-bold">{study.stats.size}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Duration</div>
                    <div className="text-[#1a2332] font-bold">{study.stats.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;