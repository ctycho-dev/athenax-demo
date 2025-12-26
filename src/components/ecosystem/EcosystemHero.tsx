const COLORS = {
    PrimaryBlue: '#2F80FF',
};

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
}

const Badge = ({ children, color = COLORS.PrimaryBlue }: BadgeProps) => (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
        <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }}></span>
        <span className="text-gray-400">{children}</span>
    </div>
);

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

export const EcosystemHero = () => (
    <section className="py-24 px-6 bg-[#020617] text-white min-h-[60vh] flex items-center">
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
);
