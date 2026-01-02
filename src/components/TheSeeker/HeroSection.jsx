import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-[600px] md:h-[525px] lg:h-[950px] flex items-center justify-center bg-black">
      <div className="w-full max-w-[1440px] px-4 md:px-8">
        <div className="aspect-w-16 aspect-h-9">
          <div className="w-full h-[400px] lg:h-[700px] border-8 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/u9cQNtEnmzM"
              title="Seeker Book Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
