"use client";

import { useEffect } from "react";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { WhatYouGet } from "@/components/projects/WhatYouGet";
import { WeWorkWithBuilders } from "@/components/projects/WeWorkWithBuilders";
import { GetIncubated } from "@/components/projects/GetIncubated";
import { ApplicationForm } from "@/components/projects/ApplicationForm";
import { FAQs } from "@/components/projects/FAQs";

export default function ProjectsPage() {
   useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
         const element = document.getElementById(hash.substring(1));
         if (element) {
            setTimeout(() => {
               element.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
         }
      }
   }, []);

   return (
      <>
         <ProjectsHero />
         <WhatYouGet />
         <WeWorkWithBuilders />
         <GetIncubated />
         <ApplicationForm />
         <FAQs />
      </>
   );
}
