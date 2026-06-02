import React from 'react';
import HeaderImage from '../../images/gustavImages/EventGustav.webp';


const SectionTwelvesandThirteen = () => {
    const scrollToTickets = () => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#08070F] text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 space-y-16 sm:space-y-20 md:space-y-32">

      {/* ===================== */}
      {/* SECTION 12: Gustav Story */}
      {/* ===================== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

        {/* Left: Gustav Text */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#BD9A35]">
            LEARN FROM SOMEONE WHO'S BEEN WHERE YOU ARE
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold">GUSTAV B. ACHU</h3>
          <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-300">
            From Bankruptcy To $1,000,000+ Portfolio. Gustav isn't a guru. He's not someone who inherited wealth or got lucky with crypto. He's a regular guy who:
          </p>

          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 pl-4 text-sm sm:text-base md:text-base">
            <li>Started as a Nursing Assistant in Minnesota</li>
            <li>Became a Licensed Practical Nurse and saved $90,000</li>
            <li>Went to UC Berkeley for International Business & Marketing</li>
            <li>Lost everything doing business in Africa, had to foreclose on two homes, filed for bankruptcy, paying $100,000 to debtors, and shopped at thrift stores for 4 years.</li>
            <li>Made a decision: "This is the last time any circumstance will meet me in life unprepared."</li>
          </ul>

          <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-300 mt-2 sm:mt-4">
That’s when everything changed. Gustav started by committing 20% of his paycheck to his 401(k). He invested in his education- paying for webinars, courses, and mentors- made mistakes, and learned the hard way. Today, he helps clients avoid those same costly lessons using a simple, repeatable wealth-building strategy.          </p>

          <div className="mt-4 sm:mt-6 space-y-2">
            <h4 className="text-lg sm:text-xl md:text-xl font-semibold text-[#BD9A35]">Today, Gustav has:</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base md:text-base">
              <li>✔️ Built a portfolio worth over $1,000,000</li>
              <li>✔️ Helped hundreds of clients gain financial clarity and start building wealth</li>
              <li>✔️ Proven that regular people can build wealth without quitting their 9–5</li>
            </ul>
          </div>

          <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-lg italic text-gray-200">
            "Your paycheck isn't just to live on; it's to plant seeds that duplicate over time. True wealth is not just money; it's mindset, stewardship, and legacy."
          </p>
        </div>

        {/* Right: Gustav Highlight Box */}
     {/* Right: Image + Gustav Highlight Box */}
<div className="space-y-6 sm:space-y-8">

  {/* Gustav Image */}
  <div className="overflow-hidden rounded-2xl shadow-2xl">
    <img
      src={HeaderImage}
      alt="Gustav B. Achu"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Gustav Highlight Box */}
  <div className="bg-[#181349] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
    <h4 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#BD9A35]">
      Gustav’s Journey
    </h4>
    <p className="text-gray-200 text-sm sm:text-base md:text-base leading-relaxed">
      From struggling with bankruptcy to building a $1,000,000+ portfolio,
      Gustav's story shows that with the right mindset and strategy, regular
      people can create extraordinary financial success.
    </p>
    <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base md:text-base">
      <li>💡 Smart investing with small consistent steps</li>
      <li>💡 Learning from mistakes and adapting</li>
      <li>💡 Focus on mindset, stewardship, and legacy</li>
    </ul>
  </div>
   <div className="text-center mt-14">
         <button
  onClick={scrollToTickets}
  className="
   bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
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



      </div>

      {/* ===================== */}
      {/* SECTION 13: Not Just Another Webinar */}
      {/* ===================== */}
      <div className="max-w-[1000px] mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#BD9A35]">
          THIS IS NOT JUST ANOTHER WEBINAR
        </h2>
        {/* <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold">A New Kind Of Training</h3> */}
        <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I know what you're probably thinking: "Oh brother, not another financial webinar that overpromises and underdelivers!"
        </p>
        <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed">
          Well, you're right. It's not another webinar.
        </p>

        <div className="bg-[#181349] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mt-6 sm:mt-8 space-y-4 text-left">
          <ul className="list-disc list-inside text-gray-200 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-base">
            <li>It is the most comprehensive, yet simple-to-understand 90-minute intensive designed to help you finally take control of your money so your family will thank you for stepping up and building the legacy they deserve.</li>
            <li>Have you ever attended a financial seminar and walked away more confused than when you started?</li>
            <li>Have you ever tried to build wealth but felt paralyzed by fear of losing what little you have?</li>
            <li>If you have, or haven't, then you have a lot to learn about creating financial clarity and building a system that actually works.</li>
          </ul>
        </div>

           <div className="text-center mt-10 sm:mt-16">
   <button
  onClick={() => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
  bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
  I Want Clarity With My Money
 
 </button>

<div className="flex flex-wrap items-center justify-center gap-6 mt-5">

              {/* Secure Checkout */}
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

      

    </div>
  );
};

export default SectionTwelvesandThirteen;
