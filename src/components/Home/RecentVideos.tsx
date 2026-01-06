import { Link } from "react-router-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { contentItems } from "../../data/videos";
import { useYouTubeData } from "../../hooks/useYouTubeData";

export const RecentVideos = () => {
  const allVideosData = useYouTubeData(contentItems);

  // Sort by date (newest first) and get top 4
  const recentVideosData = [...allVideosData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-24 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">Recent Videos</h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              AthenaX TV produces founder-focused programming across chains.
            </p>
          </div>

          <Link to="/tv" className="text-blue-600 font-bold hover:underline">
            See all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentVideosData.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-all"
            >
              <div className="aspect-video bg-gray-100 relative">
                <LiteYouTubeEmbed
                  id={video.id}
                  title={video.title}
                  poster="maxresdefault"
                  lazyLoad={true}
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase rounded">
                    {video.type}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-400 uppercase font-medium">
                  {new Date(video.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
