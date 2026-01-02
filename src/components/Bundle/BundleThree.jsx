import React from "react";

const BundleThree = () => {
  return (
    <section className="w-full bg-[#0A0720] text-white py-12 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-12 lg:mb-20">
          <div className="h-1 w-16 sm:w-20 bg-[#E6C677] mx-auto mb-5 sm:mb-6 rounded-full"></div>

          <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Accelerate Your Financial Transformation
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 mt-3 sm:mt-4">
            Go beyond knowledge. Get coached into real results.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* LEFT — Description */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 sm:mb-4">
              Paycheck to Prosperity Accelerator Coaching
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
              Black Friday Pricing — Exclusive 1:1 Access
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              A one-on-one coaching experience designed to move you from 
              surviving to building real, sustainable wealth. 
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              You’ll receive expert coaching on optimizing and maximizing returns 
              from your stock market investments, creating a tailored roadmap 
              based on your income and goals, and guidance on picking winning 
              stocks and ETFs.
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Build a recession-proof portfolio and confidently grow wealth 
              with a personalized strategy.
            </p>

            {/* CTA Button */}
           {/* CTA Button */}
<a
  href="https://buy.stripe.com/7sY7sNe6rdgY9OeczGfw40A"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-full sm:w-auto bg-gradient-to-r from-[#E6C677] to-[#CFA34D] 
  text-black font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl shadow-xl 
  text-sm sm:text-base hover:opacity-90 transition-transform transform hover:scale-[1.02]"
>
  Get Accelerator Coaching — $1,099
</a>

{/* Secure Checkout + Guarantee */}
<div className="flex flex-wrap items-center gap-6 mt-4 text-gray-300 text-xs sm:text-sm">
  <div className="flex items-center gap-2">
    <span className="text-lg">🔒</span>
    <span>100% Secure Checkout</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-lg">💰</span>
    <span>30-Day Money-Back Guarantee</span>
  </div>
</div>

{/* Countdown / Expiry */}
<p className="text-red-400 text-xs sm:text-sm font-medium mt-3">
  ⚠️ Offer expires at midnight, November 28
</p>
 </div>

          {/* RIGHT — Price Card */}
          <div className="relative">
            <div className="bg-[#141129] border border-[#2A254B] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl">

              {/* Badge */}
              <div className="absolute -top-5 left-5 sm:-top-6 sm:left-6 bg-[#E6C677] text-black px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                Black Friday Deal
              </div>

              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                Pricing
              </h4>

              <p className="text-gray-500 line-through text-sm sm:text-base md:text-lg">
                Regular Price: $1,570
              </p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mt-2">
                $1,099
              </p>


              <p className="text-green-500 text-xs sm:text-sm mt-1">Save 30%</p>

              <div className="mt-8 sm:mt-10 border-t border-[#2A254B] pt-4 sm:pt-6 text-xs sm:text-sm md:text-base">
                <p className="text-gray-300 leading-relaxed">
                  Includes: 1:1 coaching, investment strategy optimization, 
                  stock & ETF selection guidance, personalized income roadmap, 
                  and recession-proof wealth building plan.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BundleThree;
