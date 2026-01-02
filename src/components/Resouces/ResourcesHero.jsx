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
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359] mt-0 "
          style={{ fontFamily: "Butler, serif" }}
        >
          RESOURCES
        </h1>
        <p className="text-sm mt-0 lg:mt-4 md:text-md mb-6 lg:max-w-[1400px] mx-auto md:text-md lg:text-xl md:mb-10">

        Here’s an array of guides and worksheets to help you think deeper and find clarity on your success journey.         </p>
      </div>
    </div>
  );
};

export default ResourcesHero;
