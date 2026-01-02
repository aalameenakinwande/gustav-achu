import React from "react";

const BundleTwo = () => {
  return (
    <section className="w-full bg-[#0A0720] text-white py-12 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-12 lg:mb-20">
          <div className="h-1 w-20 bg-[#E6C677] mx-auto mb-6 rounded-full"></div>

          <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Your Path to Lasting Prosperity
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 mt-4">
            Build wealth with clarity, control, and confidence.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* LEFT — Description */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4">
              Paycheck to Prosperity Masterclass (Recording)
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
              Black Friday Pricing — Limited Time Only
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Break free from the paycheck-to-paycheck cycle and take control 
              of your finances with a proven strategy that turns savers into 
              wealth builders—without quitting your job or working more hours.
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Gain the clarity, tools, and live support you need to make confident 
              money moves, grow your income, and build lasting wealth that works for you.
            </p>

            {/* CTA Button */}
            <a
              href="https://buy.stripe.com/dRmcN7e6r1yge4uczGfw40z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#E6C677] to-[#CFA34D] text-black 
              font-semibold py-4 px-10 rounded-xl shadow-lg 
              text-base hover:opacity-90 transition"
            >
              Get The Masterclass — $67.99
            </a>

            {/* Trust Badges */}
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
                  30-Day Money-Back Guarantee
                </span>
              </div>

            </div>

            <p className="text-red-400 text-xs sm:text-sm font-medium mt-3">
              ⚠️ Offer expires at midnight, November 28
            </p>
          </div>

          {/* RIGHT — Price Card */}
          <div className="relative">
            <div className="bg-[#141129] border border-[#2A254B] rounded-3xl p-10 shadow-2xl">

              {/* Badge */}
              <div className="absolute -top-6 left-6 bg-[#E6C677] 
                text-black px-5 py-2 rounded-full 
                text-sm font-bold shadow-lg whitespace-nowrap">
                Black Friday Deal
              </div>

              <h4 className="text-xl lg:text-3xl font-bold mb-6">
                Pricing
              </h4>

              <p className="text-gray-500 line-through text-base md:text-lg">
                Regular Price: $97
              </p>

              <p className="text-3xl lg:text-4xl font-bold text-green-400 mt-2">
                $67.99
              </p>

              <p className="text-green-500 text-sm mt-1">Save 30%</p>

              <div className="mt-10 border-t border-[#2A254B] pt-6">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Includes: Full masterclass recording, worksheets, lifetime access, 
                  and the Paycheck to Prosperity blueprint.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BundleTwo;
