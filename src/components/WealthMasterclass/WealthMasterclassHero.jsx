import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const WealthMasterclassHero = () => {
  const [timeLeft, setTimeLeft] = useState("");
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

  // COUNTDOWN
  const getCSTNow = () => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;

    // Always UTC -6 (strict CST)
    return new Date(utc - 6 * 60 * 60000);
  };

  const getNextThursday = () => {
    const cstNow = getCSTNow();

    const day = cstNow.getDay();
    const daysUntilThursday = (4 - day + 7) % 7 || 7;

    const nextThursday = new Date(cstNow);
    nextThursday.setDate(cstNow.getDate() + daysUntilThursday);
    nextThursday.setHours(19, 0, 0, 0);

    return nextThursday;
  };

  useEffect(() => {
    const updateCountdown = () => {
      const cstNow = getCSTNow();
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

  // FORM HANDLERS
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

    const digits = phone.replace(/\D/g, "");

    if (!phone.trim() || digits.length < 7 || digits.length > 15) {
      setPhoneError("Please enter a valid international phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * Confirm that your Kit form supports this submission endpoint
       * before deploying. If it does not, use a backend/serverless
       * function with Kit's supported API.
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

      // Continue to Zoom only after a successful response.
      window.location.assign(ZOOM_LINK);
    } catch (err) {
      console.error("Kit registration error:", err);

      setError(
        "We couldn't submit your details. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#0A0A0D] px-4 py-20 text-white lg:py-20">

        {/* GLOW */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-[#BD9A35]/10 opacity-40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1100px] text-center">

          {/* HEADLINE */}
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            You Earn{" "}
            <span className="bg-gradient-to-r from-[#C9A227] via-[#FFD700] to-[#B8962E] bg-clip-text text-transparent">
              $100,000+
            </span>{" "}
            So Why Does It Still Feel Like You're Falling Behind?
            Discover the 5 Hidden Money Leaks Quietly Keeping You Stuck
          </h1>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-4xl text-base text-white/70 md:text-lg">
            In this free 60-minute live masterclass, you'll uncover
            the 5 hidden money leaks silently draining your income
            — and how to fix them without working more, earning more,
            or taking risky investments.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-base text-white/70 md:text-lg">
            Taught by Gustav B. Achu — from bankruptcy and foreclosure
            to a $1,000,000+ portfolio while working as a full-time
            employee and part-time entrepreneur.
          </p>

          {/* VIDEO */}
          <div className="relative mt-12">

            <div className="absolute inset-0 rounded-2xl bg-[#BD9A35]/10 opacity-30 blur-2xl" />

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <video
                src="https://res.cloudinary.com/deofmlywm/video/upload/v1776067250/Paycheck_Trap_Masterclass_Ad_1_1_yyma43.mp4"
                autoPlay
                loop
                playsInline
                controls
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* COUNTDOWN */}
          <div className="mt-10">
            <p className="text-sm font-extrabold uppercase tracking-widest text-red-500">
              Next Live Session Starts In
            </p>

            <div className="mt-3 text-3xl font-extrabold text-yellow-400 md:text-5xl">
              {timeLeft}
            </div>
          </div>

          {/* CTA — OPENS REGISTRATION POPUP */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => {
                setError("");
                setPhoneError("");
                setIsModalOpen(true);
              }}
              className="side-bounce cta-button rounded-xl bg-red-600 px-6 py-5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-700 sm:px-10 sm:py-8 lg:text-2xl"
            >
              SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
            </button>

            {/* WARNING MESSAGE */}
            <p className="mt-4 text-center text-sm font-bold text-red-600 lg:text-base">
              ⚠️ This is a live session. No replay will be sent.
              <br />
              If you miss it, you miss it.
            </p>
          </div>

          {/* LOWER CONTENT */}
          <div className="mx-auto mt-28 max-w-[1100px] px-4">
            <div className="grid gap-16 md:grid-cols-2">

              {/* LEFT SIDE */}
              <div className="space-y-10">

                {/* INTRO CARD */}
                <div>
                  <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                    You're doing everything right.
                  </h2>

                  <div className="mt-8 space-y-3 text-base text-white/80 md:text-lg">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      <p>You earn well</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      <p>You work hard</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      <p>You're not careless with money</p>
                    </div>
                  </div>
                </div>

                {/* BREAK SECTION */}
                <div className="space-y-5 border-l border-white/10 pl-6">
                  <p className="text-base text-white/60 md:text-lg">
                    But at the end of the month…
                  </p>

                  <p className="text-xl font-medium leading-snug text-white md:text-2xl">
                    You still wonder where it all went.
                  </p>

                  <div className="space-y-3 text-base text-white/80 md:text-lg">
                    <p>You're not broke.</p>
                    <p>But you're not building wealth either.</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-10">

                {/* HIGHLIGHT MOMENT */}
                <div>
                  <p className="text-base text-white/70 md:text-lg">
                    And that gap?
                  </p>

                  <div className="mt-3 inline-block rounded-xl border border-white/10 bg-white/5 px-6 py-3">
                    <p className="text-xl font-bold text-white md:text-3xl">
                      That's the Paycheck Trap.
                    </p>
                  </div>
                </div>

                {/* REALITY SHIFT */}
                <div className="space-y-5">
                  <p className="text-base text-white/80 md:text-lg">
                    Most people think they need to earn more to fix it.
                  </p>

                  <p className="text-xl font-semibold text-white md:text-2xl">
                    They don't.
                  </p>

                  <p className="text-lg font-medium text-white md:text-xl">
                    They're leaking money in places they can't see.
                  </p>
                </div>

                {/* CONSEQUENCE BLOCK */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                  <p className="text-base leading-relaxed text-white md:text-lg">
                    And if you don't fix those leaks now…
                  </p>

                  <p className="mt-3 text-base font-bold leading-relaxed text-white/80 md:text-lg">
                    You could stay stuck in the same cycle for the
                    next 5–10 years earning more, but never really
                    getting ahead.
                  </p>
                </div>

                {/* OFFER BLOCK */}
                <div>
                  <p className="text-base leading-relaxed text-white/80 md:text-lg">
                    In this free 60-minute masterclass, you'll
                    discover the 5 hidden money leaks quietly draining
                    your income and how to fix them without earning
                    more or taking risky investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            aria-labelledby="hero-modal-title"
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

            {/* HEADER */}
            <div className="mb-6 pr-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#BD9A35]">
                Free Live Zoom Masterclass
              </p>

              <h2
                id="hero-modal-title"
                className="text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Reserve Your Spot
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Enter your details to register for the masterclass.
                You'll continue to Zoom after successful registration.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div>
                <label
                  htmlFor="hero-first-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="hero-first-name"
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
                  htmlFor="hero-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="hero-email"
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

              {/* INTERNATIONAL PHONE */}
              <div>
                <label
                  htmlFor="hero-phone"
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
                    id: "hero-phone",
                    name: "phone",
                    autoComplete: "tel",
                    placeholder: "Phone Number",
                    "aria-label": "Phone Number",
                    required: true,
                    "aria-invalid": Boolean(phoneError),
                    "aria-describedby": phoneError
                      ? "hero-phone-error"
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
                    id="hero-phone-error"
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

              {/* SUBMIT BUTTON */}
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

export default WealthMasterclassHero;