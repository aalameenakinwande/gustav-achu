import { motion } from "framer-motion";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import WCLBReplay from "../../images/EventImage/WCLBReplay.png";

const benefits = [
  "Stop living paycheck to paycheck even on a six-figure income.",
  "Create a simple, repeatable investing system you can actually stick with.",
  "Build additional income streams without walking away from your career.",
  "Give every dollar a clear assignment before it disappears.",
  "Replace financial confusion with clarity and confidence.",
];

export default function ComponentTwo() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#D4A017]/[0.08] blur-[150px]"
      />

      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 items-center gap-16 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-16 xl:px-24">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A017] sm:text-sm">
              # START HERE
            </span>
            <span className="h-px w-12 bg-[#D4A017]" />
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(3.25rem,7vw,6.25rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
            <span className="block">Paycheck</span>
            <span className="mt-2 block bg-gradient-to-r from-[#F9D77E] via-[#E9AD35] to-[#C78A19] bg-clip-text text-transparent">
              Escape System
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-8 max-w-xl text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.7rem]">
            Stop letting your paycheck disappear before it builds your future.
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
           Learn the exact Paycheck Escape System that helped me build a million-dollar portfolio, without quitting my job, starting with a high income, or relying on complicated financial strategies

{/*            
            <strong className="font-semibold text-[#E9B447]">
              income earner to wealth builder.
            </strong> */}
          </p>

          {/* Price */}
          <div className="mt-7 flex items-end gap-3">
            <span className="text-5xl font-semibold tracking-[-0.06em] text-[#E9B447] sm:text-6xl">
              $27
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-white/15" />

          {/* Benefits */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
Inside, you will learn how to:
            </h3>

            <ul className="mt-5 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="flex items-start gap-3.5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9B447] text-black">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <span className="text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA BUTTON — RED AND CONTINUOUSLY BOUNCING */}
    
<motion.a
  href="https://gustavachu.com/paycheck-escape-system"
  target="_blank"
  rel="noopener noreferrer"
  animate={{ y: [0, -6, 0] }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group mt-9 flex min-h-[76px] w-full items-center justify-between gap-4 rounded-xl bg-red-600 px-6 py-6 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-colors duration-300 hover:bg-red-500 sm:min-h-[88px] sm:px-8 sm:py-7 sm:text-lg"
>
  <span>GET THE PAYCHECK ESCAPE SYSTEM — $27</span>

  <ArrowRight
    size={28}
    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-8 sm:w-8"
  />
</motion.a>

        </motion.div>

        {/* RIGHT: PRODUCT MOCKUP */}
        {/* RIGHT: PRODUCT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.94, y: 20 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="relative mx-auto flex w-full max-w-[540px] items-center justify-center py-8 sm:py-12 lg:py-0"
>
  {/* Gold ambient glow */}
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/15 blur-[100px] sm:h-[400px] sm:w-[400px]"
  />

  {/* Decorative orbit */}
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 aspect-square w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4A017]/10"
  />

  {/* Product image */}
  <motion.img
    src={WCLBReplay}
    alt="Paycheck Escape System"
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10 h-auto w-[90%] max-w-[480px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]"
  />
</motion.div>
      </div>
    </section>
  );
}