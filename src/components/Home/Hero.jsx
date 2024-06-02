import React from "react";
import HomeHero from "../../images/heroImages/home-hero-Image.svg";
import { StarIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
      <div
    className="w-full h-auto"
    style={{ backgroundColor: "#181349" }}
  >
    <div className="max-w-[1600px] mx-auto lg:-mt-38  sm:px-6 ">
      <div className="flex flex-col lg:flex-row text-white md:pt-28 relative">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col px-7 justify-center pt-16 lg:px-0 lg:pt-0 md:pt-30">
            <div className="flex items-center mb-0 md:-mt-52">
              <StarIcon className="h-3 w-3 text-white mr-2" />
              <p style={{ fontSize: "10px" }}>You're enough</p>
            </div>
            <h6
              className="text-3xl lg:text-5xl font-bold leading-tight mt-2 lg:mt-14"
              style={{ color: "#D7CC50" }}
            >
              UNLEASH YOUR PURPOSE, ACTIVATE SUCCESS
            </h6>
            <p
              className="text-sm lg:text-base mt-4"
              style={{
                fontFamily: "Revisthond",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              With Gustav Achu
            </p>
            <p className="text-sm lg:text-base mt-10 md:mt-10">
              An inspirational keynote speaker, author and immigrant success
              coach. Let's make our mark on this side of eternity.
            </p>
            <div className="flex items-center mt-10">
              <p className="text-sm lg:text-base" style={{ fontSize: "10px" }}>
                See Gustav in Action
              </p>
              <ArrowRightIcon className="h-5 w-5 text-white ml-2" />
            </div>
            <hr className="w-1/4 border-t-1 border-white mt-0" />
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 lg:-mt-16 md:hidden">
            <img
              src={HomeHero}
              alt="Hero_Image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="hidden lg:w-1/2 md:block">
            <img
              src={HomeHero}
              alt="Hero_Image"
              className="w-full lg:h-auto object-cover"
              style={{marginLeft: '23px'}}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
