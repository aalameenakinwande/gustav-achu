import React, { useState } from "react";
// import Image1 from "../../images/YoutubeImages/Image1.jpg";
// import Image2 from "../../images/YoutubeImages/Image2.jpg";
// import Image3 from "../../images/YoutubeImages/Image3.jpg";
// import Image4 from "../../images/YoutubeImages/Image4.jpg";
// import Image5 from "../../images/YoutubeImages/Image5.jpg";
// import Image6 from "../../images/YoutubeImages/Image6.jpg";
// import Image7 from "../../images/YoutubeImages/Image7.jpg";
// import Image8 from "../../images/YoutubeImages/Image8.jpg";
// import Image9 from "../../images/YoutubeImages/Image9.jpg";
// import Image10 from "../../images/YoutubeImages/Image10.jpg";
// import Image11 from "../../images/YoutubeImages/Image11.jpg";
// import Image12 from "../../images/YoutubeImages/Image12.jpg";
import Image13 from "../../images/YoutubeImages/Image13.jpg";
import Image14 from "../../images/YoutubeImages/Image14.jpg";
import Image15 from "../../images/YoutubeImages/Image15.jpg";

const podcastData = [
  {
    episode: 15,
    title:
      "Empowering African Youth in the Global Economy | Suellaba FM | Part 3",
    author: "Gustav Achu",
    date: "28/06/2024",
    image: Image14,
    link: "https://www.youtube.com/watch?v=pxa7nhSrBxI",
  },
  {
    episode: 14,
    title:
      "Empowering African Youth in the Global Economy | Suellaba FM | Part 2",
    author: "Gustav Achu",
    date: "21/06/2024",
    image: Image15,
    link: "https://www.youtube.com/watch?v=vFgD_tKG1Oc",
  },
  {
    episode: 13,
    title:
      "Empowering African Youth in the Global Economy | Suellaba FM | Part 1",
    author: "Gustav Achu",
    date: "14/06/2024",
    image: Image13,
    link: "https://www.youtube.com/watch?v=EpQl7i9857c",
  },

  // {
  //   episode: 12,
  //   title: "How Anyone Can Bounce Back From Rock Bottom",
  //   author: "Gustav Achu",
  //   date: "07/06/2024",
  //   image: Image12,
  //   link: "https://www.youtube.com/watch?v=IQpF7x54vfQ",
  // },
  // {
  //   episode: 11,
  //   title: "The Surprising Benefits Of Embracing Failure",
  //   author: "Gustav Achu",
  //   date: "31/05/2024",
  //   image: Image11,
  //   link: "https://www.youtube.com/watch?v=q7FGXz_38ZI",
  // },
  // {
  //   episode: 10,
  //   title: "Here's The TRICK To Finding Genuine Happiness",
  //   author: "Gustav Achu",
  //   date: "24/05/2024",
  //   image: Image10,
  //   link: "https://www.youtube.com/watch?v=U1lvCGusGqQ&t=12s",
  // },
  // {
  //   episode: 9,
  //   title: "You Can Predict Your Own Future LIKE THIS!",
  //   author: "Gustav Achu",
  //   date: "17/05/2024",
  //   image: Image9,
  //   link: "https://www.youtube.com/watch?v=BaCWE9HmSmY&t=6s",
  // },
  // {
  //   episode: 8,
  //   title: "Are You A Victim Of Social Media Influence?",
  //   author: "Gustav Achu",
  //   date: "10/05/2024",
  //   image: Image8,
  //   link: "https://www.youtube.com/watch?v=0Mq91Yo4EO8&t=6s",
  // },
  // {
  //   episode: 7,
  //   title: "Breaking Free from Doubt: Embrace Confidence",
  //   author: "Gustav Achu",
  //   date: "03/05/2024",
  //   image: Image7,
  //   link: "https://www.youtube.com/watch?v=JmZ-JuuKQCw&t=5s",
  // },
  // {
  //   episode: 6,
  //   title: "Key Assets for a Secure Future: 7 Investments to Acquire by Age 40",
  //   author: "Gustav Achu",
  //   date: "26/04/2024",
  //   image: Image6,
  //   link: "https://www.youtube.com/watch?v=WbxGwkQJiT8&t=16s",
  // },
  // {
  //   episode: 5,
  //   title: "6 Habits That Made My First 6 Figures - Gustav B Achu YouREnoughTV",
  //   author: "Gustav Achu",
  //   date: "19/04/2024",
  //   image: Image5,
  //   link: "https://www.youtube.com/watch?v=nwVlUhJzp14&t=2s",
  // },
  // {
  //   episode: 4,
  //   title: "How not to quit when things get too hard",
  //   author: "Gustav Achu",
  //   date: "12/04/2024",
  //   image: Image4,
  //   link: "https://www.youtube.com/watch?v=40lPvZqOm7s&t=3s",
  // },
  // {
  //   episode: 3,
  //   title:
  //     "How to walk your own path Face Your regrets and Build a life of Massive success",
  //   author: "Gustav Achu",
  //   date: "05/04/2024",
  //   image: Image3,
  //   link: "https://www.youtube.com/watch?v=2DED6B5Fx2E&t=4s",
  // },
  // {
  //   episode: 2,
  //   title: "Build Bridges Not Walls: Navigating relationships in a digital age",
  //   author: "Gustav Achu",
  //   date: "22/03/2024",
  //   image: Image2,
  //   link: "https://www.youtube.com/watch?v=VtUEdoqEoUE",
  // },
  // {
  //   episode: 1,
  //   title: "Build Bridges Not Walls: Navigating relationships in a digital age",
  //   author: "Gustav Achu",
  //   date: "22/03/2024",
  //   image: Image1,
  //   link: "https://www.youtube.com/watch?v=Q-X_zt4Nftc",
  // },
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
          .slice(0, showMore ? podcastData.length : 3)
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
        {/* <button
          onClick={handleShowMore}
          className="bg-[#181349] text-white px-8 py-3 rounded-md  hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {showMore ? "Show Less" : "Show More"}
        </button> */}
      </div>
    </div>
  );
};

export default PodcastVideos;
