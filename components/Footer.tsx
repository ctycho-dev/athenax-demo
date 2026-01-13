import Link from "next/link";

export const CONTACTS = {
   EMAIL: "athena@athenax.co",
   X: "https://x.com/athenax_co",
   DISCORD: "https://discord.com/invite/RURu4tTjHZ",
};

export default function Footer() {
   return (
      <footer className="border-t-2 border-gray-200 py-12 px-6 mt-12 bg-white">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div>
               <h4
                  className="text-2xl mb-2"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  AthenaX
               </h4>
               <p className="text-gray-500 text-sm max-w-xs">
                  A NounsDAO Incubator.
                  <br />
                  Building public goods on Ethereum.
               </p>
            </div>
            <div
               className="grid grid-cols-2 gap-8 text-sm"
               style={{ fontFamily: "var(--font-vt323), monospace" }}
            >
               <div className="space-y-2">
                  <div className="font-bold text-gray-900">NETWORK</div>
                  <Link
                     href={CONTACTS.X}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block text-gray-500 cursor-pointer hover:text-red-500"
                  >
                     Twitter
                  </Link>
                  <Link
                     href={CONTACTS.DISCORD}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block text-gray-500 cursor-pointer hover:text-red-500"
                  >
                     Discord
                  </Link>
               </div>
            </div>
         </div>
         <div
            className="max-w-5xl mx-auto mt-12 text-center text-xs text-gray-400"
            style={{ fontFamily: "var(--font-vt323), monospace" }}
         >
            CC0 /// NO RIGHTS RESERVED /// OPEN SOURCE
         </div>
      </footer>
   );
}
