import React, { useState } from "react";

const faqData = [
  {
    question: "Is this really only available on November 28?",
    answer:
      "No. This is a limited-time Black Friday offer that’s already available. November 28 is simply the deadline. After the 28th, these products return to their regular pricing, and the bundle savings of $510 disappears.",
  },
  {
    question: "Can I buy individual products and upgrade to the bundle later?",
    answer:
      "The bundle discount is only available during this Black Friday offer. If you purchase individually now, you won't be able to access the bundle savings later.",
  },
  {
    question: "What if I'm brand new to investing? Is this too advanced for me?",
    answer:
      "No. The Accelerator Coaching is personalized to YOUR level, income, and goals. Whether you're opening your first investment account or optimizing an existing portfolio, you'll get tailored guidance that meets you where you are.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Many people say that they've been able to uncover $500+ in their first week by implementing the systems in The Seeker and Masterclass. For investment returns, the Accelerator Coaching helps you build a strategy that can generate $5,000+ in your first year, though individual results vary based on your starting point, income, and market conditions.",
  },
  {
    question: "Do I need to quit my job to make this work?",
    answer:
      "Absolutely not. This entire system is designed for people with 9-to-5 jobs. You'll learn to build wealth without working longer hours or relying on a raise.",
  },
  {
    question: "I have tried other programs and they didn't work",
    answer:
      "The Accelerator Coaching is personalized to YOUR income, goals, and risk tolerance. Plus, The Seeker helps you align your wealth-building with your purpose, which is why people see breakthrough results.",
  },
  {
    question: "Is there a payment plan available?",
    answer:
      "For this Black Friday offer, we're offering the best possible pricing as a one-time payment. Payment plans are not available for the bundle, but you can purchase individual products separately if needed.",
  },
];

const BundleFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#0f0f17] py-8 px-4 flex justify-center">
      <div className="w-full max-w-5xl">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#151521] border border-[#2a2a36] rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg transition-transform duration-300 hover:scale-[1.01] hover:shadow-yellow-600/50"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-white font-semibold text-sm sm:text-base md:text-xl focus:outline-none"
              >
                <span className={`${openIndex === index ? "text-yellow-400" : ""}`}>
                  {item.question}
                </span>
                <span
                  className={`ml-2 text-yellow-400 text-lg sm:text-xl md:text-2xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 mt-2 sm:mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mt-1 sm:mt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BundleFaq;
