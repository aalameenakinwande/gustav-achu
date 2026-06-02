import React, { useState } from "react";
import FakeChallengeModal from "./FakeChallengeModal";

const FakeChallenge = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-[#181349] via-[#1F1B5B] to-[#181349] py-16 sm:py-28 lg:py-44 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">
      
      {/* HEADLINE */}
      <div className="max-w-4xl text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
          The 5-Day Wealth Clarity Challenge
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200">
          Stop Guessing With Your Money — Build a Clear 90-Day Wealth Plan.
        </p>
      </div>

      {/* SUBHEAD */}
      <div className="max-w-4xl text-center mb-10 sm:mb-12 px-2 sm:px-0">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          If you’re earning but not building real wealth, this 5-day challenge will help you create structure, strategy, and execution around your money.{" "}
          <span className="font-semibold text-yellow-400">Join the private waitlist.</span>
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mb-10 sm:mb-12 w-full px-2 sm:px-0">
        {[
          "A Clear 90-Day Wealth Plan",
          "A Simple Wealth System",
          "A framework to grow, protect & multiply your money",
          "Financial clarity without quitting your 9–5"
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-[#262147] rounded-xl p-4 sm:p-6 space-x-3 sm:space-x-4 hover:scale-105 transform transition duration-300 shadow-lg"
          >
            <span className="text-yellow-400 text-xl sm:text-2xl font-bold mt-1">✔</span>
            <p className="text-gray-200 font-medium text-sm sm:text-base md:text-lg">{item}</p>
          </div>
        ))}
      </div>

      <p className="italic text-gray-400 mb-10 sm:mb-12 text-center text-sm sm:text-base">
        This isn’t motivation. It’s structured execution.
      </p>

      {/* CTA BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="bg-red-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
      >
        Join the Waitlist
      </button>

      {/* Controlled Modal */}
      {open && <FakeChallengeModal close={() => setOpen(false)} />}
    </section>
  );
};

export default FakeChallenge;
