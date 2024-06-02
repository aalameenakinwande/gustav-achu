import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../images/logo/gustav-acho-logo.png"; // Adjust the path according to your directory structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${isSticky ? "fixed top-0 left-0 right-0 z-50" : ""}`}
      style={{ backgroundColor: "#181349" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex mt-3">
            <div className="flex-shrink-0">
              <a href="/">
                <img src={logo} alt="Brand Logo" className="h-20 w-auto" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex items-baseline space-x-4">
              <a
                href="/"
                style={{ fontSize: "15px" }}
                className="hover:text-blue-600 px-4 py-3 text-white"
              >
                Home
              </a>
              <a
                href="/about"
                style={{ fontSize: "15px" }}
                className="hover:text-blue-600 px-4 py-3 font-medium text-white"
              >
                About
              </a>
              <a
                href="/programs"
                style={{ fontSize: "15px" }}
                className="hover:text-blue-600 px-4 py-3 font-medium text-white"
              >
                Programs
              </a>
              <a
                href="/youreenough"
                style={{ fontSize: "15px" }}
                className="hover:text-blue-600 px-4 py-3 font-medium text-white mt-3"
              >
                #YouREnough 
              </a>
            </div>
          </div>
          <div className="hidden md:block mt-3">
            <button
              style={{ fontSize: "13px" }}
              className="px-6 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white text-sm md:text-base"
            >
              Book a call
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 mt-20 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-white block px-4 py-3 text-lg font-medium"
          >
            Home
          </a>
          <hr className="w-3/4 border-t-1 border-white mt-0" />
          <a
            href="/about"
            className="text-white block px-4 py-3 pt-12 rounded-md text-lg font-medium"
          >
            About
          </a>{" "}
          <hr className="w-3/4 border-t-1 border-white mt-0" />
          <a
            href="/programs"
            className="text-white block px-4 py-3 pt-12 rounded-md text-lg font-medium"
          >
            Programs
          </a>{" "}
          <hr className="w-3/4 border-t-1 border-white mt-0" />
          <a
            href="/youreenough"
            className="text-white block px-4 py-3 pt-12 rounded-md text-lg font-medium"
          >
                         #YouREnough 

          </a>
          <hr className="w-3/4 pb-80  border-t-1 border-white mt-0" />
          <button className="w-full text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out border border-white px-6 py-3  text-lg font-medium">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
