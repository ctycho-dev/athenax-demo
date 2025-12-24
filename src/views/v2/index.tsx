import { useState, useEffect } from 'react';
import {
    ChevronDown,
    Play,
    ArrowRight,
    Search,
    Twitter,
    Disc as Discord,
    Send,
    Mail,
    Menu,
    X as CloseIcon,
    CheckCircle2,
    Zap,
    Users,
    Globe,
    Radio,
    ExternalLink,
    ChevronUp,
    Share2,
} from 'lucide-react';

// --- STYLING CONSTANTS ---
const COLORS = {
    BaseBackground: '#F5F5F7',
    CardBackground: '#FFFFFF',
    Border: '#E1E3EA',
    TextPrimary: '#111827',
    TextSecondary: '#4B5563',
    PrimaryBlue: '#2F80FF',
    PrimaryBlueAlt: '#2563EB',
    DeepNavy: '#020617',
};

// --- SHARED COMPONENTS ---

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'blue';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({ variant = 'primary', children, className = '', onClick }: ButtonProps) => {
    const base = "px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-[#020617] text-white hover:bg-[#111827]",
        secondary: "bg-transparent border-2 border-[#020617] text-[#020617] hover:bg-[#020617] hover:text-white",
        blue: "bg-[#2F80FF] text-white hover:bg-[#2563EB]",
    };

    return (
        <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
}

const Badge = ({ children, color = COLORS.PrimaryBlue }: BadgeProps) => (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
        <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }}></span>
        <span style={{ color: COLORS.TextSecondary }}>{children}</span>
    </div>
);

interface NavbarProps {
    activePage: string;
    setPage: (page: string) => void;
}

const Navbar = ({ activePage, setPage }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTvDropdownOpen, setIsTvDropdownOpen] = useState(false);

    const links = [
        { id: 'HOME', label: 'HOME' },
        { id: 'FOR_PROJECTS', label: 'FOR PROJECTS' },
        { id: 'FOR_ECOSYSTEMS', label: 'FOR ECOSYSTEMS' },
        { id: 'ATHENA_TV', label: 'ATHENA.TV', hasDropdown: true },
        { id: 'ABOUT', label: 'ABOUT' },
        { id: 'BLOG', label: 'BLOG' },
        { id: 'ECOSYSTEM', label: 'DIRECTORY' },
    ];

    const tvOptions = [
        { id: 'ATHENA_TV_LIVESTREAM', label: 'Livestream' },
        { id: 'ATHENA_TV_ROUNDTABLE', label: 'Roundtable' },
        { id: 'ATHENA_TV_WHITEPAPER', label: 'Whitepaper Reading' },
    ];

    return (
        <nav className="sticky top-0 w-full bg-white border-b z-50 h-[72px] px-6 flex items-center justify-between">
            <div
                className="flex items-center cursor-pointer text-2xl font-bold tracking-tighter"
                onClick={() => setPage('HOME')}
            >
                Athena<span style={{ color: COLORS.PrimaryBlue }}>X</span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                {links.map((link) => (
                    <div key={link.id} className="relative group">
                        <button
                            onClick={() => !link.hasDropdown && setPage(link.id)}
                            onMouseEnter={() => link.hasDropdown && setIsTvDropdownOpen(true)}
                            className={`text-sm font-semibold tracking-wide hover:text-blue-500 transition-colors pb-1 border-b-2 ${activePage.includes(link.id) ? 'border-black' : 'border-transparent'
                                }`}

                        >
                            {link.label}
                            {link.hasDropdown && <ChevronDown className="inline w-4 h-4 ml-1" />}
                        </button>

                        {link.hasDropdown && isTvDropdownOpen && (
                            <div
                                className="absolute top-full left-0 bg-white border shadow-xl w-64 py-2 flex flex-col mt-2 rounded-sm"
                                onMouseLeave={() => setIsTvDropdownOpen(false)}
                            >
                                {tvOptions.map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => { setPage(opt.id); setIsTvDropdownOpen(false); }}
                                        className="px-6 py-3 text-left text-sm hover:bg-gray-50 hover:text-blue-500 font-medium border-b last:border-0"
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <Button onClick={() => setPage('FOR_PROJECTS')} className="hidden md:flex">APPLY NOW</Button>
                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon /> : <Menu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-[72px] left-0 w-full bg-white border-b shadow-lg lg:hidden flex flex-col p-6 gap-6">
                    {links.map(link => (
                        <button
                            key={link.id}
                            className="text-left text-lg font-bold"
                            onClick={() => { setPage(link.id); setIsMenuOpen(false); }}
                        >
                            {link.label}
                        </button>
                    ))}
                    <Button onClick={() => { setPage('FOR_PROJECTS'); setIsMenuOpen(false); }}>APPLY NOW</Button>
                </div>
            )}
        </nav>
    );
};

interface FooterProps {
    setPage: (page: string) => void;
}

const Footer = ({ setPage }: FooterProps) => (
    <footer className="bg-[#020617] text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Product</h4>
                <ul className="space-y-4">
                    <li><button onClick={() => setPage('ATHENA_TV_LIVESTREAM')} className="hover:text-blue-400 transition-colors">Livestream</button></li>
                    <li><button onClick={() => setPage('ATHENA_TV_ROUNDTABLE')} className="hover:text-blue-400 transition-colors">Roundtable</button></li>
                    <li><button onClick={() => setPage('ATHENA_TV_WHITEPAPER')} className="hover:text-blue-400 transition-colors">Whitepaper Reading</button></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Resources</h4>
                <ul className="space-y-4">
                    <li><button onClick={() => setPage('BLOG')} className="hover:text-blue-400 transition-colors">Articles</button></li>
                    <li><button className="hover:text-blue-400 transition-colors">Guests</button></li>
                    <li><button className="hover:text-blue-400 transition-colors">Brand Assets</button></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Company</h4>
                <ul className="space-y-4">
                    <li><button onClick={() => setPage('ABOUT')} className="hover:text-blue-400 transition-colors">About Us</button></li>
                    <li><button onClick={() => setPage('ECOSYSTEM')} className="hover:text-blue-400 transition-colors">Ecosystem</button></li>
                    <li><button onClick={() => setPage('FOR_PROJECTS')} className="hover:text-blue-400 transition-colors">Apply</button></li>
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

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b last:border-0 border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-2 text-left hover:text-blue-600 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {isOpen && (
                <div className="py-4 text-gray-600 leading-relaxed text-base">
                    {answer}
                </div>
            )}
        </div>
    );
};

// --- PAGE VIEWS ---

interface PageProps {
    setPage: (page: string) => void;
}

const HomePage = ({ setPage }: PageProps) => (
    <main>
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-24 bg-[#F5F5F7] overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center opacity-[0.05] select-none pointer-events-none">
                <span className="text-[600px] font-bold">X</span>
            </div>

            <div className="relative z-10 max-w-4xl">
                <Badge color={COLORS.PrimaryBlue}>● POWERED BY NOUNSDAO</Badge>
                <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold leading-[0.95] tracking-tighter text-gray-900 mb-12">
                    Incubating <br />
                    <span className="italic" style={{ color: COLORS.PrimaryBlue }}>Ecosystems.</span> <br />
                    Onboarding <br />
                    Builders.
                </h1>

                <div className="flex flex-col sm:flex-row gap-6">
                    <Button onClick={() => setPage('FOR_PROJECTS')} className="text-lg px-10 py-5">
                        Apply for Incubation <ArrowRight size={20} />
                    </Button>
                    <button
                        onClick={() => setPage('ATHENA_TV')}
                        className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-all"
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                            <Play size={16} fill="black" />
                        </div>
                        WATCH ATHENA.TV
                    </button>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-5xl mx-auto bg-white p-12 lg:p-20 border border-gray-200 rounded-2xl shadow-sm text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
                    "We grow ecosystems and incubate the projects building on top of them. AthenaX partners with L1s, L2s, and protocols to deliver builder onboarding, cross-chain growth, and narrative infrastructure."
                </p>
            </div>
        </section>

        <section className="py-12 border-y bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Ecosystems & networks we touch</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">
                    {['Mantle', 'Polkadot', 'Octant', 'TON', 'Polygon', 'Liquity', 'Curve', 'Hedera', 'Nouns'].map(name => (
                        <span key={name} className="text-xl font-bold tracking-tighter">{name}</span>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">Four-layer AthenaX Model</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: 'Community Layer', icon: <Users size={32} />, desc: 'NounsDAO, Farcaster, subcommunities, IRL activation' },
                        { title: 'Narrative Layer', icon: <Radio size={32} />, desc: 'Athena Live, Roundtable, Whitepaper Reading, Clips' },
                        { title: 'Builder Layer', icon: <Zap size={32} />, desc: 'GTM, BD, token design, launch support, coaching' },
                        { title: 'BD Layer', icon: <Globe size={32} />, desc: 'Multi-ecosystem BD, partnerships, builder migration' }
                    ].map((item, i) => (
                        <div key={i} className="p-10 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
                            <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className={`py-24 px-6 bg-[#020617] text-white`}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_350px] gap-12">
                <div>
                    <Badge color={COLORS.PrimaryBlue}>ATHENA.TV</Badge>
                    <div className="aspect-video bg-gray-800 rounded-xl mb-6 relative overflow-hidden group cursor-pointer border border-gray-700">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={32} fill="white" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-2xl font-bold">Incubating the Next Wave of Farcaster Builders</h4>
                        </div>
                    </div>
                    <button className="text-blue-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors">
                        WATCH ON YOUTUBE <ExternalLink size={14} />
                    </button>
                </div>

                <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-8">Past Episodes</h3>
                    <div className="space-y-6 flex-grow">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-4 group cursor-pointer">
                                <div className="w-24 h-16 bg-gray-800 rounded shrink-0 overflow-hidden"></div>
                                <div>
                                    <h4 className="font-bold text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">Why Ecosystems Fail: A Deep Dive into L2 GTM</h4>
                                    <p className="text-xs text-gray-500 mt-1">OCT 14, 2025</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 text-blue-400 font-bold text-sm hover:underline" onClick={() => setPage('ATHENA_TV')}>
                        See all episodes →
                    </button>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-bold">Recent Videos</h2>
                    <button className="text-blue-600 font-bold" onClick={() => setPage('ATHENA_TV')}>See all →</button>
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
    </main>
);

const ForProjectsPage = () => (
    <main>
        <section className="py-24 px-6 bg-[#F5F5F7] min-h-[70vh] flex items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none select-none text-[600px] font-bold">X</div>
            <div className="max-w-4xl relative z-10 mx-auto text-center">
                <Badge color={COLORS.PrimaryBlue}>● FOR PROJECTS</Badge>
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8">
                    Grants. <br />
                    <span className="italic text-blue-600">Vaults.</span> <br />
                    Media. <br />
                    Growth.
                </h1>
                <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    We help you secure grants, match your capital, and fund your growth through our unique incubation infrastructure.
                </p>
                <Button className="mx-auto px-12 py-5 text-lg">Apply for Incubation →</Button>
            </div>
        </section>

        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">What You Get</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Grant Support', icon: <CheckCircle2 />, desc: 'NounsDAO + Octant funding access' },
                        { title: 'Vault Matching', icon: <CheckCircle2 />, desc: '1:1 capital match on deposits' },
                        { title: 'Sprint Campaigns', icon: <CheckCircle2 />, desc: '7–30 day growth modules' },
                        { title: 'GTM Strategy', icon: <CheckCircle2 />, desc: 'Launch playbooks and coaching' },
                        { title: 'Tokenomics', icon: <CheckCircle2 />, desc: 'Expert design guidance' },
                        { title: 'Narrative Design', icon: <CheckCircle2 />, desc: 'Positioning and storytelling' },
                        { title: 'Media Amplification', icon: <CheckCircle2 />, desc: '6M+ cross-chain monthly reach' },
                        { title: 'BD & Partnerships', icon: <CheckCircle2 />, desc: 'Multi-ecosystem introductions' }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border rounded-xl hover:border-blue-400 transition-all shadow-sm">
                            <div className="text-blue-600 mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">We Work With All Builders</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {['AI', 'DeSci', 'DeFi', 'Infrastructure', 'Consumer', 'RWA', 'DePIN'].map(cat => (
                        <span key={cat} className="px-8 py-4 bg-white border rounded-full text-lg font-bold shadow-sm">{cat}</span>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 hidden md:block"></div>
                    {[
                        { step: 1, label: 'Apply' },
                        { step: 2, label: 'Secure Grant' },
                        { step: 3, label: 'Deposit Vault' },
                        { step: 4, label: 'Match Capital' },
                        { step: 5, label: 'Yield Funds Growth' }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 bg-white p-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{item.step}</div>
                            <p className="font-bold text-center text-sm uppercase tracking-wider">{item.label}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-16 text-center text-gray-500 italic">"AthenaX never touches principal. Only yield is used to fund your growth."</p>
            </div>
        </section>

        <section className="py-24 px-6 bg-white border-t">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Apply for Incubation</h2>
                <div className="bg-[#F5F5F7] p-10 rounded-2xl border">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Project Name</label>
                            <input className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Athena Protocol" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Website</label>
                            <input className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Category</label>
                            <select className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>DeFi</option>
                                <option>AI</option>
                                <option>Consumer</option>
                                <option>Infra</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Stage</label>
                            <div className="flex gap-6 pt-2">
                                <label className="flex items-center gap-2 font-bold"><input type="radio" name="stage" /> Pre-launch</label>
                                <label className="flex items-center gap-2 font-bold"><input type="radio" name="stage" /> Launched</label>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 mb-8">
                        <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Description</label>
                        <textarea className="w-full p-4 border rounded-lg h-32 outline-none" placeholder="Tell us about what you are building..."></textarea>
                    </div>
                    <Button className="w-full py-5 text-lg">Submit Application</Button>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
                <div className="bg-white p-8 rounded-2xl border shadow-sm">
                    <AccordionItem question="What does incubation include?" answer="GTM, narrative design, sprint campaigns, tokenomics guidance, vault setup, grant navigation, BD, and media amplification." />
                    <AccordionItem question="Do we need funding before applying?" answer="No. We help you secure grants from NounsDAO and Octant to kickstart your project." />
                    <AccordionItem question="Do we need to deploy capital?" answer="Yes. All projects deposit into an Octant vault. AthenaX matches this deposit 1:1." />
                    <AccordionItem question="Can vault yield fund sprints?" answer="Yes. The yield generated by the matched vault can be used to fund high-impact sprint campaigns." />
                </div>
            </div>
        </section>
    </main>
);

const ForEcosystemsPage = () => (
    <main>
        <section className={`py-24 px-6 bg-[#020617] text-white min-h-[60vh] flex items-center`}>
            <div className="max-w-7xl mx-auto w-full">
                <Badge color={COLORS.PrimaryBlue}>● FOR ECOSYSTEMS</Badge>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                    Partner With <br />
                    <span className="italic text-blue-500">AthenaX.</span>
                </h1>
                <p className="text-2xl text-gray-400 mb-10 max-w-2xl">
                    Official ecosystem incubator — at zero cost to the treasury. Full-stack growth infrastructure for L1s, L2s, and protocols.
                </p>
                <Button variant="blue" className="px-12 py-5 text-lg">Let's Talk →</Button>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl font-bold mb-10">The Challenge</h2>
                    <ul className="space-y-6">
                        {['Inconsistent builder onboarding', 'Fragmented growth efforts', 'Weak feedback loops between grants and traction', 'No shared narrative layer', 'Low developer stickiness'].map((item, i) => (
                            <li key={i} className="flex gap-4 text-xl font-medium text-gray-700">
                                <CloseIcon className="text-red-500 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-10">The AthenaX Solution</h2>
                    <p className="text-2xl leading-relaxed text-gray-600 mb-8">
                        "AthenaX operates as your embedded ecosystem incubation partner. Not an agency. Full-stack growth infrastructure that aligns capital, narrative, and distribution into a single loop."
                    </p>
                    <div className="p-8 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-blue-600">The Outcome</h4>
                        <p className="text-lg font-bold">Sustainable, yield-funded growth that keeps principal treasury assets untouched while compounding builder activity.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">What Your Ecosystem Gets</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        'Official incubator at zero cost',
                        'Incubation for all qualified builders',
                        'Yield-funded growth (non-dilutive)',
                        'Cross-chain visibility by default',
                        'Builder onboarding and progression',
                        'Access to NounsDAO + Golem networks'
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-400 transition-all group">
                            <CheckCircle2 className="text-blue-600 mb-6" size={32} />
                            <p className="text-xl font-bold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7] border-y">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Phase 1 Ecosystems</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {['Octant', 'Polkadot', 'Magic Eden', 'Neura Protocol', 'Mantle'].map((name, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border flex flex-col items-center justify-center gap-4">
                            <span className="text-xl font-bold">{name}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-green-50 text-green-600 rounded-full">
                                {i === 0 ? '✅ Live' : '🎯 Target'}
                            </span>
                        </div>
                    ))

                    }
                </div>
            </div>
        </section>
    </main>
);

const BlogPage = ({ setPage }: PageProps) => (
    <main className="bg-white">
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

            <div className="grid md:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="group cursor-pointer" onClick={() => setPage('BLOG_ARTICLE')}>
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
                <Button variant="secondary" className="rounded-full px-12">Load More</Button>
            </div>
        </section>
    </main>
);

interface AthenaTVPageProps extends PageProps {
    type?: string;
}

const AthenaTVPage = ({ type = 'HUB', setPage }: AthenaTVPageProps) => {
    const shows = [
        { id: 'ATHENA_TV_LIVESTREAM', title: 'Livestream', freq: '5×/week', desc: 'Daily founder conversations' },
        { id: 'ATHENA_TV_ROUNDTABLE', title: 'Roundtable', freq: '2×/month', desc: 'Deep-dive episodes' },
        { id: 'ATHENA_TV_WHITEPAPER', title: 'Whitepaper Reading', freq: '20×/month', desc: 'Technical explainers' }
    ];

    return (
        <main className="bg-[#020617] text-white min-h-screen">
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">Athena.<span className="italic text-blue-500">TV</span></h1>
                <p className="text-2xl text-gray-400">Founder-focused programming across chains.</p>
            </section>

            {type === 'HUB' && (
                <section className="px-6 pb-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {shows.map(show => (
                        <div
                            key={show.id}
                            onClick={() => setPage(show.id)}
                            className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500 transition-all cursor-pointer group"
                        >
                            <Badge color={COLORS.PrimaryBlue}>{show.freq}</Badge>
                            <h3 className="text-3xl font-bold mb-4">{show.title}</h3>
                            <p className="text-gray-400 mb-8">{show.desc}</p>
                            <div className="text-blue-500 flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform">
                                EXPLORE <ArrowRight size={16} />
                            </div>
                        </div>
                    ))}
                </section>
            )}

            <section className="bg-black/40 py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12">
                    <div>
                        <div className="aspect-video bg-gray-900 rounded-2xl border border-white/10 mb-8 overflow-hidden group cursor-pointer">
                            <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                <Play size={64} fill="white" className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Roundtable #42: The Future of Modular Liquidity</h2>
                        <div className="flex gap-4 items-center">
                            <span className="px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded">Newest Release</span>
                            <span className="text-gray-500 font-bold text-xs">OCT 28, 2025 • 1HR 12MIN</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg uppercase tracking-widest text-gray-500">Recent Episodes</h4>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-4 group cursor-pointer">
                                <div className="w-32 h-20 bg-gray-800 rounded shrink-0"></div>
                                <div>
                                    <h5 className="font-bold text-sm leading-snug group-hover:text-blue-500 transition-colors">Building the Consumer Layer on TON</h5>
                                    <p className="text-[10px] text-gray-500 mt-1 uppercase">LIVESTREAM • 4 DAYS AGO</p>
                                </div>
                            </div>
                        ))}
                        <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10 mt-4">VIEW ALL EPISODES</Button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-3xl font-bold">All Episodes</h3>
                    <div className="flex gap-2">
                        {['All', 'Livestream', 'Roundtable', 'Technical'].map(t => (
                            <button key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10">{t}</button>
                        ))}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-[10px] font-bold rounded">24:12</span>
                            </div>
                            <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">Whitepaper Reading: Monad's Parallel Execution Pipeline</h4>
                            <p className="text-sm text-gray-500 mt-2">TECHNICAL • OCT 12, 2025</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

const AboutPage = () => (
    <main className="bg-white">
        <section className="py-32 px-6 bg-[#F5F5F7] text-center border-b">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-7xl font-bold mb-12 tracking-tighter">About AthenaX</h1>
                <p className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    "Our mission is to build a regenerative digital economy that creates conditions of prosperity for all."
                </p>
            </div>
        </section>

        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8">WHO ARE WE</h2>
                    <h3 className="text-4xl font-bold mb-8">What is AthenaX?</h3>
                    <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                        <p>
                            AthenaX is a decentralized ecosystem incubator powered by NounsDAO. We work at the ecosystem layer — helping chains grow, founders succeed, and communities scale across the multi-chain landscape.
                        </p>
                        <p>
                            We operate inside NounsDAO, accessing 600+ subcommunities and 56,000+ ecosystem members. When you partner with AthenaX, you're plugging into one of the largest grassroots networks in Ethereum.
                        </p>
                    </div>
                </div>
                <div className="space-y-8">
                    {[
                        { title: 'NounsDAO', desc: 'Cultural gravity, CC0 ethos, 56,000+ members. 33rd largest ETH holder.' },
                        { title: 'Octant / Golem', desc: '$2M+ distributed. 100,000+ ETH staked. 8th largest ETH holder.' },
                        { title: 'AthenaX Media', desc: '6M+ monthly reach. Multi-chain distribution through founder-focused media.' }
                    ].map((card, i) => (
                        <div key={i} className="p-8 border rounded-2xl hover:shadow-lg transition-all border-gray-100">
                            <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
                            <p className="text-gray-500">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16">Connect With Us</h2>
                <div className="flex justify-center gap-10">
                    <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                            <Twitter />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">X (Twitter)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                            <Discord />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">Discord</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                            <Send />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">Telegram</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

const EcosystemDirectoryPage = () => (
    <main className="bg-white">
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-6xl font-bold mb-6">AthenaX Ecosystem</h1>
            <p className="text-2xl text-gray-500 mb-12">Chains, DAOs, and projects connected through AthenaX</p>

            <div className="flex items-center gap-6 mb-20 grayscale opacity-50">
                <span className="font-bold text-xs uppercase tracking-widest text-gray-400">BACKED BY</span>
                <span className="text-xl font-bold">OCTANT</span>
                <span className="text-xl font-bold">POLKADOT</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="w-full lg:w-64 space-y-8 shrink-0">
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'AI', 'DeFi', 'Infra', 'L1', 'L2', 'Gaming'].map(cat => (
                                <button key={cat} className="px-4 py-2 border rounded-full text-xs font-bold hover:bg-gray-50">{cat}</button>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-sm" placeholder="Search Project..." />
                    </div>
                </div>

                <div className="flex-grow grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
        </section>

        <section className="py-24 px-6 bg-[#F5F5F7] border-y">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Case Studies</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: 'HackX', desc: 'Builder-focused hackathon infrastructure sourcing projects into incubation pipeline.' },
                        { title: 'Nouns × Mantle', desc: 'L2 builder onboarding through NounsDAO cultural reach.' },
                        { title: 'Polkadot DV', desc: 'Decentralized Voice governance participation and technical voting architecture.' },
                        { title: 'Nouns × Magic Eden', desc: 'Creator and IP activation partnership leveraging NFT distribution.' }
                    ].map((cs, i) => (
                        <div key={i} className="p-10 bg-white rounded-2xl border hover:shadow-md transition-all">
                            <h4 className="text-2xl font-bold mb-4">{cs.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">{cs.desc}</p>
                            <button className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                                READ CASE STUDY <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </main>
);

const BlogArticlePage = ({ setPage }: PageProps) => (
    <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
            <button onClick={() => setPage('BLOG')} className="flex items-center gap-2 font-bold text-gray-400 hover:text-black mb-12 uppercase tracking-widest text-xs">
                <ArrowRight className="rotate-180" size={14} /> Back to Articles
            </button>

            <div className="aspect-[21/9] bg-gray-100 rounded-2xl mb-12 overflow-hidden"></div>

            <Badge color={COLORS.PrimaryBlue}>ANNOUNCEMENTS</Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">The AthenaX Thesis: Why Incubation is the Next Stage of DAO Evolution</h1>
            <div className="flex gap-6 items-center text-gray-500 font-medium mb-12 border-b pb-12">
                <span>OCT 24, 2025</span>
                <span>•</span>
                <span>12 MIN READ</span>
            </div>

            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                <p className="text-2xl font-semibold text-gray-900">AthenaX is more than a fund. It is an infrastructure layer for growth. In this article, we break down our vision for the multi-chain future.</p>
                <h2 className="text-3xl font-bold text-gray-900 pt-8">The Problem with Traditional Grants</h2>
                <p>Most grants programs suffer from a "spray and pray" mentality. Capital is distributed, but support is minimal. There are no feedback loops between initial funding and market traction. This leads to high churn and wasted resources for the ecosystem treasury.</p>
                <blockquote className="border-l-4 border-blue-600 pl-8 py-4 bg-blue-50/30 text-2xl italic font-medium">
                    "The next billion users won't just need a wallet; they'll need ecosystems that offer complete infrastructure, narrative, and community alignment from day one."
                </blockquote>
                <h3 className="text-2xl font-bold text-gray-900">A New Model: Yield-Funded Growth</h3>
                <p>By leveraging the Octant vault model, we ensure that principal capital remains protected. We use yield to fund high-impact growth modules—what we call "Sprint Campaigns"—that target specific KPIs like user acquisition, protocol launch, or technical stability.</p>
            </article>

            <div className="mt-20 pt-12 border-t flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div>
                        <h4 className="font-bold">Author Name</h4>
                        <p className="text-sm text-gray-500">Head of Ecosystem, AthenaX</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="p-3 border rounded-full hover:bg-gray-50"><Twitter size={18} /></button>
                    <button className="p-3 border rounded-full hover:bg-gray-50"><Share2 size={18} /></button>
                </div>
            </div>
        </div>
    </main>
);

// --- MAIN APP COMPONENT ---

export default function V2() {
    const [currentPage, setCurrentPage] = useState('HOME');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'HOME': return <HomePage setPage={setCurrentPage} />;
            case 'FOR_PROJECTS': return <ForProjectsPage />;
            case 'FOR_ECOSYSTEMS': return <ForEcosystemsPage />;
            case 'ATHENA_TV': return <AthenaTVPage setPage={setCurrentPage} />;
            case 'ATHENA_TV_LIVESTREAM': return <AthenaTVPage type="LIVESTREAM" setPage={setCurrentPage} />;
            case 'ATHENA_TV_ROUNDTABLE': return <AthenaTVPage type="ROUNDTABLE" setPage={setCurrentPage} />;
            case 'ATHENA_TV_WHITEPAPER': return <AthenaTVPage type="WHITEPAPER" setPage={setCurrentPage} />;
            case 'ABOUT': return <AboutPage />;
            case 'BLOG': return <BlogPage setPage={setCurrentPage} />;
            case 'BLOG_ARTICLE': return <BlogArticlePage setPage={setCurrentPage} />;
            case 'ECOSYSTEM': return <EcosystemDirectoryPage />;
            default: return <HomePage setPage={setCurrentPage} />;
        }
    };

    return (
        <div className={`min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900`} style={{ backgroundColor: COLORS.BaseBackground }}>
            <Navbar activePage={currentPage} setPage={setCurrentPage} />

            {renderPage()}

            <Footer setPage={setCurrentPage} />

            <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      body {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      h1, h2, h3, h4 {
        letter-spacing: -0.025em;
      }
      .italic {
        font-style: italic;
      }
    `}</style>
        </div>
    );
}
