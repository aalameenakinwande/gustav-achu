import React, { useState } from "react";

const AboutBrand = () => {
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
  ];

  const numVisibleImages = 3;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const visibleImages = images.slice(
    currentImageIndex,
    currentImageIndex + numVisibleImages
  );

  return (
    <div className="w-full" style={{ backgroundColor: "#181349" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row text-white py-16 lg:py-24 relative">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-0">
            <p className="text-sm mt-4 text-yellow-600">My Brand</p>
            <h1 className="text-3xl lg:text-4xl font-bold">
              #YOU'RE ENOUGH TV{" "}
            </h1>
            <p className="text-sm mt-4 lg:pr-20">
              Lorem ipsum dolor sit amet consectetur. Dolor et urna at a nulla
              ac. Tristique at porttitor varius praesent ultricies elit sit
              sagittis tellus. Interdum lorem dolor euismod et sed ipsum massa
              arcu et. Non felis diam consectetur velit porta odio facilisis
              sociis augue. Tortor proin consequat senectus orci habitant.
              Suspendisse cursus in sed aenean ut sit aliquam. In urna venenatis
              erat ut nunc nec egestas. Turpis ut ridiculus quis massa. Mi
              suspendisse accumsan adipiscing sed justo tortor amet. Aenean
              platea leo pellentesque augue duis feugiat in nascetur. Quam
              ullamcorper adipiscing gravida est turpis quam donec. Vestibulum
              eu orci enim urna pellentesque egestas pharetra. Mi quam in
              vulputate rutrum ultricies congue a. Auctor tempor ac enim orci
              fusce at. Metus felis vitae tristique ornare purus ut.
            </p>
            {/* Navigation buttons */}
            <div className="mt-20 flex items-center">
              <button
                className="rounded-full h-7 w-7 flex justify-center items-center bg-blue-500 text-white mr-4"
                onClick={handlePrevClick}
              >
                &lt;
              </button>
              <button
                className="rounded-full h-7 w-7 flex justify-center items-center bg-blue-500 text-white"
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
                    alt="Brand"
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

export default AboutBrand;
