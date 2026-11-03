import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const WealthMasterclassNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const FORM_ID = "7070892";

  const ZOOM_LINK =
    "https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setPhoneError("");

    if (!phone.trim()) {
      setPhoneError("Please enter your phone number.");
      return;
    }

    // Basic international number validation.
    // PhoneInput returns the number with the country calling code.
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 7 || digits.length > 15) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * IMPORTANT:
       * This endpoint is a browser-side form submission attempt.
       * Confirm it is supported by your Kit form before deployment.
       * For guaranteed API integration, submit through a backend.
       */
      const response = await fetch(
        `https://app.kit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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
        throw new Error("Registration failed.");
      }

      // Redirect only after the request reports success.
      window.location.assign(ZOOM_LINK);
    } catch (err) {
      console.error("Kit registration error:", err);

      setError(
        "We couldn't submit your registration. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* MASTERCLASS NAVIGATION */}
      <div className="w-full border-b border-white/10 bg-[#0A0A0D] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between md:py-4">
          {/* LEFT CONTENT */}
          <div className="w-full md:max-w-3xl">
            <p className="text-xs font-semibold leading-snug sm:text-sm md:text-base lg:text-lg">
              <span className="text-[#BD9A35]">
                The Paycheck Trap:
              </span>{" "}
              Why High-Income Earners Still Feel Broke — And the 5
              Hidden Leaks Draining Their Money
            </p>

            <p className="mt-1 text-[10px] text-white/60 sm:text-xs md:text-sm">
              Free Live Zoom Masterclass • Thursday • 7PM CST
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
            type="button"
            onClick={() => {
              setError("");
              setPhoneError("");
              setIsModalOpen(true);
            }}
            className="w-full cursor-pointer rounded-lg border border-[#BD9A35]/30 bg-[#BD9A35]/10 px-4 py-3 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-[#BD9A35]/20 sm:px-5 md:w-auto md:px-6 md:py-4 md:text-right"
          >
            <p className="mb-1 text-[10px] uppercase tracking-wide text-gray-300 sm:text-xs lg:text-sm">
              Free Live Masterclass
            </p>

            <p className="text-sm font-semibold leading-tight text-[#BD9A35] sm:text-base md:text-lg">
              Professionals Earning $100K+
            </p>

            <p className="mt-1 text-xs text-white/70">
              Reserve Your Spot →
            </p>
          </button>
        </div>
      </div>

      {/* REGISTRATION POPUP */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (
              e.target === e.currentTarget &&
              !isSubmitting
            ) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="masterclass-modal-title"
            className="relative my-auto w-full max-w-md rounded-2xl border border-[#BD9A35]/30 bg-[#0A0A0D] p-6 shadow-[0_0_60px_rgba(189,154,53,0.12)] sm:p-8"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              disabled={isSubmitting}
              aria-label="Close registration form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-white/70 transition hover:border-[#BD9A35]/50 hover:text-white disabled:opacity-50"
            >
              ×
            </button>

            {/* MODAL HEADER */}
            <div className="mb-6 pr-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#BD9A35]">
                Free Live Zoom Masterclass
              </p>

              <h2
                id="masterclass-modal-title"
                className="text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Reserve Your Spot
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Enter your details to register for the masterclass.
                You will continue to Zoom after successful registration.
              </p>
            </div>

            {/* REGISTRATION FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="masterclass-first-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="masterclass-first-name"
                  type="text"
                  name="firstName"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#BD9A35] disabled:opacity-60"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="masterclass-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="masterclass-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#BD9A35] disabled:opacity-60"
                />
              </div>

              {/* INTERNATIONAL PHONE INPUT */}
              <div>
                <label
                  htmlFor="masterclass-phone"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Phone Number
                </label>

                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(value) => {
                    setPhone(value);
                    setPhoneError("");
                    setError("");
                  }}
                  forceDialCode
                  inputProps={{
                    id: "masterclass-phone",
                    name: "phone",
                    autoComplete: "tel",
                    placeholder: "Phone Number",
                    "aria-label": "Phone Number",
                    required: true,
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
                    className="mt-2 text-sm text-red-400"
                  >
                    {phoneError}
                  </p>
                )}
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300"
                >
                  {error}
                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#BD9A35] px-5 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Registering..."
                  : "Register & Continue to Zoom"}

                {!isSubmitting && <span>→</span>}
              </button>

              <p className="text-center text-xs leading-relaxed text-white/40">
                By registering, you agree to receive masterclass-related
                communications. You can unsubscribe from emails at any time.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WealthMasterclassNav;