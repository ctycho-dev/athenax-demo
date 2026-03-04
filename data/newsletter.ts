export interface ContentSection {
   heading: string;
   body: string;
}

export interface DispatchContent {
   sections: ContentSection[];
   metrics: string[];
}

export interface Dispatch {
   id: string;
   slug: string;
   title: string;
   date: string;
   category: string;
   summary: string;
   content: DispatchContent;
}

export const DISPATCHES: Dispatch[] = [
   {
      id: "week-042",
      slug: "week-042-optimistic-funding",
      title: "Week 042: Optimistic Funding in Action",
      date: "MAR 01, 2025",
      category: "governance",
      summary: "Exploring the latest results from the Retroactive Public Goods Funding rounds.",
      content: {
         sections: [
            {
               heading: "Governance Signal",
               body: "The experiment in optimistic funding has reached a critical milestone. By decoupling the evaluation of impact from the timing of the grant, we have seen a 40% increase in long-term project sustainability. Builders are no longer optimizing for the 'pitch,' but for the actual deployment of public utility.",
            },
            {
               heading: "The Impact Graph",
               body: "We are tracking the velocity of code contributions across the ecosystem. The data suggests that treasury-backed projects are outperforming VC-backed counterparts in terms of documentation quality and community fork-ability.",
            },
         ],
         metrics: ["> 140 ETH deployed", "> 3 new builder grants", "> 82% quorum reached", "> STATUS: OPTIMISTIC"],
      },
   },
   {
      id: "week-041",
      slug: "week-041-treasury-thesis",
      title: "Week 041: The Treasury Thesis",
      date: "FEB 22, 2025",
      category: "treasury",
      summary: "How AthenaX manages its onchain assets to ensure perpetual builder support.",
      content: {
         sections: [
            {
               heading: "Resource Allocation",
               body: "Our current treasury mix has been rebalanced to include a higher percentage of protocol-owned liquidity. This ensures that even in periods of low volatility, the DAO can continue to emit signals to its core builders.",
            },
         ],
         metrics: ["> $2.4M AUM", "> 12% yield captured", "> 0% liquidation risk"],
      },
   },
   {
      id: "week-040",
      slug: "week-040-culture-infrastructure",
      title: "Week 040: Culture as Infrastructure",
      date: "FEB 15, 2025",
      category: "research",
      summary: "A deep dive into why social coordination is the ultimate scaling solution.",
      content: {
         sections: [
            {
               heading: "The Social Layer",
               body: "Infrastructure is not just code; it's the shared expectations of the users. This dispatch analyzes the last six months of governance discourse to find patterns in successful social coordination.",
            },
         ],
         metrics: ["> 12 research papers", "> 5 community calls", "> ∞ coordination"],
      },
   },
];

export const CATEGORIES = ["all", "governance", "treasury", "research"] as const;
export type Category = (typeof CATEGORIES)[number];

export function getDispatchBySlug(slug: string): Dispatch | undefined {
   return DISPATCHES.find((d) => d.slug === slug);
}

export function getDispatchesByCategory(category: Category): Dispatch[] {
   if (category === "all") return DISPATCHES;
   return DISPATCHES.filter((d) => d.category === category);
}
