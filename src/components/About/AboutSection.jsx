import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import Goal1 from "../../images/gustavImages/Goal1.webp";
import Goal2 from "../../images/gustavImages/Goal2.webp";
import Goal3 from "../../images/gustavImages/Goal3.webp";
import Goal4 from "../../images/gustavImages/Goal4.webp";
import BookImage from "../../images/NewsletterImage/Book3.png";

const CommunityComponent = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const goals = [
    { img: Goal1, title: "The Millionaire Immigrant", price: "$29/month", scrollTo: "millionaireImmigrant" },
    { img: Goal2, title: "Purpose Mastery", price: "$999", scrollTo: "purposeMastery" },
    { img: Goal3, title: "1:1 with Gustav", price: "$99/call", scrollTo: "oneWithGustav" },
    { img: Goal4, title: "Guarantee Your Legacy", price: "$3,999", scrollTo: "guaranteeLegacy" },
  ];

  const handleAccessNowClick = (scrollTo) => navigate("/work-with-gustav", { state: { scrollTo } });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = "orcj11jDI14VkybpDd91mA";
    const FORM_ID = "7070892";

    const subscriberData = { api_key: API_KEY, first_name: name, email };

    try {
      setLoading(true);
      const response = await axios.post(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        subscriberData
      );
      if (response.data.subscription) {
        setMessage("🎉 You’re in! Check your email for confirmation.");
        setName("");
        setEmail("");
      } else setMessage("Subscription failed. Please try again.");
    } catch {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }

    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section className="relative max-w-full mx-auto px-6 md:px-12 text-white rounded-3xl overflow-hidden">
      {/* Toast */}
      {message && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-xl shadow-2xl z-50 text-sm font-medium">
          {message}
        </div>
      )}

      {/* Top Part - Black Background */}
      <div className="bg-black rounded-t-3xl py-16 md:py-24 px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Butler, serif" }}>{title}</h2>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-gray-300">{subtitle}</p>
        </div>

        {/* Goals */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer shadow-lg group"
              onClick={() => handleAccessNowClick(goal.scrollTo)}
            >
              <img
                src={goal.img}
                alt={goal.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 opacity-100 group-hover:opacity-100">
                <h3 className="text-xl md:text-2xl font-bold text-white">{goal.title}</h3>
                <p className="mt-2 text-indigo-300">{goal.price}</p>
                <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
                  Access Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Part - Gradient Background for Newsletter */}
      <div className="relative bg-gradient-to-br from-[#0B0B3B] via-[#181349] to-[#2A1FA0] rounded-b-3xl overflow-hidden mt-12 py-16 md:py-24 px-4 md:px-12">
        {/* Floating Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3C3CC8]/30 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <img src={BookImage} alt="Free Resource Book" className="w-72 md:w-96 drop-shadow-2xl" loading="lazy" />
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold max-w-md">
              Join our community and get access to thousands of dollars worth of free insights, weekly training, tips, and advice.
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <input
                type="text"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                {loading ? "Submitting…" : "Gain Free Access"}
              </button>
            </form>

            <p className="text-xs text-white/60 text-center lg:text-left">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityComponent;
