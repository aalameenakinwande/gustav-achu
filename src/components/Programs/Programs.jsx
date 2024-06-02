import React from "react";
import ProgramsHero from "./ProgramsHero";
import ProgramsCount from "./ProgramsCount";
import Cta from "../Home/Cta";
import ProgramText from "./ProgramText";
import ProgramDetails from "./ProgramDetails";
import NewsLetter from "../Home/NewsLetter";
import ProgramsExplore from "./ProgramsExplore";
import ProgramWorth from "./ProgramWorth";

const Programs = () => {
  return (
    <>
      <ProgramsHero />
      <ProgramsCount />
      <ProgramText />
      <Cta />
      <ProgramDetails />
      <ProgramWorth />
      <ProgramsExplore />
      <NewsLetter />
    </>
  );
};

export default Programs;
