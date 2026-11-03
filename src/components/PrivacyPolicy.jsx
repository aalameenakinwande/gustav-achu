import React from "react";
import GustavLogo from "../../../../../Al-ameen/Gustav/gustav-achu/src/images/NewsletterImage/gustav-acho-logo.png";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "personal-info", label: "Personal Information" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "sms", label: "SMS / Text Message Privacy" },
  { id: "email", label: "Email Communications" },
  { id: "sharing", label: "Sharing Your Information" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "behavioral", label: "Behavioral Advertising" },
  { id: "do-not-track", label: "Do Not Track" },
  { id: "rights", label: "Your Rights" },
  { id: "legal-basis", label: "Legal Basis" },
  { id: "international", label: "International Transfers" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Data Security" },
  { id: "minors", label: "Minors" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white selection:bg-white selection:text-black">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <section
        id="overview"
        className="relative overflow-hidden border-b border-white/10"
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 md:pb-20 md:pt-40 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-white/40" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                Legal
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              PRIVACY POLICY — GUSTAV B. ACHU
            </h1>

            <div className="mt-8 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:items-center sm:gap-6">
              <span>Gustav B. Achu Privacy Policy</span>

              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

              <span>Last modified: October 1, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE SECTION NAVIGATION
      ===================================================== */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B0F]/95 backdrop-blur-xl lg:hidden">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-4 scrollbar-hide">
          <div className="flex min-w-max gap-6">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-medium uppercase tracking-[0.12em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-16 sm:px-8 md:py-20 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-28">
        {/* ===================================================
            DESKTOP SIDEBAR
        =================================================== */}
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32">
            <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
              Contents
            </div>

            <nav className="border-l border-white/10">
              {sections.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative block py-2 pl-5 text-sm text-white/35 transition-colors duration-300 hover:text-white"
                >
                  <span className="mr-3 text-[10px] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}

                  <span className="absolute left-[-1px] top-0 h-full w-px origin-top scale-y-0 bg-white transition-transform duration-300 group-hover:scale-y-100" />
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ===================================================
            POLICY
        =================================================== */}
        <article className="lg:col-span-8 lg:col-start-5">
          <div className="max-w-3xl space-y-20 md:space-y-24">

            {/* =================================================
                INTRO
            ================================================= */}
            <section id="overview" className="scroll-mt-28">
               <img
                      src={GustavLogo}
                      alt="Gustav B. Achu"
                      className="h-full w-full object-contain"
                    />
                    
              <p className="text-base leading-8 text-white/60 md:text-lg md:leading-9">
                This Privacy Policy explains how Gustav B. Achu
                (“Gustav B. Achu,” “we,” “us,” or “our”) collects, uses,
                protects, and shares personal information when you visit{" "}
                <a
                  href="http://www.gustavachu.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  www.gustavachu.com
                </a>{" "}
                (the “Site”), submit information through our forms, register
                for events or webinars, join our newsletter, purchase our
                products or services, or otherwise interact with us.
              </p>

              <p className="policy-text mt-6">
                By using the Site or submitting your information, you
                acknowledge the practices described in this Privacy Policy.
              </p>
            </section>

            {/* =================================================
                PERSONAL INFORMATION
            ================================================= */}
            <section id="personal-info" className="scroll-mt-28">
              <SectionHeading>
                PERSONAL INFORMATION WE COLLECT
              </SectionHeading>

              <div className="space-y-6">
                <p className="policy-text">
                  When you visit the Site, we may automatically collect
                  certain information about your device, including:
                </p>

                <PolicyList
                  items={[
                    "Web browser type",
                    "IP address",
                    "Time zone",
                    "Cookies installed on your device",
                    "Device type",
                    "Pages viewed",
                    "Links clicked",
                    "How you interact with the Site",
                    "Referring websites or search terms",
                  ]}
                />

                <p className="policy-text">
                  We refer to this as <strong>Device Information.</strong>
                </p>

                <div className="pt-4">
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white">
                    Technologies We Use
                  </h3>

                  <PolicyList
                    items={[
                      <>
                        <strong>Cookies:</strong> Data files stored on your
                        device.
                      </>,
                      <>
                        <strong>Log files:</strong> Information such as IP
                        addresses, browser type, timestamps, and activity.
                      </>,
                      <>
                        <strong>Pixels and tags:</strong> Including Meta Pixel
                        and similar technologies used for analytics and
                        advertising.
                      </>,
                      <>
                        <strong>Google Analytics:</strong> Used to understand
                        how visitors interact with our Site and improve our
                        services.
                      </>,
                    ]}
                  />
                </div>

                <div className="pt-8">
                  <h3 className="mb-6 text-2xl font-medium tracking-tight text-white">
                    Information You Provide
                  </h3>

                  <p className="policy-text">
                    When you register for a webinar, join our community,
                    complete an assessment, download a resource, make a
                    purchase, or submit a form, we may collect:
                  </p>

                  <PolicyList
                    items={[
                      "Name",
                      "Email address",
                      "Phone number",
                      "Billing information",
                      "Shipping information, where applicable",
                      "Payment information, which is processed by third-party payment providers",
                      "Information you voluntarily provide through forms, surveys, assessments, or other communications",
                    ]}
                  />

                  <p className="policy-text">
                    We refer to this information as{" "}
                    <strong>Personal Information.</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                HOW WE USE
            ================================================= */}
            <section id="how-we-use" className="scroll-mt-28">
              <SectionHeading>HOW WE USE YOUR INFORMATION</SectionHeading>

              <p className="policy-text mb-6">
                We may use your Personal Information to:
              </p>

              <PolicyList
                items={[
                  "Process transactions and deliver products or services",
                  "Provide access to resources, communities, webinars, and events",
                  "Send confirmations, reminders, and service-related updates",
                  "Provide customer support",
                  "Respond to questions and requests",
                  "Send marketing emails where you have provided appropriate consent",
                  "Send SMS/text messages where you have provided appropriate consent",
                  "Send information about webinars, educational content, community updates, offers, and promotions where applicable consent has been provided",
                  "Manage and improve our advertising campaigns",
                  "Analyze website traffic and user behavior",
                  "Improve our Site, products, services, and customer experience",
                  "Detect and prevent fraud, abuse, or unauthorized activity",
                  "Comply with applicable legal obligations",
                ]}
              />

              <p className="policy-text mt-8">
                We use Device Information to help us identify potential risks
                and fraud and to improve and optimize the Site, including by
                analyzing how visitors browse and interact with the Site and
                measuring the performance of our marketing and advertising.
              </p>
            </section>

            {/* =================================================
                SMS
            ================================================= */}
            <section id="sms" className="scroll-mt-28">
              <SectionHeading>
                SMS / TEXT MESSAGE PRIVACY
              </SectionHeading>

              <p className="policy-text">
                If you provide your phone number and separately consent to
                receive SMS/text messages from Gustav B. Achu, we may use your
                phone number to send the types of messages you specifically
                consented to receive.
              </p>

              <p className="policy-text mt-6">
                These messages may include:
              </p>

              <PolicyList
                items={[
                  "Community updates",
                  "Educational content",
                  "Event and webinar reminders",
                  "Service-related notifications",
                  "Promotional messages",
                  "Offers and information about Gustav B. Achu's products and services",
                ]}
              />

              <p className="policy-text mt-8">
                The type of messages you receive will depend on the consent
                you provide through our opt-in forms.
              </p>

              <div className="mt-10">
                <h3 className="mb-5 text-2xl font-medium tracking-tight text-white">
                  SMS Consent
                </h3>

                <p className="policy-text">
                  SMS consent is collected through forms or other approved
                  opt-in methods where you are given a clear description of
                  the messages you will receive.
                </p>

                <p className="policy-text mt-6">
                  Where applicable, we use separate consent options for
                  informational messages and marketing or promotional
                  messages.
                </p>

                <p className="policy-text mt-6">
                  Consent to receive marketing text messages is{" "}
                  <strong>
                    not required as a condition of purchasing any product or
                    service.
                  </strong>
                </p>

                <p className="policy-text mt-6">
                  You can withdraw your SMS consent at any time by replying{" "}
                  <strong>STOP</strong> to a message. You can also reply{" "}
                  <strong>HELP</strong> for assistance.
                </p>

                <p className="policy-text mt-6">
                  Message frequency varies. Message and data rates may apply.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="mb-5 text-2xl font-medium tracking-tight text-white">
                  Mobile Information Sharing
                </h3>

                <p className="policy-text">
                  <strong>
                    We do not sell, rent, or share your mobile phone number,
                    SMS opt-in information, or mobile information with third
                    parties or affiliates for their own marketing or
                    promotional purposes.
                  </strong>
                </p>

                <p className="policy-text mt-6">
                  We may share phone numbers and related information with
                  service providers that process information on our behalf
                  when necessary to provide requested services, operate our
                  messaging systems, process transactions, provide customer
                  support, or comply with legal requirements.
                </p>

                <p className="policy-text mt-6">
                  These service providers are not authorized to use your
                  mobile information for their own independent marketing
                  purposes.
                </p>

                <p className="policy-text mt-6">
                  Your SMS consent information will not be used for purposes
                  unrelated to the messaging program for which you provided
                  consent.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="mb-5 text-2xl font-medium tracking-tight text-white">
                  SMS Data Protection
                </h3>

                <p className="policy-text">
                  We take reasonable administrative, technical, and
                  organizational measures to protect phone numbers, SMS
                  consent records, and other personal information against
                  unauthorized access, disclosure, alteration, or destruction.
                </p>

                <p className="policy-text mt-6">
                  We maintain records relating to SMS consent, including
                  information about how and when consent was collected, where
                  reasonably necessary to demonstrate compliance and manage
                  your communication preferences.
                </p>
              </div>
            </section>

            {/* =================================================
                EMAIL
            ================================================= */}
            <section id="email" className="scroll-mt-28">
              <SectionHeading>EMAIL COMMUNICATIONS</SectionHeading>

              <p className="policy-text">
                If you provide your email address and consent to receive
                marketing communications, we may send you educational content,
                newsletters, webinar information, community updates, offers,
                and promotional communications.
              </p>

              <p className="policy-text mt-6">
                You can unsubscribe from marketing emails at any time by
                clicking the unsubscribe link included in our emails.
              </p>

              <p className="policy-text mt-6">
                You may continue to receive certain non-marketing or
                service-related emails when necessary to provide services you
                have requested.
              </p>
            </section>

            {/* =================================================
                SHARING
            ================================================= */}
            <section id="sharing" className="scroll-mt-28">
              <SectionHeading>SHARING YOUR INFORMATION</SectionHeading>

              <p className="policy-text mb-6">
                We may share Personal Information with trusted service
                providers that help us operate our business, including:
              </p>

              <PolicyList
                items={[
                  <>
                    <strong>Stripe</strong> for payment processing
                  </>,
                  "Email marketing and communication platforms",
                  "SMS and messaging service providers",
                  "Google Analytics",
                  "Meta and other advertising platforms",
                  "Website hosting and technology providers",
                  "Customer support and business software providers",
                ]}
              />

              <p className="policy-text mt-8">
                These providers receive only the information reasonably
                necessary to perform services on our behalf.
              </p>

              <p className="policy-text mt-6">
                <strong>We do not sell your personal information.</strong>
              </p>

              <p className="policy-text mt-6">
                <strong>
                  We do not share or sell mobile phone numbers, SMS opt-in
                  information, or mobile information with third parties or
                  affiliates for their own marketing or promotional purposes.
                </strong>
              </p>

              <p className="policy-text mt-6">
                We may also disclose information when required by law, legal
                process, court order, or governmental request, or when
                necessary to protect our rights, users, or business.
              </p>
            </section>

            {/* =================================================
                COOKIES
            ================================================= */}
            <section id="cookies" className="scroll-mt-28">
              <SectionHeading>
                COOKIES AND TRACKING TECHNOLOGIES
              </SectionHeading>

              <p className="policy-text mb-6">
                We use cookies, pixels, tags, analytics tools, and similar
                technologies to:
              </p>

              <PolicyList
                items={[
                  "Operate and secure the Site",
                  "Understand how visitors use the Site",
                  "Measure advertising performance",
                  "Improve our content and services",
                  "Deliver and measure relevant advertising",
                ]}
              />

              <p className="policy-text mt-8">
                You can adjust cookie settings through your browser.
                Disabling certain cookies may affect some Site functionality.
              </p>
            </section>

            {/* =================================================
                BEHAVIORAL ADVERTISING
            ================================================= */}
            <section id="behavioral" className="scroll-mt-28">
              <SectionHeading>BEHAVIORAL ADVERTISING</SectionHeading>

              <p className="policy-text">
                We may use information collected through cookies, pixels,
                analytics tools, and similar technologies to measure and
                improve advertising campaigns.
              </p>

              <p className="policy-text mt-6">
                Our advertising partners may include platforms such as Meta
                and Google.
              </p>

              <p className="policy-text mt-6">
                You may manage certain advertising preferences through the
                relevant advertising platform.
              </p>
            </section>

            {/* =================================================
                DO NOT TRACK
            ================================================= */}
            <section id="do-not-track" className="scroll-mt-28">
              <SectionHeading>DO NOT TRACK</SectionHeading>

              <p className="policy-text">
                Some browsers provide a “Do Not Track” setting. Our Site does
                not currently respond to Do Not Track signals in a standardized
                manner.
              </p>
            </section>

            {/* =================================================
                RIGHTS
            ================================================= */}
            <section id="rights" className="scroll-mt-28">
              <SectionHeading>YOUR RIGHTS</SectionHeading>

              <p className="policy-text mb-6">
                Depending on where you live and applicable law, you may have
                rights regarding your Personal Information, including the
                right to:
              </p>

              <PolicyList
                items={[
                  "Access the personal information we hold about you",
                  "Request correction of inaccurate information",
                  "Request deletion of your personal information",
                  "Object to or restrict certain processing",
                  "Withdraw consent for certain communications",
                  "Unsubscribe from marketing communications",
                ]}
              />

              <p className="policy-text mt-8">
                To exercise applicable rights, contact:
              </p>

              <p className="mt-5 text-lg text-white">
                <strong>Gustav B. Achu</strong>
              </p>

              <p className="mt-2 text-base text-white/60">
                Email:{" "}
                <a
                  href="mailto:gustav@gustavachu.com"
                  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  gustav@gustavachu.com
                </a>
              </p>
            </section>

            {/* =================================================
                LEGAL BASIS
            ================================================= */}
            <section id="legal-basis" className="scroll-mt-28">
              <SectionHeading>LEGAL BASIS FOR PROCESSING</SectionHeading>

              <p className="policy-text mb-6">
                Where applicable, we process Personal Information based on one
                or more of the following:
              </p>

              <PolicyList
                items={[
                  "Your consent",
                  "Performance of a contract or provision of requested services",
                  "Compliance with legal obligations",
                  "Legitimate business interests, where permitted by applicable law",
                ]}
              />

              <p className="policy-text mt-8">
                Where processing is based on consent, you may withdraw that
                consent subject to applicable legal or operational
                requirements.
              </p>
            </section>

            {/* =================================================
                INTERNATIONAL
            ================================================= */}
            <section id="international" className="scroll-mt-28">
              <SectionHeading>INTERNATIONAL DATA TRANSFERS</SectionHeading>

              <p className="policy-text">
                Your information may be transferred to and processed in
                countries outside your country of residence, including the
                United States and Canada.
              </p>

              <p className="policy-text mt-6">
                We use third-party service providers to operate our business,
                including payment processors, analytics providers, advertising
                platforms, email platforms, and messaging providers.
              </p>

              <p className="policy-text mt-6">
                We take reasonable measures to protect your Personal
                Information when it is transferred or processed
                internationally.
              </p>
            </section>

            {/* =================================================
                RETENTION
            ================================================= */}
            <section id="retention" className="scroll-mt-28">
              <SectionHeading>DATA RETENTION</SectionHeading>

              <p className="policy-text">
                We retain Personal Information for as long as reasonably
                necessary to provide our services, maintain business and
                transaction records, comply with legal obligations, resolve
                disputes, enforce agreements, and protect our legitimate
                business interests.
              </p>

              <p className="policy-text mt-6">
                Where applicable, you may request deletion of your Personal
                Information by contacting us.
              </p>
            </section>

            {/* =================================================
                SECURITY
            ================================================= */}
            <section id="security" className="scroll-mt-28">
              <SectionHeading>DATA SECURITY</SectionHeading>

              <p className="policy-text">
                We use reasonable administrative, technical, and organizational
                safeguards designed to protect Personal Information from
                unauthorized access, use, disclosure, alteration, or
                destruction.
              </p>

              <p className="policy-text mt-6">
                However, no method of transmitting or storing information
                electronically is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* =================================================
                MINORS
            ================================================= */}
            <section id="minors" className="scroll-mt-28">
              <SectionHeading>MINORS</SectionHeading>

              <p className="policy-text">
                The Site is not intended for individuals under the age of 18.
              </p>

              <p className="policy-text mt-6">
                We do not knowingly collect Personal Information from
                individuals under 18.
              </p>
            </section>

            {/* =================================================
                CHANGES
            ================================================= */}
            <section id="changes" className="scroll-mt-28">
              <SectionHeading>
                CHANGES TO THIS PRIVACY POLICY
              </SectionHeading>

              <p className="policy-text">
                We may update this Privacy Policy periodically to reflect
                changes to our practices, services, technology, or legal
                requirements.
              </p>

              <p className="policy-text mt-6">
                When we make changes, we will update the “Last Modified” date
                at the top of this Privacy Policy.
              </p>
            </section>

            {/* =================================================
                CONTACT
            ================================================= */}
            <section id="contact" className="scroll-mt-28">
              <SectionHeading>CONTACT US</SectionHeading>

              <p className="policy-text">
                If you have questions about this Privacy Policy, your Personal
                Information, or your communication preferences, contact:
              </p>

              <p className="mt-6 text-lg text-white">
                <strong>Gustav B. Achu</strong>
              </p>

              <p className="mt-2 text-base text-white/60">
                Email:{" "}
                <a
                  href="mailto:gustav@gustavachu.com"
                  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  gustav@gustavachu.com
                </a>
              </p>

              <p className="mt-2 text-base text-white/60">
                Website:{" "}
                <a
                  href="http://www.gustavachu.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  www.gustavachu.com
                </a>
              </p>
            </section>

          </div>
        </article>
      </div>
    </main>
  );
};

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

const SectionHeading = ({ children }) => {
  return (
    <div className="mb-7">
      <div className="mb-4 h-px w-10 bg-white/40" />

      <h2 className="text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl">
        {children}
      </h2>
    </div>
  );
};

const PolicyList = ({ items }) => {
  return (
    <ul className="space-y-3 pl-5 text-base leading-8 text-white/60 md:text-[17px]">
      {items.map((item, index) => (
        <li key={index} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PrivacyPolicy;