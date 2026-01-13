import { Metadata } from "next";
import { Badge, WindowCard } from "../components/UI";

export const metadata: Metadata = {
   title: "Apply - AthenaX",
   description: "Join the AthenaX network.",
};

export default function Apply() {
   return (
      <div className="max-w-2xl mx-auto">
         <div className="mb-8 text-center">
            <Badge text="Status: Applications Open" color="bg-green-100" />
            <h2
               className="text-5xl mt-4 mb-2"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               Join the Network
            </h2>
            <p className="text-xl text-gray-500">
               Tell us what you&apos;re building. Keep it brief.
            </p>
         </div>

         <WindowCard title="INPUT_TERMINAL" className="bg-white">
            <form className="space-y-6">
               <div>
                  <label
                     className="block text-sm font-bold mb-2"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     PROJECT_NAME
                  </label>
                  <input
                     type="text"
                     className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                     placeholder="e.g. Nouns Space Program"
                  />
               </div>
               <div>
                  <label
                     className="block text-sm font-bold mb-2"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     CONTACT_EMAIL
                  </label>
                  <input
                     type="email"
                     className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                     placeholder="you@builder.xyz"
                  />
               </div>
               <div>
                  <label
                     className="block text-sm font-bold mb-2"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     THE_PITCH (280 CHARS)
                  </label>
                  <textarea
                     rows={4}
                     className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                     placeholder="What are you building and why does it matter?"
                  ></textarea>
               </div>
               <button
                  type="button"
                  className="w-full btn-system btn-primary justify-center text-lg py-4"
               >
                  Submit Application
               </button>
            </form>
         </WindowCard>
      </div>
   );
}
