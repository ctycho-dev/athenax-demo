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

export const ApplicationForm = () => (
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
                            <option>Other</option>
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
);
