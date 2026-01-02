import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FooterImage from "../images/logo/gustav-acho-logo.png";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriberData = {
      api_key: API_KEY,
      email,
      first_name: name,
      fields: {
        phone_number: phone,
      },
    };

    try {
      const response = await axios.post(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        subscriberData
      );

      console.log(response.data);
      if (response.data.subscription) {
        setMessage("Successfully subscribed! Please check your email.");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again later.");
    }
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  useEffect(() => {
  // Set LinkedIn Partner ID
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push("8418393");

  // Inject the LinkedIn Insight script
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";

  document.head.appendChild(script);

  // Optional cleanup (not strictly necessary here)
  return () => {
    document.head.removeChild(script);
  };
}, []);


  return (
    <footer className="bg-[#181349] text-white py-12 relative">
      <div className="max-w-[1600px] mx-auto flex flex-wrap justify-between px-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col space-y-20">
          <img
            src={FooterImage}
            alt="Gustav Acho Logo"
            className="w-32 lg:w-44 lg:h-32"
          />
          <nav className="mb-8 md:pl-5 font-bold">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work-with-gustav" className="hover:underline">
                  Work with Gustav
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="hover:underline">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:underline">
                  Store
                </Link>
              </li>
                {/* <li>
                <Link to="/masterclass" className="hover:underline">
                  Masterclass
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact 
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:underline">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/resource" className="hover:underline">
                  Resources
                    </Link>
              </li>
              {/* <li>
                <Link to="/events" className="hover:underline">
                  Events
                    </Link>
              </li> */}
              {/* <li>
                <Link to="/seminar" className="hover:underline">
                  Seminar
                    </Link>
              </li> */}
            </ul>
          </nav>
          <div className="flex space-x-10 md:pl-5">
            <a
              href="https://www.youtube.com/@YouREnoughTV"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/gustav-achu-618780103?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/gachu77
"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} />
            </a>
         
            <a
              href="https://web.facebook.com/gustav.achu.1/?_rdc=1&_rdr"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {/* Pop-up Message at the top */}
          {message && (
            <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-4 z-50">
              {message}
            </div>
          )}

          <h1
            className="text-4xl mb-5 md:mb-0 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#EFE359] lg:mb-10"
            style={{ fontFamily: "Butler, serif" }}
          >
            START LIVING BY DESIGN
          </h1>
          <p className="mb-8 text-md text-justify md:text-lg">
            <strong>Join a community of everyday people</strong> achieving
            extraordinary things as they learn to build the life they want and
            design the legacy they desire. Gustav will reach you directly every
            week (you’ll achieve what most people only dream about
            all their lives).
          </p>
          <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="First and last name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-transparent border-b border-gray-400 text-white py-2 w-full mb-4"
        required
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-transparent border-b border-gray-400 text-white py-2 w-full mb-4"
        required
      />
      <input
        type="tel"
        placeholder="Your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="bg-transparent border-b border-gray-400 text-white py-2 w-full mb-10"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white mb-10 md:mb-0 px-6 py-3 rounded-md w-full text-lg transform transition-transform hover:scale-105"
      >
        Gain Free Access
      </button>
      {message && <p className="text-white mt-4">{message}</p>}
    </form>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end md:flex-row md:justify-between absolute bottom-0 w-full text-center md:text-right px-8 py-4">
      <p className="text-sm">
  &copy; {new Date().getFullYear()} Gustav Achu. All rights reserved.
</p>

<p className="text-xs">
  <a href="https://www.kickandcosynergy.com/" target="_blank" rel="noopener noreferrer" className="underline">
    powered by KICK&CO SYNERGY LTD
  </a>
</p>

        <div className="flex justify-center space-x-3 text-sm">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
