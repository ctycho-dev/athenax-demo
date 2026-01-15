import Link from "next/link";
import { Icon, Noggles } from "@/components/UI";
import WindowCard from "@/components/WindowCard";
import Image from "next/image";

const StatCard = ({
   label,
   value,
   valueColor = "",
}: {
   label: string;
   value: string;
   valueColor?: string;
}) => (
   <div className="bg-gray-50 p-3 rounded border border-gray-200">
      <div
         className="text-xs text-gray-500 uppercase"
         style={{ fontFamily: "var(--font-vt323), monospace" }}
      >
         {label}
      </div>
      <div
         className={`text-xl ${valueColor}`}
         style={{ fontFamily: "var(--font-londrina), cursive" }}
      >
         {value}
      </div>
   </div>
);

const DirectoryCard = ({
   href,
   title,
   heading,
   description,
   color,
}: {
   href: string;
   title: string;
   heading: string;
   description: string;
   color: string;
}) => (
   <Link href={href} className="cursor-pointer group">
      <WindowCard title={title} icon="folder" color={color}>
         <h3 className="text-3xl mb-2" style={{ fontFamily: "var(--font-londrina), cursive" }}>
            {heading}
         </h3>
         <p className="text-gray-600 mb-4">{description}</p>
         <div className="mt-auto text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
            Open Directory <Icon name="arrow" size={16} />
         </div>
      </WindowCard>
   </Link>
);

export default function Home() {
   return (
      <div>
         {/* Hero Section */}
         <section className="relative pt-12 pb-24 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-yellow/80 border border-gray-900 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold tracking-wide uppercase">System Online</span>
               </div>
               <h1
                  className="text-6xl md:text-8xl leading-[0.9] text-gray-900"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Incubating <br />
                  <span className="text-accent-red">Onchain Culture.</span>
               </h1>
               <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  A decentralized ecosystem incubator <br /> powered by
                  <Link href="https://nouns.wtf" target="_blank" rel="noopener noreferrer">
                     <Image
                        src="https://athenax.mypinx.store/Noggles.png"
                        alt="Noggles Logo"
                        width={100}
                        height={70}
                        className="inline-block mb-1 ml-1 h-4 w-auto"
                     />
                  </Link>
                  . We don&apos;t do pitch decks; we do proof of work.
               </p>
               <div className="flex gap-4">
                  <Link href="/apply" className="btn-system btn-primary text-lg">
                     Start Building <Icon name="arrow" />
                  </Link>
                  <Link href="/archive" className="btn-system text-lg">
                     Explore Archive
                  </Link>
               </div>
            </div>

            <div className="md:col-span-5 relative">
               <WindowCard
                  title="SYS_MONITOR"
                  className="transform rotate-3 hover:rotate-0 transition-transform"
               >
                  <div className="flex flex-col items-center justify-center py-8 gap-6">
                     <Noggles />
                     <div className="w-full grid grid-cols-2 gap-4 mt-4">
                        <StatCard label="Network" value="Ethereum" />
                        <StatCard label="Treasury" value="Active" valueColor="text-green-600" />
                     </div>
                  </div>
               </WindowCard>
            </div>
         </section>

         {/* Shortcuts Grid */}
         <section className="grid md:grid-cols-2 gap-6 pb-20">
            <DirectoryCard
               href="/builders"
               title="DIR: /BUILDERS"
               heading="For Builders"
               description="Grants, tooling, and distribution for onchain creatives."
               color="bg-accent-blue/50 group-hover:bg-accent-blue/90 transition-colors"
            />
            <DirectoryCard
               href="/ecosystems"
               title="DIR: /ECOSYSTEMS"
               heading="For Ecosystems"
               description="Governance design and treasury strategy for DAOs."
               color="bg-accent-yellow/20 group-hover:bg-accent-yellow/50 transition-colors"
            />
         </section>
      </div>
   );
}
