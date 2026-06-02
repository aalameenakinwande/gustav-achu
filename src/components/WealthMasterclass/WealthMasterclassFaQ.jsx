import React, { useState } from "react";

const faqs = [
  {
    question: "Who is this masterclass for?",
    answer:
      "This is for ambitious professionals, entrepreneurs, immigrants, and families who are earning money, but feel like their money is not growing the way it should. If you have income and no clear system, this is for you.",
  },
  {
    question: "Who is this masterclass NOT for?",
    answer:
      "This is not for people looking for get-rich-quick shortcuts, overnight investment tips, or a passive session to zone out in. This is for people who are serious about getting honest about their financial reality and taking structured action.",
  },
  {
    question: "It's free- what is the catch?",
    answer:
      "There is no catch. This masterclass is the entry point to the Gustav Achu Legacy Circle community. It is genuinely free. After this session, you’ll have clarity on what’s been happening but most people realize they still need help putting the full system together for their specific situation. That’s why we created the Wealth Clarity & Legacy Blueprint Webinar — where we build your personal 90-day wealth plan.",
  },
  {
    question: "I already earn well. Is this still relevant?",
    answer:
      "Especially relevant. The leaks are quieter at higher income levels, but they are larger. The framework in this session is built specifically for people who earn well but aren't building proportionally.",
  },
  {
    question: "What happens after the masterclass?",
    answer:
      "You keep your worksheet and community access. You will also be invited to the paid webinar to build your full personalised 90-day wealth plan with Gustav live.",
  },

    {
    question: "How do I know this is worth my time?",
    answer:
      "Gustav has helped hundreds of clients begin building their first $100,000 portfolios using this exact system. Sixty minutes- free, and with a worksheet you will actually use. The only question is if you can afford not to show up.",
  },
];

const WealthMasterclassFaQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-white/5 transition"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-5 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 py-4 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-white/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-10 text-center">
       <a
  href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
    hover:bg-red-700 hover:scale-105 transition-transform duration-300"
  >
    SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
  </button>
</a>

  <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p>

          <p className="text-xs text-white/50 mt-3">
            Spots are limited to 100 attendees — once it fills, registration closes for the week.
          </p>

          <p className="text-xs text-white/50 mt-2">
            100% Free | Instant Community Access | Free Worksheet Included
          </p>

          <p className="text-xs text-white/50 mt-2">
            Gustav B. Achu | Author | Legacy Coach | Speaker | Investor | gustavachu.com | gustav@gustavachu.com
          </p>
        </div>

      </div>
    </section>
  );
};

export default WealthMasterclassFaQ;