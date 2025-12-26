import { Cpu, Layers, Activity } from 'lucide-react';

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

export const StructuralSupport = () => (
    <section className="py-32 px-8 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto">
            <SectionHeader label="Capabilities" title="Structural Support for Builders" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { icon: <Cpu />, title: "Technical GTM", tags: ["Infra", "DePin"], desc: "Full-stack launch playbooks tailored for technical protocol releases." },
                    { icon: <Layers />, title: "Narrative Design", tags: ["Branding", "Story"], desc: "Crafting durable positions within the decentralized zeitgeist." },
                    { icon: <Activity />, title: "Sprint Modules", tags: ["Growth", "DAO"], desc: "High-intensity 14-day growth sprints funded by vault yields." }
                ].map((f, i) => (
                    <div key={i} className="border-t border-black/10 pt-12 hover:border-[#4a6fa5] transition-colors group">
                        <div className="p-4 bg-[#0a0a14] text-white w-fit mb-12 group-hover:bg-[#4a6fa5] transition-colors">{f.icon}</div>
                        <h4 className="text-2xl font-medium mb-4">{f.title}</h4>
                        <p className="text-[#8a8a93] leading-relaxed mb-8 text-sm">{f.desc}</p>
                        <div className="flex gap-2">
                            {f.tags.map(t => <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-[#8a8a93] border border-black/10 px-2 py-0.5 rounded-full">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
