import { Londrina_Solid, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import METADATA from "@/data/metadata";

const londrinaSolid = Londrina_Solid({
   weight: ["300", "400", "900"],
   subsets: ["latin"],
   variable: "--font-londrina",
   display: "swap",
});

const spaceGrotesk = Space_Grotesk({
   weight: ["300", "400", "500", "600"],
   subsets: ["latin"],
   variable: "--font-space-grotesk",
   display: "swap",
});

const vt323 = VT323({
   weight: ["400"],
   subsets: ["latin"],
   variable: "--font-vt323",
   display: "swap",
});

export const metadata = METADATA;

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${spaceGrotesk.variable} ${londrinaSolid.variable} ${vt323.variable} antialiased`}
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
         >
            <div className="min-h-screen flex flex-col relative">
               <div className="absolute inset-0 bg-grid-dots -z-10 opacity-30 fixed"></div>

               <Navigation />

               <main className="grow max-w-5xl mx-auto w-full px-6 py-8">
                  <PageTransition>{children}</PageTransition>
               </main>

               <Footer />
            </div>
         </body>
      </html>
   );
}
