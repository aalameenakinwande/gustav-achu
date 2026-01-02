import React from "react";
import Hero from "./Hero";
// import GustavAction from "./GustavAction";
import Books from "./Books";
import HomeAboutGustav from "./HomeAboutGustav";
import SuccessStories from "./SuccessStories";
import CommunityComponent from "./CommunityComponent ";
import NewsLetterCta from "./NewsLetterCta";
import ModalPopup from "../Quiz/InvestorQuizModal";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <GustavAction /> */}
      <HomeAboutGustav />
      <Books />
    
      <SuccessStories />
      <CommunityComponent
        title="JOIN THE #YouREnough# COMMUNITY"
        subtitle="Join other people literally designing their life and legacy. Take control of your life's purpose with our programs."
      />
      <NewsLetterCta />
            <ModalPopup />

     
    </div>
  );
};

export default Home;
