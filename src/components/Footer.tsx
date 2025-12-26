import { useNavigate } from 'react-router-dom';
import { Twitter, Disc as Discord, Send, Mail } from 'lucide-react';

const COLORS = {
    PrimaryBlue: '#2F80FF',
};

interface FooterProps {
    setPage: (page: string) => void;
}

export const Footer = ({ setPage }: FooterProps) => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#020617] text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Product</h4>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/v3/tv')} className="hover:text-blue-400 transition-colors">Livestream</button></li>
                        <li><button onClick={() => navigate('/v3/tv')} className="hover:text-blue-400 transition-colors">Roundtable</button></li>
                        <li><button onClick={() => navigate('/v3/tv')} className="hover:text-blue-400 transition-colors">Whitepaper Reading</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Resources</h4>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/v3/blog')} className="hover:text-blue-400 transition-colors">Articles</button></li>
                        <li><button className="hover:text-blue-400 transition-colors">Guests</button></li>
                        <li><button className="hover:text-blue-400 transition-colors">Brand Assets</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Company</h4>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/v3/about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
                        <li><button onClick={() => navigate('/v3/discover')} className="hover:text-blue-400 transition-colors">Ecosystem</button></li>
                        <li><button onClick={() => navigate('/v3/projects')} className="hover:text-blue-400 transition-colors">Apply</button></li>
                    </ul>
                </div>
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Social</h4>
                <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter size={18} /></button>
                    <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Discord size={18} /></button>
                    <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Send size={18} /></button>
                    <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Mail size={18} /></button>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-5xl font-bold tracking-tighter">
                Athena<span style={{ color: COLORS.PrimaryBlue }}>X</span>
            </div>
            <div className="text-gray-500 text-sm">
                © 2025 AthenaX. All rights reserved. Built for NounsDAO.
            </div>
        </div>
    </footer>
);
