
import { ArrowUpRight, Quote } from "lucide-react";
import HeaderImage from "../../images/gustavImages/EventGustav.webp";

export default function ComponentFive() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image section */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="relative">
              {/* Decorative frame */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full border border-[#D4AF37]/40 sm:-right-5 sm:-top-5"
              />

              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                <img
                  src={HeaderImage}
                  alt="Gustav Achu"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
                    The Man Behind the Mission
                  </span>

                  <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                    Gustav Achu
                  </h3>

                  <p className="mt-2 text-sm text-white/70">
                    From financial setbacks to building lasting wealth.
                  </p>
                </div>
              </div>

         
            </div>
          </div>

          {/* Story section */}
          <div className="pt-6 lg:pt-0">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#D4AF37]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
                Why Gustav?
              </span>
            </div>
{/* 
            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Built From Experience.
              <span className="mt-2 block text-white/45">
                Not Theory.
              </span>
            </h2> */}

            {/* Quote icon */}
            <div className="mb-5 mt-9 flex h-10 w-10 items-center justify-center border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06]">
              <Quote
                size={19}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />
            </div>

            {/* Story copy */}
         
<div className="space-y-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
  <h3 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
    From Bankruptcy To{" "}
    <span className="text-[#D4AF37]">$1,000,000+ Portfolio.</span>
  </h3>

  <p>
    Gustav isn't a guru. He's not someone who inherited wealth or got lucky.
    He's a regular person who made intentional decisions to change his
    financial future.
  </p>

  <ul className="space-y-3">
    {[
      "Started as a Nursing Assistant in Minnesota",
      "Became a Licensed Practical Nurse and saved $90,000",
      "Studied International Business & Marketing at UC Berkeley",
      "Lost everything doing business in Africa — foreclosed on two homes, filed for bankruptcy, paid over $100,000 in debt, and lived frugally for years",
    ].map((milestone) => (
      <li key={milestone} className="flex items-start gap-3">
        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
        <span>{milestone}</span>
      </li>
    ))}
  </ul>

  <blockquote className="border-l-2 border-[#D4AF37] py-2 pl-5">
    <p className="text-lg font-medium italic leading-relaxed text-white sm:text-xl">
      "This is the last time any circumstance will meet me in life unprepared."
    </p>
  </blockquote>

  <p>
    That decision changed everything. Gustav committed to investing
    consistently, educating himself, learning from mistakes, and building
    a structured approach to wealth.
  </p>

  <p>
    Today, he helps professionals and families avoid costly financial
    mistakes using a simple, repeatable wealth-building strategy focused
    on{" "}
    <span className="font-semibold text-[#D4AF37]">
      consistency, discipline, and long-term thinking.
    </span>
  </p>
</div>


         

         

            {/* CTA */}
            <a
              href="https://gustavachu.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-14 items-center justify-between gap-8 border border-[#D4AF37]/50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black sm:px-6 sm:text-sm"
            >
              <span>Read Gustav's Story</span>

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
