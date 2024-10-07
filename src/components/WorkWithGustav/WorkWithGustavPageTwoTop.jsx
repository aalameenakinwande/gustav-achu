import React from "react";
import { Link } from "react-router-dom";
import GustavImage from "../../images/gustavImages/WorkGustav.jpg";

const WorkWithGustavPageTwoTop = () => {
  return (
    <div className="py-28 md:py-20 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-[512.76px] lg:h-[450px]">
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-auto lg:h-[450px] shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        <div
          className="flex flex-col justify-between w-full lg:w-[774px]"
          style={{ height: "auto", gap: "24px" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-0 text-black">
            GUARANTEE YOUR LEGACY{" "}
          </h3> <h3 className="text-lg mb-0 text-black">
            <span className="text-2xl lg:text-3xl font-bold mb-0 text-black">
                        $3999     </span>
       

          </h3>
          <p className="text-base md:text-md leading-relaxed mb-4 md:mb-0 text-black">
          Take the essential step to secure your family's future and establish a lasting legacy through our comprehensive coaching program. Receive personalized, one-on-one coaching that is meticulously crafted to ensure every decision and effort you make contributes positively to the well-being of your loved ones and leaves a profound impact for generations to come. This exclusive program is designed to provide you with strategic advice that is uniquely tailored to your specific goals, circumstances, and aspirations. Whether you are navigating wealth management, succession planning, or creating a legacy of values, our coaching will empower you with the insights and tools necessary to achieve enduring success and fulfillment for both yourself and your family.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <Link
              to="https://calendly.com/gustavachu77/guarantee-your-legacy?month=2024-09"     target="_blank"
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

export default WorkWithGustavPageTwoTop;
