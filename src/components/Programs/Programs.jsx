
import React from "react";
import ComponenetOne from "./ComponenetOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import ComponentFour from "./ComponentFour";
import ComponentFive from "./ComponentFive";
import ComponentSix from "./ComponentSix";

const Programs = () => {
  return (
    <>
      <ComponenetOne />

      <div id="component-two" className="scroll-mt-0">
        <ComponentTwo />
      </div>

      <div id="component-three" className="scroll-mt-0">
        <ComponentThree />
      </div>

      <div id="component-four" className="scroll-mt-0">
        <ComponentFour />
      </div>

      <ComponentFive />
      <ComponentSix />
    </>
  );
};

export default Programs;
