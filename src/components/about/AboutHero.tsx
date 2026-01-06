const WhatEcosystemGetsItems = [
  {
    title: "DAO-Native",
    description: "Built inside NounsDAO. Governance-aligned.",
  },
  {
    title: "Cross-Chain",
    description: "Multi-ecosystem by default.",
  },
  {
    title: "Yield-Funded",
    description: "Growth runs on yields. Principal untouched.",
  },
  {
    title: "Zero Cost",
    description: "Ecosystems pay nothing. Builders keep equity.",
  },
];

interface PillarItem {
  title: string;
  description: string;
}

interface PillarsProps {
  items: PillarItem[];
}

export const Pillars = ({ items }: PillarsProps) => (
  <div className="grid grid-cols-2 gap-8">
    {items.map((item, index) => {
      const isEven = index % 2 === 0;
      const isThird = index === 2;
      const bgClass = isThird
        ? "bg-[#4a6fa5] text-white"
        : isEven
        ? "bg-white border border-black/5"
        : "bg-[#0a0a14] text-white";
      const textClass = isThird ? "text-white/60" : "text-[#4a6fa5]";

      return (
        <div
          key={index}
          className={`p-8 ${bgClass} flex flex-col justify-center space-y-4`}
        >
          <h5 className="font-medium text-xl">{item.title}</h5>
          <p
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${textClass}`}
          >
            {item.description}
          </p>
        </div>
      );
    })}
  </div>
);

interface SectionHeaderProps {
  label: string;
  title: string;
}

const SectionHeader = ({ label, title }: SectionHeaderProps) => (
  <div className="mb-16">
    <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block text-[#4a6fa5]">
      {label}
    </span>
    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-none text-[#0a0a14]">
      {title}
    </h2>
  </div>
);

export const AboutHero = () => (
  <section className="py-32 px-8 bg-[#fbfaf8]">
    <div className="max-w-7xl mx-auto">
      <SectionHeader label="Origins" title="About AthenaX" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-8 text-lg font-light leading-relaxed text-[#0a0a14]/80">
          <p>
            AthenaX is a decentralized incubator designed to replace venture
            burn with yield-funded growth.
          </p>
          <p>
            We help builders secure non-dilutive funding , then amplify capital
            through vault yields and media distribution.
          </p>
          {/* <p className="border-l-4 border-[#4a6fa5] pl-8 italic font-serif py-4 text-2xl text-[#0a0a14]">"Incubating ecosystems. Onboarding builders."</p> */}
        </div>
        <Pillars items={WhatEcosystemGetsItems} />
      </div>
    </div>
  </section>
);
