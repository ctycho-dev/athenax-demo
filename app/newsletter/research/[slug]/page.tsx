import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/UI";
import { notFound } from "next/navigation";
import LexicalRenderer from "@/components/LexicalRenderer";
import { getResearchBySlug, getResearch } from "@/lib/api";
import { formatDate, calcReadTime } from "@/lib/utils";

// Generate static params for all research items
export async function generateStaticParams() {
   const researchItems = await getResearch();
   return researchItems.map((item) => ({
      slug: item.slug,
   }));
}

// Generate metadata for each research item
export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const research = await getResearchBySlug(slug);

   if (!research) {
      return {
         title: "Research Not Found - AthenaX",
      };
   }

   return {
      title: `${research.title} - AthenaX Research`,
      description: `Research published on ${formatDate(research.publishedAt)}`,
   };
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const research = await getResearchBySlug(slug);

   if (!research) {
      notFound();
   }

   // Map tag to display name and color
   const tagConfig: Record<string, { label: string; color: string }> = {
      governance: { label: "Governance", color: "bg-accent-yellow" },
      treasury: { label: "Treasury", color: "bg-accent-blue" },
   };

   const tagInfo = research.tag ? tagConfig[research.tag] : null;

   return (
      <div>
         <div className="mb-8">
            <Link
               href="/newsletter?tab=research"
               className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-2"
               style={{ fontFamily: "var(--font-vt323), monospace" }}
            >
               ← /root/research
            </Link>
         </div>

         <div className="mb-10">
            <h1
               className="text-5xl md:text-6xl mb-4"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               {research.title}
            </h1>
            <div className="flex gap-4 items-center">
               <p className="text-gray-500" style={{ fontFamily: "var(--font-vt323), monospace" }}>
                  {formatDate(research.publishedAt)}
               </p>
               {tagInfo ? (
                  <Badge text={tagInfo.label} color={tagInfo.color} />
               ) : (
                  <Badge text="Research" />
               )}
               <p className="text-gray-400" style={{ fontFamily: "var(--font-vt323), monospace" }}>
                  {calcReadTime(research.content)} min read
               </p>
            </div>
         </div>

         <div className="max-w-3xl">
            <div className="text-lg leading-relaxed text-gray-700">
               <LexicalRenderer content={research.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
               <Link
                  href="/newsletter?tab=research"
                  className="text-accent-red font-bold hover:underline flex items-center gap-2"
               >
                  ← Back to Research
               </Link>
            </div>
         </div>
      </div>
   );
}
