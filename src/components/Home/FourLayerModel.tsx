import { Users, Radio, Zap, Globe } from "lucide-react";

const Layers = [
  {
    title: "Capital Layer",
    icon: <Users size={32} />,
    desc: "Grant acquisition, vault deployment, 1:1 matching. Non-dilutive funding through NounsDAO and Octant.",
  },
  {
    title: "Builder Layer",
    icon: <Radio size={32} />,
    desc: "Tokenomics, GTM architecture, launch sequencing, founder coaching.",
  },
  {
    title: "Network Layer",
    icon: <Zap size={32} />,
    desc: "Direct introductions to investors, exchanges, infrastructure partners. Structured partnerships, not referrals.",
  },
  {
    title: "Media Layer",
    icon: <Globe size={32} />,
    desc: "AthenaX TV, 6M+ reach. Narrative infrastructure that positions projects as category leaders.",
  },
];

export const FourLayerModel = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16">Four-layer AthenaX Model</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Layers.map((item, i) => (
          <div
            key={i}
            className="p-10 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group"
          >
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
