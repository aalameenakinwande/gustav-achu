import React from 'react'
import {
  Check,
} from "lucide-react";
import PaycheckAudit from "../../images/EventImage/PaycheckAudit.png";
import WealthClarity from "../../images/EventImage/WealthClarity.png";
import InvestorPlaybook from "../../images/EventImage/InvestorPlaybook.png";

const Bonuses = () => {

    const bonuses = [
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
    },
  ];


  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-24 lg:py-10">
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#c9a227]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0b2a5b]/30 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
          

            <h2 className="text-2xl font-bold sm:text-5xl lg:text-6xl">
              Bonuses
            </h2>
          </div>

          {/* =====================================================
              BONUS CARDS
          ====================================================== */}

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
            {bonuses.map((bonus) => (
              <div
                key={bonus.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a227]/40"
              >
                {/* Gold line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                {/* Bonus image */}
                <div className="flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#101010] to-[#070707] px-8 pt-8">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="h-full w-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Bonus content */}
                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                      Bonus #{bonus.number}
                    </span>

                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-xl font-bold leading-tight text-white">
                    {bonus.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {bonus.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {bonus.bullets.map((bullet) => (
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
                </div>
              </div>
            ))}
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}

          {/* <div className="mt-16 text-center">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#d71920] px-8 py-4 text-sm font-bold text-white shadow-[0_15px_50px_rgba(215,25,32,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ef2028] hover:shadow-[0_20px_65px_rgba(215,25,32,0.4)] sm:px-10 sm:py-5 sm:text-base"
            >
              Get Instant Access
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div> */}
        </div>
      </section>
  )
}

export default Bonuses
