import React from 'react';
import { AlertCircle } from 'lucide-react';

const QuoteStep4 = ({ details, currentFlooring, urgentService, onChange }) => {
  const flooringTypes = ['Concrete', 'Existing Coating/Resin', 'Tiles', 'Timber', 'Other'];

  const handleCheckboxChange = (type) => {
    const newSelection = currentFlooring.includes(type)
      ? currentFlooring.filter(t => t !== type)
      : [...currentFlooring, type];
    onChange('currentFlooring', newSelection);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1a2a4a] mb-2">Project Details</h2>
      <p className="text-gray-600">Tell us a bit more about the current state of the floor.</p>

      {/* Current Flooring */}
      <div>
        <h3 className="font-semibold text-[#1a2a4a] mb-3">Current Surface (Select all that apply)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {flooringTypes.map(type => (
            <label 
              key={type} 
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                currentFlooring.includes(type) 
                  ? 'bg-orange-50 border-[#ff8c42]' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={currentFlooring.includes(type)}
                onChange={() => handleCheckboxChange(type)}
                className="w-5 h-5 text-[#ff8c42] rounded focus:ring-[#ff8c42]"
              />
              <span className={`text-sm ${currentFlooring.includes(type) ? 'font-semibold text-[#1a2a4a]' : 'text-gray-600'}`}>
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="font-semibold text-[#1a2a4a] mb-3">Additional Information (Optional)</h3>
        <div className="relative">
          <textarea
            value={details}
            onChange={(e) => onChange('details', e.target.value)}
            maxLength={500}
            rows={4}
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#ff8c42] focus:ring-0 outline-none resize-none text-gray-700 bg-white"
            placeholder="E.g., access restrictions, specific chemical resistance needed, or preferred dates..."
          />
          <span className="absolute bottom-3 right-3 text-xs text-gray-400">
            {details.length}/500
          </span>
        </div>
      </div>

      {/* Urgent Service */}
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-4">
        <AlertCircle className="text-red-500 mt-1 flex-shrink-0" />
        <div>
          <label className="flex items-center gap-2 font-bold text-red-700 cursor-pointer">
            <input
              type="checkbox"
              checked={urgentService}
              onChange={(e) => onChange('urgentService', e.target.checked)}
              className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
            />
            I need urgent service (Start within 7 days)
          </label>
          <p className="text-sm text-red-600/80 mt-1">We will prioritize your request and call you ASAP.</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteStep4;