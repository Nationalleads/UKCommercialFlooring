import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is liquid screed?",
    answer: "Liquid screed, often called flow screed, is a self-smoothing floor compound made from a binder (calcium sulphate/anhydrite or cement), sand, water, and additives. It is pumped onto a subfloor to create a perfectly level surface ready for final floor finishes."
  },
  {
    question: "How long does liquid screed take to dry?",
    answer: "Liquid screed typically accepts light foot traffic within 24-48 hours. Full drying time depends on depth and conditions, but usually allows for force drying (using the UFH system) after 7 days, which significantly speeds up the process compared to traditional screed."
  },
  {
    question: "Is liquid screed suitable for Underfloor Heating (UFH)?",
    answer: "Yes, it is the ideal partner for UFH. Liquid screed fully encapsulates the heating pipes with zero air voids, providing thermal conductivity up to 2.2 W/mK—almost double that of sand and cement screed. This makes your heating system more efficient and responsive."
  },
  {
    question: "What's the difference between liquid screed and traditional screed?",
    answer: "Liquid screed can be installed much faster (up to 2000m² per day vs 150m²), dries quicker, can be laid thinner (saving ceiling height), and offers superior thermal performance. It is also self-levelling, achieving SR2 surface regularity as standard."
  },
  {
    question: "How much does liquid screed cost?",
    answer: "Costs typically range from £8 to £18 per m² depending on the project size. While material costs can be slightly higher than traditional mix, the speed of installation and reduced labor often make it cheaper overall for large areas."
  },
  {
    question: "Can liquid screed be used outdoors?",
    answer: "Generally, no. Most anhydrite liquid screeds are not suitable for external use or permanently wet areas unless specifically formulated cement-based flow screeds are used. Always consult with us for external requirements."
  },
  {
    question: "What's the coverage rate?",
    answer: "We can install over 1000m² to 2000m² in a single day using our high-performance pumps, making it perfect for large commercial warehouses and industrial units."
  },
  {
    question: "Is anhydrite screed better than cement?",
    answer: "Anhydrite (calcium sulphate) screed offers lower shrinkage, larger bay sizes without joints (up to 1000m²), and better thermal properties than cement. However, cement-based flow screeds are better for areas that might get wet or where shorter drying times are critical."
  }
];

const LiquidScreedFAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-gray-50">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left text-[#1a3a52] font-semibold text-lg hover:text-[#ff8c42] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedFAQSection;