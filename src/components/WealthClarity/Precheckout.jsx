import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const CTAButton = () => (
  <div className="flex flex-col items-center mt-10">
    <a
      href="https://buy.stripe.com/6oUdRb3rN2Ck6C28jqfw40Q"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="
          bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button
          hover:bg-red-700 hover:scale-105 transition-transform duration-300
        "
      >
SECURE MY WEALTH ARCHITECT PLAYBOOK FOR $9.99      </button>
    </a>

    <p className="text-gray-400 text-sm mt-4">
      Secure Checkout • Instant Access • Encrypted Payment via Stripe
    </p>
  </div>
);

const SectionCard = ({ children }) => (
  <div className="bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-8 sm:p-12 shadow-xl">
    {children}
  </div>
);

const Precheckout = () => {
  return (
    <section className="relative w-full bg-[#0F0C29] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[300px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 space-y-24">

        {/* ================= SECTION 1 ================= */}
        <SectionCard>
          <div className="text-center space-y-8">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              You’re One Decision Away From Owning Your Financial Blueprint
            </h1>

            <p className="text-gray-300 text-lg">
              You’ve already seen how money leaks silently steal from you.
            </p>

            <div className="text-gray-200 text-lg space-y-3">
              <p className="font-semibold text-white">Now imagine:</p>
              <p>• A structured emergency fund</p>
              <p>• Zero destructive debt</p>
              <p>• Investments working automatically</p>
              <p>• Legal systems protecting your assets</p>
              <p>• A clear generational wealth bridge</p>
            </div>

            <p className="text-yellow-400 font-semibold text-xl pt-4">
              This is not theory.
              <br />
              This is the architecture of financial independence.
            </p>

            <div className="w-full flex justify-center mt-16 px-4">
  <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
    
    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
      Investment
    </h2>

    <p className="text-lg mb-4">
      Today, you can access the complete
      <span className="font-semibold"> Wealth Architect Playbook </span>
      for:
    </p>

    <p className="text-4xl lg:text-5xl font-bold text-[#BD9A35] mb-6">
      $9.99 — One-Time Payment
    </p>

    <div className="space-y-2 text-lg text-gray-300">
      <p>No subscription.</p>
      <p>No hidden fees.</p>
      <p>Instant digital access.</p>
    </div>

  </div>
</div>

            <CTAButton />
          </div>
        </SectionCard>

        {/* ================= SECTION 2 ================= */}
        <SectionCard>
          <div className="text-center space-y-8">

            <p className="text-lg text-gray-300">
              The Wealth Architect Playbook isn’t fluff.
            </p>

            <p className="text-gray-300">
              It’s the same framework used by disciplined wealth builders who don’t start from scratch every generation.
            </p>

            <p className="text-white font-semibold text-xl">It gives you:</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-lg text-gray-200">
              <div className="bg-white/5 rounded-xl py-4">✔ Clarity</div>
              <div className="bg-white/5 rounded-xl py-4">✔ Sequence</div>
              <div className="bg-white/5 rounded-xl py-4">✔ Systems</div>
              <div className="bg-white/5 rounded-xl py-4">✔ Execution steps</div>
            </div>

            <div className="text-gray-300 space-y-1 pt-6">
              <p>No guessing.</p>
              <p>No confusion.</p>
              <p>No YouTube rabbit holes.</p>
            </div>

            <CTAButton />
          </div>
        </SectionCard>

        {/* ================= SECTION 3 ================= */}
        <SectionCard>
          <div className="space-y-10 text-center">

            <h2 className="text-2xl sm:text-3xl font-bold">
              If You Are Thinking..
            </h2>

            <div className="space-y-10 text-lg text-gray-300">

              <div>
                <p className="text-white font-semibold">
                  “What if I don’t earn enough?”
                </p>
                <p>Structure creates leverage.</p>
                <p>This system works regardless of income level. Structure creates leverage.</p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  “What if I’m overwhelmed?”
                </p>
                <p>The playbook is sequential. You focus on one stage at a time.</p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  “What if I’ve failed before?”
                </p>
                <p>You didn’t fail. You lacked structure.</p>
              </div>

            </div>

            <CTAButton />
          </div>
        </SectionCard>

                {/* ================= TESTIMONIAL SECTION ================= */}
        <SectionCard>
          <div className="space-y-12 text-center">

            <h2 className="text-2xl sm:text-3xl font-bold">
              What Readers Are Saying
            </h2>

            <div className="space-y-12 text-left max-w-4xl mx-auto">

              {/* Testimonial 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  “I had read multiple finance books before, but none gave me a clear sequence. The Wealth Architect Playbook finally showed me what to do first, what to ignore, and how to move step-by-step. Within 60 days, I had a fully funded emergency base and a structured investment plan. The clarity alone was worth 10x what I paid.”
                </p>
                <p className="text-yellow-400 font-semibold">
                  — Daniel.B, Senior IT Consultant
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  “I almost didn’t buy because I thought it would be another generic money guide. It wasn’t. The section on eliminating non-mortgage debt and restructuring my cash flow changed everything. I recovered over $1,300 monthly just by applying the framework. This isn’t motivation — it’s architecture.”
                </p>
                <p className="text-yellow-400 font-semibold">
                  — Melissa. G, Healthcare Administrator
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  “What stood out to me wasn’t just investing — it was the legal and generational blueprint. No one talks about estate planning in simple terms. After implementing the playbook, I set up protection structures for my family and automated my investments. For the first time, I feel like I’m building something that will outlive me.”
                </p>
                <p className="text-yellow-400 font-semibold">
                  — Victor.R, Engineering Manager
                </p>
              </div>

            </div>

            <div className="w-full flex justify-center mt-16 px-4">
  <div className="max-w-3xl w-full bg-gradient-to-br from-[#181349] to-[#0F0C29] border border-white/10 rounded-2xl p-8 lg:p-12 text-center shadow-xl">

    <p className="text-sm lg:text-lg text-gray-300 mb-6">
      Considering the average financial mistake costs thousands per year…
    </p>

    <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
      The Wealth Architect Playbook is just:
    </p>

    <p className="text-5xl font-bold text-[#BD9A35] mb-6">
      $9.99 One-Time
    </p>

    <p className="text-sm lg:text-lg text-gray-300">
      Less than what most people waste in a single month of poor structure
    </p>

  </div>
</div>

            <CTAButton />

          </div>
        </SectionCard>

        {/* ================= SECTION 4 ================= */}
        <SectionCard>
          <div className="text-center space-y-8">

            <h2 className="text-2xl sm:text-3xl font-bold">
              The cost of delay isn’t the price of this book.
            </h2>

            <p className="text-gray-300 text-lg">
              It’s another 12 months of:
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-lg text-gray-200">
              <div className="bg-white/5 rounded-xl py-4">• Financial leakage</div>
              <div className="bg-white/5 rounded-xl py-4">• Missed investment growth</div>
              <div className="bg-white/5 rounded-xl py-4">• No generational positioning</div>
            </div>

            <p className="text-yellow-400 font-semibold text-lg pt-4">
              The earlier you structure your money, the more time compounds in your favor.
            </p>

            <CTAButton />
          </div>
        </SectionCard>

        {/* ================= SECTION 5 ================= */}
        <SectionCard>
          <div className="text-center space-y-8">

            <h2 className="text-2xl sm:text-3xl font-bold">
              What Happens After You Purchase:
            </h2>

            <div className="space-y-3 text-gray-300 text-lg">
              <p>1️⃣ You’re instantly redirected to the Wealth Architect Playbook PDF</p>
              <p>2️⃣ You download your copy and get immediate access</p>
              <p>3️⃣ You begin building your Wealth Architecture today</p>
            </div>

            <div className="text-gray-300 pt-4 space-y-1">
              <p>No waiting.</p>
              <p>No shipping delays</p>
              <p>No confusion.</p>
            </div>

            <CTAButton />
          </div>
        </SectionCard>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center space-y-8 pt-10">

          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Stop Renting Financial Advice. Own The Blueprint.
          </h2>

          

          <p className="text-gray-300 text-lg">
This is a one-time investment of $9.99
            <br />
            But the structure can serve you for decades.
          </p>

          <CTAButton />
        </div>

        {/* ================= SOCIAL PROOF ================= */}
        <div className="text-center space-y-6 pt-20 border-t border-white/10">

          <p className="text-gray-300 text-lg">
            Follow for daily wealth insights and money structure tips:
          </p>

          <div className="flex justify-center gap-10 text-3xl text-red-500">
            <FaInstagram className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaYoutube className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaLinkedin className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaFacebook className="hover:text-white hover:scale-110 transition cursor-pointer" />
          </div>

          <p className="text-gray-400 text-sm pt-4">
            Join thousands of others taking control of their paycheck — start building wealth today.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Precheckout;