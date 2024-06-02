import React from "react";
import FooterImage from "../images/logo/gustav-acho-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#181349] text-white py-8 mt-6">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={FooterImage}
            alt="Brand Logo"
            className="h-20 w-auto my-4"
          />
          <div
            className="flex space-x-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            <a
              href="/about"
              className="hover:no-underline hover:text-blue-600 "
            >
              About
            </a>
            <a href="/" className="hover:no-underline hover:text-blue-600 ">
              Topic
            </a>
            <a href="/" className="hover:no-underline hover:text-blue-600 ">
              Books
            </a>
            <a
              href="/youreenough"
              className="hover:no-underline hover:text-blue-600 "
            >
              {" "}
              #YouREnough{" "}
            </a>
          </div>
        </div>
        <div
          className="flex justify-between items-center mt-4 text-sm text-gray-400"
          style={{ fontSize: "13px" }}
        >
          <div>© 2024 Gustav Achu. All rights reserved.</div>
          <div className="flex space-x-4" style={{ fontSize: "13px" }}>
            <a href="/" className="hover:no-underline">
              Privacy Policy
            </a>
            <a href="/" className="hover:no-underline">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
