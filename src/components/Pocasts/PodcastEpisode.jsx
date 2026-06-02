import React from "react";
import Spotify from "../../images/PodcastLogo/Spotify.png";
// import Apple from "../../images/PodcastLogo/Apple.png";
import Youtube from "../../images/PodcastLogo/youtube.png";
// import Google from "../../images/PodcastLogo/google.png";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";


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
                     {/* CARDS */}
          <div className="grid md:grid-cols-1 mt-5 gap-6">
            {[
              { title: "Podcast Conversations", time: "Bi-weekly Tuesdays • 9AM EST" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#161616] to-[#0D0D0D] border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <h4 className="font-semibold text-lg text-white">{item.title}</h4>
                <p className="text-white mt-1 text-sm md:text-md">{item.time}</p>
              </div>
            ))}
          </div>
        </div>


  


{/* SOCIAL MEDIA */}

{/* SOCIAL MEDIA */}
<div className="mt-20 px-6">
  <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">

    {/* Subtle Glow */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#BD9A35]/20 blur-3xl rounded-full"></div>

    {/* Heading */}
    <h4 className="text-white text-xl font-semibold mb-2">
      Connect with Gustav
    </h4>
    <p className="text-white/60 text-sm mb-8">
      Join the conversation across platforms
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-5">
      
      <a
        href="https://www.linkedin.com/in/gustav-achu-618780103?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#121212] border border-white/10 hover:border-[#BD9A35] hover:bg-[#BD9A35]/10 text-white px-6 py-3 rounded-xl transition-all duration-300 group"
      >
        <FaLinkedin className="text-lg group-hover:text-[#BD9A35]" />
        <span className="font-medium">LinkedIn</span>
      </a>

      <a
        href="https://www.instagram.com/gachu77"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#121212] border border-white/10 hover:border-[#BD9A35] hover:bg-[#BD9A35]/10 text-white px-6 py-3 rounded-xl transition-all duration-300 group"
      >
        <FaInstagram className="text-lg group-hover:text-[#BD9A35]" />
        <span className="font-medium">Instagram</span>
      </a>

      <a
        href="https://www.youtube.com/@YouREnoughTV"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#121212] border border-white/10 hover:border-[#BD9A35] hover:bg-[#BD9A35]/10 text-white px-6 py-3 rounded-xl transition-all duration-300 group"
      >
        <FaYoutube className="text-lg group-hover:text-[#BD9A35]" />
        <span className="font-medium">YouTube</span>
      </a>

      <a
        href="https://web.facebook.com/gustav.achu.1/?_rdc=1&_rdr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#121212] border border-white/10 hover:border-[#BD9A35] hover:bg-[#BD9A35]/10 text-white px-6 py-3 rounded-xl transition-all duration-300 group"
      >
        <FaFacebook className="text-lg group-hover:text-[#BD9A35]" />
        <span className="font-medium">Facebook</span>
      </a>

    </div>
  </div>
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
