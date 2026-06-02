import React from "react";
import { Link } from "react-router-dom";
import SeekerBook from "../../images/bookImages/All.jpeg";

const HomeResource = () => {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D7CC50]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 text-center lg:text-left">

          {/* Badge */}
          <span className="inline-block mb-4 text-xs tracking-widest uppercase text-[#BFAF3F] border border-[#D7CC50]/40 px-4 py-1 rounded-full">
            Free Resources
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Your Wealth-Building Resources,
            <span className="text-[#BFAF3F]"> All in One Place</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
           Get instant access to books, guides, and worksheets designed to help you grow wealth, build and protect your legacy, and take control of your future.
          </p>

          <Link
            to="/resource"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-sm md:text-base transition duration-300"
          >
            Explore All Resources & Grab Your Free Tools
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">

          <div className="relative group max-w-lg lg:max-w-xl w-full">

            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[#D7CC50]/10 blur-2xl rounded-xl opacity-60 group-hover:opacity-80 transition"></div>

            {/* Card */}
            <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">

              <img
                src={SeekerBook}
                alt="Resources"
                className="w-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">

                <p className="text-xs text-[#D7CC50] font-semibold mb-1">
                  Featured Resource
                </p>

                <h4 className="text-white font-semibold text-lg">
                  Tools to Build & Protect Wealth
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeResource;