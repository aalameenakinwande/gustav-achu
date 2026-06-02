import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WealthMasterclassWebinar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10 lg:px-20 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            This Is Not Just Another Free Webinar
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Intro Text */}
        <div
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 mb-10 backdrop-blur-md"
          data-aos="fade-up"
        >
          <p className="text-gray-300 leading-relaxed mb-4">
            Most free financial webinars do one of two things: they overwhelm you with information you can't apply, or they withhold everything useful until they have pitched you something.
          </p>
          <p className="text-gray-300 leading-relaxed font-semibold">
            This is neither. This is different. Here's why:
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              Wealth Clarity Audit Worksheet
            </h3> */}
            <p className="text-gray-300 text-sm leading-relaxed">
You will walk away with a completed Wealth Clarity Audit Worksheet- a real, personal financial document, not generic advice
            </p>
          </div>

          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              Named Diagnosis
            </h3> */}
            <p className="text-gray-300 text-sm leading-relaxed">
You will get a named diagnosis of your financial gaps
            </p>
          </div>

          <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              Proven Wealth System
            </h3> */}
            <p className="text-gray-300 text-sm leading-relaxed">
You will be introduced to a system that has helped Gustav build a $1,000,000+ portfolio and helped hundreds of clients build their first $100,000
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className="text-center bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Whether you go further or not, you will leave with more clarity than you walked in with.
          </p>
          <p className="mt-4 text-yellow-400 font-semibold text-lg">
            That's the guarantee.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WealthMasterclassWebinar;