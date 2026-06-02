// Watch.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const Watch = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#0F0C29] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32">

        {/* ================= SECTION 1: VIDEO AREA ================= */}
        <div className="max-w-5xl w-full text-center mb-24 space-y-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Discover $500–$2,000 Hiding in Your Paycheck Each Month — Watch Before Your Next Paycheck Arrives
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            This masterclass will challenge everything you think you know about money.
            <br />
            Take notes. Do not skip ahead.
          </p>

          {/* Embedded Video */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-2xl">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video object-cover"
              src="https://res.cloudinary.com/deofmlywm/video/upload/v1772012399/trimmed_masterclass_june_19th_no_upsell_1_1_1_2_ia22ft.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-24" />

        {/* ================= SECTION 2: TRANSFORMATION RECAP ================= */}
        <div className="max-w-3xl text-center space-y-6 mb-28">

          <p className="text-gray-300 text-lg">
            If what you just watched resonated, it’s because you recognized the truth:
          </p>

          <p className="text-yellow-400 text-2xl sm:text-3xl font-semibold">
            You don’t need more income. You need better money structure.
          </p>

          <p className="text-gray-300 text-lg">
            And if you’re serious about eliminating money leakage and building real wealth…
          </p>

          <p className="text-white text-xl font-semibold">
            The next step is implementation.
          </p>

          <p className="text-gray-300 text-lg">
            Your Next Move Determines Whether This Was Just Inspiration… Or Transformation.
          </p>

          <p className="text-gray-300">
            The masterclass showed you what’s possible.
          </p>

          <p className="text-gray-300">
            Now you have two options:
          </p>

          <p className="text-gray-400">
            You can go back to hoping things change…
          </p>

          <p className="text-gray-400">
            Or you can build your complete wealth structure properly
          </p>

        </div>

        {/* ================= SECTION 3: SINGLE UNIFIED OFFER BLOCK ================= */}
        <div className="max-w-4xl w-full mx-auto mb-28">

          <div className="bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-8 sm:p-10 shadow-xl space-y-16">

            {/* OPTION 1 — Strategy Call */}
            {/* <div className="space-y-6">

              <h2 className="text-2xl sm:text-3xl font-bold">
                Let’s Build Your Wealth Structure Together (Free 1:1 Strategy Call)
              </h2>

              <p className="text-gray-300">
                If you’re serious about fixing your money structure, I’m offering a limited number of private Wealth Clarity Calls.
              </p>

              <p className="text-yellow-400 font-semibold">
                This is not a sales pitch.  
                <br />
                This is a clarity call.
              </p>

              <p>If we’re a fit, I’ll show you how:</p>

              <ul className="space-y-2 text-gray-200">
                <li>✔ Identify your hidden money leaks</li>
                <li>✔ Map out your 90-day wealth structure</li>
                <li>✔ Clarify your investment direction</li>
                <li>✔ Create a personalized execution plan</li>
              </ul>

              <p className="font-medium">
                You will leave with structure and direction.
              </p>

              <p className="text-red-400 text-sm">
                ⚠ Limited spots available weekly.
              </p>

              <div className="mt-8 text-center">
                <a
                  href="https://calendly.com/gustavachu77/30mins-with-gustav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button hover:bg-red-700 hover:scale-105 transition-transform duration-300"
                >
                  BOOK MY FREE WEALTH CLARITY CALL
                </a>

                <p className="text-gray-400 text-sm mt-4">
                  Free • 30 Minutes • No Pressure • Strategic Clarity
                </p>
              </div>

            </div> */}

            {/* Divider Inside Card */}
            {/* <div className="w-full h-px bg-white/10" /> */}

            {/* OPTION 2 — Playbook */}
            <div className="space-y-6">

              <h2 className="text-2xl sm:text-3xl font-bold">
                 Build It Yourself With The Wealth Architect Playbook
              </h2>

              <p className="text-gray-300">
                If you prefer implementation at your own pace…
              </p>

              <p className="text-yellow-400 font-semibold">
                The Wealth Architect Playbook is your step-by-step blueprint to financial independence.
              </p>

              <p>This is not motivation.</p>
              <p className="font-semibold">This is structure.</p>

              <p>Inside, you’ll learn how to:</p>

              <ul className="space-y-2 text-gray-200">
                <li>1️⃣ Build your financial foundation (Emergency Fund)</li>
                <li>2️⃣ Eliminate non-mortgage debt strategically</li>
                <li>3️⃣ Protect your income and assets (Insurance Layering)</li>
                <li>4️⃣ Use tax-advantaged systems</li>
                <li>5️⃣ Let the market work for you</li>
                <li>6️⃣ Build a generational starting advantage</li>
                <li>7️⃣ Design your estate plan</li>
                <li>8️⃣ Bridge wealth across generations</li>
                <li>9️⃣ Prepare legally — not emotionally</li>
                <li>🔟 Buy back your time</li>
              </ul>

            <p className="font-semibold">
  This is how wealth is engineered.
</p>

<p className="mt-2 text-lg">
  One-time investment: $9.99
</p>

<p className="text-lg">
  Instant Digital Access
</p>

{/* <div className="mt-6">
  <button
    onClick={() => navigate("/pre-checkout")}
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button hover:bg-red-700 hover:scale-105 transition-transform duration-300"
  >
    YES — GIVE ME THE WEALTH ARCHITECT PLAYBOOK
  </button>
</div> */}

              <div className="mt-8 text-center">
                <button
                  onClick={() => navigate("/pre-checkout")}
                  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button hover:bg-red-700 hover:scale-105 transition-transform duration-300"
                >
    YES — GIVE ME THE WEALTH ARCHITECT PLAYBOOK
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ================= SOCIAL PROOF ================= */}
        <div className="text-center space-y-6 pt-20 border-t border-white/10">

          <p className="text-gray-300 text-lg">
            Follow for daily wealth insights and money structure tips:
          </p>

          <div className="flex justify-center gap-10 text-3xl text-red-500">
            <FaInstagram className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaYoutube className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaLinkedin className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaFacebook className="hover:text-white hover:scale-110 transition cursor-pointer" />
          </div>

          <p className="text-gray-400 text-sm pt-4">
            Join thousands of others taking control of their paycheck — start building wealth today.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Watch;