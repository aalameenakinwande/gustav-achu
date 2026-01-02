import React from "react";
import Book1 from "../../images/bookImages/Book1.webp";
// import Book2 from "../../images/bookImages/Book2.webp";

const Books = () => {
  return (
    <div className="bg-black py-8 md:py-20 px-4 md:px-0">
      <h2 className="text-center text-white font-semibold mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        BOOK
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 lg:gap-24">
      <div className="flex-1 bg-[#181349] text-center p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          <img
            src={Book1}
            alt="Settling In"
            className="w-full h-auto rounded-md mb-4"
            loading="lazy"
          />
          <h3
            className="mb-4 text-3xl sm:text-3xl md:text-4xl font-bold text-[#EFE359]"
            style={{ fontFamily: "Butler, serif" }}
          >
            THE SEEKER
          </h3>
          <a
  href="https://buy.stripe.com/3cs4hk9uadVy5pe9AL"
    target="_blank"
            rel="noopener noreferrer"
  className="mt-[60px] bg-[#3C3CC8] text-white px-32 py-6 text-xs sm:text-sm rounded-md  duration-300 inline-block text-center transform transition-transform hover:scale-105 "
>
 Order Now
</a>



        </div>

        {/* <div className="flex-1 bg-[#181349] text-center p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          <img
            src={Book2}
            alt="Settling In"
            className="w-full h-auto rounded-md mb-4"
            loading="lazy"
          />
          <h3
            className="mb-4 text-3xl sm:text-3xl md:text-4xl font-bold text-[#EFE359]"
            style={{ fontFamily: "Butler, serif" }}
          >
            SETTLING IN
          </h3>
          <button
            type="button"
            className="mt-[60px] bg-[#3C3CC8] text-white px-32 py-6 text-xs sm:text-sm rounded-md hover:bg-[#2a2a9e] transition duration-300"
          >
            Coming Soon
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Books;
