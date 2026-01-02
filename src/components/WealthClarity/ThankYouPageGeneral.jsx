import React from "react";

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
        </div>

        {/* Intro */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <p className="text-gray-200">
            You’ve just taken an important step toward gaining
            <span className="font-semibold text-white"> clarity</span>,
            <span className="font-semibold text-white"> structure</span>, and
            <span className="font-semibold text-white"> confidence</span> with your money.
          </p>
          <p className="text-gray-300">
            We’re excited to have you join us live.
          </p>
        </div>

        {/* Webinar Details */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            Webinar Details
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>🗓 <strong>Date:</strong> Thursday, January 29th, 2026</li>
            <li>⏰ <strong>Time:</strong> 6:00 PM – 7:30 PM EST</li>
            <li>📍 <strong>Location:</strong> Live on Zoom</li>
          </ul>

          <a
            href="https://us06web.zoom.us/meeting/register/tC5XKi7MQlOJK5e7ZHdETQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            Join the Webinar – General Admission
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

        {/* What You'll Work On */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            What You’ll Be Working On Live
          </h2>
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
            Check Your Email 📩
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
        <div className="bg-[#181349] border border-[#BD9A35]/40 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            Want Deeper Access?
          </h2>
          <p className="text-gray-300">
            Upgrade to VIP to get:
          </p>
          <ul className="space-y-2 text-gray-200">
            <li>• Guaranteed live Q&A with Gustav</li>
            <li>• Extended session time</li>
            <li>• VIP-only planning tools</li>
          </ul>

          <a
            href="https://buy.stripe.com/4gM9AV0fB0uc3pQczGfw40E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            Upgrade to VIP Experience
          </a>
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
