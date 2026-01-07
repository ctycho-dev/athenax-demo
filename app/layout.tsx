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
   openGraph: {
      title: "AthenaX",
      description: "Discover and listen to podcasts on AthenaX.",
      siteName: "AthenaX",
      images: [
         {
            url: "https://athenax.mypinx.store/channels4_banner.jpg",
            width: 1280,
            height: 720,
            alt: "AthenaX Banner",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "AthenaX",
      description: "Discover and listen to podcasts on AthenaX.",
      images: ["https://athenax.mypinx.store/channels4_banner.jpg"],
   },
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
