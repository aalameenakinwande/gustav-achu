import React from "react";

const ComponentThree = () => {
  return (
    <section className="w-full bg-[#181349] py-16 px-6">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          The Seeker Transformation Bundle
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12">
          I've put together this life-changing package to help you break through
          stagnation, gain unstoppable clarity, and start building real wealth
          with purpose.
        </p>

        {/* Transformation points */}
       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-left">
    <p className="text-base sm:text-lg md:text-xl">
    Uncover your purpose- what you were meant to be and do- and stop drifting
    </p>
  </div>
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-left">
    <p className="text-base sm:text-lg md:text-xl">
 Gain clarity on your vision for your career, finances, and personal life.
    </p>
  </div>
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-left">
    <p className="text-base sm:text-lg md:text-xl">
   Break free from the paycheck-to-paycheck cycle without working longer hours or relying on a raise.
    </p>
  </div>
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-left">
    <p className="text-base sm:text-lg md:text-xl">
      Learn to align yourself with like-minded people who fuel your fire and not your doubt, bringing out the best in you.
    </p>
  </div>
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-left md:col-span-2">
    <p className="text-base sm:text-lg md:text-xl">
    Learn time-tested and proven wealth-building strategies that align with your core principles, purpose, and legacy.
    </p>
  </div>
</div>


      <div className="space-y-5 text-gray-200 text-lg leading-relaxed mb-4 mt-10" >
           <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
    Total Value:{" "}
    <span className="text-[#FFD700] line-through">$1,931.99</span>
  </h3>
          </div>
<div className="mb-12 relative z-50">
  <a
    href="https://buy.stripe.com/cNi9AV2nJ0uc4tUczGfw40p" // Stripe link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-yellow-500 text-black font-bold text-lg md:text-3xl px-10 py-4 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.7)] hover:bg-yellow-400 transition duration-300"
  >
Just for you: $32.99  </a>
    <h3 className="text-sm mt-3 font-italic">
Valid till September 30th         </h3>
</div>  




      
      </div>
    </section>
  );
};

export default ComponentThree;
