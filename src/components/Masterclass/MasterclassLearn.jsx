import React from "react";

const lessons = [
{
  number: "1",
  title: "Why You’re Always Broke (Even When You’re Earning Decent Money)",
  text: (
    <>
      <p className="mb-4">
        If your paycheck looks good on paper but disappears in real life, you're not alone.
        Most people don’t have an income problem — they have a leakage problem.
        In this training, you’ll uncover the hidden habits and invisible money drains that are
        quietly robbing you every month. Once you spot the sabotage, you can stop the cycle —
        without sacrificing your comfort.
      </p>
      <p>
        <strong>Spoiler:</strong> You likely have $500–$2,000 hiding in your current budget.
        This masterclass will help you find it — and flip the script for good.
      </p>
    </>
  ),
}
,
  {
    number: "2",
    title: "The Real Reason Budgeting Hasn’t Worked for You",
    text: `If saving more and spending less was the answer, you'd already be rich. But traditional budgeting is built to keep you surviving — not thriving. You'll learn why most budgeting methods keep you broke, and how to switch to a strategic, wealth-building approach that lets you live on 25% of your income without feeling like you're missing out.`,
  },
  {
    number: "3",
    title: "How to Start Building Wealth With What You Already Have",
    text: `Wealth isn’t about how much you earn — it’s about what you keep and how you multiply it. This isn’t theory. It’s a proven system that helps everyday earners like you build a financial cushion, gain control, and finally move forward. You’ll walk away with the “Hidden Goldmine” strategy that’s been buried in your paycheck all along.`,
  },
];


const MasterclassLearn = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          What You'll Learn From{" "}
          <span className="text-yellow-500">This Live Webinar</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
       {lessons.map((item) => (
  <div key={item.number} className="relative">
    {/* Yellow background */}
    <div className="absolute top-2 left-2 w-full h-full bg-yellow-300 rounded-lg z-0"></div>

    {/* Card */}
    <div className="relative z-10 h-full border border-yellow-400 rounded-lg p-6 text-left bg-white shadow-sm flex flex-col">
      <div className="text-4xl xl:text-7xl text-yellow-500 mb-4">
        {item.number}
      </div>
      <h3 className="font-semibold text-lg xl:text-xl mb-2">{item.title}</h3>
      <p className="text-gray-800 text-md leading-relaxed">{item.text}</p>
    </div>
  </div>
))}

        </div>

        <div className="mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-md text-lg xl:text-xl transition duration-300">
            Yes, I’ll Be There!
            <div className="text-sm lg:text-lg font-normal mt-1">
              Join Gustav LIVE This Wednesday at 7PM CST
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MasterclassLearn;
