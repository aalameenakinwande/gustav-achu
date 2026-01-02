import React from "react";

const BundleSeven = () => {
  return (
    <div className="w-full bg-[#0f0f17] py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Header / Hook */}
        <div className="bg-[#151521] border border-[#2a2a36] rounded-2xl p-6 md:p-10 shadow-xl mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-snug text-center">
            Why Now Matters
          </h2>

          <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
            Now, you might be asking yourself: <span className="italic">"why should I act now instead of waiting?"</span>
          </p>

          <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
            Well, there's never a "perfect" time for anything. But there is a cost to waiting. While you're still figuring things out, you're missing opportunities to optimize your financial foundation before the year runs out.
          </p>

          <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
            Many paycheck earners are unknowingly leaving <span className="font-semibold">$5,000–$10,000</span> on the table each year — not because of mistakes, but because they haven't optimized their wealth-building approach.
          </p>

          <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
            Not because you are doing anything wrong. You might even be following conventional advice. But you still haven't figured it out yet.
          </p>

          <p className="text-yellow-400 font-semibold mb-3 text-sm md:text-base leading-relaxed">
            We are in an unprecedented time to leverage your potential and paycheck to build wealth without quitting your 9-to-5, working longer hours, or relying on a raise.
          </p>

          <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
            More income streams are accessible than ever before — growth-producing assets like the U.S. stock market, investment platforms that democratize sophisticated strategies, and side businesses that can be launched within your paycheck.
          </p>

          <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
            This opportunity is real. And only the people who take advantage of this November Black Friday package are going to thrive.
          </p>

          <p className="text-red-400 font-semibold text-sm md:text-base leading-relaxed">
            Every day you wait is another day you’re paying what I call the "ignorance tax." And that tax compounds. The people who take action now will live with clarity and build wealth.
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

            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-5">
  <a
    href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
    target="_blank"
    className="w-full md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-yellow-600/30"
  >
    Get Complete Bundle — $1,189.99
  </a>
</div>


        {/* Urgency Notice */}
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

export default BundleSeven;
