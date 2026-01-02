import React from "react";
import HeaderImage from '../../images/gustavImages/banner.png'

const SectionOne = () => {
  return (
    <section className="w-full bg-[#0A081A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto">

        {/* MAIN HEADLINE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-snug sm:leading-tight mb-6 sm:mb-8">
You Are About To Discover The Solution To Break Free From The Paycheck-To-Paycheck Cycle, Turn Your Savings Into Real Wealth, And Finally Get A Clear Financial Roadmap
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-center text-gray-300 text-base sm:text-lg md:text-xl mb-10 sm:mb-12">
          HINT: It's Not That You Don't Make Enough Money.
        </p>

        {/* 2-COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* LEFT SIDE – IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden bg-black shadow-[0_0_25px_rgba(189,154,53,0.25)] border border-[#BD9A35]/20">
              <img
                src={HeaderImage}
                alt="Webinar"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE – TEXT + CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">

            {/* Presenter */}
            <p className="text-sm sm:text-base text-gray-400 mb-2">
              Gustav B. Achu Presents
            </p>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#BD9A35]">
              THE WEALTH CLARITY & LEGACY BLUEPRINT WEBINAR
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-lg mb-8 sm:mb-10 leading-relaxed">
How to Grow, Protect & Multiply Your Money Even If You’re Starting Small,  Without Quitting Your 9–5.            </p>

            {/* CTA BUTTON */}
           <button
  onClick={() => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="inline-block bg-[#BD9A35] hover:bg-[#a9872f] 
    text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-lg 
    transition duration-300 shadow-[0_0_20px_rgba(189,154,53,0.4)]"
>
Reserve My Seat</button>
<div className="flex flex-wrap items-center gap-6 mt-5">

              {/* Secure Checkout */}
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
      </div>
    </section>
  );
};

export default SectionOne;
