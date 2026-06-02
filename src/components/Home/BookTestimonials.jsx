// src/Components/BookTestimonials.jsx
import React, { useState } from "react";
import Book1 from "../../images/bookImages/Book1.webp";
import Gilbert from "../../images/Testimonials/Gilbert.jpg";
import KingsleyImage from "../../images/Testimonials/pungong.webp";
import Charles from "../../images/Testimonials/Charles.jpeg";

const testimonials = [
  {
    quote: "I deeply appreciate your incredible work as a motivational speaker. Your words inspire and uplift, touching the hearts and minds of all who hear you. Your ability to ignite hope, courage, and determination makes the world a better place. Keep shining brightly!",
    name: "Gilbert Ngyia",
    title: "Founder of G-Fashion Line",
    image: Gilbert,
  },
  {
    quote: "You're an amazing African. The passion and grit you have in giving back to the community is amazing. Thank you for educating people about wealth.",
    name: "Sir Charles Njoya",
    title: "President & CEO at CHN Advisors",
    image: Charles,
  },
  {
    quote: "This work by Gustav Achu embodies his strive for excellence. It encompasses the importance of reinvention without a dilution of our core values. It speaks to those who need to be uplifted and to those who are at the very top and strive to retain their core values and maintain a gold standard.  It unlocks the secrets to high performance under a broad spectrum of conditions and defines a new paradigm. A wonderful read.",
    name: "Kingsley Pungong",
    title: "CEO at Rainbow Sports Global",
    image: KingsleyImage,
  },
];

const BookTestimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black text-white py-12 md:py-24 px-6 md:px-20">
      {/* Book Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-20 mb-16">
        <div className="flex-1 max-w-md">
          <img
            src={Book1}
            alt="The Seeker"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
            loading="lazy"
          />
        </div>
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFE359] mb-4" style={{ fontFamily: "Butler, serif" }}>
            THE SEEKER
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed text-gray-200">
            Gustav Achu’s debut book, written to guide readers through self-discovery, intentional living, and the process of making decisions that shape purpose and legacy.
            Known for his ability to simplify complex ideas, Gustav breaks down themes of growth, direction, and long-term impact into clear, reflective insights that readers can understand and apply to real life. 
            <span className="block mt-2">The Seeker invites readers to think deeper, act intentionally, and begin designing the life they want to be remembered for.</span>
          </p>
          <a
            href="https://buy.stripe.com/3cs4hk9uadVy5pe9AL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3C3CC8] hover:bg-[#5151e0] transition-colors text-white px-12 sm:px-20 py-4 sm:py-6 rounded-md inline-block font-semibold text-sm sm:text-base transform transition-transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8" style={{ fontFamily: "Butler, serif" }}>
          Success Stories
        </h3>
        <div className="relative flex flex-col items-center">
          {/* Quote */}
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 leading-relaxed">
            “{testimonials[current].quote}”
          </p>

          {/* Author */}
          <div className="flex flex-col items-center mb-4">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2 shadow-lg"
            />
            <h4 className="font-semibold text-lg sm:text-xl">{testimonials[current].name}</h4>
            <p className="text-sm sm:text-base text-gray-300">{testimonials[current].title}</p>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 sm:px-8">
            <button onClick={handlePrev} className="text-gray-400 hover:text-gray-200 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNext} className="text-gray-400 hover:text-gray-200 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTestimonials;
