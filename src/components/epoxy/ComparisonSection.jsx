import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Epoxy vs Latex vs Sealer</h2>
          <p className="text-gray-600">Which system is right for your facility?</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-[#1a2a4a] text-white">
                <th className="p-4 text-left rounded-tl-lg">Feature</th>
                <th className="p-4 text-left bg-[#ff8c42]">Industrial Epoxy</th>
                <th className="p-4 text-left">Latex Screed</th>
                <th className="p-4 text-left rounded-tr-lg">Concrete Sealer</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="p-4 font-bold text-gray-700">Durability</td>
                <td className="p-4 font-bold text-[#1a2a4a]">High (Heavy Traffic)</td>
                <td className="p-4 text-gray-600">Medium (Underlayment)</td>
                <td className="p-4 text-gray-600">Low (Dust Proofing)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Chemical Resistance</td>
                <td className="p-4 text-green-600 font-bold"><Check className="inline mr-1" size={16}/> Excellent</td>
                <td className="p-4 text-red-500"><X className="inline mr-1" size={16}/> Poor</td>
                <td className="p-4 text-yellow-500"><Minus className="inline mr-1" size={16}/> Minimal</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="p-4 font-bold text-gray-700">Installation Time</td>
                <td className="p-4 text-gray-600">2-4 Days</td>
                <td className="p-4 text-gray-600">1-2 Days</td>
                <td className="p-4 text-gray-600">1 Day</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Slip Resistance</td>
                <td className="p-4 text-green-600 font-bold"><Check className="inline mr-1" size={16}/> Customizable (R12)</td>
                <td className="p-4 text-gray-600">Standard</td>
                <td className="p-4 text-red-500">Slippery when wet</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="p-4 font-bold text-gray-700">Typical Cost</td>
                <td className="p-4 font-bold text-[#1a2a4a]">£25 - £45 / m²</td>
                <td className="p-4 text-gray-600">£15 - £25 / m²</td>
                <td className="p-4 text-gray-600">£8 - £15 / m²</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-700">Lifespan</td>
                <td className="p-4 text-green-600 font-bold">10+ Years</td>
                <td className="p-4 text-gray-600">5-10 Years</td>
                <td className="p-4 text-gray-600">2-5 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;