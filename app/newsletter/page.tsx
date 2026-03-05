"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Bell, Database, Cpu, ShieldCheck } from "lucide-react";
import MailServerPanel from "@/components/MailServerPanel";
import WindowCard from "@/components/WindowCard";
import { Button } from "@/components/ui/Button";
import ListCard from "@/components/ListCard";
import { DISPATCHES, CATEGORIES, type Category } from "@/data/newsletter";
import { Badge as RootBadge } from "@/components/UI";

export default function NewsletterPage() {
   const [activeCategory, setActiveCategory] = useState<Category>("all");
   const [email, setEmail] = useState("");
   const [agreed, setAgreed] = useState(false);
   const [status, setStatus] = useState<"IDLE" | "PROCESSING" | "SUCCESS">("IDLE");
   const [errorMessage, setErrorMessage] = useState("");

   const filteredDispatches = useMemo(() => {
      if (activeCategory === "all") return DISPATCHES;
      return DISPATCHES.filter((d) => d.category === activeCategory);
   }, [activeCategory]);

   const handleSubscribe = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !agreed) return;

      setStatus("PROCESSING");
      setErrorMessage("");

      try {
         const response = await fetch("/api/newsletter-subscribe", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, agreed }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || "Failed to subscribe");
         }

         setStatus("SUCCESS");
         setEmail("");
         setAgreed(false);
         // Reset to IDLE after 3 seconds
         setTimeout(() => setStatus("IDLE"), 3000);
      } catch (error) {
         setStatus("IDLE");
         setErrorMessage(
            error instanceof Error ? error.message : "Failed to subscribe. Please try again."
         );
      }
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
         <section id="subscribe-form" className="flex justify-center py-8">
            <div className="w-full max-w-2xl">
               <WindowCard title="INPUT_TERMINAL" icon="terminal">
                  <form onSubmit={handleSubscribe} className="space-y-6">
                     {errorMessage && (
                        <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded font-vt323 text-sm">
                           {errorMessage}
                        </div>
                     )}
                     {status === "SUCCESS" && (
                        <div className="p-3 bg-green-50 text-green-800 border border-green-200 rounded font-vt323 text-sm">
                           Subscription confirmed! Check your inbox.
                        </div>
                     )}
                     <div>
                        <label className="block font-vt323 text-xl uppercase mb-2">
                           EMAIL_ADDRESS
                        </label>
                        <input
                           type="email"
                           placeholder="ENTER_IDENTITY@PROXY.COM"
                           className="w-full bg-cream border-2 border-gray-900 p-4 font-vt323 focus:outline-none focus:ring-2 focus:ring-accent-red transition-all rounded-md"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                           type="checkbox"
                           className="sr-only"
                           checked={agreed}
                           onChange={() => setAgreed(!agreed)}
                        />
                        <div
                           className={`w-6 h-6 border-2 border-gray-900 transition-all flex items-center justify-center rounded ${
                              agreed ? "bg-accent-red" : "bg-white shadow-[2px_2px_0px_0px_#1f2937]"
                           }`}
                        >
                           {agreed && <ShieldCheck size={14} className="text-white" />}
                        </div>
                        <span className="font-vt323 text-sm uppercase opacity-70">
                           I agree to receive AthenaX communications.
                        </span>
                     </label>
                     <Button
                        type="submit"
                        className="w-full justify-center"
                        disabled={status === "PROCESSING"}
                     >
                        {status === "IDLE" && "INITIATE_SUBSCRIPTION"}
                        {status === "PROCESSING" && "TRANSMITTING..."}
                        {status === "SUCCESS" && "SUBSCRIPTION_CONFIRMED"}
                     </Button>
                  </form>
               </WindowCard>
            </div>
         </section>

         {/* RECENT DISPATCHES WITH TABS */}
         <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-2 border-gray-900 pb-2 gap-4">
               <h2
                  className="text-4xl uppercase"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Recent Broadcasts
               </h2>

               <nav className="flex gap-4 overflow-x-auto py-2 md:pb-0">
                  {CATEGORIES.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`font-vt323 text-xs font-bold uppercase px-3 py-1.5 border-2 border-gray-900 transition-all rounded-md cursor-pointer ${
                           activeCategory === cat
                              ? "bg-accent-red text-white shadow-[2px_2px_0px_0px_#1f2937]"
                              : "bg-white hover:bg-gray-50"
                        }`}
                     >
                        [{cat}]
                     </button>
                  ))}
                  <Link
                     href="/newsletter/archive"
                     className="font-vt323 text-xs font-bold uppercase px-3 py-1.5 border-2 border-gray-900 bg-accent-yellow hover:-translate-y-0.5 transition-all rounded-md"
                  >
                     [Archive]
                  </Link>
               </nav>
            </div>

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
