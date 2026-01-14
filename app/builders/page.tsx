import { Metadata } from "next";
import { Badge } from "@/components/UI";
import WindowCard from "@/components/WindowCard";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Builders - AthenaX",
   description: "Resources to turn playful ideas into onchain institutions.",
};

const BUILDERS_ITEMS = [
   {
      id: "01",
      title: "Incubation",
      iconUrl: "https://athenax.mypinx.store/Incubation.png",
      bgColor: "bg-green-100",
      description:
         "Hands-on support from ideation to deployment. We help you navigate Nouns mechanics and onchain strategy.",
      features: ["Strategy_Sessions", "Dev_Support"],
   },
   {
      id: "02",
      title: "Grants",
      iconUrl: "https://athenax.mypinx.store/Grants1.png",
      bgColor: "bg-yellow-100",
      description:
         "Learn how funding works in the Nouns ecosystem. We share guidelines, templates, and strategies for writing proposals that land.",
      features: ["Prop_House", "Small_Grants"],
   },
   {
      id: "03",
      title: "Distribution",
      iconUrl: "https://athenax.mypinx.store/Distribution.png",
      bgColor: "bg-red-100",
      description:
         "Get your project seen by the most influential community in crypto. Culture flows downstream from Nouns.",
      features: ["Social_Layer", "Governance_Prop"],
   },
];

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
            {BUILDERS_ITEMS.map((item) => (
               <WindowCard
                  key={item.id}
                  title={`MODULE_${item.id}: ${item.title.toUpperCase()}`}
                  icon="terminal"
               >
                  <div
                     className={`size-12 ${item.bgColor} rounded-lg border border-gray-900 flex items-center justify-center mb-4`}
                  >
                     <Image
                        src={item.iconUrl}
                        alt={item.title}
                        height={100}
                        width={100}
                        className="size-8"
                     />
                  </div>
                  <h3
                     className="text-2xl mb-2"
                     style={{ fontFamily: "var(--font-londrina), cursive" }}
                  >
                     {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <ul
                     className="text-sm space-y-1 text-gray-500 mt-auto"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     {item.features.map((feature) => (
                        <li key={feature}>&gt; {feature}</li>
                     ))}
                  </ul>
               </WindowCard>
            ))}
         </div>
      </div>
   );
}
