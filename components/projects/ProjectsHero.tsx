"use client";

import { Button } from "@/components/ui/button";

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
      <span className="text-gray-500">{children}</span>
   </div>
);

export const ProjectsHero = () => {
   const handleApplyClick = () => {
      const element = document.getElementById("apply-for-incubation");
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
   };

   return (
   <section className="py-24 px-6 bg-[#F5F5F7] min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:flex items-center justify-center opacity-30 select-none pointer-events-none">
         {/* <span className="text-[600px] font-bold">X</span> */}
         <img
            src="https://athenax.mypinx.store/logo_black_60.png"
            alt="AthenaX Logo"
            className="w-150 h-auto"
         />
      </div>
      <div className="max-w-4xl relative z-10 mx-auto text-center">
         <Badge color={COLORS.PrimaryBlue}>● FOR PROJECTS</Badge>
         <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8">
            Grants. <br />
            <span className="italic text-blue-600">Vaults.</span> <br />
            Media. <br />
            Growth.
         </h1>
         <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We back builders with capital, infrastructure, and distribution—without touching your
            cap table.
         </p>
         <Button size="lg" onClick={handleApplyClick} className="mx-auto">
            Apply for Incubation →
         </Button>
      </div>
   </section>
   );
};
