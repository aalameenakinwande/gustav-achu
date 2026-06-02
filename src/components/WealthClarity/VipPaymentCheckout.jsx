import React, { useEffect, useState } from "react";

const VipPaymentCheckout = () => {
  const eventDate = new Date("2026-02-26T18:00:00-05:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#050414] text-white px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-[1150px] mx-auto space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-6">
          {/* <p className="text-sm tracking-[0.3em] uppercase text-[#BD9A35]">
            PRE-CHECKOUT PAGE — VIP EXPERIENCE ($197)
          </p> */}

          {/* <p className="italic text-gray-400">
            This one must feel like identity elevation.
          </p> */}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            If You Want Direct Access & Precision — This Is Where You Step In
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto">
            VIP is for those who don’t want general advice, they want clarity tailored to their situation.
          </p>

           <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

   


         <video
            src="https://res.cloudinary.com/deofmlywm/video/upload/v1776164695/WCL_Blueprint_VIP_Ad_1_1_fverrn.mp4"
      autoPlay
      loop
      playsInline
      controls
      className="w-full h-full object-cover"
    />

      </div>
        </div>

        {/* WHAT VIP INCLUDES */}
        {/* <div className="bg-gradient-to-br from-[#141232] to-[#0E0B25] rounded-3xl p-8 sm:p-12 border border-[#BD9A35]/30 space-y-8 shadow-2xl">
          <h2 className="text-2xl font-semibold">
            Here’s What VIP Actually Includes
          </h2>

          <p className="text-gray-300">
            Everything in General Admission PLUS:
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Guaranteed Live Q&A With Gustav</li>
            <li>✔ Extended Private VIP Session (Additional 60 Minutes)</li>
            <li>✔ VIP-Only 50-10-20-20 Income Structuring Calculator</li>
            <li>✔ The Wealth Architect Playbook</li>
            <li>✔ Priority Access To Future Programs</li>
            <li>✔ Direct strategic clarity on your situation</li>
               <li>✔ 7-Day Money Back Guarantee
</li>
          </ul>

          <div className="pt-6 text-white font-medium space-y-1">
            <p>This is not about information.</p>
            <p>It’s about acceleration.</p>
          </div>
        </div> */}

          {/* <a
  href="https://buy.stripe.com/00w3cx1jF4Ks9OeeHOfw40D"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
    Proceed to Secure VIP Checkout ($197)
</button>


  </div>   <div className="text-sm text-gray-400 space-y-1 text-center mt-4">
          <p>✔ Instant VIP confirmation</p>
            <p>✔ Secure Stripe payment</p>
            <p>✔ 7-Day Money Back Guarantee</p>
            <p>✔ Immediate resource access</p>
          </div>
</a> */}

        {/* AFTER PAYMENT */}
        {/* <div className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Exactly What Happens After Payment
          </h2>

          <p className="text-gray-300">Clear process:</p>

          <ul className="space-y-3 text-gray-300">
            <li>1️⃣ You’re redirected to your VIP confirmation page</li>
            <li>2️⃣ You’ll receive TWO Zoom links (General + VIP session)</li>
            <li>3️⃣ You download ALL VIP resources immediately</li>
            <li>4️⃣ You receive your VIP confirmation email within minutes</li>
            <li>5️⃣ You prepare your questions in advance</li>
          </ul>

          <div className="font-medium space-y-1">
            <p>There is no ambiguity.</p>
            <p>You are fully onboarded instantly.</p>
          </div>
        </div> */}

          {/* <a
  href="https://buy.stripe.com/00w3cx1jF4Ks9OeeHOfw40D"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
    Proceed to Secure VIP Checkout ($197)
</button>


  </div>
     <div className="text-sm text-gray-400 space-y-1 text-center mt-4">
          <p>✔ Instant VIP confirmation</p>
            <p>✔ Secure Stripe payment</p>
            <p>✔ 7-Day Money Back Guarantee</p>
            <p>✔ Immediate resource access</p>
          </div>
</a> */}

        {/* TESTIMONIAL */}
     <div className="bg-[#111028] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-10">
  <h2 className="text-2xl font-semibold">What VIP Attendees Say</h2>

  {/* Testimonial 1 */}
  <div className="space-y-4">
    <p className="italic text-gray-300 leading-relaxed">
      “The Q&A alone was worth the investment. Gustav answered my exact situation and gave me clarity I’d been searching for for months.”
    </p>
    <p className="font-medium">— Geoffrey .S., Personal Assistant</p>
  </div>

  {/* Divider */}
  <div className="h-px bg-white/10" />

  {/* Testimonial 2 */}
  <div className="space-y-4">
    <p className="italic text-gray-300 leading-relaxed">
      “I was debating between General and VIP and almost chose the cheaper option. I’m glad I didn’t. During the VIP session, Gustav helped me restructure my income in real time and pointed out blind spots I didn’t even know I had. That one hour saved me months of trial and error. If you’re serious about building wealth correctly, VIP is the move.”
    </p>
    <p className="font-medium">— Lisa T., Healthcare Professional</p>
  </div>
</div>

  <a
  href="https://buy.stripe.com/00w3cx1jF4Ks9OeeHOfw40D"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
    Proceed to Secure VIP Checkout ($197)
</button>


  </div>
     <div className="text-sm text-gray-400 space-y-1 text-center mt-4">
          <p>✔ Instant VIP confirmation</p>
            <p>✔ Secure Stripe payment</p>
            <p>✔ 7-Day Money Back Guarantee</p>
            <p>✔ Immediate resource access</p>
          </div>
</a>


        {/* COMMON HESITATIONS */}
        <div className="space-y-14">
          <h2 className="text-2xl font-semibold">If You’re Thinking…</h2>

          {/* Difference Card */}
        <div className="bg-gradient-to-br from-[#141232] to-[#0E0B25] rounded-3xl p-8 sm:p-12 border border-[#BD9A35]/30 space-y-10">

  <h3 className="text-2xl font-semibold text-center">
    What's the difference between General Admission and VIP Experience?
  </h3>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* GENERAL CARD */}
    <div className="bg-[#111028] rounded-2xl p-8 border border-white/10 space-y-6">
      <p className="text-lg font-semibold text-white">
        General Admission ($97):
      </p>

      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>90-minute live webinar</p>
        <p>
          All core materials (workbook, templates, replay, accountability group, bonus playbook)
        </p>
      </div>
    </div>

    {/* VIP CARD */}
    <div className="bg-[#111028] rounded-2xl p-8 border border-[#BD9A35]/40 shadow-xl shadow-[#BD9A35]/10 space-y-6 relative">

      {/* VIP Badge */}
      {/* <div className="absolute -top-3 right-6 bg-[#BD9A35] text-black text-xs font-semibold px-3 py-1 rounded-full">
      MOST IMPORTANT
      </div> */}

      <p className="text-lg font-semibold text-white">
        VIP Experience ($197):
      </p>

      <ul className="space-y-3 text-gray-300 leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          Everything in General Admission
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          Extended access to the session (VIP stays after the general webinar: 6:00 PM – 8:30 PM EST)
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          Guaranteed Q&A time with Gustav about your specific situation
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          Extended live experience with an additional 1-hour session (after the 90-minute main session)
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          VIP-only Personal 90-Day Plan Review Template
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          First access to future offers
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          VIP only bonus: The wealth architect playbook
        </li>
        <li className="flex gap-3">
          <span className="text-[#BD9A35]">•</span>
          If clarity and speed matter more than saving a few dollars, VIP is the obvious choice.
        </li>
      </ul>
    </div>

  </div>

  <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
    <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
      The VIP experience is intentionally limited for ambitious action-takers who refuse to guess. You get Gustav’s direct attention through live interaction and priority Q&A, personalized guidance aligned to your goals, and real-time insight—guidance most attendees never get—so you leave with clarity, confidence, and a clear path forward.
    </p>
  </div>

</div>


          {/* Money Concern */}
          <div className="bg-[#111028] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-4">
            <h3 className="text-xl font-semibold">
              I don't have a lot of money to invest. Will this still work for me?
            </h3>

            <p className="text-gray-300">Absolutely.</p>

            <p className="text-gray-300">
              This webinar is specifically designed for people starting small. Gustav himself started with just 20% of his paycheck going into his 401(k).
            </p>

            <p className="text-gray-300">
              You'll learn how to build wealth even if you're starting with less than $500.
            </p>
          </div>

          {/* Refund */}
          <div className="bg-[#111028] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-4">
            <h3 className="text-xl font-semibold">
              Is there a refund policy?
            </h3>

          <div className="space-y-4 text-gray-300 leading-relaxed">
  <p>Yes</p>

  <p>
    We stand behind the transformation of this workshop.
  </p>

  <p>
    If you fully participate and you do not leave with:
  </p>

  <p>
    • Absolute clarity on where you stand financially
  </p>

  <p>
    • A structured 90-day wealth execution plan
  </p>

  <p>
    • A clear roadmap for turning income into protected, growing assets
  </p>
  < br/>

  <p>
Simply email our support team within 7 days of the event and we will issue a full refund.
  </p>

  <p>
No friction. No pressure.
  </p>

  <p>
This workshop is built on a proven framework — not hype, not motivation, not theory.
  </p>

  <p>
If it doesn’t deliver clarity and direction for you, you shouldn’t pay for it.
  </p>

  <p>
We only ask that you attend and engage in the training before requesting a refund.
  </p>

  <p>
VIP Ticket holders receive extended clarity support and priority Q&A, making refunds extremely rare.
  </p>
</div>
          </div>
        </div>

          <a
  href="https://buy.stripe.com/00w3cx1jF4Ks9OeeHOfw40D"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
    Proceed to Secure VIP Checkout ($197)
</button>


  </div>
     <div className="text-sm text-gray-400 space-y-1 text-center mt-4">
          <p>✔ Instant VIP confirmation</p>
            <p>✔ Secure Stripe payment</p>
            <p>✔ 7-Day Money Back Guarantee</p>
            <p>✔ Immediate resource access</p>
          </div>
</a>

        {/* COUNTDOWN */}
        <div className="bg-gradient-to-r from-[#1A173A] to-[#0E0B25] rounded-3xl p-10 text-center border border-[#BD9A35]/40 space-y-6">
          <h2 className="text-2xl font-semibold">VIP Is Limited</h2>

          {timeLeft ? (
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="bg-black/40 rounded-xl py-4">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs uppercase text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Registration Closed</p>
          )}

          <p className="text-gray-300">
            VIP seats are capped at 30 participants.
            When they’re gone, they’re gone.
          </p>

          <p className="text-gray-300">
            This is not artificial scarcity.
            It protects Q&A quality.
          </p>
        </div>

        {/* WHO VIP IS FOR */}
        {/* <div className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold">Who VIP Is For</h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-gray-300">
            <p>✔ Professionals who want structure fast</p>
            <p>✔ Action-takers</p>
            <p>✔ People serious about implementation</p>
            <p>✔ Those who value access over savings</p>
          </div>

          <p className="font-medium">
            If that’s you — don’t overthink it.
          </p>
        </div> */}

        {/* CTA */}
        <div className="text-center space-y-4">
         <a
  href="https://buy.stripe.com/00w3cx1jF4Ks9OeeHOfw40D"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
    Proceed to Secure VIP Checkout ($197)
  </button>

  </div>
</a>


          <div className="text-sm text-gray-400 space-y-1">
            <p>✔ Instant VIP confirmation</p>
            <p>✔ Secure Stripe payment</p>
            <p>✔ 7-Day Money Back Guarantee</p>
            <p>✔ Immediate resource access</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VipPaymentCheckout;
