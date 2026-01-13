import { Icon } from "./UI";

export default function WindowCard({
   title,
   icon,
   children,
   color = "bg-white",
   className = "",
}: {
   title?: string;
   icon?: string;
   children: React.ReactNode;
   color?: string;
   className?: string;
}) {
   return (
      <div className={`os-window ${className}`}>
         <div className="window-bar">
            <div className="traffic-light bg-red-400"></div>
            <div className="traffic-light bg-yellow-400"></div>
            <div className="traffic-light bg-green-400"></div>
            {title && (
               <div
                  className="ml-2 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500"
                  style={{ fontFamily: "var(--font-vt323), monospace" }}
               >
                  {icon && <Icon name={icon} size={12} />}
                  {title}
               </div>
            )}
         </div>
         <div className={`p-6 grow flex flex-col ${color}`}>{children}</div>
      </div>
   );
}
