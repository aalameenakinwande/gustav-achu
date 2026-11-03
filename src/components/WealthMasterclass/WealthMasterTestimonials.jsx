import React, { useRef, useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const textTestimonials = [
  {
    content: `I finally understood where my money was going — and fixed it within a week.`,
    author: "— Nolan. R., Operations manager",
  },
  {
    content: `This gave me clarity on my income, investments, and next steps. I stopped guessing and started acting.`,
    author: "— Megan.A., Small business owner",
  },
  {
    content: `I now make financial decisions with confidence instead of confusion.`,
    author: "— Olivia. M., HR Professional",
  },
  {
    content: `For the first time, I feel in control of my money and my future.`,
    author: "— George. M., IT professional",
  },
  {
    content: `I learned how to grow my money safely without chasing risky investments.`,
    author: "— Mary. J., Healthcare Worker",
  },
  {
    content: `I went from overwhelmed to clear, focused, and confident about building wealth.`,
    author: "— Williams. A., Entrepreneur",
  },
];

const WealthMasterTestimonials = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

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

  // VIDEO PLAYBACK ON VISIBILITY
  useEffect(() => {
    const videos = [videoRef1.current, videoRef2.current].filter(Boolean);

    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Browser may require the visitor to start playback manually.
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
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
       * Verify this form endpoint against Kit's supported integration
       * method before deployment. If it is unsupported, use a backend
       * or serverless function to submit the contact securely.
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
      <section className="w-full bg-[#0A081A] px-6 text-white lg:py-20">
        <div className="mx-auto max-w-[1100px] text-center">

          {/* HEADING */}
          <h3 className="mb-12 text-2xl font-bold md:text-4xl">
            Check Out What Past Attendees Are Saying...
          </h3>

          {/* VIDEO TESTIMONIALS */}
          <div className="mb-16 flex flex-col items-center justify-center gap-8 md:flex-row">

            {/* VIDEO 1 */}
            <div className="aspect-[9/16] w-[280px] overflow-hidden rounded-2xl shadow-lg sm:w-[320px] md:w-[340px] lg:w-[360px]">
              <video
                ref={videoRef1}
                src="https://res.cloudinary.com/deofmlywm/video/upload/v1768587524/Client_Testimonial_1_1_pgw7ub.mp4"
                controls
                className="h-full w-full object-cover"
                muted
                playsInline
              />
            </div>

            {/* VIDEO 2 */}
            <div className="aspect-[9/16] w-[280px] overflow-hidden rounded-2xl shadow-lg sm:w-[320px] md:w-[340px] lg:w-[360px]">
              <video
                ref={videoRef2}
                src="https://res.cloudinary.com/deofmlywm/video/upload/v1771238658/Testimonial_13th_Feb_2_1_z1frjc.mp4"
                controls
                className="h-full w-full object-cover"
                muted
                playsInline
              />
            </div>
          </div>

          {/* TESTIMONIAL SUBHEADING */}
          <h3 className="mb-12 text-xl font-bold md:text-3xl">
            Real Results From Professionals Who Took Control of Their Money
          </h3>

          {/* TEXT TESTIMONIALS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {textTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#BD9A35]/30 bg-[#151521] p-6 shadow-[0_0_25px_rgba(189,154,53,0.15)]"
              >
                <p className="mb-4 text-md text-gray-300 lg:text-lg">
                  {testimonial.content}
                </p>

                <p className="font-semibold text-[#BD9A35]">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
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

            <p className="mt-4 text-center text-sm font-bold text-red-600 lg:text-base">
              ⚠️ This is a live session. No replay will be sent.
              <br />
              If you miss it, you miss it.
            </p>
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
            aria-labelledby="testimonial-modal-title"
            className="relative my-auto w-full max-w-md rounded-2xl border border-[#BD9A35]/30 bg-[#0A0A0D] p-6 text-left text-white shadow-[0_0_60px_rgba(189,154,53,0.12)] sm:p-8"
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
                id="testimonial-modal-title"
                className="text-2xl font-bold leading-tight sm:text-3xl"
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

              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="testimonial-first-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="testimonial-first-name"
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
                  htmlFor="testimonial-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="testimonial-email"
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
                  htmlFor="testimonial-phone"
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
                    id: "testimonial-phone",
                    name: "phone",
                    autoComplete: "tel",
                    placeholder: "Phone Number",
                    "aria-label": "Phone Number",
                    required: true,
                    "aria-invalid": Boolean(phoneError),
                    "aria-describedby": phoneError
                      ? "testimonial-phone-error"
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
                    id="testimonial-phone-error"
                    role="alert"
                    className="mt-2 text-sm text-red-400"
                  >
                    {phoneError}
                  </p>
                )}
              </div>

              {/* SUBMISSION ERROR */}
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

export default WealthMasterTestimonials;