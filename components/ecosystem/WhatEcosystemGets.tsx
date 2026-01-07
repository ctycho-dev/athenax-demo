import { CheckCircle2 } from "lucide-react";

const WhatEcosystemGetsItems = [
   {
      title: "Zero-cost incubator",
      description: "No treasury spend. Runs on vault yields.",
   },
   {
      title: "Non-dilutive growth",
      description: "Funded by yields, not token sales or equity.",
   },
   {
      title: "Cross-chain distribution",
      description: "Projects gain visibility across AthenaX’s multi-ecosystem network.",
   },
];

export const WhatEcosystemGets = () => (
   <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold mb-16">What Your Ecosystem Gets</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WhatEcosystemGetsItems.map((item, i) => (
               <div
                  key={i}
                  className="p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-400 transition-all group"
               >
                  <div className="flex items-center gap-4  mb-6">
                     <CheckCircle2 className="text-blue-600" size={32} />
                     <p className="text-xl font-bold">{item.title}</p>
                  </div>

                  <p className="text-gray-600 mt-2">{item.description}</p>
               </div>
            ))}
         </div>
      </div>
   </section>
);
