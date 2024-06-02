import React from "react";
import { FaInstagram, FaYoutube, FaPhone, FaLinkedin } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div
      className="w-full bg-gray-800 mt-6"
      style={{ backgroundColor: "#181349" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row text-white py-16 lg:py-24 relative">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-0">
            {/* Your content here */}
            <h1 className="text-4xl font-bold">
              TAKE A STEP AND <br />{" "}
              <span style={{ color: "#EFE359" }}>START THE JOURNEY</span>
            </h1>
            <p className="text-sm mt-4">
              Contact Gustav’s team today to see how he can customize a solution
              to accomplishing your goals and facing your fears.
            </p>
            {/* Navigation buttons */}
            <div className="mt-10 flex items-center space-x-4  pb-10">
              <button
                style={{ fontSize: "13px" }}
                className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base"
              >
                Book a call
              </button>
              <p style={{ fontSize: "13px" }}>or Connect via</p>
              <button className="  transition duration-300 transform hover:scale-110">
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button className="  transition duration-300 transform hover:scale-110">
                {" "}
                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button className="  transition duration-300 transform hover:scale-110">
                {" "}
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button className="  transition duration-300 transform hover:scale-110">
                {" "}
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 flex justify-end items-center overflow-hidden relative">
            <div
              className="relative w-full max-w-sm"
              style={{ paddingBottom: "8px", paddingRight: "8px" }}
            >
              <div className="absolute inset-0 bg-yellow-400 transform translate-x-2 translate-y-2"></div>
              <div className="relative p-8 bg-white">
                <h2 className="text-1xl text-center font-bold text-black mb-6">
                  GET FREE RESOURCES <br /> DIRECTLY TO YOUR INBOX
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-3 py-2 bg-transparent border border-black text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Mohamed Salah"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 bg-transparent border border-black text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="msalah@gmail.com"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ fontSize: "13px" }}
                    className="w-full px-6 py-2 bg-indigo-600 text-white rounded-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:bg-indigo-700  ease-in-out"
                  >
                    Join the Newsletter
                  </button>
                  <p
                    className="mt-6 text-center text-black"
                    style={{ fontSize: "13px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Quis amet nibh
                    laoreet mattis cursus lobortis aenean. Id nunc vel nunc
                    massa in proin odio. In lacus faucibus tristique nibh tempus
                    egestas natoque.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
