import { HeroSection } from "@/components/home/HeroSection";
import { QuoteSection } from "@/components/home/QuoteSection";
import { LogoBar } from "@/components/home/LogoBar";
import { ValueGrid } from "@/components/home/ValueGrid";
import { FourLayerModel } from "@/components/home/FourLayerModel";
import { RecentVideos } from "@/components/home/RecentVideos";

export const metadata = {
   title: "AthenaX - Incubating Ecosystems, Onboarding Builders",
   description: "Powered by NounsDAO",
};

export default function HomePage() {
   return (
      <>
         <HeroSection />
         <QuoteSection />
         <LogoBar />
         <ValueGrid />
         <FourLayerModel />
         <RecentVideos />
      </>
   );
}
