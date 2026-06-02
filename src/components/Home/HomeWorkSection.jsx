import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeWorkSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose How You Want to Work With Gustav
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            A structured pathway for professionals ready to build real wealth,
            scale their income, and create long-term financial security.
          </p>
        </div>

        {/* Single Box */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-gradient-to-b from-[#161616] to-[#0b0b0b] border border-[#1f1f1f] hover:border-[#BD9A35] rounded-xl p-10 md:p-12 shadow-xl text-center transition flex flex-col"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#BD9A35]">
            Accelerator Coaching Program
          </h3>

          <p className="text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Full coaching program for high-income professionals and immigrants
            ready to grow wealth strategically, scale income, and build a
            lasting legacy. Includes personalized investment strategy,
            coaching, and access to our private community.
          </p>

          {/* <div>
            <Link
              to="/accelerator"
              className="inline-block bg-[#BD9A35] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#a8842f] transition"
            >
              Learn More
            </Link>
          </div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default HomeWorkSection;