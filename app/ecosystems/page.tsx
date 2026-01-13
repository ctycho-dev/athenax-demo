import { Metadata } from "next";
import { Badge } from "@/components/UI";
import WindowCard from "@/components/WindowCard";

export const metadata: Metadata = {
   title: "Ecosystems - AthenaX",
   description: "Helping DAOs grow up without selling out.",
};

const systems = [
   {
      title: "GOVERNANCE.SYS",
      heading: "Optimistic Architecture",
      description:
         "Governance systems that assume positive intent but protect against attacks. Think reputation systems, optimistic execution, and modular sub-DAOs.",
      badges: ["Veto_Rights", "Timelocks", "Delegation"],
   },
   {
      title: "COMMUNITY.SYS",
      heading: "Community Activation",
      description:
         "An ecosystem is dead without lore. Onchain contests, hackathons, and content engines turn passive holders into active contributors.",
      badges: ["Hackathons", "Prop_House", "Meme_Warfare"],
   },
];

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
            {systems.map((system) => (
               <WindowCard key={system.title} title={system.title} className="min-h-75">
                  <h3
                     className="text-3xl mb-4"
                     style={{ fontFamily: "var(--font-londrina), cursive" }}
                  >
                     {system.heading}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{system.description}</p>
                  <div className="mt-auto border-t border-gray-200 pt-4 flex gap-2">
                     {system.badges.map((badge) => (
                        <Badge key={badge} text={badge} />
                     ))}
                  </div>
               </WindowCard>
            ))}
         </div>
      </div>
   );
}
