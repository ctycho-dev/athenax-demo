import { Play } from 'lucide-react';

export const FeaturedVideo = () => (
    <section className="bg-black/40 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12">
            <div>
                <div className="aspect-video bg-gray-900 rounded-2xl border border-white/10 mb-8 overflow-hidden group cursor-pointer">
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <Play size={64} fill="white" className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Roundtable #42: The Future of Modular Liquidity</h2>
                <div className="flex gap-4 items-center">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded">Newest Release</span>
                    <span className="text-gray-500 font-bold text-xs">OCT 28, 2025 • 1HR 12MIN</span>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="font-bold text-lg uppercase tracking-widest text-gray-500">Recent Episodes</h4>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                        <div className="w-32 h-20 bg-gray-800 rounded shrink-0"></div>
                        <div>
                            <h5 className="font-bold text-sm leading-snug group-hover:text-blue-500 transition-colors text-white">Building the Consumer Layer on TON</h5>
                            <p className="text-[10px] text-gray-500 mt-1 uppercase">LIVESTREAM • 4 DAYS AGO</p>
                        </div>
                    </div>
                ))}
                <button className="mt-4 px-6 py-3 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 transition-all font-bold uppercase tracking-wider text-sm">
                    VIEW ALL EPISODES
                </button>
            </div>
        </div>
    </section>
);
