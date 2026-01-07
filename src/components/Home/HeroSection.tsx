import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const COLORS = {
  BaseBackground: "#F5F5F7",
  PrimaryBlue: "#2F80FF",
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-24 bg-[#F5F5F7] overflow-hidden">
      <div className="absolute top-20 right-0 w-1/2 h-full hidden md:flex items-center justify-center opacity-30 select-none pointer-events-none">
        {/* <span className="text-[600px] font-bold">X</span> */}
        <img
          src="https://athenax.mypinx.store/AthenaX_LOGO.png"
          alt="AthenaX Logo"
          className="w-150 h-auto"
        />
      </div>

      <div className="relative z-10 max-w-4xl mt-20">
        {/* <Badge color={COLORS.PrimaryBlue}>● POWERED BY NOUNSDAO</Badge> */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase mb-4">
          <span
            className={`w-2 h-2 rounded-full`}
            style={{ backgroundColor: COLORS.PrimaryBlue }}
          ></span>
          <p>POWERED BY</p>
          <img
            src="/Nouns.png"
            alt="NounsDAO Logo"
            width={100}
            height={20}
            className="h-3 w-auto"
          />
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold leading-[0.95] tracking-tighter text-gray-900 mb-12">
          Incubating <br />
          <span className="italic" style={{ color: COLORS.PrimaryBlue }}>
            Ecosystems.
          </span>{" "}
          <br />
          Onboarding <br />
          Builders.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/projects#apply-for-incubation"
            className="px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-[#020617] text-white hover:bg-[#111827] text-lg px-10 py-5"
          >
            Apply for Incubation <ArrowRight size={20} />
          </Link>
          <Link
            to="/tv"
            className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-all"
          >
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
              <Play size={16} fill="black" />
            </div>
            WATCH
          </Link>
        </div>
      </div>
    </section>
  );
};
