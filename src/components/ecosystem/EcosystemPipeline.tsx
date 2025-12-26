interface SectionHeaderProps {
    label: string;
    title: string;
}

const SectionHeader = ({ label, title }: SectionHeaderProps) => (
    <div className="mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block text-[#4a6fa5]">{label}</span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-none text-[#0a0a14]">{title}</h2>
    </div>
);

export const EcosystemPipeline = () => (
    <section className="py-32 px-8 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto">
            <SectionHeader label="Phase 1" title="Ecosystem Pipeline" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                    { n: 'Octant', s: 'Confirmed', d: 'Providing the core vault infrastructure and matching grants.' },
                    { n: 'Polkadot', s: 'In Progress', d: 'Expanding the builder footprint across the Polkadot SDK ecosystem.' },
                    { n: 'Magic Eden', s: 'In Progress', d: 'Integrating cross-chain consumer and agentic ecosystems.' },
                    { n: 'Neura Protocol', s: 'In Progress', d: 'Incubating AI and DeSci builders on-chain.' }
                ].map(eco => (
                    <div key={eco.n} className="p-8 border border-black/5 bg-white flex justify-between items-start group hover:border-[#4a6fa5] transition-colors">
                        <div>
                            <h4 className="text-2xl font-medium mb-2">{eco.n}</h4>
                            <p className="text-sm text-[#8a8a93] max-w-xs">{eco.d}</p>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${eco.s === 'Confirmed' ? 'bg-[#4a9f7e]/10 text-[#4a9f7e]' : 'bg-[#4a6fa5]/10 text-[#4a6fa5]'}`}>{eco.s}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
