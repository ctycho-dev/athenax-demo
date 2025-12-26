import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ArticleHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="mb-12">
            <button
                onClick={() => navigate('/v3/blog')}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8a8a93] mb-12 hover:text-[#0a0a14] transition-colors group"
            >
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
            </button>

            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5] mb-6">
                <span>Research</span>
                <span className="text-[#8a8a93]">Oct 24, 2025</span>
                <span className="text-[#8a8a93]">8 min read</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] text-[#0a0a14] mb-12">
                The Shift: From VC Burn to Yield Funding
            </h1>
        </div>
    );
};
