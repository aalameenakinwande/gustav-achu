import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KingsleyImage from '../../images/Testimonials/pungong.webp'
import Gilbert from '../../images/Testimonials/Gilbert.jpg'
import Charles from '../../images/Testimonials/Charles.jpeg'

const testimonials = [
  {
    title: "Dr. Atangcho Celestine",
    videoUrl:
      "https://drive.google.com/file/d/1GVKVufPVe8k57hp0uYErjG6Bag4bSsGK/preview?controls=0",
  },
  {
    title: "Kingsley Pungong",
    videoUrl:
      "https://drive.google.com/file/d/1J3qadAiLsXCICj4AHWI8nWnvvqOKIuTZ/preview?controls=0",
  },
  {
    title: "Behyia Leonard Bruce",
    videoUrl:
      "https://drive.google.com/file/d/1LmUjv-K1fU1n5NOg0AC_JQ4FkaoNt0ih/preview?controls=0",
  },
  {
    title: "Atsoh Mofor",
    videoUrl:
      "https://drive.google.com/file/d/1oDpyRjb8JPo8ZLe7JfAdONXXT4NN3zKb/preview?controls=0",
  },
  {
    title: "Charles Njoya",
    videoUrl:
      "https://drive.google.com/file/d/1tushp08E7DH3Fg79ThvQQHlOmfICqjow/preview?controls=0",
  },
  {
    title: "Pastor Ajimo",
    videoUrl:
      "https://drive.google.com/file/d/1BP6ofDUSIaJbLwKdaeqe_n45Jp0wrDmx/preview?controls=0",
  },
  {
    title: "Simonie Mpondo",
    videoUrl:
      "https://drive.google.com/file/d/1yRoK05CMuj8hiJuXPjENmvD_ZLco0Hzb/preview?controls=0",
  },
];

const texttestimonials = [
  {
    id: 1,
    name: "Kingsley Pungong",
    position: "CEO at Rainbow Sports Global",
    testimonial:
      "This work by Gustav Achu embodies his strive for excellence. It encompasses the importance of reinvention without a dilution of our core values. It speaks to those who need to be uplifted and to those who are at the very top and strive to retain their core values and maintain a gold standard.  It unlocks the secrets to high performance under a broad spectrum of conditions and defines a new paradigm. A wonderful read.",
    image: KingsleyImage,
  },
  {
    id: 2,
    name: "Gilbert Ngyia",
    position: "Founder of G-Fashion Line",
    testimonial:
      "I deeply appreciate your incredible work as a motivational speaker. Your words inspire and uplift, touching the hearts and minds of all who hear you. Your ability to ignite hope, courage, and determination makes the world a better place. Keep shining brightly!",
    image: Gilbert,
  },
  {
    id: 3,
    name: "Sir Charles Ngoya",
    position: "President & CEO at CHN Advisors",
    testimonial:
      "You're an amazing African. The passion and grit you have in giving back to the community is amazing. Thank you for educating people about wealth.",
    image: Charles,
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
       <section className="bg-gray-100 py-16">
       <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What People Are Saying
          </h2>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {texttestimonials.map(({ id, name, position, testimonial, image }, index) => (
        <div
          key={id}
          className="bg-white p-6 lg:p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between min-h-[150px] lg:min-h-[350px]"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <div>
            <p className="mb-6 text-sm lg:text-lg text-center">"{testimonial}"</p>
          </div>

          <div className="mt-6 flex justify-center items-center gap-4">
            {image && (
              <img
                src={image}
                alt={`${name}'s photo`}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 shadow-md"
              />
            )}
            <div className="text-left">
              <h4 className="text-md lg:text-lg font-semibold">{name}</h4>
              <h4 className="text-gray-600 text-md lg:text-lg font-semibold">{position}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="w-full py-16 bg-[#F3F3F3] text-center px-4">
        <div className="max-w-7xl mx-auto">
       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <iframe
                  className="w-full h-[300px] object-cover rounded-t-md"
                  src={testimonial.videoUrl}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`Video from ${testimonial.title}`}
                ></iframe>
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   


    </>
  );
};

export default TestimonialsSection;
