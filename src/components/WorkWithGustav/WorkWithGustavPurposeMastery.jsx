import React from "react";
import { Link } from "react-router-dom";
import GustavImage from "../../images/gustavImages/Community1.jpg";

const WorkWithGustavPurposeMastery = () => {
  return (
    <div className="bg-[#F3F3F3] text-white py-10 md:py-20 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-[412.76px] lg:h-[450px]">
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-auto lg:h-[450px] shadow-lg hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div
          className="flex flex-col justify-start w-full lg:w-[774px]"
          style={{ height: "auto", gap: "14px" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-0 text-black">
            PURPOSE MASTERY
          </h3>
       

          <p className="text-base md:text-sm tracking-wide leading-relaxed mb-4 md:mb-1 text-black">
          •8 weeks commitment. 
  <br /> • Weekly 30 mins private 1:1 coaching call.
  <br /> • Gain clarity on what your purpose is.
  <br /> • Acquire knowledge and skills to build on your purpose and bring it to fruition.
  <br /> • Access tools to monetize your gift.
  <br /> • Understand how your purpose can help you build the life of your dreams.
  <br /> • Learn how to navigate the changing stages of growth on the journey to unleashing your purpose.
  <br /> • Membership to the #YouREnough# private community.

  <br />
            <br />
            Total Value: <strong>$9,000</strong> <br />
            Yours for only <strong>$999</strong>!
</p>


          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <Link
              to="https://book.stripe.com/bIYeVY0XE9Fi9Fu000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3C3CC8] hover:bg-red-700 text-white py-2 px-4 text-sm text-center rounded-md"
            >
              Access Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithGustavPurposeMastery;
