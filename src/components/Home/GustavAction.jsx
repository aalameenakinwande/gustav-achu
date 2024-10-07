import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import GustavSpeaking from "../../images/homeImages/GustavSpeaking.jpg";
import { FaPlay } from "react-icons/fa";
import Youtube1 from "../../images/YoutubeImages/Image1.jpg";
import Youtube2 from "../../images/YoutubeImages/Image2.jpg";
import Youtube3 from "../../images/YoutubeImages/Image3.jpg";
import Youtube4 from "../../images/YoutubeImages/Image4.jpg";
import Youtube5 from "../../images/YoutubeImages/Image5.jpg";
import Youtube6 from "../../images/YoutubeImages/Image6.jpg";
import Youtube7 from "../../images/YoutubeImages/Image7.jpg";
import Youtube8 from "../../images/YoutubeImages/Image8.jpg";
import Youtube9 from "../../images/YoutubeImages/Image9.jpg";
import Youtube10 from "../../images/YoutubeImages/Image10.jpg";

const images = [
  Youtube1,
  Youtube2,
  Youtube3,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube7,
  Youtube8,
  Youtube7,
  Youtube8,
  Youtube9,
  Youtube10,
  Youtube6,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube8,
  Youtube9,
  Youtube10,
  Youtube6,  
  Youtube5,
  Youtube6,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube10,
  Youtube6,
  Youtube4,
  Youtube1,
  Youtube2,
  Youtube3,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube4,
];

const BigImage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-2/3 h-36 md:w-2/4 md:h-auto lg:w-2/4 lg:h-auto flex items-center justify-center">
      <img
        src={GustavSpeaking}
        alt="Big"
        className="object-cover w-full h-full"
        loading="lazy"
      />
      <a
        href="https://www.youtube.com/@YouREnoughTV"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute focus:outline-none bg-[#0D1BE1] hover:bg-blue-700 rounded-full p-2 md:p-4"
      >
        <FaPlay className="h-2 w-2 md:h-3 md:w-3 text-white" />
      </a>
      <p className="absolute mt-10 md:mt-20 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-xs">
        Get Ready
      </p>
    </div>
  );
};

const GustavAction = () => {
  return (
    <div className="text-white px-0 py-10 mt-6 md:mt-0 md:py-0">
      <div className="w-full h-auto pt-4 md:pt-0 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="container mx-auto py-5 md:py-10 lg:py-20 relative z-20">
            <BigImage />
            <div className="sm:grid grid-cols-3 md:grid-cols-7 gap-4 relative z-0 hidden md:grid">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${index}`}
                  className="w-22 h-20 opacity-5"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <Link to="/community">
            <button className="bg-[#3C3CC8] mt-0 lg:mt-0 md:mb-10 text-white py-2 lg:py-4 px-4 w-64 text-sm lg:text-md font-semibold transform transition-transform hover:scale-105 rounded-md">
              Join our Community
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GustavAction;
