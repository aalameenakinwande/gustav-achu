import React from "react";
import { Link } from "react-router-dom";
import GustavImage from "../../images/gustavImages/Community2.jpg";

const WorkWithGustavOneWithGustav = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
        <div
          className="flex flex-col justify-start w-full lg:w-[874px]"
          style={{ height: "auto", gap: "14px" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-0 text-black">
            1:1 WITH GUSTAV{" "}
          </h3>
      


          <p className="text-base md:text-sm tracking-wide leading-relaxed mb-4 md:mb-1 text-black">
          • 30 mins personalized 1:1 private call with Gustav.
  <br /> • Pick my brain on any question of interest tailored to your career, aspirations, dreams, or business.
  <br /> • Tailored insights and clarity.
  <br /> • Personal finance strategy.
  <br /> • Career and entrepreneurship clarity.
  <br /> • Membership to the #YouREnough# private group.
  <br />
            <br />
            Total Value: <strong>$399</strong>
            <br /> Yours for only <strong>$99</strong>
</p>


          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <Link
              to="https://calendly.com/gustavachu77/1-1-with-gustav?month=2024-09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3C3CC8] hover:bg-red-700 text-white py-2 px-4 text-sm text-center rounded-md"
            >
              Access Now
            </Link>
            {/* <Link
              to="https://calendly.com/gustavachu77/guarantee-your-legacy?month=2024-09"     
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3C3CC8] hover:bg-red-700 text-white py-2 px-4 text-sm text-center rounded-md"
            >
              Learn more
            </Link> */}
          </div>
        </div>

        <div className="w-full lg:w-[400.76px] lg:h-[450px]">
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-auto  shadow-lg hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithGustavOneWithGustav;
