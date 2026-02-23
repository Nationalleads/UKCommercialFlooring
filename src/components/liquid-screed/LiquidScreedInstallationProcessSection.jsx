import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Shovel as Trowel, Wind, Sparkles } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Pump",
    desc: "The pre-mixed anhydrite screed is pumped directly into the prepared area using our high-capacity pumps.",
    image: "https://images.unsplash.com/photo-1676030712568-5cbe9f951dc1",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    num: "02",
    title: "Spread",
    desc: "Our expert installers use dapple bars to ripple the surface, releasing air bubbles and ensuring a smooth, level finish.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8",
    icon: <Trowel className="w-6 h-6" />
  },
  {
    num: "03",
    title: "Dry",
    desc: "The floor is left to cure. It's usually walkable within 24-48 hours, with forced drying possible after 7 days.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    icon: <Wind className="w-6 h-6" />
  },
  {
    num: "04",
    title: "Polish",
    desc: "We mechanically sand the surface to remove laitance, preparing it perfectly for the final floor covering.",
    image: "https://images.unsplash.com/photo-1620626012053-1c167d7453d7",
    icon: <Sparkles className="w-6 h-6" />
  }
];

const LiquidScreedInstallationProcessSection = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Liquid Screed",
    "step": steps.map(step => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.desc,
      "image": step.image,
      "position": parseInt(step.num)
    }))
  };

  return (
    <section className="py-20 bg-white">
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
            Installation Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined workflow ensures minimal disruption and maximum quality. Before we start, check out our <Link to="/services/shot-blasting" className="text-[#ff8c42] hover:underline font-medium">shot blasting & grinding</Link> preparation services.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={step.image} 
                    alt={`Liquid screed installation step ${step.num}: ${step.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#ff8c42] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.num}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[#1a3a52]">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a52]">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedInstallationProcessSection;