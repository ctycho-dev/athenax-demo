import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
   title: "AthenaX - Incubating Ecosystems, Onboarding Builders",
   description: "Powered by NounsDAO",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${inter.className} min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900`}
         >
            <Navigation />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
