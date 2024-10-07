import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import MeetGustav from "../../images/gustavImages/MeetGustav.png";

const HomeAboutGustav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById("about-gustav").offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about-gustav" className="bg-[#181349] py-8 md:py-0 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-0">
        <div
          className={`w-full md:w-[533.61px] h-[400px] md:h-[718px] overflow-hidden ${
            isVisible ? "slide-in-left" : ""
          }`}
        >
          <img
            src={MeetGustav}
            alt="Gustav"
            className="w-full h-96 md:w-full md:h-full object-cover"
            loading="lazy" 
          />
        </div>
        <div
          className={`w-full md:w-[906px] text-white p-8 md:p-8 flex flex-col items-center md:items-start space-y-6 md:space-y-10 ${
            isVisible ? "slide-in-right" : ""
          }`}
        >
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0"
            style={{ fontFamily: "Butler, serif", color: "#D7CC50" }}
          >
            MEET GUSTAV
          </h3>
          <p className="text-sm md:text-md lg:text-lg leading-relaxed mb-4 md:mb-6">
            With over 25 years of extensive experience working with national
            leaders, high stake executives, brands, companies in Africa and
            around the world, Gustav has adopted the phrase #YouREnough# to convey
            his belief that anybody can design their life and live purposefully
            regardless of their position.
          </p>
          <p className="text-sm md:text-md lg:text-lg leading-relaxed mb-4 md:mb-6">
            As a trusted advisor to high power executives and first-rate
            companies, Gustav has been exposed to the inner-workings of normal
            people doing extraordinary things and has helped them on their
            journey to finding fulfillment in their work, personal life, and
            all-round ecosystem as they continue to achieve and grow.
          </p>
          <p className="text-sm md:text-md lg:text-lg leading-relaxed mb-4 md:mb-0">
            Recognized as an experienced change agent, he is focused on
            developing talent, delivering increasing business value, rapidly
            identifying areas of growth, and removing impediments stopping
            clients from experiencing their best life.
          </p>

          <Link to="/about">
            <button className="bg-[#3C3CC8] hover:bg-red-700 text-white py-3 px-6 text-base md:text-sm mt-4 md:mt-8 rounded-md">
              Meet Gustav Now
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default HomeAboutGustav;
