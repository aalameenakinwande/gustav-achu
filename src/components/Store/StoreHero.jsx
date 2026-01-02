import React from "react";
import StoreHeroImage from "../../images/heroImages/StoreHero.png";

const StoreHero = ({ scrollToStoreItem }) => {
  return (
    <div className="relative bg-[#181349] text-center p-10 md:p-0 text-white h-[600px] md:h-[525px] lg:h-[700px]">
      <img
        src={StoreHeroImage}
        alt="Gustav Achu"
        className="max-w-[300px] mx-auto md:max-w-sm lg:max-w-[500px] md:object-contain pt-20 md:pt-20 lg:pt-40"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 top-36 md:top-46 lg:top-10">
      <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359] mt-0 md:mt-44 lg:mt-72"
          style={{ fontFamily: "Butler, serif" }}
        >
          WELCOME TO THE #YouREnough# STORE
        </h1>
        <p className="text-sm mt-0 lg:mt-4 md:text-md mb-6 md:max-w-[750px] mx-auto md:text-md lg:text-xl md:mb-10">
          Embrace the motivation and style of Gustav Achu with our exclusive clothing line designed to inspire and empower you every day.
        </p>
        <button
          type="button"
          onClick={scrollToStoreItem} // Scroll to the StoreItem component
          className="bg-[#3C3CC8] text-white px-8 py-3 text-xs sm:text-xs rounded-md  duration-300 transform transition-transform hover:scale-105 "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default StoreHero;
