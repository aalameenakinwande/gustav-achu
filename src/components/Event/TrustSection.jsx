import { ShieldCheck } from "lucide-react";

export default function ExecutiveTrustBanner() {
  return (
    <section className="relative w-full bg-[#181349] text-white py-20 overflow-hidden">
      {/* Ambient Glows */}
  

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Floating Secure Badge (Top Right within Container) */}
        <div className="flex justify-end mb-6">
          <div className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full shadow-lg flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">100% Secure Checkout</span>
          </div>
        </div>

        {/* Guarantee Text */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-white">
              24-Hour Money‑Back Guarantee
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you're not satisfied within 24 hours of attending the seminar, we’ll refund your full investment — no questions asked.
              Simply email{" "}
              <a
                href="mailto:gachu77@gmail.com"
                className="text-amber-400 underline hover:text-white transition"
              >
                gachu77@gmail.com
              </a>
              , and your refund will be processed with priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
