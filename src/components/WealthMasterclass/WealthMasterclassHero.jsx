import React, { useEffect, useState } from "react";
import BannerImage from "../../images/EventImage/April.webp"

const WealthMasterclassHero = () => {



const [timeLeft, setTimeLeft] = useState("");

const getCSTNow = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;

  // Always UTC -6 (strict CST)
  return new Date(utc - 6 * 60 * 60000);
};

const getNextThursday = () => {
  const cstNow = getCSTNow();

  const day = cstNow.getDay(); // 0 = Sunday
  const daysUntilThursday = (4 - day + 7) % 7 || 7;

  const nextThursday = new Date(cstNow);
  nextThursday.setDate(cstNow.getDate() + daysUntilThursday);
  nextThursday.setHours(19, 0, 0, 0); // 7PM CST

  return nextThursday;
};

useEffect(() => {
  const interval = setInterval(() => {
    const cstNow = getCSTNow();
    let target = getNextThursday();

    if (cstNow > target) {
      target.setDate(target.getDate() + 7);
    }

    const diff = target - cstNow;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
   <section className="relative w-full bg-[#0A0A0D] text-white py-20 lg:py-20 px-4 overflow-hidden">

  {/* Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#BD9A35]/10 blur-3xl opacity-40"></div>

  <div className="max-w-[1100px] mx-auto text-center relative z-10">

    {/* HEADLINE */}
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">






      You Earn{" "}
      <span className="bg-gradient-to-r from-[#C9A227] via-[#FFD700] to-[#B8962E] bg-clip-text text-transparent">
        $100,000+
      </span>{" "}
So Why Does It Still Feel Like You’re Falling Behind?
Discover the 5 Hidden Money Leaks Quietly Keeping You Stuck    </h1>

    {/* SUBTEXT */}
    <p className="mt-6 text-base md:text-lg text-white/70 max-w-4xl mx-auto">
In this free 60-minute live masterclass, you’ll uncover the 5 hidden money leaks silently draining your income—and how to fix them without working more, earning more, or taking risky investments.   </p>



  {/* SUBTEXT */}
    <p className="mt-6 text-base md:text-lg text-white/70 max-w-4xl mx-auto">
Taught by Gustav B. Achu — from bankruptcy & foreclosure to a $1,000,000+ portfolio while working as full-time employee and part-time entrepreneur.</p>

    {/* VIDEO */}
    <div className="mt-12 relative">

      {/* Glow Frame */}
      <div className="absolute inset-0 bg-[#BD9A35]/10 blur-2xl opacity-30 rounded-2xl"></div>

      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

   


         <video
            src="https://res.cloudinary.com/deofmlywm/video/upload/v1776067250/Paycheck_Trap_Masterclass_Ad_1_1_yyma43.mp4"
      autoPlay
      loop
      playsInline
      controls
      className="w-full h-full object-cover"
    />

      </div>
    </div>

    {/* COUNTDOWN */}
    <div className="mt-10">
      <p className="text-red-500 font-extrabold text-sm tracking-widest uppercase">
        Next Live Session Starts In
      </p>

      <div className="mt-3 text-3xl md:text-5xl font-extrabold text-yellow-400">
        {timeLeft}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-8">
    <a
    href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
      hover:bg-red-700 hover:scale-105 transition-transform duration-300 "
    >
      SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
    </button>
  </a>

  {/* 🚨 Warning Message */}
  <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p>
    </div>



<div className="max-w-[1100px] mx-auto mt-28 px-4">

  <div className="grid md:grid-cols-2 gap-16">

    {/* LEFT SIDE */}
    <div className="space-y-10">

      {/* Intro Card */}
      <div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
          You’re doing everything right.
        </h2>

        <div className="mt-8 space-y-3 text-white/80 text-base md:text-lg">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/70"></span>
            <p>You earn well</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/70"></span>
            <p>You work hard</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/70"></span>
            <p>You’re not careless with money</p>
          </div>
        </div>
      </div>

      {/* Break Section */}
      <div className="border-l border-white/10 pl-6 space-y-5">
        <p className="text-white/60 text-base md:text-lg">
          But at the end of the month…
        </p>

        <p className="text-white text-xl md:text-2xl font-medium leading-snug">
          You still wonder where it all went.
        </p>

        <div className="space-y-3 text-base md:text-lg text-white/80">
          <p>You’re not broke.</p>
          <p>But you’re not building wealth either.</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-10">

      {/* Highlight Moment */}
      <div>
        <p className="text-white/70 text-base md:text-lg">And that gap?</p>

        <div className="mt-3 inline-block px-6 py-3 rounded-xl bg-white/5 border border-white/10">
          <p className="text-white text-xl md:text-3xl font-bold">
            That’s the Paycheck Trap.
          </p>
        </div>
      </div>

      {/* Reality Shift */}
      <div className="space-y-5">
        <p className="text-white/80 text-base md:text-lg">
          Most people think they need to earn more to fix it.
        </p>

        <p className="text-white text-xl md:text-2xl font-semibold">
          They don’t.
        </p>

        <p className="text-white text-lg md:text-xl font-medium">
          They’re leaking money in places they can’t see.
        </p>
      </div>

      {/* Consequence Block */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-white text-base md:text-lg leading-relaxed">
          And if you don’t fix those leaks now…
        </p>

        <p className="mt-3 text-white/80 text-base md:text-lg leading-relaxed font-bold">
          You could stay stuck in the same cycle for the next 5–10 years earning more, but never really getting ahead.
        </p>
      </div>

      {/* Offer Block */}
      <div>
        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          In this free 60-minute masterclass, you’ll discover the 5 hidden money leaks quietly draining your income and how to fix them without earning more or taking risky investments.
        </p>
      </div>

    </div>

  </div>

</div>


  </div>
</section>
  );
};

export default WealthMasterclassHero;