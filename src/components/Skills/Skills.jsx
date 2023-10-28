import React from "react";
import Skill from "./Skill";
import { techs } from "../Data/Data";
const Skills = () => {
  return (
    <div  name="compétences" className=" w-full ">
      <div className="md:px-20 mx-auto p-4 flex flex-col  w-full h-full text-white">
        <div className="flex items-center">
          <p className="text-2xl md:text-4xl text-second font-bold p-2 inline">
            Compétences
          </p>

          <div className="h-0.5 w-full bg-second"></div>
        </div>{" "}
        <Skill data={techs} />
      </div>
    </div>
  );
};

export default Skills;
