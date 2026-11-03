import React, { useState } from "react";

const WealthSectionFive = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToConsultation = () => {
    document
      .getElementById("consultation-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question: "Is this financial coaching?",
      answer:
        "No. This is a structured financial architecture diagnostic and strategic consultation focused on evaluating your current positioning and identifying opportunities for improvement.",
    },
    {
      question: "Is this investment advice?",
      answer:
        "This session is educational and strategic in nature. Specific investment decisions remain your responsibility.",
    },
    {
      question: "Who is this best suited for?",
      answer:
        "Professionals, entrepreneurs, business owners, executives, and individuals serious about building long-term wealth strategically.",
    },
    {
      question: "What if I already invest?",
      answer:
        "Perfect. This consultation can help identify inefficiencies, gaps, or opportunities within your current structure.",
    },
    {
      question: "What happens after the session?",
      answer:
        "You’ll walk away with a clear roadmap. If additional implementation support makes sense, the consultation fee is credited toward future services.",
    },
    {
      question:
        "I've never invested before. Is this consultation still for me?",
      answer:
        "Yes. Whether you're just getting started or already have an investment portfolio, this session is tailored to your current financial situation. You'll leave with a clear understanding of your next best steps and greater confidence in your financial decisions.",
    },
  ];

  return (
    <section className="bg-[#F5F3ED] text-[#0A081A] overflow-hidden">

      {/* FAQ HEADER */}
      <div className="px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">
            {/* <p className="text-[#BD9A35] uppercase tracking-[0.25em] text-xs font-bold mb-5">
              Questions & Answers
            </p> */}

            <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-[0.95] tracking-tight">
              Frequently Asked{" "}
              <span className="text-[#BD9A35]">Questions</span>
            </h2>

            {/* <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
              Everything you need to know before deciding whether this
              consultation is right for you.
            </p> */}
          </div>

        </div>
      </div>

      {/* FAQ LIST */}
      <div className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">

          <div className="border-t border-[#0A081A]/15">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#0A081A]/15"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-6 py-7 md:py-9 text-left group"
                  >
                    <div className="flex items-start gap-5 md:gap-8">
                      <span className="text-[#BD9A35] text-xs md:text-sm font-bold tracking-widest pt-1">
                        0{index + 1}
                      </span>

                      <h3 className="text-lg md:text-2xl font-bold leading-snug group-hover:text-[#BD9A35] transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full border border-[#0A081A]/20 flex items-center justify-center text-xl font-light transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0A081A] text-white border-[#0A081A]"
                          : "text-[#0A081A]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-8"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-12 md:pl-20 pr-8 md:pr-16">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[#0A081A] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end">

            <div>
              {/* <p className="text-[#BD9A35] uppercase tracking-[0.25em] text-xs font-bold mb-6">
                Your Next Move
              </p> */}

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight">
                Stop Guessing With Your{" "}
                <span className="text-[#BD9A35]">
                  Financial Future
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">

              <div className="w-12 h-px bg-[#BD9A35] mb-7" />

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Your income alone does not create wealth.
                <br />
                <span className="text-white font-bold">
                  Structure does.
                </span>
              </p>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-6">
                Book your private consultation today and gain clarity on what
                to optimize, what to avoid, and how to position yourself
                moving forward.
              </p>
<button
  onClick={() =>
    window.open(
      "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-09",
      "_blank"
    )
  }
  className="mt-9
             bg-gradient-to-r from-red-700
             via-red-600 to-red-500
             hover:from-red-800
             hover:via-red-700
             hover:to-red-600
             text-white
             px-10 md:px-12
             py-5 md:py-6
             rounded-xl
             font-extrabold
             text-base md:text-lg
              tracking-wide
             shadow-[0_10px_40px_rgba(220,38,38,0.25)]
             hover:scale-[1.03]
             active:scale-[0.98]
             transition-all duration-300"
>
  Yes, I Want To Book My Wealth Consultation
</button>
            
                 <p className="mt-6 text-xs text-center text-white/40 sm:text-sm">
            Limited Consultation Spots Available Each Month — Apply Early
          </p>
          

            </div>

          </div>

          {/* BOTTOM ACCENT */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Private Wealth Consultation
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Strategic Financial Clarity
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WealthSectionFive;