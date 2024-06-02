import React from 'react';
import HomeHero from '../../images/heroImages/AboutHero.webp';

const AboutHero = () => {
  return (
    <div
    className="w-full h-auto"
    style={{ backgroundColor: "#181349" }}
  >
    <div className="max-w-[1600px] mx-auto lg:-mt-38  sm:px-6 ">
      <div className="flex flex-col lg:flex-row text-white pt-20 md:pt-28 relative">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:-mt-28 lg:px-0 md:-mt-20">
           
            <h6 className="text-3xl lg:text-5xl font-bold leading-tight mt- lg:mt-10" style={{color: '#D7CC50'}}> {/* Adjusted margin-top */}
              Gustav Achu guides individuals and businesses to connect with their core mission
            </h6>
            <p className="text-sm lg:text-base mt-4 lg:mt-8"> {/* Adjusted margin-top */}
              He shares practical strategies through engaging videos and invites others to join him on a journey towards personal and professional growth. He has helped individuals from various fields, which include:
            </p>
            {/* Container for buttons */}
            <div className="flex flex-wrap mt-6 -mx-2">
              {/* Individual button */}
             <button style={{fontSize: '13px'}} className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base mx-2 my-2">
                Book a call
              </button> <button style={{fontSize: '13px'}} className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base mx-2 my-2">
                Book a call
              </button> <button style={{fontSize: '13px'}} className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base mx-2 my-2">
                Book a call
              </button> <button style={{fontSize: '13px'}} className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base mx-2 my-2">
                Book a call
              </button>
              {/* Repeat the button above for as many times as needed */}
              {/* Ensure no more than 4 buttons per row */}
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 lg:-mt-16">
            <img src={HomeHero} alt="Gustav Achu"  
              className="w-full lg:h-auto object-cover"
              style={{marginLeft: '23px'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
