import {
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

import WCLBReplay from "../../images/EventImage/WCLBReplay.png";
import PaycheckAudit from "../../images/EventImage/PaycheckAudit.png";
import WealthClarity from "../../images/EventImage/WealthClarity.png";
import InvestorPlaybook from "../../images/EventImage/InvestorPlaybook.png";

const STRIPE_LINK =
  "https://buy.stripe.com/4gMaEZ9Qb1yg8Ka8jqfw40W";

const NextThreeSections = () => {
 const lessons = [
  {
    number: "01",
    icon: Wallet,
    description:
      "Stop living paycheck to paycheck even on a six-figure income.",
  },
  {
    number: "02",
    icon: TrendingUp,
    description:
      "Create a simple, repeatable investing system you can actually stick with.",
  },
  {
    number: "03",
    icon: TrendingUp,
    description:
      "Build additional income streams without walking away from your career.",
  },
  {
    number: "04",
    icon: Target,
    description:
      "Give every dollar a clear assignment before it disappears.",
  },
  {
    number: "05",
    icon: Sparkles,
    description:
      "Replace financial confusion with clarity and confidence.",
  },
];

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
    <>
      {/* =========================================================
          SECTION 4
          WHAT YOU'LL LEARN — THE PAYCHECK ESCAPE SYSTEM
      ========================================================== */}

      <section className="relative overflow-hidden bg-black py-2 text-white sm:py-24 lg:py-32">
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b2a5b]/30 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#c9a227]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
        

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The{" "}
              <span className="bg-gradient-to-r from-[#b89016] via-[#f0d477] to-[#a67c00] bg-clip-text text-transparent">
                Paycheck Escape System
              </span>
            </h2>

            <div className="mx-auto mt-7 max-w-2xl space-y-1 text-base leading-8 sm:text-lg">
              <p className="text-gray-400">
                This isn’t budgeting.
              </p>

              <p className="text-gray-400">
                This isn’t motivation.
              </p>
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl">
              This is a{" "}
              <span className="font-semibold text-white">
                simple financial operating system
              </span>{" "}
              that tells your money exactly where to go{" "}
              <span className="italic text-[#d4af37]">
                before it disappears.
              </span>
            </p>
          </div>

          {/* =====================================================
              MAIN MOCKUP
          ====================================================== */}

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative rounded-3xl border border-[#c9a227]/25 bg-[#080808] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:p-5">
              {/* Gold top line */}
              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

              <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#050505]">
                <img
                  src={WCLBReplay}
                  alt="The Paycheck Escape System"
                  className="h-auto max-h-[650px] w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              INSIDE THE SYSTEM
          ====================================================== */}

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Inside The Paycheck Escape System,
              </h3>

              <p className="mt-2 text-lg text-[#d4af37]">
You will learn how to
              </p>
            </div>
<div className="grid gap-5 md:grid-cols-2">
  {lessons.map((lesson, index) => {
    const Icon = lesson.icon;

    return (
      <div
        key={lesson.number}
        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/40 ${
          index === lessons.length - 1
            ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)]"
            : ""
        }`}
      >
        {/* Blue side accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#123e73] via-[#0b2a5b] to-transparent" />

        <div className="flex gap-5">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#c9a227]/25 bg-[#c9a227]/5">
            <Icon className="h-5 w-5 text-[#d4af37]" />
          </div>

          {/* Lesson Content */}
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37]">
                {lesson.number}
              </span>

              <div className="h-px w-8 bg-[#c9a227]/30" />
            </div>

            <p className="text-base leading-7 text-gray-300 sm:text-lg">
              {lesson.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL SECTION
          
          Keep your EXISTING free masterclass testimonial
          component/content here.
      ========================================================== */}

      {/* 
        Example:

        <Testimonials />

        Replace this with the exact testimonial section
        you already use on the free masterclass page.
      */}


      {/* =========================================================
          SECTION 6 — BONUSES
      ========================================================== */}

     
    </>
  );
};

export default NextThreeSections;