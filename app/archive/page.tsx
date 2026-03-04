import { Metadata } from "next";
import { Badge } from "@/components/UI";
import ListCard from "@/components/ListCard";
import { getArticles } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
   title: "Archive - AthenaX",
   description: "Artifacts, learnings, and broadcasts.",
};

export default async function Archive() {
   const articles = await getArticles();
   return (
      <div>
         <div className="mb-12 flex items-end justify-between border-b-2 border-gray-200 pb-8">
            <div>
               <Badge text="/root/archive" color="bg-gray-200" />
               <h2 className="text-5xl mt-4 mb-2" style={{ fontFamily: "var(--font-londrina), cursive" }}>The Archive</h2>
               <p className="text-xl text-gray-500">Artifacts, learnings, and broadcasts.</p>
            </div>
         </div>

         <div className="space-y-4">
            {articles.map((article) => (
               <ListCard
                  key={article.id}
                  href={`/archive/${article.slug}`}
                  title={article.title}
                  date={formatDate(article.createdAt)}
                  category="Essay"
                  icon="file"
               />
            ))}
         </div>
      </div>
   );
}
