import React, { useState } from "react";
import SecureAccessModal from "./SecureAccessModal";
import HeaderImage from '../../images/gustavImages/EventGustav.webp';


const SecureAccess = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <SecureAccessModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />

      <section className="w-full bg-[#0B0B0B] text-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6">
   
         <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
                {/* HEADLINE */}
                <div className="text-center space-y-4 sm:space-y-6">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                    You’re Not Behind. You Just Need Financial Clarity.
                  </h1>
      
                  <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-3xl mx-auto">
                    If you’re earning but still feel uncertain about how to grow,
                    protect, and multiply your money — this live Webinar will give you
                    a clear 90-day wealth plan.
                  </p>
                </div>
                 <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
  <video
    controls
    preload="metadata"
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/deofmlywm/video/upload/v1768920927/DOWN_1_dmr0gl.mp4"
  >
    Your browser does not support the video tag.
  </video>
</div>
      
                {/* PAIN MIRROR */}
                <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 sm:p-8 md:p-10 space-y-6">
                  <p className="text-base sm:text-lg font-semibold">Be honest…</p>
      
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                    <li>• Are you earning but not building real wealth?</li>
                    <li>• Do you feel unsure about investing consistently?</li>
                    <li>• Do you want legacy but lack structure?</li>
                    <li>• Are you tired of guessing with your money?</li>
                  </ul>
      
                  <div className="pt-4 border-t border-gray-800 space-y-2">
                    <p className="text-base sm:text-lg">
                      If you answered yes to any of these…
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500">
                      You don’t need more motivation.{" "}
                      <br className="hidden sm:block" />
                      You need a system.
                    </p>
                  </div>
                </div>
      
                {/* SOLUTION INTRO */}
                {/* <div className="space-y-6 text-left md:text-center">
                  <p className="text-base sm:text-lg md:text-xl">
                    On <span className="font-semibold">Thursday, February 26th</span>,
                    Gustav B. Achu will walk you step-by-step through building:
                  </p>
      
                  <ul className="space-y-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-left">
                    <li>✔ A Clear 90-Day Wealth Plan</li>
                    <li>✔ A Simple Wealth System</li>
                    <li>✔ An Income Structuring Strategy</li>
                    <li>✔ A Path to grow wealth without quitting your 9–5</li>
                  </ul>
      
                  <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                    This is a live 90-minute Webinar designed for people who are ready
                    to stop guessing and start executing.
                  </p>
                </div>
 */}


                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  
                  {/* LEFT — IMAGE */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={HeaderImage}
                      alt="Wealth Webinar Event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                
                  {/* RIGHT — TEXT (UNCHANGED COPY) */}
                   <div className="space-y-6 text-left md:text-center">
                  <p className="text-base sm:text-lg md:text-xl">
                    On <span className="font-semibold">Thursday, February 26th</span>,
                    Gustav B. Achu will walk you step-by-step through building:
                  </p>
      
                  <ul className="space-y-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-left">
                    <li>✔ A Clear 90-Day Wealth Plan</li>
                    <li>✔ A Simple Wealth System</li>
                    <li>✔ An Income Structuring Strategy</li>
                    <li>✔ A Path to grow wealth without quitting your 9–5</li>
                  </ul>
      
                  <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                    This is a live 90-minute Webinar designed for people who are ready
                    to stop guessing and start executing.
                  </p>
                </div>


                
                </div>
      
                {/* QUALIFICATION SECTION */}
                <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 sm:p-8 md:p-10 space-y-5">
                  <p className="text-base sm:text-lg font-semibold">
                    This Webinar is best for people who:
                  </p>
      
                  <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                    <li>✔ Earn $40,000+ annually</li>
                    <li>✔ Want structure, not hype</li>
                    <li>✔ Are serious about building wealth and legacy</li>
                    <li>✔ Are ready to take action in the next 90 days</li>
                  </ul>
      
                  {/* <p className="pt-2 text-base sm:text-lg">
                    If that sounds like you…
                  </p> */}
                </div>
      
                {/* CTA */}
                <div className="text-center space-y-4">
               <button
  onClick={() => setIsOpen(true)}
  className="inline-block w-full sm:w-auto bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg md:text-xl shadow-lg"
>
I’m Done Living Without Clarity — Show Me The Plan</button>

      
                  <p className="text-xs sm:text-sm text-gray-400">
                    Live Zoom Webinar • 90 Minutes • Limited Access
                  </p>
                </div>
              </div>
      </section>
    </>
  );
};

export default SecureAccess;
