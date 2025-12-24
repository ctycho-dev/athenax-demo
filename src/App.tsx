import { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Activity, 
  Plus,
  Globe,
  Menu,
  X,
  Clock,
  Mail,
  ArrowLeft,
  Share2,
  Bookmark
} from 'lucide-react';

// --- Theme Constants ---
const THEME = {
  bg: '#fbfaf8',
  navy: '#0a0a14',
  accent: '#4a6fa5',
  muted: '#8a8a93',
  border: '#e5e5e7'
};

// --- Shared Design Components ---

const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
    style={{ backgroundImage: `linear-gradient(${THEME.navy} 1px, transparent 1px), linear-gradient(90deg, ${THEME.navy} 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
  </div>
);


interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
}

// const PremiumButton = ({ children, variant = 'primary', onClick, className = "" }) => {
const PremiumButton = ({ children, variant = 'primary', onClick, className = "" }: ButtonProps) => {
  const variants = {
    primary: `bg-[#0a0a14] text-[#fbfaf8] hover:bg-[#4a6fa5]`,
    outline: `border border-[#0a0a14] text-[#0a0a14] hover:bg-[#0a0a14] hover:text-white`,
    ghost: `text-[#0a0a14] hover:opacity-60`
  };

  return (
    <button 
      onClick={onClick}
      className={`px-8 py-3 font-medium text-sm tracking-tight transition-all duration-300 flex items-center justify-center gap-2 group ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
};


interface SectionHeaderProps {
  label: string;
  title: string;
  light?: boolean;
}

const SectionHeader = ({ label, title, light = false }: SectionHeaderProps) => (
  <div className="mb-16">
    <span className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block ${light ? 'text-[#4a6fa5]' : 'text-[#4a6fa5]'}`}>{label}</span>
    <h2 className={`text-4xl md:text-5xl font-medium tracking-tighter leading-none ${light ? 'text-white' : 'text-[#0a0a14]'}`}>{title}</h2>
  </div>
);

// --- Layout: Navigation & Footer ---
interface NavigationProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navigation = ({ activePage, setPage }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

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
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => setPage('home')}>
            ATHENA<span className="text-[#4a6fa5]">X</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map(l => (
              <button 
                key={l.id} 
                onClick={() => { setPage(l.id); window.scrollTo(0,0); }}
                className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${activePage.includes(l.id) ? 'opacity-100' : 'opacity-40'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <button 
             onClick={() => { setPage('projects'); window.scrollTo(0,0); }}
             className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-[#0a0a14] pb-1 hover:text-[#4a6fa5] hover:border-[#4a6fa5] transition-all"
          >
            Apply for Incubation
          </button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-8 gap-6 md:hidden">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => { setPage(l.id); setMenuOpen(false); window.scrollTo(0,0); }} className="text-left text-lg font-medium uppercase tracking-widest">{l.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
};


interface FooterProps {
  setPage: (page: string) => void;
}

const Footer = ({ setPage }: FooterProps) => (
  <footer className="bg-[#0a0a14] text-white/40 py-24 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <div className="text-white text-xl font-bold tracking-tighter mb-4">ATHENA<span className="text-[#4a6fa5]">X</span></div>
        <p className="text-xs max-w-xs leading-relaxed uppercase tracking-widest font-medium">Incubating ecosystems. <br />Onboarding builders.</p>
      </div>
      <div className="space-y-4 text-xs font-bold uppercase tracking-widest">
        <div className="text-white/80">Navigation</div>
        {['Home', 'Projects', 'Ecosystems', 'About', 'Blog'].map(i => (
          <div key={i} className="hover:text-white cursor-pointer transition-colors" onClick={() => { setPage(i.toLowerCase().replace(' ', '')); window.scrollTo(0,0); }}>{i}</div>
        ))}
      </div>
      <div className="space-y-4 text-xs font-bold uppercase tracking-widest">
        <div className="text-white/80">Resources</div>
        <div>Apply</div>
        <div>Partner</div>
        <div>FAQs</div>
        <div>Brand Assets</div>
      </div>
      <div className="space-y-4 text-xs font-bold uppercase tracking-widest">
        <div className="text-white/80">Social</div>
        <div className="flex gap-4">
          {/* <Twitter className="w-4 h-4 hover:text-white cursor-pointer" /> */}
          <Mail className="w-4 h-4 hover:text-white cursor-pointer" />
          <Globe className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
        <div className="pt-4 text-[10px] text-white/20">© 2025 AthenaX Labs</div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---
interface HomePageProps {
  setPage: (page: string) => void;
}

const HomePage = ({ setPage }: HomePageProps) => (
  <main>
    {/* Hero Section */}
    <section className="relative min-h-screen flex flex-col justify-center px-8 bg-[#fbfaf8] pt-20 overflow-hidden">
      <GridPattern />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a6fa5] animate-pulse"></span>
            Powered by NounsDAO
          </div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-[#0a0a14] mb-12">
            Incubating <br />
            <span className="text-[#4a6fa5] italic font-serif">Ecosystems.</span> <br />
            Onboarding Builders.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <PremiumButton onClick={() => setPage('projects')}>Apply for Incubation</PremiumButton>
            <p className="max-w-xs text-sm text-[#8a8a93] leading-relaxed font-medium">
              A decentralized incubator securing grants and matching capital through sustainable vault yields.
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block pb-12">
          <div className="border-l border-black/10 pl-8 space-y-12">
            <div>
              <span className="block text-[10px] font-bold text-[#8a8a93] uppercase tracking-[0.2em] mb-4">Capital Matching</span>
              <span className="text-4xl font-light tracking-tighter">1:1 Ratio</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-[#8a8a93] uppercase tracking-[0.2em] mb-4">Global Reach</span>
              <span className="text-4xl font-light tracking-tighter">6.2M+ Reach</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-[#8a8a93] uppercase tracking-[0.2em] mb-4">Network Status</span>
              <span className="text-4xl font-light tracking-tighter italic">Active</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-8 right-8 flex justify-between items-end border-t border-black/5 pt-8 opacity-40">
        <div className="flex gap-12 items-center font-bold text-lg tracking-tighter">
          <span>NOUNS.DAO</span>
          <span>OCTANT</span>
          <span>GOLEM</span>
        </div>
        <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to Explore</div>
      </div>
    </section>

    {/* Value Grid Section */}
    <section className="py-32 bg-[#0a0a14] text-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            { label: "Vault Yield", val: "Perpetual Growth", desc: "Funding that never touches your principal." },
            { label: "Incubation", val: "Zero Cost", desc: "Partner foundations pay nothing for our services." },
            { label: "Reach", val: "Media Engine", desc: "6M+ cross-chain monthly impressions." },
            { label: "Grants", val: "Pipeline", desc: "Direct navigation for NounsDAO and Octant grants." }
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0a14] p-12 group hover:bg-white transition-all duration-500">
              <span className="block text-[10px] font-bold text-[#4a6fa5] uppercase tracking-widest mb-8">{item.label}</span>
              <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-black transition-colors">{item.val}</h3>
              <p className="text-sm text-white/40 leading-relaxed group-hover:text-black/60 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Feature Section */}
    <section className="py-32 px-8 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Capabilities" title="Structural Support for Builders" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Cpu />, title: "Technical GTM", tags: ["Infra", "DePin"], desc: "Full-stack launch playbooks tailored for technical protocol releases." },
            { icon: <Layers />, title: "Narrative Design", tags: ["Branding", "Story"], desc: "Crafting durable positions within the decentralized zeitgeist." },
            { icon: <Activity />, title: "Sprint Modules", tags: ["Growth", "DAO"], desc: "High-intensity 14-day growth sprints funded by vault yields." }
          ].map((f, i) => (
            <div key={i} className="border-t border-black/10 pt-12 hover:border-[#4a6fa5] transition-colors group">
              <div className="p-4 bg-[#0a0a14] text-white w-fit mb-12 group-hover:bg-[#4a6fa5] transition-colors">{f.icon}</div>
              <h4 className="text-2xl font-medium mb-4">{f.title}</h4>
              <p className="text-[#8a8a93] leading-relaxed mb-8 text-sm">{f.desc}</p>
              <div className="flex gap-2">
                {f.tags.map(t => <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-[#8a8a93] border border-black/10 px-2 py-0.5 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const ProjectsPage = () => (
  <main className="pt-20 bg-[#fbfaf8]">
    <section className="py-32 px-8 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="For Builders" title="Get Incubated" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h3 className="text-3xl font-light leading-snug">We help you secure grants, match your capital, and fund your growth.</h3>
            <div className="space-y-6">
              {[
                { t: "Step 01: Application", d: "Submit your project for technical and narrative review." },
                { t: "Step 02: Grant Support", d: "We assist in securing funding from NounsDAO or Octant." },
                { t: "Step 03: Vault Setup", d: "Deploy into an Octant vault. We match your deposit 1:1." },
                { t: "Step 04: Sprint Cycle", d: "Yields activate high-intensity growth and media modules." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 p-6 bg-white border border-black/5 rounded-sm">
                  <span className="text-xl font-serif italic text-[#4a6fa5]">{step.t.split(':')[0]}</span>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-[11px] mb-1">{step.t.split(':')[1]}</h5>
                    <p className="text-sm text-[#8a8a93]">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a14] text-white p-12 rounded-sm space-y-8 sticky top-32">
            <h4 className="text-2xl font-medium">Incubation Interest</h4>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Project Name</label>
                <input className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-[#4a6fa5]" placeholder="E.g. Athena Protocol" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Category</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none">
                  <option>AI / Agents</option>
                  <option>DeSci</option>
                  <option>DeFi</option>
                  <option>Infrastructure</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Stage</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Pre-launch', 'Launched', 'Scaling'].map(s => <button key={s} type="button" className="border border-white/10 p-2 text-[10px] uppercase font-bold hover:bg-white hover:text-black transition-colors">{s}</button>)}
                </div>
              </div>
              <PremiumButton className="w-full">Submit Application</PremiumButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const EcosystemsPage = () => (
  <main className="pt-20 bg-[#fbfaf8]">
    <section className="py-32 px-8 bg-[#0a0a14] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <SectionHeader label="Partnerships" title="Partner with AthenaX" light />
          <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed font-light">
            Become an official partner ecosystem at <span className="text-[#4a6fa5] italic font-serif">zero cost.</span> We incubate your builders using yield-funded growth modules and cross-chain media.
          </p>
          <PremiumButton variant="outline" className="border-white text-white hover:bg-white hover:text-black">Request Briefing</PremiumButton>
        </div>
        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            { l: "Zero Foundation Burn", v: "No cost to the foundation treasury." },
            { l: "Yield-Funded Growth", v: "Sustainable builder onboarding." },
            { l: "Cross-Chain Reach", v: "Multi-ecosystem distribution." },
            { l: "Institutional Trust", v: "Powered by NounsDAO ethos." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#0a0a14] space-y-4">
              <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-widest">{item.l}</span>
              <p className="text-sm font-light text-white/60">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Phase 1" title="Ecosystem Pipeline" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
             { n: 'Octant', s: 'Confirmed', d: 'Providing the core vault infrastructure and matching grants.' },
             { n: 'Polkadot', s: 'In Progress', d: 'Expanding the builder footprint across the Polkadot SDK ecosystem.' },
             { n: 'Magic Eden', s: 'In Progress', d: 'Integrating cross-chain consumer and agentic ecosystems.' },
             { n: 'Neura Protocol', s: 'In Progress', d: 'Incubating AI and DeSci builders on-chain.' }
          ].map(eco => (
            <div key={eco.n} className="p-8 border border-black/5 bg-white flex justify-between items-start group hover:border-[#4a6fa5] transition-colors">
              <div>
                <h4 className="text-2xl font-medium mb-2">{eco.n}</h4>
                <p className="text-sm text-[#8a8a93] max-w-xs">{eco.d}</p>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${eco.s === 'Confirmed' ? 'bg-[#4a9f7e]/10 text-[#4a9f7e]' : 'bg-[#4a6fa5]/10 text-[#4a6fa5]'}`}>{eco.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="pt-20 bg-[#fbfaf8]">
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Origins" title="About AthenaX" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8 text-lg font-light leading-relaxed text-[#0a0a14]/80">
            <p>AthenaX is a decentralized ecosystem incubator designed to replace traditional venture burn with sustainable, yield-funded growth.</p>
            <p>Our mission is to help builders secure non-dilutive funding via NounsDAO and Octant, then amplify that capital through strategic vault yields and institutional-grade media distribution.</p>
            <p className="border-l-4 border-[#4a6fa5] pl-8 italic font-serif py-4 text-2xl text-[#0a0a14]">"Incubating ecosystems. Onboarding builders."</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-black/5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-[0.2em] mb-4">Ethos</span>
              <h5 className="font-medium text-xl">DAO-Native</h5>
            </div>
            <div className="p-8 bg-[#0a0a14] text-white flex flex-col justify-center">
              <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-[0.2em] mb-4">Distribution</span>
              <h5 className="font-medium text-xl">Cross-Chain</h5>
            </div>
            <div className="p-8 bg-[#4a6fa5] text-white flex flex-col justify-center">
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-4">Capital</span>
              <h5 className="font-medium text-xl">Yield-Funded</h5>
            </div>
            <div className="p-8 bg-white border border-black/5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-[#4a6fa5] uppercase tracking-[0.2em] mb-4">Model</span>
              <h5 className="font-medium text-xl">Zero Cost</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

// --- Blog & Article Logic ---
interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
}

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

const ArticleView = ({ article, onBack }: ArticleViewProps) => (
  <main className="pt-20 bg-white">
    <section className="py-20 px-8 max-w-5xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8a8a93] mb-12 hover:text-[#0a0a14] transition-colors group"
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
      </button>

      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5] mb-6">
        <span>{article.category}</span>
        <span className="text-[#8a8a93]">{article.date}</span>
        <span className="text-[#8a8a93]">{article.readTime}</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] text-[#0a0a14] mb-12">
        {article.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="aspect-video bg-[#0a0a14]/5 mb-12 flex items-center justify-center border border-black/5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93]">Featured Technical Illustration</span>
          </div>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-[#0a0a14]/80 text-lg leading-relaxed font-light">
            <p className="text-2xl font-medium text-[#0a0a14] leading-tight mb-8">
              Decentralized incubation is shifting from high-dilution venture capital models to sustainable, yield-bearing vault architectures.
            </p>
            <p>
              Traditional startup incubation often forces builders into a trade-off: early-stage capital in exchange for substantial equity or token allocations. This model creates immediate sell pressure and misaligned incentives. 
            </p>
            <blockquote className="border-l-4 border-[#4a6fa5] pl-8 py-4 my-12 italic font-serif text-3xl text-[#0a0a14]">
              "The goal is not just to fund projects, but to build perpetual engines of growth that do not touch the principal capital."
            </blockquote>
            <p>
              At AthenaX, we utilize the Octant vault infrastructure. By securing grants from NounsDAO or Octant directly to these vaults, we create a non-custodial yield environment. Builders maintain ownership while the yields fund intensive 14-day growth modules, narrative design, and cross-chain amplification.
            </p>
            <h3 className="text-3xl font-medium tracking-tight text-[#0a0a14] pt-8">The Architecture of Resilience</h3>
            <p>
              Capital efficiency in a bear market requires more than just spending. It requires strategic matching. Our 1:1 capital matching program ensures that every dollar of yield is amplified by institutional participation, creating a buffer for early-stage builders to focus on code rather than next week's runway.
            </p>
          </div>

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
        </div>

        <div className="lg:col-span-4 space-y-12">
          <div className="p-8 bg-[#fbfaf8] border border-black/5">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5] mb-6">Key Takeaways</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex gap-3"><Plus className="w-4 h-4 text-[#4a6fa5] shrink-0" /> Yield-funded incubation preserves project equity.</li>
              <li className="flex gap-3"><Plus className="w-4 h-4 text-[#4a6fa5] shrink-0" /> NounsDAO grants provide critical seed momentum.</li>
              <li className="flex gap-3"><Plus className="w-4 h-4 text-[#4a6fa5] shrink-0" /> 1:1 Matching maximizes capital efficiency.</li>
            </ul>
          </div>
          
          <div className="p-8 border-t border-black/10">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93] mb-6">Related Intelligence</h5>
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5]">Technical</span>
                <h6 className="font-medium leading-tight group-hover:text-[#4a6fa5] transition-colors mt-2">The Octant Vault Mechanism Deep-Dive</h6>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5]">Governance</span>
                <h6 className="font-medium leading-tight group-hover:text-[#4a6fa5] transition-colors mt-2">Strategic Narrative Alignment with Nouns</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);


interface BlogPageProps {
  onSelectArticle: (article: Article) => void;
}

const BlogPage = ({ onSelectArticle }: BlogPageProps) => {
  const posts = [
    { id: 1, title: "The Shift: From VC Burn to Yield Funding", category: "Research", date: "Oct 24, 2025", readTime: "8 min" },
    { id: 2, title: "NounsDAO: The Cultural Gravity of Decentralization", category: "Governance", date: "Oct 18, 2025", readTime: "5 min" },
    { id: 3, title: "Sprint Cycle 01: Onboarding the Polkadot Builder Base", category: "Case Study", date: "Oct 12, 2025", readTime: "12 min" },
    { id: 4, title: "Building in Public: Octant Vault Mechanics", category: "Technical", date: "Oct 05, 2025", readTime: "10 min" }
  ];

  return (
    <main className="pt-20 bg-[#fbfaf8]">
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Intelligence" title="Research & Insights" />
          <div className="flex flex-wrap gap-8 mb-16 border-b border-black/5 pb-8">
            {['All', 'Research', 'Governance', 'Technical', 'Case Study'].map(cat => (
              <button key={cat} className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93] hover:text-[#0a0a14] transition-colors">{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {posts.map((post, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => onSelectArticle(post)}>
                <div className="aspect-[16/9] bg-[#0a0a14]/5 rounded-sm mb-8 overflow-hidden relative border border-black/5">
                  <div className="absolute inset-0 bg-[#4a6fa5]/5 group-hover:bg-transparent transition-all flex items-center justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a8a93] opacity-0 group-hover:opacity-100 transition-opacity">Read Full Article</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#4a6fa5] mb-4">
                  <span>{post.category}</span>
                  <span className="text-[#8a8a93]">{post.date}</span>
                </div>
                <h3 className="text-3xl font-medium tracking-tighter group-hover:text-[#4a6fa5] transition-colors mb-4">{post.title}</h3>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#8a8a93]">
                  <Clock className="w-3 h-3" /> {post.readTime} Read
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// --- Main App Logic ---

export default function App() {
  const [activePage, setPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
    setPage('blog-article');
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedArticle(null);
    setPage('blog');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch(activePage) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'projects': return <ProjectsPage />;
      case 'ecosystems': return <EcosystemsPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage onSelectArticle={handleArticleSelect} />;
      case 'blog-article': return <ArticleView article={selectedArticle} onBack={handleBackToBlog} />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#4a6fa5] selection:text-white selection:text-white">
      <Navigation activePage={activePage} setPage={setPage} />
      {renderContent()}
      <Footer setPage={setPage} />
    </div>
  );
}
