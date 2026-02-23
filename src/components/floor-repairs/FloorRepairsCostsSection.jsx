import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorRepairsCostsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">
            Floor Repair & Scabbling Costs UK
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Transparent pricing for industrial floor preparation. Costs typically range from <span className="font-bold text-[#1a2a4a]">£3 to £6 per m²</span> depending on complexity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1a2a4a] text-white">
                <tr>
                  <th className="p-6 font-bold text-lg">Repair Type</th>
                  <th className="p-6 font-bold text-lg">Damage Severity</th>
                  <th className="p-6 font-bold text-lg">Area Size</th>
                  <th className="p-6 font-bold text-lg text-right">Est. Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-medium">Surface Scabbling</td>
                  <td className="p-6"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Minor</span></td>
                  <td className="p-6">Large ({`>`}500m²)</td>
                  <td className="p-6 text-right font-bold">£3.00 - £4.50 /m²</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-medium">Deep Profiling</td>
                  <td className="p-6"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase">Moderate</span></td>
                  <td className="p-6">Medium (100-500m²)</td>
                  <td className="p-6 text-right font-bold">£4.50 - £6.00 /m²</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-medium">Spall Repair & Patching</td>
                  <td className="p-6"><span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase">Severe</span></td>
                  <td className="p-6">Spot Repairs</td>
                  <td className="p-6 text-right font-bold">Day Rate (£450+)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-orange-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <HelpCircle className="text-[#ff8c42] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#1a2a4a]">Factors Affecting Cost</h4>
                <p className="text-sm text-gray-600">Location (Birmingham vs Nationwide), access restrictions, waste disposal needs, and power availability.</p>
              </div>
            </div>
            <Link 
              to="/quote" 
              className="px-6 py-3 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg shadow-md whitespace-nowrap flex items-center gap-2 transition-all"
            >
              Get Accurate Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorRepairsCostsSection;