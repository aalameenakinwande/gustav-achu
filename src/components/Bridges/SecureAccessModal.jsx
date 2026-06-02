import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SecureAccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault(); // STOP normal redirect
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://app.convertkit.com/forms/9081694/subscriptions", {
        method: "POST",
        body: formData,
        mode: "no-cors", // important
      });

      // Close modal
      onClose();

      // Redirect to wealth clarity
      navigate("/wealth-clarity");

    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
      <div className="bg-[#111111] w-full max-w-lg rounded-2xl p-6 sm:p-8 relative border border-gray-800 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-white">
          Secure Your Access & See Full Webinar Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fields[first_name]"
            placeholder="Name"
            required
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white"
          />

          <input
            type="email"
            name="email_address"
            placeholder="Email"
            required
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white"
          />

          <input
            type="tel"
            name="fields[phone]"
            placeholder="Phone"
            required
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold py-4 rounded-lg"
          >
            {loading ? "Securing Access..." : "I’m Done Living Without Clarity — Give Me Access"}
          </button>

          <p className="text-xs text-gray-400 text-center pt-2">
            You’ll be redirected to the full Webinar breakdown.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SecureAccessModal;
