import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/UI";
import { notFound } from "next/navigation";
import LexicalRenderer from "@/components/LexicalRenderer";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/api";
import { formatDate } from "@/lib/utils";

// Generate static params for all articles
export async function generateStaticParams() {
   const slugs = await getAllArticleSlugs();
   return slugs.map((slug) => ({
      slug,
   }));
}

// Generate metadata for each article
export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const article = await getArticleBySlug(slug);

   if (!article) {
      return {
         title: "Article Not Found - AthenaX",
      };
   }

   return {
      title: `${article.title} - AthenaX Archive`,
      description: `Essay published on ${formatDate(article.createdAt)}`,
   };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const article = await getArticleBySlug(slug);

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
                  {formatDate(article.createdAt)}
               </span>
               <Badge text="Essay" />
            </div>
         </div>

         <div className="max-w-3xl">
            <div className="text-lg leading-relaxed text-gray-700">
               <LexicalRenderer content={article.content} />
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
