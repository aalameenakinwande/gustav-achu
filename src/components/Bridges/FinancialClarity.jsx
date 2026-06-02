import React from "react";
import HeaderImage from '../../images/gustavImages/EventGustav.webp';
import { Link } from "react-router-dom";

const FinancialClarity = () => {
  return (
    <section className="w-full bg-[#0B0B0B] text-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12 sm:space-y-16">
        
        {/* HEADLINE */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Stop Living Without Financial Clarity.
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-3xl mx-auto">
            If you’re earning income but still feel uncertain about your money,
            your investments, and your long-term wealth plan — this live Webinar
            was built for you.
          </p>
        </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
  <video
    controls
    preload="metadata"
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/deofmlywm/video/upload/v1768920927/DOWN_1_dmr0gl.mp4"
  >
    Your browser does not support the video tag.
  </video>
</div>

        {/* PAIN MIRROR */}
        <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 sm:p-8 md:p-10 text-left space-y-5">
          <p className="text-base sm:text-lg">You work hard.</p>
          <p className="text-base sm:text-lg">You make money.</p>
          <p className="text-base sm:text-lg font-semibold">But…</p>

          <ul className="space-y-3 text-sm sm:text-base text-gray-300">
            <li>• You don’t have a clear 90-day wealth plan</li>
            <li>• You’re unsure if you’re investing correctly</li>
            <li>• You’re saving, but not building real wealth</li>
            <li>• You want legacy — but lack structure</li>
          </ul>

          <div className="pt-4 border-t border-gray-800 space-y-2">
            <p className="text-base sm:text-lg">
              That constant uncertainty?
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500">
              That’s not a money problem. It’s a clarity problem.
            </p>
          </div>
        </div>


        

        {/* SOLUTION REFRAME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
  
  {/* LEFT — IMAGE */}
  <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
    <img
      src={HeaderImage}
      alt="Wealth Webinar Event"
      className="w-full h-full object-cover"
    />
  </div>

  {/* RIGHT — TEXT (UNCHANGED COPY) */}
  <div className="space-y-6 text-left">
    <p className="text-base sm:text-lg md:text-xl">
      On <span className="font-semibold">Thursday, February 26th</span>, 
      Gustav B. Achu is hosting a{" "}
      <span className="font-semibold">
        Live 90-Minute Wealth Webinar
      </span>{" "}
      where you’ll build:
    </p>

    <ul className="space-y-3 text-sm sm:text-base text-gray-300">
      <li>✔ A Clear 90-Day Wealth Plan</li>
      <li>✔ A Simple Wealth System you can follow consistently</li>
      <li>✔ A structure to grow, protect & multiply your money</li>
      <li>✔ A strategy to build wealth without quitting your 9–5</li>
    </ul>

    <div className="pt-4 space-y-2 text-sm sm:text-base text-gray-400">
      <p>No hype.</p>
      <p>No guesswork.</p>
      <p className="text-white font-medium">
        Just clarity, structure, and execution.
      </p>
    </div>
  </div>

</div>

        {/* IDENTITY ALIGNMENT */}
        <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 sm:p-8 md:p-10 space-y-4">
          <p className="text-base sm:text-lg font-semibold">
            This is for professionals, entrepreneurs, and families who are:
          </p>

          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
            <li>✔ Done guessing with their money</li>
            <li>✔ Ready to build real wealth</li>
            <li>✔ Committed to financial clarity</li>
          </ul>

          <p className="pt-2 text-base sm:text-lg">
            If that’s you…
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-4 pt-2 sm:pt-4">
          <Link
            to="/wealth-clarity"
            className="inline-block w-full sm:w-auto bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg md:text-xl shadow-lg"
          >
            I’m Done Living Without Clarity — Show Me The Plan
          </Link>

          <p className="text-xs sm:text-sm text-gray-400">
            Live Zoom Webinar • 90 Minutes • 7-Day Money Back Guarantee
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinancialClarity;