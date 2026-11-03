import React, { useEffect, useState } from "react";
import GeneralPaymentCheckout from '../../components/WealthClarity/GeneralPaymentCheckout'
import VipPaymentCheckout from '../../components/WealthClarity/VipPaymentCheckout'


const SectionTenandEleven = () => {
const [timeLeft, setTimeLeft] = useState("");
const [modalType, setModalType] = useState(null);

useEffect(() => {
  // Thursday, January 28, 2027 — 6:00 PM CST
  const targetDate = new Date("2027-01-28T18:00:00-06:00");

  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      setTimeLeft("Closed");
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    setTimeLeft(`${days}d ${hours}h ${minutes}m`);
  }, 1000);

  return () => clearInterval(interval);
}, []);


  return (
    <div
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      id="tickets-section"
    >
      {/* SECTION TITLE */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight text-center mb-2 sm:mb-6">
        Choose Your Ticket
      </h2>

      <p className="text-black text-base sm:text-lg md:text-xl text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
        You’re one clear plan away from changing your financial trajectory. Choose how much support you want.
      </p>

      {/* TICKETS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

        {/* ===================== */}
        {/* GENERAL ADMISSION */}
        {/* ===================== */}
        <div className="bg-[#08070F] border border-[#1f1d2c] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col">
          {/* HEADER */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-1">
              General Admission
            </h3>

            <p className="text-sm text-gray-400 mb-2">6:00 PM – 7:30 PM CST</p>

            <p className="text-gray-300 text-sm sm:text-base mb-3">
              For those who want the full 90-day wealth framework
            </p>

            <p className="text-4xl sm:text-5xl font-bold text-white">$97</p>

            {/* URGENCY */}
          <p className="mt-2 text-red-500 font-bold text-sm sm:text-base">
  Registration closes in:{" "}
  <span className="animate-blink">{timeLeft}</span>
</p>

            <p className="text-red-500 text-sm sm:text-base">
              Seats are limited to ensure quality delivery
            </p>
          </div>

          {/* BENEFITS */}
       <ul className="space-y-3 text-gray-200 text-sm sm:text-base leading-relaxed mb-8">
  <li className="flex gap-2">
    <span>✔️</span>
    <span>90-Minute Live Webinar With Gustav Achu</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>The Wealth Clarity Workbook (PDF)</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>90-Day Money Plan Template (PDF)</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>Webinar Replay Access (30 Days)</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>14-Day Accountability Sprint (#YouREnough WhatsApp Community)</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>BONUS: The Ultimate Investment Playbook (PDF)</span>
  </li>
</ul>


          {/* CTA */}
     <button
  onClick={() => setModalType("general")}
  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
  hover:bg-red-700 hover:scale-105 transition-transform duration-300 w-full"
>
  Register Now – General Admission
</button>

          {/* SECURE CHECKOUT / GUARANTEE */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E6C677]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z" />
              </svg>
              <span className="text-gray-300 text-xs sm:text-lg">100% Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E6C677]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300 text-xs sm:text-lg">7-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* VIP EXPERIENCE */}
        {/* ===================== */}
        <div className="relative bg-gradient-to-br from-[#BD9A35] to-[#a17f2e] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl text-white flex flex-col hover:scale-[1.02] transition duration-300">
          {/* BEST VALUE BADGE */}
          <div className="absolute top-4 right-4 bg-black text-[#E6C677] text-xs sm:text-lg font-semibold px-3 py-1 rounded-full">
            Best Value
          </div>

          {/* HEADER */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
              VIP Experience <br className="block sm:hidden" /> <span className="hidden sm:inline"> </span>(Most Popular)
            </h3>

            <p className="text-sm mb-2">6:00 PM – 8:30 PM CST</p>
            <p className="text-sm sm:text-base mb-3">For those who want clarity tailored to their situation</p>
            <p className="text-4xl sm:text-5xl font-bold">$197</p>

            {/* SCARCITY */}
            <p className="mt-2 text-[#bf0606] font-extrabold text-sm sm:text-base">
              VIP seats limited to <span className="animate-blink">30 participants</span>
            </p>
            <p className="text-[#bf0606] font-extrabold text-sm sm:text-base">
              VIP closes before General Admission.. Act now
            </p>
          </div>

          {/* BENEFITS */}
       <ul className="space-y-3 text-sm sm:text-base leading-relaxed mb-8">
  <li className="flex gap-2">
    <span>✔️</span>
    <span>Everything In General Admission</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>Guaranteed Q&A Time With Gustav</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>Extended Live Session</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>VIP Only: 50-10-20-20 Income Structuring Calculator</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>VIP Only Bonus: The Wealth Architect Playbook</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>Early Access To Future Offers</span>
  </li>

  <li className="flex gap-2">
    <span>✔️</span>
    <span>
      If clarity and speed matter more than saving a few dollars, VIP is the
      obvious choice.
    </span>
  </li>
</ul>


          {/* CTA */}
        <button
  onClick={() => setModalType("vip")}
  className="w-full bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
  hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
  Access Now – VIP Experience
</button>

          {/* SECURE CHECKOUT / GUARANTEE */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E6C677]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z" />
              </svg>
              <span className="text-black text-xs sm:text-lg">100% Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E6C677]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-black text-xs sm:text-lg">7-Day Money Back Guarantee</span>
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
        {modalType === "general" && <GeneralPaymentCheckout />}
        {modalType === "vip" && <VipPaymentCheckout />}
      </div>

    </div>
  </div>
)}
      </div>

      {/* BLINK ANIMATION */}
    {/* BLINK ANIMATION */}
<style>{`
  @keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 3s infinite; /* slower blink */
    color: #FF0000; /* bright red */
    text-shadow: 1px 1px 3px rgba(0,0,0,0.7); /* makes it pop on gradient */
    font-weight: bold;
  }
`}</style>

    </div>
  );
};

export default SectionTenandEleven;
