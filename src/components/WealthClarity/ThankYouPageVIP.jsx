import React from "react";

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
          <p className="text-gray-300 text-base sm:text-lg">
            You’re officially registered for the <span className="font-semibold text-white">VIP Experience</span> of the
            Wealth Clarity & Legacy Blueprint Webinar.
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
            Join General Admission Webinar
          </a>

          <p className="text-sm text-gray-400 mt-2">
            Save this link — it’s your access to the general session.
          </p>
        </div>

        {/* VIP Details */}
        <div className="bg-[#181349] border border-[#BD9A35]/40 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            VIP Webinar Details
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>🗓 <strong>Date:</strong> Thursday, January 29th, 2026</li>
            <li>⏰ <strong>Time:</strong> 7:30 PM – 8:30 PM EST</li>
            <li>📍 <strong>Location:</strong> Live on Zoom</li>
          </ul>

          <a
            href="https://us06web.zoom.us/meeting/register/TPuC-K6gSEqhTvPYBlVACg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#BD9A35] hover:bg-[#a9872f] text-black font-bold px-6 py-3 rounded-lg transition"
          >
            Join VIP Experience
          </a>

          <p className="text-sm text-gray-400 mt-2">
            This link is exclusive to VIP attendees.
          </p>
        </div>

        {/* VIP Benefits */}
        <div className="bg-white/5 rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-[#E6C677]">
            What Makes VIP Different
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>✔️ Guaranteed live Q&A with Gustav</li>
            <li>✔️ Extended private session time</li>
            <li>✔️ VIP-only 90-Day Plan Review Template</li>
            <li>✔️ Priority access to future programs</li>
          </ul>
        </div>

        {/* How to get value */}
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

        {/* Email Notice */}
        <div className="text-center space-y-3">
          <p className="text-gray-300">
            📩 <strong>Check Your Email</strong>
          </p>
          <p className="text-gray-400 text-sm">
            Your inbox now contains your VIP Zoom link, event reminders,
            and VIP preparation instructions.
          </p>
          <p className="text-gray-300 mt-6">
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
