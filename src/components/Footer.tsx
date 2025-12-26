import { Link } from "react-router-dom";
import { Twitter, Disc as Discord, Send, Mail } from "lucide-react";

const COLORS = {
  PrimaryBlue: "#2F80FF",
};

export const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
            Product
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/v3/tv"
                className="hover:text-blue-400 transition-colors"
              >
                AthenaX TV
              </Link>
            </li>
            <li>
              <Link
                to="/v3/discover"
                className="hover:text-blue-400 transition-colors"
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                to="/v3/blog"
                className="hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/v3/blog"
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
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/v3/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/v3/projects"
                className="hover:text-blue-400 transition-colors"
              >
                For Projects
              </Link>
            </li>
            <li>
              <Link
                to="/v3/ecosystem"
                className="hover:text-blue-400 transition-colors"
              >
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
            <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Discord size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Send size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-5xl font-bold tracking-tighter">
          Athena<span style={{ color: COLORS.PrimaryBlue }}>X</span>
        </div>
        <div className="text-gray-500 text-sm">
          © 2025 AthenaX. All rights reserved. Built for NounsDAO.
        </div>
      </div>
    </footer>
  );
};
