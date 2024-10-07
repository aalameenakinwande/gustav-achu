import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from "../../images/heroImages/HomeHero.jpeg";
import Image1 from "../../images/brandimages/IBM logo.svg";
import Image2 from "../../images/brandimages/Hitachi_logo.svg";
import Image3 from "../../images/brandimages/Forbeslogo.svg";
import Image4 from "../../images/brandimages/Tecno logo.svg";
import Image5 from "../../images/brandimages/Business insider logo.svg";
import Image6 from "../../images/brandimages/Bank of America logo.svg";
import Image7 from "../../images/brandimages/Business insider logo.svg";
import Image8 from "../../images/brandimages/Walmart_logo.svg";
import './Hero.css';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img 
        src={HomeImage} 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-[1440px] mx-auto">
        <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-[#EFE359] mt-36 md:mt-44 lg:mt-56 2xl:mt-28"
          style={{ fontFamily: "Butler, serif" }}
        >
          DESIGN YOUR LIFE AND<br /> LEGACY PURPOSEFULLY
        </h1>
        <p className="mb-6 mt-10 text-sm md:text-lg lg:text-xl 2xl:text-2xl md:mb-10 max-w-4xl 2xl:max-w-7xl">
          Gustav works with entrepreneurs, brands, businesses and athletes to intentionally create their ideal ecosystem and design how they will be remembered.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a 
            href="https://www.youtube.com/@YouREnoughTV"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3C3CC8] text-white py-2 lg:py-3 px-6 w-full sm:w-auto text-sm lg:text-lg font-semibold transform transition-transform hover:scale-105 rounded-md flex items-center justify-center gap-2"
          >
            Watch my Videos
            <i className="fas fa-play ml-2"></i> {/* FontAwesome play icon */}
          </a>
          <Link 
            to="/community"
            className="bg-[#3C3CC8] text-white py-2 lg:py-3 px-6 w-full sm:w-auto text-sm lg:text-lg font-semibold transform transition-transform hover:scale-105 rounded-md"
          >
            Get Free Resources
          </Link>
        </div>
        <div className="mt-20 lg:mt-10 xl:mt-20 flex overflow-hidden w-full">
          <div className="flex items-center space-x-12 animate-scroll">
            {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Logo ${index + 1}`}
                className="h-5 md:h-5 lg:h-5 mx-4 filter invert"
                loading="lazy" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
