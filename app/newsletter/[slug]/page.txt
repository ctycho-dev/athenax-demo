import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Terminal } from "lucide-react";
import WindowCard from "@/components/WindowCard";
import { Badge } from "@/components/ui/Badge";
import MailServerPanel from "@/components/MailServerPanel";
import { getDispatchBySlug, DISPATCHES } from "@/data/newsletter";

interface NewsletterDispatchPageProps {
   params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
   return DISPATCHES.map((post) => ({
      slug: post.slug,
   }));
}

export default async function NewsletterDispatchPage({ params }: NewsletterDispatchPageProps) {
   const { slug } = await params;
   const dispatch = getDispatchBySlug(slug);

   if (!dispatch) {
      notFound();
   }

   const currentIndex = DISPATCHES.findIndex((d) => d.slug === slug);
   const prevDispatch = currentIndex > 0 ? DISPATCHES[currentIndex - 1] : null;
   const nextDispatch = currentIndex < DISPATCHES.length - 1 ? DISPATCHES[currentIndex + 1] : null;

   return (
      <div className="space-y-12">
         <Link
            href="/newsletter"
            className="flex items-center gap-2 font-vt323 font-bold text-accent-red hover:translate-x-1 transition-all uppercase text-sm inline-flex"
         >
            <ArrowLeft size={16} /> Back to Broadcasts
         </Link>

         {/* DETAIL HERO */}
         <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
               <div className="flex gap-2">
                  <CategoryBadge category={dispatch.category} />
                  <Badge className="mb-0 bg-accent-blue">{dispatch.date}</Badge>
               </div>
               <h1 className="text-5xl md:text-6xl mb-6 uppercase mt-4" style={{ fontFamily: "var(--font-londrina), cursive" }}>
                  {dispatch.title}
               </h1>
               <p className="text-xl font-bold mb-8 opacity-80 leading-relaxed italic">&quot;{dispatch.summary}&quot;</p>
            </div>
            <div className="md:col-span-5">
               <MailServerPanel />
            </div>
         </section>

         {/* CONTENT SECTIONS */}
         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-8">
               {dispatch.content.sections.map((section, idx) => (
                  <WindowCard key={idx} title={`SECTION_${String(idx + 1).padStart(2, "0")}`} icon="file">
                     <h2 className="font-bold text-2xl uppercase mb-4 border-b-2 border-gray-900 pb-2"                   style={{ fontFamily: "var(--font-londrina), cursive" }}>{section.heading}</h2>
                     <p className="leading-relaxed opacity-90">{section.body}</p>
                  </WindowCard>
               ))}
            </div>

            <div className="md:col-span-4 space-y-6">
               <div className="bg-gray-900 border-2 border-gray-900 p-6 shadow-[4px_4px_0px_0px_#1f2937] rounded-lg">
                  <h3 className="font-vt323 text-xl text-white uppercase mb-4 border-b border-white/20 pb-2 flex items-center gap-2">
                     <Terminal size={18} /> DISPATCH_METRICS
                  </h3>
                  <div className="font-vt323 text-lg text-green-400 space-y-2">
                     {dispatch.content.metrics.map((m, i) => (
                        <p key={i}>{m}</p>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* PAGINATION */}
         <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            {prevDispatch ? (
               <Link
                  href={`/newsletter/${prevDispatch.slug}`}
                  className="text-accent-red font-bold hover:underline flex items-center gap-2"
               >
                  ← Previous Dispatch
               </Link>
            ) : (
               <span className="flex items-center gap-2 text-gray-400 font-bold">
                  ← Previous Dispatch
               </span>
            )}
            {nextDispatch && (
               <Link
                  href={`/newsletter/${nextDispatch.slug}`}
                  className="text-accent-red font-bold hover:underline flex items-center gap-2"
               >
                  Next Dispatch →
               </Link>
            )}
         </div>
      </div>
   );
}

// --- SUB-COMPONENTS ---

const CategoryBadge = ({ category }: { category: string }) => {
   const colors: Record<string, string> = {
      governance: "bg-accent-yellow",
      treasury: "bg-accent-blue",
      research: "bg-red-200",
   };
   return (
      <Badge className={`${colors[category] || "bg-accent-yellow"} mb-0`} variant="primary">
         {category}
      </Badge>
   );
};
