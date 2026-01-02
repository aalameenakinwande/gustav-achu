import React, { useEffect } from "react";
import AOS from "aos";
import { FaTicketAlt } from 'react-icons/fa'; // Importing the check circle icon

import "aos/dist/aos.css";

const EventCtaThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Only trigger animation once
    });
  }, []);

  return (
    <section className="w-full bg-[#181349] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        <div
          className="space-y-4 max-w-3xl"
          data-aos="fade-up" // AOS fade-up effect
        >
          <p className="text-white text-sm lg:text-lg">
            You don’t need a finance degree.
          </p>
          <p className="text-white text-sm lg:text-lg">
            You don’t need to quit your job tomorrow.
          </p>
          <p className="text-white text-sm lg:text-lg">
            You just need a proven blueprint and someone who's walked the path.
          </p>
        </div>

        <h2
          className="text-[#BD9A35] text-md lg:text-2xl font-extrabold max-w-2xl leading-snug mt-10"
          data-aos="fade-up" // AOS fade-up effect for the heading
        >
          Let&apos;s change your money story.
        </h2>
{/* 
        <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-sm lg:text-2xl shadow-lg transition"
  data-aos="zoom-in" 
  onClick={() => window.open("https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n", "_blank")}
>

  I&apos;m Ready (Just $97)
</button> */}


 <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-sm lg:text-2xl shadow-lg transition"
  onClick={() =>
    window.open(
      "https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n",
      "_blank"
    )
  }
>
  <span className="mr-2 line-through text-white">$497</span>
  — Yours Now for Just $97
</button>


      </div>
    </section>
  );
};

export default EventCtaThree;
