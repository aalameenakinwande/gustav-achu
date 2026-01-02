import React, { useState } from "react";
import axios from "axios";
import WorkBookImageThree from "../../images/workbookImages/iup.webp";
import UltimatePDF from "../pdf/The_Ultimate_Investor_Playbook.pdf";
import { useNavigate } from "react-router-dom";

const InvestorQuizPage = () => {
  const navigate = useNavigate();
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [investorType, setInvestorType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const questions = [
    {
      text: "How do you currently feel about investing?",
      options: [
        "I’m curious, but honestly — it feels a bit intimidating.",
        "I’ve started saving and want to learn how to make my money grow.",
        "I already invest a little but want to understand strategies that build real wealth.",
      ],
    },
    {
      text: "What’s your top money goal right now?",
      options: [
        "Just to start — I want to build consistent savings.",
        "To grow my money through simple, safe investments.",
        "To learn wealth-building strategies that create passive income.",
      ],
    },
    {
      text: "How long do you plan to keep your money invested?",
      options: [
        "Less than 5 years — I want short-term wins.",
        "5–10 years — mid-term goals like a house or business.",
        "10+ years — I’m playing the long game and want financial freedom.",
      ],
    },
    {
      text: "What describes your comfort level with risk?",
      options: [
        "I’d rather play it safe — slow and steady growth is fine.",
        "I’m open to moderate risk if it means better returns.",
        "I’m okay with short-term ups and downs if I gain more long-term.",
      ],
    },
    {
      text: "What kind of investor lifestyle fits you best?",
      options: [
        "Set it and forget it — I want something simple that works.",
        "Check in sometimes — I can review and learn along the way.",
        "Hands on — I enjoy tracking trends and managing my portfolio.",
      ],
    },
    {
      text: "Which of these challenges feels most real to you right now?",
      options: [
        "I don’t know where to start investing.",
        "I’m not sure what type of investments fit me.",
        "I’m afraid of losing money or making a wrong move.",
      ],
    },
    {
      text: "What’s your ultimate financial vision?",
      options: [
        "Financial peace — freedom from paycheck stress.",
        "Financial growth — making my money work for me.",
        "Financial legacy — building wealth that outlives me.",
      ],
    },
  ];

  const handleAnswer = (index) => {
    const newAnswers = [...answers, index];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    if (total <= 6) setInvestorType("Curious Starter");
    else if (total <= 12) setInvestorType("Cautious Builder");
    else setInvestorType("Ambitious Wealth Builder");
    setShowResult(true);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const subscriberData = {
    api_key: API_KEY,
    email,
    first_name: name,
    fields: { phone_number: phone },
  };

  try {
    const response = await axios.post(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      subscriberData
    );

    if (response.data.subscription) {
      // Show success popup
      setShowModal(true);

      // Wait 5 seconds before triggering the download
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = UltimatePDF;
        link.setAttribute("download", "The_Ultimate_Investor_Playbook.pdf");
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up and redirect after 10 seconds total
        setTimeout(() => {
          setShowModal(false);
          navigate("/");
        }, 5000);
      }, 5000);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
    } else {
      setMessage("Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    setMessage("An error occurred. Please try again later.");
  }
};


  return (
    <div className="min-h-screen bg-[#181349] flex flex-col items-center justify-center text-white px-6 py-12">
      {!startQuiz ? (
        // Landing Section
        <div className="max-w-7xl flex flex-col lg:flex-row items-center gap-10 mt-20 lg:mt-44">
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              What Type Of An <span className="text-[#BD9A35]">Investor</span> Are You?
            </h1>
            <p className="text-lg lg:text-lg xl:text-xl opacity-90 leading-relaxed">
              Take the investor assessment quiz and receive your{" "}
              <span className="text-[#BD9A35] font-semibold">
                FREE customized investing playbook
              </span>
              . It will take no more than 1–2 minutes.
            </p>

            <button
              onClick={() => setStartQuiz(true)}
              className="bg-[#BD9A35] hover:bg-[#a8842d] transition duration-300 text-white px-8 lg:px-10 py-3 lg:py-3 rounded-2xl font-semibold text-lg lg:text-xl xl:text-2xl shadow-lg"
            >
              Take Quiz
            </button>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={WorkBookImageThree}
              alt="Investor Quiz"
              className="rounded-2xl w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      ) : !showResult ? (
        // Quiz Section
        <div className="max-w-4xl w-full bg-white/10 p-8 rounded-2xl shadow-lg mt-20 lg:mt-44">
          <h2 className="text-xl lg:text-4xl xl:text-4xl font-bold mb-4 text-center">
            {questions[currentQuestion].text}
          </h2>
          <div className="space-y-8 mt-10">
            {questions[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left bg-white/20 hover:bg-[#BD9A35] transition p-3 lg:p-5 xl:p-7 rounded-lg text-sm lg:text-lg xl:text-xl"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-6 text-center text-sm lg:text-lg  opacity-70">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      ) : (
        // Result + Form Section
        <div className="max-w-3xl w-full bg-white/10 p-8 rounded-2xl shadow-lg text-center mt-20 lg:mt-56">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            You’re a {investorType}!
          </h2>
          <p className="mb-6 text-md lg:text-xl  opacity-90">
            Enter your details below to get your free{" "}
            <span className="font-semibold text-[#BD9A35]">
              Investor Playbook
            </span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm lg:text-xl">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 rounded-lg text-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-[#BD9A35] text-white py-3 rounded-lg hover:bg-[#a8842d] transition"
            >
              Download Playbook
            </button>
          </form>
          {message && <p className="mt-4 text-sm">{message}</p>}
        </div>
      )}

   {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-6">
    <div className="bg-white text-black rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl">
      <h3 className="text-2xl font-bold mb-4">You're all set!</h3>
      <p className="text-base leading-relaxed mb-6">
        Thank you for completing the quiz! Your investor playbook is now being prepared 
        and will start downloading in your browser in just a few seconds.
      </p>
      <p className="text-base leading-relaxed mb-4">
        PS: While you wait, watch our quick video on finance to start learning
        today:{" "}
        <a
          href="https://www.youtube.com/watch?v=DO2zOJMt6n4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#BD9A35] underline font-semibold"
        >
          Watch on YouTube
        </a>
      </p>
    </div>
  </div>
)}

    </div>
  );
};

export default InvestorQuizPage;
