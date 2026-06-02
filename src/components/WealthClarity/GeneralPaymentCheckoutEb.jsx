import React, { useEffect, useState } from "react";
import "./Generalanimations.css";

const GeneralPaymentCheckoutEb = () => {
  const eventDate = new Date("2026-02-26T18:00:00-05:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return null;
    }

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
    <section className="w-full bg-[#07061A] text-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-[1100px] mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-6">
          {/* <p className="text-sm tracking-widest uppercase text-[#BD9A35]">
            PRE-CHECKOUT PAGE — GENERAL ADMISSION ($77)
          </p> */}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            You’re One Step Away From Structuring Your Wealth With Clarity
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            General Admission is built to give you a clear, actionable 90-day financial roadmap — not theory, not motivation — structure.
          </p>

          
        </div>

        {/* WHAT YOU'RE GETTING */}
        <div className="bg-[#111028] rounded-3xl p-6 sm:p-10 space-y-6 border border-white/10">
          <h2 className="text-2xl font-semibold">
            Here’s Exactly What You’re Getting
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ 90-Minute Live Wealth Blueprint Session With Gustav Achu</li>
            <li>✔ The Wealth Clarity Workbook (PDF)</li>
            <li>✔ 90-Day Money Plan Template (Plug-and-Apply Framework)</li>
            <li>✔ 30-Day Replay Access</li>

         




            <li>✔ 14-Day Accountability Sprint (#YouREnough WhatsApp Community)</li>
            <li>✔ Bonus: The Ultimate Investment Playbook</li>
               <li>✔ 7-Day Money Back Guarantee
</li>
          </ul>

          <div className="pt-4 space-y-2 text-white font-medium">
            <p>This is not passive education.</p>
            <p>This is structured implementation.</p>
          </div>

          <a
  href="https://buy.stripe.com/00wcN7aUf6SA5xYfLSfw40H"
  target="_blank"
  rel="noopener noreferrer"
  className="block pt-6"
>
  <div className="flex justifyr">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
  Continue to Secure Checkout – General Admission ($77)

</button>


  </div>
</a>
   <div className="text-sm text-gray-400 space-y-1 text-start mt-4">
            <p>✔ Instant confirmation</p>
            <p>✔ Secure Stripe checkout</p>
            <p>✔ 7-Day Money Back Guarantee</p>
          </div>


        </div>

        {/* WHAT HAPPENS AFTER PAYMENT */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            What Happens Immediately After You Pay
          </h2>

          <p className="text-gray-300">So there’s zero confusion:</p>

          <ul className="space-y-3 text-gray-300">
            <li>1️⃣ You’ll be redirected to your confirmation page</li>
            <li>2️⃣ You’ll lock in your Zoom access instantly</li>
            <li>3️⃣ You’ll download all preparation resources</li>
            <li>4️⃣ You’ll receive a confirmation email within 5 minutes</li>
            <li>5️⃣ You’ll receive reminder emails leading up to the event</li>
          </ul>

          <div className="font-medium space-y-1">
            <p>You are not “waiting” for anything.</p>
            <p>Everything is instant.</p>
          </div>

             <a
  href="https://buy.stripe.com/00wcN7aUf6SA5xYfLSfw40H"
  target="_blank"
  rel="noopener noreferrer"
  className="block pt-6"
>
  <div className="flex justifyr">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
  Continue to Secure Checkout – General Admission ($77)

</button>


  </div>
     <div className="text-sm text-gray-400 space-y-1 text-start mt-4">
            <p>✔ Instant confirmation</p>
            <p>✔ Secure Stripe checkout</p>
            <p>✔ 7-Day Money Back Guarantee</p>
          </div>
</a>
        </div>

        {/* TESTIMONIAL */}
      <div className="bg-[#111028] rounded-3xl p-6 sm:p-10 border border-white/10 space-y-10">
  <h2 className="text-2xl font-semibold"> What Past Attendees Said</h2>

  {/* Testimonial 1 */}
  <div className="space-y-4">
    <p className="italic text-gray-300 leading-relaxed">
     “I almost didn’t sign up because I thought I wasn’t ready. By the end of the webinar, I had clarity on my income, investments, and next steps. It removed the guesswork and gave me confidence to finally take action for me and my family.”
    </p>
    <p className="font-medium">— Megan.A., Small business owner</p>
  </div>

  {/* Divider */}
  <div className="h-px bg-white/10" />

  {/* Testimonial 2 */}
  <div className="space-y-4">
    <p className="italic text-gray-300 leading-relaxed">
      “I kept telling myself I’d figure my finances out ‘later.’ I almost didn’t buy because I thought $77 wasn’t the right time. Honestly, not buying would have cost me more. The 90-day structure alone showed me exactly where my money was leaking and what to fix first. It wasn’t overwhelming, it was clear. I finally feel in control instead of guessing.”
    </p>
    <p className="font-medium">— Daniel R., Operations Manager</p>
  </div>

  
</div>

   <a
  href="https://buy.stripe.com/00wcN7aUf6SA5xYfLSfw40H"
  target="_blank"
  rel="noopener noreferrer"
  className="block "
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
  Continue to Secure Checkout – General Admission ($77)

</button>


  </div>
     <div className="text-sm text-gray-400 space-y-1 text-center mt-4">
            <p>✔ Instant confirmation</p>
            <p>✔ Secure Stripe checkout</p>
            <p>✔ 7-Day Money Back Guarantee</p>
          </div>
</a>


        {/* FAQ SECTION */}
      <div className="space-y-14">
  <h2 className="text-3xl font-semibold text-center">
     If You’re Thinking…
  </h2>

  {/* CARD 1 */}
  <div className="bg-[#111028] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 hover:border-[#BD9A35]/40 transition duration-300">
    <h3 className="text-xl font-semibold leading-snug">
      I've tried other programs before and they didn't work. Why will this be different?
    </h3>

    <div className="space-y-4 text-gray-300 leading-relaxed">
      <p>
        Because this isn't about hype, theory, or motivation.
      </p>

      <p>
        This is a step-by-step system based on what Gustav actually did to go from bankruptcy to $1,000,000+.
      </p>

      <p className="text-white font-medium">You'll get:</p>

      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-[#BD9A35]">•</span>
          Clear frameworks, not vague advice
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#BD9A35]">•</span>
          Real examples instead of just concepts
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#BD9A35]">•</span>
          Built-in accountability
        </li>
      </ul>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="bg-[#111028] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 hover:border-[#BD9A35]/40 transition duration-300">
    <h3 className="text-xl font-semibold">
      What if I can't attend live?
    </h3>

    <div className="space-y-4 text-gray-300 leading-relaxed">
      <p>
        You'll still get the replay for 30 days.
      </p>

      <p>
        However, we highly recommend attending live because:
      </p>

      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-[#BD9A35]">•</span>
          You'll complete the exercises in real time
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#BD9A35]">•</span>
          You can ask questions (especially VIP ticket holders)
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#BD9A35]">•</span>
          The energy and accountability of being live is unmatched
        </li>
      </ul>

      <p>
        That said, we understand things happen. If you can’t attend live, you’ll still have access to the event replay.
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="bg-[#111028] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 hover:border-[#BD9A35]/40 transition duration-300">
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
  href="https://buy.stripe.com/00wcN7aUf6SA5xYfLSfw40H"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">
  Continue to Secure Checkout – General Admission ($77)

</button>



  </div>
   <div className="text-sm text-gray-400 space-y-1 text-center mt-4">
            <p>✔ Instant confirmation</p>
            <p>✔ Secure Stripe checkout</p>
            <p>✔ 7-Day Money Back Guarantee</p>
          </div>
</a>


        {/* COUNTDOWN SECTION */}
        <div className="bg-gradient-to-r from-[#181349] to-[#0D0B2E] rounded-3xl p-8 text-center space-y-6 border border-[#BD9A35]/30">
          <h2 className="text-2xl font-semibold">
            Registration Closes Soon
          </h2>

          {timeLeft ? (
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div
                  key={label}
                  className="bg-black/40 rounded-xl py-4"
                >
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs uppercase text-gray-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg font-medium">Registration Closed</p>
          )}

          <p className="text-gray-300">
            Seats are intentionally capped to protect delivery quality.
            When registration closes, access closes.
          </p>

          <p className="font-medium">
            If clarity matters this year, this is the move.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
     <a
  href="https://buy.stripe.com/00wcN7aUf6SA5xYfLSfw40H"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex justify-center">
<button className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300">



  Continue to Secure Checkout – General Admission ($77)

  </button>
  </div>
</a>

          <div className="text-sm text-gray-400 space-y-1">
            <p>✔ Instant confirmation</p>
            <p>✔ Secure Stripe checkout</p>
            <p>✔ 7-Day Money Back Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralPaymentCheckoutEb;
