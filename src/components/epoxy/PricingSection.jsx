import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Pricing & Costs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for industrial flooring. Costs vary based on surface condition and preparation requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Tier 1 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-[#ff8c42] transition-colors bg-gray-50">
            <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Standard Industrial</h3>
            <div className="text-3xl font-bold text-[#ff8c42] mb-4">£20 - £30<span className="text-sm text-gray-500 font-normal">/m²</span></div>
            <p className="text-sm text-gray-600 mb-6">For light to medium duty warehouses.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> 2-Coat Epoxy Resin</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Standard Prep Included</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Gloss Finish</li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="border-2 border-[#ff8c42] rounded-xl p-8 shadow-xl relative transform md:-translate-y-4 bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff8c42] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</div>
            <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Heavy Duty</h3>
            <div className="text-3xl font-bold text-[#ff8c42] mb-4">£30 - £40<span className="text-sm text-gray-500 font-normal">/m²</span></div>
            <p className="text-sm text-gray-600 mb-6">High traffic forklift areas.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> High Build Epoxy (500μm+)</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Diamond Grinding Prep</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Anti-Slip Additive</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> 5 Year Warranty</li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-[#ff8c42] transition-colors bg-gray-50">
            <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Premium Systems</h3>
            <div className="text-3xl font-bold text-[#ff8c42] mb-4">£40 - £50<span className="text-sm text-gray-500 font-normal">/m²</span></div>
            <p className="text-sm text-gray-600 mb-6">Specialized chemical/food grade.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Polyurethane / Screeds</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Heavy Shot Blasting</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-[#ff8c42]" /> Extreme Chem Resistance</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-200">
          <h4 className="font-bold text-[#1a2a4a] mb-4">5 Key Factors That Affect Your Quote:</h4>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="p-3 bg-white rounded shadow-sm border border-gray-100"><span className="block text-xs font-bold text-gray-500 uppercase mb-1">Factor 1</span>Surface Condition</div>
            <div className="p-3 bg-white rounded shadow-sm border border-gray-100"><span className="block text-xs font-bold text-gray-500 uppercase mb-1">Factor 2</span>Total Area Size</div>
            <div className="p-3 bg-white rounded shadow-sm border border-gray-100"><span className="block text-xs font-bold text-gray-500 uppercase mb-1">Factor 3</span>Epoxy Grade</div>
            <div className="p-3 bg-white rounded shadow-sm border border-gray-100"><span className="block text-xs font-bold text-gray-500 uppercase mb-1">Factor 4</span>Prep Required</div>
            <div className="p-3 bg-white rounded shadow-sm border border-gray-100"><span className="block text-xs font-bold text-gray-500 uppercase mb-1">Factor 5</span>Curing Window</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;