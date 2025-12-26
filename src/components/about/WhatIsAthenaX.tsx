export const WhatIsAthenaX = () => (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8">WHO ARE WE</h2>
                    <h3 className="text-4xl font-bold mb-8">What is AthenaX?</h3>
                    <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                        <p>
                            AthenaX is a decentralized ecosystem incubator powered by NounsDAO. We work at the ecosystem layer — helping chains grow, founders succeed, and communities scale across the multi-chain landscape.
                        </p>
                        <p>
                            We operate inside NounsDAO, accessing 600+ subcommunities and 56,000+ ecosystem members. When you partner with AthenaX, you're plugging into one of the largest grassroots networks in Ethereum.
                        </p>
                    </div>
                </div>
                <div className="space-y-8">
                    {[
                        { title: 'NounsDAO', desc: 'Cultural gravity, CC0 ethos, 56,000+ members. 33rd largest ETH holder.' },
                        { title: 'Octant / Golem', desc: '$2M+ distributed. 100,000+ ETH staked. 8th largest ETH holder.' },
                        { title: 'AthenaX Media', desc: '6M+ monthly reach. Multi-chain distribution through founder-focused media.' }
                    ].map((card, i) => (
                        <div key={i} className="p-8 border rounded-2xl hover:shadow-lg transition-all border-gray-100">
                            <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
                            <p className="text-gray-500">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
