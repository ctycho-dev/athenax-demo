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

export const AboutHero = () => (
    <section className="py-32 px-8 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto">
            <SectionHeader label="Origins" title="About AthenaX" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-8 text-lg font-light leading-relaxed text-[#0a0a14]/80">
                    <p>AthenaX is a decentralized ecosystem incubator designed to replace traditional venture burn with sustainable, yield-funded growth.</p>
                    <p>Our mission is to help builders secure non-dilutive funding via NounsDAO and Octant, then amplify that capital through strategic vault yields and institutional-grade media distribution.</p>
                    <p className="border-l-4 border-[#4a6fa5] pl-8 italic font-serif py-4 text-2xl text-[#0a0a14]">"Incubating ecosystems. Onboarding builders."</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 bg-white border border-black/5 flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-[0.2em] mb-4">Ethos</span>
                        <h5 className="font-medium text-xl">DAO-Native</h5>
                    </div>
                    <div className="p-8 bg-[#0a0a14] text-white flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-[0.2em] mb-4">Distribution</span>
                        <h5 className="font-medium text-xl">Cross-Chain</h5>
                    </div>
                    <div className="p-8 bg-[#4a6fa5] text-white flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-4">Capital</span>
                        <h5 className="font-medium text-xl">Yield-Funded</h5>
                    </div>
                    <div className="p-8 bg-white border border-black/5 flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-[0.2em] mb-4">Model</span>
                        <h5 className="font-medium text-xl">Zero Cost</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
