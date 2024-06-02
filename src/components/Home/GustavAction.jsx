import React from 'react';
import 'tailwindcss/tailwind.css';
import ActionBanner from '../../images/homeImages/gustvaaction.svg';
import './GustavAction.css'; // Import the CSS file
import Gustav from '../../images/homeImages/Gustav.webp';
import GustavSpeaking from '../../images/homeImages/GustavSpeaking.jpg';
import { FaPlay } from 'react-icons/fa';

const images = [
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
  Gustav,
];

const BigImage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-2/3 h-36 md:2/4 md:h-auto lg:w-2/4 lg:h-auto flex items-center justify-center">
    <img
      src={GustavSpeaking}
      alt="Big"
      className="object-cover w-full h-full" // Adjust for rounded image
    />
    <button type="button" className="absolute focus:outline-none bg-[#0D1BE1] hover:bg-blue-700 rounded-full p-2 md:p-4">
      <FaPlay className="h-2 w-2 md:h-3 md:w-3 text-white" />  {/* Play icon with styles */}
    </button>
    <p className="absolute mt-10 md:mt-20 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-xs">
      Get Ready  {/* Text with styles */}
    </p>
  </div>
  );
};

const GustavAction = () => {
  return (
    <div className="w-full h-auto pt-4 relative">
      <div className="max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full flex items-center justify-center mt-8 mb-2 sliding-banner-container"> {/* Added class for sliding */}
          <div className="sliding-banner-content ">
            <img src={ActionBanner} alt="Action Banner" className="w-full h-auto sliding-banner" />
            <img src={ActionBanner} alt="Action Banner" className="w-full h-auto sliding-banner" />
          </div>
        </div>

        <div className="container mx-auto py-5 md:py-20 relative z-0">
          <BigImage />
          <div className="grid grid-cols-5 md:grid-cols-5 gap-4 relative z-0">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${index}`}
                className="w-52 h-auto opacity-20"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GustavAction;
