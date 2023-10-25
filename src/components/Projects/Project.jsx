import React from "react";
import { projects } from "../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
const Project = () => {
  return (
    <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 text-center py-8 px-0 justify-center items-center ">
      {projects.map(({ id, src, title, description }) => {
        return (
          <div
            key={id}
            className="mx-auto md:flex shadow-md shadow-gray-600 bg-white rounded-lg  duration-200 hover:scale-105"
          >
            <img src="" alt="" className="rounded-md h-52 w-full md:h-64 md:w-64 object-cover" />

            <div className="flex flex-col items-start justify-start text-gray-800 mx-5 my-4 ">
              <h2 className="text-bold capitalize">{title}</h2>
              <p>{description}</p>
              <div className="flex justify-end items-end">
                <button className="flex w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code{" "}
                  <span>
                    <AiFillGithub size={25} className="ml-2" />
                  </span>
                </button>
                <button className="flex w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo{" "}
                  <span>
                    <CiShare1 size={20} className="ml-2 mt-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
