import React from "react";
import GustavLogo from "../../../../../Al-ameen/Gustav/gustav-achu/src/images/NewsletterImage/gustav-acho-logo.png";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Services Offered" },
  { id: "registration", label: "User Registration" },
  { id: "responsibilities", label: "User Responsibilities" },
  { id: "payment", label: "Payment Terms" },
  { id: "ip", label: "Intellectual Property" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "sms", label: "SMS Messaging Program" },
  { id: "sms-consent", label: "SMS Consent" },
  { id: "sms-frequency", label: "Message Frequency" },
  { id: "sms-rates", label: "Message & Data Rates" },
  { id: "sms-stop", label: "How to Stop Messages" },
  { id: "sms-help", label: "How to Get Help" },
  { id: "sms-carriers", label: "Supported Carriers" },
  { id: "sms-changes", label: "Changes to SMS Program" },
  { id: "dispute", label: "Dispute Resolution" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to Terms" },
  { id: "law", label: "Governing Law" },
  { id: "contact", label: "Contact Information" },
];

const SectionHeading = ({ number, children }) => {
  return (
    <div className="mb-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-white/40" />

        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
          {number}
        </span>
      </div>

      <h2 className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
        {children}
      </h2>
    </div>
  );
};

const PolicyParagraph = ({ children, className = "" }) => {
  return (
    <p
      className={`text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8 ${className}`}
    >
      {children}
    </p>
  );
};

const PolicyList = ({ items }) => {
  return (
    <ul className="mt-6 space-y-4 border-l border-white/[0.08] pl-5 sm:pl-6">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-4 text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8"
        >
          <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-white/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const ContactCard = () => {
  return (
    <div className="mt-8 border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8">
      <p className="text-base font-medium text-white">
        Gustav B. Achu
      </p>

      <p className="mt-3 text-sm text-white/50">
        Email:{" "}
        <a
          href="mailto:gustav@gustavachu.com"
          className="text-white/70 transition-colors hover:text-white"
        >
          gustav@gustavachu.com
        </a>
      </p>

      <p className="mt-2 text-sm text-white/50">
        Website:{" "}
        <a
          href="http://www.gustavachu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 transition-colors hover:text-white"
        >
          www.gustavachu.com
        </a>
      </p>
    </div>
  );
};

const TermsofUse = () => {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0F] text-white selection:bg-white selection:text-black">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="overview"
        className="relative overflow-hidden border-b border-white/[0.08]"
      >
        {/* Grid background */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-white/[0.025]
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="max-w-5xl">

            {/* Gustav Logo */}
            <div className="mb-10 flex items-center gap-5">
              
              <div>
                <p className="text-sm font-medium text-white sm:text-base">
                  Gustav B. Achu
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/35 sm:text-xs">
                  Terms & Legal
                </p>
              </div>
            </div>

            {/* Legal label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                Legal
              </span>
            </div>

            <h1
              className="
                max-w-5xl
                text-4xl
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              TERMS & CONDITIONS
              <span className="block text-white/40">
                — GUSTAV B. ACHU
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:items-center sm:gap-5">
              <span>Terms & Conditions of Use</span>

              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

              <span>Last modified: October 1, 2026</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE TABLE OF CONTENTS
      ===================================================== */}
      <div className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0B0B0F]/95 backdrop-blur-md lg:hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max gap-1 px-5 py-3">
            {sections.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  border
                  border-white/[0.08]
                  px-3
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.03]
                  hover:text-white
                "
              >
                <span className="text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT AREA
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">

          {/* =================================================
              DESKTOP SIDEBAR
          ================================================= */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32">
              <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
                Contents
              </div>

              <nav className="border-l border-white/[0.12]">
                {sections.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="
                      group
                      flex
                      items-start
                      gap-3
                      border-l
                      border-transparent
                      py-2
                      pl-4
                      text-xs
                      leading-5
                      text-white/35
                      transition-all
                      duration-300
                      hover:border-white/50
                      hover:text-white
                    "
                  >
                    <span className="mt-[1px] font-mono text-[9px] text-white/20 transition-colors group-hover:text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}
          <article className="lg:col-span-8 lg:col-start-5">
            <div className="space-y-20 md:space-y-24">

              {/* =================================================
                  OVERVIEW
              ================================================= */}
              <section
                id="overview-content"
                className="scroll-mt-28"
              >
                <div className="border-b border-white/[0.08] pb-10">
                  <img
                  src={GustavLogo}
                  alt="Gustav B. Achu"
                  className="h-full w-full object-contain"
                />
                  <PolicyParagraph className="max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                    These Terms and Conditions govern your use of{" "}
                    <a
                      href="http://www.gustavachu.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
                    >
                      www.gustavachu.com
                    </a>{" "}
                    and all related services provided by Gustav B. Achu.
                  </PolicyParagraph>

                  <PolicyParagraph className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                    By accessing or using this website or any of our services,
                    you agree to these Terms and Conditions.
                  </PolicyParagraph>
                </div>
              </section>

              {/* =================================================
                  1. ACCEPTANCE
              ================================================= */}
              <section id="acceptance" className="scroll-mt-28">
                <SectionHeading number="01">
                  Acceptance of Terms
                </SectionHeading>

                <PolicyParagraph>
                  By using our Website and services, you acknowledge that you
                  have read, understood, and agree to comply with these Terms
                  and any other policies or guidelines referenced herein.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  2. SERVICES
              ================================================= */}
              <section id="services" className="scroll-mt-28">
                <SectionHeading number="02">
                  Services Offered
                </SectionHeading>

                <PolicyParagraph>
                  Gustav B. Achu provides financial education, wealth-building
                  resources, educational content, community access, events,
                  assessments, consultations, and related services through the
                  Website and other communication channels.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  The specific services, pricing, features, and deliverables
                  may vary and are described on the applicable pages of our
                  Website.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  3. REGISTRATION
              ================================================= */}
              <section id="registration" className="scroll-mt-28">
                <SectionHeading number="03">
                  User Registration
                </SectionHeading>

                <PolicyParagraph>
                  Some areas of our Website and services may require
                  registration. When creating an account or submitting your
                  information, you agree to provide accurate and current
                  information.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  You are responsible for maintaining the confidentiality of
                  your account information and for activities associated with
                  your account.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  4. RESPONSIBILITIES
              ================================================= */}
              <section id="responsibilities" className="scroll-mt-28">
                <SectionHeading number="04">
                  User Responsibilities
                </SectionHeading>

                <PolicyParagraph>
                  You agree to use our Website and services lawfully and
                  responsibly.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  Prohibited activities include, but are not limited to:
                </PolicyParagraph>

                <PolicyList
                  items={[
                    "Violating applicable laws or regulations.",
                    "Infringing upon the intellectual property rights of others.",
                    "Transmitting harmful software, viruses, or malicious code.",
                    "Engaging in unauthorized automated data collection or scraping.",
                    "Providing false or misleading information.",
                    "Using our services for unlawful or fraudulent purposes.",
                  ]}
                />
              </section>

              {/* =================================================
                  5. PAYMENT
              ================================================= */}
              <section id="payment" className="scroll-mt-28">
                <SectionHeading number="05">
                  Payment Terms
                </SectionHeading>

                <PolicyParagraph>
                  If our services are subject to fees, you agree to pay all
                  applicable charges as described on the relevant Website or
                  service page.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  Payments may be processed through third-party payment
                  providers. Refund, cancellation, and other applicable payment
                  policies will be provided on the relevant service or purchase
                  page.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  6. IP
              ================================================= */}
              <section id="ip" className="scroll-mt-28">
                <SectionHeading number="06">
                  Intellectual Property
                </SectionHeading>

                <PolicyParagraph>
                  All content on our Website, including text, graphics,
                  videos, designs, logos, educational materials, and other
                  materials, is protected by applicable intellectual property
                  laws.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  You may not reproduce, distribute, modify, sell, or
                  otherwise use our content without our express written
                  permission, except where permitted by law.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  7. PRIVACY
              ================================================= */}
              <section id="privacy" className="scroll-mt-28">
                <SectionHeading number="07">
                  Privacy Policy
                </SectionHeading>

                <PolicyParagraph>
                  Your use of our Website and services is also governed by our
                  Privacy Policy, which explains how we collect, use, disclose,
                  and protect personal information.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  By using our Website and services, you acknowledge the
                  practices described in our Privacy Policy.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  8. SMS PROGRAM
              ================================================= */}
              <section id="sms" className="scroll-mt-28">
                <SectionHeading number="08">
                  SMS MESSAGING PROGRAM
                </SectionHeading>

                <div className="space-y-10">

                  {/* 8.1 */}
                  <div id="sms-description" className="scroll-mt-28">
                    <SubHeading>8.1 Program Description</SubHeading>

                    <PolicyParagraph>
                      Gustav B. Achu operates an SMS messaging program for
                      individuals who expressly opt in to receive text
                      messages.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      Depending on the type of consent you provide, messages
                      may include:
                    </PolicyParagraph>

                    <div className="mt-8">
                      <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-white">
                        Informational Messages
                      </h4>

                      <PolicyList
                        items={[
                          "Community updates",
                          "Educational content",
                          "Event and webinar reminders",
                          "Appointment reminders",
                          "Service-related notifications",
                          "Welcome and confirmation messages",
                        ]}
                      />
                    </div>

                    <div className="mt-8">
                      <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-white">
                        Marketing and Promotional Messages
                      </h4>

                      <PolicyList
                        items={[
                          "Webinars and events",
                          "Promotional messages and offers",
                          "Information about Gustav B. Achu's products and services",
                        ]}
                      />
                    </div>

                    <PolicyParagraph className="mt-8">
                      The types of messages you receive will depend on the SMS
                      consent you provide through our opt-in forms.
                    </PolicyParagraph>
                  </div>

                  {/* 8.2 */}
                  <div id="sms-consent" className="scroll-mt-28">
                    <SubHeading>8.2 Consent to Receive Messages</SubHeading>

                    <PolicyParagraph>
                      By opting in to our SMS messaging program, you provide
                      your consent to receive recurring text messages from
                      Gustav B. Achu at the mobile number you provided.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      Consent is not a condition of purchasing any goods or
                      services.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      Your consent applies only to communications from Gustav
                      B. Achu and does not authorize unrelated third parties to
                      send you marketing messages.
                    </PolicyParagraph>
                  </div>

                  {/* 8.3 */}
                  <div id="sms-frequency" className="scroll-mt-28">
                    <SubHeading>8.3 Message Frequency</SubHeading>

                    <PolicyParagraph>
                      Message frequency will vary based on your interactions
                      with Gustav B. Achu, your selected services, events, and
                      communication preferences.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      You may receive multiple messages per month. The exact
                      number of messages will depend on the communication
                      program you have opted into.
                    </PolicyParagraph>
                  </div>

                  {/* 8.4 */}
                  <div id="sms-rates" className="scroll-mt-28">
                    <SubHeading>8.4 Message and Data Rates</SubHeading>

                    <PolicyParagraph>
                      Message and data rates may apply. Your mobile carrier's
                      standard messaging and data rates may apply to messages
                      sent to or received from Gustav B. Achu.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      Gustav B. Achu is not responsible for charges imposed by
                      your mobile carrier.
                    </PolicyParagraph>
                  </div>

                  {/* 8.5 */}
                  <div id="sms-stop" className="scroll-mt-28">
                    <SubHeading>8.5 How to Stop Messages</SubHeading>

                    <PolicyParagraph>
                      You can stop receiving SMS messages at any time by
                      replying <strong className="text-white">STOP</strong> to
                      any message you receive from Gustav B. Achu.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      After you send STOP, you will receive a confirmation
                      message and will no longer receive SMS messages from the
                      applicable messaging program, except where permitted or
                      required by law.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      You may also contact us directly to request assistance
                      with your SMS preferences.
                    </PolicyParagraph>
                  </div>

                  {/* 8.6 */}
                  <div id="sms-help" className="scroll-mt-28">
                    <SubHeading>8.6 How to Get Help</SubHeading>

                    <PolicyParagraph>
                      For help with the SMS program, reply{" "}
                      <strong className="text-white">HELP</strong> to any
                      message you receive from Gustav B. Achu.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      You may also contact us at:
                    </PolicyParagraph>

                    <ContactCard />
                  </div>

                  {/* 8.7 */}
                  <div id="sms-carriers" className="scroll-mt-28">
                    <SubHeading>8.7 Supported Carriers</SubHeading>

                    <PolicyParagraph>
                      Message delivery is subject to your mobile carrier's
                      network availability and is not guaranteed.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      Wireless carriers are not liable for delayed or
                      undelivered messages.
                    </PolicyParagraph>
                  </div>

                  {/* 8.8 */}
                  <div id="sms-changes" className="scroll-mt-28">
                    <SubHeading>8.8 Changes to SMS Program</SubHeading>

                    <PolicyParagraph>
                      We may modify, suspend, or discontinue the SMS messaging
                      program at any time. We may also change the types or
                      frequency of messages sent through the program.
                    </PolicyParagraph>

                    <PolicyParagraph className="mt-6">
                      Your continued participation after changes are made
                      constitutes acceptance of the updated SMS program terms.
                    </PolicyParagraph>
                  </div>

                </div>
              </section>

              {/* =================================================
                  9. DISPUTE
              ================================================= */}
              <section id="dispute" className="scroll-mt-28">
                <SectionHeading number="09">
                  Dispute Resolution
                </SectionHeading>

                <PolicyParagraph>
                  Any disputes arising from your use of our Website or
                  services will be resolved according to applicable laws and
                  the dispute resolution provisions contained in these Terms,
                  where applicable.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  10. LIABILITY
              ================================================= */}
              <section id="liability" className="scroll-mt-28">
                <SectionHeading number="10">
                  Limitation of Liability
                </SectionHeading>

                <PolicyParagraph>
                  To the fullest extent permitted by law, Gustav B. Achu
                  disclaims all warranties, express or implied, relating to
                  the Website and services.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  Gustav B. Achu shall not be liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising from
                  or related to your use of the Website, services, or SMS
                  messaging program, except where such limitation is prohibited
                  by applicable law.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  11. TERMINATION
              ================================================= */}
              <section id="termination" className="scroll-mt-28">
                <SectionHeading number="11">
                  Termination
                </SectionHeading>

                <PolicyParagraph>
                  We reserve the right to suspend or terminate access to our
                  Website, services, or SMS messaging program for violations of
                  these Terms or where otherwise permitted by law.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  You may discontinue participation in the SMS messaging
                  program at any time by replying{" "}
                  <strong className="text-white">STOP</strong>.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  12. CHANGES
              ================================================= */}
              <section id="changes" className="scroll-mt-28">
                <SectionHeading number="12">
                  Changes to These Terms
                </SectionHeading>

                <PolicyParagraph>
                  We may update or modify these Terms from time to time.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  When changes are made, the updated version will be posted on
                  this page with a revised "Last modified" date.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  Your continued use of our Website or services after changes
                  are posted constitutes acceptance of the revised Terms.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  13. GOVERNING LAW
              ================================================= */}
              <section id="law" className="scroll-mt-28">
                <SectionHeading number="13">
                  Governing Law
                </SectionHeading>

                <PolicyParagraph>
                  These Terms shall be governed by and construed in accordance
                  with applicable laws.
                </PolicyParagraph>

                <PolicyParagraph className="mt-6">
                  Any legal action or proceeding related to these Terms shall
                  be brought in the appropriate courts located in Miami-Dade
                  County, Florida, unless otherwise required by applicable law.
                </PolicyParagraph>
              </section>

              {/* =================================================
                  14. CONTACT
              ================================================= */}
              <section id="contact" className="scroll-mt-28">
                <SectionHeading number="14">
                  Contact Information
                </SectionHeading>

                <PolicyParagraph>
                  If you have questions or concerns regarding these Terms, our
                  services, or our SMS messaging program, please contact us:
                </PolicyParagraph>

                <ContactCard />
              </section>

              {/* =================================================
                  SMS QUICK SUPPORT
              ================================================= */}
              <section className="border-t border-white/[0.08] pt-10">
                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="border border-white/[0.08] bg-white/[0.015] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                      SMS Support
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      Reply{" "}
                      <strong className="text-white">HELP</strong> to any SMS
                      message you receive from us.
                    </p>
                  </div>

                  <div className="border border-white/[0.08] bg-white/[0.015] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                      SMS Opt-Out
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      Reply{" "}
                      <strong className="text-white">STOP</strong> to any SMS
                      message to unsubscribe.
                    </p>
                  </div>

                </div>
              </section>

            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

/* =========================================================
   SUB HEADING
========================================================= */

const SubHeading = ({ children }) => {
  return (
    <h3 className="mb-5 text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
      {children}
    </h3>
  );
};

export default TermsofUse;
