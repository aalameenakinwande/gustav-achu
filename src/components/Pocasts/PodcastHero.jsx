import React from "react";
import PodcastHeroImage from '../../images/heroImages/PodcastHero.webp';

const PodcastHero = () => {
  return (
    <div className="relative bg-[#181349] text-center p-10 md:p-0 text-white h-[600px] md:h-[525px] lg:h-[700px]">
      {/* Mobile-specific image styling */}
      <img
        src={PodcastHeroImage}
        alt="Gustav Achu"
        className="max-w-[300px] mx-auto md:max-w-sm lg:max-w-[500px] md:object-contain pt-20 md:pt-20 lg:pt-40"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 top-36 md:top-46 lg:top-10">
      <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359] mt-0 md:mt-44 lg:mt-96"
          style={{ fontFamily: "Butler, serif" }}
        >
       LET'S LEAVE A MARK ON THIS SIDE OF ETERNITY
        </h1>
        <p className="text-sm mt-0 lg:mt-4 md:text-md mb-6 md:max-w-[840px] mx-auto        md:text-md lg:text-xl md:mb-10">
        Every episode of the podcast is filled with the motivation and tactics you need plus deeply personal stories, relatable topics and tactical, research-backed advice to help you create a better life.        </p>
    
      </div>
    </div>
  );
};

export default PodcastHero;
