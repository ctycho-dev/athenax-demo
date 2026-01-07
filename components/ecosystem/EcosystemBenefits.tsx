export const EcosystemBenefits = () => (
   <section className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
               {
                  l: "Zero Foundation Burn",
                  v: "No cost to the foundation treasury.",
               },
               { l: "Yield-Funded Growth", v: "Sustainable builder onboarding." },
               { l: "Cross-Chain Reach", v: "Multi-ecosystem distribution." },
               { l: "Institutional Trust", v: "Powered by NounsDAO ethos." },
            ].map((item, i) => (
               <div key={i} className="p-8 bg-[#0a0a14] space-y-4">
                  <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-widest">
                     {item.l}
                  </span>
                  <p className="text-sm font-light text-white/60">{item.v}</p>
               </div>
            ))}
         </div>
      </div>
   </section>
);
