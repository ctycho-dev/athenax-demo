"use client";

import { useState } from "react";
import { Badge, WindowCard } from "../components/UI";
import { MAX_PITCH_LENGTH } from "@/lib/validation";

export default function Apply() {
   const [formData, setFormData] = useState({
      projectName: "",
      email: "",
      pitch: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<{
      type: "success" | "error";
      message: string;
   } | null>(null);
   const [charCount, setCharCount] = useState(0);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
         const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || "Failed to submit application");
         }

         setSubmitStatus({
            type: "success",
            message: "Application submitted successfully! Check your email for confirmation.",
         });
         setFormData({ projectName: "", email: "", pitch: "" });
         setCharCount(0);
      } catch (error) {
         setSubmitStatus({
            type: "error",
            message:
               error instanceof Error
                  ? error.message
                  : "Failed to submit application. Please try again.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   const handlePitchChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      if (value.length <= MAX_PITCH_LENGTH) {
         setFormData({ ...formData, pitch: value });
         setCharCount(value.length);
      }
   };

   return (
      <div className="max-w-2xl mx-auto">
         <div className="mb-8 text-center">
            <Badge text="Status: Applications Open" color="bg-green-100" />
            <h2
               className="text-5xl mt-4 mb-2"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               Join the Network
            </h2>
            <p className="text-xl text-gray-500">
               Tell us what you&apos;re building. Keep it brief.
            </p>
         </div>

         <WindowCard title="INPUT_TERMINAL" className="bg-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
               {submitStatus && (
                  <div
                     className={`p-4 rounded ${
                        submitStatus.type === "success"
                           ? "bg-green-50 text-green-800 border border-green-200"
                           : "bg-red-50 text-red-800 border border-red-200"
                     }`}
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     {submitStatus.message}
                  </div>
               )}

               <div>
                  <label
                     className="block text-sm font-bold mb-2"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     PROJECT_NAME
                  </label>
                  <input
                     type="text"
                     value={formData.projectName}
                     onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                     required
                     className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                     placeholder="e.g. Nouns Space Program"
                  />
               </div>
               <div>
                  <label
                     className="block text-sm font-bold mb-2"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     CONTACT_EMAIL
                  </label>
                  <input
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     required
                     className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                     placeholder="you@builder.xyz"
                  />
               </div>
               <div>
                  <label
                     className="block text-sm font-bold mb-2"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                  >
                     THE_PITCH ({charCount}/{MAX_PITCH_LENGTH} CHARS)
                  </label>
                  <textarea
                     rows={4}
                     value={formData.pitch}
                     onChange={handlePitchChange}
                     required
                     className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                     style={{ fontFamily: "var(--font-vt323), monospace" }}
                     placeholder="What are you building and why does it matter?"
                  ></textarea>
               </div>
               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-system btn-primary justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
               </button>
            </form>
         </WindowCard>
      </div>
   );
}
