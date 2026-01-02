import React from "react";

const BundleSix = () => {
  return (
    <div className="w-full bg-[#0f0f17] py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Intro Section */}
        <div className="bg-[#151521] border border-[#2a2a36] p-6 md:p-10 rounded-2xl shadow-xl mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-snug">
            The November Black Friday Bundle
          </h2>

          <p className="text-yellow-400 font-semibold text-base md:text-lg mb-3">
            Life-Changing Offer to Build Wealth With Purpose
          </p>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            I've put together this life-changing offer to help you break through stagnation, gain unstoppable clarity, and start building real wealth with purpose.
          </p>
        </div>

        {/* Benefits / Value Stack */}
        <div className="bg-[#151521] border border-[#2a2a36] rounded-2xl p-6 md:p-10 shadow-xl mb-10">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-5 text-center">
            Here’s What You Enjoy:
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm md:text-lg leading-relaxed">
            <li>Uncover your purpose — what you were meant to be and do, and stop drifting</li>
            <li>Gain clarity on your vision for career, finances, and personal life</li>
            <li>Break free from the paycheck-to-paycheck cycle without working longer hours or relying on a raise</li>
            <li>Live guidance on picking winning stocks, ETFs & building a recession-proof portfolio</li>
            <li>Private coaching to open, optimize, and maximize returns from your stock investments</li>
            <li>Personalized investment strategy tailored to your income, goals & risk tolerance</li>
            <li>Learn time-tested and proven wealth-building strategies aligned with your core principles, purpose, and legacy</li>
          </ul>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-4">
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

            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-5">
  <a
    href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
    target="_blank"
    className="w-full md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-yellow-600/30"
  >
    Get Complete Bundle — $1,189.99
  </a>
</div>


        {/* Limited-Time Notice */}
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

export default BundleSix;
