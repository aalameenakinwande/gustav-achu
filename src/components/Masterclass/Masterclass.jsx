import React from "react";
import MasterclassBanner from "./MasterclassBanner";
import EventTestimonials from "../Event/EventTestimonials";
import EventGustav from "../Event/EventGustav";
import MasterclassHero from "./MasterclassHero";
import MasterclassLearn from "./MasterclassLearn";
import MasterclassTestimonials from "./MasterclassTestimonials";
import MasterclassMindset from "./MasterclassMindset";

const Masterclass = () => {
  return (
    <>
      <MasterclassBanner />
      <MasterclassHero />
      <MasterclassLearn />
      <MasterclassTestimonials /> <EventGustav />
      <MasterclassMindset />
    </>
  );
};

export default Masterclass;
