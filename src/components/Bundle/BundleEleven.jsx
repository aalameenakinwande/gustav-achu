import React from "react";

const BundleEleven = () => {
  const individualProducts = [
    { label: "The Seeker Book - $30.49", url: "https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v" },
    { label: "Masterclass Recording - $67.99", url: "https://buy.stripe.com/dRmcN7e6r1yge4uczGfw40z" },
    { label: "Accelerator Coaching - $1,099", url: "https://buy.stripe.com/7sY7sNe6rdgY9OeczGfw40A" },
  ];

  return (
    <div className="w-full bg-[#0f0f17] py-8 px-4 flex justify-center">
      <div className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
          Secure Your Transformation Today
        </h2>

        {/* Best Value Box */}
        <div className="bg-[#1a1a25] border border-yellow-500/40 rounded-2xl p-4 sm:p-6 md:p-10 space-y-3 md:space-y-6 shadow-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-400">
            BEST VALUE: Complete Bundle
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Save <span className="text-yellow-400 font-bold">$510</span> + Transform Your Life
          </p>

          <a
            href="https://buy.stripe.com/bJefZj2nJ6SA6C2bvCfw40B"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-yellow-500 text-black text-sm sm:text-base md:text-xl font-semibold py-2.5 sm:py-3 md:py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300"
          >
            Get Complete Bundle Now - $1,189.99
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

        {/* Divider text */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">Or Choose Individual Products:</p>

        {/* Individual product links */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {individualProducts.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#22222f] text-gray-200 text-sm sm:text-base md:text-lg py-2.5 sm:py-3 md:py-4 rounded-xl border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Offer expiry */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg pt-3 md:pt-6">
          This Black Friday offer expires{" "}
          <span className="text-red-500 font-bold">November 28 at 11:59 PM</span>
        </p>

        {/* Tagline */}
        <p className="text-yellow-400 font-medium text-sm sm:text-base md:text-lg">
          Don't pay the "ignorance tax" another day.
        </p>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Disclaimer: Does not guarantee any specific results. Experiences discussed may not be
          typical. Background, education, application, and effort may affect your experience.
          Your results may vary.
        </p>
      </div>
    </div>
  );
};

export default BundleEleven;
