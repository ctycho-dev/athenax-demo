import Link from "next/link";
import { IconBrandDiscord, IconBrandX, IconMail } from "@tabler/icons-react";
import { CONTACTS } from "@/data/contacts";

const SocialItems = [
   {
      icon: <IconBrandX size={18} />,
      link: CONTACTS.X,
   },
   {
      icon: <IconBrandDiscord size={18} />,
      link: CONTACTS.DISCORD,
   },
   {
      icon: <IconMail size={18} />,
      link: `mailto:${CONTACTS.EMAIL}`,
   },
];

export const Footer = () => {
   return (
      <footer className="bg-[#020617] text-white pt-20 pb-10 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
                  Product
               </h4>
               <ul className="space-y-4">
                  <li>
                     <Link href="/tv" className="hover:text-blue-400 transition-colors">
                        TV
                     </Link>
                  </li>
                  <li>
                     <Link href="/discover" className="hover:text-blue-400 transition-colors">
                        Discover
                     </Link>
                  </li>
                  {/* <li>
              <Link
                href="/blog"
                className="hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>
            </li> */}
               </ul>
            </div>
            {/* <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-400 transition-colors"
              >
                Articles
              </Link>
            </li>
            <li>
              <button className="hover:text-blue-400 transition-colors">
                Guests
              </button>
            </li>
            <li>
              <button className="hover:text-blue-400 transition-colors">
                Brand Assets
              </button>
            </li>
          </ul>
        </div> */}
            <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
                  Company
               </h4>
               <ul className="space-y-4">
                  <li>
                     <Link href="/about" className="hover:text-blue-400 transition-colors">
                        About Us
                     </Link>
                  </li>
                  <li>
                     <Link href="/projects" className="hover:text-blue-400 transition-colors">
                        For Projects
                     </Link>
                  </li>
                  <li>
                     <Link href="/ecosystem" className="hover:text-blue-400 transition-colors">
                        For Ecosystems
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
                  Social
               </h4>
               <div className="flex gap-4">
                  {SocialItems.map((item, index) => (
                     <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                     >
                        {item.icon}
                     </a>
                  ))}
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-5xl font-bold tracking-tighter">
               Athena<span className="text-primary-blue">X</span>
            </div>
            <div className="text-gray-500 text-sm">
               © {new Date().getFullYear()} AthenaX. All rights reserved. Built for NounsDAO.
            </div>
         </div>
      </footer>
   );
};
