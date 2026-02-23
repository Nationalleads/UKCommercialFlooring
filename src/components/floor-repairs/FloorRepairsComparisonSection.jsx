import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorRepairsComparisonSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">
            Scabbling vs Grinding: Which is Right?
          </h2>
          <p className="text-gray-600">
            Understanding the difference between mechanical scabbling and diamond grinding is crucial for selecting the right preparation method for your floor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Scabbling Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-[#ff8c42] flex flex-col">
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-bold text-[#1a2a4a] mb-2">Mechanical Scabbling</h3>
              <p className="text-sm text-gray-500 mb-6">Impact method using tungsten carbide flails.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Best For:</strong> Heavy stock removal ({`>`}3mm) and removing thick overlays.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Profile:</strong> Very rough (CSP 6-9) - ideal for heavy screeds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Result:</strong> Exposes coarse aggregate, removes unsound concrete.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Finish:</strong> Rough texture, requires a topping layer.</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
              <Link to="/floor-repairs-scabbling" className="block w-full text-center py-3 rounded-lg border border-[#ff8c42] text-[#ff8c42] font-bold hover:bg-[#ff8c42] hover:text-white transition-all">
                Choose Scabbling
              </Link>
            </div>
          </div>

          {/* Grinding Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-[#1a2a4a] flex flex-col">
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-bold text-[#1a2a4a] mb-2">Diamond Grinding</h3>
              <p className="text-sm text-gray-500 mb-6">Abrasion method using rotating diamond discs.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Best For:</strong> Smoothing, cleaning, and light adhesive removal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Profile:</strong> Smooth to sandpaper texture (CSP 1-3).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Result:</strong> Flat surface, minimal material removal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-500 shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm"><strong>Limitations:</strong> Can't remove deep damage or thick screeds efficiently.</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
              <Link to="/concrete-grinding" className="block w-full text-center py-3 rounded-lg border border-[#1a2a4a] text-[#1a2a4a] font-bold hover:bg-[#1a2a4a] hover:text-white transition-all">
                Choose Grinding
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorRepairsComparisonSection;