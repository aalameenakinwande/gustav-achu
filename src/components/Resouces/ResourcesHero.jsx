import React from "react";
// import AboutHeroImage from "../../images/heroImages/AboutHero.png";

const ResourcesHero = () => {
  return (
    <div className="relative bg-[#181349] text-center p-10 md:p-0 text-white h-[600px] md:h-[525px] lg:h-[700px]">
      {/* <img
        src={AboutHeroImage}
        alt="Gustav Achu"
        className="max-w-[300px] mx-auto md:max-w-3xl lg:max-w-[1200px] md:object-contain pt-20 md:pt-20 lg:pt-32"
        loading="lazy"
      /> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pt-32 max-w-6xl mx-auto">
        <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359] mt-0 "
          style={{ fontFamily: "Butler, serif" }}
        >
Explore Resources That Help You Make Smarter Financial Decisions     </h1>
        <p className="text-sm mt-0 lg:mt-4 md:text-md mb-6 lg:max-w-5xl mx-auto md:text-md lg:text-xl md:mb-10">

Each resource is designed to help you gain clarity on investing, take control of your money, and make intentional moves toward building long-term wealth and legacy. </p>
      </div>
    </div>
  );
};

export default ResourcesHero;
