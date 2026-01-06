export const ProjectGrid = () => (
    <div className="flex-grow relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 blur-sm">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                <div key={i} className="p-8 border rounded-2xl hover:border-blue-500 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl mb-6"></div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Project Name Alpha</h4>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Building high-performance liquidity layers for the next wave of cross-chain DeFi.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[9px] font-bold px-2 py-1 bg-gray-100 rounded uppercase">DeFi</span>
                        <span className="text-[9px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded uppercase">INCUBATED</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
        </div>
    </div>
);
