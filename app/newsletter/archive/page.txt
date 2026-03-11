import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ListCard from "@/components/ListCard";
import { DISPATCHES } from "@/data/newsletter";

export default function NewsletterArchivePage() {
   return (
      <div className="space-y-12">
         <div className="border-b-2 border-gray-200 pb-8">
            <Link
               href="/newsletter"
               className="flex items-center gap-2 font-vt323 font-bold text-accent-red hover:translate-x-1 transition-all uppercase text-sm inline-flex mb-4"
            >
               <ArrowLeft size={16} /> Exit Archive
            </Link>
            <h1 className="text-5xl md:text-6xl uppercase" style={{ fontFamily: "var(--font-londrina), cursive" }}>Full Dispatch Archive</h1>
         </div>

         <div className="space-y-4">
            {DISPATCHES.map((post) => (
               <ListCard
                  key={post.id}
                  href={`/newsletter/${post.slug}`}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  categoryVariant="badge"
                  icon="number"
                  number={post.id.split("-")[1]}
               />
            ))}
         </div>
      </div>
   );
}
