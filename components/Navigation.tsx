"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "./UI";
import Image from "next/image";

const NavItems = [
   { href: "/", label: "Home" },
   { href: "/builders", label: "Builders" },
   { href: "/ecosystems", label: "Ecosystems" },
   { href: "/archive", label: "Archive" },
   // { href: "/tv", label: "TV" },
];

export default function Navigation() {
   const pathname = usePathname();
   const [menuOpen, setMenuOpen] = useState(false);

   const isActive = (path: string) => pathname === path;

   const NavItem = ({ href, label }: { href: string; label: string }) => (
      <Link
         href={href}
         onClick={() => setMenuOpen(false)}
         className={`nav-item px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            isActive(href) ? "active" : "hover:bg-gray-100 text-gray-600"
         }`}
      >
         {label}
      </Link>
   );

   return (
      <>
         {/* The OS Bar (Sticky Nav) */}
         <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b-2 border-gray-900 px-4 py-3">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
               <Link
                  href="/"
                  className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setMenuOpen(false)}
               >
                  <div
                     className="size-8 bg-gray-900 rounded text-white flex items-center justify-center text-lg shadow-sm p-1"
                     style={{ fontFamily: "var(--font-londrina), cursive" }}
                  >
                     <Image
                        src="https://athenax.mypinx.store/Logo_Icon_White.png"
                        alt="AthenaX Logo"
                        width={200}
                        height={100}
                     />
                  </div>
                  <span
                     className="text-2xl tracking-tight"
                     style={{ fontFamily: "var(--font-londrina), cursive" }}
                  >
                     AthenaX
                  </span>
               </Link>

               {/* Desktop Nav */}
               <div className="hidden md:flex gap-2">
                  {NavItems.map(({ href, label }) => (
                     <NavItem key={href} href={href} label={label} />
                  ))}
               </div>

               {/* Apply + Mobile Hamburger */}
               <div className="flex items-center gap-6">
                  <Link href="/apply" className="btn-system px-4 py-1.5 text-sm">
                     Apply
                  </Link>
                  <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                     <Icon name={menuOpen ? "x" : "menu"} />
                  </button>
               </div>
            </div>
         </nav>

         {/* Mobile Menu Overlay */}
         {menuOpen && (
            <div className="fixed inset-0 top-15 z-40 bg-cream p-6 flex flex-col gap-4 animate-in">
               {NavItems.map(({ href, label }) => (
                  <Link
                     key={href}
                     href={href}
                     onClick={() => setMenuOpen(false)}
                     className="text-3xl text-left border-b border-gray-200 pb-2 capitalize"
                     style={{ fontFamily: "var(--font-londrina), cursive" }}
                  >
                     {label}
                  </Link>
               ))}
               <Link
                  href="/apply"
                  onClick={() => setMenuOpen(false)}
                  className="btn-system btn-primary justify-center py-4 text-xl mt-4"
               >
                  Apply Now
               </Link>
            </div>
         )}
      </>
   );
}
