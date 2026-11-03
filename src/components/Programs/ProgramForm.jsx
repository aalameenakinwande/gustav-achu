
import React, { useState } from "react";

const WEB3FORMS_KEY = "a9f0f9ea-5b17-421f-a80b-bd3b0b9b0df3";
const REDIRECT_URL = "https://gustavachu.com/wealth-consultation";

const incomeOptions = [
  "Under $50,000",
  "$50,000–$99,999",
  "$100,000–$149,999",
  "$150,000–$249,999",
  "$250,000–$499,999",
  "$500,000+",
];

const investmentOptions = [
  "Under $10,000",
  "$10,000–$49,999",
  "$50,000–$99,999",
  "$100,000–$249,999",
  "$250,000–$499,999",
  "$500,000–$999,999",
  "$1M+",
];

const financialSituations = [
  "I'm just getting started",
  "I'm rebuilding financially",
  "I'm financially stable and looking to grow",
  "I'm actively scaling my investments",
  "I'm already building significant wealth but need a clearer strategy",
];

const challenges = [
  "I don't have a clear wealth-building strategy",
  "I'm not sure how my investments should be structured",
  "I'm not investing consistently",
  "I don't know if I'm investing enough",
  "I have too many investments and need simplification",
  "I have too much cash sitting on the sidelines",
  "I'm concerned about market risk",
  "I have debt that is affecting my wealth-building",
  "I earn well but don't feel like I'm building wealth fast enough",
  "I have a strategy but struggle to execute it consistently",
  "Other",
];

const commitmentOptions = [
  "Yes, I'm ready to take action",
  "Yes, but I need to understand the strategy first",
  "I'm still exploring my options",
  "No, I'm not ready to make changes right now",
];

const inputClass =
  "mt-2 w-full rounded-md border border-white/15 bg-[#111111] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30";

const labelClass = "block text-sm font-medium leading-6 text-white/90";

const sections = [
  { number: "01", title: "Your Information" },
  { number: "02", title: "Your Financial Picture" },
  { number: "03", title: "Your Wealth Goals" },
  { number: "04", title: "What Is Holding You Back?" },
  { number: "05", title: "Why Now?" },
  { number: "06", title: "Your Commitment" },
  { number: "07", title: "The Outcome" },
  { number: "08", title: "Final Question" },
];

function SectionHeading({ number, title }) {
  return (
    <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#D4AF37]/40 text-sm font-semibold text-[#D4AF37]">
        {number}
      </span>
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function Field({ label, name, type = "text", required = false, placeholder = "", children }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-[#D4AF37]">*</span>}
      </label>

      {children || (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

function TextareaField({ label, name, required = false, placeholder = "" }) {
  return (
    <Field label={label} name={name} required={required}>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}
        className={`${inputClass} min-h-28 resize-y`}
      />
    </Field>
  );
}

function SelectField({ label, name, options, required = false }) {
  return (
    <Field label={label} name={name} required={required}>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className={`${inputClass} appearance-none`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#111111]">
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

function RadioOptions({ name, options, required = false }) {
  return (
    <div className="mt-4 grid gap-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#D4AF37]/50"
        >
          <input
            type="radio"
            name={name}
            value={option}
            required={required}
            className="mt-1 h-4 w-4 shrink-0 accent-[#D4AF37]"
          />
          <span className="text-sm leading-6 text-white/75">{option}</span>
        </label>
      ))}
    </div>
  );
}

const ProgramForm = () => {
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [otherChallenge, setOtherChallenge] = useState("");
  const [commitmentScore, setCommitmentScore] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleChallenge = (challenge) => {
    setSelectedChallenges((current) =>
      current.includes(challenge)
        ? current.filter((item) => item !== challenge)
        : [...current, challenge]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setSubmitting(true);

    try {
      const formData = new FormData(form);

      // Send the selected challenges as one readable field.
      formData.set(
        "wealth_challenges",
        [
          ...selectedChallenges.filter((item) => item !== "Other"),
          ...(selectedChallenges.includes("Other") && otherChallenge.trim()
            ? [`Other: ${otherChallenge.trim()}`]
            : []),
        ].join("\n")
      );

      formData.set("commitment_score", commitmentScore);
      formData.set("access_key", WEB3FORMS_KEY);
      formData.set(
        "subject",
        "New Paycheck to Prosperity Accelerator Application"
      );
      formData.set("from_name", "Paycheck to Prosperity Accelerator Website");
      formData.set("redirect", REDIRECT_URL);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Your application could not be submitted."
        );
      }

      // Redirect only after Web3Forms confirms successful submission.
      window.location.assign(REDIRECT_URL);
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong. Please check your connection and try again."
      );
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080808] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-12 text-center sm:mb-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            Paycheck to Prosperity
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Paycheck to Prosperity
            <span className="block text-[#D4AF37]">
              Accelerator
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-white/85">
            Application for the Paycheck to Prosperity Accelerator
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            The Paycheck to Prosperity Accelerator is designed for high-income
            earners who are serious about turning their income into long-term
            wealth, financial independence, and a lasting legacy.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Complete the application below so we can understand where you are
            today, where you want to go, and whether the Accelerator is the
            right fit for you.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            Estimated completion time: 5 minutes
          </div>

          <p className="mt-5 text-left text-xs text-white/45">
            Fields marked <span className="text-[#D4AF37]">*</span> are
            required.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 01 — Your Information */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[0]} />

            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="full_name"
                required
                placeholder="Enter your full name"
              />

              <Field
                label="Email Address"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />

              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                required
                placeholder="Include your country code"
              />

              <Field
                label="Occupation / Industry"
                name="occupation_industry"
                required
                placeholder="e.g. Technology, Healthcare"
              />
            </div>
          </section>

          {/* 02 — Financial Picture */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[1]} />

            <div className="space-y-8">
              <div>
                <p className={labelClass}>
                  What is your approximate annual household income?
                </p>
                <RadioOptions
                  name="annual_household_income"
                  options={incomeOptions}
                  required
                />
              </div>

              <div>
                <p className={labelClass}>
                  Approximately how much do you currently have invested across
                  all investment accounts?
                </p>
                <RadioOptions
                  name="total_investments"
                  options={investmentOptions}
                  required
                />
              </div>

              <div>
                <p className={labelClass}>
                  Which best describes your current financial situation?
                </p>
                <RadioOptions
                  name="financial_situation"
                  options={financialSituations}
                  required
                />
              </div>
            </div>
          </section>

          {/* 03 — Wealth Goals */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[2]} />

            <div className="space-y-6">
              <TextareaField
                label="What is the most important financial outcome you want to achieve over the next 5–10 years?"
                name="most_important_financial_outcome"
                required
                placeholder="Describe the financial outcome that matters most to you..."
              />

              <Field
                label="What would you like your investments or net worth to look like 10 years from now?"
                name="ten_year_wealth_goal"
                required
                placeholder="Describe your 10-year target..."
              />

              <TextareaField
                label="What does financial freedom mean to you personally?"
                name="meaning_of_financial_freedom"
                required
                placeholder="What would financial freedom make possible for you?"
              />
            </div>
          </section>

          {/* 04 — Challenges */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[3]} />

            <div>
              <p className={labelClass}>
                What is the biggest challenge preventing you from building
                wealth at the level you want?
              </p>
              <p className="mt-2 text-xs text-white/45">
                Select all that apply.
              </p>

              <div className="mt-4 grid gap-3">
                {challenges.map((challenge) => (
                  <label
                    key={challenge}
                    className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#D4AF37]/50"
                  >
                    <input
                      type="checkbox"
                      checked={selectedChallenges.includes(challenge)}
                      onChange={() => toggleChallenge(challenge)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#D4AF37]"
                    />
                    <span className="text-sm leading-6 text-white/75">
                      {challenge === "Other" ? "Other" : challenge}
                    </span>
                  </label>
                ))}
              </div>

              {selectedChallenges.includes("Other") && (
                <div className="mt-4">
                  <Field
                    label="Please describe your other challenge"
                    name="other_challenge"
                    value={otherChallenge}
                    placeholder="Describe your challenge"
                  />
                </div>
              )}
            </div>

            <div className="mt-8">
              <TextareaField
                label="In your own words, what do you believe is keeping you from reaching your financial goals?"
                name="barriers_to_financial_goals"
                required
                placeholder="Tell us more about your current challenges..."
              />
            </div>
          </section>

          {/* 05 — Why Now */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[4]} />

            <div className="space-y-6">
              <TextareaField
                label="Why is building a better wealth strategy important to you right now?"
                name="why_wealth_strategy_now"
                required
                placeholder="Why is now the right time?"
              />

              <TextareaField
                label="What happens if you don't solve this over the next 3–5 years?"
                name="consequences_of_inaction"
                required
                placeholder="What concerns you about leaving this unresolved?"
              />
            </div>
          </section>

          {/* 06 — Commitment */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[5]} />

            <div>
              <p className={labelClass}>
                On a scale of 1–10, how serious are you about building wealth
                starting now?
              </p>

              <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (score) => (
                    <button
                      key={score}
                      type="button"
                      aria-pressed={commitmentScore === String(score)}
                      onClick={() => setCommitmentScore(String(score))}
                      className={`flex h-11 items-center justify-center rounded-md border text-sm font-semibold transition sm:h-12 ${
                        commitmentScore === String(score)
                          ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                          : "border-white/15 bg-white/[0.025] text-white/70 hover:border-[#D4AF37]"
                      }`}
                    >
                      {score}
                    </button>
                  )
                )}
              </div>

              <input
                type="text"
                name="wealth_commitment_score"
                value={commitmentScore}
                required
                readOnly
                tabIndex={-1}
                aria-label="Wealth commitment score"
                className="pointer-events-none absolute h-px w-px opacity-0"
              />

              <div className="mt-3 flex justify-between gap-4 text-xs text-white/45">
                <span>1 = Not a priority right now</span>
                <span className="text-right">
                  10 = One of my highest priorities
                </span>
              </div>
            </div>

            <div className="mt-8">
              <p className={labelClass}>
                If you identify a clear strategy for reaching your financial
                goals, are you prepared to take action and make changes?
              </p>
              <RadioOptions
                name="readiness_to_take_action"
                options={commitmentOptions}
                required
              />
            </div>
          </section>

          {/* 07 — The Outcome */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[6]} />

            <TextareaField
              label="If the Paycheck to Prosperity Accelerator works exactly the way you want it to, what would you walk away with that would make the experience 100% worth it to you?"
              name="desired_accelerator_outcome"
              required
              placeholder="Describe the outcome that would make this experience worthwhile..."
            />
          </section>

          {/* 08 — Final Question */}
          <section className="rounded-lg border border-white/10 bg-[#0D0D0D] p-5 sm:p-8">
            <SectionHeading {...sections[7]} />

            <TextareaField
              label="Why do you believe now is the right time to get serious about building wealth?"
              name="why_now_final_answer"
              required
              placeholder="Share anything else that explains why this matters to you now..."
            />
          </section>

          {/* What happens next */}
          <section className="rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/[0.045] p-5 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              What Happens Next
            </p>

            <h2 className="mt-4 text-xl font-semibold text-white">
              Your next step toward financial clarity
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-white/65">
              <p>
                Once you submit your application, you'll be able to schedule
                your Financial Clarity Call with Gustav.
              </p>
              <p>
                Before the call, you'll receive a more detailed Financial
                Clarity Intake Form. This will give Gustav a deeper
                understanding of your income, investments, assets, debt, goals,
                and financial priorities so the call can focus on your strategy
                rather than simply gathering information.
              </p>
            </div>
          </section>

          {error && (
            <div
              role="alert"
              className="rounded-md border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300"
            >
              {error}
            </div>
          )}

          <div className="pb-8">
            <button
              type="submit"
              disabled={submitting}
              className="group flex min-h-14 w-full items-center justify-between gap-4 rounded-md bg-red-600 px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:px-7 sm:text-sm"
            >
              <span>
                {submitting
                  ? "Submitting Your Application..."
                  : "Submit Your Application & Schedule Your Call"}
              </span>

              {!submitting && (
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              )}
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-white/40">
              Please ensure your answers are accurate before submitting.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ProgramForm;
