import React from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Refund Eligibility" },
  { id: "process", label: "Refund Request Process" },
  { id: "conditions", label: "Refund Conditions" },
  { id: "non-refundable", label: "Non-Refundable" },
  { id: "processing", label: "Processing" },
  { id: "contact", label: "Contact" },
];

const RefundPolicy = () => {
  return (
    <div className="bg-[#0B0B0F] text-white px-6 md:px-12 lg:px-24 py-16 scroll-smooth pt-32 lg:pt-40">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-10" >

        {/* LEFT SIDEBAR (FIXED) */}
        <div className="hidden lg:block lg:col-span-1">
<div className="fixed top-40 w-56 border-l border-gray-700 pl-4 space-y-4 text-sm text-gray-400">            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-10">

          <div id="overview">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              REFUND POLICY — GUSTAV B. ACHU
            </h1>

            <p className="text-gray-400">Refund Policy</p>
            <p className="text-gray-400">Last modified: 16/04/2026</p>

            <p className="text-gray-300 mt-6">
              Thank you for choosing Gustav B. Achu. We are committed to delivering high-value, practical financial education.
            </p>
          </div>

          <div id="eligibility">
            <h2 className="text-2xl font-semibold mb-4">1.Refund Eligibility</h2>

            <p className="text-gray-300">
              Refunds for consultation and coaching services are typically considered in the following circumstances:
            </p>

            <p className="text-gray-300 mt-4">
              a. Cancellation Before the First Session: If you request a refund before the scheduled first consultation or coaching session, you are eligible for a full refund.
            </p>

            <p className="text-gray-300 mt-4">
              b. Unsatisfactory Service: If, after the first session, you are not satisfied with the service provided, you may request a refund. Your request will be considered on a case-by-case basis.
            </p>

            <p className="text-gray-300 mt-4">
              c. Refunds of Hard Goods: Hard goods must be returned to Gustav B Achu immediately, according to the instructions you will receive once contacting us. The item(s) must be unused and returned in the original packaging, in like-new, or re-sellable condition, as determined in Gustav B Achu sole, reasonable discretion.
            </p>
          </div>

          <div id="process">
            <h2 className="text-2xl font-semibold mb-4">2. Refund Request Process</h2>

            <p className="text-gray-300">
              To request a refund, please follow these steps:
            </p>

            <p className="text-gray-300 mt-4">
              a. Contact Us: Send an email to gustav@gustavachu.com within 7 days of the unsatisfactory session or your cancellation request. Include your full name, contact information, and a detailed explanation of the reason for your refund request.
            </p>

            <p className="text-gray-300 mt-4">
              b. Review Process: Our team will review your request and assess its eligibility based on the criteria mentioned in Section 1.
            </p>

            <p className="text-gray-300 mt-4">
              c. Refund Notification: We will notify you of our decision via email within  7 days of receiving your request. If your request is approved, we will initiate the refund process.
            </p>
          </div>

          <div id="conditions">
            <h2 className="text-2xl font-semibold mb-4">3. REFUND CONDITIONS</h2>

            <p className="text-gray-300">
              Refunds will only be issued if:
            </p>

            <p className="text-gray-300 mt-4">
              You participated in the training, material or session.
            </p>

            <p className="text-gray-300 mt-4">
              Your request is made within the 7-day window
            </p>

            <p className="text-gray-300 mt-4">
              We reserve the right to deny refunds where there is clear misuse or lack of participation.
            </p>
          </div>

          <div id="non-refundable">
            <h2 className="text-2xl font-semibold mb-4">4. NON-REFUNDABLE SITUATIONS</h2>

            <p className="text-gray-300">Refunds will not be issued if:</p>

            <p className="text-gray-300 mt-4">
              Refunds will not be issued for sessions that have already been conducted.
            </p>

            <p className="text-gray-300 mt-4">
              If you fail to attend scheduled sessions without providing advance notice, you will not be eligible for a refund.
            </p>

            <p className="text-gray-300 mt-4">
              Refunds will not be granted solely based on personal dissatisfaction without a valid reason.
            </p>

            <p className="text-gray-300 mt-4">You did not attend the training</p>
            <p className="text-gray-300 mt-2">You request a refund after 7 days</p>
            <p className="text-gray-300 mt-2">You fail to engage with the material</p>
          </div>

          <div id="processing">
            <h2 className="text-2xl font-semibold mb-4">5. PROCESSING</h2>

            <p className="text-gray-300">
              Approved refunds will be issued to your original payment method.
            </p>

            <p className="text-gray-300 mt-4">
              Please allow 5–10 business days for processing.
            </p>
          </div>

          <div id="contact">
            <h2 className="text-2xl font-semibold mb-4">6. CONTACT</h2>

            <p className="text-gray-300">If you have questions:</p>
            <p className="text-gray-300 mt-4">Gustav B. Achu</p>
            <p className="text-gray-300">Email: gustav@gustavachu.com</p>
            <p className="text-gray-300">Website: www.gustavachu.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;