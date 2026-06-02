import React, { useState } from "react";
import PodcastImage from "../../images/YoutubeImages/PoscastImage.webp";

const podcastData = [
    
    {
    episode: 24,
    author: "Money Experts: #1 Formula to Get Rich off Your Normal Salary| Ep24",
    date: "03/03/2026",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=6DvMQUfCOuc",
  },

    {
    episode: 23,
    author: "Why High Earners Stay Broke (And How This Millionaire Escaped the 9–5 rat race)| Ep23",
    date: "03/01/2026",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=ywy4WTt_elM",
  },

    {
    episode: 22,
    author: "MHow JJ Vikings Became the Youngest NFL Analyst on YouTube| Ep22",
    date: "20/01/2026",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=aOzLG7ddeKw",
  },

    {
    episode: 21,
    author: "Money and Marriage Truths No One Talks About| Ep21",
    date: "06/01/2026",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=grdUGrzT67k",
  },

    {
    episode: 20,
    author: "Investing Expert: If I started Investing In 2026, This is What I would Do| Ep20",
    date: "16/12/2025",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=tQNhOi6kY9A",
  },

    {
    episode: 19,
    author: "Build the Mental Habits of the Wealthy| Ep19",
    date: "2/12/2025",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=Hsud_W4Sk_c",
  },

    {
    episode: 18,
    author: "The AI Bubble is About to Burst? How to Protect Yourself| Ep18",
    date: "18/11/2025",
    image: PodcastImage,
    link: "https://www.youtube.com/watch?v=yQkHok2iqzY",
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
    episode: 17,
    author: "Money Experts: #1 Formula to Get Rich off Your Normal Salary| Ep17",
    date: "28/10/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/7e2xAIQHEFWsbYUFI08ieN?si=40bd2c394ba64885",
  },
     {
    episode: 16,
    author: "This is Why You Are Failing | Ep16 Dr. Toye Sobande",
    date: "14/10/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/3nzl1hRIWW9yFYND3M6FzE?si=a7863424b9d54f00",
  },
  {
    
    episode: 15,
    author: "The Best Financial Advice You'll Ever Get | Ep15",
    date: "01/10/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/27Ts0PlXkYgIDLWvaCElaR?si=63821e888bc948ef",
  },
  {
    episode: 14,
    author: "How to Get Rich In Real Estate The Right Way | Ep14 Tenny Tolofari ",
    date: "02/08/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/27qSiGZfDVHXRJkGbneEFX?si=7ac25c28b2494807",
  },


  {
    episode: 13,
    author: "How This African Immigrant Built a $200M Real Estate Empire (and how you can too!) | Ep13",
    date: "05/08/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/0yWmTnPUiSz5PQ8H54mGfL?si=9c45caed273d42ea",
  },



  {
    episode: 12,
    author: "The Hard Truth About Your 40s (And How to Thrive) | Ep.12 Pastor Ajimo",
    date: "22/07/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/5lTOLPXZsdTOwXZWKUGpWE?si=b700ad79a4354e34",
  },


  {
    episode: 11,
    author: "From Adhd to Award-Winner: Wax Dey's Untold Journey | Ep.11 Wax Dey",
    date: "08/07/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/5y4vzjGwAcjcgYYmL2jnaq?si=0175afa6e5484689",
  },




  {
    episode: 10,
    author: "How To Ethically Charge More 10X (Doing Less!) | Ep.10 Dr. Joybert Javnyuy",
    date: "24/06/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/4gtfKTjHPB22UtnLWK6h3Z?si=d1c72c0d506a4634",
  },




  {
    episode: 9,
    author: "How Financial Ignorance Destroyed My First Home Investment | Ep9",
    date: "03/06/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/2HuwvQiMV6yjRtfZ4bbtEq?si=5d1eb32a75a443ae",
  },
    {
    episode: 8,
    author: "How the Rich AVOID Paying Taxes (And How You Can Join Them) | Episode 8- Sir Charles Njoya",
    date: "20/05/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/3TyU05LM16SnDQWVzNDrTw?si=3f29e1e73d604be0",
  },
    {
    episode: 7,
    author: "From Jobless Nigerian Immigrant to Top 20 Black Men in Canada | Ep7- Paul Adeyeye's Shocking Story",
    date: "06/05/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/0muy7QxDHJQCZimeTxIkfT?si=74f1dacc9d2b42bc",
  },
  {
    
    episode: 6,
    author: "Immigrant Millionaire Exposes Why Most Immigrants Stay Poor in America | Ep6- Douglas Eze",
    date: "29/04/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/1sfjU6Rp0qw29G3myv50SV?si=8170d798259741fb",
  },
  {
    episode: 5,
    author: "The $1 Product Everyone Will Be Using in 5 Years | Ep5- Derrick Tansi",
    date: "15/04/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/1jwQuJXIQSkgLE58sZGjBd?si=4540b66443524e47",
  },
  {
    episode: 4,
    author: "How to Build a Recession Proof Career in an AI Driven World! | Ep4- Karl Melo",
    date: "08/04/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/3IuoBR5rsnoKOrtB6fUP3P?si=GkSH8PeuTsiyW_mMfGnMnw",
  },
  {
    episode: 3,
    author: "How He Built a Global Sports Empire from Scratch | Ep3- Kingsley Pungong",
    date: "01/04/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/2LArc3oWwnxxDWi8IXKOPO?si=b29737d60a6e4421",
  },
  {
    episode: 2,
    author: "Are African Youths Ready to Compete Globally? | Ep2- Leonard Bruce Behyia",
    date: "25/03/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/12vwEu2h3dZeMrB1eoU1A7?si=ddb18f1e8743401b",
  },
  {
    episode: 1,
    author: "Heinrich Edimo | What the Wealthy Know About Investing That You Don’t | Ep1- Dr.Heinrich Edimo",
    date: "15/03/2025",
    image: PodcastImage,
    link: "https://open.spotify.com/episode/5iDARX7itLiZ6SwRyJHUFm",
  },
];

const PodcastVideos = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  console.log(handleShowMore)
  return (
    <div className="max-w-7xl mx-auto p-3 py-7 md:p-20">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {podcastData
          .slice(0, showMore ? podcastData.length : 6)
          .map((podcast, index) => (
            <a
              key={index}
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#3C3CC8] text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              <div className="absolute top-2 left-2 bg-yellow-500 text-black px-1 py-1 rounded-full text-xs font-bold z-10">
                Episode: {podcast.episode}
              </div>
              <img
                src={podcast.image}
                alt={`Episode ${podcast.episode}`}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="font-semibold mt-2 text-sm md:text-md">
                  {podcast.title}
                </h2>
                <p className="mt-2 text-sm">{podcast.author}</p>
                <p className="mt-2 text-sm">{podcast.date}</p>
              </div>
            </a>
          ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleShowMore}
          className="bg-[#181349] text-white px-8 py-3 rounded-md  hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default PodcastVideos;
