import Link from "next/link";
import { Metadata } from "next";
import { Badge, Icon } from "../components/UI";
import archiveData from "@/data/archive";

export const metadata: Metadata = {
   title: "Archive - AthenaX",
   description: "Artifacts, learnings, and broadcasts.",
};

export default function Archive() {
   return (
      <div>
         <div className="mb-12 flex items-end justify-between border-b-2 border-gray-200 pb-8">
            <div>
               <Badge text="/root/archive" color="bg-gray-200" />
               <h2
                  className="text-5xl mt-4 mb-2"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  The Archive
               </h2>
               <p className="text-xl text-gray-500">Artifacts, learnings, and broadcasts.</p>
            </div>
         </div>

         <div className="space-y-4">
            {archiveData.map((item, i) => (
               <Link
                  key={i}
                  href={`/archive/${item.slug}`}
                  className="group bg-white border border-gray-300 p-4 rounded-lg hover:border-gray-900 hover:shadow-[4px_4px_0px_0px_#1F2937] transition-all cursor-pointer flex items-center justify-between"
               >
                  <div className="flex items-center gap-4">
                     <div
                        className={`w-10 h-10 rounded flex items-center justify-center border border-gray-200 ${
                           item.type === "Video" ? "bg-yellow-50" : "bg-blue-50"
                        }`}
                     >
                        <Icon name={item.icon} size={20} className="text-gray-700" />
                     </div>
                     <div>
                        <h4
                           className="text-xl leading-none mb-1 group-hover:text-[#E63636] transition-colors"
                           style={{ fontFamily: "var(--font-londrina), cursive" }}
                        >
                           {item.title}
                        </h4>
                        <div
                           className="flex gap-2 text-xs text-gray-500"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           <span>{item.date}</span>
                           <span>//</span>
                           <span>{item.type}</span>
                        </div>
                     </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                     <Icon name="arrow" />
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
