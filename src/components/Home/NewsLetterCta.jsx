import React, { useState } from "react";
import axios from "axios";
import BookImage from "../../images/NewsletterImage/Book3.png";

const NewsLetterCta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_KEY = "orcj11jDI14VkybpDd91mA";
    const FORM_ID = "7070892"; 

    const subscriberData = {
      api_key: API_KEY,
      first_name: name,
      email: email,
    };

    try {
      const response = await axios.post(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        subscriberData
      );

      if (response.data.subscription) {
        setMessage("Successfully subscribed! Please check your email.");
        setName(""); 
        setEmail(""); 
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again later.");
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="relative">
      {message && (
        <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-4 z-50">
          {message}
        </div>
      )}

      <div className="bg-[#181349] text-white p-6 md:p-8 lg:p-12 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 max-w-[1440px] w-full">
          <div className="flex-shrink-0">
            <img src={BookImage} alt="Book Cover" className="w-96" loading="lazy" />
          </div>

          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto space-y-6 lg:space-y-8 xl:pl-28">
            <div className="text-center lg:mt-8">
              <h2 className="text-base lg:text-md 2xl:text-xl font-bold max-w-md lg:max-w-2xl">
                Join the community and get access to thousands of dollars worth
                of free insights, weekly training, tips, and advice.
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-5 w-full lg:pl-4 lg:pt-2 xl:pl-16 xl:pt-2"
            >
              <input
                type="text"
                placeholder="First and last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-2 py-2 rounded-md text-white w-full lg:w-[150px] border-b-2 border-white bg-transparent text-sm placeholder-white focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-2 rounded-md text-white w-full lg:w-[150px] border-b-2 border-white bg-transparent text-sm placeholder-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="hover:bg-blue-700 text-white px-24 text-sm lg:px-6 py-2 bg-[#3C3CC8] rounded-md"
              >
                Gain Free Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterCta;
