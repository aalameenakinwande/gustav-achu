import React from "react";
import { Check } from "lucide-react";

const BundleTen = () => {
  const benefits = [
    "Save $510 immediately",
    "Gain clarity on your purpose and vision",
    "Break free from survival mode",
    "Start building real, lasting wealth",
    "Optimize your finances before the year ends",
    "Position yourself to thrive in 2026 and beyond",
  ];

  return (
    <div className="w-full bg-[#0f0f17] py-12 px-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">

        {/* Left: Benefits */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-snug">
            Don’t Let This Opportunity Slip Away
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-xl">
            Act now and unlock your transformation before midnight on November 28.
          </p>

          <ul className="space-y-2 sm:space-y-3 md:space-y-4">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base md:text-xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA Card */}
        <div className="w-full md:w-1/2 bg-[#151521] border-2 border-yellow-500 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col ">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center">
            Claim the Complete Bundle
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-center">
            Everything you need to transform your life and finances — save $510 today.
          </p>
          <span className="text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base text-center">
            Total Value: <span className="line-through">$1,699.99</span>
          </span>
          <span className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">$1,189.99</span>
          <a
            href="https://buy.stripe.com/bJefZj2nJ6SA6C2bvCfw40B"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-center text-black font-bold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-xl text-sm sm:text-base md:text-xl transition-all shadow-lg hover:shadow-yellow-600/40"
          >
            Get Complete Bundle
          </a>
      <div className="flex flex-wrap lg:justify-center items-center gap-2 lg:gap-6 mt-4 text-gray-300 text-xs sm:text-sm">
  <div className="flex items-center gap-2">
    <span className="text-lg">🔒</span>
    <span>100% Secure Checkout</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-lg">💰</span>
    <span>30-Day Money-Back Guarantee</span>
  </div>
</div>

{/* Timer */}
<p className="text-start lg:text-center text-red-400 text-xs sm:text-sm font-medium mt-4">
  ⚠️ Valid till November 28 Only
</p>

        </div>
      </div>
    </div>
  );
};

export default BundleTen;


