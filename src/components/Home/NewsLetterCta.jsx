import React, { useState } from "react";
import axios from "axios";
import BookImage from "../../images/NewsletterImage/Book3.png";
import { motion } from "framer-motion";

const NewsLetterCta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_KEY = "orcj11jDI14VkybpDd91mA";
    const FORM_ID = "7070892";

    const subscriberData = {
      api_key: API_KEY,
      first_name: name,
      email: email,
      phone: phone,
    };

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
        setPhone("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }

    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0B0B3B] via-[#181349] to-[#2A1FA0] text-white overflow-hidden">
      {/* Floating Glow */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#3C3CC8]/30 blur-[120px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Toast */}
      {message && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md text-center bg-white text-black px-6 py-3 rounded-xl shadow-2xl z-50 text-sm font-medium">
          {message}
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <img
            src={BookImage}
            alt="Free Resource Book"
            className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px] max-w-full drop-shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80">
              Free Weekly Insights
            </p>
             <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80">
Join the #YouREnough# Legacy Circle Community            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug max-w-2xl mx-auto lg:mx-0">
             Join the community and get access to thousands of dollars worth of free insights, weekly training, tips, and advice.
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:flex-wrap gap-4 shadow-xl"
          >
            {/* First row inputs */}
            <div className="flex flex-col md:flex-row w-full gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-5 py-4 rounded-2xl bg-white/15 border border-white/30 placeholder-white/70 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-2xl bg-white/15 border border-white/30 placeholder-white/70 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            {/* Second row input */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white/15 border border-white/30 placeholder-white/70 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-8 py-4  rounded-xl bg-red-600 hover:bg-red-700 font-semibold hover:scale-105 transition-transform whitespace-nowrap text-sm sm:text-base"
            >
              {loading ? "Submitting…" : "Join the Community & Get Free Tips"}
            </button>
          </form>

          <p className="text-xs sm:text-sm text-white/60">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#2A1FA0] pointer-events-none" />
    </section>
  );
};

export default NewsLetterCta;
