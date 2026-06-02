import React from "react";

// const links = [
//   { title: "Join the Paycheck to Prosperity Webinar Now!", url: "https://buy.stripe.com/5kQbJ30fBgta3pQ8jqfw40n" },
//   { title: "Book a 1:1 call with Gustav", url: "https://calendly.com/gustavachu77/1-1-with-gustav" },
//   { title: "Subscribe to my channel", url: "https://www.youtube.com/@YouREnoughTV?sub_confirmation=1" },
//   { title: "Join the #YouREnough# community", url: "https://gustavachu.com/community" },
//   { title: "Get access to my coaching programs", url: "https://www.gustavachu.com/work-with-gustav" },
//   { title: "Subscribe to my podcast on Spotify", url: "https://open.spotify.com/show/6wFcamP6QG7tEkiml5KD9K" },
//   // { title: "The Seeker Amazon Purchase Link", url: "https://www.amazon.com/dp/B0DZJ28DCC" },
//   // { title: "Attend the Seeker launch event", url: "https://us06web.zoom.us/webinar/register/WN_Ul1nKyBRRpWJ141FTFKpdQ" },
//   { title: "Order your copy of The Seeker", url: "https://buy.stripe.com/3cs4hk9uadVy5pe9AL" },
//   // { title: "Enter our giveaway prize pool", url: "https://docs.google.com/forms/d/e/1FAIpQLSejm8qUNklDJvhK-YD4eRsftdw40xlmzlaGwlhv9Mtcn14SHA/viewform?usp=header" },
//   { title: "Join the #Yourenough# Legacy Circle ", url: "https://www.facebook.com/groups/1071370980966900/" },
//       { title: "How to Stretch Your Paycheck Without Feeling Broke Masterclass", url: "https://us06web.zoom.us/meeting/register/aSihrdhRSbi2c5u51g1Wzg#/registration" },

// ];


const links = [
  { 
    title: "Escape the Paycheck Trap (Fix It Here - Free Masterclass)", 
    url: "/wealth-masterclass" 
  },
  { 
    title: "Get a Personalized Wealth Plan in 30 Minutes", 
    url: "https://calendly.com/gustavachu77/1-1-with-gustav?month=2026-03" 
  },
  { 
    title: "Stop Guessing With Money — Build Your Wealth & Legacy Blueprint (Secure Your Spot)", 
    url: "/wealth-clarity" 
  },
  { 
    title: "Join a Community of Wealth Builders Like You", 
    url: "/community" 
  },
  { 
    title: "Turn Dead Time Into Income Knowledge 🎧 (Listen to the Podcast on Spotify)", 
    url: "https://open.spotify.com/show/6wFcamP6QG7tEkiml5KD9K" 
  },
  { 
    title: "Learn How Money Really Works (Watch on YouTube)", 
    url: "https://www.youtube.com/@YouREnoughTV" 
  },
  { 
    title: "This Book Will Change How You See Your Life → “The Seeker”", 
    url: "https://buy.stripe.com/3cs4hk9uadVy5pe9AL" 
  },
];


const LinkTree = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-8 pt-32">
      <h1 className="text-2xl font-bold mb-6">Gustav's LinkTree</h1>
      <div className="w-full max-w-md lg:max-w-xl space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gray-800 hover:bg-gray-700 transition duration-300 text-lg py-3 rounded-lg font-medium"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkTree;
