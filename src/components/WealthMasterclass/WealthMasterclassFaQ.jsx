import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const FORM_ID = "7070892";
const ZOOM_LINK =
  "https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration";

const faqs = [
  {
    question: "Who is this masterclass for?",
    answer:
      "This is for ambitious professionals, entrepreneurs, immigrants, and families who are earning money, but feel like their money is not growing the way it should. If you have income and no clear system, this is for you.",
  },
  {
    question: "Who is this masterclass NOT for?",
    answer:
      "This is not for people looking for get-rich-quick shortcuts, overnight investment tips, or a passive session to zone out in. This is for people who are serious about getting honest about their financial reality and taking structured action.",
  },
  {
    question: "It's free- what is the catch?",
    answer:
      "There is no catch. This masterclass is the entry point to the Gustav Achu Legacy Circle community. It is genuinely free. After this session, you’ll have clarity on what’s been happening but most people realize they still need help putting the full system together for their specific situation. That’s why we created the Wealth Clarity & Legacy Blueprint Webinar — where we build your personal 90-day wealth plan.",
  },
  {
    question: "I already earn well. Is this still relevant?",
    answer:
      "Especially relevant. The leaks are quieter at higher income levels, but they are larger. The framework in this session is built specifically for people who earn well but aren't building proportionally.",
  },
  {
    question: "What happens after the masterclass?",
    answer:
      "You keep your worksheet and community access. You will also be invited to the paid webinar to build your full personalised 90-day wealth plan with Gustav live.",
  },
  {
    question: "How do I know this is worth my time?",
    answer:
      "Gustav has helped hundreds of clients begin building their first $100,000 portfolios using this exact system. Sixty minutes- free, and with a worksheet you will actually use. The only question is if you can afford not to show up.",
  },
];

const WealthMasterclassFaQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const openRegistration = () => {
    setFormError("");
    setPhoneError("");
    setShowModal(true);
  };

  const closeRegistration = () => {
    if (isSubmitting) return;
    setShowModal(false);
    setFormError("");
    setPhoneError("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setFormError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const digits = phone.replace(/\D/g, "");

    if (digits.length < 7 || digits.length > 15) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    if (!formData.firstName.trim() || !formData.email.trim()) {
      setFormError("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");
    setPhoneError("");

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
        throw new Error("Registration could not be completed.");
      }

      window.location.assign(ZOOM_LINK);
    } catch (error) {
      console.error("Kit registration error:", error);
      setFormError(
        "We couldn't complete your registration. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-16 px-4 text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
              >
                <span className="pr-4 text-base font-semibold sm:text-lg">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[600px] overflow-y-auto py-4 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="px-5 leading-relaxed text-white/80">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={openRegistration}
            className="side-bounce cta-button rounded-xl bg-red-600 px-6 py-5 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-700 sm:px-10 sm:py-7 sm:text-xl lg:text-2xl"
          >
            SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
          </button>

          <p className="mt-4 text-center text-sm font-bold text-red-600 lg:text-base">
            ⚠️ This is a live session. No replay will be sent.
            <br />
            If you miss it, you miss it.
          </p>

          <p className="mt-3 text-xs text-white/50">
            Spots are limited to 100 attendees — once it fills, registration
            closes for the week.
          </p>

          <p className="mt-2 text-xs text-white/50">
            100% Free | Instant Community Access | Free Worksheet Included
          </p>

          <p className="mt-2 text-xs text-white/50">
            Gustav B. Achu | Author | Legacy Coach | Speaker | Investor |
            gustavachu.com | gustav@gustavachu.com
          </p>
        </div>
      </div>

      {/* REGISTRATION MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeRegistration();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wealth-faq-modal-title"
            className="relative my-auto w-full max-w-md rounded-2xl border border-[#D4AF37]/30 bg-[#0b0b0b] p-6 text-left shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closeRegistration}
              disabled={isSubmitting}
              aria-label="Close registration form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed"
            >
              ×
            </button>

            <div className="mb-6 pr-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Free Masterclass
              </p>

              <h3
                id="wealth-faq-modal-title"
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                Save Your Spot
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Enter your details to register and continue to the Zoom
                registration page.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="wealth-faq-full-name"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Full Name
                </label>

                <input
                  id="wealth-faq-full-name"
                  type="text"
                  name="firstName"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37] disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="wealth-faq-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="wealth-faq-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37] disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="wealth-faq-phone"
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
                    setFormError("");
                  }}
                  forceDialCode
                  disabled={isSubmitting}
                  inputProps={{
                    id: "wealth-faq-phone",
                    name: "phone",
                    autoComplete: "tel",
                    placeholder: "Phone number",
                    "aria-label": "Phone Number",
                    "aria-invalid": Boolean(phoneError),
                    required: true,
                  }}
                  className="wealth-faq-phone w-full"
                  inputClassName="wealth-faq-phone-field"
                  countrySelectorStyleProps={{
                    buttonClassName: "wealth-faq-country-button",
                    dropdownStyleProps: {
                      className: "wealth-faq-country-dropdown",
                    },
                  }}
                />

                {phoneError && (
                  <p className="mt-2 text-sm text-red-400">
                    {phoneError}
                  </p>
                )}
              </div>

              {formError && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300"
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#D4AF37] px-5 py-4 font-bold text-black transition hover:bg-[#e6c65b] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "REGISTERING..." : "REGISTER & CONTINUE"}
              </button>

              <p className="text-center text-xs leading-relaxed text-white/40">
                Your details will be used to process your masterclass
                registration.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ISOLATED PHONE INPUT STYLES */}
      <style>{`
        .wealth-faq-phone {
          display: flex;
          width: 100%;
          position: relative;
        }

        .wealth-faq-phone .react-international-phone-country-selector {
          position: static;
        }

        .wealth-faq-phone .wealth-faq-country-button {
          height: 48px;
          padding: 0 10px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-right: none;
          border-radius: 8px 0 0 8px;
          background: #171717;
          color: white;
        }

        .wealth-faq-phone .wealth-faq-phone-field {
          width: 100%;
          min-width: 0;
          height: 48px;
          padding: 0 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 0 8px 8px 0;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
        }

        .wealth-faq-phone .wealth-faq-phone-field:focus {
          border-color: #D4AF37;
        }

        .wealth-faq-phone .wealth-faq-phone-field::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .wealth-faq-country-dropdown {
          z-index: 10000;
          background: #171717;
          color: white;
        }

        .wealth-faq-phone .react-international-phone-country-selector-dropdown {
          background: #171717;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .wealth-faq-phone .react-international-phone-country-selector-dropdown__list-item:hover,
        .wealth-faq-phone .react-international-phone-country-selector-dropdown__list-item--focused {
          background: #303030;
        }

        .wealth-faq-phone .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: #D4AF37;
        }
      `}</style>
    </section>
  );
};

export default WealthMasterclassFaQ;
