import React from "react";
import AboutHeroImage from "../../images/heroImages/AboutHero.png";

const AboutHero = () => {
  return (
    <div className="relative bg-[#181349] text-center p-10 md:p-0 text-white h-[600px] md:h-[525px] lg:h-[700px]">
      <img
        src={AboutHeroImage}
        alt="Gustav Achu"
        className="max-w-[300px] mx-auto md:max-w-3xl lg:max-w-[1200px] md:object-contain pt-20 md:pt-20 lg:pt-32"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 top-36 md:top-46 lg:top-10">
        <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359] mt-0 md:mt-44 lg:mt-96"
          style={{ fontFamily: "Butler, serif" }}
        >
          FROM BAMENDA TO THE WORLD
        </h1>
        <p className="text-sm mt-0 lg:mt-4 md:text-md mb-6 lg:max-w-[1400px] mx-auto md:text-md lg:text-xl md:mb-10">
          Migrating to the US in the early 2000s, Gustav's experience as an
          immigrant, combined with his diverse professional background as a
          nurse, marketing and IT professional, community organizer,
          inspirational speaker, and peak performance mindset coach, has
          equipped him with a unique perspective on overcoming life's setbacks
          and achieving success. His dedication to the American economy and
          socio-cultural fabric has been unwavering.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
