import React from "react";
import WealthMasterclassNav from "./WealthMasterclassNav";
import WealthMasterclassHero from "./WealthMasterclassHero";
import WealthMasterclassTransform from "./WealthMasterclassTransform";
import WealthMasterclassWho from "./WealthMasterclassWho";
import WealthMasterclassBreakdown from "./WealthMasterclassBreakdown";
import WealthMasterclassPackage from "./WealthMasterclassPackage";
import WealthMasterclassWebinar from "./WealthMasterclassWebinar";
import WealthMasterclassGustav from "./WealthMasterclassGustav";
import WealthMasterclassFaQ from "./WealthMasterclassFaQ";
import WealthMasterTestimonials from "./WealthMasterTestimonials";

const WealthMasterclass = () => {
  return (
    <>
      <WealthMasterclassNav />
      <WealthMasterclassHero />
      <WealthMasterTestimonials /> <WealthMasterclassTransform />
      <WealthMasterclassWho />
      <WealthMasterclassBreakdown />
      <WealthMasterclassPackage />
      <div className="overflow-y-hidden">
        <WealthMasterclassWebinar />
      </div>
      <WealthMasterclassGustav />
      <WealthMasterclassFaQ />
    </>
  );
};

export default WealthMasterclass;
