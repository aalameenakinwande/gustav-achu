import React from "react";
// import SectionHead from "./SectionHead";
import WealthSectionOne from "./WealthSectionOne";
import WealthSectionTwo from "./WealthSectionTwo";
import WealthSectionThree from "./WealthSectionThree";
import WealthSectionFour from "./WealthSectionFour";
import WealthSectionFive from "./WealthSectionFive";
import WealthHero from "./WealthHero";
import Footer from "../Footer";

const WealthConsultation = () => {
  return (
    <>
      {/* <SectionHead /> */}
      <WealthHero />
      <WealthSectionOne />
      <WealthSectionTwo />
      <WealthSectionThree />
      <WealthSectionFour />
      <WealthSectionFive />
      <Footer />

    
  
    </>
  );
};

export default WealthConsultation;
