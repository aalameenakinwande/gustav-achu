import React from "react";
import KingsleyImage from "../../images/Testimonials/pungong.webp";

const ComponentTwo = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900">
            Dear Purpose Seeker
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Are you tired of feeling stuck, or unsure where your life, finances,
            and career are headed?
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            You’ve worked hard, played by the rules, done everything “right” —
            and still feel behind on your dreams, purpose, and legacy.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-indigo-900">
            This is your turning point.
          </p>
        </div>

        {/* Transformation Results - Two Column */}
        <div className="bg-gradient-to-br from-[#181349] via-[#2a2356] to-[#181349] rounded-3xl p-10 shadow-xl">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            {/* Left - Text + Testimonials */}
            <div className="md:col-span-1 text-left space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Transformation in Less Than 2 Months
              </h3>
              <p className="text-white/90 text-base sm:text-lg md:text-xl">
                Real breakthroughs from people who purchased{" "}
                <span className="font-semibold">The Seeker</span>.
              </p>

              {/* Text Testimonials with Images */}
              <div className="space-y-4 mt-6">
                {[
                  {
                    name: "Kingsley P.",
                    text: "It unlocks the secrets to high performance under a broad spectrum of conditions and defines a new paradigm. A wonderful read.",
                    image: KingsleyImage,
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white/10 border border-white/20 rounded-xl p-4 text-white shadow-md"
                  >
                    {/* Image */}
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                    />

                    {/* Text */}
                    <div>
                      <p className="italic">"{t.text}"</p>
                      <p className="mt-2 font-semibold text-yellow-300">
                        — {t.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Video (wider) */}
            <div className="md:col-span-2 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-[400px] object-contain"
                poster="https://via.placeholder.com/800x450?text=Loading+Testimonial"
              >
                <source
                  src="https://res.cloudinary.com/deofmlywm/video/upload/v1756222108/Book_Launch_-_Compilation_1_1_1_1_1_1_ohccl3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
            Total Value:{" "}
            <span className="text-[#FFD700] line-through">$1,931.99</span>
          </h3>
          <a
            href="https://buy.stripe.com/cNi9AV2nJ0uc4tUczGfw40p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-extrabold text-lg md:text-2xl px-10 md:px-14 py-4 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,0.8)] transition-all duration-300"
          >
            Get It Now for Only $32.99
          </a>
          <p className="text-sm md:text-base text-gray-500 italic">
            Valid till{" "}
            <span className="font-semibold text-[#181349]">September 30th</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComponentTwo;
