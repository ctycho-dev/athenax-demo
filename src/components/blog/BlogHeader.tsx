import { Search } from 'lucide-react';

export const BlogHeader = () => (
    <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-500 mb-12">Latest Posts, News, and Community Announcements</p>

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            <div className="flex flex-wrap gap-2">
                {['All', 'Announcements', 'General', 'News', 'Partnerships', 'Recap'].map(filter => (
                    <button key={filter} className={`px-4 py-2 rounded-full text-sm font-bold ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        {filter}
                    </button>
                ))}
            </div>
            <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input className="w-full pl-12 pr-4 py-3 border rounded-full bg-gray-50" placeholder="Search Blog..." />
            </div>
        </div>
    </section>
);
