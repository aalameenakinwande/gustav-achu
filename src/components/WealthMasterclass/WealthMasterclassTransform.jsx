import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const WealthMasterclassTransform = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const FORM_ID = "7070892";

  const ZOOM_LINK =
    "https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration";

  const getNextThursday = () => {
    const now = new Date();

    // Preserve the existing UTC-6 countdown calculation.
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const cstNow = new Date(utc - 6 * 60 * 60000);

    const day = cstNow.getDay();
    const daysUntilThursday = (4 - day + 7) % 7 || 7;

    const nextThursday = new Date(cstNow);
    nextThursday.setDate(cstNow.getDate() + daysUntilThursday);
    nextThursday.setHours(19, 0, 0, 0);

    return nextThursday;
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cstNow = new Date(utc - 6 * 60 * 60000);

      const target = getNextThursday();
      const diff = target.getTime() - cstNow.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormError("");
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
        throw new Error("Registration failed. Please try again.");
      }

      window.location.href = ZOOM_LINK;
    } catch (error) {
      console.error("Kit registration error:", error);

      setFormError(
        "We couldn't complete your registration. Please try again shortly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0D] px-4 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#BD9A35]/10 opacity-30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] space-y-20">
        {/* TOP SECTION */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* LEFT COPY */}
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              TRANSFORM THE WAY YOU THINK ABOUT MONEY
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                Learn how to finally stop money from slipping through your
                hands and start feeling in control of every dollar you earn.
                Discover the simple approach that removes the guesswork and
                shows you exactly what to do each month. This is the same
                proven framework Gustav used to go from bankruptcy and
                foreclosure to over $1,000,000 in portfolio value, while
                working a full-time 9-to-5, and that has helped hundreds of
                his clients begin building their first $100,000 portfolios.
              </p>
            </div>
          </div>

          {/* RIGHT COPY */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white md:text-xl">
                The Transformation You Will Experience
              </p>

              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                By the end of this 60-minute free masterclass, you will walk
                away with:
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  ✔ The name and nature of every leak quietly costing you
                  money each month. You will know exactly what to do every
                  month.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  ✔ A clear understanding of what’s been holding you back
                  and exactly how to fix it.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  ✔ A simple way to take control of your money so you’re no
                  longer guessing what to do next or second-guessing your
                  money.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  ✔ Your personal financial snapshot, completed live during
                  the session.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  ✔ Your first step toward a personalised wealth-building
                  plan so you finally feel in control.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  ✔ The confidence of finally knowing what to do with your
                  money every single month.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BLOCK */}
        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-red-500 md:text-base">
              Next Live Session Starts In
            </p>

            <div className="mt-4 text-3xl font-extrabold tracking-wide text-yellow-400 sm:text-4xl md:text-5xl lg:text-6xl">
              {timeLeft}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormError("");
              setPhoneError("");
              setShowModal(true);
            }}
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
            aria-labelledby="transform-registration-title"
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
                id="transform-registration-title"
                className="text-2xl font-bold sm:text-3xl"
              >
                Save Your Spot
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Enter your details to register and continue to the Zoom
                registration page.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="transform-first-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="transform-first-name"
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
                  htmlFor="transform-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="transform-email"
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
                  className="transform-phone-input w-full"
                  inputClassName="transform-phone-input-field"
                  countrySelectorStyleProps={{
                    buttonClassName: "transform-country-button",
                    dropdownStyleProps: {
                      className: "transform-country-dropdown",
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
        .transform-phone-input {
          display: flex;
          width: 100%;
          position: relative;
        }

        .transform-phone-input .transform-phone-input-field,
        .transform-phone-input input {
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

        .transform-phone-input input:focus {
          border-color: #D4AF37;
        }

        .transform-phone-input input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .transform-phone-input .transform-country-button {
          height: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px 0 0 8px;
          background: #19191f;
          color: #fff;
        }

        .transform-phone-input .transform-country-dropdown {
          z-index: 10000;
          background: #19191f;
          color: #fff;
        }

        .transform-phone-input .react-international-phone-country-selector-dropdown {
          background: #19191f;
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
        }

        .transform-phone-input .react-international-phone-country-selector-dropdown__list-item:hover,
        .transform-phone-input .react-international-phone-country-selector-dropdown__list-item--focused {
          background: #303039;
        }

        .transform-phone-input .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: #fff;
        }

        .transform-phone-input .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};

export default WealthMasterclassTransform;