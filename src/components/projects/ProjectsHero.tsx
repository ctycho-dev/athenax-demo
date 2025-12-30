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
        <span className="text-gray-500">{children}</span>
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

export const ProjectsHero = () => (
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
                We back builders with capital, infrastructure, and distribution—without touching your cap table.
            </p>
            <Button className="mx-auto px-12 py-5 text-lg">Apply for Incubation →</Button>
        </div>
    </section>
);
