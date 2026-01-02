import React, { useEffect, useState } from 'react';

const EventStripe = () => {
  const [timeLeft, setTimeLeft] = useState("");

  // Set fixed deadline date: August 2, 2025 at 11:59 PM
  const deadline = new Date("August 2, 2025 23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        setTimeLeft("Registration closed");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F3F3F3] py-12 px-4">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 lg:flex">
        {/* LEFT SIDE */}
        <div className="bg-[#181349] text-white w-full lg:w-1/2 p-10 flex flex-col justify-between">
          <div className="space-y-6">
            {/* SECURE BADGE */}
            <div className="flex items-center gap-2">
              <span className="bg-white text-[#181349] text-xs lg:text-lg font-semibold px-3 py-1 lg:px-5 lg:py-3 rounded-full shadow">
                100% SECURE
              </span>
              <span className="uppercase tracking-wide text-[#BD9A35] text-sm lg:text-lg font-medium">Checkout</span>
            </div>

            {/* HEADER */}
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              You're One Step Away
            </h2>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed">
              Join us for the seminar and get full access with peace of mind. Your checkout is encrypted and protected.
            </p>
          </div>

          {/* GUARANTEE */}
          <div className="mt-10 text-xs lg:text-sm text-gray-300 border-t border-gray-600 pt-6">
            <strong className="text-white">100% Money-back guarantee</strong> within 24 hours of the seminar. <br />
            Email <a href="mailto:gachu77@gmail.com" className="text-[#BD9A35] underline">gachu77@gmail.com</a> — no questions asked.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white w-full lg:w-1/2 p-10 flex flex-col justify-center space-y-6">
          {/* Countdown */}
          <div className="bg-[#BD9A35] text-white text-center text-sm px-4 py-5 rounded-md font-semibold lg:text-lg tracking-wide animate-pulse">
            Registration Closes In: <span className="font-bold">{timeLeft}</span>
          </div>

          {/* Payment CTA */}
      <a
  href="https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#181349] hover:bg-[#120f38] text-white font-semibold text-lg py-3 rounded-lg transition-all duration-300 w-full shadow-md text-center block"
>
  Proceed to Payment
</a>


          {/* Secure Footer */}
          <p className="text-xs text-gray-500 text-center">
            Your payment is protected by 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventStripe;
