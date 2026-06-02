import React from "react";
import ContactHeroImage from "../../images/heroImages/ContactHero-removebg-preview.png";

const AboutHero = () => {
  return (
    <div className="relative bg-[#181349] text-center p-10 md:p-0 text-white h-[600px] md:h-[525px] lg:h-[700px]">
      {/* Mobile-specific image styling */}
      <img
        src={ContactHeroImage}
        alt="Gustav Achu"
        className="max-w-[300px] mx-auto md:max-w-sm lg:max-w-[500px] md:object-contain pt-20 md:pt-20 lg:pt-40"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 top-36 md:top-60">
        {/* <p
          className="text-sm md:text-md mx-auto mb-0 lg:mb-5 font-semibold      md:text-md lg:text-3xl mt-0 md:mt-44 lg:mt-30"
          style={{ fontFamily: "Butler, serif" }}
        >
          You're just a step away from
        </p> */}

        {/* <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359]"
          style={{ fontFamily: "Butler, serif" }}
        >
          UNLEASHING BRILLIANCE!
        </h1> */}
        <p className="text-sm mt-0 lg:mt-4 md:text-md mb-6 lg:max-w-[900px] mx-auto        md:text-md lg:text-xl md:mb-10">
        
For inquiries regarding coaching, programs, events, or collaborations, complete the form below. We strive to respond to all messages within 2 business days.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
