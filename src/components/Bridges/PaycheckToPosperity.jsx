// PaycheckToProsperity.jsx
import React, { useState } from "react";
import PaycheckToProsperityModal from "./PaycheckToProsperityModal";


const PaycheckToProsperity = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#181349] via-[#1F1B5B] to-[#181349] flex flex-col items-center px-4 sm:px-6 lg:px-12 py-16 lg:py-32 text-white">

      {/* HERO: HEADLINE + SUBHEAD */}
       <div className="max-w-5xl w-full text-center mb-12 px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Turn Your Paycheck Into a <span className="text-yellow-400">Wealth-Building Machine</span> — Even If You Don’t Earn $100K or Work Extra Hours
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 mt-10">
          90-Minute Masterclass to Break Free from the Paycheck-to-Paycheck Cycle and Build Real Wealth
        </p>

            {/* <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
  <video
    controls
    preload="metadata"
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/deofmlywm/video/upload/v1745399897/P2P_Ad_VSL_1_1_oeyuk0.mp4"
  >
    Your browser does not support the video tag.
  </video>
</div> */}
      </div>

      

      {/* OPENING HOOK */}
      <div className="max-w-3xl mb-12 text-center space-y-3 px-2 sm:px-0">
        <p className="text-gray-300 text-base sm:text-lg md:text-xl">
          What if your paycheck could do more than pay bills?
        </p>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl">
          If you’re tired of working hard day-to-day but still feel like you’re going nowhere financially… this masterclass is your roadmap out.
        </p>
        <p className="text-yellow-400 font-semibold text-base sm:text-lg md:text-xl">
          Stop trading time for money. Start making your paycheck work for you.
        </p>
      </div>

      {/* BIG PROMISE GRID */}
   <div className="max-w-4xl w-full mb-12 px-2 sm:px-0">

  {/* First card centered */}
  <div className="flex justify-center mb-4">
    <div className="flex items-start p-4 sm:p-6 bg-[#262147] rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 w-full sm:w-3/4 md:w-2/3">
      <span className="text-yellow-400 text-2xl font-bold mr-3 mt-1">✔</span>
      <p className="text-gray-200 font-medium text-sm sm:text-base md:text-lg">
        Break free from the paycheck-to-paycheck cycle
      </p>
    </div>
  </div>

  {/* Remaining cards in 2-column grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {[
      "Increase your income without quitting your 9–5",
      "Make powerful financial decisions with clarity and confidence",
      "Use proven systems to build wealth and keep it growing",
      "Shift from just saving to becoming a strategic wealth builder"
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-start p-4 sm:p-6 bg-[#262147] rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
      >
        <span className="text-yellow-400 text-2xl font-bold mr-3 mt-1">✔</span>
        <p className="text-gray-200 font-medium text-sm sm:text-base md:text-lg">{item}</p>
      </div>
    ))}
  </div>
</div>


      <p className="italic text-gray-400 mb-12 text-center text-sm sm:text-base md:text-lg">
        No theory. No hype. Just real strategies that create real results.
      </p>

      {/* REFRAME BELIEF */}
      <div className="max-w-3xl w-full bg-[#1F1B5B] rounded-2xl p-4 sm:p-6 md:p-8 mb-12 shadow-lg text-center px-2 sm:px-4">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2">
          Most people think building wealth requires a six-figure salary or working extra hours.
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2">
          The truth? Wealth comes from how you use your paycheck, not how much you earn.
        </p>
        <p className="text-yellow-400 font-semibold text-sm sm:text-base md:text-lg">
          This masterclass will show you exactly how to turn your income into a wealth-building machine — starting today.
        </p>
        
      </div>

      

  <div className="flex justify-center">
  <button
    onClick={() => setOpen(true)}
    className="bg-yellow-400 text-[#181349] px-8 sm:px-10 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 text-lg shadow-lg hover:shadow-xl"
  >
Show Me How To Build Wealth  </button>
</div>

  
{open && <PaycheckToProsperityModal close={() => setOpen(false)} />}






     
    </section>
  );
};

export default PaycheckToProsperity;
