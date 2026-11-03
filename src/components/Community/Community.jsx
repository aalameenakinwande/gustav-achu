
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber } from "libphonenumber-js";

import "react-international-phone/style.css";

const Community = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);

  const messageTimeout = useRef(null);

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const showMessage = (text) => {
    setMessage(text);

    if (messageTimeout.current) {
      window.clearTimeout(messageTimeout.current);
    }

    messageTimeout.current = window.setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    setMessage("");
    setPhoneError("");

    if (!trimmedName) {
      showMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      showMessage("Please enter a valid email address.");
      return;
    }

    if (!trimmedPhone) {
      setPhoneError("Please enter your phone number.");
      return;
    }

    if (!isValidPhoneNumber(trimmedPhone)) {
      setPhoneError(
        "Please enter a valid phone number for the selected country."
      );
      return;
    }

    const subscriberData = {
      api_key: API_KEY,
      email: trimmedEmail,
      first_name: trimmedName,
      fields: {
        phone_number: trimmedPhone,
      },
    };

    setLoading(true);

    try {
      const response = await axios.post(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        subscriberData
      );

      if (response.data.subscription) {
        showMessage("Successfully subscribed!");

        setName("");
        setEmail("");
        setPhone("");
        setPhoneError("");
      } else {
        showMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Community subscription error:", error);

      showMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window._linkedin_data_partner_ids =
      window._linkedin_data_partner_ids || [];

    if (!window._linkedin_data_partner_ids.includes("8418393")) {
      window._linkedin_data_partner_ids.push("8418393");
    }

    const existingScript = document.querySelector(
      'script[src="https://snap.licdn.com/li.lms-analytics/insight.min.js"]'
    );

    let script;

    if (!existingScript) {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://snap.licdn.com/li.lms-analytics/insight.min.js";

      document.head.appendChild(script);
    }

    return () => {
      if (messageTimeout.current) {
        window.clearTimeout(messageTimeout.current);
      }

      // Leave the LinkedIn script in place if another component uses it.
    };
  }, []);

  return (
    <section className="bg-[#0E0E0E] py-28 text-white md:px-16 lg:px-24 lg:py-44">
      <div className="mx-auto max-w-6xl">
        {/* HERO */}
        <div className="mx-auto max-w-4xl px-2 text-center">
          <h1
            className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Butler, serif" }}
          >
            Build Wealth With Clarity. Invest With Confidence. Leave a
            Lasting Legacy.
          </h1>

          <p className="mb-8 text-gray-300 md:text-xl">
            Join thousands of professionals receiving practical weekly
            insights on investing, personal growth, and legacy building—designed
            to help you create lasting wealth without confusion, guesswork, or
            costly financial mistakes.
          </p>

          <p className="mb-6 text-sm uppercase tracking-widest text-[#BD9A35]">
            Trusted by Professionals Across the U.S., Canada & Africa
          </p>

          <p className="mb-12 text-gray-400">
            Clear strategies. Practical execution. Real wealth-building
            principles that help you grow financially, professionally, and
            personally.
          </p>
        </div>

        {/* FORM + WHATSAPP */}
        <div className="grid items-start gap-10 px-6 lg:grid-cols-2">
          {/* LEFT - NEWSLETTER */}
          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              Get Your Weekly Insights, Straight To Your Inbox
            </h2>

            <p className="mb-6 text-gray-300">
              Receive actionable lessons every week on:
            </p>

            <ul className="mb-10 space-y-3 text-gray-300">
              <li>
                ✔ Smart investing and stock market wealth-building strategies
              </li>
              <li>✔ Financial clarity and long-term wealth preservation</li>
              <li>✔ Legacy planning for family and future generations</li>
              <li>✔ Real-world case studies and practical money frameworks</li>
              <li>✔ Private insights and exclusive updates from Gustav</li>
            </ul>

            <h3 className="mb-4 text-lg font-semibold">
              Enter Your Details Below
            </h3>

            {message && (
              <div
                className="fixed left-0 top-0 z-50 w-full bg-blue-600 px-4 py-3 text-center text-white"
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="mb-1 block text-sm" htmlFor="community-name">
                  First Name*
                </label>

                <input
                  id="community-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  required
                  className="w-full bg-white p-3 text-black"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  className="mb-1 block text-sm"
                  htmlFor="community-email"
                >
                  Email Address*
                </label>

                <input
                  id="community-email"
                  type="email"
                  name="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="w-full bg-white p-3 text-black"
                />
              </div>

              {/* INTERNATIONAL PHONE */}
              <div>
                <label
                  className="mb-1 block text-sm"
                  htmlFor="community-phone"
                >
                  Phone Number*
                </label>

                <div
                  className={`community-phone-wrapper ${
                    phoneError ? "community-phone-invalid" : ""
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
                      id: "community-phone",
                      name: "phone",
                      placeholder: "Your phone number",
                      autoComplete: "tel",
                      required: true,
                      "aria-invalid": Boolean(phoneError),
                      "aria-describedby": phoneError
                        ? "community-phone-error"
                        : undefined,
                    }}
                    className="community-phone-input"
                    inputClassName="community-phone-number"
                  />
                </div>

                {phoneError && (
                  <p
                    id="community-phone-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {phoneError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#BD9A35] py-4 font-semibold transition hover:bg-[#a8872f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting..."
                  : "I Want Weekly Wealth Insights"}
              </button>
            </form>
          </div>

          {/* RIGHT - WHATSAPP */}
          <div className="h-fit rounded-lg border border-gray-700 bg-[#171717] p-8">
            <div className="text-center">
              <FaWhatsapp className="mx-auto mb-6 text-6xl text-green-500" />

              <h3 className="mb-4 text-2xl font-bold">
                Join Our Private WhatsApp Community
              </h3>

              <p className="mb-6 text-gray-300">
                Connect with professionals, investors, and entrepreneurs
                committed to building wealth, making smarter financial
                decisions, and creating lasting generational impact.
              </p>

              <a
                href="https://chat.whatsapp.com/E1THU5dlbW05lCqVnYQHd9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-green-600 px-8 py-4 font-semibold transition hover:bg-green-700"
              >
                Join the Legacy Circle
              </a>
            </div>
          </div>
        </div>

        {/* STORY SECTION */}
        <div className="mx-auto mt-24 max-w-5xl space-y-16 px-6 text-gray-300">
          <div>
            <h3 className="mb-6 text-3xl font-bold text-white">
              Join the Legacy Circle Community
            </h3>

            <p className="mb-4">Most people work for money.</p>

            <p className="mb-4">
              Few learn how to make money work for them.
            </p>

            <p className="mb-4">
              True wealth is not just about income—it is about clarity,
              strategy, ownership, and building something that outlives you.
            </p>

            <p className="mb-4">
              This weekly letter helps you move from financial uncertainty to
              intentional wealth creation.
            </p>

            <p className="mb-4">Because your success should not stop with you.</p>

            <p>It should become your legacy.</p>
          </div>

          <div className="border-t border-gray-700 pt-10">
            <h3 className="mb-6 text-3xl font-bold text-white">
              A Message From Gustav B. Achu
            </h3>

            <p className="mb-4">
              For years, I have worked with professionals, entrepreneurs, and
              families who wanted more than financial survival—they wanted
              clarity.
            </p>

            <p className="mb-4">Clarity on how to invest wisely.</p>

            <p className="mb-4">
              Clarity on how to structure wealth intentionally.
            </p>

            <p className="mb-4">
              Clarity on how to create a legacy that impacts generations.
            </p>

            <p className="mb-4">
              This platform was built to provide practical guidance that helps
              you think differently about money, wealth, and purpose.
            </p>

            <p className="mb-4">Not hype.</p>
            <p className="mb-4">Not noise.</p>
            <p className="mb-4">Just real strategies for real results.</p>

            <p>
              If that is what you are looking for, you are in the right place.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-10 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Next Weekly Edition Goes Out Tuesday 8AM CST
            </h3>

            <p className="text-xl text-gray-400">
              Your future wealth is built by the decisions you make today.
            </p>
          </div>
        </div>
      </div>

      {/* Phone input styling */}
      <style>{`
        .community-phone-wrapper {
          width: 100%;
        }

        .community-phone-input {
          display: flex;
          width: 100%;
          min-height: 48px;
          background: #fff;
        }

        .community-phone-input .react-international-phone-input-container {
          display: flex;
          width: 100%;
          min-height: 48px;
          border: 1px solid #d1d5db;
          border-radius: 0;
          background: #fff;
        }

        .community-phone-input .react-international-phone-country-selector-button {
          height: 100%;
          min-height: 46px;
          border: none;
          border-radius: 0;
          background: #fff;
        }

        .community-phone-input .community-phone-number,
        .community-phone-input .react-international-phone-input {
          flex: 1;
          width: 100%;
          min-width: 0;
          height: 46px;
          padding: 12px;
          border: none;
          border-radius: 0;
          background: #fff;
          color: #000;
          font-family: inherit;
          font-size: 16px;
          outline: none;
          box-shadow: none;
        }

        .community-phone-input .react-international-phone-input:focus {
          outline: none;
          box-shadow: none;
        }

        .community-phone-input .react-international-phone-input::placeholder {
          color: #6b7280;
          opacity: 1;
        }

        .community-phone-invalid .react-international-phone-input-container {
          border-color: #f87171;
        }

        .community-phone-input .react-international-phone-country-selector-dropdown {
          z-index: 60;
          color: #111827;
        }
      `}</style>
    </section>
  );
};

export default Community;
