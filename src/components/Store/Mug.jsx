import React, { useState } from 'react';
import CapImage from '../../images/StoreImages/Cup.webp';
import Cupone from '../../images/StoreImages/Cup1.webp';
import Cupfour from '../../images/StoreImages/Cup4.webp';
import Cupfive from '../../images/StoreImages/Cup5.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Mug = () => {
  const [mainImage, setMainImage] = useState(CapImage);

  return (
    <div className="py-28 md:py-20 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mb-4 md:mb-0">
          <div className="hidden md:flex flex-col items-start space-y-2 md:space-y-5 md:mr-4">
            <img
              src={CapImage}
              alt="Product Thumbnail"
              className="w-20 h-18 shadow-lg hover:scale-105 transition-transform rounded-lg object-cover cursor-pointer"
              onClick={() => setMainImage(CapImage)}
            />
            <img
              src={Cupone}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(Cupone)}
            />
            
          </div>
          {/* Main Product Image */}
          <div className="flex-1 flex justify-center md:mt-0 mt-4">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 pl-0 md:pl-20 md:space-y-8">
          <div className="mb-4">
            <span className="text-[#BD9A35]">Mug</span>
            <h1 className="text-2xl text-gray-600 font-semibold">#YouREnough# Mug</h1>
            <p className="text-xl  font-bold md:mt-6">$10</p>
          </div>
          <div className="mb-4 md:hidden">
            <span className="text-gray-600 text-sm">Product Images</span>
            <div className="flex space-x-2 mt-2">
              <img
                src={CapImage}
                alt="Product Thumbnail"
                className="w-20 h-18 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer"
                onClick={() => setMainImage(CapImage)}
              />
              <img
                src={Cupone}
                alt="Product Thumbnail"
                className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
                onClick={() => setMainImage(Cupone)}
              />
            </div>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Select Color</span>
            <div className="flex flex-wrap mt-2 -mx-2 md:flex-row md:space-x-2">
              <img
                src={Cupfive}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(Cupfive)}
              />
              <img
                src={Cupfour}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(Cupfour)}
              />
            </div>
          </div>
      
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Select Size</span>
            <div className="mt-2">
              <span className="border border-gray-300 text-sm py-1 px-2 rounded-lg">One Size Fits All</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 md:mb-0 md:w-full hover:scale-105 transition-transform">Add To Bag</button>
            <button className="border border-gray-300 py-2 px-4 rounded-lg text-sm flex items-center justify-center md:w-full mt-2 md:mt-0 hover:scale-105 transition-transform">
              Favorite <FontAwesomeIcon icon={faHeart} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mug;
