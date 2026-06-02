import React from "react";
import HeaderImage from '../../images/gustavImages/EventGustav.webp';

const WealthMasterclassGustav = () => {
  return (
    <section className="relative bg-[#0B0B0F] text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#BD9A35]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#BD9A35]/10 blur-3xl rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Learn From Someone Who Has Been Where You Are
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — TEXT */}
          <div>

            {/* Name */}
            <h3 className="text-2xl md:text-3xl font-semibold text-[#BD9A35] mb-4">
              GUSTAV B. ACHU
            </h3>

            {/* Intro */}
            <p className="text-gray-300 leading-relaxed mb-8">
              <span className="text-white font-medium">
                From Bankruptcy To $1,000,000+ Portfolio.
              </span>{" "}
              Gustav is not a guru. He is not someone who inherited wealth or got
              lucky with crypto. He is a regular guy who:
            </p>

            {/* Story Steps */}
            <div className="space-y-4 mb-10">
              {[
                "Started as a Nursing Assistant in Minnesota",
                "Became a Licensed Practical Nurse and saved $90,000",
                "Went to UC Berkeley for International Business & Marketing",
                "Lost everything doing business in Africa- foreclosed on two homes, filed for bankruptcy, paid $100,000 to debtors, and shopped at thrift stores for 4 years",
                "Made a decision: \"This is the last time any circumstance will meet me in life unprepared.\"",
                "Built back to a $1,000,000+ portfolio while working a 9-to-5 and raising a family",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-[#BD9A35] mt-1">✔</span>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mb-10">
              <h4 className="text-xl md:text-2xl font-semibold mb-4">
                The System He Teaches Is The System He Lives
              </h4>

              <div className="space-y-3">
                {[
                  "Built on small, consistent, intentional steps, and not big bets",
                  "Refined through real mistakes, real losses, and real recovery",
                  "Grounded in mindset, stewardship, and legacy",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-[#BD9A35]">✔</span>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-white/10 pt-8">
               <a
  href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
    hover:bg-red-700 hover:scale-105 transition-transform duration-300 w-full"
  >
    SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
  </button>
</a>


            <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden ">
              <img
                src={HeaderImage}
                alt="Gustav B. Achu"
                className="w-full h-[400px] md:h-[850px] object-cover"
              />
            </div>

            {/* Optional glow */}
            <div className="absolute inset-0 rounded-2xl border border-[#BD9A35]/20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WealthMasterclassGustav;