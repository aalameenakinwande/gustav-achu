import React from "react";
import Hero from "./Hero";
import GustavAction from "./GustavAction";
import Books from "./Books";
import HomeAboutGustav from "./HomeAboutGustav";
import SuccessStories from "./SuccessStories";
import CommunityComponent from "./CommunityComponent ";
import NewsLetterCta from "./NewsLetterCta";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAboutGustav />
      <GustavAction />
      <SuccessStories />
      <CommunityComponent
        title="JOIN THE #YouREnough# COMMUNITY"
        subtitle="Join other people literally designing their life and legacy. Take control of your life's purpose with our programs."
      />
      <NewsLetterCta />
      <Books />
    </div>
  );
};

export default Home;
