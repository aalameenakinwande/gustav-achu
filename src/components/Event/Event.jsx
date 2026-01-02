// import React from "react";
// import EventsHero from "./EventsHero";
// import EventsFaq from "./EventsFaq";
// import EventInfo from "./EventInfo";
// import EventInvestor from "./EventInvestor";
// import EventGustav from "./EventGustav";
// import EventLearn from "./EventLearn";
// import EventBanner from "./EventBanner";
// import EventCtaThree from "./EventCtaThree";
// import EventGet from "./EventGet";
// import EventTestimonials from "./EventTestimonials";

// const Event = () => {
//   return (
//     <>
//       <EventBanner />
//       <EventsHero />

//       <EventInvestor />
//       <EventLearn />

//       <EventGustav />

//       <EventInfo />

//       <EventGet />
//       <EventTestimonials />
//       <EventsFaq />
//       <EventCtaThree />
//     </>
//   );
// };

// export default Event;


import React, { useEffect } from "react";
import EventsHero from "./EventsHero";
import EventsFaq from "./EventsFaq";
import EventInfo from "./EventInfo";
import EventInvestor from "./EventInvestor";
import EventGustav from "./EventGustav";
import EventLearn from "./EventLearn";
import EventBanner from "./EventBanner";
import EventCtaThree from "./EventCtaThree";
import EventGet from "./EventGet";
import EventTestimonials from "./EventTestimonials";
// import EventStripe from "./EventStripe";
import TrustSection from "./TrustSection";
import CountdownTimer from "./CountdownTimer";
const Event = () => {
  useEffect(() => {
    // GTM script
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PRDLX8FT');
    `;
    document.head.appendChild(gtmScript);

    // gtag.js script
    const gtagScript = document.createElement("script");
    gtagScript.setAttribute("async", "");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-GR26Z4DH0R";
    document.head.appendChild(gtagScript);

    const gtagInitScript = document.createElement("script");
    gtagInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GR26Z4DH0R');
    `;
    document.head.appendChild(gtagInitScript);

    // Cleanup
    return () => {
      document.head.removeChild(gtmScript);
      document.head.removeChild(gtagScript);
      document.head.removeChild(gtagInitScript);
    };
  }, []);

  return (
    <>
      {/* GTM noscript tag */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PRDLX8FT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="GTM"
        ></iframe>
      </noscript>

      <EventBanner />
      <EventsHero />
          <EventInfo />

      <EventInvestor />
                      <CountdownTimer hoursLeft={72} />

                <EventTestimonials />
      <EventLearn />
      <EventGustav />
  
      <EventGet />
                {/* <EventStripe /> */}
                          {/* <TrustSection /> */}



      <EventsFaq />
      <EventCtaThree />


    </>
  );
};

export default Event;
