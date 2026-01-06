export interface ContentItem {
  type: "livestream" | "roundtable" | "whitepaper";
  date: string;
  episode: string;
  videoUrl: string;
}

export const contentItems: ContentItem[] = [
  // Livestream Tab
  {
    type: "livestream",
    date: "2025-12-11",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=-6a-3RYUfdY&t=5s",
  },
  {
    type: "livestream",
    date: "2025-12-04",
    episode: "EP.2",
    videoUrl: "https://www.youtube.com/watch?v=BpDVigcCbho&pp=0gcJCTwKAYcqIYzv",
  },
  {
    type: "livestream",
    date: "2025-12-01",
    episode: "EP.1",
    videoUrl: "https://www.youtube.com/watch?v=8aI1PRPNnhY&t=3s",
  },

  // Roundtable Tab
  {
    type: "roundtable",
    date: "2025-11-10",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=VBDvpZbJ3kg&t=6s",
  },
  {
    type: "roundtable",
    date: "2025-11-04",
    episode: "EP.2",
    videoUrl: "https://www.youtube.com/watch?v=NyzgCHvsASM&t=1s",
  },
  {
    type: "roundtable",
    date: "2025-10-22",
    episode: "EP.1",
    videoUrl: "https://www.youtube.com/watch?v=Task35oO2Us&t=1s",
  },

  // Whitepaper Reading Tab
  {
    type: "whitepaper",
    date: "2025-12-17",
    episode: "EP.4",
    videoUrl: "https://www.youtube.com/watch?v=EwYQt08-0bQ",
  },
  {
    type: "whitepaper",
    date: "2025-12-14",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=osueFwsvwgw",
  },
  {
    type: "whitepaper",
    date: "2025-12-04",
    episode: "EP.2",
    videoUrl: "https://youtu.be/i8cY_pZEWVk?si=yHMFiLeUfUH5BsCR",
  },
  {
    type: "whitepaper",
    date: "2025-12-04",
    episode: "EP.1",
    videoUrl: "https://youtu.be/FziCIcsGO6U?si=A2QZwSA_-g3elnKs",
  },
];
