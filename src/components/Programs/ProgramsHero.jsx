import React from 'react';

const ProgramsHero = () => {
  return (
    <div className="w-full h-auto" style={{ backgroundColor: '#181349' }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-white py-16 lg:py-24 relative">
          <p className="mb-4 text-lg text-white" style={{fontWeight: 'bold'}}>
            Ignite your growth through
          </p>
          <h1 className="mb-6 text-4xl lg:text-5xl font-bold text-gray-200 text-center" style={{color: '#D7CC50'}}>
            You’re Enough Coaching™
          </h1>
          <p className="mb-8 text-lg text-white text-center max-w-2xl">
            Gustav Achu's You're Enough Coaching™ sparks organizational excellence. Our skilled coaches, handpicked and trained to match Gustav's vision, excel in igniting collective evolution. We offer the tactics and wisdom to drive your team's synergy and establish a structure for lasting success.
          </p>
          <button style={{fontSize: '13px'}} className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramsHero;
