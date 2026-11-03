
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Clock3, X } from "lucide-react";

export default function ComponentSix() {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    "Your current Wealth Builder Profile",
    "The hidden gap keeping you financially stuck",
    "The next step to move from income earner → wealth builder",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-md animate-in fade-in duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wealth-popup-title"
        className="relative my-auto w-full max-w-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#080808] text-white shadow-[0_0_100px_rgba(212,175,55,0.12)] animate-in zoom-in-95 duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Gold background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px]"
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12 md:px-14">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] sm:right-5 sm:top-5"
          >
            <X size={19} />
          </button>

          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3 pr-8">
            <span className="h-px w-7 bg-[#D4AF37]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] sm:text-[11px] sm:tracking-[0.3em]">
              Not Sure Where to Start?
            </span>

            <span className="h-px w-7 bg-[#D4AF37]" />
          </div>

          {/* Heading */}
          <h2
            id="wealth-popup-title"
            className="mx-auto max-w-xl text-center text-3xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-4xl md:text-5xl"
          >
            Find Your Wealth Builder Profile{" "}
            <span className="text-[#D4AF37]">
              in 3 Minutes.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-center text-sm leading-7 text-white/55 sm:text-base">
            You don't need to guess which offer is right for you.
            Discover where you stand and what to do next.
          </p>

          <p className="mt-7 text-sm font-medium text-white/85 sm:text-base">
            Take the Wealth Clarity Index™ to discover:
          </p>

          {/* Benefits */}
          <ul className="mt-5 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm leading-6 text-white/70 sm:text-base"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#D4AF37]/50 text-[#D4AF37]">
                  <Check size={13} strokeWidth={2} />
                </span>

                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Duration */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40 sm:text-sm">
            <Clock3 size={15} className="text-[#D4AF37]" />
            <span>It takes about 3 minutes.</span>
          </div>

          {/* CTA */}
          <a
            href="https://gustavachu.com/wealth-clarity-quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 flex min-h-14 w-full items-center justify-between gap-3 bg-[#D4AF37] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.08em] text-black transition-colors duration-300 hover:bg-[#E8C85A] sm:px-6 sm:text-xs md:text-sm"
          >
            <span>Take the Wealth Clarity Index™</span>

            <ArrowUpRight
              size={20}
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full py-2 text-xs text-white/35 transition-colors hover:text-white/70"
          >
            Maybe later
          </button>
        </div>

        {/* Bottom gold accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
      </div>
    </div>
  );
}
