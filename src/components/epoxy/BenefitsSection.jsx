import React from 'react';
import { Shield, Droplets, Clock, Truck, FileCheck, Anchor, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Anchor,
    title: "Anti-slip Surface",
    description: "Enhanced traction ratings (R10-R13) to prevent workplace accidents in wet or oily conditions."
  },
  {
    icon: Droplets,
    title: "Chemical Resistant",
    description: "Impermeable to oils, acids, solvents, and harsh cleaning agents typically found in industrial environments."
  },
  {
    icon: Clock,
    title: "Quick Cure Time",
    description: "Fast-curing resin systems available to minimize downtime and get your facility back to work within 24 hours."
  },
  {
    icon: Truck,
    title: "Forklift Safe",
    description: "Extremely high compressive strength designed to withstand constant heavy forklift traffic and pallet jacks."
  },
  {
    icon: FileCheck,
    title: "HACCP Compliant",
    description: "Seamless, hygienic finishes that meet strict food safety standards and health regulations."
  },
  {
    icon: Shield,
    title: "Long-lasting Durability",
    description: "Superior abrasion resistance that protects the underlying concrete substrate for 10+ years."
  },
  {
    icon: Sparkles,
    title: "Easy to Clean",
    description: "Non-porous seamless surface that doesn't trap dirt, making maintenance simple and cost-effective."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Benefits for Warehouses & Factories</h2>
          <p className="text-gray-600">
            Why leading UK industrial facilities choose our seamless epoxy solutions for heavy-duty performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#1a2a4a] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff8c42] transition-colors">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;