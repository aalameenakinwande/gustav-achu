import React, { useRef, useEffect } from "react";

const textTestimonials = [
  {
    content: `I finally understood where my money was going — and fixed it within a week.`,
    author: "— Nolan. R., Operations manager",
  },
  {
    content: `This gave me clarity on my income, investments, and next steps. I stopped guessing and started acting.`,
    author: "— Megan.A., Small business owner",
  },


    {
    content: `I now make financial decisions with confidence instead of confusion.`,
    author: "— Olivia. M., HR Professional",
  },





  {
    content: `For the first time, I feel in control of my money and my future.`,
    author: "— George. M., IT professional",
  },





    {
    content: `I learned how to grow my money safely without chasing risky investments.`,
    author: "— Mary. J., Healthcare Worker",
  },
  {
    content: `I went from overwhelmed to clear, focused, and confident about building wealth.`,
    author: "— Williams. A., Entrepreneur",
  },
];
const WealthMasterTestimonials = () => {


  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef1.current) observer.observe(videoRef1.current);
    if (videoRef2.current) observer.observe(videoRef2.current);

    return () => {
      if (videoRef1.current) observer.unobserve(videoRef1.current);
      if (videoRef2.current) observer.unobserve(videoRef2.current);
    };
  }, []);

  return (
    <section className="w-full bg-[#0A081A] text-white lg:py-20 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Heading */}
        <h3 className="text-2xl md:text-4xl font-bold mb-12">
          Check Out What Past Attendees Are Saying...
        </h3>

        {/* Video Testimonials */}
        <div className="mb-16 flex flex-col md:flex-row justify-center items-center gap-8">
          
          {/* Video 1 */}
          <div className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
            <video
              ref={videoRef1}
              src="https://res.cloudinary.com/deofmlywm/video/upload/v1768587524/Client_Testimonial_1_1_pgw7ub.mp4"
              controls
              className="w-full h-full object-cover"
              muted
              playsInline
            />
          </div>

          {/* Video 2 */}
          <div className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
            <video
              ref={videoRef2}
              src="https://res.cloudinary.com/deofmlywm/video/upload/v1771238658/Testimonial_13th_Feb_2_1_z1frjc.mp4"
              controls
              className="w-full h-full object-cover"
              muted
              playsInline
            />
          </div>

        </div>

         <h3 className="text-xl md:text-3xl font-bold mb-12">
Real Results From Professionals Who Took Control of Their Money        </h3>
        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      


          {textTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#151521] border border-[#BD9A35]/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(189,154,53,0.15)] flex flex-col justify-between"
            >
              <p className="text-gray-300 text-md lg:text-lg mb-4">
                {testimonial.content}
              </p>
              <p className="text-[#BD9A35] font-semibold">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          {/* <button
            onClick={scrollToTickets}
            className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          >
            I Want Clarity With My Money
          </button> */}

          <a
  href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
    hover:bg-red-700 hover:scale-105 transition-transform duration-300"
  >
    SAVE MY SPOT — I WANT TO FIX MY MONEY LEAKS
  </button>
</a>

  <p className="mt-4 text-center text-red-600 font-bold text-sm lg:text-base">
    ⚠️ This is a live session. No replay will be sent. <br />
    If you miss it, you miss it.
  </p> 
 {/* <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>✔ Live breakdown of your personal money leaks</p>
            <p>✔ Walk away with a system you can apply immediately</p>
            <p>✔ No replay — this is a live-only session</p>
            <p className="text-red-400 font-semibold mt-2">
              No replay. Attend live or miss it.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WealthMasterTestimonials;
