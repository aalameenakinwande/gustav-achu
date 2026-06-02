import React from "react";
import PodcastHero from "./PodcastHero";
import PodcastYellowBanner from "./PodcastYellowBanner";
import PodcastEpisode from "./PodcastEpisode";
import PodcastVideos from "./PodcastVideos";
import PodcastAppearance from "./PodcastAppearance";

const Podcast = () => {
  return (
    <>
      <PodcastHero />
      <PodcastYellowBanner />
      <PodcastVideos />
      <PodcastEpisode />
      <PodcastAppearance />

    </>
  );
};

export default Podcast;
