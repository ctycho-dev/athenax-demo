import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { contentItems } from "../../data/videos";
import { useYouTubeData } from "../../hooks/useYouTubeData";

export const FeaturedVideo = () => {
    const allVideosData = useYouTubeData(contentItems);

    // Sort by date (newest first)
    const sortedVideos = [...allVideosData].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const featuredVideo = sortedVideos[0];
    const recentEpisodes = sortedVideos.slice(1, 5);

    const scrollToAllEpisodes = () => {
        const element = document.getElementById('all-episodes');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="bg-black/40 py-24 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12">
                <div>
                    <div className="aspect-video bg-gray-900 rounded-2xl border border-white/10 mb-8 overflow-hidden">
                        <LiteYouTubeEmbed
                            id={featuredVideo?.id || ""}
                            title={featuredVideo?.title || "Loading..."}
                            poster="maxresdefault"
                            lazyLoad={true}
                        />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">{featuredVideo?.title || "Loading..."}</h2>
                    <div className="flex gap-4 items-center">
                        <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded">
                            Newest Release
                        </span>
                        <span className="text-gray-500 font-bold text-xs">
                            {featuredVideo && new Date(featuredVideo.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            }).toUpperCase()}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-lg uppercase tracking-widest text-gray-500">Recent Episodes</h4>
                    {recentEpisodes.map((video) => (
                        <div key={video.id} className="flex gap-4 group cursor-pointer">
                            <div className="w-32 h-20 bg-gray-800 rounded shrink-0 overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm leading-snug group-hover:text-blue-500 transition-colors text-white">
                                    {video.title}
                                </h5>
                                <p className="text-[10px] text-gray-500 mt-1 uppercase">
                                    {video.type} • {new Date(video.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={scrollToAllEpisodes}
                        className="mt-4 px-6 py-3 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 transition-all font-bold uppercase tracking-wider text-sm cursor-pointer"
                    >
                        VIEW ALL EPISODES
                    </button>
                </div>
            </div>
        </section>
    );
};
