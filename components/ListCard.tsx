import Link from "next/link";
import { Icon } from "./UI";
import { Mail} from "lucide-react";
import { Badge as RootBadge } from "./UI";

export interface ListCardProps {
   href: string;
   title: string;
   date?: string;
   category?: string;
   categoryVariant?: "text" | "badge";
   icon?: "file" | "folder" | "mail" | "number";
   number?: string;
}

const categoryColors: Record<string, string> = {
   governance: "bg-accent-yellow",
   treasury: "bg-accent-blue",
   research: "bg-red-200",
   essay: "bg-gray-200",
};

export default function ListCard({
   href,
   title,
   date,
   category,
   categoryVariant = "text",
   icon = "file",
   number,
}: ListCardProps) {
   const renderIcon = () => {
      if (icon === "number" && number) {
         return (
            <div className="w-10 h-10 rounded flex items-center justify-center border border-gray-200 bg-white">
               <span className="font-vt323 text-xs font-bold">{number}</span>
            </div>
         );
      }
      if (icon === "mail") {
         return (
            <div className="w-10 h-10 rounded flex items-center justify-center border border-gray-200 bg-blue-50">
               <Mail size={20} className="text-gray-700" />
            </div>
         );
      }
      return (
         <div className="w-10 h-10 rounded flex items-center justify-center border border-gray-200 bg-blue-50">
            <Icon name={icon} size={20} className="text-gray-700" />
         </div>
      );
   };

   const renderCategory = () => {
      if (!category) return null;

      if (categoryVariant === "badge") {
         return (
            <RootBadge
               text={category}
               color={categoryColors[category.toLowerCase()] || "bg-gray-200"}
            />
         );
      }

      return <span>{category}</span>;
   };

   return (
      <Link
         href={href}
         className="group bg-white border border-gray-300 p-4 rounded-lg hover:border-gray-900 hover:shadow-[4px_4px_0px_0px_#1f2937] transition-all cursor-pointer flex items-center justify-between"
      >
         <div className="flex items-center gap-4">
            {renderIcon()}
            <div>
               <h4 className="text-xl leading-none mb-1 group-hover:text-accent-red transition-colors" style={{ fontFamily: "var(--font-londrina), cursive" }}>
                  {title}
               </h4>
               <div className="flex gap-2 text-xs text-gray-500 font-vt323 items-center">
                  {date && <span>{date}</span>}
                  {(date && category) && <span>•</span>}
                  {renderCategory()}
               </div>
            </div>
         </div>
         <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="arrow" />
         </div>
      </Link>
   );
}
