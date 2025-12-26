import { CheckCircle2 } from 'lucide-react';

export const WhatYouGet = () => (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">What You Get</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: 'Grant Support', icon: <CheckCircle2 />, desc: 'NounsDAO + Octant funding access' },
                    { title: 'Vault Matching', icon: <CheckCircle2 />, desc: '1:1 capital match on deposits' },
                    { title: 'Sprint Campaigns', icon: <CheckCircle2 />, desc: '7–30 day growth modules' },
                    { title: 'GTM Strategy', icon: <CheckCircle2 />, desc: 'Launch playbooks and coaching' },
                    { title: 'Tokenomics', icon: <CheckCircle2 />, desc: 'Expert design guidance' },
                    { title: 'Narrative Design', icon: <CheckCircle2 />, desc: 'Positioning and storytelling' },
                    { title: 'Media Amplification', icon: <CheckCircle2 />, desc: '6M+ cross-chain monthly reach' },
                    { title: 'BD & Partnerships', icon: <CheckCircle2 />, desc: 'Multi-ecosystem introductions' }
                ].map((item, i) => (
                    <div key={i} className="p-8 border rounded-xl hover:border-blue-400 transition-all shadow-sm">
                        <div className="text-blue-600 mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
