import React from "react";
import { CheckCircle2 } from "lucide-react";

const ComponentFour = () => {
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
      title: "A Private WhatsApp community (1-Year Access)",
      description:
        "An exclusive WhatsApp community of purpose-driven wealth builders for support, accountability, and resources.",
      value: "$1,200",
      price: "FREE",
    },
    {
      title: "Membership to exclusive newsletter community",
      description: "Premium access to insights, strategies, and support.",
      value: "$400",
      price: "FREE",
    },
  ];

  return (
    <section className="relative bg-[#181349] text-white py-10 xl:py-16 px-6 md:px-12 lg:px-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            What You Get In This Transformation Package
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Unlock life-changing resources, strategies, and community access
            designed to align you with purpose and prosperity.
          </p>
        </div>

        {/* Items */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg divide-y divide-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4"
            >
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-[#FFD700]" /> {item.title}
                </h3>
                <p className="text-gray-300 mt-2 text-xs md:text-base">
                  {item.description}
                </p>
              </div>
              <div className="text-right min-w-[140px]">
                <p className="line-through text-gray-400">{item.value}</p>
                <p className="text-sm xl:text-2xl font-bold text-[#FFD700]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Pricing */}
     <div className="text-center mt-10 space-y-4">
  <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
    Total Value:{" "}
    <span className="text-[#FFD700] line-through">$1,931.99</span>
  </h3>
<div className="mb-12 relative z-50">
  <a
    href="https://buy.stripe.com/cNi9AV2nJ0uc4tUczGfw40p" // Stripe link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-yellow-500 text-black font-bold text-lg md:text-3xl px-10 py-4 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.7)] hover:bg-yellow-400 transition duration-300"
  >
Just for you: $32.99  </a>
</div>  


  <p className="text-xs sm:text-sm text-gray-400 italic">
    Valid till <span className="font-semibold text-white">September 30th</span>
  </p>
</div>




      </div>
    </section>
  );
};

export default ComponentFour;
