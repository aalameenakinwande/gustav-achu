import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const testimonials = [
  // {
  //   id: 1,
  //   name: "Mr. Kenny",
  //   testimonial:
  //     "I’ve read his book ‘The Seeker.’ His storytelling is both thought-provoking and inspiring, weaving together philosophical insights and relatable experiences that really make you reflect. I highly encourage you all to work with Gustav.",
  // },
  // {
  //   id: 2,
  //   name: "Yenchi Eric",
  //   testimonial:
  //     "Everyone needs to read Gustav’s book and work with him. He has been inspiring me since the age of 12, and everything here is what he has been preaching to me my whole life.",
  // },
  {
    id: 1,
    name: "Francis Aruna",
    post: "Entrepreneur",
    testimonial:
      "We are a living testimony of your mentorship. We sleep under a roof today because you spurred us to start the foundation with little consideration of how prepared we were. We had the fear of starting and not being able to complete the house, but your word of encouragement and assurance that we could do it pushed us through. You’re too much, sir.",
  },
  // {
  //   id: 2,
  //   name: "Gilbert Ngyia",
  //   testimonial:
  //     "I deeply appreciate your incredible work as a motivational speaker. Your words inspire and uplift, touching the hearts and minds of all who hear you. Your ability to ignite hope, courage, and determination makes the world a better place. Keep shining brightly!",
  // },
  {
    id: 2,
    name: "Charles Njoya",
        post: "Ceo & Chairman of CHN Advisors",

    testimonial:
      "You're an amazing African. The passion and grit you have in giving back to the community is amazing. Thank you for educating people about wealth.",
  },
];

const EventTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">What People Are Saying</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map(({ id, name, post, testimonial }, index) => (
            <div
              key={id}
              className="bg-white p-6 lg:p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between min-h-[150px] lg:min-h-[350px]"
              data-aos="fade-up"
              data-aos-delay={index * 200} // 👈 each card drops 200ms after the previous one
            >
              <div>
                <p className="mb-6 text-sm lg:text-lg">"{testimonial}"</p>
              </div>
              <div>
                <h4 className="text-md lg:text-lg font-semibold">{name}</h4>
                <p className="text-sm  text-gray-400 lg:text-md font-semibold">{post}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.287 3.945c.3.921-.755 1.688-1.538 1.118l-3.36-2.444a1 1 0 00-1.176 0l-3.36 2.444c-.783.57-1.838-.197-1.539-1.118l1.287-3.945a1 1 0 00-.364-1.118L2.075 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z" />
                      </svg>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
           <div className="bg-[#FFF7E6] border-l-4 border-[#BD9A35] p-4 text-[#BD9A35] italic font-medium rounded text-sm sm:text-base mt-10">
25 Seats are left- Don't wait. Secure your spot now                  </div>
                  <button
          className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-sm lg:text-2xl shadow-lg transition w-full mt-10"
          onClick={() => window.open("https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n", "_blank")}
        >
   {/* Adding unlock icon */}
        Join the ‘Paycheck to Prosperity’ Webinar Now!</button>
      </div>
    </section>
  );
};

export default EventTestimonials;
