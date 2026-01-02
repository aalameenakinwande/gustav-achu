import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import WorkBookImageOne from "../../images/workbookImages/WorkBookImage.png";


const StoreBook = () => {
  const [mainImage, setMainImage] = useState(WorkBookImageOne);

  return (
    <div className="py-28 md:py-20 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mb-4 md:mb-0">
          {/* Hide for mobile view */}
          <div className="hidden md:flex flex-col items-start space-y-2 md:space-y-5 md:mr-4">
            <img
              src={WorkBookImageOne}
              alt="Product Thumbnail"
              className="w-20 h-18 shadow-lg hover:scale-105 transition-transform rounded-lg object-cover cursor-pointer"
              onClick={() => setMainImage(WorkBookImageOne)}
            />
           
          </div>
          {/* Main Product Image */}
          <div className="flex-1 flex justify-center md:mt-0 mt-4">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-72 h-96 rounded-lg shadow-lg hover:scale-105 transition-transform object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 pl-0 md:pl-20 md:space-y-8">
          <div className="mb-4">
            <span className="text-[#BD9A35]">Workbook</span>
            <h1 className="text-2xl text-gray-600 font-semibold">How to Pivot and Reinvent Your Life After Devastating Life-Altering Crisis</h1>
            <p className="text-xl  font-bold md:mt-6">$7.00</p>
          </div>
        
      

          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-x-4">
            {/* <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 md:mb-0 md:w-full hover:scale-105 transition-transform">Add To Bag</button>
            <button className="border border-gray-300 py-2 px-4 rounded-lg text-sm flex items-center justify-center md:w-full mt-2 md:mt-0 hover:scale-105 transition-transform">
              Favorite <FontAwesomeIcon icon={faHeart} className="ml-1" />
            </button> */}
            <a href="https://buy.stripe.com/5kAcNQ8q6bNqbNC9AN"    target="_blank"
            rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 md:mb-0 md:w-full hover:scale-105 transition-transform inline-block text-center">
  Buy Now
</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreBook;
