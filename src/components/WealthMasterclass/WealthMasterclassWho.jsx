import React from "react";

const WealthMasterclassWho = () => {
  return (
    <section className="w-full bg-[#0A0A0D] text-white py-24 px-4 border-t border-white/10">

      <div className="max-w-[1440px] mx-auto space-y-14">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Who This Is For
          </h2>

          <p className="text-white/60 text-base md:text-lg">
            This Free Masterclass Is Perfect For:
          </p>
        </div>

        {/* AUDIENCE GRID */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              ✔ For ambitious professionals who are succeeding at work but feel behind financially
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              ✔ First- & Second-Generation Immigrants building wealth for this generation and the next
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              ✔ Entrepreneurs & Side Hustlers who generate six-figure income but have not structured it yet
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              ✔ Families & Legacy Builders who want their money to outlast them
            </p>
          </div>

        </div>

        {/* CLOSING STATEMENT */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
You don't need to be in crisis to need a system. In fact, the people who need this most are the ones doing well- because the leaks are quieter, harder to spot, and more expensive over time.          </p>
        </div>

      </div>
    </section>
  );
};

export default WealthMasterclassWho;