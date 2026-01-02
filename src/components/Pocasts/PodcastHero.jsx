
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PodcastHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-black text-white py-10 lg:py-20 px-4 md:px-10 relative">
      <div className="max-w-6xl mx-auto text-center space-y-6 mt-32 lg:mt-20">
        {/* <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold leading-tight" data-aos="fade-up">
          DESIGN YOUR LIFE AND<br />
          LEGACY PURPOSEFULLY
        </h1>

        <p className="text-sm lg:text-lg 2xl:text-xl text-gray-200" data-aos="fade-up">
          Gustav works with entrepreneurs, brands, businesses and athletes to intentionally create their ideal ecosystem and design how they will be remembered.
        </p> */}

        {/* YouTube Video Embed */}
        <div className="w-full mt-6 flex justify-center">
  <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-7xl aspect-video relative rounded-lg overflow-hidden">
  <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/NwGH3c_V8XA?autoplay=1&loop=1&playlist=NwGH3c_V8XA&rel=0"
  title="YouTube video player"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>

  </div>
</div>

{/* 
        <div className="mt-20 lg:mt-10 pt-7 lg:pt-20 flex flex-col md:flex-row justify-center gap-4 w-full px-4 md:px-0" data-aos="fade-up">
 <Link
    to="/community"
    className="w-full md:w-auto bg-[#3C3CC8] text-white py-3 px-8 text-sm md:text-base lg:text-lg font-semibold transition-transform hover:scale-105 rounded-md shadow-md flex items-center justify-center gap-2"
  >
  
   Join our Community
   </Link>

  <Link
    to="/events"
    className="w-full md:w-auto bg-[#3C3CC8] text-white py-3 px-8 text-sm md:text-base lg:text-lg font-semibold transition-transform hover:scale-105 rounded-md shadow-md flex items-center justify-center"
  >
     Join our Event
  </Link>
</div> */}


       
      </div>
    </section>
  );
}

