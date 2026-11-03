
import { motion } from "framer-motion";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

const assessmentPoints = [
  {
    title: "Structured Financial Architecture Diagnostic:",
    description:
      "Pinpoint what’s holding your wealth back and identify the financial moves that will put you on a stronger path.",
  },
  {
    title: "How to Profit From the AI Boom:",
    description:
      "Discover how to position your capital to participate in AI-driven growth without blindly chasing the hype.",
  },
  {
    title: "Review of Your Capital Structure & Portfolio Positioning:",
    description:
      "See how your money is allocated today and where strategic changes will better align it with your wealth goals.",
  },
  {
    title: "Investment Strategy & Risk Gap Assessment:",
    description:
      "Uncover hidden risks, portfolio inefficiencies, and missed opportunities, including gaps in your AI exposure.",
  },
  {
    title: "Future Positioning for Wealth Growth:",
    description:
      "Identify where your portfolio stands today and what needs to change to prepare for emerging opportunities and risks.",
  },
  {
    title: "A Personalized, Clear, Actionable Roadmap in Just 60 Minutes:",
    description:
      "Leave knowing what to prioritize, which financial decisions to revisit, and the next steps to move from",
  },
];

export default function ComponentThree() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#D4A017]/[0.09] blur-[130px] sm:h-[600px] sm:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-red-600/[0.06] blur-[120px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D4A017] sm:w-12" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A017] sm:text-xs sm:tracking-[0.35em]">
              GET PERSONALIZED CLARITY
            </p>

            <span className="h-px w-8 bg-[#D4A017] sm:w-12" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            Private Wealth
            <span className="mt-1 block text-[#D4A017]">
              Architecture Assessment
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl">
            Your income is personal. Your wealth strategy should be too.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            This is a structured diagnostic session reviewing your current capital structure, Investment strategy, risk gaps, portfolio positioning ( including AI exposure) and strategic alignment.
          </p>

          {/* Price */}
          <div className="mt-9 inline-flex items-center gap-5 border-y border-[#D4A017]/20 px-7 py-4 sm:gap-8 sm:px-12 sm:py-5">
            <span className="h-8 w-px bg-[#D4A017]/40" />

            <div className="text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:text-[10px]">
                Private assessment
              </p>

              <p className="mt-1 text-4xl font-semibold tracking-[-0.05em] text-[#D4A017] sm:text-5xl">
                $299
              </p>
            </div>

            <span className="h-8 w-px bg-[#D4A017]/40" />
          </div>
        </motion.div>

        {/* Main content */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          {/* Assessment list */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 sm:p-9 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-[#D4A017] to-transparent"
            />

            <div className="mb-8 flex items-center justify-between gap-4">
              <h3 className="max-w-md text-xl font-semibold leading-snug sm:text-2xl">
What You Will Uncover in Your 60-Minute Private Wealth Architecture Assessment              </h3>

              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A017]/70 sm:block">
                06 AREAS
              </span>
            </div>

            <div className="space-y-0">
              {assessmentPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="group flex gap-4 border-t border-white/[0.08] py-5 sm:gap-5 sm:py-6"
                >
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center border border-[#D4A017]/30 bg-[#D4A017]/[0.07] text-xs font-semibold text-[#D4A017] transition-colors duration-300 group-hover:bg-[#D4A017] group-hover:text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-full min-h-3 w-px bg-white/[0.08] last:hidden" />
                  </div>

                  <div className="min-w-0 flex-1 pt-1">
                    <h4 className="text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7">
                      {point.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/50 sm:text-[15px] sm:leading-7">
                      {point.description}
                    </p>
                  </div>

                  <Check
                    size={17}
                    strokeWidth={1.8}
                    className="mt-2 shrink-0 text-[#D4A017]/50 transition-colors duration-300 group-hover:text-[#D4A017]"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative flex min-h-[300px] flex-col justify-between overflow-hidden border border-[#D4A017]/25 bg-gradient-to-br from-[#17130A] via-[#0B0B0B] to-[#050505] p-7 sm:p-10 lg:min-h-full lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D4A017]/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#D4A017]/10"
            />

            <div className="relative">
              <div className="mb-10 flex h-12 w-12 items-center justify-center border border-[#D4A017]/30 bg-[#D4A017]/[0.08]">
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.5}
                  className="text-[#D4A017]"
                />
              </div>

              <p className="max-w-sm text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl lg:text-[2rem]">
                This is not a coaching call but a professional financial architecture review followed by clear next-step recommendations.
              </p>
            </div>

            <div className="relative mt-12 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A017]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4A017]/70">
                PRIVATE WEALTH ASSESSMENT
              </span>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 flex w-full max-w-2xl flex-col items-center sm:mt-16"
        >
          <motion.a
            href="https://gustavachu.com/wealth-consultation"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[64px] w-full items-center justify-between gap-4 bg-red-600 px-5 py-5 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_0_40px_rgba(220,38,38,0.16)] transition-colors duration-300 hover:bg-red-500 sm:min-h-[72px] sm:px-8 sm:text-sm"
          >
            <span className="flex-1 text-center">
              BOOK YOUR PRIVATE ASSESSMENT — $299
            </span>

            <ArrowRight
              size={21}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          <p className="mt-5 max-w-lg text-center text-xs leading-6 text-white/40 sm:text-sm">
            Your $299 assessment fee is fully credited toward any of our tiered implementation services
          </p>
        </motion.div>
      </div>
    </section>
  );
}
