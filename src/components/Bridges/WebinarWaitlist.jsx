import React, { useState, useEffect } from "react";
import WebinarWaitlistModal from "./WebinarWaitlistModal";

const WebinarWaitlist = () => {
  const [open, setOpen] = useState(false);

  // Auto-open modal (optional)







  return (
<section className="w-full bg-[#0B0B0B] text-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6">
   
         <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
                {/* HEADLINE */}
                <div className="text-center space-y-4 sm:space-y-6">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Stop Living Without Financial Clarity.
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            If you’re earning income but still feel uncertain about your money,
            your investments, and your long-term wealth plan — the Wealth
            Clarity Webinar will give you a clear 90-day wealth plan.
            <br className="hidden md:block" />
            Join the private waitlist to get early access.
          </p>
        </div>

        {/* BULLET TRANSFORMATION */}
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 text-gray-200">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            Inside this live workshop, you’ll learn how to:
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
            <li>✔ Build a Clear 90-Day Wealth Plan</li>
            <li>✔ Create a Simple Wealth System you can follow consistently</li>
            <li>✔ Grow, Protect & Multiply your money with structure</li>
            <li>✔ Build wealth without quitting your 9–5</li>
          </ul>

          <div className="pt-2 sm:pt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
            <p>No guesswork.</p>
            <p>No hype.</p>
            <p>Just clarity, structure, and execution.</p>
          </div>
        </div>

        {/* WHO IT’S FOR */}
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 text-gray-200">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            This is for professionals and entrepreneurs who:
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
            <li>✔ Earn income but feel financially unclear</li>
            <li>✔ Are tired of guessing with money</li>
            <li>✔ Want structure, not motivation</li>
            <li>✔ Are ready to build real wealth</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 sm:pt-6 space-y-2">
     <button
  onClick={() => setOpen(true)}
  className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-lg"
>
Join The Wealth Clarity Waitlist
</button>


          <p className="text-xs sm:text-sm text-gray-400">
            Limited early access • Live training • Priority pricing
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && <WebinarWaitlistModal close={() => setOpen(false)} />}
    </section>
  );
};

export default WebinarWaitlist;
