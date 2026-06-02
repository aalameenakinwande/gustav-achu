import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WealthMasterclassBreakdown = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F7F5F2] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* LEFT SIDE - STICKY INTRO */}
        <div className="lg:col-span-4 lg:sticky top-20 h-fit" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
            The 60-Minute <br /> Free Masterclass Breakdown
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            This isn't theory or motivation. This is a focused, practical 60-minute session that shows you exactly what's happening with your money, and what to do first.
          </p>

          {/* <div className="border-l-4 border-black pl-4 text-gray-800 space-y-2">
            <p>✔ Live breakdown of your personal money leaks</p>
            <p>✔ A clear system you can apply immediately</p>
            <p>✔ No replay — live-only session</p>
          </div> */}
        </div>

        {/* RIGHT SIDE - MODULES */}
        <div className="lg:col-span-8 space-y-10">
          {[
            {
              title: "The 5 Hidden Wealth Leaks",
              content: [
                "Understand exactly why your money isn't working—even when you're working hard.",
                "Most high-professionals are not stuck because they earn too little. They are stuck because money quietly escapes through five specific gaps.",
                "✔ Pinpoint the exact financial habits draining your income each month",
                "✔ Understand why clarity, not spending, is the real problem",
                "✔ The structural gap most professionals never see until it's pointed out",
                "✔ How each leak compounds silently over months and years",
                "By the end of this module, you will feel the full picture of your financial reality. No more guessing."
              ]
            },
            {
              title: "Why More Money Won’t Fix the Leak And What Actually Will",
              content: [
                "You've probably thought: \"If I just earned a bit more, I'd be fine.\" The data says otherwise.",
                "Most professionals who increase their income simply increase their leak rate.",
                "✔ The psychology behind why high-earners stay stuck",
                "✔ Why the paycheck trap exists at every income level",
                "✔ What actually separates wealth-builders from wealth-earners",
                "By the end of this module, you won’t just understand the problem —you’ll feel the relief of knowing exactly what needs to change."
              ]
            },
            {
              title: "The System That Fixes All 5 Leaks (And Why Most People Never Fully Implement It)",
              content: [
                "There is a simple system that closes all five leaks.",
                "Once it’s in place, everything about your money becomes clearer and more controlled.",
                "In this session, you’ll understand how the system works and why it succeeds where everything else fails.",


                "But here’s the truth most people don’t realize:",


                " Understanding the system is not the same as having one built for your life.",
                "✔ You’ll see the structure behind it",
                "✔ You’ll understand why it works",
                "✔ You’ll recognize what’s missing in your current approach",
                "At this point, you’ll understand exactly what a real wealth system looks like.",
                "But you won’t yet have your own system fully built —and that’s the difference between knowing… and actually seeing results."



               




              ]
            },
            {
              title: "Your First Step — Wealth Clarity Audit",
              content: [
                "Now that you can clearly see what’s been happening with your money… the next question becomes: “What do I do with this specifically for my situation?",
                "You will complete Part 1 of the Wealth Clarity Audit Worksheet live. This is not a generic exercise. It is your real financial picture; your income, your leaks, your starting point.",
                "Most people have never done this. The ones who did say it changed everything.",
                "✔ See exactly where you stand financially right now, with your actual numbers",
                "✔ Identify the gap between where you are and where you want to be",
                "✔ Leave with a clear, honest starting point",
                "This is where clarity becomes real."
              ]
            }
          ].map((module, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-5 left-6 bg-black text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-black mt-4 mb-4">
                {module.title}
              </h3>

              <div className="space-y-3 text-gray-700 leading-relaxed">
                {module.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div
            className="bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl p-10 text-center shadow-lg"
            data-aos="zoom-in"
          >
            {/* <h3 className="text-2xl md:text-3xl font-bold mb-4">
              SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
            </h3> */}

            

        
            <p className="mb-6 font-semibold text-gray-200">
              No replay. Attend live or miss it
            </p>

<a
  href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
    hover:bg-red-700 hover:scale-105 transition-transform duration-300"
  >
    SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
  </button>
</a>

  <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthMasterclassBreakdown;
