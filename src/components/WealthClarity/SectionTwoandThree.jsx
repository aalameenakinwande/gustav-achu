import React from "react";

const testimonials = [
  {
    name: "Simonie Mpondo",
    video: "https://res.cloudinary.com/deofmlywm/video/upload/v1765378728/SIMONIE_MPONDO_Portrait_1_1_gnlebo.mp4"
  },
  {
    name: "Leonard Bruce",
    video: "https://res.cloudinary.com/deofmlywm/video/upload/v1765378910/Leonard_Bruce_2_ime2aa.mp4"
  },
  {
    name: "Kingsley",
    video: "https://res.cloudinary.com/deofmlywm/video/upload/v1765379140/Kingsley_Portrait_1_1_1_jlrlfd.mp4"
  }
];

const SectionTwoandThree = () => {
  return (
    <section className="w-full bg-[#0A081A] text-white py-20 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Check Out What Past Attendees Are Saying...
        </h3>

        {/* Testimonial Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#151521] border border-[#BD9A35]/30 
              rounded-2xl p-4 shadow-[0_0_25px_rgba(189,154,53,0.15)] flex flex-col items-center"
            >
              <video
                src={testimonial.video}
                controls
                className="w-full h-auto rounded-xl mb-4"
              />
              <p className="text-lg text-gray-300 font-semibold mt-2">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwoandThree;
