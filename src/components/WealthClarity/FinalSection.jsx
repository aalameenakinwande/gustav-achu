import {
  ArrowRight,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const STRIPE_LINK =
  "https://buy.stripe.com/4gMaEZ9Qb1yg8Ka8jqfw40W";

const FinalSection = () => {
  const valueStack = [
    {
      title: "The Paycheck to Prosperity Video Training",
      value: "$97",
    },
    {
      title: "The 1-Hour Paycheck Audit",
      value: "$47",
    },
    {
      title: "The Wealth Clarity Workbook",
      value: "$67",
    },
    {
      title: "The Ultimate Investor Playbook",
      value: "$97",
    },
  ];

  const objections = [
    "Another budgeting spreadsheet",
    "Another “save more” lecture",
    "Another hype video",
  ];

  const isThis = [
    "A plug-and-play system you can apply immediately",
    "Built for real people with real income",
    "Designed to work even if you’ve failed before",
  ];

  const speedPoints = [
    {
      number: "01",
      title: "Watch in under 90 minutes",
      icon: Clock3,
    },
    {
      number: "02",
      title: "Implement the same day",
      icon: Zap,
    },
    {
      number: "03",
      title: "No financial background needed",
      icon: Sparkles,
    },
  ];

  const futurePoints = [
    "You’re no longer guessing where your money went",
    "You’ve eliminated unnecessary spending leaks",
    "You’re following a clear system with confidence",
    "You’ve started building actual financial momentum",
  ];

  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =========================================================
          SECTION 7 — VALUE STACK
      ========================================================== */}

      <section className="relative overflow-hidden bg-black py-2 sm:py-2 lg:py-10">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#0b2a5b]/25 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-[#c9a227]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
          

    

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              If you tried to figure this out yourself…
              <br />
              You’d spend:
            </p>
          </div>

          {/* Cost of doing it alone */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Years of trial and error",
                "Thousands lost in bad decisions",
                "Endless frustration trying to “figure it out”",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-500/10 bg-[#0b0b0b] p-5 text-center"
                >
                  <X className="mx-auto mb-3 h-5 w-5 text-red-500" />

                  <p className="text-sm leading-6 text-gray-400">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OR */}
          <div className="my-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              Or…
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Everything included */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-7 text-center">
              <p className="text-lg font-semibold text-white sm:text-xl">
                You could get everything packaged here:
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#c9a227]/30 bg-gradient-to-b from-[#101010] to-[#070707]">
              {valueStack.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center justify-between gap-5 px-5 py-5 sm:px-8 sm:py-6 ${
                    index !== valueStack.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/10">
                      <Check className="h-3.5 w-3.5 text-[#d4af37]" />
                    </div>

                    <p className="text-sm font-medium leading-6 text-gray-200 sm:text-base">
                      {item.title}
                    </p>
                  </div>

                  <span className="shrink-0 text-lg font-bold text-[#d4af37] sm:text-xl">
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Total */}
              <div className="border-t border-[#c9a227]/30 bg-[#c9a227]/5 px-5 py-6 sm:px-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-gray-400">
                    Total Value
                  </span>

                <div className="relative inline-block">
  <span className="text-2xl font-bold text-white sm:text-3xl">
    $308
  </span>

  <span className="pointer-events-none absolute left-[-4%] top-1/2 h-[4px] w-[108%] -rotate-[12deg] rounded-full bg-red-500" />
</div>
                </div>
              </div>
            </div>
          </div>

          {/* TODAY ONLY */}
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#c9a227]/5 px-5 py-2.5">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                 TODAY ONLY
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold sm:text-4xl">
              Get Everything for Just{" "}
              <span className="text-[#d4af37]">$27</span>
            </h3>

         <div className="mx-auto mt-9 flex w-full max-w-xl flex-col items-center sm:mt-11">
        
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#d71920] px-7 py-5 text-center text-base font-bold text-white shadow-[0_12px_40px_rgba(215,25,32,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ef2028] hover:shadow-[0_18px_55px_rgba(215,25,32,0.35)] active:translate-y-0 sm:w-auto sm:min-w-[340px] sm:rounded-full sm:px-10 sm:py-5 md:text-lg"
          >
            Get Instant Access for $27
        
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        
          {/* Trust Badge */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-white/55 sm:text-sm">
            <span>One-time payment</span>
        
            <span className="text-white/25">•</span>
        
            <span>Instant access</span>
        
            <span className="text-white/25">•</span>
        
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V7l7-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
              </svg>
        
              Secure checkout
            </span>
          </div>
        
        </div>
        
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 8 — OBJECTION HANDLING
      ========================================================== */}

      <section className="relative overflow-hidden border-y border-white/5 bg-[#070707] py-2 sm:py-24">
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#0b2a5b]/25 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">
          

            <h2 className="mt-4 text-xl font-bold sm:text-5xl">
              This Is{" "}
              <span className="text-[#d4af37]">NOT</span>
            </h2>
          </div>

          {/* NOT */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {objections.map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-white/10 bg-black p-6 transition-all duration-300 hover:border-red-500/20"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>

                <p className="text-sm font-semibold leading-6 text-gray-400">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* THIS IS */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="rounded-3xl border border-[#c9a227]/30 bg-gradient-to-br from-[#0c0c0c] to-[#081a32] p-7 sm:p-10">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                  This IS
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-4xl">
                  A system you can actually use.
                </h3>
              </div>

              <div className="mt-8 space-y-4">
                {isThis.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/10">
                      <Check className="h-4 w-4 text-[#d4af37]" />
                    </div>

                    <p className="text-sm leading-7 text-gray-300 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 9 — SPEED & SIMPLICITY
      ========================================================== */}

      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

    

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {speedPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/30"
                >
                  {/* <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a227]/20 bg-[#c9a227]/5">
                    <Icon className="h-6 w-6 text-[#d4af37]" />
                  </div> */}

                  <p className="mt-5 text-xs font-bold tracking-[0.2em] text-[#d4af37]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 10 — FUTURE PACE
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#07101d] py-24 text-white sm:py-28 lg:py-36">

        {/* Dramatic background */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#0b2a5b]/40 blur-[150px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

         
          <h2 className="sm:mt-5 text-2xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            30 Days From{" "}
            <span className="text-[#d4af37]">Now…</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Imagine looking at your finances and finally knowing exactly
            what you’re doing.
          </p>

          {/* Future state */}
          <div className="mx-auto mt-12 max-w-3xl text-left">
            <div className="space-y-4">
              {futurePoints.map((point, index) => (
                <div
                  key={point}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#c9a227]/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10">
                    <Check className="h-4 w-4 text-[#d4af37]" />
                  </div>

                  <div>
                   

                    <span className="text-sm leading-7 text-gray-200 sm:text-base">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final message */}
          <div className="mx-auto mt-14 max-w-3xl">
            <p className="text-2xl font-bold leading-relaxed sm:text-3xl">
              That version of you?
            </p>

            <p className="mt-3 text-2xl font-bold leading-relaxed text-[#d4af37] sm:text-3xl">
              Exists on the other side of this decision.
            </p>

            <div className="mx-auto my-8 h-px w-20 bg-[#d4af37]/40" />

            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              You can keep doing what you’ve always done…
              <br />
              Or you can finally fix the system controlling your money.
            </p>
          </div>

          {/* Final CTA */}
         <div className="mx-auto mt-9 flex w-full max-w-xl flex-col items-center sm:mt-11">
        
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#d71920] px-7 py-5 text-center text-base font-bold text-white shadow-[0_12px_40px_rgba(215,25,32,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ef2028] hover:shadow-[0_18px_55px_rgba(215,25,32,0.35)] active:translate-y-0 sm:w-auto sm:min-w-[340px] sm:rounded-full sm:px-10 sm:py-5 md:text-lg"
          >
            Get Instant Access for $27
        
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        
          {/* Trust Badge */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-white/55 sm:text-sm">
            <span>One-time payment</span>
        
            <span className="text-white/25">•</span>
        
            <span>Instant access</span>
        
            <span className="text-white/25">•</span>
        
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V7l7-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
              </svg>
        
              Secure checkout
            </span>
          </div>
        
        </div>
        
 
        </div>
      </section>

    </main>
  );
};

export default FinalSection;