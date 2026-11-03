import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Book1 from "../../images/bookImages/Book1.webp";
import Gilbert from "../../images/Testimonials/Gilbert.jpg";
import KingsleyImage from "../../images/Testimonials/pungong.webp";
import Charles from "../../images/Testimonials/Charles.jpeg";


import Cynthia from "../../images/Testimonials/cynthia.webp";
import Francis from "../../images/Testimonials/francis.jpg";
import Jonathan from "../../images/Testimonials/jonathan.webp";
import Williams from "../../images/Testimonials/williams.webp";

const testimonials = [
  {
    quote:
      "I deeply appreciate your incredible work as a motivational speaker. Your words inspire and uplift, touching the hearts and minds of all who hear you. Your ability to ignite hope, courage, and determination makes the world a better place. Keep shining brightly!",
    name: "Gilbert Ngyia",
    title: "Founder of G-Fashion Line",
    image: Gilbert,
  },
  {
    quote:
      "You're an amazing African. The passion and grit you have in giving back to the community is amazing. Thank you for educating people about wealth.",
    name: "Sir Charles Njoya",
    title: "President & CEO at CHN Advisors",
    image: Charles,
  },
  {
    quote:
      "This work by Gustav Achu embodies his strive for excellence. It encompasses the importance of reinvention without a dilution of our core values.",
    name: "Kingsley Pungong",
    title: "CEO at Rainbow Sports Global",
    image: KingsleyImage,
  },





    {
    quote:
      "Working with Gustav helped remove a lot of fear and uncertainty I had around investing. He showed me how to grow my money steadily using smart, safe strategies instead of chasing trends or shortcuts. His approach is calm, practical, and rooted in long-term success. I feel more in control of my financial future and much more confident in the decisions I’m making. I highly recommend him to anyone who wants to invest wisely and build lasting wealth.",
    name: "Williams. A.",
    title: "Entrepreneur",
    image: Williams,
  },
    {
    quote:
      "Hey Gustav, I had to message you real quick. I used to feel stuck living paycheck to paycheck, without savings or a financial plan. But since the webinar, a lot has changed. I created my own wealth plan that same week. By myself. Now, I'm putting my money to work every month using some of the investment strategies you shared. Thank you, Gustav. Keep doing this!",
    name: "Jonathan R.",
    title: "Operations Manager",
    image: Jonathan,
  },
    {
    quote:
      "Working with Gustav has been a refreshing experience. He helped me understand how to invest intelligently and grow my money safely while keeping my long-term goals in focus. His approach goes beyond finances—it’s about alignment, discipline, and building wealth with purpose and intention. He is thoughtful, knowledgeable, and deeply committed to helping people create lasting financial stability. I highly recommend him to anyone serious about building wealth that endures.",
    name: "Cynthia. M.",
    title: "IT professional",
    image: Cynthia,
  },
    {
    quote:
      "We’re a living testimony of your mentorship. We sleep under a roof today because you pushed us to start—even when fear told us not to. Your words gave us the courage to lay that first block. Now we’re home.",
    name: "Francis Aruna",
    title: "Business owner",
    image: Francis,
  },





];

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="bg-[#0A0A0F] py-16 lg:py-24 px-4">

      <div className="max-w-7xl mx-auto">

        {/* ================= TOP ROW ================= */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* VIDEO 1 */}
          <div className="bg-white/5 rounded-3xl p-4 shadow-xl">
            <video
              src="https://res.cloudinary.com/deofmlywm/video/upload/v1768587524/Client_Testimonial_1_1_pgw7ub.mp4"
              controls
              className="rounded-2xl w-full"
            />
          </div>

          {/* VIDEO 2 */}
          <div className="bg-white/5 rounded-3xl p-4 shadow-xl">
            <video
              src="https://res.cloudinary.com/deofmlywm/video/upload/v1771238658/Testimonial_13th_Feb_2_1_z1frjc.mp4"
              controls
              className="rounded-2xl w-full"
            />
          </div>

          {/* ================= TEXT TESTIMONIAL ================= */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-white flex flex-col items-center">

            <h3
              className="text-xl md:text-3xl font-bold mb-6 text-center"
              style={{ fontFamily: "Butler, serif" }}
            >
              Success Stories
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8">
                  “{testimonials[current].quote}”
                </p>

                <div className="flex flex-col items-center mb-6">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover mb-3 border border-white/20"
                  />
                  <h4 className="font-semibold">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[current].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? "w-8 bg-[#EFE359]" : "w-2.5 bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* arrows */}
            <div className="flex justify-between absolute top-1/2 left-0 w-full px-4 -translate-y-1/2">
              <button
                onClick={prev}
                className="bg-white/10 p-2 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="bg-white/10 p-2 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOOK UNDER ================= */}

        <div className="mt-20 flex justify-center">
          <div className="relative bg-[#111118] rounded-3xl p-10 shadow-2xl max-w-4xl text-center">

            <p className="text-[#EFE359] tracking-widest text-xs uppercase mb-3">
              Featured Book
            </p>

            <h2
              className="text-white text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Butler, serif" }}
            >
              THE SEEKER
            </h2>

            <img
              src={Book1}
              alt="The Seeker Book"
              className="w-64 md:w-80 mx-auto rounded-2xl shadow-2xl mb-6"
            />

            <p className="text-gray-400 max-w-xl mx-auto">
              Gustav Achu’s debut book guides readers through self-discovery,
              intentional living, and decision-making that shapes purpose and
              legacy.
            </p>

            <a
              href="https://buy.stripe.com/3cs4hk9uadVy5pe9AL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 py-3 px-8 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Order Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;