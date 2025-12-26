export const AllEpisodes = () => (
    <section className="py-24 px-6 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-bold">All Episodes</h3>
                <div className="flex gap-2">
                    {['All', 'Livestream', 'Roundtable', 'Technical'].map(t => (
                        <button key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10">
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                            <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-[10px] font-bold rounded">24:12</span>
                        </div>
                        <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">Whitepaper Reading: Monad's Parallel Execution Pipeline</h4>
                        <p className="text-sm text-gray-500 mt-2">TECHNICAL • OCT 12, 2025</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
