import { TVHero } from "@/components/tv/TVHero";
import { FeaturedVideo } from "@/components/tv/FeaturedVideo";
import { AllEpisodes } from "@/components/tv/AllEpisodes";

export const metadata = {
   title: "AthenaX TV",
   description: "Watch founder-focused programming across chains",
};

export default function TVPage() {
   return (
      <div className="bg-[#020617]">
         <TVHero />
         <FeaturedVideo />
         <AllEpisodes />
      </div>
   );
}
