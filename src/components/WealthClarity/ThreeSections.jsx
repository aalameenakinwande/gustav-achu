import {
  ArrowRight,
  Check,
  TrendingDown,
  Lock,
  MoveDown,
} from "lucide-react";

const STRIPE_LINK =
  "https://buy.stripe.com/4gMaEZ9Qb1yg8Ka8jqfw40W";

const ThreeSections = () => {
  return (
    <main className="w-full overflow-hidden bg-black text-white">

      {/* =========================================================
          SECTION 1 — HERO + VSL
      ========================================================= */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:py-10 lg:mt-24">

        {/* Background effects */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[80%] max-w-[900px] -translate-x-1/2 rounded-full bg-[#0b2a5b]/30 blur-[120px] sm:h-[450px]" />

        <div className="pointer-events-none absolute left-1/2 top-[35%] h-[250px] w-[70%] max-w-[700px] -translate-x-1/2 rounded-full bg-[#c9a227]/5 blur-[100px]" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

      


          {/* Headline */}
          <div className="mx-auto max-w-6xl text-center">

            <h1 className="text-2xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">

              You Don’t Need More Money…

              <span className="mt-4 block text-white">
                You Need a Better System for the
              </span>

              <span className="mt-2 block bg-gradient-to-r from-[#b89016] via-[#e4c65a] to-[#a67c00] bg-clip-text text-transparent">
                Money You Already Make
              </span>

            </h1>


            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:text-xl">
Learn the exact Paycheck Escape System that helped me build a million-dollar portfolio, without quitting my job, starting with a high income, or relying on complicated financial strategies            </p>

          </div>


          {/* =====================================================
              LARGE CENTERED VSL
          ===================================================== */}
          <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-14">

            {/* Video label */}
            <div className="mb-3 flex items-center justify-between px-1 sm:mb-4">

              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-[10px] sm:tracking-[0.25em]">
                Watch the video
              </span>

              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-gray-600 sm:text-[10px] sm:tracking-[0.2em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                Video
              </div>

            </div>


            {/* Video */}
     <div className="relative rounded-[18px] border border-[#c9a227]/25 bg-[#080808] p-1.5 shadow-[0_0_70px_rgba(201,162,39,0.07)] sm:rounded-[24px] sm:p-2 md:rounded-[30px] md:p-3">

  <div className="absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

  <div className="relative aspect-video overflow-hidden rounded-[13px] bg-black sm:rounded-[18px] md:rounded-[24px]">

    <video
      className="absolute inset-0 h-full w-full object-cover"
      controls
      playsInline
      preload="metadata"
      poster=""
    >
      <source
        src="https://res.cloudinary.com/deofmlywm/video/upload/v1750710202/P2P_Ad_VSL_2nd_August_1_1_1_zdidnu.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

  </div>

</div>

          </div>


          {/* =====================================================
              CTA
          ===================================================== */}
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


      {/* =========================================================
          SECTION 2 — PATTERN INTERRUPT
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-26">

        <div className="pointer-events-none absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#0b2a5b]/30 blur-[120px] sm:-right-60 sm:h-[500px] sm:w-[500px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">

         

            <h2 className="text-2xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">

              Let’s be honest…

              <span className="mt-4 block text-gray-400">
                You’re not broke because you don’t earn enough.
              </span>

            </h2>

            <p className="mt-6 text-base text-gray-500 sm:text-lg">
              You’re stuck because:
            </p>

          </div>


          {/* Pain points */}
          <div className="mx-auto mt-11 max-w-5xl space-y-3 sm:mt-14">

            {[
              "Money comes in… but you don’t control where it goes",
              "You intend to save… but life keeps “happening”",
              "Every raise feels good… for about 30 days",
              "And somehow… you're still in the same financial position",
            ].map((item, index) => (

              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-white/7 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#c9a227]/25 hover:bg-white/[0.04] sm:items-center sm:p-6"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9a227]/20 bg-[#c9a227]/5 sm:h-10 sm:w-10">

                  <Check
                    size={16}
                    className="text-[#d4af37]"
                    strokeWidth={2.5}
                  />

                </div>

                <p className="text-sm leading-6 text-gray-300 sm:text-base md:text-lg">
                  {item}
                </p>

              </div>

            ))}

          </div>


          {/* Truth */}
          <div className="mx-auto mt-12 max-w-4xl sm:mt-16">

            <div className="relative overflow-hidden rounded-[24px] border border-[#c9a227]/20 bg-gradient-to-br from-[#0c1a2d] to-[#070707] p-7 text-center sm:rounded-[28px] sm:p-10 md:p-12">

              <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#123e73]/20 blur-[80px]" />

              <div className="relative">

                <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
                  Here’s the truth nobody explains clearly
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">

                  Income doesn’t create wealth.

                  <span className="mt-2 block bg-gradient-to-r from-[#c9a227] to-[#e5ca62] bg-clip-text text-transparent">
                    Systems do.
                  </span>

                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3 — AGITATION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#062d63]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-5xl text-center">

           

            <h2 className="text-2xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">

              Right now, whether you realize it or not…

              <span className="mt-4 block text-gray-500">
                Your money is being silently:
              </span>

            </h2>

          </div>


          {/* Cards */}
          <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">

            {/* LEAKED */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a227]/25 sm:rounded-[28px] sm:p-7">

            
              <p className="mt-12 text-[9px] uppercase tracking-[0.25em] text-gray-600">
                01
              </p>

              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Leaked
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
               Leaked through invisible habits

              </p>

              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-red-500/5 blur-[60px]" />

            </div>


            {/* TRAPPED */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a227]/25 sm:rounded-[28px] sm:p-7">

           

              <p className="mt-12 text-[9px] uppercase tracking-[0.25em] text-gray-600">
                02
              </p>

              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Trapped
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
           Trapped with no structure

              </p>

              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#c9a227]/5 blur-[60px]" />

            </div>


            {/* MISALLOCATED */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 sm:rounded-[28px] sm:p-7">

            

              <p className="mt-12 text-[9px] uppercase tracking-[0.25em] text-gray-600">
                03
              </p>

              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Misallocated
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
             Misallocated into things that don’t grow

              </p>

              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-500/5 blur-[60px]" />

            </div>

          </div>


          {/* Bottom message */}
         <div className="mx-auto mt-16 max-w-5xl border-t border-white/8 pt-12 sm:mt-20 sm:pt-14">

  <div className="flex flex-col">

    {/* TOP */}
<div className="relative">
  {/* Small accent line */}
  <div className="mb-6 flex items-center gap-3">
    <span className="h-px w-8 bg-[#c9a227]" />
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
      So even if you:
    </p>
  </div>

  <div className="space-y-3">
    {[
      "Earn more",
      "Work harder",
      "Try to “be disciplined”",
    ].map((item, index) => (
      <div
        key={item}
        className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] px-5 py-4 transition-all duration-300 hover:border-[#c9a227]/30 hover:bg-white/[0.045]"
      >
        <div className="flex items-center gap-4">
          {/* Number */}
          <span className="text-xs font-medium tabular-nums text-[#c9a227]/70">
            0{index + 1}
          </span>

          {/* Divider */}
          <span className="h-5 w-px bg-white/10" />

          {/* Text */}
          <span className="text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-lg">
            {item}
          </span>
        </div>

        {/* Arrow */}
        <span className="text-sm text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#c9a227]">
          →
        </span>
      </div>
    ))}
  </div>
</div>

    {/* BOTTOM */}
    <div className="mt-10 border-t border-white/8 pt-10 sm:mt-12 sm:pt-12">

      <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
        You still end up in the same loop.
      </p>

      <p className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">

        Because without a system…

        <span className="mt-2 block text-[#d4af37]">
          More money just creates bigger problems.
        </span>

      </p>

    </div>

  </div>

</div>


          {/* CTA */}
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

export default ThreeSections;