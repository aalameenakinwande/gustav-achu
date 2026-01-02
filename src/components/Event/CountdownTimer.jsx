import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function ExecutiveCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-02T16:00:00Z"); // 12pm EST = 16:00 UTC

    const update = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br bg-[#181349] text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white tracking-wide">
              100% Secure Checkout
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            24‑Hour Money‑Back Guarantee
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
            If you're not satisfied within 24 hours of attending the seminar, we’ll refund your full investment — no questions asked. Just email{" "}
            <a
              href="mailto:gachu77@gmail.com"
              className="text-[#BD9A35] underline hover:text-white"
            >
              gachu77@gmail.com
            </a>{" "}
            and we’ll handle it.
          </p>
        </div>

        {/* Right Column: Countdown */}
        <div className="text-center">
          <h3 className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/70 mb-6">
            Registration Closes In
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 md:gap-6 justify-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-5 py-6 shadow-md flex flex-col items-center"
              >
                <span className="text-2xl sm:text-4xl font-bold text-white">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wide text-white/60 mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
