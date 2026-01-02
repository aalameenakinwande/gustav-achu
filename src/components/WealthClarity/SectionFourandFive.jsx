import React from "react";

const SectionFourandFive = () => {
  const scrollToTickets = () => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#08070F] text-white py-20 px-4 sm:px-6 lg:px-8">

      {/* ================= SECTION 4: TRANSFORMATION ================= */}
      <div className="max-w-[1200px] mx-auto mb-24">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#BD9A35] mb-6">
            The Transformation You Will Experience
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            By the end of this <span className="text-white font-semibold">90-minute live webinar</span>,  
            you will walk away with clarity, structure, and a clear path forward.
          </p>
        </div>

        {/* Transformation List */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {[
    "A clear understanding of where you currently stand financially — no more guessing or feeling overwhelmed",
    "A simple wealth-building system you can follow consistently, even with limited capital",
    "A 90-day roadmap with specific, actionable steps you can implement immediately",
    "Clarity on how to identify and activate your next income stream without quitting your 9–5",
    "Confidence and a step-by-step plan to begin building real wealth and a lasting legacy for your family",
  ].map((item, index) => (
    <div
      key={index}
      className={`flex items-start gap-4 bg-[#151521] border border-[#BD9A35]/25 
        p-6 rounded-2xl shadow-lg
        ${index === 4 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}`}
    >
      <span className="text-[#BD9A35] text-xl mt-1">✔</span>
      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
        {item}
      </p>
    </div>
  ))}
</div>


        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={scrollToTickets}
            className="inline-block bg-[#BD9A35] hover:bg-[#a9872f]
              text-black font-bold text-base sm:text-lg px-10 py-4 rounded-lg
              transition duration-300 shadow-[0_0_20px_rgba(189,154,53,0.45)]"
          >
            Reserve My Seat
          </button>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">

              {/* Secure Checkout */}
              <div className="flex items-center  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#E6C677]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 
                    2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z"
                  />
                </svg>

                <span className="text-gray-300 text-xs sm:text-sm">
                  100% Secure Checkout
                </span>
              </div>

              {/* Money Back */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#E6C677]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 
                    12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="text-gray-300 text-xs sm:text-sm">
7-Day Money-Back Guarantee                </span>
              </div>

            </div>
        </div>
      </div>

      {/* ================= SECTION 5: WHO THIS IS FOR ================= */}
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#BD9A35] mb-4">
            Who This Is For
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-white">
            This Live Training Is Perfect For:
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            "Mid- & High-Income Professionals who want their money to work harder",
            "First- & Second-Generation Immigrants building wealth at home or abroad",
            "Entrepreneurs & Side Hustlers ready to scale income strategically",
            "Families & Legacy Builders planning long-term financial impact",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#151521] border border-[#BD9A35]/30 p-6 rounded-2xl shadow-lg text-center"
            >
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <p className="text-center text-gray-300 text-base sm:text-lg max-w-4xl mx-auto mb-14 leading-relaxed">
          Whether you’re building your first savings, scaling your income,
          or planning generational wealth, this webinar gives you
          <span className="text-white font-semibold"> clear strategies and actionable steps</span> to grow,
          protect, and multiply your money with confidence.
        </p>

        {/* CTA + Trust Signals */}
        <div className="text-center">
          <button
            onClick={scrollToTickets}
            className="inline-block bg-[#BD9A35] hover:bg-[#a9872f]
              text-black font-bold text-base sm:text-lg px-10 py-4 rounded-lg
              transition duration-300 shadow-[0_0_20px_rgba(189,154,53,0.45)]"
          >
            Reserve My Seat
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-[#E6C677]">🔒</span>
              <span className="text-gray-300 text-xs sm:text-sm">
                100% Secure Checkout
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6C677]">💰</span>
              <span className="text-gray-300 text-xs sm:text-sm">
                7-Day Money-Back Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFourandFive;
