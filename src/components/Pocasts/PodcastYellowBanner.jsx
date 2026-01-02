import React from "react";

const PodcastYellowBanner = () => {
  return (
    <div className='bg-[#E2D654]  className="w-full p-3'>
      <div className="max-w-[1600px] mx-auto lg:-mt-38 sm:px-6">
        <p className="text-center">
          <span className="font-bold">New episodes</span> released every{" "}
          <span className="font-bold">Tuesday</span> to start your week 
          {/* <span className="font-bold">Thursday</span> to get you through it */}
        </p>
      </div>
    </div>
  );
};

export default PodcastYellowBanner;
