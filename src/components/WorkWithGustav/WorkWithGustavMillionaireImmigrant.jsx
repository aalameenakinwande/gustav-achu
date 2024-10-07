import React from "react";
import GustavImage from "../../images/gustavImages/Community3.jpg";

const WorkWithGustavMillionaireImmigrant = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
        <div
          className="flex flex-col justify-start w-full lg:w-[774px]"
          style={{ height: "auto", gap: "14px" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-0 text-black">
            THE MILLIONAIRE IMMIGRANT
          </h3>

          <p className="text-base md:text-sm tracking-wide leading-relaxed mb-4 md:mb-0 text-black">
            <br /> • Live 60-minute weekly Immersive group Coaching Session with Gustav. Dive deeper into the material, ask questions, and receive more detailed guidance to accelerate your results. You bring your questions, and I will bring you my most powerful answers.
            <br /> • Exclusive member-only information.
            <br /> • Exclusive member-only discounts on products and materials.
            <br /> • Learn uncommon strategies you can leverage for personal
            development, investing for growth and profits, and create
            generational wealth to secure your legacy.
            <br /> • Immediate access to educational vault
            <br /> • Membership to the #YouREnough# private group.
            <br /> <br />
            Total Value: <strong>$299</strong> monthly <br />
            Yours for only
            <strong>$49 per month</strong>
          </p>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a
              href="https://buy.stripe.com/9AQeVY0XEg3G18YfZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3C3CC8] hover:bg-blue-700 text-white py-2 px-4 text-sm text-center rounded-md"
            >
              Access Now
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[312.76px] lg:h-[450px]">
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-auto lg:h-[450px] shadow-lg hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithGustavMillionaireImmigrant;
