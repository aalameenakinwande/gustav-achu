// PaycheckToProsperityWatch.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const PaycheckToProsperityWatch = () => {
  const navigate = useNavigate();

  return (
        <> <section className="w-full min-h-screen bg-gradient-to-b from-[#181349] via-[#1F1B5B] to-[#181349] flex flex-col items-center px-4 sm:px-6 lg:px-12 py-16 lg:py-32 text-white">

      {/* HERO: HEADLINE + SUBHEAD */}
       <div className="max-w-5xl w-full text-center mb-12 px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
                  Turn Your Next Paycheck Into a <span className="text-yellow-400">Wealth-Building Machine</span> — Watch Before Your Next Payday
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
                  This 90-minute masterclass will show you how to break free from the paycheck-to-paycheck trap, grow your income without quitting your 9–5, and start building real wealth with a proven system. Watch the full masterclass before making your next financial move.
              </p>

          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/eAoeNNg7TQQ"
    title="Masterclass Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

          </div>

          {/* SECTION 2: TRANSFORMATION RECAP */}
          <div className="max-w-4xl w-full bg-[#1F1B5B] rounded-2xl p-6 sm:p-8 mb-12 shadow-lg text-center px-2 sm:px-4">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-2">
                  If this masterclass resonated, it’s because you realized:
              </p>
              <p className="text-yellow-400 font-semibold text-base sm:text-lg md:text-xl mb-2">
                  You don’t need more income. You need a smarter paycheck strategy.
              </p>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                  And if you’re serious about building lasting wealth… the next step is structured action.
              </p>
          </div>

          {/* SECTION 3: UPSALE POSITIONING */}
          <div className="max-w-4xl w-full mb-12 px-2 sm:px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                  Build Your Personal Wealth System
              </h2>
              <p className="text-gray-300 text-center mb-6 text-sm sm:text-base md:text-lg">
                  The masterclass showed you what’s possible. Now, take control of your financial future with a personalized Wealth Structure:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                      "Step-by-step wealth blueprint tailored to your income",
                      "Tools to break free from paycheck-to-paycheck stress",
                      "Systems to grow and multiply your money consistently",
                      "Guidance to become a strategic wealth builder"
                  ].map((item, idx) => (
                      <div
                          key={idx}
                          className="flex items-start p-4 sm:p-6 bg-[#262147] rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
                      >
                          <span className="text-yellow-400 text-2xl font-bold mr-3 mt-1">✔</span>
                          <p className="text-gray-200 font-medium text-sm sm:text-base md:text-lg">{item}</p>
                      </div>
                  ))}
              </div>

              <div className="text-center">
                  <button
                      onClick={() => navigate("/wealth-clarity")}
                      className="bg-yellow-400 text-[#181349] px-8 sm:px-10 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 text-base sm:text-lg md:text-lg shadow-lg hover:shadow-xl"
                  >
                      I’m Ready To Turn My Paycheck Into Wealth
                  </button>
              </div>
          </div>

          {/* SECTION 4: SOCIAL PROOF + LINKS */}
          <div className="max-w-4xl w-full text-center px-2 sm:px-0">
              <p className="text-gray-300 mb-4 text-lg">
                  Follow for actionable money tips and ongoing strategies:
              </p>
              <div className="flex justify-center space-x-6 mb-8 text-2xl sm:text-3xl md:text-4xl text-yellow-400">
                  <a href="https://www.instagram.com/gachu77" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      <FaInstagram />
                  </a>
                  <a href="https://www.youtube.com/@YouREnoughTV" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      <FaYoutube />
                  </a>
                  <a href="https://www.linkedin.com/in/gustav-achu-618780103/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      <FaLinkedin />
                  </a>
                  <a href="https://web.facebook.com/gustav.achu.1/?_rdc=3&_rdr#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      <FaFacebook />
                  </a>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                  Stay informed. Stay ahead.
              </p>
          </div>

            
      </section></>
  );
};

export default PaycheckToProsperityWatch;
