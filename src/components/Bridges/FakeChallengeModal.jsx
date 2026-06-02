import React, { useState } from "react";

const FakeChallengeModal = ({ close }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4 sm:px-6">
      <div className="bg-gradient-to-b from-[#181349] via-[#1F1B5B] to-[#181349] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh] text-white shadow-xl">

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 text-3xl font-bold"
          onClick={close}
        >
          &times;
        </button>

        {!success ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
              Reserve My Spot On The Waitlist
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fields[first_name]"
                placeholder="Name"
                required
                className="w-full border border-gray-600 bg-[#262147] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                name="email_address"
                placeholder="Email"
                required
                className="w-full border border-gray-600 bg-[#262147] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                name="fields[phone]"
                placeholder="Optional Phone"
                className="w-full border border-gray-600 bg-[#262147] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 mt-2 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "I’m Done Guessing With My Money"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-6">
            <h2 className="text-2xl font-bold text-yellow-400">
              ✅ You’re On The Waitlist!
            </h2>
            <p className="text-gray-300">
              We’ll notify you as soon as the challenge opens.
            </p>

            <button
              onClick={close}
              className="mt-4 bg-red-600 hover:bg-yellow-300 transition duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        )}

        <p className="text-center text-gray-300 text-sm mt-4">
          Limited seats • Private access • Early notification
        </p>
      </div>
    </div>
  );
};

export default FakeChallengeModal;
