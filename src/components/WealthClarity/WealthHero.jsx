

import React from "react";
import { ArrowUpRight } from "lucide-react";

const WealthHero = () => {
  const calendlyUrl =
    "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09";

  return (
    <section className="relative overflow-hidden bg-[#080D19] text-white">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#BD9A35]/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-5xl items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:min-h-[680px] lg:px-10">
        <div className="w-full">

          {/* Eyebrow */}
          {/* <div className="mb-7 flex items-center justify-center gap-3 sm:mb-9">
            <span className="h-px w-8 bg-[#BD9A35] sm:w-12" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#BD9A35] sm:text-xs sm:tracking-[0.3em]">
              Private Wealth Consultation
            </span>

            <span className="h-px w-8 bg-[#BD9A35] sm:w-12" />
          </div> */}

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl font-serif text-[40px] leading-[1.08] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[72px]">
            Get Clarity on Your{" "}
            <span className="text-[#BD9A35]">
              Financial Structure
            </span>{" "}
            in Just One 60-Minute Session
          </h1>

          {/* Price */}
          <div className="mt-7 flex items-center justify-center gap-4 sm:mt-9">
            <span className="font-serif text-2xl sm:text-3xl">
              $299
            </span>

            <span className="h-5 w-px bg-white/20" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
              Wealth Consultation
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/60 sm:mt-8 sm:text-lg sm:leading-8">
            Book a private one-on-one 60-minute Wealth Consultation with{" "}
            <span className="font-medium text-white">
              Gustav B. Achu
            </span>{" "}
            and walk away with a clear financial roadmap designed around your
            current structure, risks, and long-term positioning.
          </p>

          {/* CTA */}
         <button
  onClick={() =>
    window.open(
      "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
      "_blank"
    )
  }
  className="
    w-auto
    mt-6
    bg-gradient-to-r from-red-700
    via-red-600 to-red-500
    hover:from-red-800
    hover:via-red-700
    hover:to-red-600
    text-white
    px-5 sm:px-10
    py-3 sm:py-6
    rounded-lg
    font-extrabold
    text-sm sm:text-base
    tracking-wide
    shadow-[0_8px_30px_rgba(220,38,38,0.25)]
    hover:scale-[1.02]
    active:scale-[0.98]
    transition-all duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-red-400
    focus:ring-offset-2
    focus:ring-offset-[#0A081A]
  "
>
  Yes, I Want To Book My Wealth Consultation
</button>


          {/* Availability */}
          <p className="mt-6 text-xs text-white/40 sm:text-sm">
            Limited Consultation Spots Available Each Month — Apply Early
          </p>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#BD9A35]/30 to-transparent" />
    </section>
  );
};

export default WealthHero;