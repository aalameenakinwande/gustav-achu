
import { ArrowUpRight } from "lucide-react";

const journeys = [
  {
    number: "01",
    title: "Get Control",
    description:
      "You earn money, but too much of it disappears before it builds your future.",
    action: "Start with the Paycheck Escape System.",
    target: "component-two",
  },
  {
    number: "02",
    title: "Get Clarity",
    description:
      "You earn well, but you're not sure whether your current financial strategy is actually moving you toward wealth.",
    action: "Start with a Private Wealth Architecture Assessment.",
    target: "component-three",
  },
  {
    number: "03",
    title: "Build",
    description:
      "You're ready to stop figuring it out alone and build a deliberate strategy for wealth, ownership and long-term prosperity.",
    action: "Apply for the Paycheck to Prosperity Accelerator.",
    target: "component-four",
  },
];

export default function ComponenetOne() {
  const handleJourneyClick = (target) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-14 max-w-4xl sm:mb-20 lg:mb-24">
          <h2 className="max-w-4xl text-[clamp(2.6rem,6.2vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.065em]">
            Where Are You on
            <br className="hidden sm:block" /> Your Wealth Journey
            <span className="text-[#D4AF37]">?</span>
          </h2>

          <div className="mt-7 max-w-lg space-y-1.5 text-base leading-relaxed text-[#A6A6A0] sm:mt-9 sm:text-lg">
            <p>You don't need to do everything at once.</p>
            <p className="text-white">
              You need to know{" "}
              <span className="font-semibold">
                what your next move is.
              </span>
            </p>
          </div>
        </div>

        {/* Journey cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {journeys.map((journey) => (
            <article
              key={journey.number}
              role="link"
              tabIndex={0}
              aria-label={`${journey.title} — go to ${journey.action}`}
              onClick={() => handleJourneyClick(journey.target)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleJourneyClick(journey.target);
                }
              }}
              className="group relative flex min-h-[350px] cursor-pointer flex-col overflow-hidden border border-white/10 bg-[#0B0B0B] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] sm:min-h-[390px] sm:p-8 lg:min-h-[440px] lg:p-9"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#D4AF37]">
                  {journey.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </div>

              {/* Content */}
              <div className="mt-12 sm:mt-14 lg:mt-16">
                <h3 className="text-3xl font-medium tracking-[-0.055em] sm:text-4xl lg:text-[2.65rem]">
                  {journey.title}
                  <span className="text-[#D4AF37]">.</span>
                </h3>

                <p className="mt-5 max-w-sm text-[14px] leading-[1.85] text-[#A6A6A0] sm:text-[15px]">
                  {journey.description}
                </p>
              </div>

              {/* Bottom action */}
              <div className="mt-auto pt-10">
                <div className="mb-5 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-[#D4AF37]/60" />

                <p className="max-w-sm text-sm font-semibold leading-7 tracking-[-0.01em] text-white sm:text-[15px]">
                  {journey.action}
                </p>

                <div className="mt-5 h-[3px] w-8 bg-[#D4AF37] transition-all duration-500 group-hover:w-16" />
              </div>

              {/* Hover accent */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
