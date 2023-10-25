import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div name="projects" className="md:px-20 mx-auto p-4 flex flex-col  h-full w-full">
          <div className="flex items-center mb-10">
          <p className="text-2xl md:text-4xl text-second font-bold p-2 inline ">
          Projects
          </p>

          <div className="h-0.5 w-full bg-second md:ml-10"></div>
        </div>
        <Project />
    </div>
  
  );
};

export default Projects;
