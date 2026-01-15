import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
   const date = new Date(dateString);
   return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
   });
}

// Extract text from Lexical JSON nodes recursively
function extractLexicalText(node: unknown): string {
   if (!node || typeof node !== "object") return "";
   const n = node as { type?: string; text?: string; children?: unknown[] };
   if (n.type === "text" && typeof n.text === "string") return n.text;
   if (Array.isArray(n.children)) return n.children.map(extractLexicalText).join(" ");
   return "";
}

// Calculate read time (rough estimate: 200 words per minute)
export function calcReadTime(content: unknown): number {
   let text: string;

   if (typeof content === "string") {
      text = content;
   } else if (content && typeof content === "object" && "root" in content) {
      text = extractLexicalText((content as { root: unknown }).root);
   } else {
      return 1;
   }

   const wordCount = text.split(/\s+/).filter(Boolean).length;
   return Math.max(1, Math.ceil(wordCount / 200));
}
