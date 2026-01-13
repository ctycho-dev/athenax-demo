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
                  <div className="font-bold text-gray-900">SYSTEM</div>
                  <div className="text-gray-500 cursor-pointer hover:text-red-500">Manifesto</div>
                  <div className="text-gray-500 cursor-pointer hover:text-red-500">Governance</div>
               </div>
               <div className="space-y-2">
                  <div className="font-bold text-gray-900">NETWORK</div>
                  <div className="text-gray-500 cursor-pointer hover:text-red-500">Twitter</div>
                  <div className="text-gray-500 cursor-pointer hover:text-red-500">Warpcast</div>
                  <div className="text-gray-500 cursor-pointer hover:text-red-500">Discord</div>
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
