import React from "react";

const SectionHead = () => {
  return (
    <div className="bg-[#0A081A] text-[#BD9A35] px-6 md:px-20 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Content */}
        <div className="text-center md:text-left space-y-1">
          <p className="uppercase tracking-widest text-xs sm:text-sm">
            Live Zoom Webinar • Thursday, January 29th, 2026
          </p>

          <p className="text-sm sm:text-base font-semibold text-white">
            THE WEALTH CLARITY & LEGACY BLUEPRINT
          </p>

          <p className="text-xs sm:text-sm text-gray-300">
            General Admission: <span className="text-white">6:00 PM – 7:30 PM EST</span>  
            <span className="mx-2">|</span>
            VIP: <span className="text-white">6:00 PM – 8:30 PM EST</span>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            document
              .getElementById("tickets-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#BD9A35] text-[#181349] font-semibold text-sm md:text-base px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Reserve My Seat
        </button>

      </div>
    </div>
  );
};

export default SectionHead;





// import React from "react";

// const EventBanner = () => {
//   return (
//     <div className="bg-black text-[#BD9A35] px-6 md:px-20 py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-between flex-col md:flex-row gap-3">
//         <div className="text-center md:text-left">
//           <p className="uppercase tracking-widest text-sm">
//             LIVE Zoom Webinar | Saturday August 2nd | Duration: 1h 30min | 12pm - 1:30pm EST
//           </p>
//           <p className="text-sm mt-1 italic text-white">
//             Turn your paycheck into a wealth-building machine even if you don't make{" "}
//             <span className="text-[#BD9A35]">$100k</span> or work extra hours
//           </p>
//         </div>
//         <button
//           className="bg-[#BD9A35] text-[#181349] font-semibold text-sm md:text-base px-6 py-2 hover:bg-yellow-600 transition"
//           onClick={() => window.open("https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n", "_blank")}
//         >
//           Reserve Your Spot Now!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventBanner;


