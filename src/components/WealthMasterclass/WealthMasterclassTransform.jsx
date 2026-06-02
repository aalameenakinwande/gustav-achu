import React, { useEffect, useState } from "react";

const WealthMasterclassTransform = () => {

  const [timeLeft, setTimeLeft] = useState("");

const getNextThursday = () => {
  const now = new Date();

  // Convert to CST (UTC-6 or UTC-5 with DST)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const cstNow = new Date(utc - 6 * 60 * 60000);

  const day = cstNow.getDay(); // 0 = Sunday
  const daysUntilThursday = (4 - day + 7) % 7 || 7;

  const nextThursday = new Date(cstNow);
  nextThursday.setDate(cstNow.getDate() + daysUntilThursday);
  nextThursday.setHours(19, 0, 0, 0); // 7PM

  return nextThursday;
};

useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date();

    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const cstNow = new Date(utc - 6 * 60 * 60000);

    let target = getNextThursday();

    // If already past, move to next week
    if (cstNow > target) {
      target.setDate(target.getDate() + 7);
    }

    const diff = target - cstNow;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft(
      `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
    );
  }, 1000);

  return () => clearInterval(interval);
}, []);



  return (
    <section className="relative w-full bg-[#0A0A0D] text-white py-24 px-4 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#BD9A35]/10 blur-3xl opacity-30"></div>

      <div className="max-w-[1440px] mx-auto relative z-10 space-y-20">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT COPY */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              TRANSFORM THE WAY YOU THINK ABOUT MONEY
            </h2>

            <div className="mt-8 space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                Learn how to finally stop money from slipping through your hands and start feeling in control of every dollar you earn. Discover the simple approach that removes the guesswork and shows you exactly what to do each month. This is the same proven framework Gustav used to go from bankruptcy and foreclosure to over $1,000,000 in portfolio value, while working a full-time 9-to-5, and that has helped hundreds of his clients begin building their first $100,000 portfolios.
              </p>
            </div>
          </div>

          {/* RIGHT COPY */}
        <div className="space-y-6">

  {/* HEADER */}
  <div className="space-y-2">
    <p className="text-white text-lg md:text-xl font-semibold">
      The Transformation You Will Experience
    </p>

    <p className="text-white/70 text-base md:text-lg leading-relaxed">
      By the end of this 60-minute free masterclass, you will walk away with:
    </p>
  </div>

  {/* ITEMS */}
  <div className="space-y-4">

    <div className="border border-white/10 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        ✔ ️ The name and nature of every leak quietly costing you money each month. You will know exactly what to do every month.
      </p>
    </div>

    <div className="border border-white/10 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        ✔ A clear understanding of what’s been holding you back and exactly how to fix it
      </p>
    </div>

    <div className="border border-white/10 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        ✔ A simple way to take control of your money so you’re no longer guessing what to do next, so you stop second-guessing your money
      </p>
    </div>

    <div className="border border-white/10 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        ✔ Your personal financial snapshot- completed live during the session
      </p>
    </div>

    <div className="border border-white/10 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        ✔ Your first step toward a personalised wealth-building plan- you finally feel in control
      </p>
    </div>

    <div className="border border-white/10 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        ✔ The confidence of finally knowing what to do with your money every single month
      </p>
    </div>

  </div>

</div>
        </div>

        {/* CTA BLOCK */}
        <div className="max-w-3xl mx-auto text-center border border-white/10 rounded-xl p-10 bg-white/5 backdrop-blur-sm">


        <div className="mb-8 text-center">
  <p className="text-red-500 font-extrabold text-sm md:text-base tracking-widest uppercase">
    Next Live Session Starts In
  </p>

  <div className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 tracking-wide">
    {timeLeft}
  </div>
</div>

           {/* <button
            className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          >
            SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
          </button> */}


<a
  href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
    hover:bg-red-700 hover:scale-105 transition-transform duration-300"
  >
    SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
  </button>
</a>

  <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p>


        

        </div>

        

      </div>
    </section>
  );
};

export default WealthMasterclassTransform;