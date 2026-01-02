import React from "react";
import SeekerBook from '../../images/bookImages/Book1.webp';

const PurchaseSection = () => {
  return (
    <section className="w-full py-5 mt-20 lg:mt-0 lg:py-16 bg-[#F9F9F9] text-center px-4">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-14">
          Get Your Copy of The Seeker Book
        </h2>

        <img
          src={SeekerBook}
          alt="Seeker Book"
          className="w-full max-w-[250px] lg:max-w-[350px] mx-auto shadow-lg rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-8"
        />

        <a
          href="https://buy.stripe.com/3cs4hk9uadVy5pe9AL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white mb-10 md:mb-0 px-6 py-3 rounded-md text-lg transform transition-transform hover:scale-105"
        >
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default PurchaseSection;
