import { Plus } from 'lucide-react';

export const ArticleSidebar = () => (
    <div className="lg:col-span-4 space-y-12">
        <div className="p-8 bg-[#fbfaf8] border border-black/5">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5] mb-6">Key Takeaways</h5>
            <ul className="space-y-4 text-sm font-medium">
                <li className="flex gap-3"><Plus className="w-4 h-4 text-[#4a6fa5] shrink-0" /> Yield-funded incubation preserves project equity.</li>
                <li className="flex gap-3"><Plus className="w-4 h-4 text-[#4a6fa5] shrink-0" /> NounsDAO grants provide critical seed momentum.</li>
                <li className="flex gap-3"><Plus className="w-4 h-4 text-[#4a6fa5] shrink-0" /> 1:1 Matching maximizes capital efficiency.</li>
            </ul>
        </div>

        <div className="p-8 border-t border-black/10">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93] mb-6">Related Intelligence</h5>
            <div className="space-y-8">
                <div className="group cursor-pointer">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5]">Technical</span>
                    <h6 className="font-medium leading-tight group-hover:text-[#4a6fa5] transition-colors mt-2">The Octant Vault Mechanism Deep-Dive</h6>
                </div>
                <div className="group cursor-pointer">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5]">Governance</span>
                    <h6 className="font-medium leading-tight group-hover:text-[#4a6fa5] transition-colors mt-2">Strategic Narrative Alignment with Nouns</h6>
                </div>
            </div>
        </div>
    </div>
);
