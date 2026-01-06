interface ContentItem {
  id: string;
  type: "livestream" | "roundtable" | "whitepaper";
  title: string;
  date: string;
  episode: string;
  videoUrl: string;
}

export const contentItems: ContentItem[] = [
  // Livestream Tab
  {
    id: "ls-1",
    type: "livestream",
    title: "AthenaX Live Stream: EP.3 Babylon: Making BTC Productive on ETH",
    date: "2025-12-11",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=-6a-3RYUfdY&t=5s",
  },
  {
    id: "ls-2",
    type: "livestream",
    title: "AthenaX Live Stream: EP.2 Katana Network: Yields for Institutions",
    date: "2025-12-04",
    episode: "EP.2",
    videoUrl: "https://www.youtube.com/watch?v=BpDVigcCbho&pp=0gcJCTwKAYcqIYzv",
  },
  {
    id: "ls-3",
    type: "livestream",
    title: "AthenaX Live Stream: EP.1 From Web2 to Web3: Thiru's Journey",
    date: "2025-12-01",
    episode: "EP.1",
    videoUrl: "https://www.youtube.com/watch?v=8aI1PRPNnhY&t=3s",
  },

  // Roundtable Tab
  {
    id: "rt-1",
    type: "roundtable",
    title:
      "AthenaX Roundtable: EP.3 Design That Moves Markets with Airfoil Studio's Phil Hedayatnia",
    date: "2025-11-10",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=VBDvpZbJ3kg&t=6s",
  },
  {
    id: "rt-2",
    type: "roundtable",
    title:
      "AthenaX Roundtable: EP.2 GROWING AI AGENTS WITHIN L2 TEAMS, METIS' TOM NGO",
    date: "2025-11-04",
    episode: "EP.2",
    videoUrl: "https://www.youtube.com/watch?v=NyzgCHvsASM&t=1s",
  },
  {
    id: "rt-3",
    type: "roundtable",
    title:
      "AthenaX Roundtable: EP.1 Exploring the Future of Work with AI and DAOs",
    date: "2025-10-22",
    episode: "EP.1",
    videoUrl: "https://www.youtube.com/watch?v=Task35oO2Us&t=1s",
  },

  // Whitepaper Reading Tab
  {
    id: "wp-1",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.4 World Liberty Financial",
    date: "2025-12-17",
    episode: "EP.4",
    videoUrl: "https://www.youtube.com/watch?v=EwYQt08-0bQ",
  },
  {
    id: "wp-2",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.3 Fusaka Upgrade",
    date: "2025-12-14",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=osueFwsvwgw",
  },
  {
    id: "wp-3",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.2 Aave",
    date: "2025-12-04",
    episode: "EP.2",
    videoUrl: "https://youtu.be/i8cY_pZEWVk?si=yHMFiLeUfUH5BsCR",
  },
  {
    id: "wp-4",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.1 Bitmine",
    date: "2025-12-04",
    episode: "EP.1",
    videoUrl: "https://youtu.be/FziCIcsGO6U?si=A2QZwSA_-g3elnKs",
  },
];
