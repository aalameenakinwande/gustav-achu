import React from "react";
import WealthClarityWorkbook from "../../Document/WealthClarityWorkbook.pdf";
import InvestmentPlaybook from "../../Document/InvestmentPlaybook.pdf";
import DayMoneyPlan from "../../Document/The-YouREnough-90-Day-Money-Plan.pdf";

const ThankYouPageGeneral = () => {
  return (
    <div className="min-h-screen bg-[#0F0B2E] text-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto space-y-10">



        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
            GENERAL ADMISSION
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold">
            You’re In! Your Seat Is Officially Reserved
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Welcome to <span className="font-semibold text-white">
              The Wealth Clarity & Legacy Blueprint Webinar
            </span>.
          </p>
          <p className="text-gray-200">
            You’ve just taken an important step toward gaining 
            <span className="font-semibold text-white"> clarity</span>, 
            <span className="font-semibold text-white"> stsructure</span>, and 
            <span className="font-semibold text-white"> confidence</span> with your money — and we’re excited to have you with us.
          </p>
        </div>

{/* Welcome Video */}
<div className="bg-white/5 rounded-xl p-4 sm:p-6">
  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
    
    {/* Blurred background */}
    <video
      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="https://res.cloudinary.com/deofmlywm/video/upload/v1769768987/VIP_Upgrade_Ad_1_1_1_1_wlp15r.mp4"
        type="video/mp4"
      />
    </video>

    {/* Main video */}
    <video
      className="relative z-10 h-full w-auto mx-auto object-contain rounded-lg"
      autoPlay
      muted
      loop
      playsInline
      controls
    >
      <source
        src="https://res.cloudinary.com/deofmlywm/video/upload/v1769768987/VIP_Upgrade_Ad_1_1_1_1_wlp15r.mp4"
        type="video/mp4"
      />
    </video>

  </div>
</div>


        {/* Webinar Details */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            Webinar Details
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li><strong>Date:</strong> Thursday, Feb 26th, 2026</li>
            <li><strong>Time:</strong> 6:00 PM – 7:30 PM CST</li>
            <li><strong>Location:</strong> Live on Zoom</li>
          </ul>

          <a
            href="https://us06web.zoom.us/meeting/register/tC5XKi7MQlOJK5e7ZHdETQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            JOIN THE WEBINAR – GENERAL ADMISSION
          </a>

          <p className="text-sm text-gray-400 mt-2">
            Save this link — it’s your access to the live session.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            What To Do Next (Important)
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>✔️ Add this event to your calendar</li>
            <li>✔️ Join 5–10 minutes early to avoid technical issues</li>
            <li>✔️ Come with a notebook or the Wealth Clarity Workbook</li>
            <li>✔️ Be ready to participate — this is not a passive session</li>
          </ul>
        </div>

        {/* Preparation Resources */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            Your Preparation Resources (Download Before the Webinar)
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
    • <a href="https://chat.whatsapp.com/E1THU5dlbW05lCqVnYQHd9" download className="text-[#BD9A35] font-semibold hover:underline">
 Join the 14-Day Accountability Sprint in the #YouREnough# WhatsApp Community


      </a>
  </li>
</ul>

        </div>

        {/* What You'll Work On */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            What You’ll Be Working On Live
          </h2>
          <p className="text-gray-200">
            During this 90-minute experience, you’ll:
          </p>
          <ul className="space-y-2 text-gray-200">
            <li>• Gain crystal-clear awareness of where you stand financially</li>
            <li>• Learn a simple, repeatable wealth-building system</li>
            <li>• Build your personal 90-Day Money Roadmap</li>
            <li>• Understand how to grow wealth without quitting your 9–5</li>
          </ul>
        </div>

        {/* Email Notice */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            Check Your Email
          </h2>
          <p className="text-gray-300">
            We’ve just sent you a confirmation email with:
          </p>
          <ul className="space-y-2 text-gray-200">
            <li>✔️ Your Zoom link</li>
            <li>✔️ Event reminders</li>
            <li>✔️ What to prepare before the webinar</li>
          </ul>
          <p className="text-sm text-gray-400">
            If you don’t see it in 5 minutes, check your spam or promotions folder.
          </p>
        </div>

        {/* VIP Upsell */}
   <div className="bg-[#181349] border border-[#BD9A35]/40 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-xl">
  
  <h2 className="text-2xl sm:text-3xl font-bold text-[#E6C677] leading-snug">
    If clarity and speed matter more than saving a few dollars, Upgrade to VIP to get everything in General Admission PLUS:
  </h2>

  <ul className="space-y-3 text-gray-200 text-base sm:text-lg">
    <li>✔ Guaranteed Live Q&A With Gustav</li>
    <li>✔ Extended Private VIP Session (Additional 60 Minutes)</li>
    <li>✔ VIP-Only 50-10-20-20 Income Structuring Calculator</li>
    <li>✔ The Wealth Architect Playbook</li>
    <li>✔ Priority Access To Future Programs</li>
    <li>✔ Direct strategic clarity on your situation</li>
    <li>✔ 7-Day Money Back Guarantee</li>
  </ul>

  <div className="pt-4">
    <a
      href="https://buy.stripe.com/4gM9AV0fB0uc3pQczGfw40E"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full sm:w-auto text-center bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-8 py-4 rounded-xl transition duration-300 text-base sm:text-lg shadow-lg hover:scale-105"
    >
       UPGRADE TO VIP EXPERIENCE
    </a>
  </div>

</div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-gray-300">
            We’ll see you live.
          </p>
          <p className="font-semibold text-white">
            — Gustav & The Wealth Clarity Team
          </p>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPageGeneral;
