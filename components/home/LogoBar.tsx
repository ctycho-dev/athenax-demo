export const LogoBar = () => (
   <section className="py-12  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
         <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
            Ecosystems & networks we touch
         </p>
         <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 ">
            <img src="/Nouns.png" alt="Nouns Logo" className="h-8 object-contain" />
            {/* {['Mantle', 'Polkadot', 'Octant', 'TON', 'Polygon', 'Liquity', 'Curve', 'Hedera', 'Nouns'].map(name => (
                    <span key={name} className="text-xl font-bold tracking-tighter">{name}</span>
                ))} */}
         </div>
      </div>
   </section>
);
