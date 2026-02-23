import React from 'react';
import { HelpCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">Pricing & Costs</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Commercial latex flooring costs typically range from <span className="font-bold text-[#ff8c42]">£10 to £25 per m²</span> depending on the depth required and the condition of the substrate.
            </p>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a2332] text-white">
                    <th className="p-4 font-bold">Application Type</th>
                    <th className="p-4 font-bold">Depth</th>
                    <th className="p-4 font-bold">Est. Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">Warehouse Resurfacing</td>
                    <td className="p-4 text-gray-600">3-5mm</td>
                    <td className="p-4 font-bold text-[#ff8c42]">£12 - £18 / m²</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">Factory Floor Levelling</td>
                    <td className="p-4 text-gray-600">5-10mm</td>
                    <td className="p-4 font-bold text-[#ff8c42]">£15 - £22 / m²</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">Heavy Duty Deep Fill</td>
                    <td className="p-4 text-gray-600">10-25mm</td>
                    <td className="p-4 font-bold text-[#ff8c42]">£20 - £35 / m²</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">Retail Pre-Smooth</td>
                    <td className="p-4 text-gray-600">3mm</td>
                    <td className="p-4 font-bold text-[#ff8c42]">£10 - £15 / m²</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-xs text-gray-500 italic">
              *Prices are estimates based on areas &gt;200m². Small areas may incur minimum charges. Excludes shot blasting preparation.
            </p>
          </div>

          <div className="bg-[#1a2332] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="text-[#ff8c42]" /> 
              Factors Affecting Cost
            </h3>
            
            <div className="space-y-6">
              {[
                { title: "Floor Condition", text: "Heavily pitted or damaged concrete requires more material to fill voids, increasing the volume of latex needed." },
                { title: "Surface Area", text: "Economies of scale apply. Larger open areas (1000m²+) are significantly cheaper per square meter than small, complex rooms." },
                { title: "Location", text: "We offer competitive rates nationwide, but logistics for remote sites can influence the final quotation." }
              ].map((factor, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#ff8c42] transition-colors">
                  <h4 className="font-bold text-[#ff8c42] mb-2">{factor.title}</h4>
                  <p className="text-gray-300 text-sm">{factor.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;