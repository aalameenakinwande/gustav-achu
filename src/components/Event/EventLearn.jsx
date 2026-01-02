import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTicketAlt } from 'react-icons/fa';

const EventLearn = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#181349] py-16 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-[#BD9A35] text-md md:text-lg font-semibold uppercase tracking-wide mb-3">
            1 hour 30 minutes LIVE Zoom Webinar | Saturday August 2nd
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
       Schedule for the “Paycheck to Prosperity” Webinar, What You'll Learn:

          </h2>
        </div>

        {/* Learning Points */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 relative">
          {[
            {
              title: "Break free from the paycheck loop and finally take control of your money",
              description:
                "Discover why many remain stuck in the paycheck-to-paycheck cycle and how to break free.",
            },
            {
              title: "Shift from saver to wealth builder with a proven, intentional strategy.",
              description:
                "Learn to think like an investor, not just a saver, and how this shift can transform your financial journey.",
            },
            {
              title: "Increase your income without quitting your 9–5 or working more hours.",
              description:
                "Explore smart ways to increase your income without quitting your 9–5 job.",
            },
            {
              title: "Find your best path to prosperity based on your income, goals, and lifestyle.",
              description:
                "Gain insights into whether entrepreneurship or a traditional career aligns with your wealth-building goals.",
            },
              {
              title: "Move from confusion to confidence with money decisions that build real wealth.",
              description:
                "Explore smart ways to increase your income without quitting your 9–5 job.",
            },
            {
              title: "Get practical tools and live support to build your system and stay consistent.",
              description:
                "Gain insights into whether entrepreneurship or a traditional career aligns with your wealth-building goals.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border-l-[6px] border-[#BD9A35] shadow-sm hover:shadow-md transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-[#181349] font-semibold text-sm lg:text-xl mb-2">{item.title}</h3>
              {/* <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{item.description}</p> */}
            </div>
          ))}

          {/* Last item (Centered on desktop) */}
          {/* <div
            className="bg-white p-6 rounded-2xl border-l-[6px] border-[#BD9A35] shadow-sm hover:shadow-md transition duration-300 md:col-span-2 md:w-1/2 md:mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-[#181349] font-semibold text-lg lg:text-xl mb-2">Personal Story</h3>
            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              Hear Gustav's journey from facing multiple layoffs and financial uncertainty to building successful businesses and achieving financial freedom.
            </p>
          </div> */}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center" data-aos="zoom-in">
          <p className="text-white text-sm lg:text-2xl font-medium mb-4">
             <span className="mr-2 line-through text-white">$497</span>
  — Yours Now for Just $97
          </p>
          <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-sm lg:text-2xl shadow-lg transition"
  onClick={() => window.open("https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n", "_blank")}
>
  <FaTicketAlt className="inline-block mr-2" /> 
  Join The Paycheck to Prosperity Webinar Now!
</button>

        </div>
      </div>
    </section>
  );
};

export default EventLearn;
