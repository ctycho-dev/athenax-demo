"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
   const pathname = usePathname();
   const router = useRouter();
   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      const handle = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handle);
      return () => window.removeEventListener("scroll", handle);
   }, []);

   const handleApplyClick = () => {
      if (pathname === "/projects") {
         // Already on projects page, just scroll
         const element = document.getElementById("apply-for-incubation");
         element?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
         // Navigate to projects page, then scroll
         router.push("/projects");
         setTimeout(() => {
            const element = document.getElementById("apply-for-incubation");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
         }, 100);
      }
      setMenuOpen(false);
   };

   // Check if current page has dark background
   const isDarkPage = pathname.includes("/tv") || pathname.includes("/ecosystem");

   const navLinks = [
      { id: "home", label: "Home", path: "/" },
      { id: "projects", label: "For Projects", path: "/projects" },
      { id: "ecosystems", label: "For Ecosystems", path: "/ecosystem" },
      { id: "discover", label: "Discover", path: "/discover" },
      { id: "tv", label: "TV", path: "/tv" },
      { id: "about", label: "About", path: "/about" },
      // { id: "blog", label: "Blog", path: "/blog" },
   ];

   const isActive = (path: string) => {
      if (path === "/") {
         return pathname === "/";
      }
      return pathname.includes(path);
   };

   // Dynamic color classes based on page background
   const textColor = isDarkPage ? "text-white" : "text-gray-900";
   const borderColor = isDarkPage ? "border-white/20" : "border-gray-200";
   const bgScrolled = isDarkPage ? "bg-[#020617]" : "bg-white";
   const ctaBorder = isDarkPage ? "border-white" : "border-[#0a0a14]";
   const ctaHover = isDarkPage
      ? "hover:text-blue-400 hover:border-blue-400"
      : "hover:text-[#4a6fa5] hover:border-[#4a6fa5]";

   return (
      <nav
         className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
            scrolled
               ? `${bgScrolled} backdrop-blur-md py-4 ${borderColor}`
               : "bg-transparent py-6 border-transparent"
         } ${textColor}`}
      >
         <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="flex items-center gap-12">
               <Link href="/" className="flex items-center text-2xl font-bold tracking-tighter">
                  Athena<span className="text-primary-blue">X</span>
               </Link>
               <div className="hidden lg:flex gap-8">
                  {navLinks.map((l) => (
                     <Link
                        key={l.id}
                        href={l.path}
                        className={`text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${
                           isActive(l.path) ? "opacity-100" : "opacity-40"
                        }`}
                     >
                        {l.label}
                     </Link>
                  ))}
               </div>
            </div>
            <div className="hidden lg:block">
               <button
                  onClick={handleApplyClick}
                  className={`text-[11px] font-bold uppercase tracking-widest border-b-2 ${ctaBorder} pb-1 ${ctaHover} transition-all cursor-pointer`}
               >
                  Apply for Incubation
               </button>
            </div>
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
               {menuOpen ? <X /> : <Menu />}
            </button>
         </div>
         {menuOpen && (
            <div
               className={`absolute top-full left-0 w-full ${
                  scrolled ? bgScrolled : "bg-transparent"
               } backdrop-blur-md border-b ${borderColor} flex flex-col p-8 gap-6 lg:hidden`}
            >
               {navLinks.map((l) => (
                  <Link
                     key={l.id}
                     href={l.path}
                     onClick={() => setMenuOpen(false)}
                     className={`text-left text-lg font-medium uppercase tracking-widest ${textColor} ${ctaHover} transition-colors`}
                  >
                     {l.label}
                  </Link>
               ))}
               <button
                  onClick={handleApplyClick}
                  className={`text-left text-lg font-medium uppercase tracking-widest ${textColor} ${ctaHover} transition-colors`}
               >
                  Apply for Incubation
               </button>
            </div>
         )}
      </nav>
   );
};
