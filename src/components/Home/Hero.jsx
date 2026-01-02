// import React from 'react';
// import { Link } from 'react-router-dom';
// import HomeImage from "../../images/heroImages/HomeHero.jpeg";


// const Hero = () => {
//   return (
//     <div className="relative h-screen">
//       <img 
//         src={HomeImage} 
//         alt="Hero Background" 
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="lazy" 
//       />
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-[1440px] mx-auto">
//         <h1
//           className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-[#EFE359] mt-36 md:mt-44 lg:mt-56 2xl:mt-28"
//           style={{ fontFamily: "Butler, serif" }}
//         >
//           DESIGN YOUR LIFE AND<br /> LEGACY PURPOSEFULLY
//         </h1>
//         <p className="mb-6 mt-10 text-sm md:text-lg lg:text-xl 2xl:text-2xl md:mb-10 max-w-4xl 2xl:max-w-7xl">
//           Gustav works with entrepreneurs, brands, businesses and athletes to intentionally create their ideal ecosystem and design how they will be remembered.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row gap-4">
//         <a 
//             href="https://www.youtube.com/@YouREnoughTV"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#3C3CC8] text-white py-2 lg:py-3 px-6 w-full sm:w-auto text-sm lg:text-lg font-semibold transform transition-transform hover:scale-105 rounded-md flex items-center justify-center gap-2"
//           >
//             Watch my Videos
//             <i className="fas fa-play ml-2"></i> {/* FontAwesome play icon */}
//           </a>
//           <Link 
//             to="/resource"
//             className="bg-[#3C3CC8] text-white py-2 lg:py-3 px-6 w-full sm:w-auto text-sm lg:text-lg font-semibold transform transition-transform hover:scale-105 rounded-md"
//           >
//             Get Free Resources
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function EventsHero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-black text-white py-10 lg:py-20 px-4 md:px-10 relative">
      <div className="max-w-6xl mx-auto text-center space-y-6 mt-28 lg:mt-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold leading-tight" data-aos="fade-up">
          DESIGN YOUR LIFE AND<br />
          LEGACY PURPOSEFULLY
        </h1>

      

        {/* YouTube Video Embed */}
        <div className="w-full mt-6 flex justify-center">
  <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-7xl aspect-video relative rounded-lg overflow-hidden">
  <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/77Pr7gHJbnk?autoplay=1&mute=1&loop=1&playlist=77Pr7gHJbnk&rel=0"
  title="YouTube video player"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>

  </div>
</div>

<p className="text-sm lg:text-lg 2xl:text-xl text-gray-200 pt-10" data-aos="fade-up">
          Gustav works with entrepreneurs, brands, businesses and athletes to intentionally create their ideal ecosystem and design how they will be remembered.
        </p>


        <div className="mt-20 lg:mt-10 pt-5 lg:pt-10 flex flex-col md:flex-row justify-center gap-6 lg:gap-16 w-full px-4 md:px-0" data-aos="fade-up">
    <button
        onClick={() => navigate("/community")}
        className="w-full md:w-auto bg-[#3C3CC8] text-white py-3 px-16 text-sm md:text-base lg:text-lg font-semibold transition-transform hover:scale-105 rounded-md shadow-md flex items-center justify-center"
      >
        Join Community
      </button>

      {/* <button
        onClick={() => navigate("/events")}
        className="w-full md:w-auto bg-[#3C3CC8] text-white py-3 px-16 text-sm md:text-base lg:text-lg font-semibold transition-transform hover:scale-105 rounded-md shadow-md flex items-center justify-center"
      >
    Join Live Event -  August 2nd, 2025
      </button> */}
    </div>

       
      </div>
    </section>
  );
}

