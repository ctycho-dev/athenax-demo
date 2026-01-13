import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/UI";
import { notFound } from "next/navigation";
import LexicalRenderer from "@/components/LexicalRenderer";

interface Article {
   id: number;
   title: string;
   slug: string;
   createdAt: string;
   content: any;
   _status: string;
}

async function getArticle(slug: string): Promise<Article | null> {
   try {
      const res = await fetch(`https://admin.athenax.co/api/articles?where[slug][equals]=${slug}`, {
         cache: "no-store",
      });

      if (!res.ok) {
         return null;
      }

      const data = await res.json();

      if (data.docs && data.docs.length > 0) {
         return data.docs[0];
      }

      return null;
   } catch (error) {
      console.error("Error fetching article:", error);
      return null;
   }
}

async function getAllArticleSlugs(): Promise<string[]> {
   try {
      const res = await fetch(
         "https://admin.athenax.co/api/articles?select[slug]=true&limit=1000",
         { cache: "no-store" }
      );

      if (!res.ok) {
         return [];
      }

      const data = await res.json();

      if (data.docs && Array.isArray(data.docs)) {
         return data.docs.map((article: any) => article.slug);
      }

      return [];
   } catch (error) {
      console.error("Error fetching article slugs:", error);
      return [];
   }
}

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
   const article = await getArticle(slug);

   if (!article) {
      return {
         title: "Article Not Found - AthenaX",
      };
   }

   return {
      title: `${article.title} - AthenaX Archive`,
      description: `Essay published on ${new Date(article.createdAt).toISOString().split("T")[0]}`,
   };
}

function formatDate(dateString: string): string {
   const date = new Date(dateString);
   return date.toISOString().split("T")[0];
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const article = await getArticle(slug);

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
