"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { ArrowRight, Bell, Database, Cpu } from "lucide-react";
import { useSearchParams } from "next/navigation";
import MailServerPanel from "@/components/MailServerPanel";
import WindowCard from "@/components/WindowCard";
import { Button } from "@/components/ui/Button";
import ListCard from "@/components/ListCard";
import { DISPATCHES, type Category } from "@/data/newsletter";
import { Badge as RootBadge } from "@/components/UI";
import { formatDate } from "@/lib/utils";
import { type Article } from "@/lib/api";
import EmailSubscription from "@/components/EmailSubscription";

type TabValue = Category | "archive" | "all";

function NewsletterContent() {
   const searchParams = useSearchParams();
   const tabParam = searchParams.get("tab") as TabValue | null;
   const filterParam = searchParams.get("filter") || "all";

   const activeTab = tabParam || "all";
   const activeSubFilter = filterParam;

   const [articles, setArticles] = useState<Article[]>([]);
   const [articlesLoading, setArticlesLoading] = useState(false);
   const [researchItems, setResearchItems] = useState<Article[]>([]);
   const [researchLoading, setResearchLoading] = useState(false);

   const hasFetchedArticles = useRef(false);
   const hasFetchedResearch = useRef(false);

   // Fetch articles when archive or all tab is selected
   useEffect(() => {
      const fetchArticlesData = async () => {
         if ((activeTab === "all" || activeTab === "archive") && !hasFetchedArticles.current) {
            hasFetchedArticles.current = true;
            setArticlesLoading(true);
            const res = await fetch("https://admin.athenax.co/api/articles?select[title]=true&select[slug]=true&select[publishedAt]=true&limit=1000&where[_status][equals]=published");
            const data = await res.json();
            const articlesData = data.docs || data || [];
            setArticles(articlesData);
            setArticlesLoading(false);
         }
      };

      fetchArticlesData();
   }, [activeTab]);

   // Fetch research when research or all tab is selected
   useEffect(() => {
      const fetchResearchData = async () => {
         if ((activeTab === "all" || activeTab === "research") && !hasFetchedResearch.current) {
            hasFetchedResearch.current = true;
            setResearchLoading(true);
            const res = await fetch("https://admin.athenax.co/api/research?select[title]=true&select[slug]=true&select[tag]=true&select[publishedAt]=true&limit=1000&where[_status][equals]=published");
            const data = await res.json();
            const researchData = data.docs || data || [];
            setResearchItems(researchData);
            setResearchLoading(false);
         }
      };

      fetchResearchData();
   }, [activeTab]);

   const filteredDispatches = useMemo(() => {
      let filtered = DISPATCHES;

      // Filter by main category (only for "all" tab since research uses real data)
      if (activeTab !== "all" && activeTab !== "research" && activeTab !== "archive") {
         filtered = filtered.filter((d) => d.category === activeTab);
      }

      return filtered;
   }, [activeTab, activeSubFilter]);

   // Filter research items based on sub-filter (tag filtering)
   const filteredResearchItems = useMemo(() => {
      if (activeSubFilter === "all") {
         return researchItems;
      }
      return researchItems.filter((item) => item.tag === activeSubFilter);
   }, [researchItems, activeSubFilter]);

   // Combined items for "all" tab - merges articles and research, sorted by date
   const allItems = useMemo(() => {
      const combined = [
         ...articles.map((item) => ({ ...item, type: "essay" as const })),
         ...researchItems.map((item) => ({ ...item, type: "research" as const })),
      ];

      // Sort by publishedAt descending (newest first)
      return combined.sort((a, b) => {
         return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
   }, [articles, researchItems]);

   const updateTab = (tab: TabValue) => {
      const url = new URL(window.location.href);
      if (tab === "all") {
         url.searchParams.delete("tab");
      } else {
         url.searchParams.set("tab", tab);
      }
      url.searchParams.delete("filter");
      window.history.pushState({}, "", url.toString());
   };

   const updateFilter = (filter: string) => {
      const url = new URL(window.location.href);
      if (filter === "all") {
         url.searchParams.delete("filter");
      } else {
         url.searchParams.set("filter", filter);
      }
      window.history.pushState({}, "", url.toString());
   };

   return (
      <div className="space-y-12">
         {/* HERO SECTION */}
         <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
               <RootBadge text="/root/newsletter" color="bg-green-100" />
               <h1
                  className="text-5xl md:text-7xl leading-tight text-gray-900 mb-4 uppercase"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  AthenaX <br /> <span className="text-accent-red">Broadcast</span>
               </h1>
               <p className="text-xl font-bold mb-6 tracking-tight">
                  Signals from the frontier of onchain culture.
               </p>
               <p className="text-gray-700 opacity-80 mb-8 max-w-lg leading-relaxed">
                  The official weekly dispatch covering governance experiments, treasury
                  deployments, builder updates, and deep-dives into public goods funding.
               </p>
               <Button
                  onClick={() =>
                     document
                        .getElementById("subscribe-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="gap-2"
               >
                  Subscribe to Signals <ArrowRight size={20} />
               </Button>
            </div>
            <div className="md:col-span-5">
               <MailServerPanel />
            </div>
         </section>

         {/* EMAIL SUBSCRIPTION MODULE */}
         <EmailSubscription />

         {/* RECENT DISPATCHES WITH TABS */}
         <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b-2 border-gray-900 pb-2 gap-4">
               <h2
                  className="text-4xl uppercase"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Recent Broadcasts
               </h2>

               <nav className="flex gap-4 overflow-x-auto py-2 md:pb-0">
                  <button
                     onClick={() => updateTab("all")}
                     className={`font-vt323 text-xs font-bold uppercase px-3 py-1.5 border-2 border-gray-900 transition-all rounded-md cursor-pointer ${
                        activeTab === "all"
                           ? "bg-accent-red text-white shadow-[2px_2px_0px_0px_#1f2937]"
                           : "bg-white hover:bg-gray-50"
                     }`}
                  >
                     [all]
                  </button>
                  <button
                     onClick={() => updateTab("research")}
                     className={`font-vt323 text-xs font-bold uppercase px-3 py-1.5 border-2 border-gray-900 transition-all rounded-md cursor-pointer ${
                        activeTab === "research"
                           ? "bg-accent-red text-white shadow-[2px_2px_0px_0px_#1f2937]"
                           : "bg-white hover:bg-gray-50"
                     }`}
                  >
                     [research]
                  </button>
                  <button
                     onClick={() => updateTab("archive")}
                     className={`font-vt323 text-xs font-bold uppercase px-3 py-1.5 border-2 border-gray-900 bg-accent-yellow hover:-translate-y-0.5 transition-all rounded-md ${
                        activeTab === "archive" ? "shadow-[2px_2px_0px_0px_#1f2937]" : ""
                     }`}
                  >
                     [archive]
                  </button>
               </nav>
            </div>

            {/* Sub-filter tags for research tab only */}
            {activeTab === "research" && (
               <div className="flex gap-2 mb-6 flex-wrap">
                  <button
                     onClick={() => updateFilter("all")}
                     className={`font-vt323 text-xs font-bold uppercase px-3 py-1 border border-gray-300 rounded-full transition-all cursor-pointer ${
                        activeSubFilter === "all"
                           ? "bg-gray-900 text-white border-gray-900"
                           : "bg-white text-gray-600 hover:bg-gray-100"
                     }`}
                  >
                     All
                  </button>
                  <button
                     onClick={() => updateFilter("governance")}
                     className={`font-vt323 text-xs font-bold uppercase px-3 py-1 border border-gray-300 rounded-full transition-all cursor-pointer ${
                        activeSubFilter === "governance"
                           ? "bg-accent-yellow text-gray-900 border-gray-900"
                           : "bg-white text-gray-600 hover:bg-gray-100"
                     }`}
                  >
                     Governance
                  </button>
                  <button
                     onClick={() => updateFilter("treasury")}
                     className={`font-vt323 text-xs font-bold uppercase px-3 py-1 border border-gray-300 rounded-full transition-all cursor-pointer ${
                        activeSubFilter === "treasury"
                           ? "bg-accent-blue text-gray-900 border-gray-900"
                           : "bg-white text-gray-600 hover:bg-gray-100"
                     }`}
                  >
                     Treasury
                  </button>
               </div>
            )}

            {/* Content area - show all items, research items, archive articles, or dispatches */}
            {activeTab === "archive" ? (
               <div className="space-y-4">
                  {articlesLoading ? (
                     <div className="text-center py-12">
                        <p
                           className="text-xl text-gray-400"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           LOADING_ARCHIVE...
                        </p>
                     </div>
                  ) : articles.length > 0 ? (
                     articles.map((article) => (
                        <ListCard
                           key={article.id}
                           href={`newsletter/archive/${article.slug}`}
                           title={article.title}
                           date={formatDate(article.publishedAt)}
                           category="Essay"
                           icon="file"
                        />
                     ))
                  ) : (
                     <div className="text-center py-12">
                        <p
                           className="text-xl text-gray-400"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           NO_ARCHIVE_FOUND
                        </p>
                     </div>
                  )}
               </div>
            ) : activeTab === "research" ? (
               <div className="space-y-4">
                  {researchLoading ? (
                     <div className="text-center py-12">
                        <p
                           className="text-xl text-gray-400"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           LOADING_RESEARCH...
                        </p>
                     </div>
                  ) : filteredResearchItems.length > 0 ? (
                     filteredResearchItems.map((item) => (
                        <ListCard
                           key={item.id}
                           href={`newsletter/research/${item.slug}`}
                           title={item.title}
                           date={formatDate(item.publishedAt)}
                           category={item.tag || "Research"}
                           categoryVariant="badge"
                           icon="file"
                        />
                     ))
                  ) : (
                     <div className="text-center py-12">
                        <p
                           className="text-xl text-gray-400"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           NO_RESEARCH_FOUND
                        </p>
                     </div>
                  )}
               </div>
            ) : activeTab === "all" ? (
               <div className="space-y-4">
                  {articlesLoading || researchLoading ? (
                     <div className="text-center py-12">
                        <p
                           className="text-xl text-gray-400"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           LOADING_BROADCASTS...
                        </p>
                     </div>
                  ) : allItems.length > 0 ? (
                     allItems.map((item) => (
                        <ListCard
                           key={item.id}
                           href={
                              item.type === "essay"
                                 ? `newsletter/archive/${item.slug}`
                                 : `newsletter/research/${item.slug}`
                           }
                           title={item.title}
                           date={formatDate(item.publishedAt)}
                           category={item.type === "essay" ? "Essay" : (item.tag || "Research")}
                           categoryVariant={item.type === "essay" ? "text" : "badge"}
                           icon="file"
                        />
                     ))
                  ) : (
                     <div className="text-center py-12">
                        <p
                           className="text-xl text-gray-400"
                           style={{ fontFamily: "var(--font-vt323), monospace" }}
                        >
                           NO_BROADCASTS_FOUND
                        </p>
                     </div>
                  )}
               </div>
            ) : (
               <div className="space-y-4">
                  {filteredDispatches.map((post) => (
                     <ListCard
                        key={post.id}
                        href={`/newsletter/${post.slug}`}
                        title={post.title}
                        date={post.date}
                        category={post.category}
                        categoryVariant="badge"
                        icon="mail"
                     />
                  ))}
               </div>
            )}
         </section>

         {/* WHAT YOU'LL RECEIVE MODULES */}
         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModuleCard
               title="MODULE_01: GOVERNANCE"
               icon={Bell}
               color="bg-accent-yellow"
               heading="Decision Analytics"
               items={["DAO_Analysis", "Proposal_Logs"]}
            />
            <ModuleCard
               title="MODULE_02: TREASURY"
               icon={Database}
               color="bg-accent-blue"
               heading="Capital Flows"
               items={["Onchain_Data", "Spend_Audits"]}
            />
            <ModuleCard
               title="MODULE_03: RESEARCH"
               icon={Cpu}
               color="bg-red-200"
               heading="Ecosystem Maps"
               items={["Funding_Insights", "Meta_Theory"]}
            />
         </section>

         {/* CTA FOOTER STRIP */}
         <section className="w-full bg-accent-yellow border-4 border-gray-900 p-10 shadow-[8px_8px_0px_0px_#1f2937] flex flex-col items-center text-center space-y-6 rounded-xl">
            <h2
               className="text-4xl md:text-5xl uppercase leading-none font-medium"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               Public Goods Need <br /> Public Signals.
            </h2>
            <Button
               className="bg-gray-900 text-white hover:bg-gray-800"
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
               Join the Broadcast <ArrowRight size={20} />
            </Button>
         </section>
      </div>
   );
}

// --- SUB-COMPONENTS ---

interface ModuleCardProps {
   title: string;
   icon: React.ElementType;
   color: string;
   heading: string;
   items: string[];
}

const ModuleCard = ({ title, icon: Icon, color, heading, items }: ModuleCardProps) => (
   <WindowCard title={title} icon="folder">
      <div
         className={`mb-4 ${color} w-10 h-10 flex items-center justify-center border-2 border-gray-900 rounded-md`}
      >
         <Icon size={20} />
      </div>
      <h4 className="font-bold mb-2 uppercase">{heading}</h4>
      <div className="font-vt323 text-sm space-y-1 text-accent-red">
         {items.map((item, i) => (
            <p key={i}>&gt; {item}</p>
         ))}
      </div>
   </WindowCard>
);

export default function NewsletterPage() {
   return (
      <Suspense fallback={
         <div className="space-y-12">
            <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
         </div>
      }>
         <NewsletterContent />
      </Suspense>
   );
}
