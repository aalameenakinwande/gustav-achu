import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import GustavImg from "../../images/gustavImages/MeetGustav.png";

const AboutTextTwo = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* Left: Image */}
      <div className="md:w-1/2 w-full relative">
        <img
          src={GustavImg}
          alt="Gustav Achu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>

      {/* Right: Content */}
      <div className="md:w-1/2 w-full p-10 md:p-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Take Control of Your Future
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
          Gustav B. Achu is a Wealth & Legacy Coach, Author, and Investor. 
          From Bamenda to the world, he helps ambitious individuals take control 
          of their finances and create lasting impact. Submit your inquiry below and 
          get a personalized response within 2 business days.
        </p>

        {/* CTA */}
        <a
          href="https://calendly.com/gustavachu77/stage-discovery-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 mb-8"
        >
          Book Your Session
        </a>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/gustav-achu-618780103/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.facebook.com/gustav.achu.1/?_rdc=2&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/gachu77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.youtube.com/@YouREnoughTV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-600 transition transform hover:scale-110"
          >
            <FaYoutube size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutTextTwo;
