// src/Components/WorkWithGustavOne.jsx
import React from "react";
import { Link } from "react-router-dom";

import GustavLegacy from "../../images/gustavImages/WorkGustav.jpg";
import GustavMillionaire from "../../images/gustavImages/Community3.jpg";
import GustavPurpose from "../../images/gustavImages/Community1.jpg";
import GustavOneOnOne from "../../images/gustavImages/Community2.jpg";

const programs = [
  {
    title: "GUARANTEE YOUR LEGACY",
    description: (
      <>
        • 8 weeks commitment: <br /> • Weekly 1:1 private coaching calls (1 hour) plus mentorship.
        <br /> • Wealth accumulation, expansion, and preservation.
        <br /> • Investing strategies for growth & profits.
        <br /> • Next of kin orientation.
        <br /> • Protect generational assets.
        <br /> • Referrals to top-tier legacy planning resources and advisers as needed.
        <br /> • Direct access to me via DM.
        <br /> • Prequalification to the #YouREnough# private mastermind group.
        <br />
        <br />
        Total Value: <strong>$15,000</strong>
        <br />
        Yours for only <strong>$3,999</strong>!
      </>
    ),
    image: GustavLegacy,
    link: "https://calendly.com/gustavachu77/guarantee-your-legacy?month=2024-09",
    buttonText: "Access Now",
  },
  {
    title: "THE MILLIONAIRE IMMIGRANT",
    description: (
      <>
        • Live 60-minute weekly immersive group Coaching Session with Gustav. Dive deeper into the material, ask questions, and receive more detailed guidance to accelerate your results.
        <br /> • Exclusive member-only information.
        <br /> • Exclusive member-only discounts on products and materials.
        <br /> • Learn uncommon strategies you can leverage for personal development, investing for growth and profits, and create generational wealth to secure your legacy.
        <br /> • Immediate access to educational vault.
        <br /> • Membership to the #YouREnough# private group.
        <br />
        <br />
        Total Value: <strong>$299</strong> monthly
        <br />
        Yours for only <strong>$49 per month</strong>
      </>
    ),
    image: GustavMillionaire,
    link: "https://buy.stripe.com/9AQeVY0XEg3G18YfZ7",
    buttonText: "Access Now",
  },
  {
    title: "PURPOSE MASTERY",
    description: (
      <>
        • 8 weeks commitment.
        <br /> • Weekly 30 mins private 1:1 coaching call.
        <br /> • Gain clarity on what your purpose is.
        <br /> • Acquire knowledge and skills to build on your purpose and bring it to fruition.
        <br /> • Access tools to monetize your gift.
        <br /> • Understand how your purpose can help you build the life of your dreams.
        <br /> • Learn how to navigate the changing stages of growth on the journey to unleashing your purpose.
        <br /> • Membership to the #YouREnough# private community.
        <br />
        <br />
        Total Value: <strong>$9,000</strong>
        <br />
        Yours for only <strong>$999</strong>!
      </>
    ),
    image: GustavPurpose,
    link: "https://book.stripe.com/bIYeVY0XE9Fi9Fu000",
    buttonText: "Access Now",
    bgColor: "bg-[#F3F3F3]",
  },
  {
    title: "1:1 WITH GUSTAV",
    description: (
      <>
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
      </>
    ),
    image: GustavOneOnOne,
    link: "https://calendly.com/gustavachu77/1-1-with-gustav?month=2024-09",
    buttonText: "Access Now",
  },
];

const WorkWithGustavOne = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      {programs.map((program, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`${program.bgColor || ""} py-10 md:py-20 px-4 md:px-10 lg:px-20`}
          >
            <div
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } justify-between items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10`}
            >
              <div className="w-full lg:w-[400px] lg:h-[450px]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-auto lg:h-[450px] shadow-lg hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div
                className="flex flex-col justify-start w-full lg:w-[774px]"
                style={{ gap: "14px" }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-0 text-black">
                  {program.title}
                </h3>
                <p className="text-base md:text-sm tracking-wide leading-relaxed mb-4 md:mb-1 text-black">
                  {program.description}
                </p>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3C3CC8] transform transition-transform hover:scale-105 text-white py-2 px-4 text-sm text-center rounded-md"
                  >
                    {program.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkWithGustavOne;
