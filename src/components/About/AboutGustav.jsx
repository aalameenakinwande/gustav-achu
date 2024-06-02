import React from "react";
import GustavImage from "../../images/homeImages/Gustav.webp";
import Gustav from "../../images/gustavImages/GustavAbout.webp";

const AboutGustav = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row text-white py-16 lg:py-24">
        {/* First Column: Image */}
        <div className="md:w-1/2 w-full mb-4 md:mb-0">
          <img
            src={GustavImage}
            alt="Gustav"
            className="w-full h-[300px] md:h-auto object-cover hover:scale-105 transition-transform rounded-lg shadow-md"
          />
        </div>

        {/* Second Column: Text and Button */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:pl-6 md:ml-20">
          <p style={{ color: "#EFE359", fontSize: "13px" }}>About Gustav</p>
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-black">
            ABOUT IPSUM DOLORE{" "}
            <span style={{ color: "#EFE359" }}>RISUS DONEC FAUCIBUS AC</span> AC
            EGET. CURABITUR VESTIBULUM DUI RHONCUS.
          </h1>

          <p className="text-black pb-6" style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet consectetur libero. Tortor vel lectus
            aliquam ipsum tincidunt adipiscing sed. Quis hendrerit bibendum
            sagittis habitasse pulvinar. Adipiscing morbi volutpat eget orci
            magna a velit elit. Vulputate suscipit mauris aenean duis nisi
            porttitor tortor eu. Arcu sit elit libero tellus ut sed. Egestas
            arcu faucibus ante orci porttitor tellus. Leo fermentum sed ultrices
            aliquam a massa magna commodo. Tellus cras fusce pellentesque sed
            neque enim. Commodo purus in id arcu nisl nam consectetur. Tellus
            mattis nulla diam quis id tincidunt at faucibus.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row text-white py-16 lg:py-24"
        style={{ marginTop: "-100px" }}
      >
        {/* Second Column: Text and Button */}
        <div className="md:w-1/2 w-full flex  flex-col items-start md:pl-0 md:ml-0">
          <p className="text-black pb-6 lg:pr-20"  style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet consectetur libero. Tortor vel lectus
            aliquam ipsum tincidunt adipiscing sed. Quis hendrerit bibendum
            sagittis habitasse pulvinar. Adipiscing morbi volutpat eget orci
            magna a velit elit. Vulputate suscipit mauris aenean duis nisi
            porttitor tortor eu. Arcu sit elit libero tellus ut sed. Egestas
            arcu faucibus ante orci porttitor tellus. Leo fermentum sed ultrices
            aliquam a massa magna commodo. Tellus cras fusce pellentesque sed
            neque enim. Commodo purus in id arcu nisl nam consectetur. Tellus
            mattis nulla diam quis id tincidunt at faucibus.
          </p>
          <p className="text-black pb-6 lg:pr-20" style={{ fontSize: "13px" }}>
            Leo fermentum sed ultrices aliquam a massa magna commodo. Tellus
            cras fusce pellentesque sed neque enim. Commodo purus in id arcu
            nisl nam consectetur. Tellus mattis nulla diam quis id tincidunt at
            faucibus.
          </p>{" "}
          <p className="text-black pb-6 lg:pr-20" style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet consectetur libero. Tortor vel lectus
            aliquam ipsum tincidunt adipiscing sed. Quis hendrerit bibendum
            sagittis habitasse pulvinar. Adipiscing morbi volutpat eget orci
            magna a velit elit. Vulputate suscipit mauris aenean duis nisi
            porttitor tortor eu. Arcu sit elit libero tellus ut sed. Egestas
            arcu faucibus ante orci porttitor tellus. Leo fermentum sed ultrices
            aliquam a massa magna commodo. Tellus cras fusce pellentesque sed
            neque enim. Commodo purus in id arcu nisl nam consectetur. Tellus
            mattis nulla diam quis id tincidunt at faucibus.
          </p>{" "}
          <p className="text-black pb-6 lg:pr-20" style={{ fontSize: "13px" }}>
            Leo fermentum sed ultrices aliquam a massa magna commodo. Tellus
            cras fusce pellentesque sed neque enim. Commodo purus in id arcu
            nisl nam consectetur. Tellus mattis nulla diam quis id tincidunt at
            faucibus.
          </p>
        </div>
        {/* First Column: Image */}
        <div className="md:w-1/2 w-full mb-4 md:mb-0">
          <img
            src={Gustav}
            alt="Gustav"
            className="w-full h-[300px] md:h-auto hover:scale-105 transition-transform object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutGustav;
