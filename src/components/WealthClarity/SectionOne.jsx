import React from "react";

const SectionOne = () => {
  return (
    <section className="w-full bg-[#0A081A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1700px] mx-auto">

        {/* MAIN HEADLINE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl mx-auto font-extrabold text-center leading-snug sm:leading-tight mb-6 sm:mb-8">
          Build Real Wealth With a Clear 90-Day Plan—Without Guesswork or Overwhelm
        </h1>

        {/* SUBHEADLINE */}

         <p className="text-center  text-sm sm:text-base max-w-3xl text-gray-400 mx-auto mb-10 sm:mb-5">
          A live, step-by-step wealth workshop that gives you clarity, structure,
          and a repeatable system to grow and protect your money—starting now.
        </p>
 

        <p className="text-center text-gray-300text-sm sm:text-base max-w-3xl text-gray-400 mx-auto mb-10 sm:mb-12">
        Taught by Gustav B. Achu — from bankruptcy & foreclosure to a $1,000,000+ portfolio while working as full-time employee and part-time entrepreneur.
        </p>

      

        {/* 2-COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* LEFT SIDE – VIDEO */}
       <div className="w-full md:w-[50%] lg:w-[90%]">
  <div className="relative rounded-2xl overflow-hidden bg-black
    shadow-[0_0_40px_rgba(189,154,53,0.35)]
    border border-[#BD9A35]/30
    aspect-video
  ">
    <video
      src="https://res.cloudinary.com/deofmlywm/video/upload/v1768920927/DOWN_1_dmr0gl.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
      className="w-full h-full object-cover"
    />
  </div>
</div>


          {/* RIGHT SIDE – TEXT + CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">

            <p className="text-sm sm:text-base text-gray-400 mb-2">
              Gustav B. Achu Presents
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-[#BD9A35]">
              THE WEALTH CLARITY & LEGACY BLUEPRINT WEBINAR
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              How to Grow, Protect & Multiply Your Money Even If You’re Starting
              Small, Without Quitting Your 9–5.
            </p>

            {/* CTA */}
        <button
  onClick={() =>
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
>
  I Want Clarity With My Money
</button>




            <div className="flex flex-wrap items-center gap-6 mt-5">

              {/* Secure Checkout */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-xs sm:text-lg">
                  🔒 100% Secure Checkout
                </span>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-xs sm:text-lg">
                  💰 7-Day Money Back Guarantee
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
