import { CheckCircle2 } from "lucide-react";

const WhatYouGetItems = [
   {
      title: "Capital",
      icon: <CheckCircle2 />,
      desc: "Grant acquisition. 1:1 vault matching on deposits.",
   },
   {
      title: "Infrastructure",
      icon: <CheckCircle2 />,
      desc: "Tokenomics, GTM architecture, launch sequencing, founder coaching.",
   },
   {
      title: "Distribution",
      icon: <CheckCircle2 />,
      desc: "AthenaX TV features, BD introductions, multi-ecosystem reach.",
   },
];

export const WhatYouGet = () => (
   <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold mb-16 text-center">What You Get</h2>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WhatYouGetItems.map((item, i) => (
               <div
                  key={i}
                  className="p-8 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all shadow-sm group"
               >
                  <div className="text-blue-600 mb-4 group-hover:text-blue-600 transition-colors">
                     {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
               </div>
            ))}
         </div>
      </div>
   </section>
);
