import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { question: "Commercial latex flooring cost UK?", answer: "Costs typically range from £10 to £25 per m² depending on the size of the area and depth of the screed required." },
  { question: "How long does latex flooring take to cure?", answer: "Most industrial latex screeds accept foot traffic in 2-4 hours and are ready for final floor coverings or forklift traffic within 24 hours." },
  { question: "Is latex flooring suitable for warehouses?", answer: "Yes, it is excellent for levelling uneven warehouse floors. However, it is usually a subfloor and should be covered with epoxy resin or vinyl for long-term wear resistance." },
  { question: "Can latex be applied over uneven concrete?", answer: "Absolutely. That is its primary purpose. It can smooth out undulations from feather edge (1mm) up to 50mm deep in a single application." },
  { question: "What's the difference between latex and epoxy?", answer: "Latex is a cement-based levelling compound used to flatten floors. Epoxy is a resin-based coating used to protect floors and provide a hygienic, aesthetic finish." },
  { question: "How durable is commercial latex flooring?", answer: "High-strength industrial latex screeds can achieve compressive strengths of C35-C50, making them very durable, but they generally require a final wearing course." },
  { question: "Is latex flooring slip-resistant?", answer: "The latex screed itself is smooth. Slip resistance is determined by the final floor covering (e.g., anti-slip epoxy or safety vinyl) applied on top." },
  { question: "Can you apply epoxy over latex?", answer: "Yes, once the latex has fully dried (checked with a hygrometer) and prepared, it is the perfect smooth substrate for high-gloss epoxy resin coatings." },
  { question: "What's the lifespan of latex flooring?", answer: "As a subfloor, it lasts indefinitely if the structure is stable. As a wearing surface, it needs protection to prevent dusting and wear." },
  { question: "Do you offer latex flooring in Birmingham?", answer: "Yes, we have teams based in Birmingham, London, Manchester, and Leeds covering the entire UK." }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-gray-50">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2332] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-[#ff8c42] text-white' : 'bg-gray-100 text-gray-500'}`}>
                     <HelpCircle size={18} />
                  </div>
                  <span className={`font-bold text-lg ${activeIndex === index ? 'text-[#ff8c42]' : 'text-[#1a2332]'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`transition-transform duration-300 text-gray-400 ${activeIndex === index ? 'rotate-180 text-[#ff8c42]' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 pl-20 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;