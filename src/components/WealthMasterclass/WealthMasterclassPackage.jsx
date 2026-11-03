import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const WealthMasterclassPackage = () => {
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
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
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

  return (
    <section className="bg-black px-4 py-16 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Your Free Masterclass Package
          </h2>

          <p className="text-lg text-gray-400">
            When You Register Today, You Get:
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* ITEM 1 */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            data-aos="fade-up"
          >
            <h3 className="mb-2 text-xl font-semibold">
              60-Minute Live Masterclass
            </h3>

            <p className="mb-4 text-sm font-bold text-gray-400 lg:text-lg">
              Value: $297
            </p>

            <p className="mb-4 text-gray-300">
              This is where everything changes. In 60 minutes, you’ll finally
              see exactly where your money has been leaking — and walk away
              knowing what to do next, without confusion or guesswork.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>✔ No theory. No overwhelm.</p>
              <p>✔ Just a clear path forward.</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Wealth Clarity Audit Worksheet (PDF)
            </h3>

            <p className="mb-4 text-sm font-bold text-gray-400 lg:text-lg">
              Value: $97
            </p>

            <p className="mb-4 text-gray-300">
              You won’t just listen — you’ll map out your actual financial
              situation live during the session.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>✔ See exactly where your money is going</p>
              <p>✔ Identify your biggest wealth leaks instantly</p>
              <p>✔ Know your true financial starting point</p>
              <p>✔ Walk away with your first action step</p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Legacy Circle Community Access
            </h3>

            <p className="mb-4 text-sm font-bold text-gray-400 lg:text-lg">
              Value: $197
            </p>

            <p className="mb-4 text-gray-300">
              Because transformation doesn’t happen alone.
            </p>

            <p className="mb-4 text-gray-300">
              After the session, you’ll step into a private community of
              ambitious professionals who are serious about taking control
              of their money and building real wealth.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>✔ Daily money discipline + habit reinforcement</p>
              <p>✔ Real conversations with like-minded builders</p>
              <p>
                ✔ Direct guidance and voice notes from Gustav (when it
                matters most)
              </p>
            </div>
          </div>
        </div>

        {/* TOTAL VALUE SECTION */}
        <div
          className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 text-center"
          data-aos="zoom-in"
        >
          <p className="mb-2 text-lg text-gray-300">
            TOTAL VALUE:{" "}
            <span className="font-bold text-white line-through">$591</span>
          </p>

          <p className="mb-6 text-2xl font-bold md:text-3xl">
            YOURS TODAY: FREE
          </p>

          {/* CTA */}
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
            aria-labelledby="package-registration-title"
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
                id="package-registration-title"
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
                  htmlFor="package-full-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="package-full-name"
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
                  htmlFor="package-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="package-email"
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
                  className="package-phone-input w-full"
                  inputClassName="package-phone-input-field"
                  countrySelectorStyleProps={{
                    buttonClassName: "package-country-button",
                    dropdownStyleProps: {
                      className: "package-country-dropdown",
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
        .package-phone-input {
          display: flex;
          width: 100%;
          position: relative;
        }

        .package-phone-input .package-phone-input-field,
        .package-phone-input input {
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

        .package-phone-input input:focus {
          border-color: #D4AF37;
        }

        .package-phone-input input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .package-phone-input .package-country-button {
          height: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px 0 0 8px;
          background: #19191f;
          color: #fff;
        }

        .package-phone-input .package-country-dropdown,
        .package-phone-input .react-international-phone-country-selector-dropdown {
          z-index: 10000;
          background: #19191f;
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
        }

        .package-phone-input .react-international-phone-country-selector-dropdown__list-item:hover,
        .package-phone-input .react-international-phone-country-selector-dropdown__list-item--focused {
          background: #303039;
        }

        .package-phone-input .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: #fff;
        }

        .package-phone-input .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};

export default WealthMasterclassPackage;
