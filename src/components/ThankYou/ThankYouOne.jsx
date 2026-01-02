import React from "react";

const ThankYouOne = () => {
  return (
    <section className="flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#181349]">
            Your Workbook Is Ready!
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            To help you get the most from the session, we’ve created a powerful,
            interactive workbook designed to help you reflect, challenge old beliefs,
            and implement what you learn.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-[#181349] mb-3">
            How to Use This Workbook:
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            This workbook is your personal space to reflect, challenge your mindset,
            and take action. Be honest, write freely, and commit to progress—not perfection.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYqelUSvbug9Hx6-3dtXfgVSOmXcp3ks75lOiWYePuYz3MzA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#181349] hover:bg-[#120f35] text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-full transition-shadow shadow-md"
          >
            Access it here
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYouOne;
