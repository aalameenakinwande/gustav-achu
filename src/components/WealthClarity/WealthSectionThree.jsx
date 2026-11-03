import React from "react";

// Replace these imports with the actual locations of your images
import gustavImage from '../../images/gustavImages/EventGustav.webp';
import davidImage from '../../images/EventImage/2.png';
import sarahImage from '../../images/EventImage/1.jpeg';
import michaelImage from '../../images/EventImage/3.png';

const WealthSectionThree = () => {
  const scrollToConsultation = () => {
    document
      .getElementById("consultation-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

 const testimonials = [
  {
    quote:
      "I came into the session thinking I needed better investments. What I actually needed was a better financial structure. Gustav helped me identify blind spots in my portfolio, unnecessary risk exposure, and gave me a roadmap that completely changed how I think about wealth building.",
    name: "David M.",
    role: "Operations Manager",
    image: davidImage,
  },
  {
    quote:
      "This was one of the most valuable financial conversations I’ve ever had. In less than 1 hour, Gustav helped me understand where my money was leaking, where I was under-positioned, and how to think strategically about long-term wealth opportunities.",
    name: "Sarah K.",
    role: "Healthcare Worker",
    image: sarahImage,
  },
  {
    quote:
      "Honestly, I expected some general financial advice like other finance experts I had met. What I got was a complete breakdown of how my finances were structured and what needed to change. I left the session with clarity, direction, and a much stronger understanding of how to position my capital to build wealth like the 1%.",
    name: "Michael A.",
    role: "IT Professional",
    image: michaelImage,
  },
];

  const achievements = [
    "Built a portfolio worth over $1,000,000",
    "Helped hundreds of professionals and entrepreneurs gain financial clarity",
    "Proven that regular people can build wealth without quitting their 9–5",
    "Developed practical wealth-building frameworks focused on structure, stewardship, and long-term positioning",
  ];

  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            TESTIMONIALS
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            What People Are Saying{" "}
            <span className="text-[#BD9A35]">
              About The Consultation...
            </span>
          </h2>

          <div className="w-16 h-1 bg-[#BD9A35] mx-auto mt-5" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                relative
                bg-[#0D0D0D]
                border border-white/10
                rounded-2xl
                p-6 md:p-7
                hover:border-[#BD9A35]/50
                transition-all duration-300
                flex flex-col
              "
            >
              {/* Quote Mark */}
              <div className="text-[#BD9A35] text-5xl font-serif leading-none mb-4">
                “
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
                {testimonial.quote}
              </p>

              {/* Client */}
              <div className="mt-7 pt-5 border-t border-white/10 flex items-center gap-4">
                {/* Headshot */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#BD9A35]/40">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
              <div>
  <p className="font-bold text-white">
    {testimonial.name}
  </p>

  <p className="mt-1 text-xs uppercase tracking-wider text-[#BD9A35]">
    {testimonial.role}
  </p>
</div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            WHY TRUST ME
        ====================================================== */}

        <div className="mt-20 md:mt-28">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Why Trust Me With Your{" "}
              <span className="text-[#BD9A35]">
                Financial Future?
              </span>
            </h2>

            <div className="w-16 h-1 bg-[#BD9A35] mx-auto mt-6" />
          </div>

          {/* Main Story Layout */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">

            {/* =================================================
                GUSTAV IMAGE
            ================================================== */}

            <div className="lg:sticky lg:top-10">
              <div className="relative max-w-xl mx-auto lg:max-w-none">

                {/* Gold Glow */}
                <div className="absolute -inset-2 bg-[#BD9A35]/10 blur-2xl rounded-3xl" />

                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D0D0D]">

                  <img
                    src={gustavImage}
                    alt="Gustav"
                    className="
                      w-full
                      h-auto
                      object-cover
                      object-top
                      block
                    "
                  />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>

                {/* Small Label */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    bg-black/80
                    backdrop-blur-md
                    border border-white/10
                    rounded-xl
                    px-5
                    py-4
                  "
                >
                  <p className="text-[#BD9A35] text-xs uppercase tracking-[0.2em] font-bold">
                    Gustav ACHU
                  </p>

                  {/* <p className="text-white text-sm mt-1">
                    Wealth Strategist & Financial Educator
                  </p> */}
                </div>
              </div>
            </div>

            {/* =================================================
                STORY CONTENT
            ================================================== */}

           
<div className="space-y-7 text-gray-300 text-sm md:text-base leading-relaxed">

  <div>
    <h3 className="text-2xl md:text-3xl leading-tight tracking-tight text-white font-semibold">
      From Bankruptcy To $1,000,000+ Portfolio.
    </h3>

    <p className="mt-5">
      Gustav isn't a guru. He's not someone who inherited wealth or got lucky.
      He's a regular person who made intentional decisions to change his
      financial future.
    </p>
  </div>

  <ul className="space-y-4">
    {[
      "Started as a Nursing Assistant in Minnesota",
      "Became a Licensed Practical Nurse and saved $90,000",
      "Studied International Business & Marketing at UC Berkeley",
      "Lost everything doing business in Africa — foreclosed on two homes, filed for bankruptcy, paid over $100,000 in debt, and lived frugally for years",
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>

  <p>
    <span className="font-semibold text-white">Made a decision:</span>
  </p>

  <blockquote className="border-l-2 border-[#D4AF37] pl-6 py-2">
    <p className="text-xl md:text-2xl text-white font-semibold italic leading-relaxed">
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
    on consistency, discipline, and long-term thinking.
  </p>

</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthSectionThree;