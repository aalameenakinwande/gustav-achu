import React, { useState } from 'react';
import Gilbert from '../../images/Testimonials/Gilbert.jpg'

const testimonials = [
  {
    quote: "I deeply appreciate your incredible work as a motivational speaker. Your words inspire and uplift, touching the hearts and minds of all who hear you. Your ability to ignite hope, courage, and determination makes the world a better place. Keep shining brightly!",
    name: "GILBERT NGYIA",
    title: "FOUNDER OF G FASHION LINE",
    image: Gilbert, 
  },
];

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="max-w-[1600px] w-full text-center">
        <div className="flex items-center justify-center">
          <button onClick={handlePrev} className="text-gray-700 hover:text-gray-900 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="mx-auto w-11/12 md:w-2/4 lg:w-3/3">
            <p className="text-xl md:text-2xl lg:text-3xl mb-10" style={{ fontFamily: 'Butler, serif' }}>
              “{testimonials[current].quote}”
            </p>
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name} 
                className="w-16 h-16 mb-2 rounded-full"
              />
              <h3 className="text-lg md:text-xl mb-1 font-semibold">
                {testimonials[current].name}
              </h3>
            </div>
            <p className="text-sm md:text-base font-semibold">
              {testimonials[current].title}
            </p>
          </div>
          <button onClick={handleNext} className="text-gray-700 hover:text-gray-900 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
