import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ProgramsHero from "./ProgramsHero";
import Tenets from "./Tenets";
import WorkWithGustavGuaranteeLegacy from "./WorkWithGustavGuaranteeLegacy";
import WorkWithGustavMillionaireImmigrant from "./WorkWithGustavMillionaireImmigrant";
import WorkWithGustavPurposeMastery from "./WorkWithGustavPurposeMastery";
import WorkWithGustavOneWithGustav from "./WorkWithGustavOneWithGustav";

const WorkWithGustav = () => {
  const guaranteeLegacyRef = useRef(null);
  const millionaireImmigrantRef = useRef(null);
  const purposeMasteryRef = useRef(null);
  const oneWithGustavRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Check if the location state has a scrollTo key and scroll to the corresponding ref
    switch (location.state?.scrollTo) {
 
      case "guaranteeLegacy":
        guaranteeLegacyRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "millionaireImmigrant":
        millionaireImmigrantRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "purposeMastery":
        purposeMasteryRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "oneWithGustav":
        oneWithGustavRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
    
        <ProgramsHero />
      {/* <div ref={guaranteeLegacyRef}>
        <WorkWithGustavGuaranteeLegacy />
      </div>
      <div ref={millionaireImmigrantRef}>
        <WorkWithGustavMillionaireImmigrant />
      </div>
      <div ref={purposeMasteryRef}>
        <WorkWithGustavPurposeMastery />
      </div>
      <div ref={oneWithGustavRef}>
        <WorkWithGustavOneWithGustav />
      </div> */}

              <WorkWithGustavOneWithGustav />

        {/* <Tenets /> */}




              {/* <WorkWithGustavOne />  */}


    </>
  );
};

export default WorkWithGustav;
