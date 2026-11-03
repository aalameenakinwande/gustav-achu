import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaDownload } from "react-icons/fa";
import WorkBookImageOne from "../../images/bookImages/Book1.webp";
import WorkBookImageTwo from "../../images/workbookImages/The-1-hour-PayCheck.png";
import WorkBookImageThree from "../../images/workbookImages/iup.webp";
import ClarutyIndex from "../../images/workbookImages/calrity_index.jpeg";
import axios from "axios";
import paycheckPDF from "../pdf/1_Hour_Paycheck_Audit_by_Gustav_B_Achu.pdf";
import UltimatePDF from "../pdf/The_Ultimate_Investor_Playbook.pdf";

const resources = [
  {
    title: "The Seeker",
    imgSrc: WorkBookImageOne,
    hasPreview: true,
    previewLink: "/the-seeker",
    downloadLink:
      "https://drive.usercontent.google.com/u/0/uc?id=1DuInxcmRE0fQ4324sXypstYLhTkEfR8W&export=download",
    downloadText: "Download Free Chapter",
    fileName: "The_Seeker_Free_Chapter.pdf",
    modalTitle: "Get Your Free Chapter",
  },
  {
    title: "The 1-Hour Paycheck Audit",
    imgSrc: WorkBookImageTwo,
    hasPreview: false,
    downloadLink: paycheckPDF,
    downloadText: "Download Workbook",
    fileName: "1-Hour_Paycheck_Audit_Workbook.pdf",
    modalTitle: "Get Your Workbook",
  },
  {
    title: "The Ultimate Investor Playbook",
    imgSrc: WorkBookImageThree,
    hasPreview: false,
    downloadLink: UltimatePDF,
    downloadText: "Download Playbook",
    fileName: "The_Ultimate_Investor_Playbook.pdf",
    modalTitle: "Get Your Playbook",
  },
  {
    title: "The Wealth Clarity Index Assessment",
    imgSrc: ClarutyIndex,
    hasPreview: false,
    externalLink: "/wealth-clarity-quiz",
    downloadText: "Take Assessment",
  },
];

const ResourcesWorkbook = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedDownloadLink, setSelectedDownloadLink] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedModalTitle, setSelectedModalTitle] = useState("");
  const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);
  //  const [consent, setConsent] = useState(false);

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

 const handleSubmit = async (e) => {
  e.preventDefault();

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();

  // Validate name
  if (!trimmedName) {
    setMessage("Please enter your name.");
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    setMessage("Please enter a valid email address.");
    return;
  }

  // Validate phone
  if (!trimmedPhone) {
    setMessage("Please enter your phone number.");
    return;
  }

  // Validate consent
  // if (!consent) {
  //   setMessage("Please accept the consent checkbox.");
  //   return;
  // }

  setLoading(true);
  setMessage("");

  const subscriberData = {
    api_key: API_KEY,
    email: trimmedEmail,
    first_name: trimmedName,
    fields: {
      phone_number: trimmedPhone,
    },
  };

  try {
    const response = await axios.post(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      subscriberData
    );

    if (response.data.subscription) {
      setMessage("Successfully subscribed! Your download is starting...");

      // ===== DOWNLOAD THE FILE =====
      const link = document.createElement("a");
      link.href = selectedDownloadLink;
      link.download = selectedFileName || "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close the modal
      setShowModal(false);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      // setConsent(false);

      if (response.data.subscription) {
  console.log("Subscription successful!");
  alert("Subscription successful!");
}
    } else {
      setMessage("Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error("Subscription Error:", error);

    if (error.response?.data?.message) {
      setMessage(error.response.data.message);
    } else {
      setMessage("An error occurred. Please try again later.");
    }
  } finally {
    setLoading(false);

    setTimeout(() => {
      setMessage("");
    }, 5000);
  }
};
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-center text-xl font-semibold tracking-wide uppercase text-gray-800">
        Guides, Worksheets, Videos and Books
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {resource.hasPreview ? (
              <button
                onClick={() => navigate(resource.previewLink)}
                className="focus:outline-none"
              >
                <img
                  src={resource.imgSrc}
                  alt={resource.title}
                  className="w-full max-w-[250px] shadow-lg rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                />
              </button>
            ) : (
              <img
                src={resource.imgSrc}
                alt={resource.title}
                className="w-full max-w-[250px] h-[220px] lg:h-[350px] shadow-lg rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            )}

            <h3 className="mt-4 text-sm lg:text-lg font-semibold italic text-gray-900">
              {resource.title}
            </h3>

            {resource.hasPreview && (
              <button
                onClick={() => navigate(resource.previewLink)}
                className="mt-2 text-xs lg:text-sm font-semibold text-[#181349] flex items-center gap-1 hover:underline"
              >
                <FaEye className="text-sm" /> Preview
              </button>
            )}

            {resource.externalLink ? (
              <a
                href={resource.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs lg:text-sm font-semibold text-[#181349] flex items-center gap-1 hover:underline"
              >
                <FaEye className="text-sm" />
                {resource.downloadText}
              </a>
            ) : (
              <div
                onClick={() => {
                  setSelectedDownloadLink(resource.downloadLink);
                  setSelectedFileName(resource.fileName);
                  setSelectedModalTitle(resource.modalTitle);
                  setShowModal(true);
                }}
                className="mt-2 text-xs lg:text-sm font-semibold text-[#181349] flex items-center gap-1 hover:underline cursor-pointer"
              >
                <FaDownload className="text-sm" />
                {resource.downloadText}
              </div>
            )}
          </div>
        ))}
      </div>

     {showModal && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="relative w-full max-w-4xl max-h-[95vh] overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(0,0,0,.35)]">

      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-5">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#181349]">
            {selectedModalTitle}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Fill in your details to continue.
          </p>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          ✕
        </button>
      </div>

      {/* Scroll Area */}
      <div className="overflow-y-auto max-h-[calc(95vh-90px)] p-5 md:p-10">

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 md:p-10 space-y-8"
        >

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                First Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John"
                required
                className="w-full rounded-xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#BD9A35] focus:ring-4 focus:ring-[#BD9A35]/20"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@email.com"
                required
                className="w-full rounded-xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#BD9A35] focus:ring-4 focus:ring-[#BD9A35]/20"
              />
            </div>

          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 123-4567"
              required
              className="w-full rounded-xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#BD9A35] focus:ring-4 focus:ring-[#BD9A35]/20"
            />
          </div>

          {/* Consent */}
          {/* <div className="border-t border-white/10 pt-6">

            <label className="flex gap-4 text-sm leading-7 text-gray-400">

              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 h-5 w-5 shrink-0 accent-[#BD9A35]"
              />
  <span>
  I agree to receive SMS messages, phone calls, and emails from Gustav B.
  Achu about educational content, webinars, coaching, community updates,
  and promotions. Consent is not a condition of purchase. Message and data
  rates may apply. Message frequency varies. Reply <span className="font-bold text-red-500">STOP</span> to opt out of SMS
  at any time. By checking this box, I agree to the{" "}
  <a
    href="https://my.gustavachu.com/terms-and-conditions"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 underline hover:text-white"
  >
    Terms & Conditions
  </a>{" "}
  and{" "}
  <a
    href="https://my.gustavachu.com/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 underline hover:text-white"
  >
    Privacy Policy
  </a>
  .
</span>

            </label>

          </div> */}

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 rounded-xl border border-gray-600 py-4 text-white hover:bg-white/5 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-xl bg-[#BD9A35] py-4 font-semibold text-black hover:bg-[#a8872f] transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit & Download"}
            </button>

          </div>

        </form>

      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ResourcesWorkbook;