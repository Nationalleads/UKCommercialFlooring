import React, { useState } from 'react';
import { Calculator, CheckCircle } from 'lucide-react';

const LiquidScreedCostsSection = () => {
  const [area, setArea] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(null);

  const calculateCost = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || areaNum <= 0) return;

    let rate = 15;
    if (areaNum > 100) rate = 12;
    if (areaNum > 500) rate = 10;
    if (areaNum > 1000) rate = 8;

    const minCost = areaNum * rate;
    const maxCost = areaNum * (rate + 3);

    setEstimatedCost({ min: minCost, max: maxCost, rate: rate });
  };

  return (
    <section className="py-20 bg-[#4a5568] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Pricing Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Liquid Screed Cost Calculator</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Pricing for liquid screed generally ranges from <span className="text-[#ff8c42] font-bold">£8 to £15 per m²</span> depending on the size of the area, depth of the pour, and site location. Larger commercial projects benefit from economies of scale.
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/10 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="text-[#ff8c42] w-5 h-5" /> Factors Affecting Price
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ff8c42] rounded-full mt-2"></span>
                  Project Size: Larger areas = lower cost per m².
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ff8c42] rounded-full mt-2"></span>
                  Depth: Standard is 50mm; deeper pours require more material.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ff8c42] rounded-full mt-2"></span>
                  Preparation: Additional costs for insulation, membrane, or UFH install.
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1a3a52] text-white">
                  <tr>
                    <th className="p-4">Project Size</th>
                    <th className="p-4">Estimated Rate (per m²)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-white/5">
                  <tr>
                    <td className="p-4">Up to 100m²</td>
                    <td className="p-4">£15.00 - £18.00</td>
                  </tr>
                  <tr>
                    <td className="p-4">100m² - 500m²</td>
                    <td className="p-4">£12.00 - £15.00</td>
                  </tr>
                  <tr>
                    <td className="p-4">500m² - 1000m²</td>
                    <td className="p-4">£10.00 - £12.00</td>
                  </tr>
                  <tr>
                    <td className="p-4">1000m²+</td>
                    <td className="p-4 font-bold text-[#ff8c42]">£8.00+ (Call for quote)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl p-8 text-[#1a3a52] shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ff8c42] p-3 rounded-lg text-white">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Quick Estimator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Total Area (m²)</label>
                <input 
                  type="number" 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g., 150"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff8c42] focus:outline-none transition-all"
                />
              </div>

              <button 
                onClick={calculateCost}
                className="w-full bg-[#1a3a52] hover:bg-[#2a4a62] text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Calculate Estimate
              </button>

              {estimatedCost && (
                <div className="mt-6 bg-[#f0f9ff] border border-blue-100 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4">
                  <p className="text-center text-gray-600 mb-2">Estimated Price Range:</p>
                  <p className="text-center text-3xl font-bold text-[#1a3a52]">
                    £{estimatedCost.min.toLocaleString()} - £{estimatedCost.max.toLocaleString()}
                  </p>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    *Excludes VAT. Based on approx rate of £{estimatedCost.rate}/m². Subject to site survey.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedCostsSection;