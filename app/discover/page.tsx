import { DiscoverHeader } from "@/components/discover/DiscoverHeader";
import { ProjectFilters } from "@/components/discover/ProjectFilters";
import { ProjectGrid } from "@/components/discover/ProjectGrid";
import { CaseStudies } from "@/components/discover/CaseStudies";

export const metadata = {
   title: "Discover - AthenaX",
   description: "Explore projects incubated by AthenaX",
};

export default function DiscoverPage() {
   return (
      <div className="bg-white">
         <DiscoverHeader />
         <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <ProjectFilters />
                  <ProjectGrid />
               </div>
            </div>
         </section>
         <CaseStudies />
      </div>
   );
}
