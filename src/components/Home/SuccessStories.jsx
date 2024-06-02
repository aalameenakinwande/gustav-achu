import React, { useState, useRef } from "react";
import "./SuccessStories.css"; // Import the CSS file

const SuccessStories = () => {
  // Sample data of images with associated text
  const images = [
    {
      url: "https://assets.bbhub.io/dotorg/sites/64/2023/09/BillGates-Headshot-2022.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iGM1Bu878Efo/v0/-1x-1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://assets.bbhub.io/dotorg/sites/64/2023/09/BillGates-Headshot-2022.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://imageio.forbes.com/specials-images/imageserve/65147bce590293ccd640cbf3/4x5-Mark-Zuckerberg-by-Guerin-Blask-for-Forbes/0x0.jpg?format=jpg&height=1350&width=1080",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://vz.cnwimg.com/wp-content/uploads/2009/09/Larry-Ellison-1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    {
      url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iGM1Bu878Efo/v0/-1x-1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.",
    },
    // Add more image URLs and descriptions as needed
  ];

  // Number of images to show in the carousel
  const numVisibleImages = 3;

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ref to track touch start position
  const touchStartX = useRef(null);

  // Function to handle touch start event
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  // Function to handle touch end event and determine swipe direction
  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (deltaX > 50) {
      handlePrevClick();
    } else if (deltaX < -50) {
      handleNextClick();
    }
  };

  // Function to handle clicking on navigation buttons
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - numVisibleImages : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - numVisibleImages ? 0 : prevIndex + 1
    );
  };

  // Calculate visible images based on the current index and numVisibleImages
  const visibleImages = images.slice(
    currentImageIndex,
    currentImageIndex + numVisibleImages
  );

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#181349" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row text-white py-16 lg:py-24 relative">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-0">
            {/* Your content here */}
            <p className="text-sm mt-4 text-yellow-600">stories</p>
            <h1 className="text-2xl lg:text-4xl font-bold">
              REAL <span className="text-yellow-600">SUCCESS</span> STORIES
            </h1>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur. Dui viverra at suspendisse
              libero. Tortor vel lectus aliquam ipsum tincidunt adipiscing sed.
            </p>
            {/* Navigation buttons */}
            <div className="mt-20 flex items-center">
              <button
                className="rounded-full h-7 w-7 flex justify-center items-center bg-blue-500 text-white mr-4 desktop-only"
                onClick={handlePrevClick}
              >
                &lt;
              </button>
              <button
                className="rounded-full h-7 w-7 flex justify-center items-center bg-blue-500 text-white desktop-only"
                onClick={handleNextClick}
              >
                &gt;
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 flex justify-center items-center overflow-hidden relative">
            {/* Render images */}
            <div className="flex transition-transform duration-500">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group w-64 h-64 mr-4 overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={`Success ${index}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-white">
                    <p className="text-center" style={{ fontSize: "13px" }}>
                      {image.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
