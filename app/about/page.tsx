import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsAthenaX } from "@/components/about/WhatIsAthenaX";

export const metadata = {
   title: "About - AthenaX",
   description: "Learn about AthenaX and our mission to incubate ecosystems and onboard builders",
};

export default function AboutPage() {
   return (
      <>
         <AboutHero />
         <WhatIsAthenaX />
      </>
   );
}
