import React from "react";
import { useNavigate } from "react-router-dom";
import Goal1 from "../../images/gustavImages/Goal1.webp";
import Goal2 from "../../images/gustavImages/Goal2.webp";
import Goal3 from "../../images/gustavImages/Goal3.webp";
import Goal4 from "../../images/gustavImages/Goal4.webp";

const CommunityComponent = ({ title, subtitle }) => {

  const navigate = useNavigate();

  const handleAccessNowClickoneWithGustav = () => {
    // Navigate to the WorkWithGustav page and scroll to the specific section
    navigate("/work-with-gustav", { state: { scrollTo: "oneWithGustav" } });
  };

  const handleAccessNowClickguaranteeLegacy = () => {
    // Navigate to the WorkWithGustav page and scroll to the specific section
    navigate("/work-with-gustav", { state: { scrollTo: "guaranteeLegacy" } });
  };

  const handleAccessNowClickmillionaireImmigrant = () => {
    // Navigate to the WorkWithGustav page and scroll to the specific section
    navigate("/work-with-gustav", { state: { scrollTo: "millionaireImmigrant" } });
  };

  const handleAccessNowClickpurposeMastery = () => {
    // Navigate to the WorkWithGustav page and scroll to the specific section
    navigate("/work-with-gustav", { state: { scrollTo: "purposeMastery" } });
  };

  
  return (
    <div className="max-w-full mx-auto px-0 md:px-0">
      <h2
        className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-center mt-7 md:mt-20"
        style={{ fontFamily: "Butler, serif", color: "#0B1623" }}
      >
        {title}
      </h2>
      <p className="mt-4 text-sm sm:text-md md:text-md lg:text-lg text-center max-w-xs sm:max-w-sm md:max-w-5xl mx-auto">
        {subtitle}
      </p>

      <div className="mt-10 grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative flex flex-col overflow-hidden  bg-[#181349] text-white">
          <img
            className="w-full object-cover"
            src={Goal1}
            alt="The Millionaire Immigrant"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-6 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <div className="text-left">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  The Millionaire
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Immigrant</p>
              </div>
              <p className="mt-3 sm:mt-5 mb-2 text-base sm:text-lg font-light text-[#BBEEFF]">
                <span className="mt-1 text-xl sm:text-2xl md:text-3xl">$29</span> per month
              </p>
              <button onClick={handleAccessNowClickmillionaireImmigrant} className="px-6 py-2 lg:py-3 font-semibold text-sm md:text-md bg-[#3C3CC8] rounded-xl text-white transform transition-transform hover:scale-105 ">
      Access Now
    </button>
            </div>
          </div>
        
        </div>

        <div className="relative flex flex-col overflow-hidden  bg-[#181349] text-white">
          <img
            className="w-full object-cover"
            src={Goal2}
            alt="Purpose Mastery for teams"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-6 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <div className="text-left">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Purpose Mastery
                </p>
              </div>
              <p className="mt-3 sm:mt-5 mb-2 text-base sm:text-lg font-light text-[#BBEEFF]">
                <span className="mt-1 text-xl sm:text-2xl md:text-3xl">$999</span> 
              </p>
              <button onClick={handleAccessNowClickpurposeMastery} className="px-6 py-2 lg:py-3 text-sm md:text-md  font-semibold bg-[#3C3CC8] rounded-xl text-white transform transition-transform hover:scale-105 ">
      Access Now
    </button>
            </div>
          </div>
     
        </div>

        <div className="relative flex flex-col overflow-hidden  bg-[#181349] text-white">
          <img
            className="w-full object-cover"
            src={Goal3}
            alt="1:1 with Gustav"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-6 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <div className="text-left">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  1:1 with Gustav
                </p>
              </div>
              <p className="mt-3 sm:mt-5 mb-2 text-base sm:text-lg font-light text-[#BBEEFF]">
                <span className="mt-1 text-xl sm:text-2xl md:text-3xl">$99</span> per call
              </p>
              <button onClick={handleAccessNowClickoneWithGustav} className="px-6 py-2 lg:py-3  font-semibold text-sm md:text-md bg-[#3C3CC8] rounded-xl text-white transform transition-transform hover:scale-105 ">
      Access Now
    </button>
            </div>
          </div>
       
        </div>

        <div className="relative flex flex-col overflow-hidden  bg-[#181349] text-white">
          <img
            className="w-full object-cover"
            src={Goal4}
            alt="Purpose Mastery"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-6 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <div className="text-left">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Guarantee Your Legacy
                </p>
              </div>
              <p className="mt-3 sm:mt-5 mb-2 text-base sm:text-lg font-light text-[#BBEEFF]">
                <span className="mt-1 text-xl sm:text-2xl md:text-3xl">$3,999</span>
              </p>
              <button onClick={handleAccessNowClickguaranteeLegacy} className="px-6 py-2 lg:py-3  font-semibold text-sm md:text-md bg-[#3C3CC8] text-white transform transition-transform rounded-xl hover:scale-105 ">
      Access Now
    </button>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default CommunityComponent;
