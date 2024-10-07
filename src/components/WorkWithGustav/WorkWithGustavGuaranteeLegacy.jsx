import React from "react";
import { Link } from "react-router-dom";
import GustavImage from "../../images/gustavImages/WorkGustav.jpg";

const WorkWithGustavGuaranteeLegacy = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="max-w-4xl w-full lg:w-[512.76px] lg:h-[450px]">
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-auto shadow-lg hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between w-full lg:w-[774px]">
          <h3 className="text-2xl lg:text-3xl font-bold mb-0 text-black">
            GUARANTEE YOUR LEGACY
          </h3>
   

          <p className="text-base md:text-sm tracking-wide leading-relaxed mb-4 md:mb-3 xl:mb-5 text-black">
          • 16 weeks commitment: 
  <br /> • Weekly 1:1 private coaching calls (30 minutes) plus mentorship.
  <br /> • Wealth accumulation, expansion, and preservation.
  <br /> • Investing strategies for growth & profits
  <br /> • Next of kin orientation.
  <br /> • Protect generational assets.
  <br /> • Referrals  to top-tier legacy planning resources and advisers as needed.
  <br /> • Direct access to me via DM.
  <br /> • Prequalification to the #YouREnough# private mastermind group.

  <br />
         
         <br /> Total Value: <strong>$15,000</strong>
         <br />
         Yours for only <strong>$3,999</strong>!
</p>


          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a
              href="https://calendly.com/gustavachu77/guarantee-your-legacy?month=2024-09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3C3CC8] hover:bg-blue-700 text-white py-2 px-4 text-sm text-center rounded-md"
            >
              Access Now
            </a>
            <Link
              to="/learn-more"
              className="bg-[#3C3CC8] hover:bg-blue-700 text-white py-2 px-4 text-sm text-center rounded-md"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithGustavGuaranteeLegacy;
