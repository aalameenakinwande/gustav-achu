import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Youtube1 from "../../images/YoutubeImages/Image1.jpg";
import Youtube2 from "../../images/YoutubeImages/Image2.jpg";
import Youtube3 from "../../images/YoutubeImages/Image3.jpg";
import Youtube4 from "../../images/YoutubeImages/Image4.jpg";
import Youtube5 from "../../images/YoutubeImages/Image5.jpg";
import Youtube6 from "../../images/YoutubeImages/Image6.jpg";
import Youtube7 from "../../images/YoutubeImages/Image7.jpg";
import Youtube8 from "../../images/YoutubeImages/Image8.jpg";
import Youtube9 from "../../images/YoutubeImages/Image9.jpg";
import Youtube10 from "../../images/YoutubeImages/Image10.jpg";
import YoutubeThumbnail from "../../images/YoutubeImages/Thumbnail.jpg"; // Use the actual video thumbnail

const images = [
  Youtube1,
  Youtube2,
  Youtube3,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube7,
  Youtube8,
  Youtube7,
  Youtube8,
  Youtube9,
  Youtube10,
  Youtube6,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube8,
  Youtube9,
  Youtube10,
  Youtube6,  
  Youtube5,
  Youtube6,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube10,
  Youtube6,
  Youtube4,
  Youtube1,
  Youtube2,
  Youtube3,
  Youtube4,
  Youtube5,
  Youtube6,
  Youtube4,
];

const BigImage = () => {

  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setIsVideoEnded(true);
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      tag.onload = () => {
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      };
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  const replayVideo = () => {
    setIsVideoEnded(false);
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  return (
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 sm:px-6 h-56 sm:h-64 md:w-2/4 md:h-auto lg:w-2/4 lg:h-auto flex items-center justify-center">
<div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
      {isVideoEnded ? (
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={replayVideo}
        >
          <img
            src={YoutubeThumbnail} 
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button className="bg-white text-black py-2 px-4 rounded-lg text-lg font-semibold">
              Watch Again ▶
            </button>
          </div> */}
        </div>
      ) : (
        <iframe
          id="youtube-player"
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/77Pr7gHJbnk?enablejsapi=1&autoplay=1&mute=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  </div>
  );
};

const GustavAction = () => {
  return (
    <div className="text-white px-0 py-10 mt-6 md:mt-0 md:py-0">
      <div className="w-full h-auto pt-4 md:pt-0 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="container mx-auto py-20 sm:py-14 md:py-20 lg:py-24 relative z-20">
        <BigImage />
            <div className="sm:grid grid-cols-3 md:grid-cols-7 gap-4 relative z-0 hidden md:grid">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${index}`}
                  className="w-22 h-20 opacity-5"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <Link to="/community">
            <button className="bg-[#3C3CC8] mt-10 lg:mt-0 md:mb-10 text-white py-2 lg:py-4 px-4 w-64 text-sm lg:text-md font-semibold transform transition-transform hover:scale-105 rounded-md">
              Join our Community
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GustavAction;
