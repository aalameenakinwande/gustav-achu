import React from "react";

const BundleEight = () => {
  return (
    <div className="w-full bg-[#0f0f17] py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="bg-[#151521] border border-[#2a2a36] rounded-2xl p-6 md:p-10 shadow-xl mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-snug">
            Why This Pays for Itself
          </h2>

          <p className="text-yellow-400 font-semibold text-base md:text-lg mb-4">
            Transform Your Life, Career, and Finances
          </p>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-5">
            You start living with purpose and gain vision for your life, career, business, and finances.
          </p>

          {/* Key Benefits */}
          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-300 text-sm md:text-lg leading-relaxed mb-5">
            <li>Time-tested and proven systems that can help you uncover as much as <span className="font-semibold">$500</span> in your first week of implementation</li>
            <li>Practical wealth-building strategies and roadmap to build your portfolio within your income, goals, and risk comfort — start earning as much as <span className="font-semibold">$5,000</span> in your first year</li>
            <li>Live tools and support to build your system immediately and consistently</li>
          </ul>

          <p className="text-gray-300 text-sm md:text-lg mb-5">
            The <span className="font-bold">$1,189.99</span> investment can potentially return <span className="font-bold">$5,000+</span> in your first year alone. That's a 4X return — and that's just the beginning.
          </p>

          <p className="text-gray-500 text-xs md:text-sm">
            Disclaimer: Does not guarantee any specific results. Experiences discussed may not be typical. Background, education, application, and effort may affect your experience. Your results may vary.
          </p>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-4 justify-center">
          <a
            href="https://buy.stripe.com/bJefZj2nJ6SA6C2bvCfw40B"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-yellow-600/30"
          >
            Get Complete Bundle — $1,189.99
          </a>

        <a
  href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full md:w-auto text-center bg-transparent border border-yellow-500/40 hover:border-yellow-500 text-yellow-400 hover:text-yellow-300 py-4 px-8 rounded-xl text-base md:text-lg font-semibold transition-all"
>
  Choose Individual Products
</a>
        </div> */}
<div className="w-full flex flex-col items-center">

  {/* Button */}
  <a
    href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
    target="_blank"
    className="w-full md:w-auto text-center bg-gradient-to-r from-[#E6C677] to-[#CFA34D] 
    text-black font-semibold py-4 px-8 rounded-xl text-base md:text-lg shadow-lg 
    hover:opacity-90 transition-all"
  >
    Get Complete Bundle — $1,189.99
  </a>

  {/* Security + Guarantee Row */}
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



</div>
{/* Timer */}


<p className="text-start lg:text-center text-red-400 text-xs sm:text-sm font-medium mt-4">
  ⚠️ Valid till November 28 Only
</p>


      </div>
    </div>
  );
};

export default BundleEight;
