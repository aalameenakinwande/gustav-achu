import React, { useState } from "react";
import axios from "axios";

const Community = () => {
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
    <>
      <div className="w-full bg-[#181349] mx-auto text-white p-6 md:py-20">
        <div className="text-center">
          <h1
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-[#EFE359] mt-36 md:mt-44 lg:mt-44"
            style={{ fontFamily: "Butler, serif" }}
          >
            JOIN THE COMMUNITY
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-6 md:mb-6" style={{ fontFamily: "Butler, serif" }}>
            WEEKLY INSIGHTS TO SCALE INVESTMENT, <br />PERSONAL GROWTH AND LEGACY
          </h2>
          <p className="text-sm mt-0 lg:mt-8 md:text-md mb-6 lg:max-w-[1800px] mx-auto md:text-md lg:text-xl md:mb-10">
            {/* Every Friday, receive free and practical tips to enhance your
            abundance, wellness, and freedom.
            <br className="hidden md:block" /> Enrich your life from the inside
            out and level up without leaving your inbox. */}


           Receive free and practical tips to maximize profit-making opportunities, learn how to invest wisely and      <br className="hidden md:block" /> build a legacy that outlives you.
Enrich your life from the inside out and level up without leaving your inbox.

          </p>

          {message && (
            <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-4 z-50">
              {message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between mb-6 md:mb-10">
              <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                <label
                  htmlFor="name"
                  className="block text-left text-sm font-medium mb-1"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 text-gray-900 bg-white"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium mb-1"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 text-gray-900 bg-white"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#3C3CC8] mt-0 lg:mt-0 md:mb-10 text-white py-2 lg:py-4 px-4 w-64 text-sm lg:text-md font-semibold transform transition-transform hover:scale-105 rounded-md"
            >
              Join the Newsletter
            </button>
          </form>

          <p className="mt-8 text-gray-500 text-sm">
            A weekly digest of case studies, book reviews and other useful resources to help you scale up your business
          </p>
        </div>
      </div>
      <div className="bg-[#E2D654] w-full py-3">
        <div className="max-w-[1600px] mx-auto lg:-mt-38 sm:px-6">
        </div>
      </div>
    </>
  );
};

export default Community;
