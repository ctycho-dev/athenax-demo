export const ArticleContent = () => (
    <div className="lg:col-span-8">
        <div className="aspect-video bg-[#0a0a14]/5 mb-12 flex items-center justify-center border border-black/5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93]">Featured Technical Illustration</span>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-[#0a0a14]/80 text-lg leading-relaxed font-light">
            <p className="text-2xl font-medium text-[#0a0a14] leading-tight mb-8">
                Decentralized incubation is shifting from high-dilution venture capital models to sustainable, yield-bearing vault architectures.
            </p>
            <p>
                Traditional startup incubation often forces builders into a trade-off: early-stage capital in exchange for substantial equity or token allocations. This model creates immediate sell pressure and misaligned incentives.
            </p>
            <blockquote className="border-l-4 border-[#4a6fa5] pl-8 py-4 my-12 italic font-serif text-3xl text-[#0a0a14]">
                "The goal is not just to fund projects, but to build perpetual engines of growth that do not touch the principal capital."
            </blockquote>
            <p>
                At AthenaX, we utilize the Octant vault infrastructure. By securing grants from NounsDAO or Octant directly to these vaults, we create a non-custodial yield environment. Builders maintain ownership while the yields fund intensive 14-day growth modules, narrative design, and cross-chain amplification.
            </p>
            <h3 className="text-3xl font-medium tracking-tight text-[#0a0a14] pt-8">The Architecture of Resilience</h3>
            <p>
                Capital efficiency in a bear market requires more than just spending. It requires strategic matching. Our 1:1 capital matching program ensures that every dollar of yield is amplified by institutional participation, creating a buffer for early-stage builders to focus on code rather than next week's runway.
            </p>
        </div>
    </div>
);
