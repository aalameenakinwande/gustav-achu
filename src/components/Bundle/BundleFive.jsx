import React from "react";

const videoLinks = [
  "https://drive.google.com/file/d/1GVKVufPVe8k57hp0uYErjG6Bag4bSsGK/preview?controls=0",
  "https://drive.google.com/file/d/1J3qadAiLsXCICj4AHWI8nWnvvqOKIuTZ/preview?controls=0",
  "https://drive.google.com/file/d/1LmUjv-K1fU1n5NOg0AC_JQ4FkaoNt0ih/preview?controls=0",
  "https://drive.google.com/file/d/1oDpyRjb8JPo8ZLe7JfAdONXXT4NN3zKb/preview?controls=0",
  // "https://drive.google.com/file/d/1tushp08E7DH3Fg79ThvQQHlOmfICqjow/preview?controls=0",
  // "https://drive.google.com/file/d/1BP6ofDUSIaJbLwKdaeqe_n45Jp0wrDmx/preview?controls=0",
  // "https://drive.google.com/file/d/1yRoK05CMuj8hiJuXPjENmvD_ZLco0Hzb/preview?controls=0"
];

const BundleFive = () => {
  return (
    <div className="w-full bg-[#0f0f17] py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Intro Card */}
        <div className="bg-[#151521] border border-[#2a2a36] p-6 md:p-10 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-snug">
            Dear Wealth Builder,
          </h2>

          <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
            Are you tired of feeling stuck, confused, or unsure where your life,
            finances, and career are headed?
          </p>

          <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
            Have you worked hard, played by the rules, done everything “right,”
            and still feel behind on your dreams, purpose, finances, and legacy?
          </p>

          <p className="text-yellow-400 font-semibold text-base md:text-lg">
            This is your turning point.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#151521] border border-[#2a2a36] p-6 md:p-10 rounded-2xl shadow-xl mb-10">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-3">
            Real Results from Real People
          </h3>

          <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
            These are real results from people who experienced life-changing
            transformation in less than two months after purchasing{" "}
            <span className="text-yellow-400 font-semibold">The Seeker.</span>
          </p>

          {/* Video Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            {videoLinks.map((link, index) => (
              <div key={index} className="w-full aspect-video rounded-xl overflow-hidden border border-[#333347]">
                <iframe
                  src={link}
                  title={`Testimonial Video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base">
            Join hundreds of professionals, immigrants, entrepreneurs, and
            9-5ers who have already broken free from the paycheck-to-paycheck
            cycle.
          </p>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
          <a
            href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
            target="_blank"
            className="w-full md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-yellow-600/30"
          >
            Get Complete Bundle — $1,189.99
          </a>

          <a
            href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center bg-transparent border border-yellow-500/40 hover:border-yellow-500 text-yellow-400 hover:text-yellow-300 py-4 px-8 rounded-xl text-base md:text-lg font-semibold transition-all"
          >
            Choose Individual Products
          </a>
        </div> */}

      <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-3">
  <a
    href="https://buy.stripe.com/00w4gBaUfccU0dE0QYfw40v"
    target="_blank"
    className="w-full md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-yellow-600/30"
  >
    Get Complete Bundle — $1,189.99
  </a>

<div className="flex flex-wrap lg:justify-center items-center gap-2 lg:gap-6 mt-4 text-gray-300 text-xs sm:text-sm">
  <div className="flex items-center gap-2">
    <span className="text-lg">🔒</span>
    <span>100% Secure Checkout</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-lg">💰</span>
    <span>30-Day Money-Back Guarantee</span>
  </div>
</div>



</div>

{/* Timer */}
<p className="text-start lg:text-center text-red-400 text-xs sm:text-sm font-medium mt-4">
  ⚠️ Valid till November 28 Only
</p>




      </div>
    </div>
  );
};

export default BundleFive;
