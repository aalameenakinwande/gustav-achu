// src/Components/LegacyInsights.jsx
import React from "react";
import { FaYoutube, FaPodcast, FaRegLightbulb } from "react-icons/fa";

const insights = [
  {
    type: "New YouTube Video",
    icon: <FaYoutube className="text-red-500 text-3xl" />,
    schedule: "Every Friday | 2 PM EST",
    description:
      "Actionable insights on investing, wealth strategy, and financial decision-making.",
  },
  {
    type: "Podcast Conversations",
    icon: <FaPodcast className="text-purple-500 text-3xl" />,
    schedule: "Bi-weekly on Tuesday of Every Month | 12 PM EST",
    description:
      "In-depth discussions with experts across finance, purpose discovery, and legacy building—featuring individuals who are building wealth with structure while creating impact that lasts.",
  },
  {
    type: "YouTube Lives",
    icon: <FaRegLightbulb className="text-yellow-400 text-3xl" />,
    schedule: "Every Thursday | 8 PM EST",
    description:
      "Join Gustav and Edimo each week as they explore trending topics in finance, investing, and personal growth—offering practical insights to help you build wealth and strengthen your mindset.",
  },
];

const LegacyInsights = () => {
  return (
    <section className="bg-black text-white py-28 px-6 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <p className="text-[#BD9A35] uppercase tracking-wider font-semibold text-base">
            Weekly Wealth and Legacy Insights
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Step into Gustav Achu’s world of structured wealth building, intentional investing, and legacy-focused thinking
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-2">
            Each week, Gustav shares practical insights designed to help you make better financial decisions and think long-term about the life you’re building.
          </p>
          <p className="text-gray-400 text-base md:text-lg mt-3">
            Free, actionable content to reshape how you approach money, purpose, and legacy.
          </p>
        </div>

        {/* Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <p className="text-[#BD9A35] font-semibold text-sm uppercase tracking-wide">
                  {item.type}
                </p>
              </div>
              <p className="text-white font-bold text-lg md:text-xl">{item.schedule}</p>
              <p className="text-gray-300 text-base md:text-lg">{item.description}</p>
              <a
                href="#subscribe"
                className="mt-auto inline-block bg-[#BD9A35] hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg text-sm text-center transition duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="mt-12 w-full aspect-video bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center relative group cursor-pointer">
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition duration-300 group-hover:bg-opacity-20">
            <FaYoutube className="text-6xl text-red-500 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg z-10 hidden sm:block">
            Watch Gustav’s Latest YouTube Insights
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#subscribe"
            className="inline-block bg-[#BD9A35] hover:bg-yellow-600 text-black font-bold px-12 py-5 rounded-2xl text-xl transition duration-300 shadow-lg hover:shadow-2xl"
          >
            Subscribe for Weekly Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default LegacyInsights;
