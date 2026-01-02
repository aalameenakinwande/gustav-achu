import React from "react";
import { CheckCircle2 } from "lucide-react";

const ComponentOne = () => {
  const items = [
    {
      title: "THE SEEKER (Book)",
      description:
        "Your personal guide to uncover purpose, gain clarity, and align with your calling.",
      // value: "$32.99",
      price: "$32.99",
    },
    {
      title: "Paycheck to Prosperity Masterclass (Recording)",
      description:
        "Break free from the paycheck-to-paycheck cycle and take control of your finances with a proven strategy that turns savers into wealth builders—without quitting your job or working more hours.",
      value: "$299",
      price: "FREE",
    },
    {
      title: "Private WhatsApp Community Membership (1-Year Access)",
      description:
        "An exclusive WhatsApp community of purpose-driven wealth builders for support, accountability, and resources.",
      value: "$1,200",
      price: "FREE",
    },
    {
      title:
        "Membership to exclusive newsletter community (1-Year Access)",
      description:
        "Premium access to insights, strategies, and support.",
      value: "$400",
      price: "FREE",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#181349] via-[#2a2356] to-[#181349] text-white py-16 md:py-28 px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            The Seeker Transformation Bundle
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200">
            Stop living in survival mode. Start living with purpose.
          </p>
        </div>

        {/* Bonuses Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg divide-y divide-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 gap-3 sm:gap-4"
            >
              {/* Left side: title + description */}
              <div className="text-left space-y-1">
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2
                    className="text-[#FFD700] shrink-0"
                    size={18}
                  />
                  {item.title}
                </h3>
                {/* Uncomment if you want to show descriptions */}
                {/* <p className="text-xs sm:text-sm text-gray-300">{item.description}</p> */}
              </div>

              {/* Right side: value & price */}
              <div className="text-right min-w-[100px] sm:min-w-[140px]">
                <p className="line-through text-gray-400 text-xs sm:text-sm">
                  {item.value}
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-bold text-[#FFD700]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-10 space-y-4">
          <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
            Total Value:{" "}
            <span className="text-[#FFD700] line-through">
              $1,931.99
            </span>
          </h3>
          <a
            href="https://buy.stripe.com/cNi9AV2nJ0uc4tUczGfw40p"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-auto bg-yellow-500 text-black font-bold text-lg md:text-2xl px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:bg-yellow-400 transition duration-300"
          >
            Just for you: $32.99
          </a>
          <p className="text-xs sm:text-sm text-gray-400 italic">
            Valid till{" "}
            <span className="font-semibold text-white">
              September 26th
            </span>
          </p>
        </div> */}


{/* CTA */}
<div className="text-center mt-10 space-y-4">
  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
    Total Value:{" "}
    <span className="text-[#FFD700] line-through">$1,931.99</span>
  </h3>

  <div className="block w-full sm:w-auto bg-gray-600 cursor-not-allowed text-white font-bold text-lg md:text-2xl px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.4)]">
    This Offer Has Ended
  </div>

  <p className="text-xs sm:text-sm text-gray-400 italic">
    Stay tuned for future opportunities 
  </p>
</div>

        {/* Description */}
        <div className="mt-12 space-y-5 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
          <h3 className="text-lg md:text-2xl font-semibold text-yellow-400 text-center">
            Limited Time — My Biggest Offer Ever
          </h3>
          <p>
            This bundle will literally pay for itself. It has already
            helped hundreds of professionals, first and second generation
            immigrants, entrepreneurs, 9-5ers, and freelancers uncover their
            purpose and break free from the paycheck-to-paycheck cycle.
          </p>
          <p>
            Take control of your finances with a proven strategy that
            transforms savers into wealth builders — without quitting your job
            or working extra hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComponentOne;
