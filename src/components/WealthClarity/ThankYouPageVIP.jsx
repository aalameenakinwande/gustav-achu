import React from "react";

// Import PDF files from your project

import WealthClarityWorkbook from "../../Document/WealthClarityWorkbook.pdf";
import InvestmentPlaybook from "../../Document/InvestmentPlaybook.pdf";
import TheWealthArchitect from "../../Document/TheWealthArchitect.pdf";
import DayMoneyPlan from "../../Document/The-YouREnough-90-Day-Money-Plan.pdf";


const ThankYouPageVIP = () => {
  return (
    <div className="min-h-screen bg-[#0F0B2E] text-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block bg-[#BD9A35] text-[#181349] text-xs font-bold px-4 py-1 rounded-full tracking-wide">
            VIP EXPERIENCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Welcome To The VIP Experience
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-7xl">


            Your VIP seat for the <span className="font-semibold text-white">Wealth Clarity & Legacy Blueprint Webinar</span>    is confirmed.




          </p>

              <p className="text-gray-300 text-base sm:text-lg max-w-7xl">


The VIP experience is intentionally limited for ambitious action-takers who refuse to guess. You get Gustav’s direct attention through live interaction and priority Q&A, personalized guidance aligned to your goals, and real-time insight—guidance most attendees never get—so you leave with clarity, confidence, and a clear path forward. 




          </p>


              <p className="text-gray-300 text-base sm:text-lg max-w-7xl">




Please use the general admission link to attend the general admission session at 6:00 PM – 7:30 PM CST, after which you will use the vip webinar link below to attend the exclusive VIP-ONLY question and answer session from 7:30 PM – 8:30 PM CST



          </p>
        </div>

        {/* Intro */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <p className="text-gray-200">
            This gives you <span className="font-semibold text-white">extended time</span>, guaranteed access to Gustav,
            and deeper personalization of your <span className="font-semibold text-white">90-day wealth plan</span>.
          </p>
        </div>

        {/* General Admission Details */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            General Admission Webinar Details
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li><strong>Date:</strong> Thursday, February 26th, 2026</li>
            <li><strong>Time:</strong> 6:00 PM – 7:30 PM CST</li>
            <li><strong>Location:</strong> Live on Zoom</li>
          </ul>

          <a
            href="https://us06web.zoom.us/meeting/register/tC5XKi7MQlOJK5e7ZHdETQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            JOIN GENERAL ADMISSION WEBINAR
          </a>

          <p className="text-sm text-gray-400 mt-2">
            Save this link — it’s your access to the general session.
          </p>
        </div>

        {/* VIP Webinar Details */}
        <div className="bg-[#181349] border border-[#BD9A35]/40 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            VIP Webinar Details
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li><strong>Date:</strong> Thursday, February 26th, 2026</li>
            <li><strong>Time:</strong> 7:30 PM – 8:30 PM CST</li>
            <li><strong>Location:</strong> Live on Zoom</li>
          </ul>

          <a
            href="https://us06web.zoom.us/meeting/register/TPuC-K6gSEqhTvPYBlVACg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            JOIN VIP EXPERIENCE
          </a>

          <p className="text-sm text-gray-400 mt-2">
            This link is exclusive to VIP attendees.
          </p>
        </div>

        {/* VIP Preparation Resources */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            Download Your Webinar Resources
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>
              • <a href={WealthClarityWorkbook} download className="text-[#BD9A35] font-semibold hover:underline">
                DOWNLOAD – The Wealth Clarity Workbook (PDF)
              </a>
            </li>
            <li>
              • <a href={DayMoneyPlan} download className="text-[#BD9A35] font-semibold hover:underline">
                DOWNLOAD – The 90-Day Money Plan Template (PDF)
              </a>
            </li>
            <li>
              • <a href={InvestmentPlaybook} download className="text-[#BD9A35] font-semibold hover:underline">
                DOWNLOAD – The Ultimate Investment Playbook (PDF)
              </a>
            </li>
            <li>
              • <a href={TheWealthArchitect} download className="text-[#BD9A35] font-semibold hover:underline">
                DOWNLOAD – The Wealth Architect Playbook (PDF)
              </a>
            </li>
               <li>
              • <a
  href="https://docs.google.com/spreadsheets/d/1TUlypdEhvQ6Rn_G4IzdRCQs1RPzW4ktURh580zdSgnQ/edit?gid=944304887#gid=944304887"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#BD9A35] font-semibold hover:underline"
>
  MAKE A COPY – The 50-10-20-20 Income Structuring Calculator
</a>

            </li>

             <li>
    • <a href="https://chat.whatsapp.com/E1THU5dlbW05lCqVnYQHd9" download className="text-[#BD9A35] font-semibold hover:underline"> Join the 14-Day Accountability Sprint in the #YouREnough# WhatsApp Community


      </a>
  </li>
          </ul>
        </div>
        {/* VIP Benefits */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            What Makes VIP Different
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>✔️ Guaranteed live Q&A with Gustav</li>
            <li>✔️ Extended private session time</li>
            <li>✔️ VIP-Only 50-10-20-20 Income Structuring Calculator</li>
            <li>✔️ Priority access to future programs</li>
          </ul>
        </div>

        {/* How to get most value */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            How To Get The Most Value
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>✔️ Arrive early</li>
            <li>✔️ Come with your questions ready</li>
            <li>✔️ Be prepared to engage — this is a working session</li>
          </ul>
        </div>


                {/* Wealth Architect Book Offer */}
        <div className="bg-gradient-to-br from-[#181349] to-[#0F0B2E] border border-[#BD9A35]/40 rounded-xl p-6 sm:p-8 space-y-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#E6C677]">
            Special VIP Gift: The Wealth Architect Playbook
          </h2>

          <p className="text-gray-300">
            As a VIP attendee, you now have access to Gustav’s powerful framework
            for building structured, intentional, and generational wealth.
          </p>

          {/* <p className="text-gray-200">
            <span className="font-semibold text-white">The Wealth Architect Playbook</span> 
            is the blueprint serious builders use to move from income to ownership, 
            from earning to equity, and from activity to legacy.
          </p> */}

          {/* <div className="bg-white/5 rounded-lg p-4 space-y-2">
            <ul className="space-y-2 text-gray-200">
              <li>✔️ How to structure wealth intentionally</li>
              <li>✔️ The mindset shift from consumer to architect</li>
              <li>✔️ Practical wealth-building systems you can implement immediately</li>
            </ul>
          </div> */}

          {/* <a
            href={TheWealthArchitect}
            download
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            DOWNLOAD THE WEALTH ARCHITECT PLAYBOOK
          </a>

          <p className="text-sm text-gray-400">
            This resource is included exclusively for VIP participants.
          </p> */}
        </div>


        {/* Email Notice */}
        <div className="text-center space-y-3">
          <p className="text-gray-300 font-semibold">
            Check Your Email
          </p>
          <p className="text-gray-400 text-sm">
            Your inbox now contains:
            <ul className="mt-2 text-gray-200 list-disc list-inside space-y-1">
              <li>Your VIP Zoom link</li>
              <li>Event reminders</li>
              <li>VIP preparation instructions</li>
            </ul>
          </p>
          <p className="text-gray-300 mt-4">
            We’re excited to work closely with you.
          </p>
          <p className="font-semibold text-white">
            — Gustav & The Wealth Clarity Team
          </p>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPageVIP;
