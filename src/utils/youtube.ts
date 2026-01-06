interface YouTubeOEmbedData {
  title: string;
  author_name: string;
  author_url: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
}

// Cache to store fetched data to avoid repeated API calls
const youtubeDataCache = new Map<string, YouTubeOEmbedData>();

/**
 * Extract YouTube video ID from various URL formats
 */
export const extractYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
  return match ? match[1] : "";
};

/**
 * Fetch YouTube video metadata using the free oEmbed API
 * No API key required!
 */
export const fetchYouTubeData = async (
  videoUrl: string
): Promise<YouTubeOEmbedData | null> => {
  try {
    // Check cache first
    if (youtubeDataCache.has(videoUrl)) {
      return youtubeDataCache.get(videoUrl)!;
    }

    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(
      videoUrl
    )}&format=json`;

    const response = await fetch(oembedUrl);

    if (!response.ok) {
      console.error("Failed to fetch YouTube data:", response.statusText);
      return null;
    }

    const data: YouTubeOEmbedData = await response.json();

    // Cache the result
    youtubeDataCache.set(videoUrl, data);

    return data;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
};

/**
 * Get YouTube video title from URL
 */
export const getYouTubeTitle = async (videoUrl: string): Promise<string> => {
  const data = await fetchYouTubeData(videoUrl);
  return data?.title || "Untitled Video";
};

/**
 * Get YouTube video thumbnail URL
 */
export const getYouTubeThumbnail = async (
  videoUrl: string
): Promise<string> => {
  const data = await fetchYouTubeData(videoUrl);
  return data?.thumbnail_url || "";
};

/**
 * Get high-quality YouTube thumbnail URL directly (no API call needed)
 */
export const getYouTubeThumbnailUrl = (videoUrl: string): string => {
  const videoId = extractYouTubeId(videoUrl);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};
