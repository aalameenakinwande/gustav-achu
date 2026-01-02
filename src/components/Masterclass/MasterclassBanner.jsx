import React from "react";

const MasterclassBanner = () => {
  return (
    <div className="fixed top-0 w-full bg-[#181349] text-white py-2  z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-center gap-2 text-md md:text-base xl:text-2xl font-medium">
        <span>Live on</span>
        <img
          src="https://infocanvas.upenn.edu/wp-content/uploads/2024/08/Zoom-Logo.png"
          alt="Zoom Logo"
          className="h-10 w-14 md:h-12 md:w-20 object-contain"
        />
        <span>— This Wednesday @ 7PM CST</span>
      </div>
    </div>
  );
};

export default MasterclassBanner;
