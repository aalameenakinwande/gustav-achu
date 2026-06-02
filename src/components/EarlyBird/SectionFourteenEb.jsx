import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who is this webinar for?",
    answer: `Mid- to high-income professionals earning $40,000+ annually, first and second-generation immigrants, entrepreneurs, families, and anyone who wants to build wealth without quitting their 9–5.

Whether you're just getting started, feel stuck paycheck-to-paycheck, or you're already saving but not building wealth, this webinar will give you the clarity and system you need.

If you're a:
- Mid or high income earner earning $40,000+ annually, immigrant, or entrepreneur looking to grow your money
- Parent who wants to secure your family's future
- Anyone tired of feeling behind financially

This webinar is for you.`
  },
  {
    question: "Who is this webinar NOT for?",
    answer: `This webinar is NOT for:
- People looking for get-rich-quick schemes
- Day-trading enthusiasts (this is about long-term, low-risk wealth building)
- Anyone who's not willing to take action or follow a simple system
- People who already have financial clarity and a proven wealth-building strategy

If you're curious but not serious, please don't waste your money or our time.`
  },
  {
    question: "I don't have a lot of money to invest. Will this still work for me?",
    answer: `Absolutely.

This webinar is specifically designed for people starting small. Gustav himself started with just 20% of his paycheck going into his 401(k).

You'll learn how to build wealth even if you're starting with less than $500.`
  },
  {
    question: "I'm afraid of losing money. How do you address that?",
    answer: `Fear of risk is one of the top obstacles many people face.


In this webinar, you'll learn:
- How to invest in companies you already know and trust
- How to avoid the mistakes that cost Gustav $80,000 in losses
- How to protect your money and reduce risk
- A simple, easy-to-implement strategy without guesswork or overwhelm
- You will leave knowing exactly what to do- and why- so fear no longer controls your financial decisions.



You'll leave feeling confident, not fearful.`
  },
 {
  question: "Do I need to quit my job to build wealth?",
  answer: `No.

One of the top financial desires for many people is: "Build wealth without quitting my 9–5."

Gustav built his $1,000,000+ portfolio while working as a full-time employee and part-time entrepreneur.

This webinar shows you how to do the same.`
}
,
  {
    question: "What's the difference between General Admission and VIP Experience?",
    answer: `General Admission ($97):
90-minute live webinar
All core materials (workbook, templates, replay, accountability group, bonus playbook)

VIP Experience ($197):
- Everything in General Admission
- Extended access to the session (VIP stays after the general webinar: 6:00 PM – 8:30 PM EST)
- Guaranteed Q&A time with Gustav about your specific situation
- Extended live experience with an additional 1-hour session (after the 90-minute main session)
- VIP-only Personal 90-Day Plan Review Template
- First access to future offers
- VIP only bonus: The wealth architect playbook
- If clarity and speed matter more than saving a few dollars, VIP is the obvious choice.

The VIP experience is intentionally limited for ambitious action-takers who refuse to guess. You get Gustav’s direct attention through live interaction and priority Q&A, personalized guidance aligned to your goals, and real-time insight—guidance most attendees never get—so you leave with clarity, confidence, and a clear path forward.

`


  },
  {
    question: "Will I get lifetime access to the materials?",
    answer: `You'll get 30 days of replay access and lifetime access to the PDF workbook, Google Sheet templates, and bonus playbook.

The replay access is time-limited to encourage you to take action quickly (not let it sit in your email forever).`
  },
  {
    question: "What if I can't attend live?",
    answer: `You'll still get the replay for 30 days.

However, we highly recommend attending live because:
You'll complete the exercises in real time
You can ask questions (especially VIP ticket holders)
The energy and accountability of being live is unmatched

That said, we understand things happen. If you can’t attend live, you’ll still have access to the event replay.`
  },
  {
    question: "Is there a refund policy?",
    answer: `Yes.


 If after participating you don’t gain clarity on where you stand financially and don’t walk away with a clear 90-day wealth plan you can execute, simply email our support team within 7 days of the event and we’ll issue a full refund.

This workshop is designed to give you clarity, structure, and direction — not hype.

If it doesn’t do that for you, you shouldn’t pay for it. We ask that you participate in the training before requesting a refund. VIP Ticket includes extended clarity support and priority Q&A, significantly reducing the likelihood you’ll need a refund.
`
  },
  {
    question: "How much time will I need to commit after the webinar?",
    answer: `General Admission includes 90 minutes of core training.

VIP attendees stay for an additional 60-minute advanced session designed for deeper clarity, Q&A, and personalized guidance.

After that, the 14-Day Accountability Sprint requires:
10–15 minutes a day for habit tracking
3 check-ins per week in the WhatsApp community

The 90-Day Money Plan is designed to fit into your life, even if you're working full-time.`
  },
  {
    question: "I've tried other programs before and they didn't work. Why will this be different?",
    answer: `Because this isn't about hype, theory, or motivation.

This is a step-by-step system based on what Gustav actually did to go from bankruptcy to $1,000,000+.

You'll get:
Clear frameworks, not vague advice
Real examples instead of just concepts
Built-in accountability`
  }
];


const SectionFourteenEb = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#08070F] to-[#181349] text-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-[900px] mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#BD9A35] text-center mb-4">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-center text-gray-300 mb-6 sm:mb-10 text-base sm:text-lg">
          If your questions aren't listed below, feel free to email us at{' '}
          <span className="text-[#BD9A35]">gustav@gustavachu.com</span>
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#1B1A2E] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-2xl scale-[1.02]' : ''
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center focus:outline-none hover:bg-[#2a2545] transition-colors duration-300"
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold">
                  {faq.question}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#BD9A35]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-200 whitespace-pre-line text-sm sm:text-base md:text-lg"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

                <div className="text-center mt-10 sm:mt-16">


         <button
  onClick={() => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
   I Want Clarity With My Money
</button>
</div>
      </div>
    </section>
  );
};

export default SectionFourteenEb;
