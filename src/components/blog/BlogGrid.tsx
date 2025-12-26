interface BlogGridProps {
    setPage?: (page: string) => void;
}

export const BlogGrid = ({ setPage }: BlogGridProps) => (
    <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="group cursor-pointer" onClick={() => setPage && setPage('BLOG_ARTICLE')}>
                    <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase rounded-full">Announcements</span>
                        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500"></div>
                    </div>
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">How AthenaX is Revolutionizing Ecosystem Growth with NounsDAO</h4>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">October 24, 2025 • 8 MIN READ</p>
                </div>
            ))}
        </div>

        <div className="mt-20 flex justify-center">
            <button className="px-12 py-3 border-2 border-black rounded-full font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-all">
                Load More
            </button>
        </div>
    </section>
);
