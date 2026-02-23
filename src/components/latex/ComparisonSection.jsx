import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Minus } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-[#1a2332] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latex vs Epoxy vs Liquid Screed</h2>
          <p className="text-gray-400">Comparing different industrial flooring solutions to help you choose.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-center">
            <thead>
              <tr className="bg-white/5">
                <th className="p-6 text-left">Feature</th>
                <th className="p-6 text-[#ff8c42] text-xl">Latex Screed</th>
                <th className="p-6 font-bold">
                  <Link to="/industrial-epoxy-flooring" className="hover:text-[#ff8c42] underline">Epoxy Resin</Link>
                </th>
                <th className="p-6 font-bold">
                  <Link to="/services/liquid-screed" className="hover:text-[#ff8c42] underline">Liquid Screed</Link>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="p-4 text-left font-bold text-gray-300">Application Thickness</td>
                <td className="p-4 font-bold text-white bg-white/5">3mm - 50mm</td>
                <td className="p-4 text-gray-400">0.5mm - 5mm</td>
                <td className="p-4 text-gray-400">35mm - 80mm</td>
              </tr>
              <tr>
                <td className="p-4 text-left font-bold text-gray-300">Drying Time (Foot Traffic)</td>
                <td className="p-4 font-bold text-green-400 bg-white/5">2-4 Hours</td>
                <td className="p-4 text-gray-400">12-24 Hours</td>
                <td className="p-4 text-gray-400">24-48 Hours</td>
              </tr>
              <tr>
                <td className="p-4 text-left font-bold text-gray-300">Self-Levelling</td>
                <td className="p-4 bg-white/5"><Check className="inline text-green-400" /></td>
                <td className="p-4"><Check className="inline text-yellow-500" /> (Self-Smoothing)</td>
                <td className="p-4"><Check className="inline text-green-400" /></td>
              </tr>
              <tr>
                <td className="p-4 text-left font-bold text-gray-300">Wearing Surface?</td>
                <td className="p-4 bg-white/5"><X className="inline text-red-500" /> (Needs Cover)</td>
                <td className="p-4"><Check className="inline text-green-400" /> (Hard Wearing)</td>
                <td className="p-4"><X className="inline text-red-500" /> (Needs Cover)</td>
              </tr>
              <tr>
                <td className="p-4 text-left font-bold text-gray-300">Cost</td>
                <td className="p-4 font-bold text-white bg-white/5">Low / Medium</td>
                <td className="p-4 text-gray-400">Medium / High</td>
                <td className="p-4 text-gray-400">Low (Large Areas)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;