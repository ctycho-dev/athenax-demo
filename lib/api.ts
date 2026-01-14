export interface Article {
   id: number;
   title: string;
   slug: string;
   createdAt: string;
}

export interface FullArticle extends Article {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   content: any;
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

const API_BASE_URL = "https://admin.athenax.co/api";

const REVALIDATE_INTERVAL = 1 * 60 * 60; // 1 hour

const defaultParams = {
   limit: "1000",
   "where[_status][equals]": "published",
};

function buildUrl(path: string, extraParams: Record<string, string> = {}) {
   const params = new URLSearchParams({
      ...defaultParams,
      ...extraParams,
   });

   return `${API_BASE_URL}${path}?${params.toString()}`;
}

async function fetchFromAPI<T>(url: string): Promise<T[]> {
   try {
      const res = await fetch(url, {
         cache: "force-cache",
         next: { revalidate: REVALIDATE_INTERVAL },
      });

      if (!res.ok) {
         throw new Error(`Failed to fetch from ${url}`);
      }

      const data = await res.json();

      if (Array.isArray(data)) return data;
      if (data.docs && Array.isArray(data.docs)) return data.docs;
      if (data.data && Array.isArray(data.data)) return data.data;

      console.error("Unexpected API response structure:", data);
      return [];
   } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
      return [];
   }
}

export async function getArticles(): Promise<Article[]> {
   const url = buildUrl("/articles", {
      "select[title]": "true",
      "select[slug]": "true",
      "select[createdAt]": "true",
   });
   return fetchFromAPI<Article>(url);
}

export async function getVideos(): Promise<Video[]> {
   const url = buildUrl("/videos", {
      "select[title]": "true",
      "select[videoType]": "true",
      "select[embedUrl]": "true",
      "select[originDate]": "true",
      "select[thumbnailUrl]": "true",
   });
   return fetchFromAPI<Video>(url);
}

export async function getArticleBySlug(slug: string): Promise<FullArticle | null> {
   const url = buildUrl("/articles", {
      "where[slug][equals]": slug,
   });
   const articles = await fetchFromAPI<FullArticle>(url);
   return articles[0] ?? null;
}
