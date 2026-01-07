import { EcosystemHero } from "@/components/ecosystem/EcosystemHero";
import { EcosystemBenefits } from "@/components/ecosystem/EcosystemBenefits";
import { AthenaXSolution } from "@/components/ecosystem/AthenaXSolution";
import { WhatEcosystemGets } from "@/components/ecosystem/WhatEcosystemGets";
import { EcosystemPipeline } from "@/components/ecosystem/EcosystemPipeline";

export const metadata = {
   title: "For Ecosystems - AthenaX",
   description: "Partner with AthenaX - Official ecosystem incubator at zero cost to the treasury",
};

export default function EcosystemPage() {
   return (
      <>
         <EcosystemHero />
         <EcosystemBenefits />
         <AthenaXSolution />
         <WhatEcosystemGets />
         <EcosystemPipeline />
      </>
   );
}
