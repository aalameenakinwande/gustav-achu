
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber } from "libphonenumber-js";

import "react-international-phone/style.css";
import "./NewsLetterCta.css";

import BookImage from "../../images/NewsletterImage/Book3.png";
import GustavLogo from "../../images/NewsletterImage/gustav-acho-logo.png";

const NewsLetterCta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [informationalConsent, setInformationalConsent] =
    useState(false);
  const [marketingSmsConsent, setMarketingSmsConsent] =
    useState(false);
  const [marketingEmailConsent, setMarketingEmailConsent] =
    useState(false);

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      setMessage("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Phone number is optional, but must be valid if entered.
    if (trimmedPhone && !isValidPhoneNumber(trimmedPhone)) {
      setPhoneError(
        "Please enter a valid phone number for your selected country."
      );
      return;
    }

    setPhoneError("");

    if (
      !informationalConsent ||
      !marketingSmsConsent ||
      !marketingEmailConsent
    ) {
      setMessage("Please accept all consent checkboxes.");
      return;
    }

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

        setInformationalConsent(false);
        setMarketingSmsConsent(false);
        setMarketingEmailConsent(false);
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

      if (window.messageTimeout) {
        clearTimeout(window.messageTimeout);
      }

      window.messageTimeout = setTimeout(() => {
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

    let script = existingScript;

    if (!script) {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://snap.licdn.com/li.lms-analytics/insight.min.js";

      document.head.appendChild(script);
    }

    return () => {
      // Keep the shared LinkedIn tracking script available.
    };
  }, []);

  const inputClass =
    "w-full rounded-xl border border-white/30 bg-white/10 px-5 py-4 text-sm text-white placeholder-white/60 transition focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 sm:text-base";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B0B3B] via-[#181349] to-[#2A1FA0] text-white">
      {/* Floating glows */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#3C3CC8]/30 blur-[120px] sm:h-96 sm:w-96" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px] sm:h-96 sm:w-96" />

      {/* Toast */}
      {message && (
        <div
          role="status"
          className="fixed left-1/2 top-6 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-xl bg-white px-6 py-3 text-center text-sm font-medium text-black shadow-2xl"
        >
          {message}
        </div>
      )}

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        {/* Book image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <img
            src={BookImage}
            alt="Free Resource Book"
            loading="lazy"
            className="w-[220px] max-w-full drop-shadow-2xl sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Logo and heading */}
          <div className="space-y-5">
            <div className="flex justify-center lg:justify-start">
              <img
                src={GustavLogo}
                alt="Gustav B. Achu"
                className="h-14 w-auto object-contain sm:h-16 md:h-20"
              />
            </div>

            <h2 className="mx-auto max-w-2xl text-xl font-bold leading-snug sm:text-2xl md:text-3xl lg:mx-0 lg:text-4xl">
              Join my newsletter and get access to thousands
              of dollars worth of free insights, weekly
              training, tips, and advice.
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl sm:p-6 md:p-8"
          >
            {/* Name and email */}
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                autoComplete="given-name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                autoComplete="email"
                required
              />
            </div>

            {/* International phone input */}
            <div className="mt-4 w-full text-left">
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
                  autoComplete: "tel",
                  placeholder: "Phone Number",
                  "aria-label": "Phone Number",
                  "aria-invalid": Boolean(phoneError),
                  "aria-describedby": phoneError
                    ? "phone-error"
                    : undefined,
                }}
                className="gustav-phone-input w-full"
                inputClassName="gustav-phone-input-field"
                countrySelectorStyleProps={{
                  buttonClassName: "gustav-country-button",
                  dropdownStyleProps: {
                    className: "gustav-country-dropdown",
                  },
                }}
              />

              {phoneError && (
                <p
                  id="phone-error"
                  role="alert"
                  className="mt-2 text-sm text-red-300"
                >
                  {phoneError}
                </p>
              )}
            </div>

            {/* Consents */}
            <div className="mt-6 space-y-5 text-left">
              <label className="flex items-start gap-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                <input
                  type="checkbox"
                  checked={informationalConsent}
                  onChange={(e) =>
                    setInformationalConsent(e.target.checked)
                  }
                  required
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-red-600"
                />
                <span>
                  I agree to receive informational text messages
                  from Gustav B. Achu, including community updates,
                  educational content, event reminders, and other
                  service-related messages. Message frequency varies.
                  Message and data rates may apply. Reply{" "}
                  <strong className="text-red-500">STOP</strong> to
                  opt out or{" "}
                  <strong className="text-red-500">HELP</strong> for
                  help. Consent is not a condition of purchase.
                </span>
              </label>

              <label className="flex items-start gap-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                <input
                  type="checkbox"
                  checked={marketingSmsConsent}
                  onChange={(e) =>
                    setMarketingSmsConsent(e.target.checked)
                  }
                  required
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-red-600"
                />
                <span>
                  I agree to receive marketing and promotional text
                  messages from Gustav B. Achu, including webinars,
                  promotional messages, offers, and information about
                  Gustav B. Achu&apos;s products and services. Message
                  frequency varies. Message and data rates may apply.
                  Reply{" "}
                  <strong className="text-red-500">STOP</strong> to
                  opt out or{" "}
                  <strong className="text-red-500">HELP</strong> for
                  help. Consent is not a condition of purchase.
                </span>
              </label>

              <label className="flex items-start gap-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                <input
                  type="checkbox"
                  checked={marketingEmailConsent}
                  onChange={(e) =>
                    setMarketingEmailConsent(e.target.checked)
                  }
                  required
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-red-600"
                />
                <span>
                  I agree to receive marketing emails from Gustav B.
                  Achu about educational content, webinars,
                  promotional messages, offers, and information about
                  his products and services. I understand that I can
                  unsubscribe from marketing emails at any time.
                </span>
              </label>
            </div>

            {/* Terms */}
            <p className="mt-6 text-left text-xs leading-relaxed text-white/60 sm:text-sm">
              By submitting this form, I agree to the{" "}
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 underline transition hover:text-white"
              >
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 underline transition hover:text-white"
              >
                Privacy Policy
              </a>
              .
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full rounded-xl bg-red-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              {loading ? "Submitting…" : "Sign Me Up"}
            </button>
          </form>

          <p className="text-xs text-white/50 sm:text-sm">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-[#2A1FA0] sm:h-32" />
    </section>
  );
};

export default NewsLetterCta;
