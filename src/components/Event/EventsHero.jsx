import React, { useState, useEffect, useRef } from "react";
// import { FaTicketAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbnailImage from "../../images/EventImage/Event01.png";

export default function EventsHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showReplayButton, setShowReplayButton] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Set playback speed
    }
  }, [isVideoPlaying]);

  const handleReplay = () => {
    setShowReplayButton(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="bg-black text-white py-14 lg:py-28 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto text-center space-y-6">
         <p
        className="text-xs sm:text-sm md:text-lg lg:text-xl text-[#FCD34D] font-medium uppercase tracking-widest"
           data-aos="fade-up"
         >
           🚨 In One Hour, 30 Minutes, I’ll Help You…
         </p>
{/* 
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight" data-aos="fade-up">
          Discover why you <span className="text-red-600">remain stuck</span> in the{" "}
          paycheck-to-paycheck cycle and{" "}
          <span className="text-green-600">how to break free</span>.
        </h1> */}

        
 <h1
   className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-8xl mx-auto"
   data-aos="fade-up"
 >
   Break free from the cycle of working just to pay bills, shift your
   mindset to think like{" "}
   <span className="text-green-400">an investor</span>{" "}
  (<span className="text-red-500">not just a saver</span>), and discover
   smart, practical ways to increase your income{" "}
   <span className="text-[#FCD34D]">without quitting your 9-5.</span>
 </h1>

        <p className="text-lg lg:text-xl text-gray-200" data-aos="fade-up">
          Take the first step towards true <span className="text-[#BD9A35]">financial freedom!</span>
        </p>

        <p className="text-xl font-semibold text-white" data-aos="fade-up">
          Watch this video now to learn more!
        </p>

        {/* Video or Thumbnail */}
        <div className="w-full mt-6 flex justify-center" data-aos="fade-up">
          <div className="w-full max-w-5xl aspect-video relative rounded-lg overflow-hidden">
          {!isVideoPlaying ? (
  <div className="w-full h-full relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
    <img src={thumbnailImage} alt="Video Thumbnail" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </div>
) : (
  <div className="w-full h-full relative">
    <video
      className="w-full h-full"
      autoPlay
    
      playsInline
      controls
      ref={videoRef}
      onEnded={() => setShowReplayButton(true)}
      src="https://res.cloudinary.com/deofmlywm/video/upload/v1750710202/P2P_Ad_VSL_2nd_August_1_1_1_zdidnu.mp4"
    />
    {showReplayButton && (
      <div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
        onClick={handleReplay}
      >
        <div className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 5V1L7 6l5 5V7c2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 01-4.9-4H6a6.992 6.992 0 006 6.93V23l5-5-5-5v4a4.978 4.978 0 004.9-5A5 5 0 0012 5z" />
          </svg>
        </div>
      </div>
    )}
  </div>
)}

          </div>
        </div>

        {/* CTA Sections */}
        <h2 className="text-2xl lg:text-3xl font-bold mt-10" data-aos="fade-up">
          <span className="text-[#BD9A35]">SEATS ARE FILLING UP NOW</span> – DON'T WAIT. SECURE YOUR SPOT.
        </h2>

        <div className="mt-6 mb-20" data-aos="fade-up">
          <p className="text-lg lg:text-2xl font-medium">
            <span className="text-[#BD9A35]">Get in now for $49</span> — save a seat before it’s filled!
          </p>
{/* 
          <button
            className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-md lg:text-2xl shadow-lg transition mt-6"
            onClick={() => window.open("https://buy.stripe.com/14k7twfSy2cQ18YaEU", "_blank")}
            data-aos="zoom-in"
          >
            <FaTicketAlt className="inline-block mr-2 text-white" />
            Join the ‘Paycheck to Prosperity’ Webinar Now!
          </button> */}
          

<button
  className="bg-[#BD9A35] hover:bg-[#a7852c] text-white font-bold lg:py-10 py-4 px-4 lg:px-8 rounded-md text-md lg:text-2xl shadow-lg transition mt-6"
  onClick={() => window.open("/", "_self")}
  data-aos="zoom-in"
>
  Event Concluded – Back to Home
</button>

        </div>
      </div>
    </section>
  );
}








// import React, { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function EventsHero() {
//   const [showReplayButton, setShowReplayButton] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 1;
//       videoRef.current.play();
//     }
//   }, []);

//   const handleReplay = () => {
//     setShowReplayButton(false);
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   };

//   return (
//     <section className="bg-black text-white py-14 lg:py-28 px-4 md:px-10 relative">
//       <div className="max-w-7xl mx-auto text-center space-y-8">
//         <p
//           className="text-xs sm:text-sm md:text-lg lg:text-xl text-[#FCD34D] font-medium uppercase tracking-widest"
//           data-aos="fade-up"
//         >
//           🚨 In One Hour, 30 Minutes, I’ll Help You…
//         </p>

// <h1
//   className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-8xl mx-auto"
//   data-aos="fade-up"
// >
//   Break free from the cycle of working just to pay bills, shift your
//   mindset to think like{" "}
//   <span className="text-green-400">an investor</span>{" "}
//   (<span className="text-red-500">not just a saver</span>), and discover
//   smart, practical ways to increase your income{" "}
//   <span className="text-[#FCD34D]">without quitting your 9-5.</span>
// </h1>

//         <p
//           className="text-lg sm:text-xl font-medium text-gray-300 max-w-2xl mx-auto"
//           data-aos="fade-up"
//         >
//           Watch this video now to learn more!
//         </p>

//         {/* Video */}
//         <div className="w-full mt-6 flex justify-center" data-aos="fade-up">
//           <div className="w-full max-w-5xl aspect-video relative rounded-lg overflow-hidden">
//             <div className="w-full h-full relative">
//            <video
//   className="w-full h-full"
//   autoPlay
//   playsInline
//   controls
//   ref={videoRef}
//   onEnded={() => setShowReplayButton(true)}
//               src="https://res.cloudinary.com/deofmlywm/video/upload/v1750710202/P2P_Ad_VSL_2nd_August_1_1_1_zdidnu.mp4"
// />

//               {showReplayButton && (
//                 <div
//                   className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
//                   onClick={handleReplay}
//                 >
//                   <div className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 p-4 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-10 w-10 text-white"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                     >
//                       <path d="M12 5V1L7 6l5 5V7c2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 01-4.9-4H6a6.992 6.992 0 006 6.93V23l5-5-5-5v4a4.978 4.978 0 004.9-5A5 5 0 0012 5z" />
//                     </svg>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
