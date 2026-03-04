import WindowCard from "@/components/WindowCard";

export default function MailServerPanel() {
   return (
      <WindowCard title="MAIL_SERVER.SYS" icon="terminal">
         <div
            className="bg-gray-900 p-4 space-y-3 rounded-md border-2 border-gray-900"
            style={{ fontFamily: "var(--font-vt323), monospace" }}
         >
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
               <span className="font-vt323 text-green-400 text-lg">STATUS: ONLINE</span>
            </div>
            <div className="space-y-1 font-vt323 text-green-400 text-lg">
               <div className="flex justify-between">
                  <span>DISPATCH_FREQ:</span>
                  <span>WEEKLY</span>
               </div>
               <div className="flex justify-between">
                  <span>FORMAT:</span>
                  <span>LONGFORM + DATA</span>
               </div>
               <div className="flex justify-between">
                  <span>ENCRYPTION:</span>
                  <span>AES-256</span>
               </div>
            </div>
            <div className="border-t border-green-400 border-dashed pt-2 mt-2 opacity-50 font-vt323 text-green-400 text-sm">
               SYS_MONITOR: [#################] 100%
            </div>
         </div>
         <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="border-2 border-gray-900 p-3 bg-accent-yellow">
               <p className="font-vt323 text-xs uppercase opacity-60">Subscribers</p>
               <p className="text-2xl" style={{ fontFamily: "var(--font-londrina), cursive" }}>
                  12,402
               </p>
            </div>
            <div className="border-2 border-gray-900 p-3 bg-accent-blue">
               <p className="font-vt323 text-xs uppercase opacity-60">Open Rate</p>
               <p className="text-2xl" style={{ fontFamily: "var(--font-londrina), cursive" }}>
                  64.2%
               </p>
            </div>
         </div>
      </WindowCard>
   );
}
