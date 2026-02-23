import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      q: "What is industrial epoxy flooring and how does it work?",
      a: "Industrial epoxy flooring is a two-part resin system consisting of a polymer resin and a hardener. When mixed, they react chemically to form a rigid plastic material that is strong, resistant to degradation, and bonds exceptionally well to concrete substrates. It works by creating a seamless, non-porous layer that protects the underlying concrete from heavy impacts, chemicals, oils, and moisture."
    },
    {
      q: "How much does industrial epoxy flooring cost in the UK?",
      a: "The cost of industrial epoxy flooring in the UK typically ranges from £20 to £50 per square metre, depending on the specification. A simple sealer might cost less, while a heavy-duty, multi-layer high-build system or chemical-resistant screed will be at the higher end. Factors like surface preparation (shot blasting), floor repairs, and total area size significantly influence the final quote."
    },
    {
      q: "How long does epoxy flooring take to cure?",
      a: "Standard epoxy systems usually accept foot traffic after 12-24 hours and heavy forklift traffic after 48-72 hours. However, we offer fast-cure resin systems that can be fully operational in as little as 6 hours, minimizing downtime for your business."
    },
    {
      q: "Is epoxy flooring slip-resistant?",
      a: "Yes, epoxy flooring can be made slip-resistant. While standard high-gloss epoxy can be slippery when wet, we incorporate anti-slip aggregates (such as quartz or aluminium oxide) into the resin to achieve specific slip ratings (R10, R11, R12) required for your health and safety compliance."
    },
    {
      q: "Can epoxy flooring handle chemical spills?",
      a: "Absolutely. Industrial epoxy is inherently resistant to many chemicals, including oils, petrol, bleach, and cleaners. For facilities handling aggressive acids or solvents, we recommend specialized chemical-resistant polyurethane or Novolac epoxy systems designed for extreme environments."
    },
    {
      q: "What is the lifespan of industrial epoxy flooring?",
      a: "A professionally installed industrial epoxy floor typically lasts between 10 to 20 years, depending on traffic levels and maintenance. Heavy-duty screeds can last even longer. Proper surface preparation is the single biggest factor in ensuring longevity."
    },
    {
      q: "How do you maintain epoxy flooring?",
      a: "Maintenance is simple. Daily sweeping to remove abrasive dust and regular mopping with a neutral pH cleaner is usually sufficient. Avoid abrasive pads or harsh acids that can dull the gloss finish over time. The seamless nature means there are no grout lines for dirt to hide in."
    },
    {
      q: "Is epoxy flooring suitable for food processing facilities?",
      a: "Yes, epoxy is the standard for food and beverage facilities. It creates a seamless, impervious surface that eliminates bacterial growth points. Our systems are HACCP compliant, easy to steam clean, and non-tainting during installation."
    },
    {
      q: "Can epoxy flooring be applied over existing concrete?",
      a: "Yes, epoxy is designed to be applied over existing concrete. However, the concrete must be structurally sound, clean, and free of rising damp. We perform mechanical preparation (shot blasting or diamond grinding) to remove old coatings and open the pores for adhesion."
    },
    {
      q: "What is the difference between epoxy and polyurethane flooring?",
      a: "While both are resins, Epoxy is generally harder, more durable, and bonds better to concrete, making it ideal for warehouses. Polyurethane is more flexible, handles temperature shocks better (thermal shock), and has higher resistance to lactic acids, making it often preferred for commercial kitchens and bakeries."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-[#1a2a4a] mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1a2a4a] hover:text-[#ff8c42] py-4 text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;