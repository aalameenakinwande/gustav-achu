import React, { useState, useEffect } from "react";

import VipPaymentCheckoutEb from "../WealthClarity/VipPaymentCheckoutEb";
import GeneralPaymentCheckoutEb from "../WealthClarity/GeneralPaymentCheckoutEb";

const packageItems = [
  {
    title: "The 90-Minute Live Webinar (Main Event)",
    value: "$997",
    description:
      "The core training where you'll gain clarity, learn the system, and build your personalized wealth plan in real time.",
  },
  {
    title: "The Wealth Clarity Workbook (PDF)",
    value: "$247",
    description:
      "A simple, clean workbook you'll fill out during the webinar. This is what gives you the feeling of structure, completion, and progress.",
    includes: [
      "Your current income + spending audit",
      "Your ideal financial picture",
      "Income structure model",
      "Your savings: how much, where, how often",
      'Your personal "next income stream" roadmap',
      "Accountability checklist",
    ],
  },
  {
    title: "The 90-Day Money Plan Template (PDF)",
    value: "$297",
    description:
      "A plug-and-play tracker to help you organize and monitor your finances so you finally feel in control.",
    includes: [
      "Income tracker",
      "Savings & investing tracker",
      "Basic budget template",
      "Habit tracker",
      "Income stream activation checklist",
    ],
  },
  {
    title: "Webinar Replay Access (30 Days)",
    value: "$297",
    description:
      "Rewatch the full session anytime you need a refresher. This alone is worth the price of admission.",
  },
  {
    title: "14-Day Accountability Sprint (#YouREnough# WhatsApp Community)",
    value: "$329",
    description:
      "You won't be alone after the webinar. Join a supportive community for daily check-ins, habit reminders, and encouragement.",
    includes: [
      "Daily money habit reminders",
      "3 check-ins weekly",
      "Supportive environment with other wealth builders",
      "Voice notes and guidance from Gustav (not every day, but when it matters)",
    ],
  },
  {
    title: "BONUS: The Ultimate Investment Playbook (PDF)",
    value: "$200",
    description:
      "A beginner-friendly investment guide to help you avoid mistakes and build a portfolio you trust.",
    includes: [
      "Invest consistently (without second-guessing yourself)",
      "Avoid costly mistakes",
      "Build a portfolio you can trust",
      "Create your own financial freedom playbook",
    ],
  },
];

const SectionNineEb = () => {
     const [modalType, setModalType] = useState(null);
  
  

     const scrollToTickets = () => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
const [timeLeft, setTimeLeft] = useState({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

useEffect(() => {
  // January 28, 2027, at 6:00 PM Chicago time (CST, UTC-6)
  const targetDate = new Date("2027-01-28T18:00:00-06:00");

  const updateCountdown = () => {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
      setTimeLeft({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return;
    }

    const days = String(
      Math.floor(diff / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");

    const hours = String(
      Math.floor((diff / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");

    const minutes = String(
      Math.floor((diff / (1000 * 60)) % 60)
    ).padStart(2, "0");

    const seconds = String(
      Math.floor((diff / 1000) % 60)
    ).padStart(2, "0");

    setTimeLeft({ days, hours, minutes, seconds });
  };

  updateCountdown();

  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="w-full bg-[#08070F] text-white py-16 sm:py-20 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto">

        {/* HEADER */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
          Your Complete Webinar Package
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl text-center mb-12 sm:mb-16">
          When You Register Today, You Get:
        </p>

        {/* VALUE STACK */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {packageItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#100E1A] border border-[#1E1A2A] p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#BD9A35]">
                  {item.title}
                </h3>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-white bg-[#BD9A35]/20 border border-[#BD9A35] px-3 py-1 rounded-lg">
                  Value: {item.value}
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-base mb-3 sm:mb-4">
                {item.description}
              </p>

              {item.includes && (
                <ul className="space-y-1 sm:space-y-2 mt-2 sm:mt-4">
                  {item.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#BD9A35] text-base sm:text-lg md:text-lg mt-1">✔</span>
                      <span className="text-gray-300 text-sm sm:text-base md:text-base">{inc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* TOTAL VALUE */}
      {/* TOTAL VALUE + DISCOUNT */}
<div className="text-center mt-12 sm:mt-16">

  {/* Cancelled total value */}
  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-400 mb-3">
    Total Value:{" "}
    <span className="line-through text-gray-500">$2,367</span>
  </p>

  {/* Discounted pricing */}
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
    Get Access Today For:
  </h3>

  <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto">

    {/* General Admission */}
    <div className="flex-1 bg-[#100E1A] border border-[#1E1A2A] rounded-2xl p-6 shadow-lg">
      <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
        General Admission
      </p>
      <p className="text-4xl font-extrabold text-[#BD9A35] mb-4">$77</p>

    {/* <button
  onClick={scrollToTickets}
  className="
   bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
  Get General Access
</button> */}

 <button
  onClick={() => setModalType("general")}
  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
  hover:bg-red-700 hover:scale-105 transition-transform duration-300 w-full"
>
  Get General Access
</button>

    </div>

    {/* VIP */}
    <div className="flex-1 bg-[#15121F] border-2 border-[#BD9A35] rounded-2xl p-6 shadow-[0_0_25px_rgba(189,154,53,0.35)]">
      <p className="text-sm uppercase tracking-wide text-[#E6C677] mb-2">
        VIP Access
      </p>
      <p className="text-4xl font-extrabold text-[#BD9A35] mb-2">$157</p>
      <p className="text-sm text-gray-300 mb-4">
        Priority support + best experience
      </p>

   <button
  onClick={() => setModalType("vip")}
  className="w-full bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
  hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
   Get VIP Access </button>

    </div>

  </div>
</div>


        {/* CTA */}
        {/* <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <a
            href="#"
            className="inline-block bg-[#BD9A35] hover:bg-[#a9862c] text-black font-bold text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl shadow-lg transition-all duration-300"
          >
            Secure My Seat
          </a>
        </div> */}

        {/* REGISTRATION + COUNTDOWN */}
        <div className="mt-20 sm:mt-24">
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
            You Can Register In Two Ways
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8">
            ✔️ Attend The Live Webinar  
            <br />
            ✔️ Replay Available for 30 Days After Live Session
          </p> */}

          <p className="text-center text-gray-400 mb-6 sm:mb-8">
            The Webinar Is: <br />
            <span className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
 Thursday, January 28th, 2027

        </span>
          </p>

          {/* COUNTDOWN */}
          <div className="w-full flex flex-row sm:flex-row justify-center items-center gap-6 sm:gap-10 bg-[#100E1A] border border-[#1E1A2A] p-6 sm:p-8 rounded-2xl shadow-lg">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
              <div key={idx} className="text-center flex-1">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#BD9A35] drop-shadow-[0_0_15px_rgba(189,154,53,0.8)]">
                  {label === "Days" ? timeLeft.days :
                   label === "Hours" ? timeLeft.hours :
                   label === "Minutes" ? timeLeft.minutes :
                   timeLeft.seconds}
                </div>
                <div className="text-gray-400 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">{label}</div>
              </div>
            ))}
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

          {/* SECOND CTA */}
          {/* <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <a
              href="#"
              className="inline-block bg-[#BD9A35] hover:bg-[#a9872c] text-black font-bold text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl shadow-lg transition-all duration-300"
            >
              Register Now
            </a>
          </div> */}
        </div>
              {modalType && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
    
    <div className="relative w-full max-w-6xl bg-black rounded-2xl">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setModalType(null)}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        ×
      </button>

      {/* MODAL CONTENT */}
      <div className="max-h-[90vh] overflow-y-auto">
        {modalType === "general" && <GeneralPaymentCheckoutEb />}
        {modalType === "vip" && <VipPaymentCheckoutEb />}
      </div>

    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default SectionNineEb;
