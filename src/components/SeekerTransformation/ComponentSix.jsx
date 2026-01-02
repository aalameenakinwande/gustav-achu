import React from "react";
         import { CircleCheckBig } from "lucide-react";

const ComponentSix = () => {
  return (
    <section className="bg-[#181349] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
            The Investment
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300">
            (Why the book is practically free)
          </p>
        </div>

        {/* Value Breakdown */}
        <div className="space-y-6">
          <div className="bg-white/5 p-6 text-base sm:text-lg md:text-xl rounded-lg">
            The <span className="font-semibold">Paycheck to Prosperity Webinar</span> is normally 
            <span className="text-[#BD9A35] font-bold"> $299</span>, but you'll get it{" "}
            <span className="font-bold text-green-400">free</span>.
          </div>
          <div className="bg-white/5 p-6 text-base sm:text-lg md:text-xl rounded-lg">
            It costs <span className="text-[#BD9A35] font-bold">$1200</span> to gain access to the exclusive{" "}
            <span className="font-semibold">#YouREnough# Legacy Circle</span>. But you get this opportunity{" "}
            <span className="font-bold text-green-400">free</span>.
          </div>
          <div className="bg-white/5 p-6 text-base sm:text-lg md:text-xl rounded-lg">
            It costs <span className="text-[#BD9A35] font-bold">$400</span> to gain access to the exclusive{" "}
            <span className="font-semibold">#YouREnough# Newsletter Community</span>. But you get this opportunity{" "}
            <span className="font-bold text-green-400">free</span>.
          </div>
        </div>

        {/* Investment Price */}
        {/* <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold">
            Your only investment:{" "}
            <span className="text-[#BD9A35]">$32.99</span>
          </p>
        </div> */}

        {/* Why This Pays for Itself */}
        <div className="bg-white/5 rounded-lg p-8 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#BD9A35] mb-4">
            Why This Pays for Itself
          </h3>

<ul className="space-y-4 text-base sm:text-lg md:text-xl text-gray-200">
  <li className="flex items-start gap-3">
    <CircleCheckBig className="w-5 h-5 text-[#BD9A35] flex-shrink-0 mt-1" />
    <span>
      You start living with purpose. You gain vision for your life, career, business, and finances.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <CircleCheckBig className="w-5 h-5 text-[#BD9A35] flex-shrink-0 mt-1" />
    <span>
      You get time-tested and proven systems that can help you uncover as much as{" "}
      <span className="text-[#BD9A35] font-semibold">$500</span> in your first week of implementation.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <CircleCheckBig className="w-5 h-5 text-[#BD9A35] flex-shrink-0 mt-1" />
    <span>
      You get practical wealth-building strategies and a roadmap to build your portfolio within your income, goals, and risk comfort—and start earning as much as{" "}
      <span className="text-[#BD9A35] font-semibold">$5000</span> in your first year.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <CircleCheckBig className="w-5 h-5 text-[#BD9A35] flex-shrink-0 mt-1" />
    <span>
      You get live tools and support to build your system immediately and consistently.
    </span>
  </li>
</ul>

          <p className="text-center font-semibold text-base sm:text-lg md:text-xl">
            All for a <span className="text-[#BD9A35]">one-time payment only!</span>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-400 italic text-center">
          Disclaimer: Does not guarantee any specific results. Experiences discussed may not be typical. 
          Background, education, application, and effort may affect your experience. Your results may vary.
        </p>



        {/* Story Section */}
     <div className="bg-white/5 rounded-lg p-8 space-y-6">
  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
    I started writing this book when I was still uncovering my purpose and trying to gain clarity on my career, 
    businesses, and finances amidst failures and confusion.{" "}
    <span className="font-semibold text-white">The Seeker</span> has helped me. 
    It is the most “how to” life guide you'll read. It's my best written material.
  </p>

  {/* Centered CTA */}
    <div className="text-center mt-10 space-y-4">
  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
    Total Value:{" "}
    <span className="text-[#FFD700] line-through">$1,931.99</span>
  </h3>

  <a
      href="https://buy.stripe.com/cNi9AV2nJ0uc4tUczGfw40p" // Stripe link
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-500 text-black font-bold text-lg md:text-3xl px-10 py-4 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.7)] hover:bg-yellow-400 transition duration-300"
    >
      Just for you: $32.99
    </a>

  <p className="text-xs sm:text-sm text-gray-400 italic">
    Valid till <span className="font-semibold text-white">September 30th</span>
  </p>
</div>
</div>

      </div>
    </section>
  );
};

export default ComponentSix;
