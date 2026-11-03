import React, { useState, useEffect } from "react";
import GeneralPaymentCheckoutEbEb from '../../components/WealthClarity/GeneralPaymentCheckoutEb'
import VipPaymentCheckoutEb from '../../components/WealthClarity/VipPaymentCheckoutEb'


const SectionSixteenEb = () => {
       const [modalType, setModalType] = useState(null);
  
const [timeLeft, setTimeLeft] = useState({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

useEffect(() => {
  // 6:00 PM Chicago time on January 28, 2027 (CST, UTC-6)
  const targetDate = new Date("2027-01-28T18:00:00-06:00");

  const updateCountdown = () => {
    const now = Date.now();
    const diff = targetDate.getTime() - now;

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
    <section className="bg-[#08070F] text-white px-4 sm:px-6 py-20">
      <div className="max-w-[1200px] mx-auto text-center space-y-16">
        {/* Heading */}
     <div className="space-y-6 max-w-5xl mx-auto text-center">
  <h3 className="text-3xl sm:text-3xl font-bold leading-tight">
    You don’t need more motivation.
    <br />
    You don’t need another YouTube video.
    <br />
    You need clarity and a system. This webinar gives you both.
  </h3>

  <p className="text-gray-300 text-lg">The Webinar Is:</p>

  <p className="text-xl sm:text-2xl font-semibold">
Thursday, January 28th, 2027
  </p>
</div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[#BD9A35]">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl sm:text-7xl md:text-8xl font-extrabold drop-shadow-[0_0_10px_rgba(189,154,53,0.8)]">
                {item.value}
              </div>
              <div className="text-gray-400 text-sm sm:text-lg mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tickets Section (unchanged) */}
         <div className="grid gap-6 sm:grid-cols-2 mt-8">
  {/* GENERAL */}
  <div className="bg-[#181349] rounded-3xl p-8 flex flex-col items-center space-y-4 hover:scale-105 transition">
    <p className="text-gray-300 font-semibold">6:00 PM - 7:30 PM CST</p>
    <h3 className="text-3xl font-bold text-[#BD9A35]">General Admission</h3>
    <p className="text-xl font-semibold">$77</p>
   


     <button
  onClick={() => setModalType("general")}
  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
  hover:bg-red-700 hover:scale-105 transition-transform duration-300 w-full"
>
  Yes, I’m Ready – Register Now
</button>


    {/* Secure Checkout & Money Back Side by Side */}
    <div className="flex flex-wrap justify-center gap-6 mt-5">
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
            d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z"
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-gray-300 text-xs sm:text-lg">
          7-Day Money Back Guarantee
        </span>
      </div>
    </div>
  </div>

  {/* VIP */}
  <div className="bg-[#181349] rounded-3xl p-8 flex flex-col items-center space-y-4 hover:scale-105 transition">
    <p className="text-gray-300 font-semibold">6:00 PM - 8:30 PM CST</p>
    <h3 className="text-3xl font-bold text-[#BD9A35]">VIP Experience</h3>
    <p className="text-xl font-semibold">$157</p>
 


  <button
  onClick={() => setModalType("vip")}
  className="w-full bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
  hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
     Upgrade to VIP
 </button>




    {/* Secure Checkout & Money Back Side by Side */}
    <div className="flex flex-wrap justify-center gap-6 mt-5">
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
            d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z"
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-gray-300 text-xs sm:text-lg">
          7-Day Money Back Guarantee
        </span>
      </div>
    </div>
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
        {modalType === "general" && <GeneralPaymentCheckoutEbEb />}
        {modalType === "vip" && <VipPaymentCheckoutEb />}
      </div>

    </div>
  </div>
)}


</div>


        {/* SUPPORT */}
        <p className="text-gray-400 text-sm sm:text-lg mt-12">
          Still have questions? <br />
          Email us at{" "}
          <span className="text-[#BD9A35]">gustav@gustavachu.com</span> and we’ll
          get back to you within 24 hours.
        </p>
        {/* ... Your General and VIP ticket code remains the same ... */}
      </div>
    </section>
  );
};

export default SectionSixteenEb;
