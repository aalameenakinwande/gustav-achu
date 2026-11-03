
import React from "react";

const SectionHeadEb = () => {
  return (
    <section className="bg-[#0A081A] text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
            THE WEALTH CLARITY
            <span className="block mt-2 text-[#BD9A35]">
              &amp; LEGACY
            </span>
            <span className="block mt-2">
              BLUEPRINT FUNNEL
            </span>
          </h2>

          {/* Gold Divider */}
          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#BD9A35] sm:mt-9" />

          {/* Event Details */}
          <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10 lg:flex-row lg:justify-center lg:items-stretch lg:gap-0">

            {/* Date */}
            <div className="w-full max-w-sm px-4 py-2 lg:w-auto lg:max-w-none lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BD9A35] sm:text-sm">
                Date
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg md:text-xl">
                Thursday, January 28th, 2027
              </p>
            </div>

            <div className="hidden w-px bg-white/15 lg:block" />

            {/* General Admission */}
            <div className="w-full max-w-sm px-4 py-2 lg:w-auto lg:max-w-none lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BD9A35] sm:text-sm">
                General Admission
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg md:text-xl">
                6:00PM - 7:30 PM EST
              </p>
            </div>

            <div className="hidden w-px bg-white/15 lg:block" />

            {/* VIP */}
            <div className="w-full max-w-sm px-4 py-2 lg:w-auto lg:max-w-none lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BD9A35] sm:text-sm">
                VIP
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg md:text-xl">
                6:00PM-8:30PM EST
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionHeadEb;
