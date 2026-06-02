
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
      

        {/* YouTube Video Embed */}
        <div className="w-full mt-6 flex justify-center">
  <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-7xl aspect-video relative rounded-lg overflow-hidden">
  <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/yJDGFolOdvc?rel=0&modestbranding=1"
  title="YouTube video player"
  frameBorder="0"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  loading="lazy"
/>
  </div>
</div>


       
      </div>
    </section>
  );
}

