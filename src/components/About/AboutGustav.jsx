import React from "react";
import GustavImage from "../../images/gustavImages/Gustav.jpeg";

const AboutGustav = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center md:items-start mt-10">
        <div className="flex-1 lg:pr-8">
          <p className="text-sm md:text-md lg:text-lg mb-8 md:mb-16 text-justify p-8 pt-0 md:p-0">
            As the founder and Chief Empowerment Officer of GB Achu & Company,
            Gustav excels in developing individuals and organizations to reach
            their highest potential. Born and raised in Cameroon, he was
            instilled with values like love, hard work, and respect from an
            early age. Gustav's clear communication, combined with practical,
            results-driven ideas, has been a catalyst for countless people to
            achieve their goals. He is passionate about helping professionals,
            entrepreneurs, business owners, and students overcome tough life
            challenges. Before founding his company, Gustav held various roles
            as an IT professional in Fortune 500 companies across the tech,
            finance, and retail sectors. His successful career as a professional
            MC has allowed him to engage audiences at events across the US,
            Canada, Europe, Dubai, and Africa, traveling and working in numerous
            states and countries. Fluent in English, French, and Pidgin English,
            Gustav has touched lives across four continents. In his writings and
            speeches, he draws from his rich experiences and practical insights
            to guide his audience toward success. His approachable manner and
            genuine care for others' growth have made him a beloved figure among
            those he mentors and inspires.
          </p>

          <a
            href="https://calendly.com/gustavachu77/stage-discovery-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 lg:mt-10 px-10 ml-14 sm:ml-0  md:px-72 lg:px-64 py-4 bg-[#3C3CC8] font-semibold text-white rounded-md shadow transform transition-transform hover:scale-105   duration-300 whitespace-nowrap "
          >
            Book Gustav to speak
          </a>
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:pl-10">
          <img
            src={GustavImage}
            alt="Gustav"
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 filter grayscale brightness-90"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutGustav;
