import { Metadata } from "next";
import { Badge } from "@/components/UI";
import VideoGallery from "../../components/VideoGallery";
import { getVideos } from "@/lib/api";

export const metadata: Metadata = {
   title: "TV - AthenaX",
   description: "Live streams, whitepaper readings, and roundtables from AthenaX.",
};

export default async function TV() {
   const videos = await getVideos();

   return (
      <div>
         <div className="mb-12 border-b-2 border-gray-200 pb-8">
            <Badge text="/root/tv" color="bg-red-100" />
            <h2
               className="text-5xl mt-4 mb-2"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               AthenaX TV
            </h2>
            <p className="text-xl text-gray-500">
               Live streams, whitepaper readings, and roundtables.
            </p>
         </div>

         <VideoGallery videos={videos} />
      </div>
   );
}
