import { useState, useEffect } from "react";
import { fetchYouTubeData, extractYouTubeId } from "../utils/youtube";
import type { ContentItem } from "../data/videos";

export interface VideoWithMetadata extends ContentItem {
   id: string;
   title: string;
   loading: boolean;
}

/**
 * Hook to fetch YouTube metadata for videos
 */
export const useYouTubeData = (videos: ContentItem[]): VideoWithMetadata[] => {
   const [videosWithMetadata, setVideosWithMetadata] = useState<VideoWithMetadata[]>(() =>
      videos.map((video) => ({
         ...video,
         id: extractYouTubeId(video.videoUrl),
         title: "Loading...",
         loading: true,
      }))
   );

   useEffect(() => {
      const fetchAllTitles = async () => {
         const promises = videos.map(async (video, index) => {
            const data = await fetchYouTubeData(video.videoUrl);
            return {
               ...video,
               id: extractYouTubeId(video.videoUrl),
               title: data?.title || `Video ${index + 1}`,
               loading: false,
            };
         });

         const results = await Promise.all(promises);
         setVideosWithMetadata(results);
      };

      fetchAllTitles();
   }, [videos]);

   return videosWithMetadata;
};
