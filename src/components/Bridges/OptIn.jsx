// OptIn.jsx
import React, { useState } from "react";
import OptInModal from "./OptInModal";

const CTAButton = ({ onClick }) => (
  <div className="flex flex-col items-center w-full px-4">
    <button
      onClick={onClick}
 className="
   bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"    >
      SHOW ME THE HIDDEN MONEY
    </button>
    <p className="text-gray-400 text-xs sm:text-sm mt-3 text-center max-w-md">
      Free On-Demand Masterclass • Immediate Access • No Spam • No Credit Card Required
    </p>
  </div>
);

const OptIn = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-[#0F0C29] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* HERO */}
        <div className="w-full max-w-5xl text-center space-y-6">

          <div className="flex justify-center">
            <span className="bg-yellow-400/10 border border-yellow-400 text-yellow-400 text-xs sm:text-sm font-semibold tracking-wider px-4 sm:px-5 py-2 rounded-full uppercase text-center">
              Free On-Demand Masterclass
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Discover $500–$2,000 Hiding in Your Paycheck Every Month — Without Working Longer or Earning More
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            A Free Masterclass Revealing Hidden Money Leaks in Your Budget — So You Can Build Wealth Without Increasing Your Income
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-full max-w-5xl mt-12 sm:mt-14 mb-12 sm:mb-14 px-2 sm:px-0">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur bg-white/5">
            <video
              src="https://res.cloudinary.com/deofmlywm/video/upload/v1771248502/Masterclass_VSL_Portrait_1_1_1_vddphy.mp4"
              className="w-full aspect-video object-contain"
              controls
              playsInline
            />
          </div>
        </div>

        <div className="mb-16 sm:mb-20 w-full">
          <CTAButton onClick={() => setOpen(true)} />
        </div>

        {/* OPENING HOOK */}
        <div className="relative w-full max-w-2xl mx-auto mb-16 sm:mb-24 px-2">

          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent rounded-full hidden sm:block" />

          <div className="pl-0 sm:pl-8 space-y-6 text-center sm:text-left">

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
              You don’t have an income problem.
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 leading-snug">
              You have a money leakage problem.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Every month you earn decent money…",
                "And every month it disappears.",
                "You work hard.",
                "You get paid.",
                "You pay bills.",
                "You try to save.",
                "And somehow you’re still stuck."
              ].map((line, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 text-base sm:text-lg md:text-xl"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-medium">
                That’s not normal.
              </p>

              <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold">
                And it’s not your fault.
              </p>
            </div>

          </div>
        </div>

        <div className="mb-16 sm:mb-20 w-full">
          <CTAButton onClick={() => setOpen(true)} />
        </div>

        {/* BIG PROMISE */}
        <div className="w-full max-w-4xl text-center mb-8 px-4">
          <p className="text-lg sm:text-xl text-gray-300">
            Inside this free masterclass, you’ll discover:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mb-12 px-4">
          {[
            "Why your current budgeting method is quietly keeping you broke",
            "The 3 invisible money drains stealing $500–$2,000 from your paycheck every month",
            "How to live comfortably on 25% of your income while building wealth with the rest",
            "The “Hidden Goldmine” strategy already sitting inside your paycheck"
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 sm:p-8 shadow-lg"
            >
              <p className="text-gray-200 text-base sm:text-lg font-medium">
                ✔ {item}
              </p>
            </div>
          ))}
        </div>

          <div className="max-w-3xl text-center mb-16 space-y-4 text-base sm:text-lg ">
          <p>This is not a “just save more” lecture.</p>
          <p>This is about strategic money moves that separate the financially free from the financially stuck.</p>
        </div>

        {/* TESTIMONIALS */}
        <div className="w-full max-w-6xl mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1,2,3].map((_, i) => (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl hover:translate-y-[-6px] transition duration-300"
              >
                {i === 0 && (
                  <>
                    <div className="absolute -top-4 left-6 text-6xl text-yellow-400/20 font-serif">“</div>
                    <p className="italic text-gray-300 leading-relaxed relative z-10">
                      I had no idea I was losing $1,200 every month… This masterclass changed how I manage every dollar.
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="font-semibold text-white">Sarah M.</p>
                      <p className="text-sm text-gray-400">Tech Consultant</p>
                    </div>
                  </>
                )}
                {i === 1 && (
                  <>
                    <div className="absolute -top-4 left-6 text-6xl text-yellow-400/20 font-serif">“</div>
                    <p className="italic text-gray-300 leading-relaxed relative z-10">
                      I used to think I just didn’t earn enough. After this masterclass, I realized I was leaking nearly $900 every month without knowing it. Within 30 days, I restructured my income and finally started building real savings — without increasing my salary. This changed everything for me.
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="font-semibold text-white">David A.</p>
                      <p className="text-sm text-gray-400">Project Manager</p>
                    </div>
                  </>
                )}
                {i === 2 && (
                  <>
                    <div className="absolute -top-4 left-6 text-6xl text-yellow-400/20 font-serif">“</div>
                    <p className="italic text-gray-300 leading-relaxed relative z-10">
                      This wasn’t another ‘cut your coffee’ budgeting class. It exposed the invisible financial mistakes I didn’t even know I was making. I recovered over $1,100 in my first month just by applying the structure taught here.
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="font-semibold text-white">Amanda L.</p>
                      <p className="text-sm text-gray-400">Healthcare Professional</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

           <div className="mb-24">
          <CTAButton onClick={() => setOpen(true)} />
        </div>

        {/* ================= REFRAME BELIEF ================= */}
        <div className="max-w-3xl text-center space-y-6 mb-10">
          <p>Most people try to earn more money.</p>
          <p>Wealthy people learn how to keep, stretch, and multiply what they already earn.</p>
          <p className="font-semibold text-yellow-400">That difference changes everything.</p>
          <p>Your paycheck is bigger than you think — you just haven’t been shown how to stretch it properly.</p>
        </div>

    

        {/* ================= URGENCY ================= */}
        <p className="text-center text-sm text-red-400">
          Masterclass available for free for a limited time — doors close in 48 hours
        </p>

     

      </div>

      {open && <OptInModal close={() => setOpen(false)} />}
    </section>
  );
};

export default OptIn;