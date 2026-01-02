import GustavImage from "../../images/EventImage/EventGustav.jpg";

export default function EventInvestor() {
  return (
    <>
      {/* White Notch */}
      {/* <div className="bg-[#F3F3F3] h-20 rounded-t-[2rem] mx-16 relative z-10 -mt-10 lg:-mt-20"></div> */}

      <section className="bg-[#F3F3F3] py-10 lg:py-20 px-4 text-[#181349]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-26 items-center">
          {/* Image */}
<div className="flex justify-center items-stretch h-full" data-aos="fade-right">
        <img
  src={GustavImage}
  alt="Speaker"
  className="w-full h-full object-cover rounded-lg"
/>

          </div>

          {/* Details */}
          <div className="space-y-6 lg:space-y-10" data-aos="fade-left">
            <h2 className="text-2xl lg:text-5xl font-bold">Details</h2>
            <div className="text-base space-y-6 lg:space-y-8">
              <p className="text-sm lg:text-md">
                <strong className="text-md lg:text-xl">What:</strong> A
                1-hour-30-minute Live Interactive Zoom Webinar
              </p>
              <p className="text-sm lg:text-lg">
                <strong className="text-md lg:text-xl">Date:</strong> August 2, 2025

              </p>
              <p className="text-sm lg:text-lg">
                <strong className="text-md lg:text-xl">Time:</strong> 12pm - 1:30pm EST
              </p>
              <p className="text-sm lg:text-lg">
                <strong className="text-md lg:text-xl">Duration:</strong> 1 hour
                30 minutes
              </p>
              <p className="text-sm lg:text-lg">
                <strong className="text-md lg:text-xl">Who is it for:</strong>{" "}
This is for high- and mid-income 9–5 professionals, experts, aspiring entrepreneurs, and first- or second-generation immigrants who’ve done everything “right”—got the education, landed the job, stayed disciplined—yet still feel behind on their finances,  dreams, purpose and legacy —even if they’re earning well on paper.
Whether you’re close to six figures or nowhere near it, if you’re tired of working hard with little to show, overwhelmed by debt, willing to grow your confidence, and take back control,  or unsure how to build lasting wealth, this seminar is your next move.              </p>
              <p className="text-sm lg:text-lg">
                <strong className="text-md lg:text-xl">End Goal:</strong> A step-by-step system to break free from the paycheck-to-paycheck cycle—without quitting your 9–5 or working more hours. You’ll shift from overwhelmed saver to strategic wealth builder, uncover the clearest path to prosperity based on your income and lifestyle, and finally make confident money decisions that grow real wealth.
And you won’t do it alone—you’ll get the practical tools and live support you need to build your system and stay consistent long after the seminar ends.
This isn’t just information—it’s your transformation plan.

              </p>
            </div>
          </div>
        </div>

        {/* Transformation Message */}
        <div
          className="text-center max-w-5xl mx-auto mt-16 px-4"
          data-aos="zoom-in"
        >
          {/* <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            IN ONE HOUR, 30 MINUTES, I’LL HELP YOU…
          </h3> */}
          <p className="text-md lg:text-2xl text-gray-700 leading-relaxed">
Take charge of your life, money & legacy           </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10" data-aos="fade-up">
    {/* <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-md lg:text-2xl shadow-lg transition w-full"
  onClick={() =>
    window.open(
      "https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n",
      "_blank"
    )
  }
>
  <FaTicketAlt className="inline-block mr-2 text-white" />
 Join Now for $97
</button> */}


 <button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-md lg:text-2xl shadow-lg transition lg:mt-6"
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
      </section>
    </>
  );
}
