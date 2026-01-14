const API_BASE_URL = "https://admin.athenax.co/api";

export interface Article {
   id: number;
   title: string;
   slug: string;
   createdAt: string;
}

export interface FullArticle extends Article {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   content: any;
   _status: string;
}

export type VideoType = "live_stream" | "whitepaper_reading" | "roundtable";

export interface Video {
   id: number;
   title: string;
   videoType: VideoType;
   embedUrl: string;
   originDate: string;
   thumbnailUrl: string;
}

async function fetchFromAPI<T>(endpoint: string): Promise<T[]> {
   try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
         cache: "no-store",
      });

      if (!res.ok) {
         throw new Error(`Failed to fetch from ${endpoint}`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
         return data;
      } else if (data.docs && Array.isArray(data.docs)) {
         return data.docs;
      } else if (data.data && Array.isArray(data.data)) {
         return data.data;
      }

      console.error("Unexpected API response structure:", data);
      return [];
   } catch (error) {
      console.error(`Error fetching from ${endpoint}:`, error);
      return [];
   }
}

export async function getArticles(): Promise<Article[]> {
   return fetchFromAPI<Article>(
      "/articles?select[title]=true&select[slug]=true&select[createdAt]=true"
   );
}

export async function getVideos(): Promise<Video[]> {
   return fetchFromAPI<Video>(
      "/videos?limit=100&select[title]=true&select[videoType]=true&select[embedUrl]=true&select[originDate]=true&select[thumbnailUrl]=true"
   );
}

export async function getArticleBySlug(slug: string): Promise<FullArticle | null> {
   try {
      const res = await fetch(`${API_BASE_URL}/articles?where[slug][equals]=${slug}`, {
         cache: "no-store",
      });

      if (!res.ok) {
         return null;
      }

      const data = await res.json();

      if (data.docs && data.docs.length > 0) {
         return data.docs[0];
      }

      return null;
   } catch (error) {
      console.error("Error fetching article:", error);
      return null;
   }
}

export async function getAllArticleSlugs(): Promise<string[]> {
   const articles = await fetchFromAPI<Article>("/articles?select[slug]=true&limit=1000");
   return articles.map((article) => article.slug);
}
