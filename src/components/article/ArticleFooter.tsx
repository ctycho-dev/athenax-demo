import { Share2, Bookmark } from 'lucide-react';

export const ArticleFooter = () => (
    <div className="mt-20 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-2 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#0a0a14] hover:text-white transition-all">
                <Share2 className="w-3 h-3" /> Share
            </button>
            <button className="flex items-center gap-2 px-6 py-2 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#0a0a14] hover:text-white transition-all">
                <Bookmark className="w-3 h-3" /> Save
            </button>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93]">
            Author: AthenaX Research Lab
        </div>
    </div>
);
