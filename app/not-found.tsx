import Link from "next/link";
import { Icon, Badge } from "@/components/UI";
import WindowCard from "@/components/WindowCard";

export default function NotFound() {
   return (
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
         <div className="mb-8 text-center">
            <Badge text="Error: 404" color="bg-accent-red/30" />
            <h1
               className="text-8xl mt-4 mb-2 text-accent-red"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               404
            </h1>
            <p className="text-xl text-gray-500">
               Oops! The page you're looking for doesn't exist.
            </p>
         </div>

         <WindowCard title="ERROR_LOG" icon="terminal" className="w-full">
            <div className="space-y-4">
               <div
                  className="bg-gray-50 p-4 rounded border border-gray-200"
                  style={{ fontFamily: "var(--font-vt323), monospace" }}
               >
                  <div className="text-accent-red">&gt; ERROR: PAGE_NOT_FOUND</div>
                  <div className="text-gray-500">&gt; The requested path does not exist.</div>
                  <div className="text-gray-500">&gt; Verify the URL and try again.</div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/" className="btn-system btn-primary justify-center flex-1">
                     Return Home <Icon name="arrow" size={16} />
                  </Link>
                  <Link href="/archive" className="btn-system justify-center flex-1">
                     Browse Archive
                  </Link>
               </div>
            </div>
         </WindowCard>
      </div>
   );
}
