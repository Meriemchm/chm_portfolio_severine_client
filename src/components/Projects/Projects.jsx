import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div data-aos="fade-up" name="projects" className="md:px-20 mx-auto p-4 flex flex-col  h-full w-full">
          <div className="flex items-center mb-10">
          <p className="text-2xl md:text-4xl text-second font-bold p-2 inline ">
          Projects
          </p>

          <div className="h-0.5 flex-grow bg-second "></div>
        </div>
        <p className="text-md md:text-lg">Quelque de mes projets développement web</p>
        <Project />
    </div>
  
  );
};

export default Projects;
