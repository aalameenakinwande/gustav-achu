import React from "react";

const WealthMasterclassNav = () => {
  return (
    <div className="w-full bg-[#0A0A0D] text-white border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* LEFT CONTENT */}
        <div className="w-full md:max-w-3xl">

          {/* Headline */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-snug">
            <span className="text-[#BD9A35]">
              The Paycheck Trap:
            </span>{" "}
            Why High-Income Earners Still Feel Broke — And the 5 Hidden Leaks
            Draining Their Money
          </p>

          {/* Subtext */}
          <p className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
            Free Live Zoom Masterclass • Thursday • 7PM CST
          </p>
        </div>

        {/* RIGHT BADGE */}
        <a
          href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          <div className="bg-[#BD9A35]/10 border border-[#BD9A35]/30 px-4 sm:px-5 md:px-6 py-3 md:py-4 rounded-lg text-left md:text-right cursor-pointer hover:scale-105 hover:bg-[#BD9A35]/20 transition-all duration-300">

            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 mb-1 uppercase tracking-wide">
              Trusted By
            </p>

            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#BD9A35] leading-tight">
              Professionals Earning $100K+
            </p>

          </div>
        </a>

      </div>
    </div>
  );
};

export default WealthMasterclassNav;