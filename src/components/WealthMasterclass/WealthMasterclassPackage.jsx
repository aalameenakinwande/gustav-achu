import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WealthMasterclassPackage = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Free Masterclass Package
          </h2>
          <p className="text-gray-400 text-lg">
            When You Register Today, You Get:
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* ITEM 1 */}
          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">
              60-Minute Live Masterclass
            </h3>
            <p className="text-sm lg:text-lg font-bold text-gray-400 mb-4">Value: $297</p>

            <p className="text-gray-300 mb-4">
              This is where everything changes. In 60 minutes, you’ll finally
              see exactly where your money has been leaking — and walk away
              knowing what to do next, without confusion or guesswork.
            </p>

            <div className="text-sm text-gray-400 space-y-2">
              <p>✔ No theory. No overwhelm.</p>
              <p>✔ Just a clear path forward.</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold mb-2">
              Wealth Clarity Audit Worksheet (PDF)
            </h3>
            <p className="text-sm lg:text-lg font-bold text-gray-400 mb-4">Value: $97</p>

            <p className="text-gray-300 mb-4">
             You won’t just listen — you’ll map out your actual financial situation live during the session.

            </p>

            <div className="text-sm text-gray-400 space-y-2">
              <p>✔ See exactly where your money is going</p>
              <p>✔ Identify your biggest wealth leaks instantly</p>
              <p>✔ Know your true financial starting point</p>
              <p>✔ Walk away with your first action step</p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold mb-2">
              Legacy Circle Community Access
            </h3>
            <p className="text-sm lg:text-lg font-bold text-gray-400 mb-4">Value: $197</p>

            <p className="text-gray-300 mb-4">
            Because transformation doesn’t happen alone.

            </p>


            <p className="text-gray-300 mb-4">


            After the session, you’ll step into a private community of ambitious professionals who are serious about taking control of their money and building real wealth.

            </p>

            <div className="text-sm text-gray-400 space-y-2">
              <p>✔ Daily money discipline + habit reinforcement</p>
              <p>✔ Real conversations with like-minded builders</p>
              <p>✔ Direct guidance and voice notes from Gustav (when it matters most)</p>
            </div>
          </div>
        </div>

        {/* TOTAL VALUE SECTION */}
        <div
          className="mt-14 text-center bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-2xl p-8"
          data-aos="zoom-in"
        >
        <p className="text-lg text-gray-300 mb-2">
  TOTAL VALUE:{" "}
  <span className="font-bold text-white line-through">$591</span>
</p>
          <p className="text-2xl md:text-3xl font-bold mb-6">
            YOURS TODAY: FREE
          </p>

          {/* CTA */}
          {/* <button className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
            SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
          </button> */}


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
</a>  <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p>
        </div>
      </div>
    </section>
  );
};

export default WealthMasterclassPackage;