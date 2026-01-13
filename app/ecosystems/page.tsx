import { Metadata } from "next";
import { Badge, WindowCard } from "../components/UI";

export const metadata: Metadata = {
   title: "Ecosystems - AthenaX",
   description: "Helping DAOs grow up without selling out.",
};

export default function Ecosystems() {
   return (
      <div>
         <div className="mb-12 border-b-2 border-gray-200 pb-8">
            <Badge text="/root/ecosystems" color="bg-yellow-100" />
            <h2
               className="text-5xl mt-4 mb-2"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               Governance Design
            </h2>
            <p className="text-xl text-gray-500">Helping DAOs grow up without selling out.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            <WindowCard title="GOVERNANCE.SYS" className="min-h-[300px]">
               <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Optimistic Architecture
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We design governance systems that assume positive intent but protect against
                  attacks. Move beyond simple token voting into reputation systems, optimistic
                  execution, and sub-DAO fractals.
               </p>
               <div className="mt-auto border-t border-gray-200 pt-4 flex gap-2">
                  <Badge text="Veto_Rights" />
                  <Badge text="Timelocks" />
                  <Badge text="Delegation" />
               </div>
            </WindowCard>

            <WindowCard title="COMMUNITY.SYS" className="min-h-[300px]">
               <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Community Activation
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  An ecosystem is dead without lore. We build onchain contests, hackathons, and
                  content engines that turn passive token holders into active contributors.
               </p>
               <div className="mt-auto border-t border-gray-200 pt-4 flex gap-2">
                  <Badge text="Hackathons" />
                  <Badge text="Prop_House" />
                  <Badge text="Meme_Warfare" />
               </div>
            </WindowCard>
         </div>
      </div>
   );
}
