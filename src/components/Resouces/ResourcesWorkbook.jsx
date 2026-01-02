import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaDownload } from "react-icons/fa";
import WorkBookImageOne from "../../images/bookImages/Book1.webp";
import WorkBookImageTwo from "../../images/workbookImages/The-1-hour-PayCheck.png";
import WorkBookImageThree from "../../images/workbookImages/iup.webp";
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

  const FORM_ID = "7070892";
  const API_KEY = "orcj11jDI14VkybpDd91mA";

  const handleSubmit = async (e) => {
  e.preventDefault();

  const subscriberData = {
    api_key: API_KEY,
    email,
    first_name: name,
    fields: {
      phone_number: phone,
    },
  };

  try {
    const response = await axios.post(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      subscriberData
    );

    if (response.data.subscription) {
      setMessage("Successfully subscribed! Downloading...");

      // Always force download
      const link = document.createElement("a");
      link.href = selectedDownloadLink;
      link.setAttribute("download", selectedFileName || "download.pdf");
      link.setAttribute("target", "_blank"); // hint for browsers
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setName("");
      setEmail("");
      setPhone("");

      setTimeout(() => {
        setShowModal(false);
        navigate("/events");
      }, 1500);
    } else {
      setMessage("Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    setMessage("An error occurred. Please try again later.");
  }

  setTimeout(() => {
    setMessage("");
  }, 9000);
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
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-center text-[#181349]">
              {selectedModalTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                name="number"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setPhone(value);
                  }
                }}
                placeholder="Phone Number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-[#181349] text-white py-2 rounded hover:bg-[#322f70] transition"
              >
                Submit & Download
              </button>
              {message && (
                <p className="text-sm text-center text-green-600 mt-2">
                  {message}
                </p>
              )}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full text-sm text-red-500 mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesWorkbook;
