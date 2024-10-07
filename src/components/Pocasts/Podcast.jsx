import React from "react";
import PodcastHero from "./PodcastHero";
import PodcastYellowBanner from "./PodcastYellowBanner";
import PodcastEpisode from "./PodcastEpisode";
import PodcastVideos from "./PodcastVideos";

const Podcast = () => {
  return (
    <>
      <PodcastHero />
      <PodcastYellowBanner />
      <PodcastVideos />
      <PodcastEpisode />

    </>
  );
};

export default Podcast;
