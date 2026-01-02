import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HisImage from '../../images/gustavImages/WorkGustav.jpg'

const EventGustav = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-white py-10 lg:py-20 px-4 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      {/* Left Content */}
      <div className="max-w-xl space-y-6" data-aos="fade-right">
        <p className="text-md lg:text-lg tracking-wider text-gray-500 uppercase">
          Meet the speaker
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600">GUSTAV B. ACHU</h2>

        {/* Points */}
        {[
          {
            text: (
              <>
                <span className="font-semibold">
                  Founder and Chief Empowerment Officer
                </span>{" "}
                of GB Achu & Company — founded to develop individuals to reach their highest potential.
              </>
            ),
          },
          {
            text: (
              <>
                Before founding his company, Gustav held various roles as an{" "}
                <span className="font-semibold">IT professional</span> in Fortune 500 companies across the tech, finance, and retail sectors.
              </>
            ),
          },
          {
            text: (
              <>
                <span className="font-semibold text-yellow-600">
                  Bestselling author of *The Seeker*
                </span>{" "}
                — helping thousands gain clarity, uncover purpose, build wealth, and leave a lasting legacy.
              </>
            ),
          },
          {
            text: (
              <>
                A{" "}
                <span className="font-semibold">recognized change agent and advisor</span>{" "}
                to high-power executives with 25 years of experience, Gustav champions the belief that{" "}
                <span className="font-semibold text-yellow-600">#YouREnough#</span> — anyone can design their life and live purposefully, regardless of their position.
              </>
            ),
          },
        ].map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <span className="text-yellow-500 text-md lg:text-xl">➤</span>
            <p className="text-gray-700 text-sm lg:text-lg">{point.text}</p>
          </div>
        ))}
      </div>

      {/* Right Image and Nameplate */}
      <div className="text-center mb-10" data-aos="fade-left">
        <div className="relative w-[18rem] h-[18rem] lg:w-[28rem] lg:h-[28rem] mx-auto">
          <div className="w-full h-full rounded-full border-[10px] border-yellow-500 p-2 bg-white overflow-hidden">
            <img
              src={HisImage}
              alt="Gustav B. Achu"
              className="rounded-full w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg px-6 py-3 w-[155%] lg:w-[95%]">
            <p className="font-signature text-base font-semibold">Gustav B. Achu</p>
            <p className="text-xs text-gray-600 leading-snug mt-1">
              FOUNDER & CHIEF EMPOWERMENT OFFICER, GB ACHU & COMPANY <br />
              SPEAKER | INVESTOR | LEGACY COACH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGustav;
