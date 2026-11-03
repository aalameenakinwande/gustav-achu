
import {
  ArrowUpRight,
  Check,
  Compass,
  Layers3,
  TrendingUp,
  ShieldCheck,
  Target,
  Gem,
} from "lucide-react";

const outcomes = [
  {
    icon: Compass,
    description:
      "A clear understanding of where you currently stand financially, no more guessing or feeling overwhelmed",
  },
  {
    icon: Layers3,
    description:
      "A simple wealth-building system you can follow consistently, even with limited capital",
  },
  {
    icon: TrendingUp,
    description:
      "A 90-day roadmap with specific, actionable steps you can implement immediately",
  },
  {
    icon: ShieldCheck,
    description:
      "Clarity on how to identify and activate your next income stream without quitting your 9–5",
  },
  {
    icon: Target,
    description:
      "A consistent investing habit with expert guidance and accountability, turning more of your income into assets that grow your net worth over time.",
  },
];


const audience = [
  "You’re earning $100k or more annually, but your wealth isn’t growing at the same pace.",
  "You’re tired of making financial decisions without a clear strategy for what to do with your income.",
  "You’re ready to turn your income into assets, ownership, and long-term wealth.",
  "You want a personalized wealth-building strategy, not another pile of financial information to consume.",
  "You prefer building wealth with a trusted accountability partner and a proven strategy instead of losing years of income, growth, and compounding by figuring it out alone.",
  "You’re ready to take action, stay accountable, and build a financial future that grows beyond your next paycheck and secures a lasting legacy.",
];


export default function ComponentFour() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/[0.08] blur-[120px] sm:h-[600px] sm:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-4xl sm:mb-20">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#D4AF37]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
              Ready to build?
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Paycheck to Prosperity{" "}
            <span className="text-[#D4AF37]">Accelerator.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:mt-8 sm:text-xl lg:text-2xl">
            Stop simply earning money. Start intentionally building wealth.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
        The Paycheck to Prosperity Accelerator is designed for professionals and entrepreneurs earning $100k+ annually, who are ready to move beyond earning an income and want a deliberate strategy for wealth, ownership and long-term financial security.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          {/* Wealth outcomes */}
          <div>
            <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5">
              <h3 className="text-sm font-semibold tracking-wide sm:text-base">
The Transformation You Walk Away With
              </h3>

              <span className="hidden text-[10px] tracking-[0.2em] text-white/35 sm:block">
                05 OUTCOMES
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {outcomes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`group border-b border-white/10 py-7 ${
                      index < 2 ? "sm:pt-2" : ""
                    }`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] transition-all duration-300 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/[0.12]">
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      <span className="text-xs tabular-nums text-white/25">
                        0{index + 1}
                      </span>
                    </div>

                 

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Price and application */}
          <aside className="relative lg:sticky lg:top-10">
            <div className="relative overflow-hidden border border-[#D4AF37]/30 bg-[#0C0C0C] p-6 sm:p-9 lg:p-10">
              {/* Card decoration */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#D4AF37]/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#D4AF37]/10"
              />

              <div className="relative">
                {/* <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  The Accelerator
                </span> */}

                {/* <div className="mt-7 flex items-end gap-2">
                  <span className="text-6xl font-medium tracking-[-0.06em] sm:text-7xl">
                    $1,499
                  </span>
                </div> */}

                {/* <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                  A deliberate approach to building wealth, creating
                  ownership and securing your financial future.
                </p> */}

                <div className="my-8 h-px bg-white/10" />

                <h3 className="text-sm font-semibold tracking-wide">
              This is for you if:
             </h3>
<ul className="mt-6 space-y-5">
  {audience.map((item) => (
    <li
      key={item}
      className="flex items-start gap-3 text-sm leading-6 text-white/65"
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37]">
        <Check size={12} strokeWidth={2} />
      </span>

      <span className="font-semibold text-white/90">
        {item}
      </span>
    </li>
  ))}
</ul>

             <a
  href="/paycheck-to-prosperity-accelerator"
  className="group mt-9 flex min-h-14 w-full items-center justify-between gap-4 rounded-md bg-red-600 px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-red-700 sm:text-sm"
>
  <span>APPLY FOR THE ACCELERATOR</span>

  <ArrowUpRight
    size={20}
    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
  />
</a>

                {/* <p className="mt-5 text-center text-[10px] leading-5 text-white/30">
                  Build with intention. Execute with clarity.
                </p> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
