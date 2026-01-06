interface ContentItem {
  id: string;
  type: "livestream" | "roundtable" | "whitepaper";
  title: string;
  description: string;
  thumbnail: string;
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
    description:
      "Babylon is making Bitcoin productive. In our latest AthenaX Live Stream, Jenks Guo, DevRel at Babylon Labs, breaks down BTC Fi, trustless vaults, and how Babylon is activating millions in idle BTC.",
    thumbnail: "/thumbnails/vid1.png",
    date: "2025-12-11",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=-6a-3RYUfdY&t=5s",
  },
  {
    id: "ls-2",
    type: "livestream",
    title: "AthenaX Live Stream: EP.2 Katana Network: Yields for Institutions",
    description:
      "Katana is trying to make DeFi yields an sustainable model. Head of Tokenomics & Mechanism Design at @katana walks through Katana's tokenomics and flywheel mechanics with us. KAT, vKAT, avKAT, and how to design tokens that survive more than one cycle.",
    thumbnail: "/thumbnails/vid2.png",
    date: "2025-12-04",
    episode: "EP.2",
    videoUrl: "https://www.youtube.com/watch?v=BpDVigcCbho&pp=0gcJCTwKAYcqIYzv",
  },
  {
    id: "ls-3",
    type: "livestream",
    title: "AthenaX Live Stream: EP.1 From Web2 to Web3: Thiru's Journey",
    description:
      "Thiru's story isn't about code. It's about surviving, rebuilding, and proving that Web3 is bigger than hype. We follow his journey from a gap year in India to winning dozens of hackathons, retiring his parents at 21, and stepping into DevRel for Metis.",
    thumbnail: "/thumbnails/vid3.png",
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
    description:
      "In this episode, we sit down with Phil, co-founder of Airfoil, a crypto-native design studio behind hundreds of launches across Solana and beyond. We unpack what actually moves the needle when most teams obsess over features and forget the story users need to hear first.",
    thumbnail: "/thumbnails/vid3.png",
    date: "2025-11-10",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=VBDvpZbJ3kg&t=6s",
  },
  {
    id: "rt-2",
    type: "roundtable",
    title:
      "AthenaX Roundtable: EP.2 GROWING AI AGENTS WITHIN L2 TEAMS, METIS' TOM NGO",
    description:
      "In this episode, we sit down with Tom, CEO of Metis, to discuss how the project is moving from a typical Ethereum Layer 2 to an AI-native blockchain ecosystem and what it really means beyond buzzwords.",
    thumbnail: "/thumbnails/vid2.png",
    date: "2025-11-04",
    episode: "EP.2",
    videoUrl: "https://www.youtube.com/watch?v=NyzgCHvsASM&t=1s",
  },
  {
    id: "rt-3",
    type: "roundtable",
    title:
      "AthenaX Roundtable: EP.1 Exploring the Future of Work with AI and DAOs",
    description:
      "In this episode, Alex Murray discusses his research on the impact of emerging technologies, particularly AI and blockchain, on organizational structures and society. He explores the evolution of crowdfunding and the role of community engagement in Web3.",
    thumbnail: "/thumbnails/vid1.png",
    date: "2025-10-22",
    episode: "EP.1",
    videoUrl: "https://www.youtube.com/watch?v=Task35oO2Us&t=1s",
  },

  // Whitepaper Reading Tab
  {
    id: "wp-1",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.4 World Liberty Financial",
    description:
      "Is World Liberty Financial the Trump family's peace-making vehicle? This is the Whitepaper by AthenaX EP.4, where we're strictly educational and entertainment, and non-financial advice.",
    thumbnail: "/thumbnails/vid1.png",
    date: "2025-12-17",
    episode: "EP.4",
    videoUrl: "https://www.youtube.com/watch?v=EwYQt08-0bQ",
  },
  {
    id: "wp-2",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.3 Fusaka Upgrade",
    description:
      "In this episode, we break down the Fusaka upgrade into three questions: 1. What does the Fusaka upgrade mean for everybody? 2. Which protocols have rolled out the new Ethereum upgrade? 3. What are some of the possible metas that could come out of this?",
    thumbnail: "/thumbnails/vid2.png",
    date: "2025-12-14",
    episode: "EP.3",
    videoUrl: "https://www.youtube.com/watch?v=osueFwsvwgw",
  },
  {
    id: "wp-3",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.2 Aave",
    description:
      "Just use Aave. But why? In this episode, we break down how Aave pulled in 12.8M revenue in Nov 2025 and how V4, RWAs, eight years of perfect execution and innovation are shaping the next era of on-chain liquidity.",
    thumbnail: "/thumbnails/vid3.png",
    date: "2025-12-04",
    episode: "EP.2",
    videoUrl: "https://youtu.be/i8cY_pZEWVk?si=yHMFiLeUfUH5BsCR",
  },
  {
    id: "wp-4",
    type: "whitepaper",
    title: "Whitepaper by AthenaX: EP.1 Bitmine",
    description:
      "You've probably heard about the MicroStrategy of Ethereum. Bitmine. In this episode, we unpack ‪@BitMNR‬ 's plan to accumulate 5% of all ETH, why they're buying ETH every week, in every market condition, and how's that even possible?",
    thumbnail: "/thumbnails/vid1.png",
    date: "2025-12-04",
    episode: "EP.1",
    videoUrl: "https://youtu.be/FziCIcsGO6U?si=A2QZwSA_-g3elnKs",
  },
];
