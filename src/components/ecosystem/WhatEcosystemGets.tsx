import { CheckCircle2 } from 'lucide-react';

export const WhatEcosystemGets = () => (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">What Your Ecosystem Gets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    'Official incubator at zero cost',
                    'Incubation for all qualified builders',
                    'Yield-funded growth (non-dilutive)',
                    'Cross-chain visibility by default',
                    'Builder onboarding and progression',
                    'Access to NounsDAO + Golem networks'
                ].map((item, i) => (
                    <div key={i} className="p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-400 transition-all group">
                        <CheckCircle2 className="text-blue-600 mb-6" size={32} />
                        <p className="text-xl font-bold">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
