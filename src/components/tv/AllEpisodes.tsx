import { useState, useMemo } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { contentItems } from "../../data/videos";
import { useYouTubeData } from "../../hooks/useYouTubeData";

export const AllEpisodes = () => {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const filters = ["All", "Livestream", "Roundtable", "Whitepaper"];

    const allVideosData = useYouTubeData(contentItems);

    const filteredVideos = useMemo(
        () =>
            activeFilter === "All"
                ? allVideosData
                : allVideosData.filter(
                      (item) => item.type.toLowerCase() === activeFilter.toLowerCase()
                  ),
        [activeFilter, allVideosData]
    );

    return (
        <section className="py-24 px-6 bg-[#020617] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-3xl font-bold">All Episodes</h3>
                    <div className="flex gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 border rounded-full text-xs font-bold transition-all ${
                                    activeFilter === filter
                                        ? "bg-white/20 border-white/30"
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVideos.map((video) => (
                        <div key={video.id} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                                <LiteYouTubeEmbed
                                    id={video.id}
                                    title={video.title}
                                    poster="maxresdefault"
                                    lazyLoad={true}
                                />
                            </div>
                            <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                                {video.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-2">
                                {video.type.toUpperCase()} • {new Date(video.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                }).toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
