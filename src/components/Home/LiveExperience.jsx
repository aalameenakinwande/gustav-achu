import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const LiveExperience = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const goToWealthClarity = () => {
    navigate("/wealth-clarity");
  };

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 space-y-20">

        {/* HERO */}
        <div className="text-center space-y-6" data-aos="fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BD9A35]">
            2026 • Live Experiences
          </p>

          <h1 className="text-xl lg:text-5xl font-bold leading-tight">
            Attend a Live Experience with Gustav
          </h1>

          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Strengthen your financial knowledge, gain investing clarity,
            and make better decisions for your wealth and legacy.
          </p>

          <button
            onClick={goToWealthClarity}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition"
          >
            Explore Experiences
          </button>
        </div>

        {/* UPCOMING WEBINAR */}
        {/* <div
          className="relative rounded-3xl p-10 lg:p-14 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 shadow-2xl text-center space-y-5"
          data-aos="fade-right"
        >
          <p className="text-sm text-[#BD9A35] font-semibold tracking-wide">
            Feb 26, 2026
          </p>

          <h2 className="text-xl lg:text-4xl font-bold">
            Wealth Clarity & Legacy Blueprint Webinar
          </h2>

          <p className="text-gray-400 max-w-2xl text-sm md:text-lg mx-auto">
            A live session focused on helping you gain clarity around your finances
            and build a legacy-driven wealth plan.
          </p>

          <button
            onClick={goToWealthClarity}
            className=" text-white py-3 px-8 rounded-xl font-semibold bg-red-600 hover:bg-red-700transition"
          >
            View Details
          </button>
        </div> */}

        {/* PROGRAM */}
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-xl lg:text-4xl font-bold">
              Wealth Accelerator Program
            </h2>

            <p className="text-gray-400 text-sm md:text-lg">
              Fast-track your financial growth and legacy.
            </p>

            <p className="text-gray-500 text-sm md:text-lg">
              This signature program helps professionals, entrepreneurs, and
              legacy builders take control of their finances and design a life
              that lasts.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-[#141414] to-[#0B0B0B] border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl"
            data-aos="fade-left"
          >
            <ul className="space-y-3 text-gray-300 text-sm md:text-lg">
              <li>• Invest intentionally and confidently</li>
              <li>• Build structured, long-term wealth</li>
              <li>• Plan for multi-generational impact</li>
              <li>• Turn financial knowledge into results</li>
            </ul>

            <p className="text-xs text-gray-500">
              For serious financial builders only.
            </p>
<a
  href="/work-with-gustav"
  className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition inline-block"
>
  Apply to See If You Qualify
</a>
          </div>
        </div> */}


     {/* INSIGHTS */}
        <div className="space-y-10">
          <div className="text-center space-y-4" data-aos="fade-up">
            <h2 className="text-xl lg:text-4xl font-bold">
              Weekly Wealth & Legacy Insights
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
              Practical insights on structured wealth building, intentional
              investing, and legacy-focused thinking.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "YouTube Videos", time: "Every Friday • 8PM EST" },
              { title: "Podcast Conversations", time: "Bi-weekly Tuesdays • 8PM EST" },
              { title: "YouTube Lives", time: "Every Thursday • 8PM EST" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#161616] to-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-500 mt-1 text-sm md:text-md">{item.time}</p>
              </div>
            ))}
          </div>

          {/* VIDEO */}
          {/* <div
            className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            data-aos="fade-up"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ywy4WTt_elM"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div> */}

        
        </div>
      </div>
    </section>
  );
};

export default LiveExperience;
