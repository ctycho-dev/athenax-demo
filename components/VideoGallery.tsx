"use client";

import { useState } from "react";
import Image from "next/image";
import WindowCard from "@/components/WindowCard";
import { Badge, Icon } from "@/components/UI";
import { Video, VideoType } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type TabFilter = VideoType | "all";

const TABS: { key: TabFilter; label: string }[] = [
   { key: "all", label: "All" },
   { key: "live_stream", label: "Live Streams" },
   { key: "whitepaper_reading", label: "Whitepaper" },
   { key: "roundtable", label: "Roundtable" },
];

function getVideoTypeBadge(videoType: TabFilter): { text: string; color: string } {
   switch (videoType) {
      case "live_stream":
         return { text: "Live Stream", color: "bg-blue-100" };
      case "whitepaper_reading":
         return { text: "Whitepaper", color: "bg-green-100" };
      case "roundtable":
         return { text: "Roundtable", color: "bg-yellow-100" };
      default:
         return { text: "Video", color: "bg-gray-100" };
   }
}

export default function VideoGallery({ videos }: { videos: Video[] }) {
   const [activeTab, setActiveTab] = useState<TabFilter>("all");

   const filteredVideos = videos.filter((video) => {
      if (activeTab === "all") return true;
      return video.videoType === activeTab;
   });

   return (
      <div>
         {/* Tab Navigation */}
         <div className="flex gap-2 mb-8">
            {TABS.map((tab) => (
               <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                     activeTab === tab.key
                        ? "bg-accent-yellow border-2 border-gray-900 shadow-(--shadow-active)"
                        : "hover:bg-gray-100 text-gray-600 border-2 border-transparent"
                  }`}
               >
                  {tab.label}
               </button>
            ))}
         </div>

         {/* Video Grid */}
         <div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in"
         >
            {filteredVideos.map((video) => {
               const badge = getVideoTypeBadge(video.videoType);

               return (
                  <Link
                     key={video.id}
                     href={video.embedUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block"
                  >
                     <WindowCard title={`VIDEO_${video.id}`} icon="play" className="h-full">
                        {/* Thumbnail with Play Overlay */}
                        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden border border-gray-200">
                           <Image
                              src={video.thumbnailUrl}
                              alt={video.title}
                              fill
                              className="object-cover"
                           />
                           {/* Play Button Overlay */}
                           <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                              <div className="size-16 bg-white/90 rounded-full flex items-center justify-center border-2 border-gray-900 shadow-(--shadow-active)">
                                 <Icon name="play" size={24} className="text-gray-900 ml-1" />
                              </div>
                           </div>
                        </div>

                        <h3
                           className="text-xl mb-2 line-clamp-2"
                           style={{ fontFamily: "var(--font-londrina), cursive" }}
                        >
                           {video.title}
                        </h3>

                        <div className="flex justify-between items-center">
                           <p
                              className="text-sm text-gray-500"
                              style={{ fontFamily: "var(--font-vt323), monospace" }}
                           >
                              {formatDate(video.originDate)}
                           </p>
                           {/* Video Info */}
                           <div className="flex items-start justify-between gap-2">
                              <Badge text={badge.text} color={badge.color} />
                           </div>
                        </div>
                     </WindowCard>
                  </Link>
               );
            })}
         </div>

         {/* Empty State */}
         {filteredVideos.length === 0 && (
            <div key={`empty-${activeTab}`} className="text-center py-12 animate-in">
               <p
                  className="text-2xl text-gray-400"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  No videos found
               </p>
            </div>
         )}
      </div>
   );
}
