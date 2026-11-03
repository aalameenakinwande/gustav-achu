import { useState } from "react";
import axios from "axios";


export default function WealthClarityQuiz() {

    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [consent, setConsent] = useState(false);

const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleLeadCapture = async (e) => {
  e.preventDefault();

  if (!name || !email || !phone) {
    setMessage("Please complete all fields.");
    return;
  }

  if (!email.includes("@")) {
    setMessage("Please enter a valid email address.");
    return;
  }

  if (!consent) {
    setMessage("Please agree to receive communications.");
    return;
  }

  const API_KEY = "orcj11jDI14VkybpDd91mA";
  const FORM_ID = "7070892";

  const subscriberData = {
    api_key: API_KEY,
    first_name: name,
    email,
    phone,
  };

  try {
    setLoading(true);

    const response = await axios.post(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      subscriberData
    );

    if (response.data.subscription) {
      setStarted(true);
      setMessage("");
    } else {
      setMessage("Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setMessage("An error occurred. Please try again.");
  } finally {
    setLoading(false);
  }
};
  const questions = [
    {
      question: "At the end of most months, I usually",
      options: [
        "Wonder where my money went",
        "Save a little, but inconsistently",
        "Have a plan for my money",
        "Invest and track my progress",
      ],
    },
    {
      question: "If your income stopped today, how long could you survive?",
      options: [
        "Less than 1 month",
        "1–3 months",
        "3–12 months",
        "More than 12 months",
      ],
    },
    {
      question: "Which best describes your financial situation?",
      options: [
        "I am surviving",
        "I am trying to get ahead",
        "I’m building wealth",
        "My money is working for me",
      ],
    },
    {
      question: "How often do you review your finances?",
      options: [
        "Rarely",
        "Occasionally",
        "Monthly",
        "Regular system",
      ],
    },
    {
      question: "Which best describes your investments?",
      options: [
        "I don’t invest",
        "I started but inconsistent",
        "I invest regularly",
        "I have a clear strategy",
      ],
    },
    {
      question: "Which best describes your income?",
      options: [
        "One source",
        "Thinking about more",
        "Multiple streams",
        "Actively expanding income",
      ],
    },
    {
      question: "Unexpected expenses usually make me feel…",
      options: [
        "Stressed and unprepared",
        "Slightly uncomfortable",
        "Managed with savings",
        "Already planned for",
      ],
    },
    {
      question: "I have clear financial goals…",
      options: [
        "No",
        "In my head",
        "Written down",
        "Written + system in place",
      ],
    },
    {
      question: "My relationship with wealth is…",
      options: [
        "Distant",
        "I am trying",
        "I am building",
        "I’m building legacy",
      ],
    },
    {
      question: "My financial future feels…",
      options: [
        "Uncertain",
        "Improving slowly",
        "Structured",
        "Strategic and intentional",
      ],
    },
  ];

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value) => {
    const newScore = score + value;

    if (currentQuestion === questions.length - 1) {
      setScore(newScore);
      setCompleted(true);
      return;
    }

    setScore(newScore);
    setCurrentQuestion(currentQuestion + 1);
  };

  const getResult = () => {
    if (score <= 17) {
      return {
        title: "🟥 Financial Drifter",
        color: "text-red-500",
        description:
          "You are working hard — but without structure. Money comes in and disappears quickly. Your biggest gap is not income, it is control. You need clarity before strategy.",
      };
    }

    if (score <= 25) {
      return {
        title: "🟧 Wealth Seeker",
        color: "text-orange-500",
        description:
          "You are aware and trying. But your actions are inconsistent. You are close — but not structured. You need systems, not effort.",
      };
    }

    if (score <= 33) {
      return {
        title: "🟨 Wealth Builder",
        color: "text-yellow-500",
        description:
          "You are progressing. You have habits and direction. But you are not yet optimized. You need leverage and structure.",
      };
    }

    return {
      title: "🟩 Legacy Builder",
      color: "text-green-500",
      description:
        "You are intentional and strategic. You think beyond income. You think in systems and legacy. You need scaling and refinement.",
    };
  };

  const result = getResult();

  return (
    <section className="min-h-screen bg-[#0F172A] text-white px-5 py-44 lg:py-44">
      <div className="max-w-4xl mx-auto">
        {!started ? (
         <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
    Wealth Clarity Index™
  </h1>

  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
    Discover What’s Really Holding Your Wealth Back in 3 Minutes
  </h2>

  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8">
    Take this short assessment to discover:
  </p>

  <div className="max-w-3xl mx-auto text-left space-y-4 sm:space-y-5">
    <p className="text-base sm:text-lg md:text-xl leading-relaxed flex items-start gap-3">
      <span className="text-yellow-500">✔</span>
      <span>Your current Wealth Builder Profile</span>
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed flex items-start gap-3">
      <span className="text-yellow-500">✔</span>
      <span>The hidden gap keeping you financially stuck</span>
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed flex items-start gap-3">
      <span className="text-yellow-500">✔</span>
      <span>
        The next step to move from income earner → wealth builder
      </span>
    </p>
  </div>

<form
  onSubmit={handleLeadCapture}
  className="max-w-2xl mx-auto mt-10"
>
  <div className="space-y-5">
    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-4 rounded-xl text-black"
      required
    />

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-4 rounded-xl text-black"
      required
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full p-4 rounded-xl text-black"
      required
    />

    <label className="flex items-start gap-3 text-left">
      <input
        type="checkbox"
        checked={consent}
        onChange={(e) => setConsent(e.target.checked)}
        className="mt-1"
      />

       <span>
  I agree to receive SMS messages, phone calls, and emails from Gustav B.
  Achu about educational content, webinars, coaching, community updates,
  and promotions. Consent is not a condition of purchase. Message and data
  rates may apply. Message frequency varies. Reply <span className="font-bold text-red-500">STOP</span> to opt out of SMS
  at any time. By checking this box, I agree to the{" "}
  <a
    href="https://my.gustavachu.com/terms-and-conditions"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 underline hover:text-white"
  >
    Terms & Conditions
  </a>{" "}
  and{" "}
  <a
    href="https://my.gustavachu.com/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 underline hover:text-white"
  >
    Privacy Policy
  </a>
  .
</span>
    </label>

    {message && (
      <div className="bg-white text-red-500 rounded-xl p-3">
        {message}
      </div>
    )}

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
    >
      {loading
        ? "Submitting..."
        : "Start the Quiz →"}
    </button>
  </div>
</form>
</div>
        ) : completed ? (
         <div className="space-y-8 md:space-y-12">
  {/* Results Card */}
  <div className="bg-white text-black rounded-2xl p-5 sm:p-6 md:p-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
      Your Results Are In...
    </h2>

    <h3
      className={`text-3xl sm:text-4xl md:text-5xl font-bold ${result.color}`}
    >
      {result.title}
    </h3>

    <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
      {result.description}
    </p>

    <div className="mt-5 md:mt-6 text-base sm:text-lg">
      <span className="font-semibold">Total Score:</span> {score}/40
    </div>
  </div>

  {/* Emotional Bridge */}
  <div className="bg-slate-800 rounded-2xl p-5 sm:p-6 md:p-8">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6">
      What Matters Most
    </h3>

    <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed">
      <p>You do NOT need more financial motivation.</p>

      <p>You do NOT need another income idea.</p>

      <p>You need to understand how wealth is actually built.</p>

      <p>
        Most people never learn this. That's why they stay stuck for years —
        even with good income.
      </p>
    </div>
  </div>

  {/* Webinar CTA */}
  <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12">
    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      Wealth Clarity & Legacy Blueprint Webinar
    </h3>

    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
      Your next step is simple. You now know where you stand.
      The next question is:
    </p>

    <p className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 leading-snug">
      "How do I move from here to real wealth?"
    </p>

    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
      That's exactly what this webinar will show you.
    </p>

    <h4 className="font-bold text-xl sm:text-2xl md:text-3xl mb-5 md:mb-6">
      In the Wealth Clarity & Legacy Blueprint, you will learn:
    </h4>

    <div className="space-y-3 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10">
      <p>
        ✔ Why most professionals stay stuck financially (even with good income)
      </p>

      <p>
        ✔ The real system behind wealth creation (that schools don’t teach)
      </p>

      <p>
        ✔ How to structure your income into assets and growth
      </p>

      <p>
        ✔ The 3-phase model: Clarity → Systems → Legacy
      </p>

      <p>
        ✔ The exact roadmap to start building financial freedom
      </p>
    </div>

    <h4 className="font-bold text-xl sm:text-2xl md:text-3xl mb-5 md:mb-6">
      This is for you if:
    </h4>

    <div className="space-y-3 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10">
      <p>
        ✔ You earn six figures or more but don't see wealth building
      </p>

      <p>✔ You want structure, not motivation</p>

      <p>
        ✔ You are serious about long-term financial freedom
      </p>

      <p>
        ✔ You want clarity on what to do next
      </p>
    </div>

    <a
      href="https://my.gustavachu.com/wealth-clarity"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-full sm:w-auto bg-black text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:opacity-90 transition duration-300"
    >
      Reserve Your Seat
    </a>
  </div>
</div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between mb-2 text-sm lg:text-lg">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>

                <span>
                  {Math.round(
                    ((currentQuestion + 1) /
                      questions.length) *
                      100
                  )}
                  %
                </span>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full">
                <div
                  className="h-3 bg-yellow-500 rounded-full"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-xl lg:text-3xl font-bold mb-10">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid gap-4">
                {questions[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleAnswer(index + 1)
                      }
                      className="text-left bg-slate-700 hover:bg-slate-600 p-5 rounded-xl transition"
                    >
                      <span className="font-bold mr-2">
                        {String.fromCharCode(65 + index)}.
                      </span>

                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}