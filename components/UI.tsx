import React from "react";

// --- GLOBAL ICONS ---
interface IconProps {
   name: string;
   size?: number;
   className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = "" }) => {
   const icons: Record<string, React.ReactElement> = {
      terminal: <path d="M4 17l6-6-6-6M12 19h8" />,
      folder: (
         <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      ),
      file: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />,
      play: <path d="M5 3l14 9-14 9V3z" />,
      arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
      menu: <path d="M4 6h16M4 12h16M4 18h16" />,
      x: <path d="M18 6L6 18M6 6l12 12" />,
      sparkle: (
         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      ),
   };

   return (
      <svg
         className={className}
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         {icons[name] || icons.sparkle}
      </svg>
   );
};

// --- UI ATOMS ---
export const Noggles: React.FC = () => (
   <div className="noggle-grid w-24 md:w-32">
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-empty"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-white"></div>
      <div className="n-black"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-white"></div>
      <div className="n-black"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-empty"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
      <div className="n-red"></div>
   </div>
);

interface BadgeProps {
   text: string;
   color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, color = "bg-gray-100" }) => (
   <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs border border-gray-900 ${color} text-gray-900`}
      style={{ fontFamily: "var(--font-vt323), monospace", letterSpacing: "0.05em" }}
   >
      {text}
   </span>
);

interface WindowCardProps {
   title?: string;
   icon?: string;
   children: React.ReactNode;
   color?: string;
   className?: string;
}
