import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

export const Navigation = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home', path: '/v3' },
        { id: 'projects', label: 'For Projects', path: '/v3/projects' },
        { id: 'ecosystems', label: 'For Ecosystems', path: '/v3/ecosystem' },
        { id: 'discover', label: 'Discover', path: '/v3/discover' },
        { id: 'tv', label: 'TV', path: '/v3/tv' },
        { id: 'about', label: 'About', path: '/v3/about' },
        { id: 'blog', label: 'Blog', path: '/v3/blog' }
    ];

    const isActive = (path: string) => {
        if (path === '/v3') {
            return location.pathname === '/v3';
        }
        return location.pathname.includes(path);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-gray-200' : 'bg-transparent py-6 border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <Link to="/v3" className="text-xl font-bold tracking-tighter">
                        ATHENA<span className="text-[#4a6fa5]">X</span>
                    </Link>
                    <div className="hidden md:flex gap-8">
                        {navLinks.map(l => (
                            <Link
                                key={l.id}
                                to={l.path}
                                className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${isActive(l.path) ? 'opacity-100' : 'opacity-40'}`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="hidden md:block">
                    <Link
                        to="/v3/projects"
                        className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-[#0a0a14] pb-1 hover:text-[#4a6fa5] hover:border-[#4a6fa5] transition-all"
                    >
                        Apply for Incubation
                    </Link>
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-8 gap-6 md:hidden">
                    {navLinks.map(l => (
                        <Link
                            key={l.id}
                            to={l.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-left text-lg font-medium uppercase tracking-widest hover:text-[#4a6fa5] transition-colors"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
