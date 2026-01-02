import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is Paycheck to Prosperity?",
    answer:
      "It’s a 1-hour 30minutes webinar that helps you break the cycle of living paycheck to paycheck and start building wealth intentionally.",
  },
  {
    question: "Do I need prior financial knowledge?",
    answer:
      "No. This is beginner-friendly, with advanced insights for those already on the journey.",
  },
  {
    question: "How long do I have access to the replay?",
    answer:
      "You’ll have 72 hours to rewatch and take notes.",
  },
  {
    question: "How will the live session be delivered",
    answer:
      "The session will be conducted via Zoom. After registering, you'll receive a link with your access details. Registration involves booking your spot, marking down your calendar and completing your workbook.",
  },
  {
    question: "Who is this seminar for?",
    answer:
      "If you're tired of wondering where your money goes, and want to take control of your finances, then this seminar is for you.",
  },
  {
    question: "What is the difference between this webinar and other financial programs?",
    answer:
      "Unlike most webinars filled with theory or hype, Paycheck to Prosperity is grounded in real-life experience. Gustav B. Achu isn’t a guru who studied wealth. He lived the struggle of working 16-hour days, facing layoffs, losing a home to foreclosure, and still finding a way to build a thriving business and lasting wealth.",
  },
  {
    question: "Can I ask questions during the webinar?",
    answer:
      "Yes! There will be a live Q&A session at the end.",
  },
];

const Eventsfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation should only happen once
    });
  }, []);

  return (
    <section className="bg-[#F3F3F3] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Questions & Answers</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm"
              data-aos="fade-up" // Apply AOS animation here
              data-aos-delay={index * 100} // Add a delay for each FAQ item for a staggered effect
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
              >
                <span className="text-sm lg:text-xl">{faq.question}</span>
                <span className="text-sm lg:text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm lg:text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventsfaq;
