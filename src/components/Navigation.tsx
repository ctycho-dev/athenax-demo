import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

interface NavigationProps {
    activePage: string;
    setPage: (page: string) => void;
}

export const Navigation = ({ activePage, setPage }: NavigationProps) => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, []);

    const handleNavigation = (page: string) => {
        if (page === 'home') {
            navigate('/v3');
        } else if (page === 'projects') {
            navigate('/v3/projects');
        } else if (page === 'ecosystems') {
            navigate('/v3/ecosystem');
        } else if (page === 'about') {
            navigate('/v3/about');
        } else if (page === 'blog') {
            navigate('/v3/blog');
        } else {
            setPage(page);
        }
        window.scrollTo(0, 0);
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'For Projects' },
        { id: 'ecosystems', label: 'For Ecosystems' },
        { id: 'about', label: 'About' },
        { id: 'blog', label: 'Blog' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-gray-200' : 'bg-transparent py-6 border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => handleNavigation('home')}>
                        ATHENA<span className="text-[#4a6fa5]">X</span>
                    </div>
                    <div className="hidden md:flex gap-8">
                        {navLinks.map(l => (
                            <button
                                key={l.id}
                                onClick={() => handleNavigation(l.id)}
                                className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${activePage.includes(l.id) ? 'opacity-100' : 'opacity-40'}`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="hidden md:block">
                    <button
                        onClick={() => handleNavigation('projects')}
                        className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-[#0a0a14] pb-1 hover:text-[#4a6fa5] hover:border-[#4a6fa5] transition-all"
                    >
                        Apply for Incubation
                    </button>
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-8 gap-6 md:hidden">
                    {navLinks.map(l => (
                        <button key={l.id} onClick={() => { handleNavigation(l.id); setMenuOpen(false); }} className="text-left text-lg font-medium uppercase tracking-widest">{l.label}</button>
                    ))}
                </div>
            )}
        </nav>
    );
};
