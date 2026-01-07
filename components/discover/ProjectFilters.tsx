import { Search } from "lucide-react";

export const ProjectFilters = () => (
   <div className="w-full lg:w-64 space-y-8 shrink-0">
      <div>
         <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Categories</h4>
         <div className="flex flex-wrap gap-2">
            {["All", "AI", "DeFi", "Infra", "L1", "L2", "Gaming"].map((cat) => (
               <button
                  key={cat}
                  className="px-4 py-2 border rounded-full text-xs font-bold hover:bg-gray-50"
               >
                  {cat}
               </button>
            ))}
         </div>
      </div>
      <div className="relative">
         <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
         <input
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-sm"
            placeholder="Search Project..."
         />
      </div>
   </div>
);
