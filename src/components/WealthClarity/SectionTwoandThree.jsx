import React, { useRef, useEffect } from "react";

const textTestimonials = [
  {
    content: `Hey Gustav, 
I had to message you real quick. I used to feel stuck living paycheck to paycheck, without savings or a financial plan. But since the webinar, a lot has changed. I created my own wealth plan that same week. By myself. Now, I'm putting my money to work every month using some of the investment strategies you shared. Thank you, Gustav. Keep doing this!`,
    author: "— Nolan. R., Operations manager",
  },
  {
    content: `I almost didn’t sign up because I thought I wasn’t ready. By the end of the webinar, I had clarity on my income, investments, and next steps. It removed the guesswork and gave me confidence to finally take action for me and my family.`,
    author: "— Megan.A., Small business owner",
  },


    {
    content: `I’ve been working with Gustav for several months now, and the experience has been incredibly grounding. He helped me understand how to invest and grow my money in a way that feels intelligent and safe, not rushed or risky. Instead of guessing, I now make decisions with clarity and confidence. What I appreciate most is his honesty and patience—he genuinely wants you to understand why you’re investing the way you are. If you’re looking for someone knowledgeable, trustworthy, and truly invested in your growth, I’d highly recommend working with him`,
    author: "— Olivia. M., HR",
  },





  {
    content: `Working with Gustav has been a refreshing experience. He helped me understand how to invest intelligently and grow my money safely while keeping my long-term goals in focus. His approach goes beyond finances—it’s about alignment, discipline, and building wealth with purpose and intention. He is thoughtful, knowledgeable, and deeply committed to helping people create lasting financial stability. I highly recommend him to anyone serious about building wealth that endures.`,
    author: "— George. M., IT professional",
  },





    {
    content: `Before working with Gustav, investing felt confusing and intimidating. He took the time to explain how investing actually works and helped me understand how to grow my money intelligently without taking unnecessary risks. What stood out most was his focus on education and long-term thinking—he wants you to feel confident, not dependent. I now invest with clarity and peace of mind. If you’re looking for guidance that’s thoughtful, safe, and grounded in real understanding, Gustav is an excellent guide.`,
    author: "— Mary. J., Healthcare Worker",
  },
  {
    content: `Working with Gustav helped remove a lot of fear and uncertainty I had around investing. He showed me how to grow my money steadily using smart, safe strategies instead of chasing trends or shortcuts. His approach is calm, practical, and rooted in long-term success. I feel more in control of my financial future and much more confident in the decisions I’m making. I highly recommend him to anyone who wants to invest wisely and build lasting wealth.`,
    author: "— Williams. A., Entrepreneur",
  },
];
const SectionTwoandThree = () => {
  const scrollToTickets = () => {
    document
      .getElementById("tickets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
          <button
            onClick={scrollToTickets}
            className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
                   hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          >
            I Want Clarity With My Money
          </button>

           <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-[#E6C677]">🔒</span>
              <span className="text-gray-300 text-xs sm:text-lg">
                100% Secure Checkout
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6C677]">💰</span>
              <span className="text-gray-300 text-xs sm:text-lg">
                7-Day Money Back Guarantee
              </span>
            </div>
          </div>

          {/* <a
  href="https://us06web.zoom.us/meeting/register/4nWd3o7cRlCNs9hvX36hww#/registration"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="bg-red-600 text-white font-semibold px-10 py-8 rounded-xl text-lg lg:text-2xl shadow-lg side-bounce cta-button 
    hover:bg-red-700 hover:scale-105 transition-transform duration-300"
  >
    REGISTER FOR FREE — LIMITED SPOTS
  </button>
</a> */}

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

export default SectionTwoandThree;
