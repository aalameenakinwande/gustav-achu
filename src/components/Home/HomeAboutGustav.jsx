import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MeetGustav from "../../images/gustavImages/MeetGustav.png";

const HomeAboutGustav = ({ isFull = false }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#181349] via-[#1F1B5B] to-[#181349] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Butler, serif", color: "#D7CC50" }}
          >
            MEET GUSTAV
          </h2>

          {/* SUMMARY VERSION (WEALTH CLARITY PAGE) */}
          {!isFull && (
            <>
              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Gustav B. Achu helps mid-to-high income professionals,
                entrepreneurs, and legacy builders make smarter financial
                decisions, invest with clarity, and build lasting wealth.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                But Gustav’s journey didn’t start with financial success.
                After losing everything in business and going through
                bankruptcy, he made a decision that would change his life
                forever:
              </p>

              <p className="text-white text-sm md:text-lg italic leading-relaxed mb-6">
                “This is the last time any circumstance will meet me in life
                unprepared.”
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-8">
                Since then, Gustav has dedicated decades to studying investing,
                financial strategy, and wealth creation. Today he helps clients
                avoid costly financial mistakes and build wealth with a
                structured, practical approach.
              </p>

              <Link to="/about">
                <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg text-sm md:text-lg font-semibold transition-transform transform hover:scale-105">
                  Read Gustav's Full Story
                </button>
              </Link>
            </>
          )}

          {/* FULL VERSION (ABOUT PAGE) */}
          {isFull && (
            <>
              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Gustav B. Achu is a wealth strategist, educator, and mentor
                dedicated to helping professionals and entrepreneurs make
                smarter financial decisions and build wealth intentionally.
                His work focuses on helping people move beyond simply earning
                income to building structured, long-term wealth and legacy.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Gustav’s journey started far from the world of investing and
                wealth strategy. He began his career as a Nursing Assistant in
                Minnesota and later became a Licensed Practical Nurse. Through
                discipline and hard work, he saved his first $90,000 while still
                working his job.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Determined to expand his opportunities, Gustav went on to study
                International Business and Marketing at UC Berkeley. With
                ambition and optimism, he pursued business opportunities across
                Africa.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                But things didn’t go according to plan.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                After a series of business setbacks, Gustav lost everything.
                He had to foreclose on two homes, file for bankruptcy, and pay
                more than $100,000 to creditors. For four years he rebuilt his
                life from the ground up, even shopping at thrift stores while
                working to stabilize his finances.
              </p>

              <p className="text-white text-sm md:text-lg italic leading-relaxed mb-6">
                “This is the last time any circumstance will meet me in life
                unprepared.”
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                That decision became the turning point in Gustav’s life.
                He committed himself to learning everything he could about
                investing, financial strategy, and long-term wealth creation.
                He began investing 20% of every paycheck into his 401(k),
                attended courses and seminars, worked with mentors, and studied
                the habits of successful investors.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Along the way he made mistakes, learned difficult lessons,
                and slowly rebuilt his financial foundation.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Over time, those consistent decisions compounded. Gustav built
                a portfolio worth over $1,000,000 and developed a simple,
                repeatable system for wealth building that everyday
                professionals can follow.
              </p>

              <p className="text-white text-sm md:text-lg leading-relaxed mb-6">
                Today Gustav works with mid-to-high income professionals,
                entrepreneurs, and legacy builders who want more than just a
                paycheck. Through his private coaching, Wealth Accelerator
                program, books, and educational platforms, he helps clients
                move from earning money to intentionally building wealth,
                protecting their assets, and creating generational impact.
              </p>

              <p className="text-white text-sm md:text-lg italic leading-relaxed mb-6">
                “Your paycheck isn't just to live on; it's to plant seeds that
                duplicate over time. True wealth is not just money; it's
                mindset, stewardship, and legacy.”
              </p>
            </>
          )}
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl"
        >
          <img
            src={MeetGustav}
            alt="Gustav B. Achu"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HomeAboutGustav;