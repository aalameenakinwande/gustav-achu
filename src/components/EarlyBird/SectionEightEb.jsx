import React from "react";

const modules = [
  {
    title: "Step 1: Know Exactly Where Your Money Is Leaking (and How to Plug the Holes for Good)",
    subtitle: "Walk away with total financial clarity, zero guesswork, and a clear plan to stop bleeding money every month.",
    points: [
      "Pinpoint your current income, spending habits, and hidden financial roadblocks",
      "Break free from the paycheck-to-paycheck trap and gain control over your money",
      "Visualize your ideal financial picture and uncover what’s possible in the next 90 days",
    ],
    description:
      "By the end of this module, you’ll feel empowered, in control, and clear on exactly where you stand financially",
  },
{
  title: "Step 2: Turn Your Income Into a System That Grows (Even When You’re Not Working)",
  subtitle: "Learn how to structure your income so your money starts working for you instead of sitting idle.",
  points: [
    'Learn how to structure your income using the “50-10-20-20” rule for lasting wealth and maximum growth.',
    "Master the '20% rule' of investing that helped Gustav turn bankruptcy into a $1,000,000+ portfolio",
    "Avoid common money mistakes and know exactly where to put your resources first",
    "Grow wealth strategically, even if you’re starting with less than $500",
  ],
  description:
    "You’ll leave this module confident in your ability to make your income work smarter, not harder.",
},

  {
    title: "Step 3: Invest With Confidence—Without Fear, Guessing, or Overwhelm",
    subtitle: "Understand exactly how the stock market works and how to invest consistently, even as a beginner.",
    points: [
      "Learn how to pick stocks with skill, knowledge, and confidence- including the same simple techniques Gustav uses to evaluate companies you already know and trust",
      "Avoid costly mistakes that can set back your financial goals",
      "Build small, consistent investing habits that compound over time",

    ],
    description:
      "By the end of this module, you’ll feel confident and equipped to start investing wisely and consistently.",
  },
  {
    title: "Step 4: Build Real Wealth Without Quitting Your 9–5 or Burning Out",
    subtitle: "Create a practical wealth-building plan that fits your current job, lifestyle, and time constraints.",
    points: [
      "Identify your next income opportunity without risking your paycheck",
      "Discover simple, actionable income streams that don’t require massive capital",
      "Protect your wealth while building legacy income for your family",
    ],
    description:
      "You’ll leave this module with practical strategies to grow your income confidently while maintaining financial security.",
  },
  {
    title: "Step 5: Get Personalized Answers, Accountability, and a Clear Next-Step Action Plan",
    subtitle: "Leave with your questions answered, blind spots exposed, and a simple execution plan you can actually follow.",
    points: [
   
    ],
    description:
      "This is where the transformation becomes real. You'll finalize your personal 90-day roadmap and get your most pressing questions answered live.",
  },
];

const SectionEightEb = () => {
   const scrollToTickets = () => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="w-full bg-[#08070F] text-white py-16 sm:py-20 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
{/* 
            <p className="text-base sm:text-lg  text-gray-300 max-w-4xl mx-auto leading-relaxed">
Most people don’t fail at wealth because they don’t earn enough.
 They fail because:
They don’t know what to focus on
They don’t have a system
They don’t trust their decisions
This webinar fixes that—in 90 minutes.
This keeps emotional momentum high.          </p> */}



          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-wide mb-3 sm:mb-4">
            The 90-Minute Live Webinar Breakdown
          </h2>
          <p className="text-base sm:text-lg  text-gray-300 max-w-4xl mx-auto leading-relaxed">
      This isn't theory. This isn't motivation. This is a plug-and-play wealth system designed for hardworking people stuck paycheck-to-paycheck, saving without building wealth and living without a clear financial plan to protect and multiply their money.
          </p>
        </div>

        {/* MODULE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {modules.map((m, index) => (
            <div
              key={index}
              className={`bg-[#0F0D18] border border-[#1F1C2C] rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300
                ${index === 4 ? "md:col-span-2 md:max-w-[90%] md:mx-auto" : ""}
              `}
            >
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-[#BD9A35] tracking-wide mb-1 sm:mb-2">
                {m.title}
              </h3>

              <h4 className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 sm:mb-4">{m.subtitle}</h4>


              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-base">
                {m.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#BD9A35] text-lg sm:text-xl md:text-xl font-bold mt-1">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
                            <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-base">{m.description}</p>

            </div>
          ))}
        </div>

        
  <div className="text-center mt-14">
        <button
  onClick={scrollToTickets}
  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
  I Want Clarity With My Money
</button>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">

              {/* Secure Checkout */}
              <div className="flex items-center  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#E6C677]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 
                    2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z"
                  />
                </svg>

                <span className="text-gray-300 text-xs sm:text-lg">
                  100% Secure Checkout
                </span>
              </div>

              {/* Money Back */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#E6C677]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 
                    12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="text-gray-300 text-xs sm:text-lg">
7-Day Money Back Guarantee                </span>
              </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEightEb;
