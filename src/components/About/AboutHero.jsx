import React from "react";
import GustavImage from "../../images/gustavImages/ImageGustav.webp";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const AboutHero = () => {
  return (
    <section className="w-full bg-black text-white">

      {/* ================= HERO QUOTE SECTION ================= */}
      <div className="w-full pt-32 lg:pt-44 min-h-[150px] flex items-center justify-center text-center px-6">
        <div className="max-w-[1150px] space-y-4"> {/* Slightly wider & reduced spacing */}

          <h1 className="uppercase tracking-[0.25em] leading-snug text-sm md:text-lg lg:text-xl font-light">
            “YOU CAN
ONLY
UNCOVER WHAT YOU COULD
BECOME BY GIVING UP WHAT YOU ARE”
          </h1>

          {/* <p className="text-gray-300 text-sm md:text-base">
            “Helping people take control of their finances and the future they leave behind.”
          </p> */}

          <div className="space-y-1">
            <p className="text-[#D4AF37] font-semibold text-lg tracking-wide">
              Gustav B. Achu
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Wealth & Legacy Coach | Author | Investor
            </p>
          </div>

        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-44 py-12 lg:py-16"> {/* Increased width & reduced top-bottom padding */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center"> {/* Reduced gap slightly */}

          {/* Left - Image */}
        <div className="flex justify-center lg:justify-start">
  <img
    src={GustavImage}
    alt="Gustav Achu"
className="w-[350px] md:w-[450px] lg:w-[650px] object-contain rounded-3xl shadow-2xl border border-white/10"
  />
</div>


          {/* Right - Content */}
          <div className="space-y-6 text-center lg:text-left"> {/* Reduced spacing between blocks */}

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-[0.12em] text-[#D4AF37] leading-tight">
              GUSTAV ACHU
            </h2>

            {/* Origin Line */}
            <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
              From Bamenda to the world
            </p>

            {/* Body Content */}
         <p className="text-base md:text-lg leading-relaxed">
  From Bankruptcy To $1,000,000+ Portfolio. Gustav isn't a guru. He's not someone who inherited wealth or got lucky. He's a regular person who made intentional decisions to change his financial future.
</p>

<ul className="list-disc list-inside space-y-2 pl-4">
  <li>Started as a Nursing Assistant in Minnesota</li>
  <li>Became a Licensed Practical Nurse and saved $90,000</li>
  <li>Studied International Business & Marketing at UC Berkeley</li>
  <li>
    Lost everything doing business in Africa — foreclosed on two homes, filed for bankruptcy,
    paid over $100,000 in debt, and lived frugally for years
  </li>
  <li>
    Made a decision: <span className="italic">"This is the last time any circumstance will meet me in life unprepared."</span>
  </li>
</ul>

<p className="text-base md:text-lg leading-relaxed">
  That decision changed everything. Gustav committed to investing consistently, educating himself,
  learning from mistakes, and building a structured approach to wealth.
</p>

<p className="text-base md:text-lg leading-relaxed">
  Today, he helps professionals and families avoid costly financial mistakes using a simple,
  repeatable wealth-building strategy focused on consistency, discipline, and long-term thinking.
</p>

<div className="mt-4 space-y-2">
  <h4 className="text-lg font-semibold text-[#D4AF37]">
    Today, Gustav has:
  </h4>
  <ul className="space-y-2">
    <li>✔️ Built a portfolio worth over $1,000,000</li>
    <li>✔️ Helped clients gain financial clarity and start building wealth</li>
    <li>✔️ Proven that everyday people can build wealth without quitting their 9–5</li>
  </ul>
</div>

<p className="italic text-gray-200">
  "Your paycheck isn't just to live on; it's to plant seeds that duplicate over time.
  True wealth is not just money; it's mindset, stewardship, and legacy."
</p>

<p className="text-white font-medium">
  Working with Gustav gives you clarity, structure, and confidence — so your money works with intention and your future is built on purpose.
</p>

          </div>
        </div>
      </div>

      {/* ================= CONTACT CTA ================= */}
      <div className="w-full border-t border-gray-800 py-12 px-6 bg-black text-white">

  {/* Headline */}
  {/* <h3 className="text-xl md:text-3xl font-semibold text-[#D4AF37] text-center">
    Want to speak with Gustav?
  </h3>
  <p className="text-gray-400 mt-4 text-sm md:text-base text-center max-w-[700px] mx-auto">
    Submit your inquiry below and we’ll get back to you within 2 business days.
  </p> */}

  {/* CTA Card */}
  {/* <div className="bg-white text-black border border-gray-200 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-10 max-w-[900px] mx-auto">
    
    <div>
      <h4 className="text-xl font-bold mb-2">Connect with Gustav</h4>
      <p className="text-gray-600 mb-4 md:mb-0 text-sm md:text-lg">
        Have questions or want to work with Gustav? Submit your inquiry or book a session — response within 2 business days.
      </p>
    </div>
     */}
    {/* <a
      href="https://calendly.com/gustavachu77/stage-discovery-meeting"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-10 text-sm md:text-lg whitespace-nowrap rounded-xl shadow-md  transition transform hover:scale-105"
    >
      Book Your Session
    </a>

  </div> */}

  {/* Socials */}
  <div className="flex items-center justify-center gap-6 mt-6">
    <p className="text-gray-400 font-medium text-sm md:text-lg">Follow Gustav:</p>
    <a href="https://www.linkedin.com/in/gustav-achu-618780103/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110">
      <FaLinkedin size={26} />
    </a>
    <a href="https://www.facebook.com/gustav.achu.1/?_rdc=2&_rdr#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110">
      <FaFacebook size={26} />
    </a>
    <a href="https://www.instagram.com/gachu77" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110">
      <FaInstagram size={26} />
    </a>
    <a href="https://www.youtube.com/@YouREnoughTV" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition transform hover:scale-110">
      <FaYoutube size={26} />
    </a>
  </div>

</div>

    </section>
  );
};

export default AboutHero;
