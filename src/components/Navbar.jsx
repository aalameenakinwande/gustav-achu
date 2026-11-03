import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo/gustav-acho-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (path) => {
    closeMenu();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine if the current path should have a specific background color
  const shouldHaveCustomBackground = [
    '/learn-more',
    '/store/1',
    '/store/2',
    '/store/3',
      '/store/4',
        '/store/5',
          '/store/6'
  ].includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${
        isSticky || shouldHaveCustomBackground ? "bg-[#181349]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] text-white mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-0">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Brand Logo" className="h-16 w-auto" />
            </Link>
          </div>
          {/* <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 xl:space-x-10 text-sm 2xl:text-md">

            {["Home", "About", "Work with Gustav", "Podcast", "Store", "Events", "Resource", "Community", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="nav-link relative"
                  activeClassName="active"
                  onClick={() => handleClick(item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`)}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BD9A35] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </NavLink>
              )
            )}
          </div> */}

          <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 xl:space-x-10 text-sm 2xl:text-md">
  {[
    "Home",
    "About",
     "Programs",
    // "Work with Gustav",
    "Podcast",
    "Store",
    "Events",
    "Resource",
    "Community",
    "Contact",
  ].map((item) => {
    // Override path for special cases
    let path = "/";
    if (item === "Home") path = "/";
    else if (item === "Events") path = "/wealth-clarity";
    else path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <NavLink
        key={item}
        to={path}
        className="nav-link relative"
        activeClassName="active"
        onClick={() => handleClick(path)}
      >
        {item}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BD9A35] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </NavLink>
    );
  })}
</div>

          <div className="hidden lg:block">
            <a
    href="/wealth-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 border hover:bg-red-700 border-red-600   text-sm 2xl:text-md bg-opacity-20 text-white px-6 lg:px-8 py-2 rounded-md  hover:text-white transition duration-300 font-semibold"
            >
Book your 60-Min Wealth Consultation            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              {isOpen ? (
                <XIcon className="h-8 w-8" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#181349] transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={closeMenu}
            className="text-white self-end text-2xl mb-4"
          >
            <XIcon className="h-8 w-8" aria-hidden="true" />
          </button>
          {/* <div className="flex flex-col flex-grow items-center space-y-6">
            {["Home", "About", "Work with Gustav", "Podcast", "Store", "Resource", "Events", "Contact", "Community"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white block text-center px-3 py-2 rounded-md text-lg font-medium border-b border-[#BD9A35]"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              )
            )}
            <a
              href="https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-white mt-auto bg-[#3C3CC8] hover:bg-blue-700 text-center py-2 rounded-md"
              onClick={closeMenu}
            >
              Book Gustav to speak
            </a>
          </div> */}


          <div className="flex flex-col flex-grow items-center space-y-6">
  {[
    "Home",
    "About",
     "Programs",
    // "Work with Gustav",
    "Podcast",
    "Store",
    "Resource",
    "Events",
    "Contact",
    "Community",
  ].map((item) => {
    // Override path for special cases
    let path = item === "Home" ? "/" : item === "Events" ? "/wealth-clarity" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <Link
        key={item}
        to={path}
        className="text-white block text-center px-3 py-2 rounded-md text-lg font-medium border-b border-[#BD9A35]"
        onClick={closeMenu}
      >
        {item}
      </Link>
    );
  })}

  <a
    href="/wealth-consultation"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-white mt-auto bg-red-600 border hover:bg-red-700 text-center py-2 rounded-md"
    onClick={closeMenu}
  >
Book your 60-Min Wealth Consultation  </a>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
