import React from "react";
import { FiVolume2 } from "react-icons/fi";


const MasterclassHero = () => {
  return (
    <section className="bg-[#0A0A0F] text-white min-h-screen flex flex-col items-center justify-center px-4 py-10 lg:py-32">
      <div className="max-w-5xl text-center space-y-4">
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-extrabold leading-tight">
          How to Stretch Your Paycheck Without Feeling Broke
        </h1>

        <h2 className="text-md md:text-2xl xl:text-3xl text-yellow-400 font-semibold">
          Uncover the Hidden Money in Your Budget and Start Building Wealth — Even If Your Income Stays the Same
        </h2>

        <p className="text-sm md:text-xl xl:text-2xl font-medium text-white">
          Learn how everyday earners are keeping more, growing faster, and breaking free in{" "}
          <span className="text-yellow-400 font-bold">30–90 days</span> without budget burnout or needing a raise.
        </p>
      </div>

      <div className="w-full max-w-4xl mt-8">
       <div className="bg-[#181349] text-white font-medium text-sm xl:text-lg px-4 py-2 text-center rounded-t-md flex items-center justify-center gap-2">
    <FiVolume2 className="text-sm xl:text-xl" />
    Make Sure To Watch This Video First
  </div>
        <div className="aspect-w-16 aspect-h-9">
          <video
            src="https://res.cloudinary.com/deofmlywm/video/upload/v1750710202/P2P_Ad_VSL_2nd_August_1_1_1_zdidnu.mp4"
            controls
            className="w-full h-full rounded-b-md"
          />
        </div>
      </div>

      <div className="mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-md text-lg xl:text-xl transition duration-300">
            Yes, I’ll Be There!
            <div className="text-sm lg:text-lg font-normal mt-1">
              Join Gustav LIVE This Wednesday at 7PM CST
            </div>
          </button>
        </div>
    </section>
  );
};

export default MasterclassHero;
