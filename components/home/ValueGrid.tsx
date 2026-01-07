const Values = [
   {
      label: "Vault Yield",
      val: "Perpetual Growth",
      desc: "Funding that never touches your principal.",
   },
   {
      label: "Incubation",
      val: "Zero Cost",
      desc: "Partner foundations pay nothing",
   },
   {
      label: "Reach",
      val: "Media Engine",
      desc: "6M+ cross-chain monthly impressions.",
   },
   {
      label: "Grants",
      val: "Pipeline",
      desc: "Direct navigation for Grants.",
   },
];

export const ValueGrid = () => (
   <section className="py-32 bg-[#0a0a14] text-white px-8">
      <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {Values.map((item, i) => (
               <div
                  key={i}
                  className="bg-[#0a0a14] p-12 group hover:bg-white transition-all duration-500"
               >
                  <span className="block text-[10px] font-bold text-[#4a6fa5] uppercase tracking-widest mb-8">
                     {item.label}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-black transition-colors">
                     {item.val}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-black/60 transition-colors">
                     {item.desc}
                  </p>
               </div>
            ))}
         </div>
      </div>
   </section>
);
