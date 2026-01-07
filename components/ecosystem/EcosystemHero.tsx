import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/data/contacts";
import Link from "next/link";

const COLORS = {
   PrimaryBlue: "#2F80FF",
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

export const EcosystemHero = () => (
   <section className="py-24 px-6 bg-[#020617] text-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
         <Badge color={COLORS.PrimaryBlue}>● FOR ECOSYSTEMS</Badge>
         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Partner With <br />
            <span className="italic text-blue-500">AthenaX</span>
         </h1>
         <p className="text-2xl text-gray-400 mb-10 max-w-2xl">
            Official ecosystem incubator — at zero cost to the treasury.
         </p>
         <Button variant="blue" asChild>
            <Link href={`mailto:${CONTACTS.EMAIL}`}>Let's Talk →</Link>
         </Button>
      </div>
   </section>
);
