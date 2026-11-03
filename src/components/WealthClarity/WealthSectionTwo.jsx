import React from "react";

const WealthSectionTwo = () => {
  const scrollToConsultation = () => {
    document
      .getElementById("consultation-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const includedItems = [
    "60-Minute Private Wealth Consultation",
    "Structured Financial Architecture Diagnostic",
    "Review of Your Capital Structure & Portfolio Positioning",
    "Investment Strategy & Risk Gap Assessment",
    "AI Exposure & Future Wealth Positioning Review",
    "Personalized Financial Roadmap & Next-Step Recommendations",
    "Recording + Action Notes After The Session",
    "$299 Consultation Fee Credited Toward Future Implementation Services",
  ];

  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[#BD9A35] font-bold mb-3">
            Your Consultation
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Here’s What’s{" "}
            <span className="text-[#BD9A35]">Included</span>
          </h2>

          <div className="w-16 h-1 bg-[#BD9A35] mx-auto mt-5" />
        </div>

        {/* Included Items */}
        <div className="grid md:grid-cols-2 gap-4">
          {includedItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4
                         bg-[#0D0D0D] border border-white/10
                         rounded-xl p-5 md:p-6
                         hover:border-[#BD9A35]/50
                         hover:bg-[#111111]
                         transition-all duration-300"
            >
              {/* Check Icon */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full
                           bg-[#BD9A35]
                           text-black
                           flex items-center justify-center
                           font-extrabold text-sm
                           group-hover:scale-110
                           transition-transform duration-300"
              >
                ✓
              </div>

              <p className="text-gray-200 font-medium text-sm md:text-base leading-relaxed pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center max-w-4xl mx-auto">

          <div className="w-full h-px bg-white/10 mb-10" />

          <p className="text-2xl md:text-3xl font-semibold">
            All for just{" "}
            <span className="text-[#BD9A35] font-extrabold">
              $299
            </span>
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-5 max-w-2xl mx-auto">
            A small investment for the kind of financial clarity, strategic
            positioning, and wealth direction that can impact your finances
            for years to come.
          </p>

          {/* CTA Button */}
 <button
  onClick={() =>
    window.open(
      "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
      "_blank"
    )
  }
  className="mt-8
             w-full sm:w-auto
             bg-gradient-to-r
             from-red-700
             via-red-600
             to-red-500
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
             hover:scale-[1.03]
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
          <p className="text-xs text-gray-500 mt-4">
            Limited Consultation Spots Available Each Month — Apply Early
          </p>

        </div>
      </div>
    </section>
  );
};

export default WealthSectionTwo;