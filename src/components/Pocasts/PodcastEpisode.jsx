import React from "react";
import Spotify from "../../images/PodcastLogo/Spotify.png";
// import Apple from "../../images/PodcastLogo/Apple.png";
import Youtube from "../../images/PodcastLogo/youtube.png";
// import Google from "../../images/PodcastLogo/google.png";

const PodcastEpisode = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Listen, Watch and <span className="text-yellow-500">SUBSCRIBE</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Don’t miss any episode
        </p>
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-base leading-7 text-gray-700">
            In Gustav Achu's podcast, he takes you behind the scenes in
            real-time. Each episode is filled with practical advice, personal
            anecdotes, transformative insights, and the motivation you need to
            overcome obstacles and achieve your dreams. Whether he's sharing his
            own hilarious missteps, engaging in compelling conversations, or
            offering tools and inspiration, Gustav's goal is to empower you to
            create a better life.
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* <a
            href="https://www.apple.com/apple-podcasts/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center"
          >
            <img
              src={Apple}
              alt="Apple Podcasts"
              className="w-6 h-6 inline-block mr-2"
            />
            Listen on Apple Podcasts
          </a> */}
          <a
            href="https://open.spotify.com/show/6wFcamP6QG7tEkiml5KD9K"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center justify-center"
          >
            <img
              src={Spotify}
              alt="Spotify"
              className="w-6 h-6 inline-block mr-2"
            />
            Listen on Spotify
          </a>
          <a
            href="https://www.youtube.com/@YouREnoughTV"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center justify-center"
          >
            <img
              src={Youtube}
              alt="YouTube"
              className="w-6 h-6 inline-block mr-2"
            />
            Watch and Listen on YouTube
          </a>
          {/* <a
            href="https://podcasts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center"
          >
            <img
              src={Google}
              alt="Google Podcasts"
              className="w-6 h-6 inline-block mr-2"
            />
            Listen on Google Podcasts
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisode;
