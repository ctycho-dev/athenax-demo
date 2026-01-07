import { ArrowRight } from "lucide-react";

const CaseStudiesItems = [
   {
      title: "Nouns × Mantle",
      desc: "L2 builder onboarding through NounsDAO.",
   },
   {
      title: "Polkadot DV",
      desc: "Decentralized Voice governance and voting architecture.",
   },
   {
      title: "Nouns × Magic Eden",
      desc: "Creator and IP activation via NFT distribution.",
   },
];

export const CaseStudies = () => (
   <section className="py-24 px-6 bg-[#F5F5F7] border-y">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold mb-12">Case Studies</h2>
         <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 blur-sm">
               {CaseStudiesItems.map((cs, i) => (
                  <div
                     key={i}
                     className="p-10 bg-white rounded-2xl border hover:shadow-md transition-all"
                  >
                     <h4 className="text-2xl font-bold mb-4">{cs.title}</h4>
                     <p className="text-gray-600 leading-relaxed text-lg mb-8">{cs.desc}</p>
                     <button className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                        READ CASE STUDY <ArrowRight size={16} />
                     </button>
                  </div>
               ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            </div>
         </div>
      </div>
   </section>
);
