export interface ContentItem {
  type: "livestream" | "roundtable" | "whitepaper";
  date: string;
  videoUrl: string;
}

export const contentItems: ContentItem[] = [
  // Livestream Tab
  {
    type: "livestream",
    date: "2025-12-01",
    videoUrl: "https://youtu.be/8aI1PRPNnhY?si=Wr0yw3Jb-6HDLPUK",
  },
  {
    type: "livestream",
    date: "2025-12-04",
    videoUrl: "https://youtu.be/BpDVigcCbho?si=YCedD6ltlNFDBWvO",
  },
  {
    type: "livestream",
    date: "2025-12-11",
    videoUrl: "https://youtu.be/-6a-3RYUfdY?si=lbvTNSoP_SdUDe7W",
  },
  {
    type: "livestream",
    date: "2025-12-22",
    videoUrl: "https://youtu.be/GdldsMZ58Hw?si=M0MvHoGmTZdd2DCF",
  },
  {
    type: "livestream",
    date: "2025-12-26",
    videoUrl: "https://youtu.be/Ol7Pq3eV_Eg?si=98gJvKvu-TwnAHwt",
  },

  // Roundtable Tab
  {
    type: "roundtable",
    date: "2025-10-22",
    videoUrl: "https://youtu.be/Task35oO2Us?si=sGSRPPzGF7avmfh4",
  },
  {
    type: "roundtable",
    date: "2025-11-04",
    videoUrl: "https://youtu.be/NyzgCHvsASM?si=oSLs39Xzqz_E63sZ",
  },
  {
    type: "roundtable",
    date: "2025-11-10",
    videoUrl: "https://youtu.be/VBDvpZbJ3kg?si=6wFQYQZkqPwxxrdF",
  },

  // Whitepaper Reading Tab
  {
    type: "whitepaper",
    date: "2025-12-04",
    videoUrl: "https://youtu.be/FziCIcsGO6U?si=Azmo8k_9UR5NZLQN",
  },
  {
    type: "whitepaper",
    date: "2025-12-04",
    videoUrl: "https://youtu.be/i8cY_pZEWVk?si=dw8p9rDN6xUUpq5_",
  },
  {
    type: "whitepaper",
    date: "2025-12-14",
    videoUrl: "https://youtu.be/osueFwsvwgw?si=3Kd_VlQ4-2sJ9Y3F",
  },
  {
    type: "whitepaper",
    date: "2025-12-17",
    videoUrl: "https://youtu.be/EwYQt08-0bQ?si=4cUPXwhcVI1jwEsL",
  },
  {
    type: "whitepaper",
    date: "2026-01-04",
    videoUrl: "https://youtu.be/A2RLho6Qy2M?si=7qIyafRlm5ZcC7kj",
  },
];
