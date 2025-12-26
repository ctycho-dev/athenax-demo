import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

const COLORS = {
    BaseBackground: '#F5F5F7',
    PrimaryBlue: '#2F80FF',
};

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
}

const Badge = ({ children, color = COLORS.PrimaryBlue }: BadgeProps) => (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
        <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }}></span>
        <span className="text-gray-500">{children}</span>
    </div>
);

interface HeroSectionProps {
    setPage: (page: string) => void;
}

export const HeroSection = ({ setPage }: HeroSectionProps) => {
    return (
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
                    <Link
                        to="/v3/projects"
                        className="px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-[#020617] text-white hover:bg-[#111827] text-lg px-10 py-5"
                    >
                        Apply for Incubation <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/v3/tv"
                        className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-all"
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                            <Play size={16} fill="black" />
                        </div>
                        WATCH ATHENA.TV
                    </Link>
                </div>
            </div>
        </section>
    );
};
