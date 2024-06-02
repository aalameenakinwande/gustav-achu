import React from 'react';
import { FaInstagram, FaYoutube, FaPhone, FaLinkedin } from 'react-icons/fa';
import Banner from '../../images/homeImages/cta-banner.png';

const Cta = () => {
  return (
    <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex flex-col md:flex-row items-center justify-between h-full text-white py-4 lg:py-2 relative"> {/* Reduced padding here */}
          {/* First part */}
          <div className="md:w-1/3 text-center md:text-left p-2 md:p-4">
            <h1 className="text-1xl md:text-1xl font-bold">
              <span className="text-yellow-600">GET IN TOUCH</span> WITH GUSTAV ACHU
            </h1>
            <p className="mt-2 md:mt-1 " style={{fontSize: '13px'}}>Lorem ipsum dolor sit amet consectetur. Mi pharetra mattis at mauris amet ut erat mollis integer.</p>
          </div>

          {/* Second part */}
          <div className="my-4 md:my-0">
            <button style={{fontSize: '13px'}} className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base">
              Book a call
            </button>
          </div>

          {/* Third part (visible on desktop) */}
          <div className="hidden md:block md:w-1/3  md:text-right md:px-20 p-2 md:p-4">
            <div className="flex items-center justify-center md:justify-end space-x-2 md:space-x-4">
              <p style={{fontSize: '13px'}}>or Connect via</p>
              <button className="  transition duration-300 transform hover:scale-110">
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button className="  transition duration-300 transform hover:scale-110">
                {" "}
                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button className="  transition duration-300 transform hover:scale-110">
                {" "}
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button className="  transition duration-300 transform hover:scale-110">
                {" "}
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
