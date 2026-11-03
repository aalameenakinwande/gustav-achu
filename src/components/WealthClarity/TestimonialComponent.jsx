
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import davidImage from '../../images/EventImage/2.png';
import sarahImage from '../../images/EventImage/1.jpeg';
import michaelImage from '../../images/EventImage/3.png';

const testimonials = [
  {
    name: "Sarah, C.",
    role: "Registered Nurse",
    image: sarahImage,
    quote:
      "I was earning an income, but I wanted a clearer plan for turning it into long-term wealth. The biggest thing I needed was direction and a better understanding of my next steps. This gave me a framework to start thinking more intentionally about my financial future.",
  },
  {
    name: "Jonah, E.",
    role: "Software Engineer",
    image: davidImage,
    quote:
      "I wanted to do more with the money I was earning, but knowing where to start was the challenge. Having resources to help me assess my finances, organize my goals, and understand wealth-building strategies gave me a more structured starting point.",
  },
  {
    name: "Steve, B.",
    role: "Business Consultant",
    image: michaelImage,
    quote:
      "Building wealth requires more than earning money. I wanted to become more deliberate about my financial decisions and focus on the bigger picture. This experience reinforced the importance of having clear goals and a plan for working toward them.",
  },
];

const testimonialVideos = [
  {
    src: "https://res.cloudinary.com/deofmlywm/video/upload/v1768587524/Client_Testimonial_1_1_pgw7ub.mp4",
    label: "Client Testimonial 01",
  },
  {
    src: "https://res.cloudinary.com/deofmlywm/video/upload/v1771238658/Testimonial_13th_Feb_2_1_z1frjc.mp4",
    label: "Client Testimonial 02",
  },
];

const TestimonialComponent = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080808] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
       

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            They Stopped Guessing.
            <span className="mt-2 block text-[#D4AF37]">
              They Started Building.
            </span>
          </h2>
        </motion.div>

        {/* Video Testimonials */}
        <div className="mb-16 flex flex-col items-center justify-center gap-8 md:mb-20 md:flex-row">
          {testimonialVideos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-[280px] overflow-hidden rounded-2xl shadow-lg sm:w-[320px] md:w-[340px] lg:w-[360px]"
            >
              <video
                src={video.src}
                controls
                muted
                autoPlay
                playsInline
                preload="metadata"
                aria-label={video.label}
                className="block aspect-[9/16] h-auto w-full object-cover"
              >
                Your browser does not support video playback.
              </video>
            </motion.div>
          ))}
        </div>

        {/* Written Testimonials Heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-8 shrink-0 bg-[#D4AF37]" />

          <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs">
            In Their Own Words
          </p>

          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Written Testimonials */}
     <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  {testimonials.map((testimonial, index) => (
    <motion.article
      key={testimonial.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        group flex h-full flex-col
        rounded-xl border border-white/10
        bg-white/[0.025] p-6
        transition-colors duration-300
        hover:border-[#D4AF37]/30
        sm:p-7
      "
    >
      {/* Quote Icon */}
      <Quote
        size={24}
        strokeWidth={1.5}
        className="mb-4 text-[#D4AF37]"
      />

      {/* Testimonial Text */}
      <p className="flex-1 text-sm leading-7 text-white/65 sm:text-[15px]">
        “{testimonial.quote}”
      </p>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-white/10" />

      {/* Client Details: Image Left, Name and Role Right */}
      <div className="flex items-center gap-3">
        {/* Circular Client Image */}
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="
            h-12 w-12 shrink-0 rounded-full
            border border-white/10
            object-cover object-center
          "
        />

        {/* Name and Role */}
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-xs text-white/45 sm:text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.article>
  ))}
</div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
