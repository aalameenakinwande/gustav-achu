import React, { useState } from 'react';
import Shirt1 from '../../images/StoreImages/Tees.webp';
import Shirt2 from '../../images/StoreImages/shirt2.webp';
import Shirt3 from '../../images/StoreImages/shirt3.webp';
import Shirt4 from '../../images/StoreImages/shirt4.jpg';
import Shirt5 from '../../images/StoreImages/shirt5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Shirt = () => {
  const [mainImage, setMainImage] = useState(Shirt1);

  return (
    <div className="py-28 md:py-20 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mb-4 md:mb-0">
          {/* Hide for mobile view */}
          <div className="hidden md:flex flex-col items-start space-y-2 md:space-y-5 md:mr-4">
            <img
              src={Shirt1}
              alt="Product Thumbnail"
              className="w-20 h-18 shadow-lg hover:scale-105 transition-transform rounded-lg object-cover cursor-pointer"
              onClick={() => setMainImage(Shirt1)}
            />
            <img
              src={Shirt2}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(Shirt2)}
            />
               <img
              src={Shirt3}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(Shirt3)}
            />   <img
            src={Shirt4}
            alt="Product Thumbnail"
            className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
            onClick={() => setMainImage(Shirt4)}
          />   <img
          src={Shirt5}
          alt="Product Thumbnail"
          className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
          onClick={() => setMainImage(Shirt5)}
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
            <span className="text-[#BD9A35]">Shirt</span>
            <h1 className="text-2xl text-gray-600 font-semibold">#YouREnough# Shirt</h1>
            <p className="text-xl  font-bold md:mt-6">$29.99</p>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Select Color</span>
            <div className="flex flex-wrap mt-2 -mx-2 md:flex-row md:space-x-2">
              <img
                src={Shirt1}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(Shirt1)}
              />
              <img
                src={Shirt2}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(Shirt2)}
              />
              <img
                src={Shirt3}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(Shirt3)}
              />
            </div>
          </div>
          <div className="mb-4 md:hidden">
            <span className="text-gray-600 text-sm">Product Images</span>
            <div className="flex space-x-2 mt-2">
              <img
                src={Shirt1}
                alt="Product Thumbnail"
                className="w-20 h-18 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer"
                onClick={() => setMainImage(Shirt1)}
              />
              <img
                src={Shirt2}
                alt="Product Thumbnail"
                className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
                onClick={() => setMainImage(Shirt2)}
              />
            </div>
          </div>
          <div className="mb-4">
  <span className="text-gray-600 text-sm">Select Size</span>
  <div className="mt-2 flex gap-3">
    <span className="border border-gray-300 text-md py-2 px-4 rounded-lg cursor-pointer">S</span>
    <span className="border border-gray-300 text-md py-2 px-4 rounded-lg cursor-pointer">M</span>
    <span className="border border-gray-300 text-md py-2 px-4 rounded-lg cursor-pointer">L</span>
    <span className="border border-gray-300 text-md py-2 px-4 rounded-lg cursor-pointer">XL</span>
    <span className="border border-gray-300 text-md py-2 px-4 rounded-lg cursor-pointer">XXL</span>
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

export default Shirt;
