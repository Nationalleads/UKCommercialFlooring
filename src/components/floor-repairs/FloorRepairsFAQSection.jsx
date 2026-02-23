import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FloorRepairsFAQSection = () => {
  const faqs = [
    {
      question: "How much does concrete scabbling cost in the UK?",
      answer: "Concrete scabbling typically costs between £3.00 and £6.00 per m² depending on the depth of removal required and the hardness of the concrete. For smaller repair jobs, a minimum day rate (approx. £450) usually applies to cover equipment setup and travel."
    },
    {
      question: "What is concrete spalling and how do you fix it?",
      answer: "Spalling occurs when the surface of concrete cracks, pops out, or delaminates, often due to freeze-thaw cycles, corrosion of reinforcement, or heavy impact. We fix it by identifying the weak perimeter, scabbling away all loose material to a solid base, and reinstating with high-strength polymer repair mortars."
    },
    {
      question: "What's the difference between scabbling and grinding?",
      answer: "Scabbling uses piston-driven tungsten tips to impact and chip away the surface, creating a rough texture ideal for heavy bonding. Grinding uses rotating diamond abrasives to scratch and smooth the surface. Scabbling removes more material depth and is better for removing thick contaminants."
    },
    {
      question: "How long does floor repair take?",
      answer: "Minor spall repairs and crack filling can often be completed in a single day, with rapid-cure mortars allowing traffic within 2-4 hours. Large area scabbling (e.g., 500m²) typically takes 2-3 days depending on the required depth of removal."
    },
    {
      question: "Can scabbling remove honeycomb concrete?",
      answer: "Yes, scabbling is excellent for removing 'honeycomb' or poorly compacted concrete. It aggressively breaks away weak sections until sound, dense concrete is reached, ensuring that subsequent repairs are structurally bonded to a solid substrate."
    },
    {
      question: "Is scabbling suitable for my factory floor?",
      answer: "If you plan to install a thick screed (10mm+) or need to remove deep oil contamination, scabbling is ideal. However, because it leaves a rough texture, it is NOT suitable if you want a smooth finish immediately; it must be covered with a topping or overlay."
    },
    {
      question: "What equipment is used for scabbling?",
      answer: "We use a range of pneumatic equipment, from handheld single-head scabblers for edge work and vertical surfaces to walk-behind multi-head machines (pole scabblers) for large open floor areas. All are connected to industrial dust extraction units."
    },
    {
      question: "Do you offer repairs nationwide?",
      answer: "Yes, our team covers the entire UK. We have regular projects in Birmingham, London, Manchester, and Leeds. Our mobile crews are fully equipped to handle industrial flooring repairs in any location."
    },
    {
      question: "How do I prepare for floor repairs?",
      answer: "The area needs to be clear of stock and machinery. We require access to power (though we can provide generators) and lighting. We handle the containment and dust extraction, but a clear working zone is essential for safety."
    },
    {
      question: "Can repairs be done without shutting down operations?",
      answer: "Yes, we often work in sections or during nights/weekends to minimize downtime. Our dust-free vacuum systems allow us to work adjacent to live production lines in many cases without contaminating the environment."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-100 rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-[#1a2a4a] hover:text-[#ff8c42] py-5 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FloorRepairsFAQSection;