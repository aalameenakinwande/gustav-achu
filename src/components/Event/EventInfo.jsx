import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const points = [
  "You’re tired of working hard with nothing to show for it",
  "You’ve tried saving more but still feel financially stuck",
  "You’ve faced job loss, debt, or financial setbacks and want a reset",
  "You want to build wealth but don’t know where to start",
  "You dream of owning your time and your money",
];

const EventInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-[#F9F8FC] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column - Reasons */}
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#181349] text-center lg:text-left">
            This Is For You If:
          </h2>
          <ul className="space-y-4">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-base sm:text-lg text-gray-800"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <CheckCircle className="text-[#BD9A35] mt-1 w-5 h-5 flex-shrink-0" />
                <span className="text-sm lg:text-xl">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Emotional Hook + CTA */}
        <div
          className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 border border-[#E5E4F0]"
          data-aos="fade-left"
        >
          <div className="text-sm sm:text-xl text-[#181349] font-medium space-y-2">
            <p>You’re not lazy.</p>
            <p>You’re not unmotivated.</p>
            <p>You’ve just been taught the wrong game.</p>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            It’s time to break free from the paycheck-to-paycheck trap and take
            the first step toward real financial freedom.
          </p>
          <div className="bg-[#FFF7E6] border-l-4 border-[#BD9A35] p-4 text-[#BD9A35] italic font-medium rounded text-sm sm:text-base">
            If you’ve ever said, “I work too hard to be this broke,” this is for
            you.
          </div>
    <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-md lg:text-2xl shadow-lg transition w-full"
  onClick={() =>
    window.open(
      "https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n",
      "_blank"
    )
  }
>
  <span className="mr-2 line-through text-white">$497</span>
  — Yours Now for Just $97
</button>


        </div>
      </div>
    </section>
  );
};

export default EventInfo;
