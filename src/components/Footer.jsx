
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber } from "libphonenumber-js";

import "react-international-phone/style.css";
import "./Footer.css";

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
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedEmail) {
      setMessage("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Validate the phone number only when provided.
    if (trimmedPhone && !isValidPhoneNumber(trimmedPhone)) {
      setPhoneError(
        "Please enter a valid phone number for your selected country."
      );
      setMessage("");
      return;
    }

    setPhoneError("");
    setLoading(true);

    const subscriberData = {
      api_key: API_KEY,
      email: trimmedEmail,
      first_name: trimmedName,
      fields: {},
    };

    if (trimmedPhone) {
      subscriberData.fields.phone_number = trimmedPhone;
    }

    try {
      const response = await axios.post(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        subscriberData
      );

      if (response.data.subscription) {
        setMessage("Successfully subscribed!");

        setName("");
        setEmail("");
        setPhone("");
        setPhoneError("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription Error:", error);

      setMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);

      if (window.footerMessageTimeout) {
        clearTimeout(window.footerMessageTimeout);
      }

      window.footerMessageTimeout = setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  useEffect(() => {
    window._linkedin_data_partner_ids =
      window._linkedin_data_partner_ids || [];

    window._linkedin_data_partner_ids.push("8418393");

    const existingScript = document.querySelector(
      'script[src="https://snap.licdn.com/li.lms-analytics/insight.min.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://snap.licdn.com/li.lms-analytics/insight.min.js";

    document.head.appendChild(script);
  }, []);

  return (
    <footer className="relative bg-[#181349] py-12 text-white">
      <div className="mx-auto flex max-w-[1600px] flex-wrap justify-between px-8">
        {/* Left Section */}
        <div className="mb-8 flex w-full flex-col space-y-20 lg:mb-0 lg:w-1/2">
          <img
            src={FooterImage}
            alt="Gustav Acho Logo"
            className="w-32 lg:h-32 lg:w-44"
          />

          <nav className="mb-8 font-bold md:pl-5">
            <ul className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4 md:gap-4">
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
                <Link to="/programs" className="hover:underline">
                  Programs
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
            </ul>
          </nav>

          <div className="flex space-x-10 md:pl-5">
            <a
              href="https://www.youtube.com/@YouREnoughTV"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/gustav-achu-618780103"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://www.instagram.com/gachu77"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://web.facebook.com/gustav.achu.1/?_rdc=1&_rdr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full flex-col justify-between lg:w-1/2">
          {message && (
            <div
              role="status"
              className="fixed left-0 top-0 z-50 w-full bg-blue-600 py-4 text-center text-white"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="mb-4 w-full border-b border-gray-400 bg-transparent py-2 text-white placeholder-white/70 focus:border-yellow-400 focus:outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="mb-4 w-full border-b border-gray-400 bg-transparent py-2 text-white placeholder-white/70 focus:border-yellow-400 focus:outline-none"
              required
            />

            {/* International Phone Number */}
           <div
              className={`footer-phone-wrapper ${
                phoneError ? "footer-phone-error" : ""
              }`}
            >
              <PhoneInput
                defaultCountry="us"
                value={phone}
                onChange={(value) => {
                  setPhone(value);
                  setPhoneError("");
                }}
                forceDialCode
                inputProps={{
                  name: "phone",
                  placeholder: "Phone Number",
                  autoComplete: "tel",
                  "aria-label": "Phone Number",
                  "aria-invalid": Boolean(phoneError),
                }}
                className="footer-phone-input"
              />
            </div>

            {phoneError && (
              <p className="mt-2 text-sm text-red-400" role="alert">
                {phoneError}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mb-10 w-full transform rounded-md bg-blue-600 px-6 py-3 text-lg text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 md:mb-0"
            >
              {loading ? "Submitting..." : "Gain Free Access"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-0 flex w-full flex-col items-center px-8 py-4 text-center md:flex-row md:items-end md:justify-between md:text-right">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gustav Achu. All rights reserved.
        </p>

        <p className="text-xs">
          <a
            href="https://www.kickandcosynergy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            powered by KICK&CO SYNERGY LTD
          </a>
        </p>

        <div className="flex justify-center space-x-3 text-sm">
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </a>

          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms and Conditions
          </a>

          <a
            href="/refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
