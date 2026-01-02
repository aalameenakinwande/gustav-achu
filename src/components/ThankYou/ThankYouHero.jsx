import React from "react";

const ThankYouHero = () => {
  return (
    <section className="bg-[#181349] text-white px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* ✅ Animated Circle with Summary Info */}
       <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 sm:w-24 h-20 sm:h-24 text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
              10-4.48 10-10S17.52 2 12 2zm4.3 7.3a1 1 0 0 1 
              0 1.4l-5 5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 
              1.4-1.4l1.3 1.3 4.3-4.3a1 1 0 0 1 1.4 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold">Payment Successful!</h1>

        <h2 className="text-2xl sm:text-4xl font-semibold">
          Welcome to{" "}
          <span className="text-[#EFE359] inline-block">
            Paycheck to Prosperity webinar
          </span>
        </h2>

        {/* ✅ Full Event Details Box */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-5 sm:p-6 text-left text-sm sm:text-lg space-y-4 max-w-lg mx-auto">
          <p>
            <span className="font-semibold">Date & Time:</span> Saturday, August 2nd, 2025
          </p>
          <p>
            <span className="font-semibold">Time:</span> 12 PM – 1:30 PM EST
          </p>
          <p>
            <span className="font-semibold">Duration:</span> 1 Hour 30 Minutes
          </p>
        </div>

        {/* ✅ Enlarged Animated Button */}
        <a
          href="https://us06web.zoom.us/meeting/register/IQ1YPSK3RriZV_hyzLdHdw#/registration"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#181349] font-bold px-32 py-5 text-lg sm:text-xl rounded-full hover:bg-opacity-90 transition animate-bounce"
        >
          Register Here
        </a>
      </div>
    </section>
  );
};

export default ThankYouHero;
