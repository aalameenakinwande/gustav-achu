import React from "react";

const ProgramsHero = () => {
  return (
    <div className="relative bg-[#181349] text-center p-10 md:p-0 text-white h-[600px] md:h-[525px] lg:h-[700px]">
      {/* Mobile-specific image styling */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 top-36 md:top-46">
        <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-[#EFE359]"
          style={{ fontFamily: "Butler, serif" }}
        >
          Explore the power of #YouREnough#
        </h1>
        <p className="text-sm mt-0 lg:mt-8 md:text-md mb-6 lg:max-w-[1800px] mx-auto        md:text-md lg:text-xl md:mb-10">
          Join Gustav Achu on a transformative journey focused on personal
          development, wealth accumulation and legacy building. Embrace
          integrity, purpose, and growth. Gain insights into financial literacy,
          strategic planning, and entrepreneurial skills. Shape a meaningful
          future and achieve lasting success. Unlock your full potential and
          create long-term prosperity.
        </p>
      </div>
    </div>
  );
};

export default ProgramsHero;
