import React from "react";

const ComponentFive = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Why <span className="text-[#BD9A35]">Now</span> Matters
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12">
          You might be asking yourself,{" "}
          <span className="italic">“why should I act now instead of waiting?”</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
        {/* Content */}
        <p className="text-base sm:text-lg md:text-xl">
          There’s never a “perfect” time for anything. But there is a cost to
          waiting. While you’re still figuring things out, you’re missing
          opportunities to optimize your financial foundation.
        </p>

        <p className="text-base sm:text-lg md:text-xl">
          Many paycheck earners are unknowingly leaving{" "}
          <span className="font-semibold text-[#181349]">
            $5,000–$10,000 on the table each year
          </span>{" "}
          — not through mistakes, but simply because they haven’t optimized
          their approach to wealth building.
        </p>

        <p className="text-base sm:text-lg md:text-xl">
          It’s not that you’re doing anything wrong. You might even be
          following conventional advice. But you still haven’t fully figured it
          out yet.
        </p>

        <p className="text-base sm:text-lg md:text-xl">
          More importantly, we are in an unprecedented time to leverage your
          potential and paycheck to build wealth — without quitting your 9-to-5,
          working longer hours, or relying on a raise.
        </p>

        <p className="text-base sm:text-lg md:text-xl">
          More income streams are accessible than ever before. Investment
          platforms have democratized sophisticated strategies, and there are
          side businesses that can be launched within your paycheck.
        </p>

        <p className="font-semibold text-base sm:text-lg md:text-xl  text-[#181349]">
          This opportunity is real. And only the people that take action now are
          going to thrive.
        </p>

        {/* Highlight Box */}
        <div className="bg-white shadow-md border-l-4 border-[#BD9A35] p-6 rounded-xl">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#181349] mb-2">
            The “Ignorance Tax”
          </h3>
        <p className="text-base sm:text-lg md:text-xl">
            Every day you wait is another day you’re paying what I call the{" "}
            <span className="font-semibold text-[#BD9A35]">ignorance tax</span>.
            And that tax compounds.
          </p>
        </div>

        <p className="font-medium text-base sm:text-lg md:text-xl text-gray-800">
          The people that take action <span className="text-[#BD9A35]">now</span>{" "}
          will live with clarity and build wealth.
        </p>
     <div className="text-center space-y-4">
          {" "}
         <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
    Total Value:{" "}
    <span className="text-[#FFD700] line-through">$1,931.99</span>
  </h3>
          <a
            href="https://buy.stripe.com/cNi9AV2nJ0uc4tUczGfw40p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-extrabold text-lg md:text-2xl px-10 md:px-14 py-4 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,0.8)] transition-all duration-300"
          >
            {" "}
            Get It Now for Only $32.99{" "}
          </a>{" "}
          <p className="text-sm md:text-base text-gray-500 italic">
            {" "}
            Valid till{" "}
            <span className="font-semibold text-[#181349]">
              September 30th
            </span>{" "}
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default ComponentFive;
