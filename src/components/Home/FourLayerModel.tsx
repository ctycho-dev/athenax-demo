import { Users, Radio, Zap, Globe } from 'lucide-react';

export const FourLayerModel = () => (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">Four-layer AthenaX Model</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: 'Community Layer', icon: <Users size={32} />, desc: 'NounsDAO, Farcaster, subcommunities, IRL activation' },
                    { title: 'Narrative Layer', icon: <Radio size={32} />, desc: 'Athena Live, Roundtable, Whitepaper Reading, Clips' },
                    { title: 'Builder Layer', icon: <Zap size={32} />, desc: 'GTM, BD, token design, launch support, coaching' },
                    { title: 'BD Layer', icon: <Globe size={32} />, desc: 'Multi-ecosystem BD, partnerships, builder migration' }
                ].map((item, i) => (
                    <div key={i} className="p-10 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
                        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
