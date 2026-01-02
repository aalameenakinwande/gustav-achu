import React from "react";

const BundleFour = () => {
  return (
    <div className="w-full bg-[#0f0f17] py-10 lg:py-16 flex justify-center px-4">
      <div className="w-full max-w-3xl bg-[#151521] border border-[#2a2a36] rounded-2xl p-6 sm:p-10 shadow-xl">

        {/* Badge */}
        <div className="inline-block px-3 py-1 mb-6 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30 whitespace-nowrap">
          ⭐ BEST VALUE — COMPLETE BUNDLE
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
          Complete All-Access Bundle  
        </h2>

        <p className="text-yellow-400 font-semibold text-sm sm:text-base mb-6">
          Get Everything + Save Over $500
        </p>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
          This limited-time Black Friday bundle delivers the full transformation package —
          helping professionals, entrepreneurs, first & second-generation immigrants,
          9-5ers and freelancers break free from survival mode and build real,
          sustainable wealth *without quitting their jobs or working more hours*.
        </p>

        {/* Price Section */}
        <div className="bg-[#1d1d29] p-5 sm:p-6 rounded-xl border border-[#2a2a36] mb-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-1">
            <span className="text-gray-400">Regular Price:</span>
            <span className="line-through text-gray-500">$1,699.99</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-1">
            <span className="text-yellow-400">Black Friday Price:</span>
            <span className="text-2xl font-bold text-yellow-400">$1,189.99</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
            <span className="text-green-400 font-medium">Total Savings:</span>
            <span className="text-green-400 font-bold">$510 (30% OFF)</span>
          </div>

        </div>

        {/* What You Get */}
        <div className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">What You Get:</h3>

          <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
            <li>✔️ THE SEEKER Book <span className="text-yellow-400">($32.99 value)</span></li>
            <li>✔️ Paycheck to Prosperity Masterclass Recording <span className="text-yellow-400">($97 value)</span></li>
            <li>✔️ Paycheck to Prosperity Accelerator Coaching <span className="text-yellow-400">($1,099 value)</span></li>
          </ul>

          <p className="text-gray-400 text-sm sm:text-base mt-4">
            Total Value: <span className="text-white font-semibold">$1,699.99</span>  
            <br />
            You Pay: <span className="text-yellow-400 font-bold">$1,189.99</span>
          </p>
        </div>

        {/* Button */}
    {/* CTA Button */}
<a
  href="https://buy.stripe.com/bJefZj2nJ6SA6C2bvCfw40B"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center w-full bg-gradient-to-r from-[#E6C677] to-[#CFA34D] 
  text-black font-semibold py-4 rounded-xl text-base sm:text-lg shadow-xl 
  hover:opacity-90 transition-transform transform hover:scale-[1.02]"
>
  Claim Complete Bundle — $1,189.99
</a>

{/* Secure Checkout + Guarantee */}
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
  );
};

export default BundleFour;
