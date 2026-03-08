"use client";

import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import WindowCard from "@/components/WindowCard";
import { Button } from "@/components/ui/Button";

export default function EmailSubscription() {
   const [email, setEmail] = useState("");
   const [agreed, setAgreed] = useState(false);
   const [status, setStatus] = useState<"IDLE" | "PROCESSING" | "SUCCESS">("IDLE");
   const [errorMessage, setErrorMessage] = useState("");

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
   );
}
