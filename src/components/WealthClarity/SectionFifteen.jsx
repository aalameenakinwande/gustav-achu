import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineDollar,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";

const SectionSixteen = () => {
  return (
    <section className="bg-[#08070F] text-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto space-y-12">

        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#BD9A35]">
            THE GUARANTEE
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-semibold">
            Our Commitment To You
          </p>

          <p className="text-gray-300 text-base sm:text-lg max-w-[900px] mx-auto">
            We are committed to providing high-quality programs, resources, and tools that deliver real value.
          </p>

          <p className="text-gray-300 text-base sm:text-lg max-w-[900px] mx-auto">
            We understand that circumstances may arise where a refund is requested, and we have established the following refund policy to ensure fairness and clarity:
          </p>
        </div>

        {/* Panels */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Commitment */}
          <div className="bg-[#181349] rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <AiOutlineSafetyCertificate className="text-[#BD9A35] w-10 h-10 sm:w-12 sm:h-12" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#BD9A35] border-b border-[#BD9A35] pb-2">
              Our Commitment
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">
              We are committed to delivering programs, resources, and tools that create meaningful, real-world outcomes — not theory, hype, or empty promises.
            </p>
          </div>

          {/* Refund Policy */}
         <div className="bg-[#181349] rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
  <AiOutlineDollar className="text-[#BD9A35] w-10 h-10 sm:w-12 sm:h-12" />

  <h3 className="text-xl sm:text-2xl font-semibold text-[#BD9A35] border-b border-[#BD9A35] pb-2">
    Webinar Refund Policy
  </h3>

  <p className="text-gray-200 font-semibold text-sm sm:text-base">
    7-Day Money Back Guarantee
  </p>

  <p className="text-gray-200 text-sm sm:text-base">
    If after participating you don’t gain clarity on where you stand financially and don’t walk away with a clear 90-day wealth plan you can execute, simply email our support team within 7 days of the event and we’ll issue a full refund.
  </p>

  <p className="text-gray-200 text-sm sm:text-base">
    This workshop is designed to give you clarity, structure, and direction — not hype.  
    If it doesn’t do that for you, you shouldn’t pay for it.
  </p>

  <p className="text-gray-200 text-sm sm:text-base font-semibold">
    We ask that you participate in the training before requesting a refund.
  </p>

  <p className="text-gray-200 text-sm sm:text-base">
    <span className="font-semibold">VIP Ticket:</span> Includes extended clarity support and priority Q&A, significantly reducing the likelihood you’ll need a refund.
  </p>
</div>


          {/* Why Guarantee */}
          <div className="bg-[#181349] rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-start space-y-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <AiOutlineCheckCircle className="text-[#BD9A35] w-10 h-10 sm:w-12 sm:h-12" />

            <h3 className="text-xl sm:text-2xl font-semibold text-[#BD9A35] border-b border-[#BD9A35] pb-2">
              Why We Offer This Guarantee
            </h3>

            <p className="text-gray-200 text-sm sm:text-base">
              Because we are confident that by the end of this webinar, you will have:
            </p>

            <ul className="list-disc list-inside text-gray-200 text-sm sm:text-base space-y-2">
              <li>
                <span className="font-semibold">Financial clarity</span> — you’ll know exactly where you stand and what your next steps are
              </li>
              <li>
                <span className="font-semibold">A working financial structure</span> — a simple system to organize your income, savings, and investments
              </li>
              <li>
                <span className="font-semibold">A practical wealth-building strategy</span> — real steps you can take without quitting your 9–5
              </li>
              <li>
                <span className="font-semibold">A legacy roadmap</span> — a clear plan to build wealth for you and your family
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-16">
        <button
  onClick={() => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
  I Want Clarity With My Money
</button>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-5">

            {/* Secure Checkout */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#E6C677]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c.828 0 1.5.672 1.5 1.5v3a1.5 1.5 0 11-3 0v-3c0-.828.672-1.5 1.5-1.5zm6-2h-1V7a5 5 0 00-10 0v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-3 0H9V7a3 3 0 016 0v2z"
                />
              </svg>
              <span className="text-gray-300 text-xs sm:text-lg">
                100% Secure Checkout
              </span>
            </div>

            {/* Money Back */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#E6C677]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-300 text-xs sm:text-lg">
                7-Day Money Back Guarantee
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionSixteen;
