
import React from "react";

const SectionHead = () => {
  const scrollToConsultation = () => {
    document
      .getElementById("consultation-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0A081A] text-white px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">

        {/* Left Content */}
        <div className="w-full min-w-0 lg:flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-extrabold leading-tight">
            The Wealth Clarity &amp; Legacy{" "}
            <span className="text-[#BD9A35]">
              Blueprint Funnel
            </span>
          </h2>

          {/* Admission Times */}
          <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
            <p className="text-sm sm:text-base text-gray-300">
              <span className="text-[#BD9A35] font-semibold">
                General Admission:
              </span>{" "}
              6:00 PM – 7:30 PM EST
            </p>

            <p className="text-sm sm:text-base text-gray-300">
              <span className="text-[#BD9A35] font-semibold">
                VIP Experience:
              </span>{" "}
              6:00 PM – 8:30 PM EST
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full sm:w-auto sm:mx-auto lg:mx-0 lg:w-[320px] xl:w-[350px] flex flex-col items-center gap-3 shrink-0">
        <button
  type="button"
  onClick={() =>
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="
    w-fit
    max-w-full
    bg-gradient-to-r from-red-700 via-red-600 to-red-500
    hover:from-red-800 hover:via-red-700 hover:to-red-600
    text-white
    px-6 sm:px-8 md:px-10
    py-4 sm:py-5
    rounded-xl
    shadow-[0_10px_40px_rgba(220,38,38,0.25)]
    hover:scale-[1.03]
    active:scale-[0.98]
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-red-400
    focus:ring-offset-2 focus:ring-offset-[#0A081A]
    animate-[shake_1.5s_ease-in-out_infinite]
  "
  style={{
    animation: "shake 1.5s ease-in-out infinite",
  }}
>
  <span className="text-sm sm:text-base md:text-lg font-extrabold text-center whitespace-nowrap">
    General: $97 | VIP: $197
  </span>

  <style>
    {`
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
        20%, 40%, 60%, 80% { transform: translateX(3px); }
      }
    `}
  </style>
</button>

          {/* <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 text-center max-w-xs leading-relaxed">
            Choose General Admission or VIP and take the next step toward
            building your wealth legacy.
          </p> */}
        </div>

      </div>
    </section>
  );
};

export default SectionHead;
