import React from "react";
import Hero from "./Hero";
// import GustavAction from "./GustavAction";
import Books from "./Books";
import HomeAboutGustav from "./HomeAboutGustav";
import SuccessStories from "./SuccessStories";
import CommunityComponent from "./CommunityComponent ";
import NewsLetterCta from "./NewsLetterCta";
import LiveExperience from "./LiveExperience";

import ModalPopup from "../Quiz/InvestorQuizModal";
import HomeResource from "./HomeResource";
import HomeWorkSection from "./HomeWorkSection";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <GustavAction /> */}
      {/* <Books /> */}
    
      <SuccessStories />
      <HomeResource />
      {/* <CommunityComponent
        title="JOIN THE #YouREnough# COMMUNITY"
        subtitle="Begin Your Wealth Transformation
If you’re ready to improve your finances, make smarter investment decisions, and take control of the future you’re building, choose from Gustav’s programs designed to help you grow wealth intentionally and secure your legacy."
      /> */}
      <NewsLetterCta />

            <HomeAboutGustav />

      <div className="h-24 bg-gradient-to-b from-[#2A1FA0] to-[#0A0A0A]" />

                  <LiveExperience />
                  <HomeWorkSection />
            <ModalPopup />



{/* 
 <MeetGustav />
      <LiveExperience />
      <LegacyInsights />
      <BookTestimonials />   */}


     
    </div>
  );
};

export default Home;
