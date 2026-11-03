import React, { useState } from "react";
import HeaderImage from "../../images/gustavImages/EventGustav.webp";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const WealthMasterclassGustav = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORM_ID = "7070892";

  const ZOOM_LINK =
    "https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormError("");
  };

  const openRegistration = () => {
    setFormError("");
    setPhoneError("");
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");
    setPhoneError("");

    const digits = phone.replace(/\D/g, "");

    if (digits.length < 7 || digits.length > 15) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://app.kit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName.trim(),
            email_address: formData.email.trim(),
            fields: {
              phone: phone.trim(),
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Kit registration failed.");
      }

      window.location.href = ZOOM_LINK;
    } catch (error) {
      console.error("Kit registration error:", error);

      setFormError(
        "Registration could not be completed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] px-4 py-20 text-white md:px-10 lg:px-20">
      {/* Background accents */}
      <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#BD9A35]/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-[#BD9A35]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Learn From Someone Who Has Been Where You Are
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT — TEXT */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-[#BD9A35] md:text-3xl">
              GUSTAV B. ACHU
            </h3>

            <p className="mb-8 leading-relaxed text-gray-300">
              <span className="font-medium text-white">
                From Bankruptcy To $1,000,000+ Portfolio.
              </span>{" "}
              Gustav is not a guru. He is not someone who inherited wealth or
              got lucky with crypto. He is a regular guy who:
            </p>

            {/* Story Steps */}
            <div className="mb-10 space-y-4">
              {[
                "Started as a Nursing Assistant in Minnesota",
                "Became a Licensed Practical Nurse and saved $90,000",
                "Went to UC Berkeley for International Business & Marketing",
                "Lost everything doing business in Africa- foreclosed on two homes, filed for bankruptcy, paid $100,000 to debtors, and shopped at thrift stores for 4 years",
                'Made a decision: "This is the last time any circumstance will meet me in life unprepared."',
                "Built back to a $1,000,000+ portfolio while working a 9-to-5 and raising a family",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="mt-1 text-[#BD9A35]">✔</span>
                  <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mb-10">
              <h4 className="mb-4 text-xl font-semibold md:text-2xl">
                The System He Teaches Is The System He Lives
              </h4>

              <div className="space-y-3">
                {[
                  "Built on small, consistent, intentional steps, and not big bets",
                  "Refined through real mistakes, real losses, and real recovery",
                  "Grounded in mindset, stewardship, and legacy",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-[#BD9A35]">✔</span>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-white/10 pt-8">
              <button
                type="button"
                onClick={openRegistration}
                className="cta-button side-bounce w-full rounded-xl bg-red-600 px-6 py-5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-700 sm:px-10 sm:py-8 lg:text-2xl"
              >
                SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
              </button>

              <p className="mt-4 text-center text-sm font-bold text-red-600 lg:text-base">
                ⚠️ This is a live session. No replay will be sent.
                <br />
                If you miss it, you miss it.
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={HeaderImage}
                alt="Gustav B. Achu"
                className="h-[400px] w-full object-cover md:h-[850px]"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#BD9A35]/20" />
          </div>
        </div>
      </div>

      {/* REGISTRATION MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget && !isSubmitting) {
              setShowModal(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gustav-registration-title"
            className="relative my-auto w-full max-w-md rounded-2xl border border-[#BD9A35]/30 bg-[#101014] p-6 text-white shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              disabled={isSubmitting}
              aria-label="Close registration form"
              className="absolute right-4 top-4 text-2xl text-white/60 transition hover:text-white disabled:opacity-40"
            >
              ×
            </button>

            <div className="mb-6 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BD9A35]">
                Free Live Masterclass
              </p>

              <h3
                id="gustav-registration-title"
                className="text-2xl font-bold sm:text-3xl"
              >
                Save Your Spot
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Enter your details to register and continue to Zoom.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="gustav-full-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="gustav-full-name"
                  type="text"
                  name="firstName"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#BD9A35]"
                />
              </div>

              <div>
                <label
                  htmlFor="gustav-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="gustav-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#BD9A35]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Phone Number
                </label>

                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(value) => {
                    setPhone(value);
                    setPhoneError("");
                    setFormError("");
                  }}
                  forceDialCode
                  inputProps={{
                    name: "phone",
                    autoComplete: "tel",
                    placeholder: "Phone number",
                    "aria-label": "Phone Number",
                    "aria-invalid": Boolean(phoneError),
                  }}
                  className="gustav-masterclass-phone w-full"
                  inputClassName="gustav-masterclass-phone-field"
                  countrySelectorStyleProps={{
                    buttonClassName: "gustav-masterclass-country-button",
                    dropdownStyleProps: {
                      className: "gustav-masterclass-country-dropdown",
                    },
                  }}
                />

                {phoneError && (
                  <p className="mt-2 text-sm text-red-400">{phoneError}</p>
                )}
              </div>

              {formError && (
                <p role="alert" className="text-sm text-red-400">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-red-600 px-5 py-4 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "REGISTERING..."
                  : "REGISTER & CONTINUE TO ZOOM"}
              </button>

              <p className="text-center text-xs leading-relaxed text-white/40">
                Your details will be used to process your masterclass
                registration.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* PHONE INPUT STYLES */}
      <style>{`
        .gustav-masterclass-phone {
          display: flex;
          width: 100%;
          position: relative;
        }

        .gustav-masterclass-phone .gustav-masterclass-phone-field,
        .gustav-masterclass-phone input {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          height: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 0;
          border-radius: 0 8px 8px 0;
          background: rgba(255,255,255,0.05);
          color: #fff;
          padding: 0 12px;
          outline: none;
        }

        .gustav-masterclass-phone input:focus {
          border-color: #BD9A35;
        }

        .gustav-masterclass-phone input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .gustav-masterclass-phone .gustav-masterclass-country-button {
          height: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px 0 0 8px;
          background: #19191f;
          color: #fff;
        }

        .gustav-masterclass-phone .gustav-masterclass-country-dropdown,
        .gustav-masterclass-phone .react-international-phone-country-selector-dropdown {
          z-index: 10000;
          background: #19191f;
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
        }

        .gustav-masterclass-phone .react-international-phone-country-selector-dropdown__list-item:hover,
        .gustav-masterclass-phone .react-international-phone-country-selector-dropdown__list-item--focused {
          background: #303039;
        }

        .gustav-masterclass-phone .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: #fff;
        }

        .gustav-masterclass-phone .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};

export default WealthMasterclassGustav;