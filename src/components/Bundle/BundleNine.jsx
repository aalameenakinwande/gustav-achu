import React from "react";

const BundleNine = () => {
  return (
    <div className="w-full bg-[#0f0f17] py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center tracking-wide">
          Your Investment Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

          {/* Option 1: Individual Products */}
          <div className="bg-[#151521] border border-[#2a2a36] rounded-2xl p-6 md:p-10 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-yellow-600/50">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Option 1: Individual Products
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Choose the products you want and pay as you go.
            </p>

            <div className="flex flex-col gap-3 md:gap-4 w-full">
              <a
                href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl text-sm md:text-lg transition-all shadow-md hover:shadow-yellow-600/30"
              >
                The Seeker Book — $30.49
              </a>
              <a
                href="https://buy.stripe.com/dRmcN7e6r1yge4uczGfw40z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl text-sm md:text-lg transition-all shadow-md hover:shadow-yellow-600/30"
              >
                Masterclass Recording — $67.99
              </a>
              <a
                href="https://buy.stripe.com/7sY7sNe6rdgY9OeczGfw40A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl text-sm md:text-lg transition-all shadow-md hover:shadow-yellow-600/30"
              >
                Accelerator Coaching — $1,099
              </a>
            </div>
          </div>

          {/* Option 2: Complete Bundle */}
          <div className="bg-[#151521] border-2 border-yellow-500 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col   transition-transform duration-300 hover:scale-[1.02] hover:shadow-yellow-600/50">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 text-center">
              Option 2: Complete Bundle <span className="text-yellow-400 text-center">*RECOMMENDED</span>
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base text-center">
              Everything You Need to Transform Your Life and Finances
            </p>
            <p className="text-gray-300 mb-4 md:mb-6 font-semibold text-sm md:text-base text-center">
              Total Value: <span className="line-through">$1,699.99</span> <br />
              You Pay: <span className="text-yellow-400">$1,189.99</span>
            </p>
            <a
              href="https://buy.stripe.com/bJefZj2nJ6SA6C2bvCfw40B"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-sm md:text-lg transition-all shadow-lg hover:shadow-yellow-600/30"
            >
              Get Complete Bundle — $1,189.99
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
    </div>
  );
};

export default BundleNine;
