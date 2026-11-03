import React from "react";

const WealthSectionFour = () => {
  const scrollToConsultation = () => {
    document
      .getElementById("consultation-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      number: "01",
      title: "Choose Your Preferred Consultation Time",
      description: "Select a convenient slot on the calendar.",
    },
    {
      number: "02",
      title: "Reserve Your Spot & Complete Payment",
      description: "Secure your session for $299.",
    },
    {
      number: "03",
      title: "Join The Zoom Consultation",
      description:
        "Receive your personalized roadmap, recommendations, and next-step direction.",
    },
  ];

  const topics = [
    "Wealth Structuring",
    "Financial Positioning",
    "Portfolio Allocation",
    "Investment Strategy",
    "Risk Exposure",
    "Income Optimization",
    "Asset Positioning",
    "AI & Future Wealth Trends",
    "Long-Term Wealth Planning",
    "Financial Blind Spots",
    "Strategic Capital Deployment",
    "Legacy & Generational Wealth Thinking",
  ];

  const clarityPoints = [
    "Where you are financially",
    "What needs attention",
    "What opportunities you may be missing",
    "What your next smartest move should be",
  ];

  return (
    <section className="bg-[#F5F3ED] text-[#0A081A] overflow-hidden">

      {/* =====================================================
          3 SIMPLE STEPS
      ====================================================== */}

      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

            <div>
              {/* <p className="text-[#BD9A35] uppercase tracking-[0.25em] text-xs font-bold mb-5">
                The Process
              </p> */}

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Your Consultation
                <br />
                in{" "}
                <span className="text-[#BD9A35]">
                  3 Simple Steps
                </span>
              </h2>
            </div>

            {/* <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed lg:pb-2">
              A simple process designed to get you from uncertainty to
              clarity without unnecessary complexity.
            </p> */}
          </div>

          {/* Steps */}
          <div className="border-t border-[#0A081A]/15">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-[100px_1fr_1fr]
                           gap-5 md:gap-10
                           py-8 md:py-10
                           border-b border-[#0A081A]/15
                           hover:bg-white/40
                           transition-colors duration-300"
              >
                <div className="text-[#BD9A35] text-sm font-bold tracking-widest">
                  {step.number}
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center">

  <button
    onClick={() =>
      window.open(
        "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
        "_blank"
      )
    }
    className="
      w-fit
      max-w-full
      bg-gradient-to-r
      from-red-700
      via-red-600
      to-red-500
      hover:from-red-800
      hover:via-red-700
      hover:to-red-600
      text-white
      px-6
      sm:px-10
      md:px-12
      py-4
      sm:py-5
      md:py-6
      rounded-xl
      font-extrabold
      text-sm
      sm:text-base
      md:text-lg
      text-center
      shadow-[0_10px_40px_rgba(220,38,38,0.25)]
      hover:scale-[1.03]
      active:scale-[0.98]
      transition-all
      duration-300
    "
  >
    Yes, I Want To Book My Wealth Consultation
  </button>

 
                 <p className="mt-6 text-xs text-gray-500 sm:text-xs">
            Limited Consultation Spots Available Each Month — Apply Early
          </p>
          

</div>
        </div>
      </div>


      {/* =====================================================
          WHAT WE'LL COVER
      ====================================================== */}

      <div className="bg-[#0A081A] text-white px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">

            {/* Heading */}
            <div>
              <p className="text-[#BD9A35] uppercase tracking-[0.25em] text-xs font-bold mb-5">
                Inside The Session
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
                Some Of What We’ll Cover During The Session
              </h2>

              <div className="w-14 h-px bg-[#BD9A35] mt-8" />
            </div>

            {/* Topics */}
            <div className="grid sm:grid-cols-2 gap-x-10">

              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4
                             py-5
                             border-b border-white/10"
                >
                  <span className="text-[#BD9A35] text-sm">
                    ✓
                  </span>

                  <span className="text-gray-300 text-sm md:text-base">
                    {topic}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>


      {/* =====================================================
          NOT A GENERIC COACHING CALL
      ====================================================== */}

     <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

      {/* Large Statement */}
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          “This Is Not A{" "}
          <span className="text-[#BD9A35]">
            Generic Coaching Call.
          </span>
          ”
        </h2>
      </div>

      {/* Explanation */}
      <div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          This is a professional financial structure review designed to
          help you understand:
        </p>

        <div className="border-t border-[#0A081A]/15">
          {clarityPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-5 py-5 border-b border-[#0A081A]/15"
            >
              <span className="text-[#BD9A35] font-bold">
                0{index + 1}
              </span>

              <p className="font-semibold text-[#0A081A]">
                {point}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-8">
          And if we decide to work together further, your{" "}
          <span className="text-[#0A081A] font-bold">
            $299 fee is fully credited toward implementation services.
          </span>
        </p>
      </div>

    </div>

    {/* CTA */}
  

  </div>
</div>


      {/* =====================================================
          SCARCITY
      ====================================================== */}

      <div className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 mt-[-60px]">

        <div className="max-w-5xl mx-auto text-center">

          <div className="w-12 h-px bg-[#BD9A35] mx-auto mb-8" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            To maintain depth and personalization, only a limited number of
            consultation sessions are opened each month.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3">
            Once the calendar fills, new applicants are placed on a waiting list.
          </p>

          <p className="text-2xl md:text-3xl font-extrabold mt-8">
            Secure your consultation now before spots close.
          </p>

      <button
  onClick={() =>
    window.open(
      "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
      "_blank"
    )
  }
  className="mt-8
             bg-gradient-to-r from-red-700
             via-red-600 to-red-500
             hover:from-red-800
             hover:via-red-700
             hover:to-red-600
             text-white
             px-10 md:px-12
             py-5 md:py-6
             rounded-xl
             font-extrabold
             text-base md:text-lg
              tracking-wide
             shadow-[0_10px_40px_rgba(220,38,38,0.25)]
             hover:scale-[1.03]
             active:scale-[0.98]
             transition-all duration-300"
>
  Yes, I Want To Book My Wealth Consultation
</button>

          <p className="text-xs text-gray-500 mt-4">
            Limited Consultation Spots Available Each Month — Apply Early
          </p>

        </div>
      </div>


      {/* =====================================================
          SATISFACTION COMMITMENT
      ====================================================== */}

      <div className="bg-[#0A081A] text-white px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-5xl mx-auto text-center">

          {/* <p className="text-[#BD9A35] uppercase tracking-[0.25em] text-xs font-bold mb-5">
            Satisfaction Commitment
          </p> */}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
            Satisfaction{" "}
            <span className="text-[#BD9A35]">
              Commitment
            </span>
          </h2>

          <div className="w-14 h-px bg-[#BD9A35] mx-auto mt-8" />

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto mt-10">
            This consultation is built around delivering real strategic value.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mt-5">
            If you don’t leave the session with actionable insights, a clearer
            understanding of your financial structure, or a defined direction
            for your next steps, your investment will be fully refunded. No
            hassle.
          </p>

          {/* Guarantee */}
          <div className="mt-10 py-8 border-y border-white/10">

            <p className="text-xl md:text-2xl font-bold">
              You only pay if{" "}
              <span className="text-[#BD9A35]">
                real value is delivered.
              </span>
            </p>

          </div>

          

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mt-8">
            The goal of this session is straightforward: to help you understand
            your financial structure at a deeper level and clearly identify the
            smartest next moves available to you.
          </p>



      <button
  onClick={() =>
    window.open(
      "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
      "_blank"
    )
  }
  className="mt-8
             bg-gradient-to-r from-red-700
             via-red-600 to-red-500
             hover:from-red-800
             hover:via-red-700
             hover:to-red-600
             text-white
             px-10 md:px-12
             py-5 md:py-6
             rounded-xl
             font-extrabold
             text-base md:text-lg
              tracking-wide
             shadow-[0_10px_40px_rgba(220,38,38,0.25)]
             hover:scale-[1.03]
             active:scale-[0.98]
             transition-all duration-300"
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

export default WealthSectionFour;