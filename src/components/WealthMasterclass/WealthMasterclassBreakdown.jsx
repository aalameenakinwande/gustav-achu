import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const WealthMasterclassBreakdown = () => {
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

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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

  const modules = [
    {
      title: "The 5 Hidden Wealth Leaks",
      content: [
        "Understand exactly why your money isn't working—even when you're working hard.",
        "Most high-professionals are not stuck because they earn too little. They are stuck because money quietly escapes through five specific gaps.",
        "✔ Pinpoint the exact financial habits draining your income each month",
        "✔ Understand why clarity, not spending, is the real problem",
        "✔ The structural gap most professionals never see until it's pointed out",
        "✔ How each leak compounds silently over months and years",
        "By the end of this module, you will feel the full picture of your financial reality. No more guessing.",
      ],
    },
    {
      title: "Why More Money Won’t Fix the Leak And What Actually Will",
      content: [
        'You\'ve probably thought: "If I just earned a bit more, I\'d be fine." The data says otherwise.',
        "Most professionals who increase their income simply increase their leak rate.",
        "✔ The psychology behind why high-earners stay stuck",
        "✔ Why the paycheck trap exists at every income level",
        "✔ What actually separates wealth-builders from wealth-earners",
        "By the end of this module, you won’t just understand the problem —you’ll feel the relief of knowing exactly what needs to change.",
      ],
    },
    {
      title:
        "The System That Fixes All 5 Leaks (And Why Most People Never Fully Implement It)",
      content: [
        "There is a simple system that closes all five leaks.",
        "Once it’s in place, everything about your money becomes clearer and more controlled.",
        "In this session, you’ll understand how the system works and why it succeeds where everything else fails.",
        "But here’s the truth most people don’t realize:",
        "Understanding the system is not the same as having one built for your life.",
        "✔ You’ll see the structure behind it",
        "✔ You’ll understand why it works",
        "✔ You’ll recognize what’s missing in your current approach",
        "At this point, you’ll understand exactly what a real wealth system looks like.",
        "But you won’t yet have your own system fully built —and that’s the difference between knowing… and actually seeing results.",
      ],
    },
    {
      title: "Your First Step — Wealth Clarity Audit",
      content: [
        'Now that you can clearly see what’s been happening with your money… the next question becomes: “What do I do with this specifically for my situation?',
        "You will complete Part 1 of the Wealth Clarity Audit Worksheet live. This is not a generic exercise. It is your real financial picture; your income, your leaks, your starting point.",
        "Most people have never done this. The ones who did say it changed everything.",
        "✔ See exactly where you stand financially right now, with your actual numbers",
        "✔ Identify the gap between where you are and where you want to be",
        "✔ Leave with a clear, honest starting point",
        "This is where clarity becomes real.",
      ],
    },
  ];

  return (
    <section className="bg-[#F7F5F2] px-4 py-20 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        {/* LEFT SIDE - STICKY INTRO */}
        <div
          className="h-fit lg:sticky lg:top-20 lg:col-span-4"
          data-aos="fade-right"
        >
          <h2 className="mb-6 text-3xl font-bold leading-tight text-black md:text-4xl">
            The 60-Minute <br /> Free Masterclass Breakdown
          </h2>

          <p className="mb-6 leading-relaxed text-gray-700">
            This isn't theory or motivation. This is a focused, practical
            60-minute session that shows you exactly what's happening with
            your money, and what to do first.
          </p>
        </div>

        {/* RIGHT SIDE - MODULES */}
        <div className="space-y-10 lg:col-span-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-md bg-black font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mb-4 mt-4 text-xl font-semibold text-black md:text-2xl">
                {module.title}
              </h3>

              <div className="space-y-3 leading-relaxed text-gray-700">
                {module.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div
            className="rounded-2xl bg-gradient-to-r from-black to-gray-900 p-6 text-center text-white shadow-lg sm:p-10"
            data-aos="zoom-in"
          >
            <p className="mb-6 font-semibold text-gray-200">
              No replay. Attend live or miss it
            </p>

            <button
              type="button"
              onClick={openRegistration}
              className="cta-button side-bounce rounded-xl bg-red-600 px-6 py-5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-700 sm:px-10 sm:py-8 lg:text-2xl"
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
            aria-labelledby="breakdown-registration-title"
            className="relative my-auto w-full max-w-md rounded-2xl border border-[#D4AF37]/30 bg-[#101014] p-6 text-white shadow-2xl sm:p-8"
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
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Free Live Masterclass
              </p>

              <h3
                id="breakdown-registration-title"
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
                  htmlFor="breakdown-full-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="breakdown-full-name"
                  type="text"
                  name="firstName"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label
                  htmlFor="breakdown-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="breakdown-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37]"
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
                  className="breakdown-phone-input w-full"
                  inputClassName="breakdown-phone-input-field"
                  countrySelectorStyleProps={{
                    buttonClassName: "breakdown-country-button",
                    dropdownStyleProps: {
                      className: "breakdown-country-dropdown",
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
        .breakdown-phone-input {
          display: flex;
          width: 100%;
          position: relative;
        }

        .breakdown-phone-input .breakdown-phone-input-field,
        .breakdown-phone-input input {
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

        .breakdown-phone-input input:focus {
          border-color: #D4AF37;
        }

        .breakdown-phone-input input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .breakdown-phone-input .breakdown-country-button {
          height: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px 0 0 8px;
          background: #19191f;
          color: #fff;
        }

        .breakdown-phone-input .breakdown-country-dropdown,
        .breakdown-phone-input .react-international-phone-country-selector-dropdown {
          z-index: 10000;
          background: #19191f;
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
        }

        .breakdown-phone-input .react-international-phone-country-selector-dropdown__list-item:hover,
        .breakdown-phone-input .react-international-phone-country-selector-dropdown__list-item--focused {
          background: #303039;
        }

        .breakdown-phone-input .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: #fff;
        }

        .breakdown-phone-input .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};

export default WealthMasterclassBreakdown;
