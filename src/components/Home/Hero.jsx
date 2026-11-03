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
      <div className="max-w-7xl mx-auto text-center space-y-6 mt-28 lg:mt-16">
        <h1 className="text-3xl lg:text-5xl  font-bold leading-tight" data-aos="fade-up">
      From 
      
      
      
        
  Bankruptcy to a  {""}
  
  
        <span className="text-[#D7CC50]" style={{ fontFamily: "Butler, serif" }}>



$1,000,000+ Portfolio –
</span>     
        
         {" "}
        
       Learn How to Make Your Money Work Harder for You 
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

<p className="max-w-6xl mx-auto text-sm lg:text-lg 2xl:text-xl text-gray-200 pt-10" data-aos="fade-up">
Gustav B. Achu helps mid- and high-income professionals, first- and second-generation immigrants, entrepreneurs/side hustlers, and families stop guessing and start building lasting wealth with a clear, repeatable system to grow and protect your money.       </p>


        <div className="mt-20 lg:mt-10 pt-5 lg:pt-10 flex flex-col md:flex-row justify-center gap-6 lg:gap-16 w-full px-4 md:px-0" data-aos="fade-up">
<button
  onClick={() =>
    navigate("/wealth-consultation")
  }
  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white py-3 px-16 lg:px-20 lg:py-6 text-sm md:text-base lg:text-lg xl:text-2xl font-semibold transition-transform hover:scale-105 rounded-md shadow-md flex items-center justify-center"
>
  Book Your 60-Min Wealth Consultation – $299
</button>

    
    </div>

    {/* What Happens In This Session */}
<div className="mt-10 max-w-4xl mx-auto bg-gradient-to-b from-[#0f0f0f] to-[#070707] border border-[#1f1f1f] rounded-xl p-8 shadow-xl">

  <h3 className="text-xl lg:text-2xl font-bold text-[#D7CC50] text-center mb-6">
    What Happens In This Session
  </h3>

  <div className="grid md:grid-cols-2 gap-6 text-sm lg:text-base text-gray-200">

    <div className="flex items-start gap-3">
      <span className="text-[#D7CC50] text-lg">✔</span>
      <p>
        <span className="font-semibold text-white">
          Structured financial architecture diagnostic —
        </span>{" "}
        not a generic coaching call
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-[#D7CC50] text-lg">✔</span>
      <p>
        Review your <span className="font-semibold text-white">capital structure, portfolio positioning</span> and investment strategy.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-[#D7CC50] text-lg">✔</span>
      <p>
        Identify <span className="font-semibold text-white">risk gaps, inefficiencies</span>, and future positioning (including AI exposure).
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-[#D7CC50] text-lg">✔</span>
      <p>
        Session fee <span className="font-semibold text-white">credited toward implementation</span> if we decide to work together.
      </p>
    </div>

    {/* Center item */}
    <div className="flex items-start justify-center gap-3 md:col-span-2 text-center">
      <span className="text-[#D7CC50] text-lg">✔</span>
      <p>
        Get a <span className="font-semibold text-white">clear, actionable roadmap</span> in just 60 minutes.
      </p>
    </div>

  </div>
</div>

       
      </div>
    </section>
  );
}

