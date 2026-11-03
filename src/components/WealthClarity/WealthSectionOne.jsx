import React from "react";

const WealthSectionOne = () => {
  const scrollToConsultation = () => {
    document
      .getElementById("consultation-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const painPoints = [
    "You earn $100K+, but you still don't feel financially ahead.",
    "You’ve invested before, but you’re unsure if your portfolio is positioned correctly.",
    "You want clarity on where your money should be going next.",
    "You've delayed investing because you're afraid of losing money.",
    "You’re concerned about hidden inefficiencies, risk exposure, or missed opportunities.",
    "You know AI and global market shifts are changing wealth creation but you’re not sure how to position yourself.",
    "You’re tired of guessing and want strategic direction from someone who understands wealth architecture.",
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[#BD9A35] font-bold mb-3">
            Wealth Clarity
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A081A] leading-tight">
            Is This{" "}
            <span className="text-[#BD9A35]">You?</span>
          </h2>

          <div className="w-16 h-1 bg-[#BD9A35] mt-5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Pain Points */}
          <div>
            <div className="space-y-5">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 md:p-5 rounded-xl
                             bg-[#F8F7F3] border border-gray-100
                             hover:border-[#BD9A35]/40
                             transition-all duration-300"
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full
                               bg-[#0A081A] text-[#BD9A35]
                               flex items-center justify-center
                               font-bold text-sm"
                  >
                    ✓
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Offer */}
          <div className="lg:sticky lg:top-10">
            <div
              className="relative overflow-hidden rounded-2xl
                         bg-[#0A081A] text-white p-8 md:p-10
                         shadow-2xl"
            >
              {/* Decorative element */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48
                           rounded-full bg-[#BD9A35]/10"
              />

              <div className="relative z-10">


                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                  Get Strategic Financial Clarity for{" "}
                  <span className="text-[#BD9A35]">$299</span>
                </h3>

                <div className="space-y-5 mt-7 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Most people focus on earning more money.
                    <span className="text-white font-semibold">
                      {" "}Very few focus on structuring money correctly.
                    </span>
                  </p>

                  <p>
                    This consultation is designed for professionals,
                    founders, entrepreneurs, and high-income earners who want
                    to understand how their financial life is actually
                    positioned and what needs to improve to build long-term
                    wealth.
                  </p>

                  <div className="border-l-2 border-[#BD9A35] pl-5 space-y-2">
                    <p className="text-white font-semibold">
                      This is not motivation.
                    </p>

                    <p className="text-white font-semibold">
                      This is not surface-level financial advice.
                    </p>

                    <p className="text-white font-semibold">
                      This is a structured financial architecture diagnostic.
                    </p>
                  </div>
                </div>

                {/* CTA */}
         <button
  onClick={() =>
    window.open(
      "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
      "_blank"
    )
  }
  className="w-full mt-8
             bg-gradient-to-r from-red-700
             via-red-600 to-red-500
             hover:from-red-800
             hover:via-red-700
             hover:to-red-600
             text-white
             px-8 sm:px-10 md:px-12
             py-5 md:py-6
             rounded-xl
             font-extrabold
             text-base md:text-lg
              tracking-wide
             shadow-[0_10px_40px_rgba(220,38,38,0.25)]
             hover:scale-[1.02]
             active:scale-[0.98]
             transition-all duration-300
             focus:outline-none
             focus:ring-2
             focus:ring-red-400
             focus:ring-offset-2
             focus:ring-offset-[#0A081A]"
>
  Yes, I Want To Book My Wealth Consultation
</button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Limited Consultation Spots Available Each Month — Apply Early
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WealthSectionOne;