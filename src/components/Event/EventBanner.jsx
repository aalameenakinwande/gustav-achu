import React from "react";

const EventBanner = () => {
  return (
    <div className="bg-black text-[#BD9A35] px-6 md:px-20 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-col md:flex-row gap-3">
        {/* <p className="uppercase tracking-widest text-sm text-center md:text-left">
          LIVE Zoom Webinar | Saturday May 31 | Duration: 1h 30min | 12pm - 1:30pm EST
        </p> */}

           <div className="text-center md:text-left">
      <p className="uppercase tracking-widest text-sm">
             LIVE Zoom Webinar | Saturday August 2nd | Duration: 1h 30min | 12pm - 1:30pm EST
           </p>
           <p className="text-sm mt-1 italic text-white">
             Turn your paycheck into a wealth-building machine even if you don't make{" "}
             <span className="text-[#BD9A35]">$100k</span> or work extra hours
           </p>
         </div>
        {/* <button
  className="bg-[#BD9A35] text-[#181349] font-semibold text-sm md:text-base px-6 py-2 hover:bg-yellow-600 transition"
  onClick={() => window.open("https://buy.stripe.com/14k7twfSy2cQ18YaEU", "_blank")}
>
  YES I WANT TO JOIN NOW
</button> */}

    <button
  className="bg-[#BD9A35] text-[#181349] font-semibold text-sm md:text-base px-6 py-2 hover:bg-yellow-600 transition"
  onClick={() => window.open("/", "_self")}
>
  Event Concluded – Back to Home
</button>

      </div>
    </div>
  );
};

export default EventBanner;


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


