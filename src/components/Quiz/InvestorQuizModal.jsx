import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if modal has been shown before
    const hasSeenModal = localStorage.getItem("hasSeenInvestorModal");

    if (!hasSeenModal) {
      // Show modal after 1 second
      const timer = setTimeout(() => setIsOpen(true), 1000);
      localStorage.setItem("hasSeenInvestorModal", "true");
      return () => clearTimeout(timer);
    }
  }, []);

  // Automatically trigger download (or navigation) after 5 seconds
  useEffect(() => {
    let autoDownloadTimer;
    if (isOpen) {
      autoDownloadTimer = setTimeout(() => {
        handleNavigate();
      }, 5000); // 5 seconds delay
    }
    return () => clearTimeout(autoDownloadTimer);
  }, [isOpen]);

  const handleNavigate = () => {
    setIsOpen(false);
    setTimeout(() => {
      // 👉 You can trigger file download here if needed instead of navigation
      navigate("/quiz-investortype");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl shadow-2xl p-10 w-[90%] max-w-xl text-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-xl xl:text-3xl font-bold text-gray-800 mb-3">
              Want to know what kind of investor you are?
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-lg">
              Take this quick quiz to discover your investor type and download a
              free playbook designed to help you make smarter, more confident
              investment decisions.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleNavigate}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm lg:text-lg"
            >
              Take the Quiz
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalPopup;
