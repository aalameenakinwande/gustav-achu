import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OptInModal = ({ close }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://app.convertkit.com/forms/9081713/subscriptions", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setLoading(false);
      navigate("/watch");

    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
      <div className="bg-gradient-to-b from-[#181349] via-[#1F1B5B] to-[#181349] rounded-2xl max-w-md w-full p-6 sm:p-8 relative text-white shadow-xl">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 text-3xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Get Instant Access To The Masterclass
        </h3>

        <p className="text-gray-300 text-center mb-6">
          Enter your details below and start watching immediately.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fields[first_name]"
            placeholder="Name"
            required
            className="w-full border border-gray-600 bg-[#181B3D] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email_address"
            placeholder="Email"
            required
            className="w-full border border-gray-600 bg-[#181B3D] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="text"
            name="fields[phone]"
            placeholder="Phone Number"
            className="w-full border border-gray-600 bg-[#181B3D] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-[#181349] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 text-lg disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Show Me The Hidden Money"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Free On-Demand Masterclass • Immediate Access • No Spam
        </p>
      </div>
    </div>
  );
};

export default OptInModal;
