
import React from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Refund Eligibility" },
  { id: "process", label: "Refund Request Process" },
  { id: "conditions", label: "Refund Conditions" },
  { id: "non-refundable", label: "Non-Refundable Situations" },
  { id: "processing", label: "Processing" },
  { id: "contact", label: "Contact" },
];

const RefundPolicy = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* =====================================================
          HERO / HEADER
      ===================================================== */}
      <section
        id="overview"
        className="relative overflow-hidden border-b border-white/10"
      >
        {/* Grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40 lg:px-12">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/40" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                Legal
              </span>
            </div>

            <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              REFUND POLICY — GUSTAV B. ACHU
            </h1>

            <div className="mt-8 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:items-center sm:gap-5">
              <span>Refund Policy</span>

              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

              <span>Last modified: 16/04/2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/95 backdrop-blur-xl lg:hidden">
        <div className="overflow-x-auto px-6 py-4 scrollbar-hide">
          <div className="flex min-w-max gap-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 transition hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-28">
        {/* ===================================================
            DESKTOP SIDEBAR
        =================================================== */}
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/25">
              Contents
            </p>

            <nav className="border-l border-white/10">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group relative flex items-start py-2.5 pl-5 text-xs leading-5 text-white/35 transition hover:text-white"
                >
                  <span className="mr-3 shrink-0 text-[9px] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{section.label}</span>

                  <span className="absolute left-[-1px] top-0 h-full w-px origin-top scale-y-0 bg-white transition-transform duration-300 group-hover:scale-y-100" />
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ===================================================
            POLICY CONTENT
        =================================================== */}
        <article className="lg:col-span-8 lg:col-start-5">
          <div className="max-w-3xl space-y-20 md:space-y-24">

            {/* =================================================
                INTRO
            ================================================= */}
            <section>
              <p className="text-base leading-8 text-white/60 md:text-lg md:leading-9">
                Thank you for choosing Gustav B. Achu.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60 md:text-lg md:leading-9">
                We are committed to delivering high-value, practical financial
                education.
              </p>
            </section>

            {/* =================================================
                1. REFUND ELIGIBILITY
            ================================================= */}
            <section id="eligibility" className="scroll-mt-28">
              <SectionHeading>1.Refund Eligibility</SectionHeading>

              <p className="policy-text">
                Refunds for consultation and coaching services are typically
                considered in the following circumstances:
              </p>

              <div className="mt-8 space-y-7">
                <PolicyParagraph>
                  <strong>
                    a. Cancellation Before the First Session:
                  </strong>{" "}
                  If you request a refund before the scheduled first
                  consultation or coaching session, you are eligible for a full
                  refund.
                </PolicyParagraph>

                <PolicyParagraph>
                  <strong>b. Unsatisfactory Service:</strong> If, after the
                  first session, you are not satisfied with the service
                  provided, you may request a refund. Your request will be
                  considered on a case-by-case basis.
                </PolicyParagraph>

                <PolicyParagraph>
                  <strong>c. Refunds of Hard Goods:</strong> Hard goods must be
                  returned to Gustav B Achu immediately, according to the
                  instructions you will receive once contacting us. The item(s)
                  must be unused and returned in the original packaging, in
                  like-new, or re-sellable condition, as determined in Gustav B
                  Achu sole, reasonable discretion.
                </PolicyParagraph>
              </div>
            </section>

            {/* =================================================
                2. REFUND REQUEST PROCESS
            ================================================= */}
            <section id="process" className="scroll-mt-28">
              <SectionHeading>2. Refund Request Process</SectionHeading>

              <p className="policy-text">
                To request a refund, please follow these steps:
              </p>

              <div className="mt-8 space-y-7">
                <PolicyParagraph>
                  <strong>a. Contact Us:</strong> Send an email to{" "}
                  <a
                    href="mailto:gustav@gustavachu.com"
                    className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                  >
                    gustav@gustavachu.com
                  </a>{" "}
                  within 7 days of the unsatisfactory session or your
                  cancellation request. Include your full name, contact
                  information, and a detailed explanation of the reason for your
                  refund request.
                </PolicyParagraph>

                <PolicyParagraph>
                  <strong>b. Review Process:</strong> Our team will review your
                  request and assess its eligibility based on the criteria
                  mentioned in Section 1.
                </PolicyParagraph>

                <PolicyParagraph>
                  <strong>c. Refund Notification:</strong> We will notify you of
                  our decision via email within 7 days of receiving your
                  request. If your request is approved, we will initiate the
                  refund process.
                </PolicyParagraph>
              </div>
            </section>

            {/* =================================================
                3. REFUND CONDITIONS
            ================================================= */}
            <section id="conditions" className="scroll-mt-28">
              <SectionHeading>3. REFUND CONDITIONS</SectionHeading>

              <p className="policy-text">
                Refunds will only be issued if:
              </p>

              <ul className="mt-6 space-y-4 pl-5 text-base leading-8 text-white/60 md:text-[17px]">
                <li className="list-disc">
                  You participated in the training, material or session.
                </li>

                <li className="list-disc">
                  Your request is made within the 7-day window
                </li>
              </ul>

              <p className="policy-text mt-8">
                We reserve the right to deny refunds where there is clear misuse
                or lack of participation.
              </p>
            </section>

            {/* =================================================
                4. NON-REFUNDABLE SITUATIONS
            ================================================= */}
            <section id="non-refundable" className="scroll-mt-28">
              <SectionHeading>4. NON-REFUNDABLE SITUATIONS</SectionHeading>

              <p className="policy-text">
                Refunds will not be issued if:
              </p>

              <ul className="mt-6 space-y-4 pl-5 text-base leading-8 text-white/60 md:text-[17px]">
                <li className="list-disc">
                  Refunds will not be issued for sessions that have already
                  been conducted.
                </li>

                <li className="list-disc">
                  If you fail to attend scheduled sessions without providing
                  advance notice, you will not be eligible for a refund.
                </li>

                <li className="list-disc">
                  Refunds will not be granted solely based on personal
                  dissatisfaction without a valid reason.
                </li>

                <li className="list-disc">You did not attend the training</li>

                <li className="list-disc">
                  You request a refund after 7 days
                </li>

                <li className="list-disc">
                  You fail to engage with the material
                </li>
              </ul>
            </section>

            {/* =================================================
                5. PROCESSING
            ================================================= */}
            <section id="processing" className="scroll-mt-28">
              <SectionHeading>5. PROCESSING</SectionHeading>

              <p className="policy-text">
                Approved refunds will be issued to your original payment
                method.
              </p>

              <p className="policy-text mt-5">
                Please allow <strong>5–10 business days</strong> for processing.
              </p>
            </section>

            {/* =================================================
                6. CONTACT
            ================================================= */}
            <section id="contact" className="scroll-mt-28">
              <SectionHeading>6. CONTACT</SectionHeading>

              <p className="policy-text">If you have questions:</p>

              <p className="mt-6 text-lg text-white">
                <strong>Gustav B. Achu</strong>
              </p>

              <p className="mt-3 text-base text-white/60">
                Email:{" "}
                <a
                  href="mailto:gustav@gustavachu.com"
                  className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  gustav@gustavachu.com
                </a>
              </p>

              <p className="mt-3 text-base text-white/60">
                Website:{" "}
                <a
                  href="http://www.gustavachu.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  www.gustavachu.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>

      {/* =====================================================
          LOCAL STYLES
      ===================================================== */}
      <style>{`
        .policy-text {
          color: rgba(255, 255, 255, 0.60);
          font-size: 1rem;
          line-height: 2rem;
        }

        .policy-text strong {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .policy-text {
            font-size: 1.0625rem;
            line-height: 2rem;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: white;
          color: #0B0B0F;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
};

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({ children }) => {
  return (
    <div className="mb-8">
      <div className="mb-5 h-px w-10 bg-white/40" />

      <h2 className="text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl md:text-[2.1rem]">
        {children}
      </h2>
    </div>
  );
};

/* =========================================================
   POLICY PARAGRAPH
========================================================= */

const PolicyParagraph = ({ children }) => {
  return (
    <p className="text-base leading-8 text-white/60 md:text-[17px] md:leading-8">
      {children}
    </p>
  );
};

export default RefundPolicy;
