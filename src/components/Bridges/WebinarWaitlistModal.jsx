import React, { useState } from "react";

const WebinarWaitlistModal = ({ close }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://app.convertkit.com/forms/9081704/subscriptions", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccess(true);
      setLoading(false);

    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-[#111111] text-white w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl p-6 sm:p-8 md:p-10 relative shadow-2xl">

        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {!success ? (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
              Join The Wealth Clarity Waitlist
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="fields[first_name]"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 focus:outline-none focus:border-red-500"
              />

              <input
                type="email"
                name="email_address"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 focus:outline-none focus:border-red-500"
              />

              <input
                type="tel"
                name="fields[phone]"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 focus:outline-none focus:border-red-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-4 rounded-lg font-semibold text-white disabled:opacity-60"
              >
                {loading ? "Submitting..." : "I Want Financial Clarity"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-6">
            <h2 className="text-2xl font-bold text-green-500">
              ✅ You’re On The Waitlist!
            </h2>
            <p className="text-gray-300">
              We’ll notify you as soon as early access opens.
            </p>

            <button
              onClick={close}
              className="mt-4 bg-red-600 hover:bg-red-700 transition duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        )}

        <p className="text-xs sm:text-sm text-gray-400 text-center mt-6">
          Limited early access • Live training • Priority pricing
        </p>
      </div>
    </div>
  );
};

export default WebinarWaitlistModal;
