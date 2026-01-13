import { Metadata } from "next";
import { Badge, WindowCard } from "@/components/UI";

export const metadata: Metadata = {
   title: "Builders - AthenaX",
   description: "Resources to turn playful ideas into onchain institutions.",
};

export default function Builders() {
   return (
      <div>
         <div className="mb-12 border-b-2 border-gray-200 pb-8">
            <Badge text="/root/builders" color="bg-blue-100" />
            <h2
               className="text-5xl mt-4 mb-2"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               Builder Toolkit
            </h2>
            <p className="text-xl text-gray-500">
               Resources to turn playful ideas into onchain institutions.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <WindowCard title="MODULE_01: INCUBATION" icon="terminal">
               <div className="w-12 h-12 bg-green-100 rounded-lg border border-gray-900 flex items-center justify-center mb-4">
                  🌱
               </div>
               <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Incubation
               </h3>
               <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Hands-on support from ideation to deployment. We help you navigate Nouns mechanics
                  and onchain strategy.
               </p>
               <ul
                  className="text-sm space-y-1 text-gray-500 mt-auto"
                  style={{ fontFamily: "var(--font-vt323), monospace" }}
               >
                  <li>&gt; Strategy_Sessions</li>
                  <li>&gt; Dev_Support</li>
               </ul>
            </WindowCard>

            <WindowCard title="MODULE_02: FUNDING" icon="terminal">
               <div className="w-12 h-12 bg-yellow-100 rounded-lg border border-gray-900 flex items-center justify-center mb-4">
                  ⚡
               </div>
               <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Grants
               </h3>
               <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Direct access to Prop House rounds and small grants. Fast capital for weird ideas.
               </p>
               <ul
                  className="text-sm space-y-1 text-gray-500 mt-auto"
                  style={{ fontFamily: "var(--font-vt323), monospace" }}
               >
                  <li>&gt; Prop_House</li>
                  <li>&gt; Small_Grants</li>
               </ul>
            </WindowCard>

            <WindowCard title="MODULE_03: DISTRIBUTION" icon="terminal">
               <div className="w-12 h-12 bg-red-100 rounded-lg border border-gray-900 flex items-center justify-center mb-4">
                  📡
               </div>
               <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Distribution
               </h3>
               <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Get your project seen by the most influential community in crypto. Culture flows
                  downstream from Nouns.
               </p>
               <ul
                  className="text-sm space-y-1 text-gray-500 mt-auto"
                  style={{ fontFamily: "var(--font-vt323), monospace" }}
               >
                  <li>&gt; Social_Layer</li>
                  <li>&gt; Governance_Prop</li>
               </ul>
            </WindowCard>
         </div>
      </div>
   );
}
