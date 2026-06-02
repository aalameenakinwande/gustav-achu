// src/Components/HomeAboutGustav.jsx
import React from "react";
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

import GustavImage from "../../images/gustavImages/MeetGustav.png";

const HomeAboutGustav = () => {
  return (
    <section className="relative bg-gray-50 py-20 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-[280px] sm:w-[360px] lg:w-[500px]">
            <img
              src={GustavImage}
              alt="Meet Gustav Achu"
              className="rounded-xl shadow-2xl object-cover w-full relative z-20"
            />
            {/* Gold accent border behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#BD9A35] rounded-xl z-10"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Meet Gustav Achu
          </h2>

          <p className="text-lg font-semibold text-gray-700 tracking-wide">
            Author | Speaker | Investor | Legacy Coach
          </p>

          <p className="text-gray-600 leading-relaxed">
            Gustav Achu helps mid- to high-income professionals, entrepreneurs, 
            and family builders make smarter financial decisions, invest intentionally, 
            and design a legacy that lasts.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With over two decades of experience advising leaders, executives, 
            and high-performing individuals across Africa and beyond, Gustav brings 
            clarity to wealth building—bridging money, purpose, and long-term impact.
          </p>

          <p className="text-gray-600 leading-relaxed">
            As the host of the <strong>#YouREnough</strong> podcast, Gustav turns complex ideas 
            into clear, actionable guidance—helping people take control of their future with confidence.
          </p>

          {/* CTA Button */}
          <button className="mt-4 bg-[#BD9A35] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a6832c] transition duration-300 w-fit">
            Learn More About Gustav
          </button>

          {/* Authority / Featured Icons */}
          <div className="mt-8 flex gap-6">
            {[FaSpotify, FaYoutube, FaApple, SiLinkedin].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-full shadow-lg text-2xl text-gray-700 hover:text-[#BD9A35] cursor-pointer transition duration-300"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Background Shapes */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#BD9A35] opacity-10 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#BD9A35] opacity-10 rounded-full"></div>
    </section>
  );
};

export default HomeAboutGustav;
