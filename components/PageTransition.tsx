"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();
   const [displayPath, setDisplayPath] = useState(pathname);

   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on route change
      setDisplayPath(pathname);
   }, [pathname]);

   return (
      <div key={displayPath} className="animate-in">
         {children}
      </div>
   );
}
