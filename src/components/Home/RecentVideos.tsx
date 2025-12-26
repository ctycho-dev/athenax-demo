import { Link } from 'react-router-dom';

export const RecentVideos = () => {
    return (
        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-bold">Recent Videos</h2>
                    <Link to="/v3/tv" className="text-blue-600 font-bold hover:underline">See all →</Link>
                </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="aspect-video bg-gray-100 relative">
                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase rounded">LIVESTREAM</div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">Technical Breakdown: ERC-7683 and Intent-Centric Design</h4>
                            <p className="text-xs text-gray-400 uppercase font-medium">Nov 2, 2025 • 42 mins</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};
