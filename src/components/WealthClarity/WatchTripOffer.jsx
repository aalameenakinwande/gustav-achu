import React from "react";
import {
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Gift,
  Play,
} from "lucide-react";

import PaycheckAudit from "../../images/EventImage/PaycheckAudit.png";
import WealthClarity from "../../images/EventImage/WealthClarity.png";
import InvestorPlaybook from "../../images/EventImage/InvestorPlaybook.png";
import Footer from "../Footer";

const WatchTripOffer = () => {
  const trainingLink =
    "https://drive.google.com/file/d/1HojOHosHo9l0FVrw0O1SrJ7uM2udMsv5/view?usp=drivesdk";

  const assets = [
    {
      number: "01",
      title: "The 1-Hour Paycheck Audit",
      image: PaycheckAudit,
      description:
        "Find out exactly where your money is leaking — in under 60 minutes.",
      bullets: [
        "Identify hidden spending patterns",
        "Plug financial leaks instantly",
        "Recover money you didn’t know you were losing",
      ],
      link:
        "https://drive.google.com/file/d/1X5M0zP-XTZXxoL-JYT09xnBShu3ZE7ix/view?usp=drive_link",
    },
    {
      number: "02",
      title: "The Wealth Clarity Workbook",
      image: WealthClarity,
      description:
        "Turn confusion into a clear 90-day financial execution plan.",
      bullets: [
        "Map out your next financial moves",
        "Build a system tailored to your income",
        "Stay consistent without overthinking",
      ],
      link:
        "https://drive.google.com/file/d/17hlC0t-otMJxyuyzS3jJsSWRIPbPhqf6/view?usp=drive_link",
    },
    {
      number: "03",
      title: "The Ultimate Investor Playbook",
      image: InvestorPlaybook,
      description:
        "Know exactly how to start investing — the right way.",
      bullets: [
        "Avoid beginner mistakes that cost years",
        "Understand where to put your money first",
        "Build a simple, scalable portfolio",
      ],
      link:
        "https://drive.google.com/file/d/1bJrXXhf-UU_JM7ELzef1xB9QKNPf6ALx/view?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      {/* =========================================================
          HERO / TRAINING
      ========================================================== */}

      <section className="relative overflow-hidden bg-black py-6 mt-14 sm:mt-0 sm:py-20 lg:py-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#0b2a5b]/30 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#c9a227]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
         

            <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Watch the{" "}
              <span className="bg-gradient-to-r from-[#b89016] via-[#f0d477] to-[#a67c00] bg-clip-text text-transparent">
                Full Training
              </span>
            </h1>

          
          </div>

          {/* =====================================================
              VIDEO
          ====================================================== */}

       <div className="relative rounded-[18px] border border-[#c9a227]/25 bg-[#080808] p-1.5 shadow-[0_0_70px_rgba(201,162,39,0.07)] sm:rounded-[24px] sm:p-2 md:rounded-[30px] md:p-3 mt-10">

  <div className="absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
<div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[13px] bg-black sm:rounded-[18px] md:rounded-[24px]">
  <div className="aspect-[16/9] w-full">
    <iframe
      src="https://www.youtube.com/embed/I_sGbHdWGwA?autoplay=1&mute=1&rel=0"
      title="Masterclass"
      className="h-full w-full"
      frameBorder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

</div>
    
        </div>
      </section>

      {/* =========================================================
          ASSETS
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#070707] py-2 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-[#0b2a5b]/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
        

            <h2 className="mt-4 text-2xl font-bold sm:text-4xl lg:text-5xl">
              Download Your{" "}
              <span className="text-[#d4af37]">
                Paycheck Escape System
              </span>{" "}
              Assets
            </h2>

            {/* <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Everything you need to take the training from information to
              implementation.
            </p> */}
          </div>

          {/* =====================================================
              THREE ASSETS — HORIZONTAL ON DESKTOP
          ====================================================== */}

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {assets.map((asset) => (
              <div
                key={asset.number}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a227]/40 hover:shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
              >
                {/* Gold top accent */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                {/* Image */}
                <div className="flex h-[300px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#111111] to-[#070707] px-8 pt-8">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="h-full w-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.75)] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Number */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37]">
                      ASSET {asset.number}
                    </span>

                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-xl font-bold leading-tight">
                    {asset.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {asset.description}
                  </p>

                  {/* Bullets */}
                  <div className="mt-6 space-y-3">
                    {asset.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/10">
                          <Check className="h-3 w-3 text-[#d4af37]" />
                        </div>

                        <p className="text-sm leading-6 text-gray-300">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Download */}
                  <a
                    href={asset.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-[#c9a227]/30 bg-[#c9a227]/5 px-5 py-3.5 text-sm font-bold text-[#d4af37] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#c9a227]/10"
                  >
                    <Download className="h-4 w-4" />
                    Download Resource
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING MESSAGE
      ========================================================== */}

      <section className="relative overflow-hidden bg-black py-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-[#0b2a5b]/25 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          {/* Gold divider */}
          <div className="mx-auto mb-10 h-px w-20 bg-[#d4af37]" />

          <p className="text-lg font-medium leading-8 text-gray-300 sm:text-xl">
            Watch the training.
            <br />
            Download the resources.
            <br />
            Put your system into action.
          </p>

          <div className="mx-auto my-10 h-px w-12 bg-white/10" />

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Your goal isn't to learn more about money.
          </p>

          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Your goal is to{" "}
            <span className="text-[#d4af37]">
              make your money work differently.
            </span>
          </h2>
        </div>
      </section>

      {/* =========================================================
          FOOTER
          Replace this with your actual Gustav footer if needed.
      ========================================================== */}

      <Footer />
    </div>
  );
};

export default WatchTripOffer;