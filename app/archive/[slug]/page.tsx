import Link from "next/link";
import { Metadata } from "next";
import { Badge, Icon } from "@/components/UI";
import { notFound } from "next/navigation";
import archiveData from "@/data/archive";

// Generate static params for all articles
export function generateStaticParams() {
   return archiveData.map((item) => ({
      slug: item.slug,
   }));
}

// Generate metadata for each article
export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const article = archiveData.find((item) => item.slug === slug);

   if (!article) {
      return {
         title: "Article Not Found - AthenaX",
      };
   }

   return {
      title: `${article.title} - AthenaX Archive`,
      description: `${article.type} published on ${article.date}`,
   };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const article = archiveData.find((item) => item.slug === slug);

   if (!article) {
      notFound();
   }

   return (
      <div>
         <div className="mb-8">
            <Link
               href="/archive"
               className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-2"
               style={{ fontFamily: "var(--font-vt323), monospace" }}
            >
               ← /root/archive
            </Link>
         </div>

         <div className="mb-10">
            <h1
               className="text-5xl md:text-6xl mb-4"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               {article.title}
            </h1>
            <div className="flex gap-4 items-center">
               <span
                  className="text-gray-400"
                  style={{ fontFamily: "var(--font-vt323), monospace" }}
               >
                  {article.date}
               </span>
               <Badge text={article.type} />
            </div>
         </div>

         <div className="max-w-3xl">
            {article.type === "Video" && (
               <div className="aspect-video bg-gray-900 rounded-lg border-2 border-gray-900 mb-8 flex items-center justify-center">
                  <Icon name="play" size={48} className="text-white opacity-50" />
               </div>
            )}

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
               <p>
                  Building onchain requires a shift in perspective. Instead of walled gardens, we
                  build public squares. This {article.type.toLowerCase()} explores how NounsDAO
                  mechanics can be applied to wider institutional frameworks.
               </p>
               <p>
                  The core thesis of AthenaX is centered around the propagation of public goods. By
                  utilizing the Nouns auction mechanism, we ensure a sustainable and decentralized
                  funding stream that empowers builders directly.
               </p>

               {article.type === "Log" && (
                  <div
                     className="space-y-2 text-sm"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     <div className="text-gray-400">[2024-08-15 10:00] LOG_START</div>
                     <div className="text-gray-900">
                        &gt;&gt; Call commenced with 42 participants.
                     </div>
                     <div className="text-gray-900">
                        &gt;&gt; Discussion on optimistic funding pathways.
                     </div>
                     <div className="text-gray-400">[2024-08-15 11:30] LOG_END</div>
                  </div>
               )}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
               <Link
                  href="/archive"
                  className="text-[#E63636] font-bold hover:underline flex items-center gap-2"
               >
                  ← Back to Archive
               </Link>
            </div>
         </div>
      </div>
   );
}
