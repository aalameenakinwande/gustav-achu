import React, { useState } from 'react';
import CapBlackandYellow from '../../images/StoreImages/blackandyellow.webp';
import CapBlueandwhite from '../../images/StoreImages/blueandwhite.webp';
import CapGreyandWhite from '../../images/StoreImages/greyandwhite.webp';
import CapRedandWhite from '../../images/StoreImages/redandwhite.webp';
import CapRed from '../../images/StoreImages/red.webp';
import CapWHiteandBlack from '../../images/StoreImages/whiteandblack.webp';
import CapWhiteandYellow from '../../images/StoreImages/whiteandyellow.webp';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Shirt = () => {
  const [mainImage, setMainImage] = useState(CapBlueandwhite);

  return (
    <div className="py-28 md:py-20 lg:py-32 px-4 md:px-10 lg:px-20 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-start mb-4 md:mb-0">
          {/* Hide for mobile view */}
          <div className="hidden md:flex flex-col items-start space-y-2 md:space-y-5 md:mr-4">
            <img
              src={CapBlueandwhite}
              alt="Product Thumbnail"
              className="w-20 h-18 shadow-lg hover:scale-105 transition-transform rounded-lg object-cover cursor-pointer"
              onClick={() => setMainImage(CapBlueandwhite)}
            />
            <img
              src={CapBlackandYellow}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(CapBlackandYellow)}
            />
               <img
              src={CapGreyandWhite}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(CapGreyandWhite)}
            />
            <img
              src={CapRed}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(CapRed)}
            />
            <img
              src={CapRedandWhite}
              alt="Product Thumbnail"
              className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
              onClick={() => setMainImage(CapRedandWhite)}
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
            <span className="text-[#BD9A35]">Cap</span>
            <h1 className="text-2xl text-gray-600 font-semibold">#YouREnough# Cap</h1>
            <p className="text-xl  font-bold md:mt-6">$34.99
            </p>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Select Color</span>
            <div className="flex flex-wrap mt-2 -mx-2 md:flex-row md:space-x-2">
              <img
                src={CapBlackandYellow}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapBlackandYellow)}
              />
                <img
                src={CapBlueandwhite}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapBlueandwhite)}
              />
              <img
                src={CapWHiteandBlack}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapWHiteandBlack)}
              />
              <img
                src={CapRedandWhite}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapRedandWhite)}
              />
              <img
                src={CapRed}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapRed)}
              />
              <img
                src={CapGreyandWhite}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapGreyandWhite)}
              />
                <img
                src={CapWhiteandYellow}
                alt="Color Option"
                className="w-14 h-12 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer mx-2 my-2 md:w-20 md:h-18"
                onClick={() => setMainImage(CapWhiteandYellow)}
              />
            </div>
          </div>
          <div className="mb-4 md:hidden">
            <span className="text-gray-600 text-sm">Product Images</span>
            <div className="flex space-x-2 mt-2">
              <img
                src={CapRedandWhite}
                alt="Product Thumbnail"
                className="w-20 h-18 object-cover shadow-lg hover:scale-105 transition-transform border border-gray-300 cursor-pointer"
                onClick={() => setMainImage(CapRedandWhite)}
              />
              <img
                src={CapRed}
                alt="Product Thumbnail"
                className="w-20 h-18 rounded-lg shadow-lg hover:scale-105 transition-transform object-cover cursor-pointer"
                onClick={() => setMainImage(CapRed)}
              />
            </div>
          </div>
          <div className="mb-4">
            {/* <span className="text-gray-600 text-sm">Select Size</span>
            <div className="mt-2">
              <span className="border border-gray-300 text-sm py-1 px-2 rounded-lg">One Size Fits All</span>
            </div> */}
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-x-4">
          <a
  href="https://buy.stripe.com/5kA1586hY3gU3h6fZf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 md:mb-0 md:w-full hover:scale-105 transition-transform inline-block text-center"
>
  Buy Now
</a>
            {/* <button className="border border-gray-300 py-2 px-4 rounded-lg text-sm flex items-center justify-center md:w-full mt-2 md:mt-0 hover:scale-105 transition-transform">
              Favorite <FontAwesomeIcon icon={faHeart} className="ml-1" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shirt;
