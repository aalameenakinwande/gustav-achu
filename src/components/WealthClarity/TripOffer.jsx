import React from "react";
import ThreeSections from "./ThreeSections";
import NextThreeSections from "./NextThreeSections";
import FinalSection from "./FinalSection";
import Footer from "../Footer";
import TestimonialComponent from "./TestimonialComponent";
import Bonuses from "./Bonuses";

const TripOffer = () => {
  return (
    <>
      <ThreeSections />
      
      <NextThreeSections />
      <TestimonialComponent />

      <Bonuses />

      <FinalSection />
      <Footer />
    </>
  );
};

export default TripOffer;
